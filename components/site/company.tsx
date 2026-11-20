"use client"

import { ArrowRight } from "lucide-react"
import { company, companySection } from "@/lib/site-content"
import { Container, CountUp, Heading, Reveal, useInView } from "./primitives"

export function Company() {
  const [ref, inView] = useInView<HTMLDListElement>({ threshold: 0.4 })
  return (
    <section id="company" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-2">{companySection.eyebrow}</div>
              <Heading className="mt-3 text-3xl sm:text-[2.2rem]">{companySection.title}</Heading>
              <p className="mt-4 text-sm leading-6 text-ink-2">{companySection.body}</p>
              <a
                href={company.customProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
              >
                {companySection.link}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <dl ref={ref} className="grid grid-cols-2 overflow-hidden rounded-xl border border-line">
              {companySection.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={[
                    "flex flex-col-reverse p-5 sm:p-6",
                    i % 2 === 0 ? "border-r border-line" : "",
                    i < 2 ? "border-b border-line" : "",
                  ].join(" ")}
                >
                  <dt className="mt-1 text-xs text-ink-2">{s.label}</dt>
                  <dd className="font-display text-4xl font-semibold tracking-tight text-ink tabular-nums">
                    <CountUp value={s.value} start={inView} duration={1100 + i * 150} />
                    {s.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
