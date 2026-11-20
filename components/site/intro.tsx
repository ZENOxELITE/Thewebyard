"use client"

import { intro } from "@/lib/site-content"
import { Container, Reveal, SectionIntro } from "./primitives"

export function Intro() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow={intro.eyebrow} title={intro.title} body={intro.body} className="max-w-2xl" />
        <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-3 2xl:max-w-6xl">
          {intro.points.map((point, i) => (
            <Reveal as="li" key={point.label} delay={i * 90}>
              <div className="flex h-full items-center justify-center rounded-xl border border-line bg-white px-4 py-4 text-center text-sm text-ink transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
                {point.label}
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
