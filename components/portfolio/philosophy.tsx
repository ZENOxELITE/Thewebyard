"use client"

import { ArrowRight, Check, ClipboardCheck, Code2, MessageCircle, Rocket, ShieldCheck, Sparkles } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface PhilosophyProps {
  data: PortfolioData
}

const processVisuals = [
  <div key="discover" className="absolute inset-0 overflow-hidden"><div className="absolute bottom-7 left-7 h-16 w-16 rounded-full bg-[#eff5ed] shadow-[0_8px_15px_rgba(40,76,59,0.1)]" /><div className="absolute bottom-10 left-12 h-8 w-8 rounded-full bg-[#3f735a]" /><div className="absolute bottom-12 left-16 h-2 w-14 rounded-full bg-[#9eb7a0]" /><div className="absolute bottom-9 left-20 h-2 w-10 rotate-45 rounded-full bg-[#557d65]" /><MessageCircle className="absolute bottom-20 left-24 h-8 w-8 text-[#3e7058]" /></div>,
  <div key="plan" className="absolute inset-0 overflow-hidden"><div className="absolute bottom-7 left-10 h-24 w-32 rotate-[-4deg] rounded-lg border border-white/80 bg-[#f8f5eb]/90 p-4 shadow-lg"><div className="h-2 w-16 rounded bg-[#8ba58e]" /><div className="mt-3 h-2 w-full rounded bg-[#d3ded1]" /><div className="mt-2 h-2 w-4/5 rounded bg-[#e1e8df]" /><div className="mt-3 h-2 w-12 rounded bg-[#4e7b61]" /></div><div className="absolute bottom-8 right-12 flex h-9 w-9 items-center justify-center rounded-full bg-[#47745a] text-white shadow-md"><Check className="h-5 w-5" /></div></div>,
  <div key="design" className="absolute inset-0 overflow-hidden"><div className="absolute bottom-8 left-10 h-20 w-28 rounded-t-lg border-4 border-[#47745a] bg-[#edf3ea] shadow-lg"><div className="flex h-full items-center justify-center font-mono text-xl text-[#1c5b4e]">&lt;/&gt;</div></div><div className="absolute bottom-7 right-8 h-10 w-10 rounded-full bg-[#aac3ad]/70" /><div className="absolute bottom-5 right-16 h-7 w-7 rounded-full bg-[#6b9374]/70" /></div>,
  <div key="test" className="absolute inset-0 overflow-hidden"><div className="absolute bottom-7 left-12 h-24 w-20 rounded border border-white/80 bg-[#f8f5eb] p-3 shadow-lg"><div className="h-2 w-10 rounded bg-[#4f7a61]" /><div className="mt-4 space-y-2"><div className="flex gap-2"><Check className="h-3 w-3 text-[#3d7559]" /><span className="h-1.5 w-8 rounded bg-[#c7d8c7]" /></div><div className="flex gap-2"><Check className="h-3 w-3 text-[#3d7559]" /><span className="h-1.5 w-10 rounded bg-[#c7d8c7]" /></div><div className="flex gap-2"><Check className="h-3 w-3 text-[#3d7559]" /><span className="h-1.5 w-7 rounded bg-[#c7d8c7]" /></div></div></div><div className="absolute bottom-8 right-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#47745a] bg-[#eff5eb]"><ClipboardCheck className="h-6 w-6 text-[#47745a]" /></div></div>,
  <div key="launch" className="absolute inset-0 overflow-hidden"><div className="absolute bottom-7 left-12 h-20 w-14 rotate-[-25deg] rounded-t-full rounded-b-lg bg-[#447258] shadow-lg" /><div className="absolute bottom-5 left-8 h-10 w-8 rounded-full bg-[#d9e4d5]" /><div className="absolute bottom-5 left-24 h-8 w-6 rounded-full bg-[#edf2e8]" /><div className="absolute bottom-24 left-20 h-2 w-2 rounded-full bg-[#47745a]" /><div className="absolute bottom-28 left-28 h-2 w-2 rounded-full bg-[#47745a]" /><Rocket className="absolute bottom-16 left-16 h-9 w-9 rotate-[-25deg] text-[#f7f4e9]" /></div>,
]

const processLabels = [
  { title: "Discover & Discuss", description: "We start with a detailed conversation to understand your needs, goals, and vision." },
  { title: "Plan & Strategize", description: "We create a tailored plan, recommend the best solutions, and set a clear timeline." },
  { title: "Design & Develop", description: "We bring your idea to life with clean code, modern design, and best practices." },
  { title: "Test & Refine", description: "We thoroughly test across devices and scenarios to ensure quality, performance, and flawless functionality." },
  { title: "Launch & Support", description: "We deploy your project and stay with you for ongoing support and improvements." },
]

const commitments = [
  { title: "Quality First", description: "We never compromise on quality, security, or performance.", icon: ShieldCheck },
  { title: "Client-Centric", description: "Your success is our priority. We listen, adapt, and keep you involved.", icon: MessageCircle },
  { title: "On-Time Delivery", description: "We respect your time and deliver within agreed timelines.", icon: ClipboardCheck },
  { title: "Continuous Support", description: "We’re always here, even after the launch.", icon: Sparkles },
]

export function Philosophy({ data }: PhilosophyProps) {
  const { workPhilosophy } = data

  return (
    <section className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">How We Work</span>
            <h2 className="max-w-lg font-serif text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Our Working<br />Philosophy</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#5d6257] sm:text-base">We follow a clear, collaborative, and transparent process to make sure every project is delivered with quality, on time, and aligned with your goals.</p>
          </div>
          <p className="hidden max-w-48 -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e] md:block">Your vision +<br />Our process =<br />Real results.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {processLabels.map((step, index) => {
            const original = workPhilosophy[index]
            return (
              <div key={step.title} className="group relative flex min-h-[25rem] flex-col overflow-visible rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] p-5 shadow-[0_8px_30px_rgba(67,61,46,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_16px_32px_rgba(67,61,46,0.12)] sm:p-6">
                <div className="relative -mx-5 -mt-5 h-32 overflow-hidden rounded-t-xl bg-[#e1e9df] sm:-mx-6 sm:-mt-6"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[18px] border-white/40" />{processVisuals[index]}</div>
                <div className="relative z-10 mt-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#e7eee5] text-[10px] font-semibold text-[#1c5b4e]">0{index + 1}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.025em] text-[#26312d]">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#6c7065]">{index < 3 && original ? original.description : step.description}</p>
                <span className="mt-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#eee9dd] text-[#1c5b4e] transition-colors group-hover:bg-[#1c5b4e] group-hover:text-white"><ArrowRight className="h-4 w-4" /></span>
                {index < processLabels.length - 1 && <span className="absolute -right-4 top-1/2 z-20 hidden text-xl text-[#1c5b4e] lg:block">→</span>}
              </div>
            )
          })}
        </div>

        <div className="mt-7 grid overflow-hidden rounded-xl border border-[#d3dbd0] bg-[#f8f5eb] lg:grid-cols-[1.1fr_2fr]">
          <div className="relative overflow-hidden bg-[#063e2e] px-6 py-8 text-white sm:px-10"><div className="absolute -right-20 -top-16 h-56 w-56 rounded-full border-[28px] border-[#2f7359]/60" /><div className="absolute bottom-[-4rem] right-[-1rem] h-40 w-40 rounded-full bg-[#7b9d7c]/30" /><div className="relative z-10"><span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80">Our Commitment</span><h3 className="mt-5 max-w-xs font-serif text-3xl leading-[0.95] tracking-[-0.03em] sm:text-4xl">More Than Just<br />Development</h3><p className="mt-4 max-w-sm text-xs leading-5 text-white/70">{data.profile.tagline} We’re building long-term partnerships.</p></div></div>
          <div className="grid gap-6 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-5 lg:px-8">{commitments.map((commitment) => { const Icon = commitment.icon; return <div key={commitment.title} className="group"><Icon className="h-6 w-6 text-[#1c5b4e] transition-transform duration-300 group-hover:-translate-y-1" /><h4 className="mt-4 text-sm font-semibold text-[#26312d]">{commitment.title}</h4><p className="mt-2 text-[11px] leading-5 text-[#6c7065]">{commitment.description}</p></div> })}</div>
        </div>

        <blockquote className="mt-10 text-center font-serif text-xl italic text-[#476453] sm:text-2xl">&quot;You take care of your customers, we&apos;ll take care of your business.&quot;</blockquote>
      </div>
    </section>
  )
}
