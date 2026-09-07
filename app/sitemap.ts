import { MetadataRoute } from "next"
import portfolioData from "@/data/portfolio-data.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const { meta } = portfolioData
  const baseUrl = meta.siteUrl

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
