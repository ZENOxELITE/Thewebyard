"use client"

import { useEffect, useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import { company, demo, products } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buttonStyles, Container, Heading, Reveal, SELECT_PRODUCT_EVENT } from "./primitives"
import { WireField, type WireBuilder } from "./wire-field"

/* Two bundles — one from the left edge, one from the right — meet at a pinch
   and spill toward the bottom of the card. */
const buildDemoWire: WireBuilder = (_i, t, time, px, py) => {
  const fromLeft = t < 0.5
  const u = fromLeft ? t * 2 : (t - 0.5) * 2
  const wave = Math.sin(time * 0.5 + u * 4) * 5
  const pX = 430 + px * 14
  const pY = 300 + py * 8 + Math.sin(time * 0.35) * 4
  const startY = (fromLeft ? 20 : 60) + u * 170 + wave
  const start = fromLeft ? `M0 ${startY} C240 ${startY} ${pX - 110} ${pY} ${pX} ${pY}` : `M1000 ${startY} C720 ${startY} ${pX + 140} ${pY} ${pX} ${pY}`
  const endX = 470 + u * 90 + wave
  return `${start} C${pX + 50} ${pY} ${endX - 20} 470 ${endX} 540`
}

const field =
  "w-full rounded-lg border border-line bg-white/70 px-3 text-sm text-ink transition-colors placeholder:text-ink-3 hover:border-line-strong focus:border-ink-3 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ink/5"

function Label({ children }: { children: string }) {
  return <span className="mb-1.5 block text-xs text-ink-2">{children}</span>
}

export function Demo() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [error, setError] = useState("")
  const [product, setProduct] = useState(products[0].id)

  useEffect(() => {
    const onSelect = (e: Event) => setProduct((e as CustomEvent<string>).detail)
    window.addEventListener(SELECT_PRODUCT_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_PRODUCT_EVENT, onSelect)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    const body = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const result = await res.json().catch(() => null)
        throw new Error(result?.error || "We couldn’t send that. Please try again, or message us on WhatsApp.")
      }
      setStatus("sent")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setStatus("idle")
    }
  }

  const contacts = [
    { label: `WhatsApp ${company.whatsappDisplay}`, href: company.whatsappUrl, external: true },
    { label: company.email, href: `mailto:${company.email}`, external: false },
    { label: `Instagram ${company.instagramHandle}`, href: company.instagram, external: true },
  ]

  return (
    <section id="demo" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
            <WireField
              count={72}
              viewBox="0 0 1000 540"
              build={buildDemoWire}
              strokeWidth={0.6}
              drawStagger={10}
              opacity={(t) => 0.12 + 0.35 * (1 - Math.abs((t < 0.5 ? t * 2 : (t - 0.5) * 2) - 0.5) * 2)}
              className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            />

            <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.05fr] md:gap-10">
              <div>
                <Heading className="text-4xl leading-[1] sm:text-[2.6rem]">
                  {demo.titleDark}
                  <br />
                  <span className="text-ink-soft">{demo.titleLight}</span>
                </Heading>
                <p className="mt-4 max-w-xs text-sm leading-6 text-ink-2">{demo.body}</p>
                <ul className="mt-6 space-y-3.5">
                  {contacts.map(({ label, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex rounded-md bg-white/80 pr-2 text-sm text-ink transition-colors hover:text-signal"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-paper-2/95 p-4 backdrop-blur-sm sm:p-5">
                {status === "sent" ? (
                  <div className="flex min-h-[22rem] flex-col items-center justify-center text-center" role="status">
                    <CheckCircle2 className="h-10 w-10 text-ink" strokeWidth={1.5} />
                    <p className="mt-4 font-display text-xl font-semibold text-ink">{demo.successTitle}</p>
                    <p className="mt-2 max-w-xs text-sm text-ink-2">{demo.successBody}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <label className="block">
                        <Label>Name</Label>
                        <input name="name" required autoComplete="name" className={cn(field, "h-10")} />
                      </label>
                      <label className="block">
                        <Label>Phone / WhatsApp</Label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="03XX XXXXXXX"
                          className={cn(field, "h-10")}
                        />
                      </label>
                    </div>
                    <label className="block">
                      <Label>Business name</Label>
                      <input name="business" autoComplete="organization" className={cn(field, "h-10")} />
                    </label>
                    <label className="block">
                      <Label>I’m interested in</Label>
                      <select
                        name="product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className={cn(field, "h-10")}
                      >
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                        <option value="custom">Custom software</option>
                        <option value="other">Not sure yet</option>
                      </select>
                    </label>
                    <label className="block">
                      <Label>Message</Label>
                      <textarea name="message" rows={3} className={cn(field, "resize-y py-2.5")} />
                    </label>
                    {error && (
                      <p className="text-sm text-signal" role="alert">
                        {error}
                      </p>
                    )}
                    <button type="submit" disabled={status === "sending"} className={cn(buttonStyles.signal, "w-full")}>
                      {status === "sending" ? "Sending…" : demo.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
