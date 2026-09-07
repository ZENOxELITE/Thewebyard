"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ExpertiseProps {
  data: PortfolioData
}

export function Expertise({ data }: ExpertiseProps) {
  const { expertise, crmTools, noCodeTools, vibeCodingTools, automationTools, background } = data

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        </div>

        {/* Background */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg font-semibold">Professional Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {background.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-medium text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg font-semibold">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {background.education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
