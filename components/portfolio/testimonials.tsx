"use client"

import { Quote, Star, Users } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface TestimonialsProps {
  data: PortfolioData
}

function InitialAvatar({ author }: { author: string }) {
  const initials = author
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dce9d9] text-xs font-semibold text-[#1c5b4e] ring-4 ring-[#f6f3e9]">{initials}</div>
}

export function Testimonials({ data }: TestimonialsProps) {
  const { testimonials, profile } = data

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="relative lg:sticky lg:top-24">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Testimonials</span>
            <h2 className="max-w-md font-serif text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-6xl">What Clients Say</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#5d6257] sm:text-base">Real feedback from real clients. We&apos;re proud to help businesses turn their ideas into impactful digital solutions — and their words mean everything to us.</p>

            <div className="mt-8 grid max-w-sm grid-cols-2 overflow-hidden rounded-xl border border-[#d8dfd2] bg-[#e6ecdf]/80">
              <div className="border-r border-[#cbd6c7] p-5"><Users className="h-6 w-6 text-[#1c5b4e]" /><strong className="mt-3 block text-2xl text-[#135744]">4–5★</strong><span className="text-[10px] text-[#607366]">Client Reviews</span></div>
              <div className="p-5"><strong className="mt-9 block text-2xl text-[#135744]">{profile.stats[0]?.value || "74+"}</strong><span className="text-[10px] text-[#607366]">Clients Trust Us</span></div>
            </div>

            <p className="mt-10 max-w-xs -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e]">Great people.<br />Great projects.</p>
            <div className="relative mt-8 hidden h-36 w-56 sm:block"><div className="absolute bottom-0 left-4 h-28 w-5 rotate-[-30deg] rounded-full bg-[#4f805d]" /><div className="absolute bottom-1 left-12 h-24 w-5 rotate-[25deg] rounded-full bg-[#87a574]" /><div className="absolute bottom-0 left-20 h-20 w-4 rotate-[55deg] rounded-full bg-[#668f69]" /><span className="absolute bottom-0 left-0 h-24 w-24 rounded-full border-[14px] border-[#dce6d6]" /></div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
            {[testimonials.filter((_, index) => index % 2 === 0), testimonials.filter((_, index) => index % 2 === 1)].map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((testimonial, index) => (
                  <article key={testimonial.author} className="group relative overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] p-5 shadow-[0_8px_25px_rgba(67,61,46,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_16px_32px_rgba(67,61,46,0.11)]">
                    <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full border-[14px] border-[#e4ebdf]/70 transition-transform duration-500 group-hover:scale-125" />
                    {index === 1 ? <div className="absolute bottom-0 right-3 h-16 w-4 rotate-[35deg] rounded-full bg-[#b4c9ae]/50" /> : null}
                    <div className="relative flex items-start justify-between gap-3"><Quote className="h-8 w-8 text-[#b7cbb5]" /><div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} className={`h-3.5 w-3.5 ${starIndex < testimonial.rating ? "fill-[#17634c] text-[#17634c]" : "text-[#c8d2c4]"}`} />)}</div></div>
                    <blockquote className="relative mt-5 text-sm leading-6 text-[#526b5e]">&quot;{testimonial.quote}&quot;</blockquote>
                    <div className="relative mt-7 flex items-center gap-3"><InitialAvatar author={testimonial.author} /><div><p className="text-sm font-semibold text-[#26312d]">{testimonial.author}</p><p className="mt-0.5 text-[10px] text-[#718075]">{testimonial.title} <span className="mx-1">•</span> {testimonial.location}</p></div></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
