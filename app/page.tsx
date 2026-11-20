import type { Metadata } from "next"
import { company, faq, isProductionDeploy, products, seo } from "@/lib/site-content"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Intro } from "@/components/site/intro"
import { HowItWorks } from "@/components/site/how-it-works"
import { Products } from "@/components/site/products"
import { Company } from "@/components/site/company"
import { FAQ } from "@/components/site/faq"
import { Demo } from "@/components/site/demo"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(company.siteUrl),
  alternates: { canonical: company.siteUrl },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: company.siteUrl,
    title: seo.title,
    description: seo.description,
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: isProductionDeploy ? { index: true, follow: true } : { index: false, follow: false },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    sameAs: [company.instagram],
  },
  ...products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Web",
    description: p.body,
    publisher: { "@type": "Organization", name: company.name },
  })),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <HowItWorks />
        <Products />
        <Company />
        <FAQ />
        <Demo />
      </main>
      <Footer />
    </>
  )
}
