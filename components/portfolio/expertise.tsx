"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ExpertiseProps {
  data: PortfolioData
}

export function Expertise({ data }: ExpertiseProps) {
  const { expertise, crmTools, noCodeTools, vibeCodingTools, automationTools, services } = data
  const excelDataService = services.find((service) => service.id === "excel-data-services")
  const logoBannerService = services.find((service) => service.id === "logo-banner-design")

  return (
    <section id="expertise" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Certified & Experienced
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Years of experience across enterprise and startup environments, with certifications
            across leading platforms.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Certified Expert</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {expertise[0]?.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-border bg-card hover:border-primary hover:shadow-md transition-all duration-300 text-sm font-medium text-foreground"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* CRM Tools */}
          <Card className="border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">CRM Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {crmTools.slice(0, 6).map((tool) => (
                  <Badge key={tool.name} variant="outline" className="text-xs">
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* No-Code Tools */}
          <Card className="border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">No-Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {noCodeTools.map((tool) => (
                  <Badge key={tool.name} variant="outline" className="text-xs">
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vibe Coding Tools */}
          <Card className="border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Vibe Coding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {vibeCodingTools.map((tool) => (
                  <Badge key={tool.name} variant="outline" className="text-xs">
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Automation Tools */}
          <Card className="border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {automationTools.map((tool) => (
                  <Badge key={tool.name} variant="outline" className="text-xs">
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {[excelDataService, logoBannerService].map(
            (service) =>
              service && (
                <Card key={service.id} className="border-border/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ),
          )}
        </div>

      </div>
    </section>
  )
}