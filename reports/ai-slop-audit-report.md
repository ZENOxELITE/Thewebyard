# AI Slop Audit: Orvexa Systems Website Copy

Source rules: [no_ai_slop_writing_rules](https://github.com/realrossmanngroup/no_ai_slop_writing_rules), `skills/no-ai-slop/SKILL.md`.
Reviewed file: `website_documentation.md` (scraped 2026-09-15).
Corrected file: `corrected-website-documentation.md`.

Only the marketing prose was in scope. Nav labels, tech stack names, links, form fields, and the five client testimonials were left alone; a testimonial is someone else's quote, and rewriting it would violate Rule 19 on its own.

## Fixes made

| # | Location | Rule | Before | After |
|---|----------|------|--------|-------|
| 1 | Meta description | 11 (filler) | "...AI automation systems, and digital solutions for businesses across Pakistan." | "...AI automation systems for businesses in Pakistan." Cut "and digital solutions," which just restates the list before it. |
| 2 | Hero tagline | 5 (hollow statement) | "We build digital systems that move businesses forward." | "A four-person team that has shipped 12+ projects for 15+ clients over four years." Swapped the vague claim for the real numbers already sitting two sections down the page. |
| 3 | Hero body copy | 5, 13 (hollow / generic) | "...We create practical, scalable digital experiences designed around real business needs." | Cut. The sentence added no checkable information beyond the tech list already given. |
| 4 | Services H2 | 16 (dramatic heading) | "Transform Your Business Operations" | "Our Services" — names what the section holds instead of teasing it. |
| 5 | Services intro | 5, 13 (hollow) | "...I help businesses build systems that scale. Here's how I can help you grow." | "We offer five services: website development, web application development, Shopify store development, AI automation, and SEO and maintenance." Names the actual five services listed below. |
| 6 | Website Development blurb | 13 (generic) | "...that help businesses establish a professional and credible online presence." | "We design and build responsive websites for businesses, portfolios, and landing pages." Matches the bullet list under it. |
| 7 | Web App Development blurb | 13 (generic triplet) | "...designed around your workflow, requirements, and users." | "...including Streamlit apps and backend systems." Tied to the actual bullet list. |
| 8 | Shopify blurb | 4, 13 (vague adjectives) | "...professional Shopify stores...designed to provide a smooth shopping experience." | "We set up and customize Shopify stores, from theme selection to store optimization." |
| 9 | AI Automation blurb | 13 (buzzword stacking) | "...practical automation and AI-powered workflows around their processes." | "We replace manual, repetitive processes with workflow automation and AI-powered integrations." |
| 10 | SEO blurb | 11 (filler opener) | "We help businesses keep their websites updated..." | "We handle ongoing website updates, bug fixes, and basic SEO to keep sites running and visible in search." |
| 11 | Projects section intro | 13 (mismatched claim) | "A showcase of tools, directories, and resources I've built to help businesses make better decisions." | "Client websites and case studies across real estate, fitness, beauty, and e-commerce, plus articles on choosing the right tech for a project." The original description doesn't match the content below it — none of the five portfolio pieces are a "tool" or "directory," they're client websites. |
| 12 | Expertise section intro | 2, 15 (unsourced claim / weasel word) | "Years of experience across enterprise and startup environments, with certifications across leading platforms." | "Four years of experience with React, Next.js, Python, Django, Streamlit, Shopify, TypeScript, Node.js, and Docker." "Leading platforms" names nothing, and "enterprise environments" isn't backed up anywhere else on the page. Replaced with the tech stack and the "4+ years" figure that are already stated elsewhere. |
| 13 | Working philosophy — "Build for Real Business Needs" | 11 (filler word) | "...understanding what a business actually needs before building." | Cut "actually" — filler, adds no meaning. |
| 14 | Working philosophy — "Quality That Lasts" | 4, 13 (vague adjectives) | "...clean, reliable digital solutions that can continue supporting a business..." | "We build websites and applications meant to keep working long after launch, not just for the demo." |
| 15 | Testimonials intro | 11 (cliché filler) | "Don't just take my word for it. Here's what founders and business leaders have to say about working together." | "What founders and business owners say about working with us." |
| 16 | FAQ intro | 5 (hollow absolute claim) | "Everything you need to know about working together." | "Answers to common questions about the process, pricing, and timelines." "Everything you need to know" is a claim a five-question FAQ can't back up. |
| 17 | Contact CTA | 16 (repeats dramatic phrase) | "Ready to transform your business operations? The quickest way to proceed is to schedule a discovery call." | "Book a discovery call to talk through what you need and get a quote." |
| 18 | Contact sub-CTA | 7 (redundant with the line above it) | "The fastest way to get started. Let's discuss your needs and see if we're a good fit." | "Discuss your project and see if we're a good fit." Cut "the fastest way to get started" — it just repeats "Schedule Now" and the CTA above it. |
| 19 | Footer tagline | 5 (hollow statement) | "We build digital systems that move businesses forward." | "12+ projects delivered for 15+ clients over four years." Same fix as #2, applied to the footer copy of the same line. |
| 20 | Footer closer | 5 (hollow statement, no fact to anchor it to) | "Built with passion for founders who move fast." | Removed. Unlike the other hollow statements here, there's no adjacent fact to swap in — "passion" isn't a checkable claim, so the fix is to cut the line rather than pad it with something invented. |

## Flagged but not changed

These read as vague or unverifiable under the same rules, but fixing them would mean inventing information that isn't on the page anywhere, which the ruleset (Rule 2, no unsourced statistics) rules out just as hard as leaving slop in:

- **"& more"** (hero section and footer, "Serving Clients In Pakistan & more regions worldwide"). This is a weasel phrase under Rule 15 — it names no country. Fixing it needs the actual list of regions served, which isn't in the scraped content.
- **"I" vs. "we"** — the copy switches between first-person singular ("View My Work," "my kind of fun," "I've built," "I'll get back to you") and plural ("We design and build," "We believe") throughout. That's a voice-consistency issue, not something the no-ai-slop rules cover, so it wasn't touched.
- **Certification badge, "Certified Expert"** — the badge doesn't name which certification or issuing platform. Can't specify without knowing what it refers to.

## What was left alone on purpose

- **The five client testimonials** — direct quotes attributed to named people (Sidra Ahmed, Ahmed Wahab, Ayesha Khan, Usman Tariq, Hira Malik). Editing a quote for style would mean putting different words in a real person's mouth, which is the exact failure Rule 19 exists to prevent.
- **All numbers already on the page** — 15+ clients, 12+ projects, 4+ years, 4 team members, 100% 5-star reviews, 24-48 hour response time. These are treated as real and attributable per Rule 2, and reused as replacements for vague claims elsewhere (see #2, #12, #19).
- **Nav items, tech stack names, form field labels, and links** — structural/UI elements, not prose.
