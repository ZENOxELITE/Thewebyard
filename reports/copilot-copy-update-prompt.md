# Copilot task: update the copy on the Orvexa Systems website

**How to use:** open the site's repo in VS Code, open Copilot Chat in **Agent mode**, attach this file (or use `#file`), and send:

> Follow every instruction in this file. Apply all the changes, then give me the report described at the end.

---

## Rules (read first)

1. **Text only.** Change copy, not design. Do not touch colors, fonts, spacing, animations, layout, component structure, class names, form field names, IDs, or event handlers.
2. Find each string by searching the whole codebase (components, data arrays, constants, `layout.tsx` / metadata). Copy may be split across JSX elements, `<br />` tags, or `<span>`s (for example the H1 renders as two lines). Keep that structure and change only the words.
3. Keep the same heading levels and the same number of cards, steps, and list items unless a row says **Delete** or **Remove**.
4. Use **sentence case** for headings and labels ("What we build", not "What We Build").
5. Do not use em dashes (—) in any new text.
6. Do not add sections, features, images, or dependencies.
7. Keep all existing links and anchors, except the Testimonials ones removed in Step 1.
8. If an old string cannot be found, do not guess. List it in the report at the end.

---

## Step 1: Disable Testimonials

- Remove the **Testimonials** link from the header nav, the mobile menu, and the footer "Quick links" list.
- Stop rendering the Testimonials section on the page (comment out or remove the render call). **Do not delete the component file.**
- Leave the **Expertise** section and nav link unchanged.

## Step 2: Stats block

| Element | Old | New |
|---|---|---|
| Clients stat | 74+ | **46+** |
| Projects stat | 68+ | **32+** |
| Experience stat | 4+ | **3+** |
| Team members stat | 7 | 7 (unchanged) |
| Label 1 | Clients Served | Clients served |
| Label 2 | Projects Completed | Projects completed |
| Label 3 | Years of Experience | Years in business |
| Label 4 | Team Members | People on the team |

## Step 3: Hero

| Element | Old | New |
|---|---|---|
| Eyebrow | About Orvexa Systems | Web and software studio |
| H1 | We build digital systems that move businesses forward. | We build the websites and software your business runs on. |
| Subheading | We're a full-service web development and digital solutions agency helping businesses build, grow, and scale with modern technology. | Orvexa Systems designs and builds websites, web apps, Shopify stores, and automation. You work with one team from first call to launch, and we stay available afterward. |
| Primary button | Get a Quote on WhatsApp | Get a free quote on WhatsApp |
| Secondary button | Explore Our Services | See what we build |
| Pill 1 | Custom Solutions | Built to your brief |
| Pill 2 | Fast Delivery | Delivery date in writing |
| Pill 3 | Quality Work | Tested on every device |
| Pill 4 | Ongoing Support | Support after launch |

Apply the same button text change to every other "Get a Quote on WhatsApp" button (header, FAQ). Keep their links unchanged.

## Step 4: Hero floating cards

| Element | Old | New |
|---|---|---|
| Card text | Build something amazing. | Start with a free call. |
| Card text | Innovative Solutions for a Digital Future | Built with React, Next.js, and Django |
| Card text | Better Tech. Bigger Dreams. | Clear plans. Working software. |

**Step 4b: Growth card.** Remove the "Growth +312%" card. If removing it breaks the layout, keep the card and replace it with: label "Reply time", value "24 hrs". *(Delete this step if you have a real, provable 312% client result.)*

## Step 5: Services section

| Element | Old | New |
|---|---|---|
| H2 | Websites & Apps Built for Your Business | What we build |
| Intro | From websites and apps to Shopify stores, AI automation, and data cleanup — we build the tools your business runs on. Here's how we can help. | Seven services, one team. Choose one, or combine them: a new site, an online store, a dashboard, or an automation that removes a repetitive task. |
| Decorative text | Modern solutions for modern businesses. | Seven services. One team. |
| Decorative text | Make your mark. | Book an appointment |

Keep the seven service **titles** exactly as they are. Change only the descriptions and bullets:

**01 Website Development**
- Description: We build fast websites that work on any screen and make it easy for customers to find you, trust you, and contact you.
- Bullets: Business websites / Portfolio sites / Landing pages / Mobile-first design

**02 Web Application Development**
- Description: We build web apps around how your team already works: order tracking, customer records, billing, and internal dashboards.
- Bullets: Custom web apps / Business dashboards / Streamlit apps / Backend and databases

**03 Excel & Data Services**
- Description: Send us your messy spreadsheets. We return clean, consistent files and, if you want, a dashboard that shows what the numbers say.
- Bullets: Data cleaning and sorting / Dashboards and visual reports / CSV and Excel formatting / Duplicate and error removal

**04 Logo & Banner Design**
- Description: We design your logo, banners, and social graphics as one set, so your brand looks the same everywhere.
- Bullets: Logo design / Banner design / Brand color palette / Social media graphics

**05 Shopify Store Development**
- Description: We set up Shopify stores that are simple to run and simple to buy from: products loaded, theme customized, checkout tested.
- Bullets: Store setup / Theme customization / Product and collection setup / Speed and checkout improvements

**06 AI Automation**
- Description: We find the repetitive tasks that eat your team's week, like copying data, sending reminders, and sorting inquiries, and automate them.
- Bullets: Workflow automation / AI-powered tools / Process improvement / Custom integrations

**07 SEO & Website Maintenance**
- Description: We keep your site secure, up to date, and easier to find on Google. We handle updates, bug fixes, and basic SEO.
- Bullets: Basic SEO improvements / Website updates / Bug fixes / Ongoing maintenance

**Bottom call to action**
- Text "Book a free consultation call" becomes: **Book a free 15-minute call**
- Change only this button's WhatsApp prefilled message to: `Hi, I'd like to book a free consultation.` (URL-encoded: `Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.`)

## Step 6: Projects section

| Element | Old | New |
|---|---|---|
| H2 | Featured Projects | Selected work |
| Intro | We turn ideas into powerful digital experiences. Explore some of our recent projects that showcase our creativity, technical expertise, and commitment to delivering real business value. | Five recent sites, live and clickable. Each was built around a specific goal: memberships, listings, bookings, or sales. |
| Slogan | Ideas. Design. Code. Impact. | **Delete** this element |
| Counter | 5 Projects | 5 live projects |
| Card button | View Project | View live site |

**Project descriptions**

| Project | New description |
|---|---|
| Atlas Gym | A website for a gym. Visitors compare membership plans, meet the coaches, see the recovery facilities, and find the location. |
| Crown Properties | A real estate website with property listings, a detail page for each property, and a contact form. |
| FORT Gym | A website for a premium fitness club: memberships, training facilities, coaches, and spa and recovery services. |
| Aura Salon & Spa | A salon and spa website with service pricing, team profiles, a photo gallery, online booking, and FAQs. |
| The Formula Lab | An online store with product pages, a shopping cart, and an admin panel for managing products and users. |

**Tech tags** (fix capitalization, drop the tool name "v0")

| Project | Tags |
|---|---|
| Atlas Gym | React, TypeScript, Lucide React |
| Crown Properties | React, TypeScript, React Router, Supabase (unchanged) |
| FORT Gym | React, TypeScript |
| Aura Salon & Spa | Framer Motion (unchanged) |
| The Formula Lab | React Query |

## Step 7: Process section

| Element | Old | New |
|---|---|---|
| H2 | Our Working Philosophy | From first call to launch |
| Intro | We follow a clear, collaborative, and transparent process to make sure every project is delivered with quality, on time, and aligned with your goals. | Every project follows the same five steps, so you always know what is happening and what comes next. |
| Slogan | Your vision + Our process = Real results. | You know your business. We know how to build for it. |

| Step | New title | New text |
|---|---|---|
| 01 | Discovery call | We start with a call about your business, your customers, and what the project has to achieve. Then we scope only what you need. |
| 02 | Written plan | You get a plan that states what we are building, why, the timeline, and the cost. No surprises later. |
| 03 | Design and build | We design the pages, then build them with tools that are easy to maintain, so the site keeps working long after launch day. |
| 04 | Testing | We test on phones, tablets, and desktops, and fix issues before you see the final version. |
| 05 | Launch and support | We put your site live, check that everything works, and stay available for updates and fixes afterward. |

## Step 8: Commitment section

| Element | Old | New |
|---|---|---|
| Heading | More Than Just Development | What you can expect from us |
| Body | We build digital systems that move businesses forward. We're building long-term partnerships. | We want to work with you beyond the first project, so we keep the work clear and the promises specific. |
| Pull quote | "You take care of your customers, we'll take care of your business." | "You focus on your customers. We'll handle the technology." |

| Card | New title | New text |
|---|---|---|
| 1 | Secure and fast by default | Every site is checked for speed, basic security, and mobile layout before launch. |
| 2 | Clear communication | You see progress at each step and can give feedback before we move on. |
| 3 | Deadlines in writing | We agree on a delivery date before we start and tell you early if anything changes. |
| 4 | Support after launch | Questions, fixes, and updates do not stop at go-live. Message us on WhatsApp and we reply within 24 hours. |

## Step 9: FAQ

**Intro and closing text**

| Element | Old | New |
|---|---|---|
| Intro | Find quick answers to the most common questions about our services, process, pricing, and more. If you don't see what you're looking for, feel free to reach out — we're here to help! | Answers to what clients ask us most. Something missing? Message us and we'll reply directly. |
| Side text | Got a question? We've got answers. | **Delete** this element |
| Closing heading | Let's Talk. We're Here to Help. | Still deciding? |
| Closing text | Can't find what you're looking for? Reach out to us directly and we'll be happy to answer your questions or discuss your project. | Tell us what you need on WhatsApp and we'll reply with a clear next step. |

**Questions and answers.** Keep the question text exactly as is. Set each answer as follows. Some answers may be missing or empty in the code, so add them to the FAQ data array or component if needed.

1. **What services does Orvexa Systems offer?**
   We build business websites, custom web apps, Shopify stores, and Streamlit dashboards. We also offer AI automation, data cleanup in Excel and CSV, logo and banner design, SEO, and website maintenance.

2. **Who do you work with?**
   Local businesses, startups, and independent professionals who need a website, an online store, or software to run their work. Not sure if you fit? Ask us on WhatsApp.

3. **How do I get a quote for my project?**
   Message us on WhatsApp or fill in the contact form with a short description of what you need. We reply within 24 hours with questions or a quote.

4. **How long does a project usually take?**
   A landing page usually takes 3 to 5 days, a business website 1 to 3 weeks, and a custom web app 3 to 8 weeks, depending on scope. We confirm the delivery date in writing before we start.

5. **Do you offer support after a website is launched?**
   Yes. After launch we handle bug fixes, updates, and basic SEO. Message us on WhatsApp any time and we reply within 24 hours.

6. **What makes Orvexa Systems different?**
   You get a written plan, a delivery date, and a price before we start, and we only build what your business needs. That means fewer surprises and no wasted features.

7. **Can you build both websites and custom applications?**
   Yes. Many clients start with a website and add a booking system, dashboard, or online store later. You keep working with the same team.

8. **Which regions do you serve?**
   We work remotely with clients in Pakistan, India, Bangladesh, the UAE, and the Middle East, and we take projects from other regions too. We meet by WhatsApp, phone, or video.

## Step 10: Contact section

| Element | Old | New |
|---|---|---|
| Intro | Have a project in mind, a question, or just want to say hello? We'd love to hear from you. Our team is here to help you turn your ideas into powerful digital solutions. | Tell us what you are trying to build or fix. We reply with next steps, usually within 24 hours. |
| Side text | Get in touch. Let's create something great! | **Delete** this element |
| Side text | Your vision. Our expertise. Better Tech. | Clear plans. Working software. |
| Email card subtitle | Send us an email anytime. | For project details and files. |
| WhatsApp card subtitle | Quick replies. Faster support. | The fastest way to reach us. We reply within 24 hours. |
| Instagram card subtitle | See our latest work and updates. | Recent work on Instagram. |
| Form intro | Fill out the form below and we'll get back to you as soon as possible. We're excited to hear about your ideas! | Share a few details and we'll reply within 24 hours. |

If both "Send us a message" and "Tell Us About Your Project" appear as headings, keep only "Tell us about your project".

## Step 11: Footer

| Element | Old | New |
|---|---|---|
| Tagline | We build digital systems that move businesses forward. | Websites, apps, and automation for growing businesses. |
| Regions heading | Serving Clients In | Where our clients are |
| Regions list | Pakistan, India, Bangladesh, UAE, Middle East, & more regions worldwide | Pakistan, India, Bangladesh, the UAE, the Middle East, and remote clients worldwide |
| Sign-off | No boardroom. Just "go". | **Keep unchanged** |

## Step 12: SEO and metadata

Update the page metadata (`layout.tsx` / `metadata` export / `<head>`):

- **title:** `Orvexa Systems | Websites, Web Apps & Shopify Stores`
- **description:** `Orvexa Systems builds websites, web apps, Shopify stores, and automation for businesses in South Asia and the Middle East. Get a free quote.`
- Apply the same title and description to `og:title`, `og:description`, `twitter:title`, and `twitter:description`.
- Leave `og:image`, the canonical URL, robots, and locale unchanged.
- Remove the `keywords` meta tag if present (search engines ignore it).

---

## Final check: search the codebase for leftovers

Each search below should return **no results** in user-facing text (ignore file names and comments):

`digital systems` / `move businesses forward` / `Better Tech` / `Bigger Dreams` / `Innovative Solutions` / `Build something amazing` / `powerful` / `flawless` / `here to help` / `74+` / `68+` / `Testimonials`

Also search for `—` (em dash) in user-facing text and replace any remaining ones with a period or comma.

## Report format

When you finish, reply with:

1. A list of files you changed.
2. Any old string you could not find, and where you looked.
3. Anything you changed that was not on this list. There should be nothing.
4. Confirmation that the site builds with no errors (`npm run build`, or the project's equivalent).
