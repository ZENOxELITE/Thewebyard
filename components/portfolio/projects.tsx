"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

interface ProjectsProps {
  data: PortfolioData
}

export function Projects({ data }: ProjectsProps) {
  const { projects, blogPosts } = data

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Selected Work & Resources
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A showcase of tools, directories, and resources I&apos;ve built to help businesses make
            better decisions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 bg-card"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Built with {project.tech}
                      </Badge>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
          ))}
        </div>

        {/* Blog Posts / Articles */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            In-Depth Articles & Guides
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                className="group flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card hover:border-border hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
