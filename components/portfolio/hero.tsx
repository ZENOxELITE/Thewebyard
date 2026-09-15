"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface HeroProps {
  data: PortfolioData
}

export function Hero({ data }: HeroProps) {
  const { profile } = data

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          {/* <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Hello, I am
          </p> */}

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight mb-6 text-balance">
            {profile.name}
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
            {profile.title}
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
            {profile.tagline}
          </p>

          {/* Description */}
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {profile.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8">
              <a href={profile.ctaUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {profile.ctaText}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8"
            >
              <a href="#projects">
                View our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by founders and businesses across
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              {data.targetRegions.slice(0, 5).map((region, index) => (
                <span key={region} className="flex items-center">
                  {region}
                  {index < 4 && <span className="mx-2 text-border">•</span>}
                </span>
              ))}
              <span className="text-foreground">& more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
