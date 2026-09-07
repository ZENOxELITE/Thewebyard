import type { PortfolioData } from "@/types/portfolio"

interface JsonLdProps {
  data: PortfolioData
}

export function JsonLd({ data }: JsonLdProps) {
  const { profile, meta, services, contact, background } = data

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: meta.siteDescription,
    url: meta.siteUrl,
    sameAs: [contact.linkedin, contact.twitter],
    email: contact.email,
    knowsAbout: services.map((s) => s.title),
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} - ${profile.title}`,
    description: meta.siteDescription,
    url: meta.siteUrl,
    priceRange: "$$$$",
    areaServed: data.targetRegions.map((region) => ({
      "@type": "Place",
      name: region,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: meta.siteTitle,
    url: meta.siteUrl,
    description: meta.siteDescription,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
