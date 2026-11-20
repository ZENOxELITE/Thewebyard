"use client"

import { useEffect, useState, type ReactNode } from "react"
import { Check, CheckCheck } from "lucide-react"
import { howItWorks } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { Container, Reveal, SectionIntro, useInView, usePrefersReducedMotion } from "./primitives"

const LOOP = 10 // ticks per cycle
const TICK_MS = 750

/** A shared clock that only runs while the section is on screen. */
function useTicker(active: boolean) {
  const reduced = usePrefersReducedMotion()
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!active || reduced) return
    const id = setInterval(() => setTick((t) => t + 1), TICK_MS)
    return () => clearInterval(id)
  }, [active, reduced])
  // With motion off, show every mock in its finished state.
  return reduced ? 6 : tick
}

function MockFrame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mt-4 rounded-xl border border-line bg-paper-2 p-3", className)}>{children}</div>
}

function ChooseMock({ tick }: { tick: number }) {
  const selected = Math.floor(tick / (LOOP / 2)) % 2
  const options = ["ShopDesk", "RO Plant System"]
  return (
    <MockFrame>
      <ul className="space-y-1 text-[13px]">
        {options.map((label, i) => {
          const on = i === selected
          return (
            <li
              key={label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg border px-2.5 py-2 transition-all duration-500",
                on ? "border-line-strong bg-chip text-ink" : "border-transparent text-ink-2",
              )}
            >
              <span
                className={cn(
                  "h-3.5 w-3.5 rounded-full border transition-all duration-500",
                  on ? "border-[3.5px] border-ink" : "border-ink-3",
                )}
              />
              {label}
            </li>
          )
        })}
        <li className="flex items-center gap-2.5 px-2.5 py-2 text-ink-3">
          <span className="h-3.5 w-3.5 rounded-full border border-dashed border-ink-3" />
          More coming soon
        </li>
      </ul>
    </MockFrame>
  )
}

function ChatMock({ tick }: { tick: number }) {
  const phase = tick % LOOP
  const showTyping = phase >= 2 && phase < 4
  const showReply = phase >= 4
  const seen = phase >= 5
  return (
    <MockFrame className="flex min-h-[8.5rem] flex-col">
      <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-signal px-3 py-2 text-[12px] leading-snug text-white">
        {howItWorks.chat.ask}
      </div>
      <div className="mt-2 min-h-[3.25rem]">
        {showTyping && (
          <div className="inline-flex gap-1 rounded-xl rounded-bl-sm border border-line bg-white px-3 py-2.5" aria-hidden="true">
            {[0, 1, 2].map((d) => (
              <span key={d} className="typing-dot h-1.5 w-1.5 rounded-full bg-ink-3" style={{ animationDelay: `${d * 150}ms` }} />
            ))}
          </div>
        )}
        {showReply && (
          <div className="animate-in fade-in slide-in-from-bottom-1 max-w-[85%] rounded-xl rounded-bl-sm border border-line bg-white px-3 py-2 text-[12px] leading-snug text-ink duration-300">
            {howItWorks.chat.reply}
          </div>
        )}
      </div>
      <div
        className={cn(
          "mt-auto flex items-center justify-end gap-1 text-[10px] text-ink-3 transition-opacity duration-300",
          seen ? "opacity-100" : "opacity-0",
        )}
      >
        <CheckCheck className="h-3 w-3" /> Seen
      </div>
    </MockFrame>
  )
}

function SetupMock({ tick }: { tick: number }) {
  const phase = tick % LOOP
  const progress = [8, 30, 55, 72, 72, 72, 72, 72, 72, 72][phase]
  return (
    <MockFrame>
      <ul className="space-y-2 text-[12px] text-ink">
        {howItWorks.setup.map((item, i) => {
          const done = i < 2 && phase > i
          const pending = i === 2
          return (
            <li key={item} className="flex items-center justify-between">
              <span className={cn(pending && "text-ink-2")}>{item}</span>
              {pending ? (
                <span className="text-ink-3">…</span>
              ) : (
                <Check
                  className={cn("h-3.5 w-3.5 transition-all duration-300", done ? "scale-100 opacity-100" : "scale-50 opacity-0")}
                />
              )}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-chip">
        <div className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </MockFrame>
  )
}

const bars = [30, 44, 38, 56, 52, 74, 88]

function ChartMock({ tick, inView }: { tick: number; inView: boolean }) {
  // the last bar breathes a little each cycle, like today's total ticking up
  const live = tick % LOOP >= LOOP / 2 ? 94 : 88
  return (
    <MockFrame>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-ink-2">This week</span>
        <span className="font-semibold uppercase tracking-[0.08em] text-ink">Demo</span>
      </div>
      <div className="mt-2 flex h-16 items-end gap-1.5">
        {bars.map((h, i) => {
          const last = i === bars.length - 1
          const height = inView ? (last ? live : h) : 4
          return (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-sm transition-[height] duration-700 ease-out",
                last ? "bg-ink" : i >= bars.length - 2 ? "bg-ink-soft" : "bg-line-strong",
              )}
              style={{ height: `${height}%`, transitionDelay: inView && tick < 2 ? `${i * 70}ms` : "0ms" }}
            />
          )
        })}
      </div>
    </MockFrame>
  )
}

export function HowItWorks() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const tick = useTicker(inView)
  const steps = howItWorks.steps

  const mocks = [
    <ChooseMock key="choose" tick={tick} />,
    <ChatMock key="chat" tick={tick} />,
    <SetupMock key="setup" tick={tick} />,
    <ChartMock key="chart" tick={tick} inView={inView} />,
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow={howItWorks.eyebrow} title={howItWorks.title} body={howItWorks.body} />
        <div ref={ref} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold tracking-tight text-ink">{step.title}</h3>
                  <span className="font-mono text-[10px] text-ink-3">0{i + 1}</span>
                </div>
                <p className="mt-1 text-[13px] leading-5 text-ink-2">{step.body}</p>
                {mocks[i]}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
