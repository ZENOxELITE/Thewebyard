"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface HeaderProps {
  data: PortfolioData
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Header({ data }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 text-[#063e2e] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        isScrolled
          ? "border-b border-[#d8dfd2]/75 bg-[#fbf8f0]/78 shadow-[0_8px_24px_rgba(42,70,55,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg lg:text-xl font-semibold text-foreground tracking-tight">
              {data.profile.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild size="sm">
              <a href={data.profile.ctaUrl} target="_blank" rel="noopener noreferrer">
                {data.profile.ctaText}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-full p-6 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:w-80 ${
                isScrolled
                  ? "border-l border-[#d8dfd2]/75 bg-[#fbf8f0]/82 shadow-[-8px_0_24px_rgba(42,70,55,0.08)] backdrop-blur-xl"
                  : "border-l border-[#d8dfd2]/50 bg-[#fbf8f0]/72 shadow-none backdrop-blur-lg"
              }`}
            >
              <div className="flex flex-col h-full">
                <SheetTitle className="text-lg font-semibold mb-8">
                  {data.profile.name}
                </SheetTitle>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={data.profile.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                    >
                      {data.profile.ctaText}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
