import { MetadataRoute } from "next"
import { company } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.siteUrl

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
