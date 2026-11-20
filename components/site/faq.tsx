"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { faq } from "@/lib/site-content"
import { Container, Reveal, SectionIntro } from "./primitives"

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow={faq.eyebrow} title={faq.title} />
        <AccordionPrimitive.Root type="single" collapsible className="mx-auto mt-10 max-w-2xl space-y-2">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <AccordionPrimitive.Item
                value={`q${i}`}
                className="rounded-xl border border-line bg-white transition-shadow data-[state=open]:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 px-4 py-3.5 text-left text-sm font-medium text-ink">
                    {item.q}
                    <Plus className="h-4 w-4 shrink-0 text-ink-2 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-4 pb-4 text-sm leading-6 text-ink-2">{item.a}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </Reveal>
          ))}
        </AccordionPrimitive.Root>
      </Container>
    </section>
  )
}
