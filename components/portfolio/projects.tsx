"use client"

import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ProjectsProps {
  data: PortfolioData
}

const projectImages: Record<string, string> = {
  "atlas-gym": "/atlas gym.png",
  "crown-properties": "/Propertise.png",
  "fort-gym": "/Fitness app.png",
  "aura-salon-and-spa": "/Beauty wellness.png",
  "the-formula-lab": "/bettershop.png",
}

const projectOrder = ["crown-properties", "fort-gym", "aura-salon-and-spa", "the-formula-lab"]

function ProjectImage({ projectId, title, featured = false }: { projectId: string; title: string; featured?: boolean }) {
  const src = projectImages[projectId]

  return (
    <div className={`relative overflow-hidden bg-[#e3e8dc] ${featured ? "h-full min-h-72 lg:min-h-[22rem]" : "h-44"}`}>
      <img src={src} alt={`${title} project preview`} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-[#0c4635]/10 transition-colors duration-500 group-hover:bg-[#0c4635]/5" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-white/30" />
    </div>
  )
}

function ProjectCard({ project }: { project: PortfolioData["projects"][number] }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] shadow-[0_8px_25px_rgba(67,61,46,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_16px_32px_rgba(67,61,46,0.12)]">
      <div className="relative overflow-hidden"><ProjectImage projectId={project.id} title={project.title} /><span className="absolute left-3 top-3 rounded-full bg-[#f8f5eb]/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#426853]">{project.category.replace(" Web Development", "")}</span><span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f5eb]/90 text-[#1c5b4e] transition-colors group-hover:bg-[#1c5b4e] group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span></div>
      <div className="flex flex-1 flex-col p-4 sm:p-5"><h3 className="font-serif text-xl tracking-[-0.025em] text-[#26312d]">{project.title}</h3><p className="mt-2 line-clamp-3 text-xs leading-5 text-[#607568]">{project.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-4">{project.tech.split(",").map((tech) => <span key={tech} className="rounded-full bg-[#eee9dd] px-2.5 py-1 text-[9px] font-medium text-[#6c7065]">{tech.trim()}</span>)}</div></div>
    </a>
  )
}

function ArticleVisual({ index, featured = false }: { index: number; featured?: boolean }) {
  const tones = ["bg-[#dce4d9]", "bg-[#e7e4d6]", "bg-[#e8e3d4]", "bg-[#dce7df]", "bg-[#e8ddd5]", "bg-[#e3e8d9]", "bg-[#dbe6e3]"]
  return <div className={`absolute inset-0 overflow-hidden ${tones[index % tones.length]}`}><div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[20px] border-white/40" /><div className={`absolute ${featured ? "left-[25%] top-8 h-40 w-[45%]" : "left-8 top-8 h-24 w-28"} rounded-lg border border-white/80 bg-[#f8f5eb]/85 p-3 shadow-lg`}><div className="h-2 w-14 rounded bg-[#5b856d]" /><div className="mt-3 grid grid-cols-2 gap-1"><span className="h-12 rounded bg-[#c5d8c8]" /><span className="h-12 rounded bg-[#eef1e8]" /><span className="col-span-2 h-3 rounded bg-[#a3bea9]" /></div></div><div className="absolute bottom-[-2rem] left-[-1rem] h-32 w-32 rounded-full bg-[#9dbbaa]/40" /></div>
}

export function Projects({ data }: ProjectsProps) {
  const { projects, blogPosts } = data
  const featuredProject = projects.find((project) => project.id === "atlas-gym")
  const cards = projectOrder.map((id) => projects.find((project) => project.id === id)).filter(Boolean) as PortfolioData["projects"]

  return (
    <section id="projects" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-12">
          <div className="relative">
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Our Work</span>
            <h2 className="max-w-sm font-serif text-5xl leading-[0.88] tracking-[-0.045em] sm:text-6xl">Featured<br />Projects</h2>
            <p className="mt-6 max-w-xs text-sm leading-6 text-[#5d6257]">We turn ideas into powerful digital experiences. Explore some of our recent projects that showcase our creativity, technical expertise, and commitment to delivering real business value.</p>
            <p className="mt-10 max-w-xs -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e]">Ideas. Design. Code. Impact.</p>
            <div className="mt-6 h-px w-40 rotate-[-8deg] bg-[#1c5b4e]" />
          </div>

          {featuredProject && <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="group grid min-w-0 overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] shadow-[0_8px_30px_rgba(67,61,46,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(67,61,46,0.13)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between p-6 sm:p-8"><div><span className="inline-flex rounded-full bg-[#e8e3d6] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#426853]">Fitness Experience</span><h3 className="mt-5 font-serif text-4xl tracking-[-0.035em] text-[#26312d]">{featuredProject.title}</h3><p className="mt-4 text-sm leading-6 text-[#607568]">{featuredProject.description}</p><div className="mt-5 flex flex-wrap gap-2">{featuredProject.tech.split(",").map((tech) => <span key={tech} className="rounded-full bg-[#eee9dd] px-2.5 py-1 text-[9px] font-medium text-[#6c7065]">{tech.trim()}</span>)}</div></div><span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#1c5b4e] px-5 py-3 text-xs font-semibold text-white transition-colors group-hover:bg-[#16483e]">View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div><div className="relative min-h-72 lg:min-h-[22rem]"><ProjectImage projectId={featuredProject.id} title={featuredProject.title} featured /><span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f5eb]/90 text-[#1c5b4e]"><ArrowUpRight className="h-4 w-4" /></span></div>
          </a>}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{cards.map((project) => <ProjectCard key={project.id} project={project} />)}</div>

        <div className="mt-10 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77786d]"><span className="h-px w-10 bg-[#c9c1b1]" />5 Projects<span className="h-px w-10 bg-[#c9c1b1]" /></div>

        <div className="mt-20 border-t border-[#d8d1c2] pt-12">
          <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-xl"><span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Insights</span><h3 className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl">In-Depth Articles &amp; Guides</h3><p className="mt-4 max-w-md text-sm leading-6 text-[#5d6257]">Practical guides, technical insights, and ideas to help you build better digital systems.</p></div><p className="hidden max-w-44 -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e] md:block">Ideas worth<br />exploring</p></div>
          {blogPosts[0] && <a href={blogPosts[0].url} className="group mb-4 grid min-h-[22rem] overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] shadow-[0_8px_30px_rgba(67,61,46,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(67,61,46,0.12)] lg:grid-cols-[0.9fr_1.1fr]"><div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"><div><div className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77786d]"><span>{blogPosts[0].category}</span><span className="h-1 w-1 rounded-full bg-[#a9aa9b]" /><span>Featured guide</span></div><h4 className="max-w-lg text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#26312d] sm:text-3xl lg:text-4xl">{blogPosts[0].title}</h4><p className="mt-4 max-w-md text-sm leading-6 text-[#6c7065]">Your website is more than just a digital address — it&apos;s a powerful tool that can help you attract customers, build credibility, and grow your business.</p></div><span className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#1c5b4e] px-5 py-3 text-xs font-semibold text-white">Read article <ArrowRight className="h-4 w-4" /></span></div><div className="relative min-h-64 overflow-hidden sm:min-h-80"><ArticleVisual index={0} featured /></div></a>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.slice(1).map((post, index) => <a key={post.url} href={post.url} className="group relative flex min-h-[19rem] flex-col overflow-hidden rounded-xl border border-[#ddd6c8] bg-[#fbf9f3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(67,61,46,0.1)]"><div className="relative h-36 shrink-0 overflow-hidden"><ArticleVisual index={index + 1} /><span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f5eb]/90 text-[#5d6257]"><ExternalLink className="h-4 w-4" /></span></div><div className="flex flex-1 flex-col p-5"><span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#77786d]">{post.category}</span><h4 className="mt-3 text-base font-semibold leading-[1.12] tracking-[-0.025em] text-[#26312d]">{post.title}</h4><span className="mt-auto pt-5 text-[9px] font-semibold text-[#1c5b4e]">Read article →</span></div></a>)}</div>
        </div>
      </div>
    </section>
  )
}
