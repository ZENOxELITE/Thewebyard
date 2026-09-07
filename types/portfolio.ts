export interface PortfolioData {
  meta: {
    siteTitle: string
    siteDescription: string
    siteUrl: string
    ogImage: string
    keywords: string[]
    locale: string
    twitterHandle: string
  }
  profile: {
    name: string
    title: string
    tagline: string
    description: string
    ctaText: string
    ctaUrl: string
    avatar: string
    stats: Array<{
      value: string
      label: string
    }>
  }
  services: Array<{
    id: string
    title: string
    description: string
    icon: string
    features: string[]
  }>
  expertise: Array<{
    category: string
    platforms: Array<{
      name: string
      logo: string
      url: string
    }>
  }>
  crmTools: Array<{
    name: string
    category: string
    description: string
    badge: string | null
  }>
  projects: Array<{
    id: string
    title: string
    description: string
    category: string
    tech: string
    url: string
  }>
  blogPosts: Array<{
    title: string
    category: string
    url: string
  }>
  background: {
    experience: Array<{
      title: string
      company: string
      period: string
      description: string
    }>
    education: Array<{
      degree: string
      institution: string
      period: string
    }>
  }
  workPhilosophy: Array<{
    title: string
    description: string
  }>
  noCodeTools: Array<{
    name: string
    category: string
  }>
  vibeCodingTools: Array<{
    name: string
    category: string
  }>
  automationTools: Array<{
    name: string
    category: string
  }>
  testimonials: Array<{
    quote: string
    author: string
    title: string
    location: string
  }>
  targetRegions: string[]
  contact: {
    email: string
    calendly: string
    linkedin: string
    twitter: string
  }
  faq: Array<{
    question: string
    answer: string
  }>
}
