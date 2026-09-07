"use client"

import type { PortfolioData } from "@/types/portfolio"

interface StatsProps {
  data: PortfolioData
}

export function Stats({ data }: StatsProps) {
  const { profile } = data

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {profile.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
