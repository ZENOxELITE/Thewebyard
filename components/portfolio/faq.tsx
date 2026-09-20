"use client"

import { ArrowRight, Building2, ChevronDown, Code2, Headphones, MessageCircle, Package, Send, Tag, Timer } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { PortfolioData } from "@/types/portfolio"

interface FAQProps {
  data: PortfolioData
}

const questionIcons = [Package, Timer, Building2, Tag, Code2, Headphones, Send]

function FAQIllustration() {
  return (
    <div className="relative mt-8 h-64 w-full max-w-md sm:h-72 lg:mt-12">
      <div className="absolute bottom-3 left-1/2 h-20 w-72 -translate-x-1/2 rounded-[50%] bg-[#d6ddce] shadow-[0_12px_20px_rgba(47,75,58,0.08)]" />
      <div className="absolute bottom-12 left-[13%] h-28 w-28 rounded-full bg-[#dce6d8]/80" />
      <div className="absolute bottom-16 right-[8%] h-40 w-40 rounded-full border-[22px] border-white/45" />
      <div className="absolute bottom-14 left-[20%] w-32 rounded-xl border border-[#d2dacd] bg-[#f9f6ec] p-4 shadow-[0_12px_22px_rgba(47,75,58,0.12)] transition-transform duration-500 hover:-translate-y-2">
        <div className="h-2 w-16 rounded-full bg-[#aab9a6]" />
        <div className="mt-4 h-2 w-full rounded-full bg-[#d2dbd0]" />
        <div className="mt-2 h-2 w-4/5 rounded-full bg-[#e2e8df]" />
        <div className="mt-4 h-2 w-12 rounded-full bg-[#5b8067]" />
      </div>
      <div className="absolute bottom-24 right-[18%] flex h-28 w-28 items-center justify-center rounded-xl bg-[#135744] shadow-[0_15px_25px_rgba(19,87,68,0.2)] transition-transform duration-500 hover:rotate-2 hover:scale-105">
        <div className="relative h-12 w-16 rounded-md border-2 border-white/80 bg-[#2b6d58] p-2"><span className="block h-1.5 w-10 rounded bg-white/80" /><span className="mt-2 block h-1.5 w-12 rounded bg-white/50" /><span className="mt-2 block h-1.5 w-8 rounded bg-white/50" /><span className="absolute -bottom-3 left-4 h-4 w-4 rotate-45 border-b-2 border-r-2 border-white/80 bg-[#2b6d58]" /></div>
      </div>
      <div className="absolute bottom-44 left-[32%] flex h-16 w-20 items-center justify-center rounded-xl border border-[#d2dacd] bg-[#f9f6ec] text-4xl font-semibold text-[#1c5b4e] shadow-[0_12px_22px_rgba(47,75,58,0.12)]">?</div>
      <div className="absolute bottom-5 right-[11%] h-28 w-5 rotate-[35deg] rounded-full bg-[#4b795e]" />
      <div className="absolute bottom-10 right-[3%] h-24 w-4 rotate-[60deg] rounded-full bg-[#789879]" />
      <div className="absolute bottom-1 right-[20%] h-20 w-4 rotate-[-12deg] rounded-full bg-[#a0b89b]" />
      <span className="absolute right-4 top-1 h-16 w-16 rounded-full border border-[#1c5b4e]/20" />
      <span className="absolute right-11 top-8 h-px w-24 bg-[#1c5b4e]/25" />
    </div>
  )
}

export function FAQ({ data }: FAQProps) {
  const { faq } = data

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">FAQ</span>
            <h2 className="max-w-md font-serif text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Frequently Asked<br />Questions</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#5d6257] sm:text-base">Answers to what clients ask us most. Something missing? Message us and we&apos;ll reply directly.</p>
            <FAQIllustration />
          </div>

          <div>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {faq.map((item, index) => {
                const Icon = questionIcons[index % questionIcons.length]
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3]/80 px-5 shadow-[0_4px_18px_rgba(67,61,46,0.03)] transition-all duration-300 data-[state=open]:border-[#cbd7ca] data-[state=open]:bg-[#e8eee5] data-[state=open]:shadow-[0_10px_24px_rgba(67,61,46,0.07)] sm:px-6">
                    <AccordionTrigger className="gap-4 py-5 text-sm font-semibold text-[#26312d] hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#1c5b4e]">
                      <span className="flex min-w-0 items-center gap-4 text-left"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7eee5] text-[#1c5b4e]"><Icon className="h-4 w-4" /></span><span>{item.question}</span></span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[3.25rem] pr-2 text-sm leading-6 text-[#5f7065] sm:pl-[3.25rem]">{item.answer}</AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-xl border border-[#d3dbd0] bg-[#e5eadf]/85 px-6 py-8 sm:px-10 lg:mt-20 lg:py-9">
          <div className="absolute -right-8 -top-16 h-48 w-48 rounded-full border-[24px] border-white/35" />
          <div className="absolute bottom-[-3rem] right-5 h-32 w-6 rotate-[30deg] rounded-full bg-[#507a5e]/70" />
          <div className="absolute bottom-[-2rem] right-16 h-28 w-5 rotate-[55deg] rounded-full bg-[#87a486]/70" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="max-w-lg"><h3 className="mt-3 font-serif text-3xl leading-none tracking-[-0.03em] text-[#26312d] sm:text-4xl">Still deciding?</h3><p className="mt-3 text-sm leading-5 text-[#6c7065]">Tell us what you need on WhatsApp and we&apos;ll reply with a clear next step.</p></div>
            <a href={data.profile.ctaUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#1c5b4e] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#16483e]">Get a free quote on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
