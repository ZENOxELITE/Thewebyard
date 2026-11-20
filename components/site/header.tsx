"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { company, nav } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buttonStyles, Container, LogoMark } from "./primitives"

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${company.name} home`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-white text-ink">
        <LogoMark className="h-4 w-4" />
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight text-ink">{company.short}</span>
    </a>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "bg-paper/80 shadow-[0_1px_0_var(--line)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        <Brand />

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-line bg-white/80 p-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:flex"
        >
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-ink-2 transition-colors hover:bg-paper hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a href="#demo" className={cn(buttonStyles.signal, "hidden px-4 py-2.5 text-[13px] md:inline-flex")}>
            Book a demo
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-0 bg-paper p-6 sm:w-80">
              <SheetTitle className="font-display text-lg font-semibold">{company.name}</SheetTitle>
              <nav className="mt-6 flex flex-col" aria-label="Mobile">
                {nav.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line py-4 text-base font-medium text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a href="#demo" onClick={() => setOpen(false)} className={cn(buttonStyles.signal, "mt-8 w-full py-3.5")}>
                Book a demo
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
