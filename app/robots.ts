import { MetadataRoute } from "next"
import portfolioData from "@/data/portfolio-data.json"

export default function robots(): MetadataRoute.Robots {
  const { meta } = portfolioData
  const baseUrl = meta.siteUrl

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
