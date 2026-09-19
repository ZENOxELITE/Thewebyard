"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface FooterProps {
  data: PortfolioData
}

const quickLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

function LeafDecoration({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <div className={`pointer-events-none absolute bottom-0 h-52 w-44 opacity-80 ${mirrored ? "right-0 scale-x-[-1]" : "left-0"}`} aria-hidden="true">
      <div className="absolute bottom-0 left-8 h-40 w-5 rotate-[30deg] rounded-full bg-[#4e8060]" />
      <div className="absolute bottom-7 left-2 h-28 w-5 rotate-[-34deg] rounded-full bg-[#709873]" />
      <div className="absolute bottom-16 left-16 h-28 w-5 rotate-[58deg] rounded-full bg-[#87a779]" />
      <div className="absolute bottom-2 left-16 h-24 w-5 rotate-[88deg] rounded-full bg-[#3e7055]" />
      <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full border-[16px] border-[#dce6d6]/80" />
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group flex items-center justify-between gap-3 text-sm text-[#557569] transition-colors duration-200 hover:text-[#135744]"><span>{children}</span><span className="translate-x-0 opacity-60 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">→</span></Link>
}

export function Footer({ data }: FooterProps) {
  const { profile, contact, services, targetRegions } = data
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#f7f4e9] text-[#1f2825]">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/45 to-transparent" />
      <LeafDecoration />
      <LeafDecoration mirrored />
      <span className="absolute right-[8%] top-20 text-3xl text-[#135744]" aria-hidden="true">✦</span>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 py-16 md:grid-cols-[1.15fr_1fr_0.9fr_1fr] md:gap-0 lg:py-20">
          <div className="border-[#d8dfd2] md:pr-12 md:border-r">
            <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#063e2e]">{profile.name}</h3>
            <p className="mt-5 max-w-xs text-base leading-7 text-[#557569]">{profile.tagline}</p>
            <div className="mt-8 flex gap-3">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center text-[#1c5b4e] transition-all duration-200 hover:-translate-y-1 hover:scale-110" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center text-[#1c5b4e] transition-all duration-200 hover:-translate-y-1 hover:scale-110" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center text-[#1c5b4e] transition-all duration-200 hover:-translate-y-1 hover:scale-110" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href={`mailto:${contact.email}`} className="flex h-8 w-8 items-center justify-center text-[#1c5b4e] transition-all duration-200 hover:-translate-y-1 hover:scale-110" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="border-[#d8dfd2] md:px-10 md:border-r">
            <h4 className="mb-6 text-sm font-semibold text-[#135744]">Services</h4>
            <ul className="space-y-4">{services.map((service) => <li key={service.id}><FooterLink href="#services">{service.title}</FooterLink></li>)}</ul>
          </div>

          <div className="border-[#d8dfd2] md:px-10 md:border-r">
            <h4 className="mb-6 text-sm font-semibold text-[#135744]">Quick Links</h4>
            <ul className="space-y-4">{quickLinks.map((link) => <li key={link.href}><FooterLink href={link.href}>{link.label}</FooterLink></li>)}</ul>
          </div>

          <div className="md:pl-10">
            <h4 className="mb-6 text-sm font-semibold text-[#135744]">Serving Clients In</h4>
            <ul className="space-y-4">{targetRegions.slice(0, 6).map((region) => <li key={region} className="flex items-center gap-3 text-sm text-[#557569]"><MapPin className="h-4 w-4 shrink-0 text-[#1c5b4e]" />{region}</li>)}<li className="text-sm text-[#7a8b7d]">&amp; more regions worldwide</li></ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-[#d8dfd2] py-7 sm:flex-row sm:items-center">
          <p className="text-sm text-[#668074]">© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="font-serif text-xl italic text-[#1c5b4e]">No boardroom. Just &quot;go&quot;.</p>
        </div>
      </div>
    </footer>
  )
}
