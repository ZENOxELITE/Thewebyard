# Orvexa Systems Website — Content Audit (Anti-AI-Slop Pass)

Scanned: orvexasystems.site
Method: cross-referenced against the jalaalrd/anti-ai-slop-writing skill and the wider anti-slop pattern set (banned vocabulary, banned phrases, structural tells, accuracy checks).

Fix order: Section 1 first — those are bigger trust problems than word choice. Section 2–4 are the wording cleanup you asked for.

---

## 1. Fix These First (Not Wording — Structural/Trust Issues)

### 1.1 Leftover template copy that doesn't match your services
The "Transform Your Business Operations" intro paragraph reads:

> "From CRM implementation to workflow automation, I help businesses build systems that scale."

You don't offer CRM implementation. Your actual services (listed right below it) are website dev, web app dev, Shopify, AI automation, SEO/maintenance. This paragraph is unedited boilerplate from a generic SaaS-consultant template (v0.app default copy) — it was never rewritten for your business.

Same problem in the contact form's service dropdown: **CRM Consulting, No-Code Development, Vibe Coding Development, Automation Consulting, GTM Consulting, Other/Not Sure**. None of these match your five real services. A lead trying to pick "what do you need" can't find their own project in the list.

Same problem again in the Expertise section tabs: **CRM Tools / No-Code / Vibe Coding / Automation** — generic category labels from the same template, not categories a web dev client would recognize.

**Fix:** Rewrite the intro paragraph to describe what you actually build. Replace the dropdown options with your five real services. Rename or cut the Expertise tabs to match (e.g. "Frontend / Backend / E-commerce / Automation").

### 1.2 Old brand name still live in testimonials
Three of five testimonials say **"The Web Yard"** by name, not Orvexa Systems — e.g. *"The Web Yard built our salon and spa website exactly as we envisioned."* Since you rebranded, this reads as a mismatch to anyone who scrolls from your logo down to the reviews.

**Fix:** Either update the quotes to "Orvexa Systems" (only if the client actually said that) or add a line under the section noting "formerly The Web Yard" so it doesn't look like an error.

### 1.3 "I" vs "we" — inconsistent voice
Services, the hero, and the footer all use "we." But the "How I Work" section and the portfolio intro switch to "I" ("I partner with founders...", "tools I've built"). You'd told me before that you specifically want brand voice ("we") rather than your personal name in client-facing copy — this section breaks that.

**Fix:** Pick one. If Orvexa is meant to read as a small team (your stats claim 4 team members), stay in "we" everywhere.

### 1.4 Numbers worth double-checking
"4+ Years of Experience" and "4 Team Members" — invented or rounded-up stats are one of the most common trust-killers in AI-generated site copy, and these numbers are the first thing a visitor sees. Make sure both are accurate as written before this goes further in front of clients.

### 1.5 Broken links
The "Schedule Now" button and the LinkedIn icon both point to an empty href (`<>`). They render but go nowhere.

---

## 2. Banned/Generic Words Found

| Word/phrase | Where it appears | Why it's a tell | Suggested fix |
|---|---|---|---|
| "Transform Your Business Operations" | Services section heading | Generic corporate hype word, repeated again in the CTA below | Name the actual outcome: "Websites & Apps Built for Your Business" |
| "transform your business operations" | Final CTA heading | Same phrase reused verbatim — reads templated | Vary it or cut it: "Let's build something" |
| "digital solutions" | Meta description, footer, "Quality That Lasts" | Vague catch-all, says nothing concrete | Name what you build: websites, apps, Shopify stores |
| "scalable" / "systems that scale" | Hero subtext, intro paragraph | Buzzword without a concrete claim behind it | Say what scaling means for a small business client specifically, or drop it |
| "designed around" (used twice, back-to-back sections) | Hero subtext + Web App Development blurb | Repeated phrasing across sections reads like a template fill-in-the-blank | Vary the wording each time |
| "leading platforms" | Expertise section | Vague filler — doesn't name anything | Either name the platforms or cut the sentence |
| "move businesses forward" | Tagline under logo | Could describe literally any company in any industry | Something specific to what you build |

---

## 3. Structural Patterns to Fix

**Negative parallelism ("not X, but Y")** — this exact construction is one of the most flagged AI-writing tells:

> "The goal is not to add unnecessary features, but to create something useful and practical."

Rewrite it as a direct statement instead: *"We only build what the business actually needs."*

**Unverifiable claim stacking** — "Certified Expert," "certifications across leading platforms," "Years of experience across enterprise and startup environments" all appear together with no specifics backing any of them. Either list the actual certifications, or drop the claim entirely — vague credibility language reads worse than no claim at all.

---

## 4. Quick Reference — What's Actually Fine

Not everything needs touching. These read like real copy, not AI filler, and I'd leave them:
- The client quotes themselves (aside from the brand-name issue in 1.2)
- "Build for Real Business Needs" / "Clear Communication" / "Quality That Lasts" section titles — plain and specific enough
- "You take care of me, I'll take care of your business" — has actual personality
- The project descriptions under each portfolio piece (Crown Properties, FORT Gym, etc.) — specific and concrete

---

**Priority order if you only fix a few things today:** 1.1 (mismatched service copy) → 1.2 (old brand name) → 1.4 (verify your stats) → the negative-parallelism line in Section 3.
