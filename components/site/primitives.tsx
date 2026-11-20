"use client"

import { useEffect, useRef, useState, type ComponentProps, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />
}

/** Pill label with a dot, used above every section heading. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-2",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-ink" />
      {children}
    </span>
  )
}

export function Heading({
  as: Tag = "h2",
  className,
  ...props
}: ComponentProps<"h2"> & { as?: "h1" | "h2" | "h3" }) {
  return <Tag className={cn("font-display font-semibold tracking-[-0.045em] text-balance text-ink", className)} {...props} />
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow: string
  title: ReactNode
  body?: string
  className?: string
}) {
  return (
    <Reveal className={cn("mx-auto max-w-xl text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading className="mt-4 text-4xl leading-[1.05] sm:text-5xl">{title}</Heading>
      {body && <p className="mt-4 text-[15px] leading-7 text-ink-2">{body}</p>}
    </Reveal>
  )
}

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"

export const buttonStyles = {
  signal: cn(pill, "bg-signal px-5 py-3 text-white hover:bg-signal-hover hover:shadow-[0_8px_20px_rgba(220,65,40,0.28)] focus-visible:outline-signal"),
  outline: cn(pill, "border border-line-strong bg-white/50 px-5 py-3 text-ink hover:border-ink-3 hover:bg-white focus-visible:outline-ink"),
}

/** The Orvexa mark: a ring split by a vertical stroke. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 4.5v15" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  )
}

/** True once the element has scrolled into view (and stays true). */
export function useInView<T extends Element>(options: IntersectionObserverInit = { threshold: 0.25 }) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView] as const
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

/** Fades its children up when they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li" | "article"
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15, rootMargin: "0px 0px -40px 0px" })
  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      data-visible={inView}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  )
}

/** Counts from 0 to `value` when `start` becomes true. */
export function CountUp({
  value,
  start,
  duration = 1400,
  format = (n: number) => n.toLocaleString("en-US"),
}: {
  value: number
  start: boolean
  duration?: number
  format?: (n: number) => string
}) {
  const [n, setN] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setN(value)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value, duration, reduced])

  return <>{format(n)}</>
}

/** Event that switches the demo form's product field. */
export const SELECT_PRODUCT_EVENT = "orvexa:select-product"

export function selectProduct(id: string) {
  window.dispatchEvent(new CustomEvent(SELECT_PRODUCT_EVENT, { detail: id }))
}
