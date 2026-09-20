"use client"

import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ServicesProps {
  data: PortfolioData
}

const serviceImages: Record<string, string> = {
  "website-development": "/services/Web-devlopment.png",
  "web-app-development": "/services/Web-App.png",
  "excel-data-services": "/services/excel-data.png",
  "shopify-store": "/services/Shopify-store.png",
  "logo-banner-design": "/services/Logo-design.png",
  "shopify-development": "/services/Shopify-store.png",
  "ai-automation": "/services/AI-Automation.png",
  "seo-maintenance": "/services/seo.png",
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
            <h2 className="max-w-lg font-serif text-4xl leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-6xl">What we build</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#5d6257] sm:text-base">Seven services, one team. Choose one, or combine them: a new site, an online store, a dashboard, or an automation that removes a repetitive task.</p>
          </div>
          <p className="hidden max-w-44 -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e] md:block">Seven services.<br />One team.</p>
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
                <div className="relative h-48 flex-none overflow-hidden rounded-t-xl bg-[#e5e0d4] sm:h-56 lg:h-64">
                  {serviceImages[service.id] && (
                    <img
                      src={serviceImages[service.id]}
                      alt={`${service.title} preview`}
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="relative z-10 bg-[#fbf9f3] px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
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
          <a href="https://wa.me/923398867672?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#1c5b4e] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#16483e]">
            Book a free 15-minute call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
