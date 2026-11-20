/**
 * All copy for the homepage lives here, so wording changes never require
 * touching the section components.
 */

export const company = {
  name: "Orvexa Systems",
  short: "Orvexa",
  tagline: "Software products for everyday businesses.",
  siteUrl: "https://orvexasystems.site",
  email: "orvexasystems.site@gmail.com",
  whatsappDisplay: "+92 339 8867672",
  whatsappUrl: "https://wa.me/923398867672?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20of%20Orvexa",
  customProjectUrl: "https://wa.me/923398867672?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20custom%20project",
  suggestBusinessUrl: "https://wa.me/923398867672?text=Hi%2C%20here%27s%20how%20I%20run%20my%20business%20today%3A%20",
  instagram: "https://www.instagram.com/orvexasystems1/",
  instagramHandle: "@orvexasystems1",
}

/**
 * Vercel sets VERCEL_ENV to "production" only for the live domain. Branch
 * previews get "preview" and are kept out of search engines. Local dev has no
 * VERCEL_ENV and behaves like production.
 */
export const isProductionDeploy = (process.env.VERCEL_ENV ?? "production") === "production"

export const seo = {
  title: "Orvexa Systems | Software That Runs Everyday Business",
  description:
    "Ready-made apps for shops, RO plants and local trades: ShopDesk and the RO Plant Management System. Runs on any phone, set up for you, one monthly plan. Book a free demo.",
}

export const nav = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#products", label: "Products" },
  { href: "#company", label: "Company" },
  { href: "#faq", label: "FAQ" },
]

export const hero = {
  eyebrow: "Software company",
  titleDark: "Software that runs",
  titleLight: "everyday business.",
  body: "Ready-made apps for shops, RO plants and local trades. Runs on any phone. Set up for you. One monthly plan.",
  primaryCta: "Explore products",
  secondaryCta: "Free demo on WhatsApp",
  builtWith: ["React", "Next.js", "Django", "Supabase", "Python", "Shopify"],
}

export const intro = {
  eyebrow: "Introduction",
  title: "What is Orvexa?",
  body: "A software company building focused, affordable products for local businesses — each one designed around how a single trade actually works, from the counter to the delivery route.",
  points: [
    { label: "Ready-made apps for each trade", icon: "grid" },
    { label: "Runs on any Android phone", icon: "phone" },
    { label: "One monthly plan, set up for you", icon: "calendar" },
  ] as const,
}

export const howItWorks = {
  eyebrow: "Get started",
  title: "How it works",
  body: "From first message to running your business on it — usually within a week.",
  steps: [
    { title: "Choose your product", body: "Pick the app built for your trade." },
    { title: "Free demo", body: "We show it on your own phone." },
    { title: "We set it up", body: "Products, customers, staff — done for you." },
    { title: "Go live, pay monthly", body: "Updates and support included." },
  ],
  chat: {
    ask: "Salam, ShopDesk ka demo mil sakta hai?",
    reply: "Ji bilkul! Kal 11 baje theek hai?",
  },
  setup: ["Products added", "Customers imported", "Staff training"],
}

export type Product = {
  id: string
  name: string
  appLabel: string
  audience: string
  body: string
  dot: string
  /** Leave empty to show "Pricing on request". */
  priceFrom: string
  screen: {
    headline: { label: string; value: number; prefix?: string }
    tiles: { label: string; value: string }[]
    row: { left: string; right: string }
  }
}

export const productsSection = {
  eyebrow: "Our products",
  title: "What we build",
  body: "Focused products for real trades — with more on the way.",
  inDevelopment: [{ title: "Next product", body: "Another local trade, another focused app. In development now." }],
  suggest: {
    title: "Different business?",
    body: "Tell us how you run it today. Your trade could be our next product.",
    cta: "Suggest your business",
  },
}

export const products: Product[] = [
  {
    id: "shopdesk",
    name: "ShopDesk",
    appLabel: "shopdesk",
    audience: "Grocery & general stores",
    body: "Sales, udhaar ledger, stock alerts and daily reports — your galla on your phone, for one shop or several.",
    dot: "#f2c94c",
    priceFrom: "",
    screen: {
      headline: { label: "Today’s sales", value: 48250, prefix: "Rs " },
      tiles: [
        { label: "Udhaar", value: "Rs 12,400" },
        { label: "Low stock", value: "6 items" },
      ],
      row: { left: "Rice 10kg", right: "Rs 3,900" },
    },
  },
  {
    id: "ro-plant",
    name: "RO Plant Management System",
    appLabel: "RO Plant",
    audience: "RO water plants",
    body: "Customers, delivery routes, bottles out and returned, monthly billing and dues — from the plant to the rider to the register.",
    dot: "#6cb6f0",
    priceFrom: "",
    screen: {
      headline: { label: "Bottles out today", value: 184 },
      tiles: [
        { label: "Returned", value: "152" },
        { label: "Dues", value: "Rs 21,600" },
      ],
      row: { left: "Route 2 · Ali", right: "38 btl" },
    },
  },
]

export const companySection = {
  eyebrow: "The company",
  title: "A small team that ships.",
  body: "Three years of building software for businesses across Pakistan, South Asia and the Middle East. We still take on custom builds — web apps, websites, Shopify stores and automation. Past work includes Crown Properties, Atlas Gym, Aura Salon & Spa and The Formula Lab.",
  link: "Talk to us about a custom project",
  stats: [
    { value: 46, suffix: "+", label: "clients served" },
    { value: 32, suffix: "+", label: "projects shipped" },
    { value: 3, suffix: "+", label: "years building" },
    { value: 7, suffix: "", label: "people on the team" },
  ],
}

export const faq = {
  eyebrow: "FAQ",
  title: "Questions owners ask",
  items: [
    {
      q: "Do I need a computer?",
      a: "No. Our products run on an ordinary Android phone. You can also use a laptop or tablet if you have one.",
    },
    {
      q: "How does the monthly plan work?",
      a: "One fixed monthly fee per business. Setup help, updates and WhatsApp support are included.",
    },
    {
      q: "Is my business data safe?",
      a: "Your data is stored securely online and backed up, so a lost phone doesn’t mean lost records. Only people you add can see it.",
    },
    {
      q: "Can my staff use it too?",
      a: "Yes. We add your staff during setup and train them, so the counter or delivery team can use it from day one.",
    },
    {
      q: "My business isn’t a shop or RO plant. Can you help?",
      a: "Message us. We’re building more products for local trades, and we build custom software when nothing ready-made fits.",
    },
  ],
}

export const demo = {
  titleDark: "See it on your phone",
  titleLight: "in 15 minutes.",
  body: "Book a free demo of any Orvexa product. No commitment.",
  submit: "Book my demo",
  successTitle: "Thanks — we’ll be in touch.",
  successBody: "We’ll message you on WhatsApp to set a time for your demo.",
}

export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Custom software", href: "#company" },
    { label: "FAQ", href: "#faq" },
  ],
}
