"use client"

import { Badge } from "@/components/ui/badge"
import { Target, Handshake, Gem } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface PhilosophyProps {
  data: PortfolioData
}

const iconMap: Record<number, React.ReactNode> = {
  0: <Target className="h-8 w-8" />,
  1: <Handshake className="h-8 w-8" />,
  2: <Gem className="h-8 w-8" />,
}

export function Philosophy({ data }: PhilosophyProps) {
  const { workPhilosophy } = data

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            How We Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Working Philosophy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            we partner with founders and decision-makers who don&apos;t need a boardroom to say
            &quot;go!&quot; Working directly with folks who move fast is my kind of fun.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {workPhilosophy.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                {iconMap[index]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Motto */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl sm:text-3xl font-medium text-foreground italic max-w-2xl mx-auto">
            &quot;You take care of your customers, we'll take care of your business&quot;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
