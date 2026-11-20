"use client"

import { CalendarDays, LayoutGrid, Smartphone } from "lucide-react"
import { intro } from "@/lib/site-content"
import { Container, Reveal, SectionIntro } from "./primitives"

const icons = { grid: LayoutGrid, phone: Smartphone, calendar: CalendarDays }

export function Intro() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow={intro.eyebrow} title={intro.title} body={intro.body} className="max-w-2xl" />
        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {intro.points.map((point, i) => {
            const Icon = icons[point.icon]
            return (
              <Reveal as="li" key={point.label} delay={i * 90}>
                <div className="group flex h-full items-center gap-3 rounded-xl border border-line bg-white p-3 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-paper-2 text-ink-2 transition-colors group-hover:text-ink">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-ink">{point.label}</span>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
