import type { Metadata } from "next"
import portfolioData from "@/data/portfolio-data.json"
import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
// import { Stats } from "@/components/portfolio/stats"
import { Services } from "@/components/portfolio/services"
import { Projects } from "@/components/portfolio/projects"
// import { Expertise } from "@/components/portfolio/expertise"
import { Philosophy } from "@/components/portfolio/philosophy"
// import { Testimonials } from "@/components/portfolio/testimonials"
import { FAQ } from "@/components/portfolio/faq"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { JsonLd } from "@/components/portfolio/json-ld"

const { meta, profile } = portfolioData

export const metadata: Metadata = {
  title: meta.siteTitle,
  description: meta.siteDescription,
  keywords: meta.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL(meta.siteUrl),
  alternates: {
    canonical: meta.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: meta.locale,
    url: meta.siteUrl,
    title: meta.siteTitle,
    description: meta.siteDescription,
    siteName: profile.name,
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.siteTitle,
    description: meta.siteDescription,
    creator: meta.twitterHandle,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioData} />
      <main className="min-h-screen bg-background">
        <Header data={portfolioData} />
        <Hero data={portfolioData} />
        {/* <Stats data={portfolioData} /> */}
        <Services data={portfolioData} />
        <Projects data={portfolioData} />
        {/* <Expertise data={portfolioData} /> */}
        <Philosophy data={portfolioData} />
        {/* <Testimonials data={portfolioData} /> */}
        <FAQ data={portfolioData} />
        <Contact data={portfolioData} />
        <Footer data={portfolioData} />
      </main>
    </>
  )
}
