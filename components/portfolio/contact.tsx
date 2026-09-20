"use client"

import { useState } from "react"
import { ArrowRight, Instagram, Mail, MessageCircle, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { PortfolioData } from "@/types/portfolio"

interface ContactProps {
  data: PortfolioData
}

function ContactScene() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-[28rem] sm:h-72">
      <div className="absolute bottom-4 left-1/2 h-16 w-64 -translate-x-1/2 rounded-[50%] bg-[#dbe5d4]" />
      <div className="absolute left-[18%] top-8 h-32 w-5 rotate-[-25deg] rounded-full bg-[#4b795e]" /><div className="absolute left-[28%] top-2 h-28 w-5 rotate-[20deg] rounded-full bg-[#83a476]" /><div className="absolute left-[38%] top-12 h-24 w-4 rotate-[55deg] rounded-full bg-[#6c936b]" />
      <div className="absolute right-[15%] top-10 h-28 w-5 rotate-[30deg] rounded-full bg-[#4b795e]" /><div className="absolute right-[25%] top-1 h-24 w-4 rotate-[-20deg] rounded-full bg-[#83a476]" />
      <div className="absolute bottom-12 left-[28%] z-10 w-[48%] rotate-[-4deg] transition-transform duration-500 hover:-translate-y-2">
        <div className="aspect-[1.45] overflow-hidden rounded-lg border-[6px] border-[#174c3c] bg-[#f7f4e9] shadow-[0_18px_25px_rgba(18,56,42,0.22)]"><div className="h-5 border-b border-[#d4dfd0] bg-white/70 px-2 text-[5px] leading-5 text-[#47705b]">Orvexa Systems</div><div className="grid grid-cols-2 gap-2 p-3"><div><span className="block text-[7px] uppercase tracking-[0.12em] text-[#60806a]">Clear plans</span><strong className="mt-2 block font-serif text-sm leading-none text-[#173e32]">Working software.</strong><span className="mt-3 block h-1.5 w-10 rounded bg-[#1c5b4e]" /></div><div className="rounded bg-[#d7e3d3]" /></div></div><div className="mx-[-5%] h-3 rounded-[50%] bg-[#174c3c]" />
      </div>
      <div className="absolute bottom-9 right-[16%] z-20 h-16 w-16 rounded-b-2xl rounded-t-lg bg-[#174c3c] text-center text-[8px] italic text-white shadow-lg"><span className="block pt-5 font-serif">Clear<br />plans.</span><span className="absolute right-[-0.8rem] top-5 h-7 w-5 rounded-r-full border-4 border-[#174c3c]" /></div>
      <div className="absolute right-[28%] top-0 z-20 text-[#1c5b4e]"><Send className="h-8 w-8 -rotate-45" /><span className="absolute left-[-1rem] top-7 h-8 w-10 border-b border-dashed border-[#6c9a75]" /></div>
    </div>
  )
}

export function Contact({ data }: ContactProps) {
  const { contact, profile, services } = data
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      const result = await response.json().catch(() => null)
      setSubmitError(result?.error || "We could not send your message. Please try again.")
      return
    }

    setSubmitted(true)
  }

  const contactMethods = [
    contact.email && { label: "Email Us", detail: "For project details and files.", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },

    contact.instagram && { label: "Follow Us", detail: "Recent work on Instagram.", value: "Instagram", href: contact.instagram, icon: Instagram },
  ].filter(Boolean) as Array<{ label: string; detail: string; value: string; href: string; icon: typeof Mail }>

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f2eee4] py-20 text-[#1f2825] lg:py-28">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-[#dfd9c9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5d6257]">Get in Touch</span>
            <h2 className="max-w-md font-serif text-5xl leading-[0.9] tracking-[-0.045em] text-[#063e2e] sm:text-6xl">Let&apos;s Work<br />Together</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#587266] sm:text-base">Tell us what you are trying to build or fix. We reply with next steps, usually within 24 hours.</p>
            <p className="mt-8 max-w-xs -rotate-6 font-serif text-2xl italic leading-6 text-[#1c5b4e]">Clear plans.<br />Working software.</p>
            <ContactScene />
            <div className="grid gap-3 sm:grid-cols-2">
              {contactMethods.map((method) => { const Icon = method.icon; return <a key={method.label} href={method.href} target={method.href.startsWith("mailto:") ? undefined : "_blank"} rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="group rounded-xl border border-[#ddd6c8] bg-[#fbf9f3]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#bcb4a4] hover:shadow-[0_12px_25px_rgba(67,61,46,0.1)]"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce9d9] text-[#1c5b4e]"><Icon className="h-5 w-5" /></span><div className="min-w-0"><h3 className="text-sm font-semibold text-[#26312d]">{method.label}</h3><p className="mt-1 text-[10px] text-[#718075]">{method.detail}</p><p className="mt-2 truncate text-[10px] font-medium text-[#1c5b4e]">{method.value}</p></div><ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#8aa08e] transition-transform group-hover:translate-x-1" /></div></a> })}
            </div>
          </div>

          <div className="rounded-2xl border border-[#ddd6c8] bg-[#fbf9f3]/85 p-6 shadow-[0_12px_32px_rgba(67,61,46,0.06)] sm:p-8 lg:mt-8 lg:p-10">
            <div className="mb-7"><h3 className="mt-3 font-serif text-3xl leading-none tracking-[-0.035em] text-[#26312d] sm:text-4xl">Tell us about your project</h3><p className="mt-4 text-sm leading-6 text-[#6c7065]">Share a few details and we&apos;ll reply within 24 hours.</p></div>
            {submitted ? <div className="flex min-h-80 flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dce9d9] text-[#1c5b4e]"><Send className="h-7 w-7" /></div><h4 className="mt-5 text-xl font-semibold text-[#26312d]">Message Sent!</h4><p className="mt-2 text-sm text-[#6c7065]">Thank you for reaching out. I&apos;ll get back to you soon.</p></div> : <form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name" className="text-xs text-[#526b5e]">Name *</Label><Input id="name" name="name" placeholder="Your name" required className="h-12 rounded-lg border-[#d8dfd2] bg-[#f8f5eb]/70 text-sm" /></div><div className="space-y-2"><Label htmlFor="email" className="text-xs text-[#526b5e]">Email *</Label><Input id="email" name="email" type="email" placeholder="you@company.com" required className="h-12 rounded-lg border-[#d8dfd2] bg-[#f8f5eb]/70 text-sm" /></div></div><div className="space-y-2"><Label htmlFor="company" className="text-xs text-[#526b5e]">Company</Label><Input id="company" name="company" placeholder="Your company name" className="h-12 rounded-lg border-[#d8dfd2] bg-[#f8f5eb]/70 text-sm" /></div><div className="space-y-2"><Label htmlFor="service" className="text-xs text-[#526b5e]">What service are you interested in? *</Label><select id="service" name="service" className="h-12 w-full rounded-lg border border-[#d8dfd2] bg-[#f8f5eb]/70 px-3 text-sm text-[#526b5e] focus:outline-none focus:ring-2 focus:ring-[#1c5b4e]" required><option value="">Select a service</option>{services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}<option value="other">Other / Not Sure</option></select></div><div className="space-y-2"><Label htmlFor="message" className="text-xs text-[#526b5e]">Message *</Label><Textarea id="message" name="message" placeholder="Tell us about your project and goals..." rows={5} required className="resize-none rounded-lg border-[#d8dfd2] bg-[#f8f5eb]/70 text-sm" /></div>{submitError && <p className="text-sm text-red-700" role="alert">{submitError}</p>}<button type="submit" disabled={isSubmitting} className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#07543e] text-sm font-semibold text-white transition-all hover:bg-[#063f30] disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending..." : <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}</button></form>}
          </div>
        </div>
      </div>
    </section>
  )
}
