"use client"

import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface FooterProps {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  const { profile, contact, services, targetRegions } = data
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">{profile.name}</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              {profile.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/50">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/50">
              Serving Clients In
            </h4>
            <ul className="space-y-2">
              {targetRegions.slice(0, 6).map((region) => (
                <li key={region} className="text-sm text-background/70">
                  {region}
                </li>
              ))}
              <li className="text-sm text-background/50">& more regions worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            No boardroom. Just "go".
          </p>
        </div>
      </div>
    </footer>
  )
}
