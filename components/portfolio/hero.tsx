"use client"

import { ArrowRight, Code2, Headphones, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface HeroProps {
  data: PortfolioData
}

const highlights = [
  { label: "Built to your brief", icon: Code2 },
  { label: "Delivery date in writing", icon: Zap },
  { label: "Tested on every device", icon: ShieldCheck },
  { label: "Support after launch", icon: Headphones },
]

function Leaf({ className }: { className: string }) {
  return <span className={`absolute block rounded-[100%_0_100%_0] bg-[#477b55] shadow-[inset_-8px_-8px_12px_rgba(10,62,42,0.25)] ${className}`} />
}

function HeroScene() {
  return (
    <div className="relative mx-auto h-[24rem] w-full max-w-[42rem] sm:h-[32rem] lg:h-[38rem]">
      <div className="absolute right-[7%] top-[7%] h-[74%] w-[74%] rounded-full bg-[#dce6d3]/70 blur-[1px]" />
      <div className="absolute bottom-[9%] left-[5%] h-[26%] w-[92%] rounded-[50%] bg-[#dbe5d4] shadow-[0_22px_24px_rgba(32,75,51,0.1)]" />

      <div className="hero-float-leaves absolute inset-0 transition-transform duration-700">
        <Leaf className="left-[10%] top-[29%] h-16 w-8 rotate-[-45deg] sm:h-24 sm:w-12" />
        <Leaf className="left-[14%] top-[15%] h-20 w-10 rotate-[-20deg] bg-[#739b60] sm:h-28 sm:w-14" />
        <Leaf className="left-[21%] top-[6%] h-20 w-10 rotate-[15deg] bg-[#91b56c] sm:h-28 sm:w-14" />
        <Leaf className="left-[4%] top-[43%] h-14 w-7 rotate-[-65deg] bg-[#84a866] sm:h-20 sm:w-10" />
        <Leaf className="right-[3%] top-[28%] h-16 w-8 rotate-[38deg] bg-[#6d965b] sm:h-24 sm:w-12" />
        <Leaf className="right-[12%] top-[12%] h-20 w-10 rotate-[10deg] bg-[#8fae69] sm:h-28 sm:w-14" />
        <Leaf className="right-[1%] top-[4%] h-12 w-6 rotate-[58deg] bg-[#477b55] sm:h-18 sm:w-9" />
      </div>

      <div className="hero-float-laptop absolute bottom-[16%] left-[17%] z-10 w-[70%] transition-transform duration-700 hover:-translate-y-2">
        <div className="relative aspect-[1.45] overflow-hidden rounded-[1rem] border-[8px] border-[#173e32] bg-[#dfe9da] shadow-[0_25px_35px_rgba(18,56,42,0.3)] sm:border-[10px]">
          <div className="flex h-7 items-center gap-1 border-b border-[#c4d3c1] bg-[#f7f4e9] px-3 text-[6px] font-semibold text-[#47705b] sm:h-9 sm:text-[8px]"><span className="h-1.5 w-1.5 rounded-full bg-[#79a27d]" /><span className="h-1.5 w-1.5 rounded-full bg-[#c0d2bd]" /><span className="h-1.5 w-1.5 rounded-full bg-[#d9e4d4]" /><span className="ml-auto">Orvexa Systems</span></div>
          <div className="grid h-[calc(100%-1.75rem)] grid-cols-[0.9fr_1.1fr] gap-2 p-3 sm:h-[calc(100%-2.25rem)] sm:p-5"><div><span className="text-[7px] uppercase tracking-[0.12em] text-[#60806a] sm:text-[9px]">Web and software studio</span><strong className="mt-2 block max-w-[8rem] font-serif text-base leading-[0.95] text-[#173e32] sm:text-2xl">Start with a free call.</strong><span className="mt-3 block h-2 w-12 rounded-full bg-[#1c5b4e]" /><span className="mt-2 block h-1.5 w-20 rounded-full bg-[#c2d3bf]" /></div><div className="relative rounded bg-[#c8dac7] p-2"><div className="absolute bottom-2 left-2 right-2 h-10 rounded bg-[#739875]/70" /><div className="absolute right-2 top-2 h-12 w-16 rounded bg-[#f4f1e7]/75" /></div></div>
        </div>
        <div className="absolute -bottom-5 left-[-4%] h-7 w-[108%] rounded-[50%] bg-[#173e32] shadow-[0_10px_10px_rgba(18,56,42,0.2)] sm:h-9" />
      </div>

      <div className="hero-float-phone absolute bottom-[12%] left-[12%] z-20 h-36 w-[4.8rem] rotate-[-3deg] rounded-[0.8rem] border-[5px] border-[#173e32] bg-[#f7f4e9] p-1.5 shadow-[0_16px_22px_rgba(18,56,42,0.22)] transition-transform duration-700 hover:-translate-y-2 sm:h-52 sm:w-28 sm:p-2"><div className="h-full rounded-[0.45rem] bg-[#dce8d8] p-2 sm:p-3"><div className="h-1 w-10 rounded bg-[#5d8467]" /><div className="mt-4 h-12 rounded bg-[#f6f2e7] sm:h-20" /><div className="mt-3 h-2 w-12 rounded bg-[#4a7b5d]" /><div className="mt-2 h-1.5 w-16 rounded bg-[#b3cab1]" /><div className="mt-4 h-5 rounded-full bg-[#1c5b4e]" /></div></div>

      <div className="hero-float-card absolute bottom-[28%] right-[3%] z-30 flex w-40 items-center gap-3 rounded-xl border border-white/70 bg-[#f8f5eb]/90 p-3 shadow-[0_18px_28px_rgba(47,75,58,0.16)] transition-transform duration-700 hover:-translate-y-2 sm:right-[0%] sm:w-52 sm:p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dce9d7] text-[#1c5b4e]"><Sparkles className="h-5 w-5" /></span><span className="text-[10px] font-semibold leading-4 text-[#315542] sm:text-xs">Built with React, Next.js,<br />and Django</span></div>

      <div className="hero-float-cup absolute bottom-[4%] right-[7%] z-20 transition-transform duration-700 hover:-translate-y-2 sm:right-[8%]"><div className="h-20 w-24 rounded-b-[2rem] rounded-t-lg bg-[#174c3c] text-center text-[10px] italic text-white shadow-[0_15px_18px_rgba(18,56,42,0.2)] sm:h-28 sm:w-36 sm:text-sm"><span className="block pt-7 font-serif">Clear plans.<br />Working software.</span></div><div className="absolute right-[-1.3rem] top-7 h-9 w-7 rounded-r-full border-[5px] border-[#174c3c] sm:top-10 sm:h-12 sm:w-10" /><div className="mx-auto h-3 w-28 rounded-[50%] bg-[#c8a06c] sm:w-40" /></div>
    </div>
  )
}

export function Hero({ data }: HeroProps) {
  const { profile } = data

  return (
    <section className="relative overflow-hidden bg-[#f7f4e9] pt-28 text-[#1f2825] sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_38%,rgba(218,231,211,0.55),transparent_31%),linear-gradient(180deg,#faf7ef_0%,#f2eee4_100%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10 lg:pb-0">
        <div className="grid items-center gap-8 lg:min-h-[38rem] lg:grid-cols-[0.94fr_1.06fr] lg:gap-3">
          <div className="relative z-10 max-w-2xl lg:pb-12">
            <span className="mb-5 inline-flex rounded-full bg-[#dfebdc] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#35604a]">Web and software studio</span>
            <h1 className="max-w-2xl font-sans text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#063e2e] sm:text-5xl lg:text-6xl xl:text-7xl">We build the websites and<br />software your business runs on.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#587266] sm:text-lg">Orvexa Systems designs and builds websites, web apps, Shopify stores, and automation. You work with one team from first call to launch, and we stay available afterward.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={profile.ctaUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#07543e] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(7,84,62,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#063f30]"> <MessageCircle className="h-5 w-5" />{profile.ctaText}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="#services" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#d4dfd0] bg-white/40 px-6 py-3.5 text-sm font-semibold text-[#1c5b4e] transition-all hover:-translate-y-0.5 hover:border-[#1c5b4e] hover:bg-white/70">See what we build<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </div>
            <div className="mt-10 hidden grid-cols-2 gap-4 border-t border-[#d8e1d4] pt-6 sm:grid sm:grid-cols-4 sm:gap-3">{highlights.map((item) => { const Icon = item.icon; return <div key={item.label} className="flex items-center gap-2 text-xs font-medium text-[#456556]"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e3ecdf] text-[#1c5b4e]"><Icon className="h-4 w-4" /></span>{item.label}</div> })}</div>
          </div>
          <HeroScene />
        </div>

        <div className="relative z-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#d8e2d3] bg-[#e8efdf]/80 shadow-[0_8px_24px_rgba(67,61,46,0.04)] sm:grid-cols-4">{profile.stats.map((stat) => <div key={stat.label} className="border-b border-[#cbd9c9] px-3 py-5 text-center last:border-0 sm:border-b-0 sm:border-r sm:last:border-0"><strong className="block text-3xl font-semibold text-[#063e2e]">{stat.value}</strong><span className="mt-1 block text-xs text-[#557062]">{stat.label}</span></div>)}</div>
      </div>
    </section>
  )
}
