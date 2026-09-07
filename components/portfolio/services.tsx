"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Code, Sparkles, Zap, Rocket, CheckCircle2 } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ServicesProps {
  data: PortfolioData
}

const iconMap: Record<string, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  rocket: <Rocket className="h-6 w-6" />,
}

export function Services({ data }: ServicesProps) {
  const { services } = data

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Transform Your Business Operations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From CRM implementation to workflow automation, I help businesses build systems that
            scale. Here&apos;s how I can help you grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <a
            href={data.profile.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            Book a free consultation call →
          </a>
        </div>
      </div>
    </section>
  )
}
