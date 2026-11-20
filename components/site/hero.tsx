"use client"

import type { CSSProperties } from "react"
import { hero, company } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buttonStyles, Container, Eyebrow, Heading, LogoMark } from "./primitives"
import { WireField, type WireBuilder } from "./wire-field"

/*
 * The hero line bundle: lines enter from both edges, squeeze through two
 * pinch points, and sag into a cradle under the logo tile. Order flips at
 * each pinch, so the highest line at the edge becomes the lowest in the middle.
 */
const W = 1000
const buildHeroWire: WireBuilder = (_i, t, time, px, py) => {
  const wave = (speed: number, phase: number, amp: number) => Math.sin(time * speed + phase) * amp
  const edgeL = 8 + t * 150 + wave(0.55, t * 4, 7)
  const edgeR = 8 + t * 150 + wave(0.5, t * 4 + 1.7, 7)
  const pinchY = 186 + wave(0.35, 0, 4) + py * 6
  const lx = 340 + px * 18
  const rx = 660 + px * 18
  const cx = 500 + px * 26
  const cy = 206 + (1 - t) * 104 + wave(0.7, t * 2.5, 5) + py * 10
  return [
    `M0 ${edgeL}`,
    `C200 ${edgeL} ${lx - 70} ${pinchY} ${lx} ${pinchY}`,
    `C${lx + 70} ${pinchY} ${cx - 80} ${cy} ${cx} ${cy}`,
    `C${cx + 80} ${cy} ${rx - 70} ${pinchY} ${rx} ${pinchY}`,
    `C${rx + 70} ${pinchY} 800 ${edgeR} ${W} ${edgeR}`,
  ].join(" ")
}

function rise(delay: number) {
  return { className: "rise", style: { "--rise-delay": `${delay}ms` } as CSSProperties }
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <Container className="text-center">
        <div {...rise(0)}>
          <Eyebrow className="bg-white">{hero.eyebrow}</Eyebrow>
        </div>
        <Heading as="h1" className="mx-auto mt-5 max-w-5xl text-[2.75rem] leading-[0.98] sm:text-6xl lg:text-[4.5rem] 2xl:text-[5.5rem]">
          <span style={rise(80).style} className="rise block">
            {hero.titleDark}
          </span>
          <span style={rise(160).style} className="rise block text-ink-soft">
            {hero.titleLight}
          </span>
        </Heading>
        <p style={rise(240).style} className="rise mx-auto mt-5 max-w-md text-[15px] leading-7 text-ink-2 sm:max-w-lg 2xl:max-w-xl 2xl:text-lg">
          {hero.body}
        </p>
        <div style={rise(320).style} className="rise mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#products" className={buttonStyles.signal}>
            {hero.primaryCta}
          </a>
          <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles.outline}>
            {hero.secondaryCta}
          </a>
        </div>
      </Container>

      {/* Line art with the logo tile resting in the cradle */}
      <div className="relative mt-4 h-[200px] w-full sm:h-[280px] lg:h-[340px] 2xl:h-[400px]">
        <WireField count={64} viewBox={`0 0 ${W} 330`} build={buildHeroWire} className="absolute inset-0 h-full w-full" />
        <div
          style={rise(900).style}
          className="rise absolute left-1/2 top-[63%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-white text-wire shadow-[0_10px_30px_rgba(52,59,85,0.18)] sm:h-14 sm:w-14"
        >
          <LogoMark className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>

      {/* Built with */}
      <Container className="pb-16 pt-6 sm:pb-20">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-3">Built with</span>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:w-auto sm:overflow-visible sm:[mask-image:none]">
            <ul className="marquee-track flex w-max gap-8 sm:gap-9">
              {[...hero.builtWith, ...hero.builtWith].map((name, i) => (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= hero.builtWith.length}
                  className={cn(
                    "font-display text-[15px] font-semibold tracking-tight text-ink-soft transition-colors hover:text-ink",
                    i >= hero.builtWith.length && "sm:hidden",
                  )}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
