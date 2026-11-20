import { MetadataRoute } from "next"
import { company, isProductionDeploy } from "@/lib/site-content"

export default function robots(): MetadataRoute.Robots {
  // Preview deployments (e.g. preview.orvexasystems.site) must stay out of search results.
  if (!isProductionDeploy) {
    return { rules: { userAgent: "*", disallow: "/" } }
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  }
}
