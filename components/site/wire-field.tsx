"use client"

import { useEffect, useRef } from "react"
import { usePrefersReducedMotion } from "./primitives"

/**
 * A field of fine lines. `build` returns each line's SVG path for a given
 * moment, so the lines can draw in, then drift slowly and lean toward the pointer.
 *
 *  i       line index
 *  t       0..1 position of this line within the bundle
 *  time    seconds since mount (0 when motion is off)
 *  px, py  pointer position over the field, -1..1 (0 when idle)
 */
export type WireBuilder = (i: number, t: number, time: number, px: number, py: number) => string

/* Round coordinates so server and browser render identical markup (and paths stay short). */
const tidy = (d: string) => d.replace(/-?\d+\.\d+/g, (n) => (Math.round(Number(n) * 10) / 10).toString())

export function WireField({
  count,
  build,
  viewBox,
  className,
  strokeWidth = 0.7,
  drawStagger = 14,
  opacity = (t: number) => 0.18 + 0.55 * (1 - Math.abs(t - 0.5) * 2) ** 0.6,
}: {
  count: number
  build: WireBuilder
  viewBox: string
  className?: string
  strokeWidth?: number
  drawStagger?: number
  opacity?: (t: number) => number
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathsRef = useRef<(SVGPathElement | null)[]>([])
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const svg = svgRef.current
    if (!svg) return

    let raf = 0
    let visible = true
    const t0 = performance.now()
    const target = { x: 0, y: 0 }
    const pointer = { x: 0, y: 0 }

    const onMove = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect()
      target.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1))
      target.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1))
    }
    const onLeave = () => {
      target.x = 0
      target.y = 0
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      // ease the pointer so the lines glide rather than snap
      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05
      const time = (now - t0) / 1000
      for (let i = 0; i < count; i++) {
        const p = pathsRef.current[i]
        if (p) p.setAttribute("d", tidy(build(i, i / (count - 1), time, pointer.x, pointer.y)))
      }
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(svg)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
    }
  }, [build, count, reduced])

  return (
    <svg ref={svgRef} viewBox={viewBox} className={className} preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const t = i / (count - 1)
        return (
          <path
            key={i}
            ref={(el) => {
              pathsRef.current[i] = el
            }}
            d={tidy(build(i, t, 0, 0, 0))}
            pathLength={1}
            fill="none"
            stroke="var(--wire)"
            strokeOpacity={Math.round(opacity(t) * 1000) / 1000}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            className="wire-draw"
            style={{ animationDelay: `${i * drawStagger}ms` }}
            // once drawn, drop the dash pattern so the line is a plain solid stroke
            onAnimationEnd={(e) => e.currentTarget.classList.remove("wire-draw")}
          />
        )
      })}
    </svg>
  )
}
