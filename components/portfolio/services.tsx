"use client"

import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ServicesProps {
  data: PortfolioData
}

const visualStyles: Record<string, string> = {
  "website-development": "bg-[#dce8df]",
  "web-app-development": "bg-[#e8e2d1]",
  "excel-data-services": "bg-[#dbe5e1]",
  "logo-banner-design": "bg-[#e9ded7]",
  "shopify-development": "bg-[#e2e6d5]",
  "ai-automation": "bg-[#d9e3e1]",
  "seo-maintenance": "bg-[#e8e1d4]",
}

function ServiceVisual({ serviceId }: { serviceId: string }) {
  if (serviceId === "website-development") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full border-[34px] border-white/40" />
        <div className="absolute bottom-[-5rem] left-[-3rem] h-56 w-56 rounded-full bg-[#9dbbaa]/45" />
        <div className="absolute right-4 top-6 w-[72%] max-w-56 rounded-lg border border-white/80 bg-[#f7f3e9]/80 p-3 shadow-[0_15px_25px_rgba(45,73,60,0.12)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 sm:right-12 sm:top-10 sm:p-4">
          <div className="flex items-center justify-between border-b border-[#cbd7ca] pb-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#526b5c]"><span>Orvexa / Studio</span><span>Menu</span></div>
          <div className="py-5 font-serif text-3xl leading-[0.85] text-[#183d32]">Make your<br />mark.</div>
          <div className="h-1.5 w-20 rounded-full bg-[#1c5b4e]" />
          <div className="mt-3 h-2 w-32 rounded-full bg-[#d9dfd3]" />
        </div>
      </div>
    )
  }

  if (serviceId === "web-app-development") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white/35" />
        <div className="absolute left-4 top-8 grid w-[72%] max-w-52 grid-cols-2 gap-2 rounded-lg border border-white/70 bg-[#f7f3e9]/75 p-3 shadow-[0_15px_25px_rgba(95,79,49,0.1)] transition-transform duration-500 group-hover:translate-x-2 sm:left-8 sm:top-10">
          <div className="col-span-2 mb-1 h-2 w-16 rounded-full bg-[#9d9272]" />
          <div className="h-16 rounded bg-[#d7cfb9]" /><div className="h-16 rounded bg-[#c1d1c1]" />
          <div className="col-span-2 flex items-end gap-1 pt-2"><span className="h-8 w-1/4 rounded-t bg-[#91a99b]" /><span className="h-12 w-1/4 rounded-t bg-[#557e6e]" /><span className="h-6 w-1/4 rounded-t bg-[#b6c4af]" /><span className="h-10 w-1/4 rounded-t bg-[#7d9987]" /></div>
        </div>
      </div>
    )
  }

  if (serviceId === "excel-data-services") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-[#a5bdb3]/45" />
        <div className="absolute right-4 top-8 grid w-[72%] max-w-52 grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/80 bg-white/70 p-2 shadow-[0_15px_25px_rgba(45,73,60,0.1)] transition-transform duration-500 group-hover:scale-105 sm:right-10 sm:top-10">
          {Array.from({ length: 28 }).map((_, index) => <span key={index} className={`h-5 rounded-sm ${index % 5 === 0 ? "bg-[#4f806c]" : index % 3 === 0 ? "bg-[#c0d3c5]" : "bg-[#edf0e8]"}`} />)}
        </div>
      </div>
    )
  }

  if (serviceId === "logo-banner-design") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 bottom-[-5rem] h-56 w-56 rounded-full border-[28px] border-white/45" />
        <div className="absolute left-6 top-8 flex h-32 w-32 rotate-[-8deg] items-center justify-center rounded-full border border-white/80 bg-[#f8eee5]/80 shadow-[0_15px_25px_rgba(104,68,53,0.1)] transition-transform duration-500 group-hover:rotate-3 sm:left-10 sm:top-10 sm:h-40 sm:w-40">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#a77b68]/50 font-serif text-3xl text-[#805d4d] sm:h-24 sm:w-24 sm:text-4xl">O</div>
        </div>
        <span className="absolute right-12 top-12 font-serif text-3xl italic text-[#805d4d]/70">brand</span>
      </div>
    )
  }

  if (serviceId === "shopify-development") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#b9c8a9]/50" />
        <div className="absolute right-4 top-8 w-[72%] max-w-56 rounded-lg border border-white/80 bg-[#f7f6e9]/85 p-3 shadow-[0_15px_25px_rgba(68,83,49,0.12)] transition-transform duration-500 group-hover:-translate-y-2 sm:right-10 sm:top-10 sm:p-4">
          <div className="flex justify-between border-b border-[#d1d7bd] pb-3 text-[8px] uppercase tracking-[0.15em] text-[#647354]"><span>Daily goods</span><span>Bag (2)</span></div>
          <div className="mt-4 h-16 rounded bg-[#d4dec7]" />
          <div className="mt-3 flex justify-between text-xs font-medium text-[#40533b]"><span>Essential set</span><span>$48</span></div>
          <div className="mt-3 h-7 rounded-full bg-[#365e46] text-center text-[9px] leading-7 text-white">Shop collection</div>
        </div>
      </div>
    )
  }

  if (serviceId === "ai-automation") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-6 top-8 h-32 w-32 rounded-full border border-white/80 bg-[#eef5f0]/70 sm:left-10 sm:top-10 sm:h-40 sm:w-40" />
        <div className="absolute left-[29%] top-20 h-8 w-8 rounded-full bg-[#1c5b4e] shadow-[0_0_0_12px_rgba(28,91,78,0.12)] transition-transform duration-500 group-hover:scale-125 sm:left-[7.25rem] sm:top-[5.25rem]" />
        <div className="absolute left-[42%] top-28 h-px w-20 rotate-[-28deg] bg-[#1c5b4e]/60 sm:left-[11.25rem] sm:top-[8.25rem] sm:w-28" />
        <div className="absolute left-[58%] top-20 h-5 w-5 rounded-full border-2 border-[#1c5b4e] sm:left-[15.5rem] sm:top-[6.25rem]" />
        <div className="absolute right-10 bottom-10 rounded-full border border-[#1c5b4e]/40 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-[#46695f]">Flow / Trigger / Act</div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-20 -right-8 h-64 w-64 rounded-full border-[28px] border-white/50" />
      <div className="absolute left-10 top-10 h-32 w-48 rounded-full bg-white/30 blur-sm transition-transform duration-500 group-hover:translate-x-4" />
      <div className="absolute right-14 top-14 h-24 w-24 rounded-full border border-[#8a806a]/40" />
    </div>
  )
}

export function Services({ data }: ServicesProps) {
  const { services } = data

  return (
    <section id="services" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Services</span>
            <h2 className="max-w-lg font-serif text-4xl leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Websites &amp; Apps Built<br />for Your Business</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#5d6257] sm:text-base">From websites and apps to Shopify stores, AI automation, and data cleanup — we build the tools your business runs on. Here&apos;s how we can help.</p>
          </div>
          <p className="hidden max-w-44 -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e] md:block">Modern solutions<br />for modern businesses.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const isFeatured = index === 0
            const isWide = index === 3 || index === 6

            return (
              <article
                key={service.id}
                className={`group relative isolate flex min-h-[28rem] flex-col overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] shadow-[0_8px_30px_rgba(67,61,46,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_18px_38px_rgba(67,61,46,0.14)] sm:min-h-[24rem] ${isFeatured ? "sm:col-span-2 lg:col-span-4 lg:min-h-[25rem]" : isWide ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}`}
              >
                <div className={`absolute inset-x-0 top-0 h-[58%] ${visualStyles[service.id] || "bg-[#e5e0d4]"}`}>
                  <ServiceVisual serviceId={service.id} />
                </div>
                <div className="relative z-10 mt-auto bg-gradient-to-t from-[#fbf9f3] via-[#fbf9f3]/95 to-transparent px-5 pb-5 pt-24 sm:px-6 sm:pb-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77786d]">0{index + 1} / Service</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee9dd] text-[#5d6257] transition-colors group-hover:bg-[#1c5b4e] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                  <h3 className={`${isFeatured ? "text-2xl sm:text-3xl" : "text-xl"} font-semibold tracking-[-0.03em] text-[#26312d]`}>{service.title}</h3>
                  <p className="mt-2 max-w-xl text-xs leading-5 text-[#6c7065]">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-[#eee9dd] px-2.5 py-1 text-[9px] font-medium text-[#6c7065]"><Check className="h-3 w-3 text-[#1c5b4e]" />{feature}</span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#d8d1c2] pt-7 sm:flex-row">
          <p className="text-sm text-[#6c7065]">Not sure which service is right for you?</p>
          <a href={data.profile.ctaUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#1c5b4e] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#16483e]">
            Book a free consultation call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
