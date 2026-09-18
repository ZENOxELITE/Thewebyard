"use client"

import { ArrowRight, ArrowUpRight, Check, Cloud, Code2, Database, LockKeyhole, Palette, Sparkles, Zap } from "lucide-react"
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import {
  siDjango,
  siDocker,
  siFigma,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siShopify,
  siStreamlit,
  siTypescript,
  siVercel,
} from "simple-icons"
import type { PortfolioData } from "@/types/portfolio"

interface ExpertiseProps {
  data: PortfolioData
}

const skillVisuals = [
  { icon: Code2, title: "Web Development", description: "Modern, responsive websites and web applications using clean code and best practices.", tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"], tone: "bg-[#dce8df]" },
  { icon: Database, title: "Backend & Databases", description: "Robust, scalable backend systems with secure and efficient data management.", tags: ["Node.js", "Python", "MySQL", "MongoDB"], tone: "bg-[#e8e2d1]" },
  { icon: Cloud, title: "Cloud & DevOps", description: "Reliable deployment, automation, and cloud infrastructure for high performance.", tags: ["AWS", "Docker", "CI/CD", "Vercel"], tone: "bg-[#dce7df]" },
  { icon: Palette, title: "Design & Branding", description: "Clean, modern, and memorable visuals that strengthen your brand identity.", tags: ["Figma", "Adobe Illustrator", "Photoshop"], tone: "bg-[#e9ded7]" },
  { icon: Sparkles, title: "AI & Automation", description: "Smart automation and AI-powered workflows to save time and boost productivity.", tags: ["ChatGPT", "OpenAI", "Python", "n8n"], tone: "bg-[#e2e8d9]" },
  { icon: LockKeyhole, title: "Security & Best Practices", description: "Secure, reliable, and maintainable code, following industry standards and best practices.", tags: ["SSL", "OWASP", "Git", "GitHub"], tone: "bg-[#dce6e3]" },
]

const technologyIcons = {
  react: siReact,
  nextjs: siNextdotjs,
  python: siPython,
  django: siDjango,
  streamlit: siStreamlit,
  shopify: siShopify,
  figma: siFigma,
  typescript: siTypescript,
  nodejs: siNodedotjs,
  docker: siDocker,
  vercel: siVercel,
}

function TechnologyMark({ logo, name }: { logo: string; name: string }) {
  const icon = technologyIcons[logo as keyof typeof technologyIcons]

  if (icon) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current sm:h-7 sm:w-7">
        <path d={icon.path} />
      </svg>
    )
  }

  if (logo === "microsoft-word" || logo === "microsoft-excel") {
    return (
      <svg viewBox="0 0 448 512" aria-hidden="true" className="h-6 w-6 fill-current sm:h-7 sm:w-7">
        <path d={faMicrosoft.icon[4] as string} />
      </svg>
    )
  }

  return <span className="text-[9px] font-semibold">{name}</span>
}

function SkillVisual({ index }: { index: number }) {
  if (index === 0) {
    return <div className="absolute right-5 top-5 h-24 w-28 rounded-lg border border-white/80 bg-[#f8f5eb]/85 p-2 shadow-lg transition-transform duration-500 group-hover:-translate-y-1"><div className="h-2 w-12 rounded bg-[#5b856d]" /><div className="mt-3 grid grid-cols-2 gap-1"><span className="h-8 rounded bg-[#c5d8c8]" /><span className="h-8 rounded bg-[#eef1e8]" /><span className="col-span-2 h-3 rounded bg-[#a3bea9]" /></div></div>
  }
  if (index === 1) {
    return <div className="absolute right-6 top-6 space-y-1 transition-transform duration-500 group-hover:-translate-y-2"><div className="h-7 w-20 rounded bg-[#477660] shadow-md" /><div className="ml-2 h-7 w-20 rounded bg-[#609178] shadow-md" /><div className="ml-4 h-7 w-20 rounded bg-[#82a891] shadow-md" /></div>
  }
  if (index === 2) {
    return <div className="absolute right-5 top-5"><div className="flex h-20 w-28 items-center justify-center rounded-full bg-[#f4f7ed]/80 shadow-lg"><Cloud className="h-12 w-12 text-[#477660] transition-transform duration-500 group-hover:-translate-y-2" /></div><span className="absolute -bottom-2 -left-4 h-5 w-14 rounded-full bg-white/60" /></div>
  }
  if (index === 3) {
    return <div className="absolute right-6 top-5 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full border border-white/80 bg-[#f8eee7]/80 font-serif text-4xl italic text-[#956f60] transition-transform duration-500 group-hover:rotate-3">O</div>
  }
  if (index === 4) {
    return <div className="absolute right-5 top-5 flex h-24 w-24 items-center justify-center rounded-xl bg-[#eff5ef]/75 shadow-lg"><span className="rounded-lg bg-[#1c5b4e] px-3 py-2 text-xl font-semibold text-white shadow-[0_0_0_10px_rgba(28,91,78,0.12)] transition-transform duration-500 group-hover:scale-110">AI</span></div>
  }
  return <div className="absolute right-6 top-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#f0f5ed]/80 shadow-lg"><div className="flex h-14 w-12 items-center justify-center rounded-t-xl rounded-b-md bg-[#2f7058] text-white shadow-md transition-transform duration-500 group-hover:-translate-y-1"><LockKeyhole className="h-6 w-6" /></div></div>
}

export function Expertise({ data }: ExpertiseProps) {
  const { expertise, profile } = data
  const platforms = expertise[0]?.platforms ?? []

  return (
    <section id="expertise" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[#ddd6c8] bg-[#f8f5eb]/45 px-6 py-10 sm:px-10 lg:px-0 lg:py-14">
          <div className="relative z-10 max-w-xl lg:ml-10">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Expertise</span>
            <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Certified &amp; Experienced</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#5d6257] sm:text-base">Our team brings a blend of technical expertise, industry knowledge, and hands-on experience to deliver solutions you can trust.</p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-[#d8d1c2] pt-6">
              <div><strong className="block text-2xl font-semibold text-[#135744]">5+</strong><span className="text-[10px] text-[#77786d]">Years of Experience</span></div>
              <div className="border-l border-[#d8d1c2] pl-4"><strong className="block text-2xl font-semibold text-[#135744]">{profile.stats[1]?.value || "68+"}</strong><span className="text-[10px] text-[#77786d]">Projects Delivered</span></div>
              <div className="border-l border-[#d8d1c2] pl-4"><strong className="block text-2xl font-semibold text-[#135744]">100%</strong><span className="text-[10px] text-[#77786d]">Client Satisfaction</span></div>
            </div>
          </div>
          <div className="relative mt-10 h-56 sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-1/2">
            <div className="absolute right-8 top-8 h-48 w-48 rounded-full bg-[#a9bea9]/35 blur-sm sm:right-20" />
            <div className="absolute bottom-0 right-4 h-40 w-14 rotate-[-28deg] rounded-full bg-[#456d55]/80 sm:right-20" />
            <div className="absolute bottom-0 right-24 h-32 w-10 rotate-[24deg] rounded-full bg-[#86a386]/80 sm:right-40" />
            <div className="absolute left-8 top-6 w-52 rotate-2 rounded-lg border border-white/80 bg-[#f8f5eb]/90 p-5 shadow-[0_18px_28px_rgba(47,75,58,0.14)] transition-transform duration-500 hover:-translate-y-2 sm:left-20 sm:w-60"><span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#527061]">Certified</span><div className="mt-4 font-serif text-2xl leading-none text-[#263d32]">Professional<br />Developer</div><div className="mt-5 h-px w-20 bg-[#a7b9a7]" /><div className="mt-4 flex items-center gap-2 text-[9px] text-[#66806e]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d3dfd0]">✓</span> Trusted &amp; Verified</div></div>
            <div className="absolute bottom-5 left-1/2 rounded-lg bg-[#135744] p-4 text-white shadow-xl transition-transform duration-500 hover:scale-105 sm:left-1/2"><span className="text-[8px] uppercase tracking-[0.16em] text-white/60">Orvexa</span><div className="mt-1 text-sm font-semibold leading-tight">Trusted<br />&amp; Verified</div></div>
          </div>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77786d]">Our Expertise</span><h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Core Skills &amp; Certifications</h3><p className="mt-2 max-w-lg text-sm leading-6 text-[#6c7065]">We continuously upgrade our skills and stay current with the latest technologies to deliver modern, scalable, and future-ready solutions.</p></div>
          <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-[#77786d] sm:flex"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d1c2]">←</span><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d1c2]">→</span><span className="ml-2 h-px w-16 bg-[#c9c1b1]" /> Technologies we work with</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillVisuals.map((skill, index) => {
            const Icon = skill.icon
            return <article key={skill.title} className={`group relative min-h-56 overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_16px_32px_rgba(67,61,46,0.12)]`}>
              <div className={`absolute inset-x-0 top-0 h-32 ${skill.tone}`}><SkillVisual index={index} /></div>
              <div className="relative z-10 mt-24">
                <div className="flex items-start justify-between"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8dc] text-[#1c5b4e]"><Icon className="h-4 w-4" /></div><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eee9dd] text-[#5d6257] transition-colors group-hover:bg-[#1c5b4e] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span></div>
                <h4 className="mt-3 text-base font-semibold tracking-[-0.02em] text-[#26312d]">{skill.title}</h4><p className="mt-1 text-xs leading-5 text-[#6c7065]">{skill.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">{skill.tags.map((tag) => <span key={tag} className="text-[9px] text-[#77786d]">{tag}</span>)}</div>
              </div>
            </article>
          })}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#d9dfd2] bg-[#e5eadf]/80 px-5 py-6 shadow-[0_8px_24px_rgba(67,61,46,0.04)] sm:px-7 lg:px-8">
          <div className="pointer-events-none absolute -left-8 bottom-[-3rem] h-24 w-24 rotate-[-25deg] rounded-full border-[12px] border-[#b6c9b2]/40" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8">
            <div className="shrink-0 lg:w-48">
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77786d]">Trusted technologies &amp; platforms</span>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#26312d]">Tools We Work With</h3>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6">
              {platforms.map((platform) => {
                return (
                  <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group/tool flex min-w-0 flex-col items-center gap-2 text-center" title={platform.name}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#bdccbd] bg-[#f6f5ea]/80 text-[#275c49] transition-all duration-300 group-hover/tool:-translate-y-1 group-hover/tool:border-[#1c5b4e] group-hover/tool:bg-[#1c5b4e] group-hover/tool:text-white sm:h-10 sm:w-10">
                      <TechnologyMark logo={platform.logo} name={platform.name} />
                    </span>
                    <span className="max-w-full truncate text-[9px] font-medium text-[#52675a]">{platform.name}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-[#cbd5c8] pt-5 lg:w-52 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <h4 className="text-sm font-semibold tracking-[-0.02em] text-[#26312d]">Let&apos;s Build Something Great</h4>
                <p className="mt-1 text-[10px] leading-4 text-[#6c7065]">Have a project in mind? Let&apos;s bring it to life.</p>
              </div>
              <a href={data.profile.ctaUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#1c5b4e] px-4 py-2.5 text-[10px] font-semibold text-white transition-colors hover:bg-[#16483e]">
                Get a Quote on WhatsApp <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
