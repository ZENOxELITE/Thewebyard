# Easy Editing Guide for Non-Tech Users

This guide is made for anyone who wants to update the website without needing to understand all the code. You only need to open a few files and change the text or values you see.

---

## 1. The main place for changing website text

Most of the text on the website is stored in one file:

- data/portfolio-data.json

This file contains:
- website title and description
- personal name and job title
- services
- projects
- testimonials
- FAQ
- contact details

### Example
If you want to change:
- the business title
- the CTA button text
- the service names
- the contact email

Then open:

- data/portfolio-data.json

and edit the values directly.

### Important
Do not change the structure of the JSON file. Only change the text inside the quotes.

For example:

"siteTitle": "Amit Sarda | Business Consultant & Systems Designer"

You can change it to:

"siteTitle": "Your Name | Business Consultant"

But keep the commas and quotes exactly as they are.

---

## 2. How to change a section like Services, Projects, or FAQ

All major content sections are controlled by the same file:

- data/portfolio-data.json

### Sections inside the file
Look for sections like:

- profile
- services
- projects
- testimonials
- faq
- contact
- background

### Example: changing Services
Inside the services list, each block looks like this:

{
  "title": "CRM Consulting",
  "description": "Select, implement, and optimize the perfect CRM...",
  "features": [
    "CRM selection & implementation",
    "Pipeline optimization"
  ]
}

To change the service title:
- change the value of "title"

To change the description:
- change the value of "description"

To add a new feature:
- add another line inside the "features" array

---

## 3. How to change the homepage layout or order of sections

The overall page order is controlled here:

- app/page.tsx

This file decides which sections appear on the homepage and in what order.

### Example
If you want to move a section up or down:
- open app/page.tsx
- find the section parts like Header, Hero, Services, Projects, FAQ, Contact
- move the component block to a different position

### Example block
<Header data={portfolioData} />
<Hero data={portfolioData} />
<Services data={portfolioData} />
<Projects data={portfolioData} />

If you want a section to appear earlier, move its line above another section.

---

## 4. How to change the colors

The main color theme is controlled here:

- app/globals.css

This file contains colors like:
- background
- foreground
- primary
- accent
- border

### Example
If you want the page to have a different accent color, look for:

--accent: oklch(0.55 0.15 250)

Change the value to another color value.

### Safe advice
Do not change random color values unless you are sure about the code. If you want a design refresh, change only the main theme settings.

---

## 5. How to change the fonts

The fonts are set in:

- app/layout.tsx

This file loads the font families.

For example:
- Inter is used for the main content
- JetBrains Mono is used for technical or code-style text

If you want a different font, change the font import and variable names in this file.

---

## 6. How to change the button link or contact links

Most links are in:

- data/portfolio-data.json

Look for keys like:
- ctaUrl
- calendly
- linkedin
- twitter
- email

Example:

"ctaUrl": "https://cal.com/amitsarda"

You can replace it with a different link.

---

## 7. How to add a new section

If you want a new section added to the homepage:

1. Open app/page.tsx
2. Find the list of imported components
3. Add a new import line
4. Add the new component in the page layout

Example:

import { MyNewSection } from "@/components/portfolio/my-new-section"

Then render it:

<MyNewSection data={portfolioData} />

If the section does not exist yet, you may also need to create a new component file in the components/portfolio folder.

---

## 8. How to change a single headline or paragraph

Most of the visible text is in:

- data/portfolio-data.json

Look for fields like:
- tagline
- description
- title
- question
- answer

These are simple text fields. You can change them directly.

---

## 9. What not to edit unless you are comfortable with code

Avoid editing these files unless you know what you are doing:

- app/layout.tsx
- app/globals.css
- app/page.tsx
- components folder files

These files control layout, styles, and app structure.

If you only want to update content, edit the JSON file first.

---

## 10. Best practice for safe editing

Use this simple rule:

- Want to change text? Edit data/portfolio-data.json
- Want to change section order? Edit app/page.tsx
- Want to change colors or theme? Edit app/globals.css
- Want to change fonts? Edit app/layout.tsx

That is the easiest and safest workflow for non-technical editing.

---

## 11. Quick summary

If you want to make website changes fast:

1. Open data/portfolio-data.json
2. Change text, service names, FAQ answers, project details, or links
3. Save the file
4. Refresh the browser

If you want to add a new section or change page order:

- open app/page.tsx

If you want to change the visual style:

- open app/globals.css

---

## 12. Final tip

The website is designed so that most of the content is centralized in one file. That means you usually do not need to touch many files.

Start with data/portfolio-data.json before changing anything else.

If you want to update the website without breaking anything, keep edits to these files only:

- data/portfolio-data.json
- app/page.tsx
- app/globals.css
- app/layout.tsx

---

This guide is meant to keep editing simple, safe, and understandable for non-technical users.
