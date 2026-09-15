"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface TestimonialsProps {
  data: PortfolioData
}

export function Testimonials({ data }: TestimonialsProps) {
  const { testimonials, profile } = data

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what founders and business leaders have
            to say about working together.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              100% 5-star reviews across {profile.stats[0]?.value} clients
            </span>
          </div>
        </div>

        {/* Testimonials Marquee */}
        <div className="testimonial-marquee" aria-label="Client testimonials">
          <div className="testimonial-marquee__track">
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="testimonial-marquee__group"
                aria-hidden={groupIndex === 1}
              >
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={`${groupIndex}-${index}`}
                    className="relative w-[min(82vw,24rem)] shrink-0 border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="pt-8 pb-6">
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <blockquote className="text-foreground leading-relaxed mb-6">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
