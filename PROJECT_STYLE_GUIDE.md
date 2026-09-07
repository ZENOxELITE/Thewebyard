# Project Style & Content Guide

This document summarizes the design system, typography, color palette, site sections, and content structure used in this project.

---

## 1. Project Overview

- Framework: Next.js 16
- Styling: Tailwind CSS v4
- UI primitives: Radix UI + custom component layer
- Theme system: CSS variables with light/dark mode support
- Fonts: Inter + JetBrains Mono via Next.js `next/font/google`
- Main portfolio structure: one-page business consultant / systems designer landing page

Core app files:
- `app/page.tsx` – page composition and section order
- `app/layout.tsx` – global font registration and root layout
- `app/globals.css` – theme variables and Tailwind theme mapping
- `data/portfolio-data.json` – all portfolio content and metadata

---

## 2. Typography

### Fonts used

From `app/layout.tsx`:

- `Inter` → variable: `--font-inter`
- `JetBrains_Mono` → variable: `--font-mono`

CSS mapping in `app/globals.css`:

- `--font-sans: var(--font-inter), 'Inter', ui-sans-serif, system-ui, sans-serif;`
- `--font-mono: var(--font-mono), 'JetBrains Mono', ui-monospace, monospace;`

### Font usage in app

- Global body class: `font-sans antialiased`
- Monospace is reserved for code or technical labels, using the `font-mono` utility
- Smooth scrolling is enabled globally with `html { scroll-behavior: smooth; }`

### Site branding text

From `data/portfolio-data.json`:

- Site title: `Amit Sarda | Business Consultant & Systems Designer`
- Tagline: `I help founders grow their sales by building scalable systems using SaaS, No-code, and Automation.`
- Description: `A solo consultant who partners with decision-makers to build systems that make businesses run like a dream.`

---

## 3. Color System

The project uses a modern OKLCH-based color token system with both light and dark theme values.

### Light theme (`:root`)

- `--background`: `oklch(0.98 0.002 240)`
- `--foreground`: `oklch(0.13 0.02 240)`
- `--card`: `oklch(1 0 0)`
- `--card-foreground`: `oklch(0.13 0.02 240)`
- `--popover`: `oklch(1 0 0)`
- `--popover-foreground`: `oklch(0.13 0.02 240)`
- `--primary`: `oklch(0.13 0.02 240)`
- `--primary-foreground`: `oklch(0.98 0.002 240)`
- `--secondary`: `oklch(0.96 0.005 240)`
- `--secondary-foreground`: `oklch(0.13 0.02 240)`
- `--muted`: `oklch(0.94 0.005 240)`
- `--muted-foreground`: `oklch(0.45 0.02 240)`
- `--accent`: `oklch(0.55 0.15 250)`
- `--accent-foreground`: `oklch(0.98 0.002 240)`
- `--destructive`: `oklch(0.577 0.245 27.325)`
- `--border`: `oklch(0.90 0.005 240)`
- `--input`: `oklch(0.90 0.005 240)`
- `--ring`: `oklch(0.55 0.15 250)`

### Dark theme (`.dark`)

- `--background`: `oklch(0.11 0.02 240)`
- `--foreground`: `oklch(0.95 0.005 240)`
- `--card`: `oklch(0.15 0.02 240)`
- `--card-foreground`: `oklch(0.95 0.005 240)`
- `--popover`: `oklch(0.15 0.02 240)`
- `--popover-foreground`: `oklch(0.95 0.005 240)`
- `--primary`: `oklch(0.95 0.005 240)`
- `--primary-foreground`: `oklch(0.11 0.02 240)`
- `--secondary`: `oklch(0.20 0.02 240)`
- `--secondary-foreground`: `oklch(0.95 0.005 240)`
- `--muted`: `oklch(0.20 0.02 240)`
- `--muted-foreground`: `oklch(0.65 0.02 240)`
- `--accent`: `oklch(0.55 0.15 250)`
- `--accent-foreground`: `oklch(0.95 0.005 240)`
- `--destructive`: `oklch(0.396 0.141 25.723)`
- `--border`: `oklch(0.25 0.02 240)`
- `--input`: `oklch(0.25 0.02 240)`
- `--ring`: `oklch(0.55 0.15 250)`

### Chart colors

- `--chart-1`: `oklch(0.646 0.222 41.116)`
- `--chart-2`: `oklch(0.6 0.118 184.704)`
- `--chart-3`: `oklch(0.398 0.07 227.392)`
- `--chart-4`: `oklch(0.828 0.189 84.429)`
- `--chart-5`: `oklch(0.769 0.188 70.08)`

### Radius / shape system

- `--radius`: `0.5rem`
- `--radius-sm`: `calc(var(--radius) - 4px)`
- `--radius-md`: `calc(var(--radius) - 2px)`
- `--radius-lg`: `var(--radius)`
- `--radius-xl`: `calc(var(--radius) + 4px)`

### Base styling rules

From `app/globals.css`:

- `* { @apply border-border outline-ring/50; }`
- `body { @apply bg-background text-foreground; }`
- `html { scroll-behavior: smooth; }`

---

## 4. Theme Tokens Exposed to Tailwind

The project maps CSS variables to Tailwind theme values through `@theme inline`:

- `--color-background`
- `--color-foreground`
- `--color-card`
- `--color-card-foreground`
- `--color-popover`
- `--color-popover-foreground`
- `--color-primary`
- `--color-primary-foreground`
- `--color-secondary`
- `--color-secondary-foreground`
- `--color-muted`
- `--color-muted-foreground`
- `--color-accent`
- `--color-accent-foreground`
- `--color-destructive`
- `--color-destructive-foreground`
- `--color-border`
- `--color-input`
- `--color-ring`
- `--color-chart-1` to `--color-chart-5`
- Sidebar tokens are also configured for dashboard-like layouts

This allows usage like:

- `bg-background`
- `text-foreground`
- `bg-primary`
- `text-muted-foreground`
- `border-border`

---

## 5. Section Structure of the Website

The homepage is assembled in `app/page.tsx` in this order:

1. `Header`
2. `Hero`
3. `Stats`
4. `Services`
5. `Projects`
6. `Expertise`
7. `Philosophy`
8. `Testimonials`
9. `FAQ`
10. `Contact`
11. `Footer`

### Section information

#### Header
- Navigation and top branding
- Uses portfolio data metadata and profile info

#### Hero
- Primary headline and CTA
- Search-based, personal branding angle
- CTA text: `Book a Discovery Call`
- CTA destination: `https://cal.com/amitsarda`

#### Stats
- `200+ Clients Served`
- `300+ Projects Delivered`
- `100% 5-Star Reviews`
- `Since 2016 In Business`

#### Services
Core offerings:
- CRM Consulting
- No-Code Development
- Vibe Coding Development
- Automation Consulting
- GTM Consulting

#### Projects
Portfolio examples include:
- AltDirectory
- CompareCosts
- D2C Shark Tank India
- CRM Tools

#### Expertise
- Certified expert across tools such as Glide, Clay, Zapier, Relay.app, Noloco, JustCall, Typeform
- Additional CRM mention tools: Pipedrive, Folk, Close, HubSpot, Attio, Breakcold

#### Philosophy
Three key professional principles:
- Choose projects that excite me
- Straight-up transparency
- Quality over quantity

#### Testimonials
Three testimonials from clients across startup and operations contexts.

#### FAQ
Business-focused answers about:
- target business types
- engagement process
- timeline expectations
- support model
- differentiators

#### Contact
- Email: `hello@amitsarda.xyz`
- Calendly: `https://cal.com/amitsarda`
- LinkedIn: `https://linkedin.com/in/amitsarda`
- Twitter: `https://twitter.com/amitsarda`

#### Footer
- Final branded closing information and navigation/footer content

---

## 6. Content Data Source

All site copy, SEO data, metrics, contact links, services, projects, testimonials, and FAQ are stored in:

- `data/portfolio-data.json`

### Meta data used

- `siteTitle`: `Amit Sarda | Business Consultant & Systems Designer`
- `siteDescription`: `Expert CRM consulting, no-code development, automation, and GTM strategy for growing businesses. 200+ clients served with 100% 5-star reviews since 2016.`
- `siteUrl`: `https://amitsarda.xyz`
- `locale`: `en_US`
- `twitterHandle`: `@amitsarda`

### Profile data

- Name: `Amit Sarda`
- Title: `Business Consultant & Systems Designer`
- Avatar: `/avatar.jpg`
- CTA: `Book a Discovery Call`

---

## 7. Design Style Summary

This project follows a clean modern consulting brand style:

- Minimal, premium white/gray dark base
- Strong dark typography for readability
- Accent purple/indigo tone used for emphasis and interactive states
- Rounded elements with moderate radius
- Spacious sections and card-based layout
- Professional, conversion-focused business aesthetic
- Light and dark theme support built into the design tokens

---

## 8. Implementation Notes

### Global theme setup
- `app/globals.css` defines the engineering-level color system
- `@theme inline` maps those tokens into Tailwind utility names
- `body` uses `bg-background text-foreground` by default
- `html` has smooth scrolling enabled

### Layout-level setup
- App shell is controlled from `app/layout.tsx`
- `Inter` and `JetBrains_Mono` are loaded once globally
- Dark mode is optional via `.dark` class support

### Project content structure
- Brand copy and data are JSON-driven instead of hardcoded in components
- Reusable content blocks are passed via the `data={portfolioData}` pattern from `app/page.tsx`

---

## 9. Quick Reference Checklist

- Fonts: Inter + JetBrains Mono
- Theme: Light and dark mode supported
- Main background: near-white / deep slate dark
- Accent: purple/indigo tone
- Radius: 0.5rem base
- Core sections: Header, Hero, Stats, Services, Projects, Expertise, Philosophy, Testimonials, FAQ, Contact, Footer
- Data source: `data/portfolio-data.json`

This file is intended as a quick design and content reference for the entire project.
