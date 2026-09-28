# Swizzy Industries: Website Sitemap & Design Brief

> Master reference for generating the Swizzy Industries website UI in Stitch.
> Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

---

## Table of Contents

1. How to Use This Document with Stitch
2. Brand Foundation
3. Design System
4. Global Components
5. Site Architecture (Next.js Multi-Zones)
6. Full Sitemap
7. Navigation Specification (Mega Menu)
8. Page Specifications: Home
9. Page Specifications: Pillars & Solutions
10. Page Specifications: Blog & News
11. Page Specifications: Careers
12. Page Specification: Contacts
13. Utility & System Pages
14. Pillar Zone Sites (Subdomains)
15. Content, Voice & Microcopy Guidelines
16. SEO, Performance & Accessibility
17. Legal, Privacy & Data Protection
18. Stitch Prompting Playbook
19. Build Order & Checklist
20. Placeholders to Fill In

---

## 1. How to Use This Document with Stitch

### 1.1 Recommended workflow

1. Paste **Section 18.1 (Global Design Prompt)** into Stitch first. This locks in the visual language.
2. Generate the **Header + Mega Menu** and **Footer** next, since every other page reuses them.
3. Generate pages in the build order listed in **Section 19**.
4. For each page, paste that page's **Stitch prompt** (blockquote at the bottom of each page spec) and, if needed, paste the page's section list beneath it.
5. After each page, check it against the **Design System (Section 3)** for color, type, and spacing consistency.
6. Export or copy the generated designs into your Next.js project and split them across the main site and the three zones (see Section 5).

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain (for example `swizzy.com`). Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content the company must supply.
- **Look & feel** notes describe the visual intent, not code.
- **CTA** means call to action (a button or link that asks the visitor to do something).
- "Pillar" means one of the three focus areas: Health, Education, Socialization.
- "Zone" means one of the three separate Next.js apps that live on subdomains.

### 1.3 What this brief deliberately does not include

- Real statistics, client names, or testimonials. Use clearly marked placeholders until real ones exist.
- Real team names or photos. Use placeholder portraits.
- Legal text. Section 17 lists what pages are needed, not the wording.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Company name:** Swizzy Industries
- **Status:** Registered company, based in Kenya
- **Industry:** AR and VR technology, immersive experiences
- **Tagline:** "Kenya reimagined through immersive technology"
- **What the company does:** Builds software and tools that use immersive technology (mainly VR) for things that are critical to the economy. Not games.
- **Three pillars:**
  - **Health:** immersive tools around hospital equipment, clinical training, patient care and wellbeing
  - **Education:** immersive education content delivery, virtual classrooms and labs, skills training
  - **Socialization:** immersive social experiences, community, and social media style connection

### 2.2 Brand personality

Swizzy should feel like a company a hospital administrator, a school principal, a county official, and an investor would all trust on first visit.

- **Trustworthy:** calm, stable, credible, no hype
- **Forward-looking:** quietly futuristic, confident about the future without shouting about it
- **Rooted:** unmistakably Kenyan and local in tone, imagery, and examples, not generic Silicon Valley
- **Human:** technology serving people (patients, students, families), not technology for its own sake
- **Clear:** explains immersive technology in plain language for non-technical decision makers

### 2.3 Brand attributes to avoid

- No neon glow, cyberpunk, glitch, or "gamer" aesthetics
- No dark-mode-only design
- No heavy jargon such as "metaverse", "Web3", "disruptive" without explanation
- No stock images of a person in a headset against a white void
- No fear-based or exaggerated claims about health outcomes

### 2.3.1 The one-sentence brief for any designer

"A clean, light, corporate website with a confident blue and teal palette, generous white space, real Kenyan people and places, and a few subtle futuristic touches, built to make hospitals, schools, and investors feel safe working with an immersive technology company."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Hospital and clinic leaders | Safer training, better equipment usage, lower cost | Clear use cases, credibility, compliance signals |
| Schools, universities, training institutes | Better learning outcomes, engaging delivery | Demos, curriculum alignment, pricing clarity |
| Government and county officials | Economic impact, local capacity, job creation | Impact stories, local partnerships, alignment with national goals |
| Investors and development partners | Market, traction, team, roadmap | Team page, milestones, impact metrics, investor materials |
| Enterprise and NGO buyers | Custom solutions, integration | Solutions pages, case studies, contact path |
| Job seekers and graduates | Meaningful work, growth, culture | Careers pages, culture content, transparent hiring process |
| Journalists and media | Facts, logos, quotes, images | Press kit, news, leadership bios |
| General public and communities | Understanding what this is | Simple explanations, gallery, blog |

### 2.5 Tagline usage

- **Primary tagline:** "Kenya reimagined through immersive technology"
- Use it in the homepage hero, footer, email signature, and social bios.
- Shorter alternates for tight spaces: "Kenya, reimagined." and "Immersive technology for Kenya."
- Always sentence case in body copy; may be set in title case in the hero.
- Never split the tagline across unrelated visual elements.

### 2.6 Logo guidance (until a final logo exists)

- Use a clean wordmark: "Swizzy" in bold weight with "Industries" in a lighter weight beneath or beside it.
- A simple geometric symbol (for example an abstract "S" formed from two overlapping rounded shapes suggesting depth or a headset lens) works as a favicon and app icon.
- Provide light and dark versions, plus a single-color version for footers and press.
- Minimum clear space equals the height of the letter "S" on all sides.

---

## 3. Design System

### 3.1 Design principles

1. **Clarity first.** Every page answers "what is this and what should I do next" within five seconds.
2. **Trust through restraint.** Fewer effects, better spacing, real content.
3. **Futurism as accent.** One or two subtle futuristic devices per page at most (a soft gradient, a geometric shape, a gentle depth effect). Never the main event.
4. **Local by default.** Kenyan faces, settings, and examples throughout.
5. **Consistent zones.** The main site and the three zone sites must feel like one family.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `--color-navy-900` | Deep Navy | `#0A1F44` | Headlines, footer background, dark sections |
| `--color-blue-600` | Swizzy Blue (primary) | `#1B5FC1` | Primary buttons, links, key highlights |
| `--color-blue-700` | Swizzy Blue Dark | `#154C9B` | Hover and pressed states |
| `--color-blue-100` | Swizzy Blue Tint | `#E4EEFB` | Soft backgrounds, badges |
| `--color-teal-500` | Immersion Teal (accent) | `#12A5B4` | Secondary accents, icons, gradient end |
| `--color-teal-100` | Teal Tint | `#DDF3F5` | Soft accent backgrounds |
| `--color-amber-500` | Savannah Amber | `#F2A63B` | Used very sparingly for a single highlight per page (badges, small underlines) |

#### Neutrals

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `--color-white` | White | `#FFFFFF` | Main page background, cards |
| `--color-mist-50` | Mist | `#F5F8FC` | Alternate section background |
| `--color-cloud-200` | Cloud | `#E6ECF4` | Borders, dividers |
| `--color-slate-500` | Slate | `#64748B` | Secondary text, captions |
| `--color-slate-700` | Deep Slate | `#334155` | Body text |
| `--color-ink-900` | Ink | `#0F172A` | Primary text on light backgrounds |

#### Pillar accent colors (used inside the matching pillar sections and zone sites)

| Pillar | Hex | Feel |
| --- | --- | --- |
| Health | `#0E9F8E` | Calm, clinical, reassuring teal-green |
| Education | `#3A5BD9` | Focused, academic blue |
| Socialization | `#E8735A` | Warm, human, friendly coral |

Pillar accents appear as icon tints, card top borders, and small badges. They never replace the primary blue in buttons on the main site.

#### Semantic colors

| Role | Hex |
| --- | --- |
| Success | `#1E9E6A` |
| Warning | `#E0A100` |
| Error | `#D64545` |
| Info | `#1B5FC1` |

#### Gradients

- **Horizon gradient:** linear, 135 degrees, from `#1B5FC1` to `#12A5B4`. Use at 8 to 15 percent opacity behind hero areas, and at full strength only for small elements (icon chips, thin dividers, one CTA band).
- **Mist fade:** vertical, from `#FFFFFF` to `#F5F8FC`. Use to transition between sections.
- No rainbow gradients, no mesh gradients with more than two hues.

### 3.3 Typography

- **Headings:** Plus Jakarta Sans (weights 600 and 700). Geometric, modern, friendly.
- **Body and UI:** Inter (weights 400, 500, 600). Highly legible on all screens.
- **Fallbacks:** system sans-serif stack.
- Both are available on Google Fonts.

#### Type scale (desktop, then mobile)

| Style | Desktop size / line height | Mobile size / line height | Weight |
| --- | --- | --- | --- |
| Display | 64 / 72 | 40 / 48 | 700 |
| H1 | 48 / 56 | 34 / 42 | 700 |
| H2 | 36 / 44 | 28 / 36 | 700 |
| H3 | 28 / 36 | 22 / 30 | 600 |
| H4 | 22 / 30 | 18 / 26 | 600 |
| Body Large | 18 / 28 | 17 / 27 | 400 |
| Body | 16 / 26 | 16 / 26 | 400 |
| Small | 14 / 22 | 14 / 22 | 400 |
| Caption | 12 / 18 | 12 / 18 | 500 |
| Button | 16 / 24 | 16 / 24 | 600 |
| Eyebrow (small label above headings) | 13 / 18, uppercase, letter-spacing 0.08em | same | 600 |

- Maximum line length for body copy is 70 characters.
- Headlines use sentence case, not all caps (eyebrows are the exception).
- Only one Display style heading per page (the hero).

### 3.4 Layout and spacing

- **Base unit:** 4px. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Grid:** 12 columns on desktop, 8 on tablet, 4 on mobile. Gutter 24px desktop, 16px mobile.
- **Container widths:** content 1200px, wide 1320px, narrow reading 720px.
- **Section vertical padding:** 96px desktop, 64px tablet, 48px mobile.
- **Card padding:** 24px desktop, 20px mobile.
- **Breakpoints:** 360 (small phone), 768 (tablet), 1024 (small laptop), 1280 (desktop), 1536 (large desktop).
- Alternate section backgrounds between white and Mist to create rhythm without heavy dividers.

### 3.5 Shape, depth, and borders

- **Corner radius:** 8px (inputs, small chips), 12px (cards, buttons), 20px (large panels, hero media), 999px (pills, avatars).
- **Borders:** 1px solid Cloud `#E6ECF4`.
- **Shadows (soft, low contrast):**
  - Small: `0 1px 2px rgba(15, 23, 42, 0.06)`
  - Medium: `0 8px 24px rgba(15, 23, 42, 0.08)`
  - Large (mega menu, modals): `0 24px 48px rgba(15, 23, 42, 0.12)`
- Cards lift by 2 to 4px and gain the medium shadow on hover.

### 3.6 Iconography

- Line icons, 1.5px to 2px stroke, rounded caps, consistent 24px grid (Lucide or Phosphor style).
- Icons sit in soft rounded squares (48px) tinted with Blue Tint, Teal Tint, or the pillar accent tint.
- Each pillar has a signature icon:
  - Health: heart with a pulse line or a medical cross inside a rounded shape
  - Education: open book or graduation cap
  - Socialization: two overlapping speech bubbles or connected people nodes
- Immersive tech motifs (headset, cube, layered planes) appear as small accents only.

### 3.7 Imagery and illustration

- **Photography:** real Kenyan hospitals, classrooms, clinics, campuses, and communities. People using VR headsets in real settings with natural light. Warm, candid, respectful.
- **Product visuals:** clean device mockups and screenshots of the immersive interfaces on light backgrounds with soft shadows.
- **Illustration and shapes:** simple isometric or layered geometric shapes (cubes, planes, rounded polygons) in brand blues and teals, used to hint at depth.
- **Local pattern accent:** an abstract geometric pattern inspired by African textile geometry may appear very sparingly (for example a thin band above the footer). Keep it minimal and respectful, never decorative overload, and ideally designed with a local designer.
- **Image treatment:** 12px or 20px rounded corners, no heavy filters, consistent warm color grading.
- **Alt text** is required for every image (see Section 16).

### 3.8 Motion

- Duration 200 to 300ms, ease-out. Nothing loops aggressively.
- Allowed: fade-up on scroll for sections, gentle hover lifts, mega menu fade and slide of 8px, subtle floating drift on hero geometric shapes (very slow, low amplitude).
- Not allowed: parallax-heavy scrolling, auto-playing sound, flashing elements, glitch effects.
- Respect `prefers-reduced-motion`: disable drift and fades and show content immediately.

### 3.9 Buttons

| Type | Style | Use |
| --- | --- | --- |
| Primary | Filled Swizzy Blue, white text, 12px radius, 48px height, 24px horizontal padding | One per section at most |
| Secondary | White fill, 1px Blue border, Blue text | Alongside a primary |
| Tertiary / text link | Blue text with an arrow that nudges right on hover | Inline "Learn more" |
| On-dark primary | White fill, Navy text | Buttons on navy or gradient backgrounds |
| Destructive | Filled Error red | Rare, forms and account actions |

- Focus ring: 3px offset ring in Teal `#12A5B4` at 60 percent opacity.
- Disabled: 40 percent opacity, no hover effect.
- Loading: spinner replaces label, width stays fixed.

### 3.10 Forms

- Labels above fields, 14px, Deep Slate, medium weight.
- Inputs: 48px height, 8px radius, 1px Cloud border, white fill.
- Focus: 2px Blue border plus soft blue glow.
- Error: red border, helper text below with an icon, plain language message.
- Required fields marked with a small asterisk and explained at the top of the form.
- Success: inline confirmation panel in Success color tint, never a disappearing toast alone.
- Always include a consent line and privacy link on any form that collects personal data.

### 3.11 Accessibility baseline

- WCAG 2.2 AA minimum for color contrast (4.5:1 body text, 3:1 large text and UI components).
- Full keyboard navigation, including the mega menu.
- Visible focus indicators everywhere.
- Touch targets at least 44 by 44 px.
- Never convey meaning by color alone (pair color with icon or text).


---

## 4. Global Components

These components appear across the main site and are mirrored (with the same look) on the three zone sites.

### 4.1 Announcement bar (optional)

- **Position:** very top of the page, above the header.
- **Height:** 40px. Background Deep Navy, text white, 14px.
- **Content:** a single short line with an arrow link, for example "New: Swizzy Health pilot now open for hospital partners. Learn more".
- **Behavior:** dismissible with an X, remembers dismissal for 7 days.
- **Use sparingly.** Remove when there is nothing important to announce.

### 4.2 Header (desktop)

- **Height:** 80px, white background, 1px Cloud bottom border. Becomes sticky on scroll and shrinks to 68px with a soft shadow.
- **Left:** logo (wordmark plus symbol), links to home.
- **Center:** the five navigation items (see Section 7): Home, Pillars & Solutions, Blog & News, Careers, Contacts.
- **Right:** search icon button, language switcher (EN | SW, optional and only if Swahili content is planned), and the primary CTA button "Request a Demo".
- **Nav item style:** 16px, medium weight, Ink color. Items with dropdowns show a small chevron that rotates when open.
- **Active state:** a 2px Teal underline beneath the current section's nav item.
- **Hover state:** text turns Swizzy Blue.
- **Transparent-on-hero option:** on the homepage the header may sit over the hero with a white background at 80 percent opacity and blur. It becomes solid white on scroll.

### 4.3 Mega menu behavior (applies to all dropdowns)

- Opens on hover after a 120ms delay, and on click or Enter/Space for keyboard and touch users.
- Panel is full container width (1200px), 12px radius on the bottom corners, Large shadow, white background.
- Slides down and fades in over 200ms with an 8px vertical movement.
- Closes on mouse leave (with a 200ms grace period), Escape key, or clicking outside.
- Only one panel open at a time. Moving between nav items switches panels instantly without re-animating.
- A subtle Mist background band sits at the bottom of each panel for a "featured" or "help" strip.
- Each link in a panel has: an icon (24px), a title (16px semibold), and a one-line description (14px Slate). Links to a subdomain show a small "external zone" arrow icon.
- Focus order is logical, left to right, top to bottom. Arrow keys move between links inside the panel.

### 4.4 Header (mobile and tablet)

- Height 64px. Logo left, hamburger menu right, with a compact "Request a Demo" icon button optional.
- Menu opens as a full-screen white panel sliding in from the right.
- Top level items are large (20px) with a plus/minus toggle to expand an accordion of sub-links.
- Sub-links show the title and short description as in desktop.
- Sticky bottom bar inside the menu with the primary CTA button.
- Search field sits at the top of the panel.
- Close button top right. Body scroll is locked while open.

### 4.5 Footer

- **Background:** Deep Navy `#0A1F44`, text white and 70 percent white for secondary text.
- **Top band:** a CTA strip, "Ready to see what immersive technology can do for you?" with a "Request a Demo" on-dark primary button and "Contact us" secondary.
- **Column 1 (brand):** white logo, tagline, a short 2-line company description, and social icons (LinkedIn, X, Instagram, YouTube, Facebook as relevant).
- **Column 2 (Company):** About Us, Mission Vision & Values, Our Story, Team & Leadership, Partners & Investors, Impact & Sustainability.
- **Column 3 (Pillars & Solutions):** Health, Education, Socialization, Solutions Overview, Case Studies, Request a Demo.
- **Column 4 (Explore):** Blog, News & Press, Events & Webinars, Resource Library, Press & Media Kit, Gallery.
- **Column 5 (Join & Contact):** Careers, Open Roles, Contact Us, plus contact details (email, phone, address in Kenya).
- **Newsletter row:** email field and "Subscribe" button with consent line.
- **Bottom bar:** copyright "© {year} Swizzy Industries. All rights reserved.", links to Privacy, Terms, Cookies, Accessibility, Sitemap. A thin local geometric pattern band may sit above this bar.
- On mobile, columns collapse into accordions.

### 4.6 Breadcrumbs

- Appear on all inner pages below the header, 14px Slate, separated by a small chevron.
- Format: Home > Section > Page.
- The last item is not a link and is set in Ink.
- Hidden on the homepage.

### 4.7 Page header (inner pages)

- Mist background with a very faint Horizon gradient wash on the right side.
- Eyebrow (section name), H1, a one or two line intro, and optional CTA buttons.
- Height about 280 to 360px on desktop. Breadcrumbs sit just above the eyebrow.

### 4.8 Cards

| Card | Anatomy |
| --- | --- |
| Pillar card | Large icon chip in pillar color, title, 2-line description, "Explore" link with arrow, colored 4px top border |
| Solution card | Icon, title, description, tag chips, arrow link |
| Article card | 16:9 image, category pill, title (max 2 lines), excerpt (max 3 lines), author avatar, date, read time |
| Team card | Square portrait with 20px radius, name, role, LinkedIn icon, hover reveals short bio |
| Job card | Title, department pill, location pill, type pill (full-time, internship), "View role" arrow |
| Partner/logo tile | Grayscale logo on white tile, full color on hover |
| Testimonial card | Quote in 18px, avatar, name, role and organization, small pillar tag |
| Stat tile | Large number (Display style), label below, optional small icon, subtle Blue Tint background |
| Resource card | Document icon, title, file type and size, "Download" button |
| Gallery tile | Image or video thumbnail with rounded corners, hover caption overlay, play icon for videos |

### 4.9 Other reusable components

- **CTA band:** full-width Horizon gradient (full strength) or Navy, headline, one line of support text, primary on-dark button. Appears near the bottom of most pages.
- **Logo strip:** row of partner logos (grayscale), horizontally auto-scrolling slowly on mobile.
- **Tabs:** underline style, Blue active underline, used for filtering content types.
- **Accordion (FAQ):** plus/minus icon on the right, 1px dividers, smooth height animation.
- **Badge/pill:** 999px radius, 12px text, Blue Tint or pillar tint background.
- **Video embed:** 16:9, 20px radius, custom play button (white circle with Blue triangle), poster image, lazy loaded.
- **Modal / lightbox:** dark 70 percent overlay, white panel or full-bleed media, close on Escape, focus trapped.
- **Toast:** bottom center, used only for secondary confirmations (for example "Link copied").
- **Cookie banner:** bottom-left card on desktop, bottom sheet on mobile, with Accept, Reject non-essential, and Manage preferences.
- **Search overlay:** full-width panel below the header with a large input, recent and suggested searches, and grouped results (pages, articles, resources).
- **Back to top button:** small round button bottom right after scrolling 800px.
- **Skip to content link:** first focusable element, visible on focus.

---

## 5. Site Architecture (Next.js Multi-Zones)

### 5.1 Overview

The website is built with Next.js Multi-Zones. That means several independent Next.js applications ("zones") that are stitched together into one experience.

- **Main site (hub):** `{domain}` (for example `swizzy.com`). Contains the company story, navigation, blog, careers, and contact.
- **Health zone:** `health.{domain}`
- **Education zone:** `education.{domain}`
- **Socialization zone:** `social.{domain}` (or `socialization.{domain}`, pick one and keep it consistent)

The pillars are **separate websites**, not pages inside the main site. The main site links to them from the mega menu and from the pillar landing pages.

### 5.2 What the main site owns

- Homepage and all company pages
- Pillars overview page and one short landing page per pillar (a "front door" that explains the pillar and links out to the zone)
- Solutions pages, case studies, and demo request
- Blog, news, events, resources, press kit, gallery
- Careers
- Contact page
- Legal and utility pages

### 5.3 What each zone owns

- Its own full website experience for that pillar (see Section 14)
- Its own product pages, use cases, demos, pricing or engagement info, and pillar-specific content

### 5.4 Shared design and consistency

- All zones use the **same design tokens** (colors, type, spacing, radii, shadows) from Section 3.
- All zones use the **same header shell and footer shell** so that visitors feel they never left Swizzy. Only the active pillar accent color and the local sub-navigation differ.
- Recommended: publish a shared package (for example a private npm package or monorepo package) for tokens and header/footer components.
- The zone header shows a small breadcrumb-like "back to Swizzy Industries" link on the left of the pillar name so visitors can return to the hub.

### 5.5 Cross-zone navigation rules

- Links from the main site to a zone open in the **same tab** (it is one experience), unless the visitor uses a modifier key.
- Links from a zone back to the hub use the same header.
- The mega menu in all zones is the same five-item menu. The current zone is highlighted under "Pillars & Solutions".
- Shared analytics, consent state, and language preference should persist across subdomains (use a cookie scoped to `.{domain}`).

### 5.6 URL pattern summary

| Area | URL pattern |
| --- | --- |
| Main site pages | `{domain}/...` |
| Pillar landing (hub) | `{domain}/pillars/health`, `/pillars/education`, `/pillars/socialization` |
| Health zone | `health.{domain}/...` |
| Education zone | `education.{domain}/...` |
| Socialization zone | `social.{domain}/...` |

---

## 6. Full Sitemap

```
{domain}
│
├── HOME (dropdown)
│   ├── Homepage                              /
│   ├── About Us                              /about
│   ├── Mission, Vision & Values              /about/mission-vision-values
│   ├── Our Story                             /about/our-story
│   ├── Team & Leadership                     /about/team
│   │     └── Leader profile (template)       /about/team/[slug]
│   ├── Partners & Investors                  /partners
│   └── Impact & Sustainability               /impact
│
├── PILLARS & SOLUTIONS (dropdown)
│   ├── Pillars Overview                      /pillars
│   ├── Health (landing, links to zone)       /pillars/health           → health.{domain}
│   ├── Education (landing, links to zone)    /pillars/education        → education.{domain}
│   ├── Socialization (landing, links to zone)/pillars/socialization    → social.{domain}
│   ├── Solutions Overview                    /solutions
│   ├── Bespoke Development                   /solutions/bespoke-development
│   ├── Devices & Integration                 /solutions/devices-integration
│   ├── Case Studies                          /solutions/case-studies
│   │     └── Case study (template)           /solutions/case-studies/[slug]
│   └── Request a Demo                        /solutions/request-a-demo
│
├── BLOG & NEWS (dropdown)
│   ├── Blog                                  /blog
│   │     └── Article (template)              /blog/[slug]
│   ├── News & Press Releases                 /news
│   │     └── News item (template)            /news/[slug]
│   ├── Events & Webinars                     /events
│   │     └── Event (template)                /events/[slug]
│   ├── Resource Library                      /resources
│   ├── Press & Media Kit                     /press-kit
│   └── Gallery                               /gallery
│
├── CAREERS (dropdown)
│   ├── Why Swizzy                            /careers
│   ├── Life & Benefits                       /careers/life-and-benefits
│   ├── Open Roles                            /careers/open-roles
│   │     └── Job detail (template)           /careers/open-roles/[slug]
│   ├── Internships & Graduate Programme      /careers/early-careers
│   ├── Hiring Process                        /careers/hiring-process
│   └── Talent Community                      /careers/talent-community
│
├── CONTACTS (NO dropdown, single page)       /contact
│
├── UTILITY PAGES
│   ├── Search results                        /search
│   ├── Thank you (contact, demo, newsletter) /thank-you
│   ├── Privacy Policy                        /legal/privacy
│   ├── Terms of Use                          /legal/terms
│   ├── Cookie Policy                         /legal/cookies
│   ├── Accessibility Statement               /legal/accessibility
│   ├── HTML Sitemap                          /sitemap
│   └── 404 and 500 error pages
│
└── ZONES (separate Next.js apps)
    ├── health.{domain}
    ├── education.{domain}
    └── social.{domain}
```

### 6.1 Page count summary

| Group | Unique page designs | Notes |
| --- | --- | --- |
| Home | 7 | Plus 1 leader profile template |
| Pillars & Solutions | 9 | Plus 1 case study template |
| Blog & News | 7 | Plus article, news item, and event templates |
| Careers | 7 | Includes 1 job detail template |
| Contacts | 1 | Single page, no dropdown |
| Utility | about 8 | Legal pages share one template |
| **Main site total** | **about 39 designs** | Templates count as one design each |
| Zones | 3 sites | Specified in Section 14 |

---

## 7. Navigation Specification (Mega Menu)

Five top-level items. **Contacts is the only one without a dropdown.** Order left to right: Home, Pillars & Solutions, Blog & News, Careers, Contacts. (Contacts sits last, next to the "Request a Demo" button, which is the common convention for conversion. Reorder if you prefer it third.)

### 7.1 Home (dropdown)

- **Trigger label:** Home. Clicking the label itself goes to the homepage `/`. Hover or click on the chevron opens the panel.
- **Panel layout:** three link columns and one featured card on the right.
- **Column A, "Company":**
  - About Us: "Who we are and why we exist"
  - Mission, Vision & Values: "What guides every decision"
  - Our Story: "How Swizzy Industries began and where we are headed"
- **Column B, "People & Partners":**
  - Team & Leadership: "The people building Swizzy"
  - Partners & Investors: "Organizations growing with us"
- **Column C, "Our Impact":**
  - Impact & Sustainability: "Measuring what matters for Kenya"
- **Featured card (right):** latest headline from News with image, category pill, title, and a "Read more" link. Falls back to a brand video card if no news.
- **Bottom strip (Mist):** "New to immersive technology? Start here" linking to About Us.

### 7.2 Pillars & Solutions (dropdown, the largest panel)

- **Panel layout:** left 60 percent shows three large pillar cards; right 40 percent shows the Solutions list; bottom strip is a help bar.
- **Left, "Our Pillars" (each card shows icon in pillar color, title, description, and an external-zone arrow):**
  - Health: "Immersive tools for hospitals, clinics, and care" (links to `/pillars/health`, secondary "Visit Health site" link goes to `health.{domain}`)
  - Education: "Immersive learning that reaches every classroom" (links to `/pillars/education`, secondary link to `education.{domain}`)
  - Socialization: "Connection and community, reimagined" (links to `/pillars/socialization`, secondary link to `social.{domain}`)
  - Below the cards: "See all pillars" link to `/pillars`.
- **Right, "Solutions":**
  - Solutions Overview
  - Bespoke Development
  - Devices & Integration
  - Case Studies
  - Request a Demo (styled as a highlighted row with Blue Tint background)
- **Bottom strip:** "Not sure where to start? Talk to our team" with a text link to `/contact`.

### 7.3 Blog & News (dropdown)

- **Panel layout:** two link columns and a featured article card.
- **Column A, "Read":**
  - Blog: "Insights on immersive technology in Kenya"
  - News & Press Releases: "Company announcements and coverage"
  - Events & Webinars: "Join us live or watch on demand"
- **Column B, "Explore":**
  - Resource Library: "Reports, whitepapers, and company documents"
  - Press & Media Kit: "Logos, fact sheets, and brand assets"
  - Gallery: "Photos, videos, and 360 moments"
- **Featured card:** most recent blog article with image and read time.

### 7.4 Careers (dropdown)

- **Panel layout:** two link columns and a "Now hiring" featured card.
- **Column A, "Life at Swizzy":**
  - Why Swizzy: "Our culture and what we stand for"
  - Life & Benefits: "How we take care of our people"
  - Hiring Process: "What to expect, step by step"
- **Column B, "Join Us":**
  - Open Roles: "See where you could fit"
  - Internships & Graduate Programme: "Start your career with us"
  - Talent Community: "Not the right role yet? Stay in touch"
- **Featured card:** "Now hiring" with the number of open roles and a button to `/careers/open-roles`.

### 7.5 Contacts (no dropdown)

- A single link that goes directly to `/contact`.
- Styled the same as other nav items. Optionally styled as a text link with a small envelope icon.
- The header also has the separate "Request a Demo" button.

### 7.6 Search

- Magnifier icon at the right of the header. Opens the search overlay described in Section 4.9.
- Keyboard shortcut: `/` focuses search.

### 7.7 Mobile navigation order

Home, Pillars & Solutions, Blog & News, Careers, Contacts, followed by the search field at the top and "Request a Demo" pinned at the bottom.


---

## 8. Page Specifications: Home

Every page spec follows the same template: URL, purpose, audience, CTAs, look and feel, sections top to bottom, content notes, interactions, and a ready-to-paste Stitch prompt.

---

### 8.1 Homepage

- **URL:** `/`
- **Menu location:** Home (top-level label and first item in the dropdown)
- **Purpose:** Explain in five seconds what Swizzy Industries does, prove it is credible, and route visitors to the pillar or action that matters to them.
- **Primary audience:** Everyone. Skews to decision makers in health, education, and government, plus investors.
- **Primary CTA:** Request a Demo. **Secondary CTA:** Explore our pillars.
- **Look & feel:** Bright, airy, and confident. Large white space, one strong hero image, soft Horizon gradient wash, geometric depth shapes drifting slowly behind the hero. The three pillars are the visual centerpiece, immediately after the hero.

**Sections (top to bottom):**

1. **Announcement bar** (optional, see 4.1).
2. **Header** with transparent-on-hero behavior.
3. **Hero**
   - Layout: two columns on desktop. Left 55 percent text, right 45 percent media.
   - Eyebrow: "Swizzy Industries"
   - Headline (Display): "Kenya reimagined through immersive technology"
   - Sub-headline (Body Large, max 2 lines): "We build immersive software and tools that strengthen health, education, and community across the economy. Not games. Real solutions."
   - CTAs: primary "Request a Demo", secondary "Explore our pillars".
   - Media: a rounded 20px photo of a Kenyan clinician or student using a headset in a real setting, layered with a translucent floating UI card (for example a small "Training completed 92%" style placeholder card) and two soft geometric shapes in blue and teal for depth.
   - Below the CTAs: a tiny trust line, "Trusted by [number] institutions across Kenya" (placeholder).
4. **Logo strip** ("Working with organizations across Kenya"): 5 to 8 partner logos in grayscale. Placeholder tiles until real.
5. **Three Pillars section** (the centerpiece)
   - Eyebrow: "Our pillars"
   - H2: "Immersive technology where it matters most"
   - Intro line: "Three focus areas that keep an economy healthy, skilled, and connected."
   - Three large pillar cards side by side (stacked on mobile). Each has: pillar-colored icon chip, title, 2-line description, three bullet highlights, "Visit the [Pillar] site" primary link with external-zone arrow, colored 4px top border.
   - Health: "Immersive tools for hospital equipment training, clinical practice, and patient care."
   - Education: "Immersive content delivery that brings virtual labs and classrooms to every learner."
   - Socialization: "Immersive social experiences that connect communities and creators."
6. **What is immersive technology? (explainer)**
   - Two column layout. Left: H2 "Immersive technology, explained simply" with a 3-paragraph plain-language explanation of VR and AR and why they matter for the economy. Right: a short explainer video with a custom play button.
   - Small link: "New to this? Read our beginner's guide" to a blog article.
7. **How it works (3 steps)**
   - Horizontal stepper with numbered circles connected by a thin gradient line: 1 "Understand your needs", 2 "Design your immersive solution", 3 "Deploy, train, and support".
   - Each step has an icon, a short sentence, and a subtle hover lift.
8. **Impact numbers**
   - Navy background band with four Stat tiles: "[number] learners reached", "[number] clinicians trained", "[number] institutions", "[number] counties" (all placeholders).
   - Numbers count up once on scroll into view (disabled for reduced motion).
9. **Featured solution / case study spotlight**
   - Large card with image on one side and text on the other: pillar tag, title, a 2-line outcome ("Reduced equipment training time by [x] percent"), "Read the case study" link.
10. **Testimonials carousel**
    - Three testimonial cards visible on desktop, one on mobile, arrows and dots for control, auto-advance paused on hover. Each with avatar, name, role, organization, pillar tag.
11. **Latest from Blog & News**
    - Three article cards (image, category pill, title, date). "View all" link to `/blog`.
12. **Partners and investors teaser**
    - Mist background. Short paragraph inviting collaboration. Button "Partner with us" linking to `/partners`.
13. **Careers teaser**
    - Split banner with a team photo on the left and text on the right: "Help us reimagine Kenya", "See open roles" button.
14. **Final CTA band**
    - Horizon gradient full strength, H2 "Ready to see what immersive technology can do for you?", primary on-dark "Request a Demo" and secondary "Contact us".
15. **Newsletter strip** (optional, above footer).
16. **Footer.**

**Content notes:**
- Use the exact tagline in the hero.
- Explain VR in one line the first time it appears: "Virtual reality (VR) places you inside a computer-created environment you can see and interact with."
- Keep each pillar description under 20 words.

**Interactions:** hero shapes drift slowly; pillar cards lift on hover; stat numbers count up; testimonial carousel; sticky header.

> **Stitch prompt (Homepage):** Design a desktop and mobile homepage for "Swizzy Industries", a Kenyan company that builds immersive VR/AR solutions for health, education, and socialization. Tagline: "Kenya reimagined through immersive technology". Style: clean, corporate, trustworthy with subtle futuristic touches. Light backgrounds, Swizzy Blue #1B5FC1, teal accent #12A5B4, deep navy #0A1F44, generous white space, rounded 12px cards, Plus Jakarta Sans headings and Inter body. Sections in order: sticky header with mega-menu items (Home, Pillars & Solutions, Blog & News, Careers, Contacts) and a "Request a Demo" button; two-column hero with headline, sub-headline, two buttons, and a photo of a Kenyan clinician using a VR headset with floating UI card and soft geometric shapes; grayscale partner logo strip; three large pillar cards (Health teal-green, Education blue, Socialization coral) each linking to its own site; plain-language explainer with video; three-step "how it works"; navy stats band with four numbers; featured case study; testimonials carousel; three latest article cards; partners teaser; careers teaser; gradient CTA band; and a navy multi-column footer. No neon, no dark mode, no gaming visuals.

---

### 8.2 About Us

- **URL:** `/about`
- **Menu location:** Home > Company > About Us
- **Purpose:** Tell the company story at a high level, establish credibility, and route visitors to deeper pages (mission, story, team).
- **Primary audience:** Investors, partners, journalists, curious buyers.
- **Primary CTA:** Meet the team. **Secondary CTA:** Read our story.
- **Look & feel:** Editorial and warm. Larger photography, more whitespace, a calm reading rhythm. Page header with faint Horizon wash.

**Sections:**

1. **Page header:** breadcrumbs, eyebrow "About us", H1 "Building Kenya's immersive future", 2-line intro.
2. **Who we are:** two columns. Left, 3 short paragraphs about Swizzy Industries as a registered Kenyan company using immersive technology for critical economic sectors, not games. Right, a large photo of the team or a working session.
3. **What we do (three pillars recap):** compact three-icon row with links to the pillar landing pages.
4. **Why immersive, why now, why Kenya:** three alternating image-and-text blocks explaining the opportunity, the local need, and Swizzy's approach. Each block has a small stat placeholder.
5. **Our approach (four principles):** four cards, for example "People first", "Built for local reality", "Evidence over hype", "Open to collaboration".
6. **Quick facts panel:** Mist card listing "Registered in: Kenya", "Founded: [year]", "Headquarters: [city]", "Focus: Health, Education, Socialization", "Team size: [number]".
7. **Leadership teaser:** four Team cards with "Meet the full team" link.
8. **Milestones teaser:** a short 4-point horizontal timeline linking to Our Story.
9. **CTA band:** "Want to work with us?" with buttons to Contact and Partners.

**Content notes:** Avoid claims that cannot be verified. Use placeholders for founding year and numbers.

> **Stitch prompt (About Us):** Design an "About Us" page for Swizzy Industries using the same design system as the homepage. Page header with breadcrumbs, eyebrow, H1 "Building Kenya's immersive future". Then: two-column "Who we are" with a team photo; a three-icon pillars recap; three alternating image/text blocks (why immersive, why now, why Kenya); four principle cards; a Mist "Quick facts" panel; a four-person leadership teaser; a mini timeline; and a gradient CTA band. Warm, editorial, trustworthy.

---

### 8.3 Mission, Vision & Values

- **URL:** `/about/mission-vision-values`
- **Menu location:** Home > Company > Mission, Vision & Values
- **Purpose:** State what the company exists to do, where it is going, and how it behaves, in a way that is memorable and quotable.
- **Primary audience:** Investors, partners, candidates, government.
- **Primary CTA:** Explore our pillars.
- **Look & feel:** Bold typography, more text-forward, big quotes, lots of air. Alternating white and Mist backgrounds. Subtle geometric background shapes.

**Sections:**

1. **Page header:** eyebrow "What guides us", H1 "Mission, vision, and values".
2. **Mission:** full-width centered block with the mission statement in H2 size (max 30 words) and a small icon above. Placeholder: "To transform Kenya's economy by making immersive technology useful, accessible, and trusted in health, education, and community."
3. **Vision:** same treatment on Mist background. Placeholder: "A Kenya where every hospital, classroom, and community can reach the future through immersive experiences."
4. **Values grid:** six value cards (icon, name, two-line explanation). Suggested values: Trust, Impact, Inclusion, Excellence, Curiosity, Responsibility.
5. **Values in action:** three short real-life style stories or quotes from team members showing a value in practice (placeholders).
6. **Commitment to Kenya:** split section with a local image and a paragraph about local hiring, partnerships, and skills development.
7. **Pillar alignment:** small table linking each pillar to a goal, for example "Health: safer care", "Education: wider access", "Socialization: stronger connection".
8. **CTA band.**

> **Stitch prompt (Mission, Vision & Values):** Design a text-forward "Mission, Vision & Values" page for Swizzy Industries in the same clean corporate style. Large centered mission and vision statements with small icons, a six-card values grid with line icons, three "values in action" quote cards, a split section about commitment to Kenya with a local photo, and a small pillar-alignment table. Alternate white and Mist backgrounds, subtle geometric shapes, gradient CTA band at the bottom.

---

### 8.4 Our Story

- **URL:** `/about/our-story`
- **Menu location:** Home > Company > Our Story
- **Purpose:** Show the journey and momentum of the company through a visual timeline that builds credibility and emotional connection.
- **Primary audience:** Investors, partners, journalists, candidates.
- **Primary CTA:** See our impact.
- **Look & feel:** Narrative and visual. A vertical timeline with a thin Horizon gradient line down the center, alternating cards left and right. Photography from key moments.

**Sections:**

1. **Page header:** eyebrow "Our story", H1 "From an idea to a movement", short intro.
2. **The spark:** opening chapter with a large image and a first-person style paragraph on why the company was started (placeholder).
3. **Interactive timeline:** vertical (horizontal swipe on mobile). Each milestone card has year, title, short description, and optional image. Placeholders such as "Company registered", "First prototype", "First pilot", "First partnership", "Launch of Health, Education, and Socialization pillars", "Next: [upcoming milestone]".
4. **Founders' note:** a Mist block with a quote and signature style name and role.
5. **What's next (roadmap):** three "Next up" cards with a status badge (In progress, Planned, Exploring).
6. **Gallery strip:** horizontal scroll of 6 images from the journey linking to the Gallery.
7. **CTA band:** "Be part of what comes next" with Partners and Careers buttons.

> **Stitch prompt (Our Story):** Design an "Our Story" page with a vertical center-line timeline (thin blue-to-teal gradient line) and alternating milestone cards with year, title, description, and images. Include an opening "spark" section with a large photo, a founders' quote block, a "What's next" roadmap of three status-badged cards, a horizontal gallery strip, and a gradient CTA. Same Swizzy design system.

---

### 8.5 Team & Leadership

- **URL:** `/about/team`
- **Menu location:** Home > People & Partners > Team & Leadership
- **Purpose:** Put faces and credentials to the company so investors, partners, and buyers feel they know who is accountable.
- **Primary audience:** Investors, partners, journalists, candidates.
- **Primary CTA:** Join the team (link to Careers).
- **Look & feel:** Clean grid of portraits with consistent framing. Warm, approachable, professional. Portraits on soft Mist or gradient backgrounds for consistency.

**Sections:**

1. **Page header:** eyebrow "People", H1 "The people behind Swizzy".
2. **Leadership team:** grid of Team cards (3 or 4 per row). Each card: portrait, name, title, one-line focus, LinkedIn icon. Clicking opens the leader profile page or a side panel.
3. **Department filter tabs (optional):** All, Leadership, Engineering, Product and Design, Health, Education, Operations.
4. **Advisory board:** a smaller row of cards with organization affiliations and a short line about why they advise Swizzy.
5. **Board of directors (optional):** simple list with names, roles, and short bios.
6. **Culture strip:** a candid team photo row with a line about how the team works.
7. **CTA band:** "Want to join us?" linking to Open Roles.

**Leader profile (template) `/about/team/[slug]`:**
- Large portrait, name, title, social links.
- Bio in 3 short paragraphs.
- "Areas of focus" chips.
- "In the news" and "Writing" lists linking to related articles.
- "Back to team" link and next/previous leader navigation.

> **Stitch prompt (Team & Leadership):** Design a "Team & Leadership" page for Swizzy Industries with a leadership grid of portrait cards (rounded 20px portraits, name, role, LinkedIn icon), optional department filter tabs, an advisory board row, a candid culture photo strip, and a CTA band to careers. Also design a leader profile template with large portrait, bio, focus chips, and related articles. Clean, warm, corporate.

---

### 8.6 Partners & Investors

- **URL:** `/partners`
- **Menu location:** Home > People & Partners > Partners & Investors
- **Purpose:** Show who backs and collaborates with Swizzy, and give prospective partners and investors a clear path to engage.
- **Primary audience:** Investors, development partners, hospitals, universities, government, technology partners.
- **Primary CTA:** Partner with us. **Secondary CTA:** Download investor overview.
- **Look & feel:** Credible and serious. Logo-rich, calm, numbers-forward. Navy sections for the investor content to signal weight.

**Sections:**

1. **Page header:** eyebrow "Partners & investors", H1 "Growing Kenya's immersive economy together".
2. **Partner categories (tabs):** Technology partners, Healthcare partners, Education partners, Government and public sector, Development partners. Each tab shows a logo grid with hover reveal of a one-line description.
3. **Why partner with Swizzy:** four benefit cards (Local expertise, Proven pilots, Impact measurement, Collaboration model).
4. **Ways to partner:** three cards, for example "Pilot with us", "Co-develop with us", "Distribute or resell", each with a short description and "Start a conversation" link.
5. **For investors:** Navy section with headline "Invest in Kenya's immersive future". Contains market opportunity summary (placeholder numbers), traction highlights, use of funds overview, and buttons "Download investor overview" and "Request a meeting".
6. **Traction and milestones:** stat tiles and a mini timeline (placeholders).
7. **Testimonials from partners:** two quote cards.
8. **Partner inquiry form:** short form (name, organization, partnership type, message) with consent line. Success state is inline.
9. **FAQ accordion:** five questions on partnership, investment process, and due diligence.
10. **CTA band.**

**Content notes:** Do not publish financial figures until approved. Use placeholders. Make sure investor content is reviewed by legal.

> **Stitch prompt (Partners & Investors):** Design a "Partners & Investors" page with tabbed partner logo grids, four benefit cards, three "ways to partner" cards, a navy investor section with stat tiles and download buttons, a partner testimonial pair, a short inquiry form, and an FAQ accordion. Trustworthy, logo-rich, calm corporate design with Swizzy Blue and teal accents.

---

### 8.7 Impact & Sustainability

- **URL:** `/impact`
- **Menu location:** Home > Our Impact > Impact & Sustainability
- **Purpose:** Prove that Swizzy's work improves lives and the economy, and show responsible practices (inclusion, local jobs, data ethics, environment).
- **Primary audience:** Government, development partners, investors, journalists.
- **Primary CTA:** Read the impact report. **Secondary CTA:** See case studies.
- **Look & feel:** Data-forward but human. Large stat tiles, simple charts in brand colors, real photography of people benefiting. Positive, grounded tone, never boastful.

**Sections:**

1. **Page header:** eyebrow "Impact", H1 "Measuring what matters for Kenya".
2. **Headline numbers:** four to six Stat tiles (placeholders) with sources noted beneath each.
3. **Impact by pillar:** three columns (Health, Education, Socialization), each with two outcome statements and a mini chart.
4. **Stories of change:** three story cards with photo, quote, and outcome, linking to case studies.
5. **Economic contribution:** local jobs created, local suppliers used, skills trained. Simple bar or donut charts in blue and teal.
6. **Inclusion and access:** a section on affordability, offline modes, low-bandwidth delivery, and reaching underserved counties (only claims that are true; placeholders otherwise).
7. **Responsible technology:** short commitments on data protection, patient privacy, child safety in education content, and safe social spaces.
8. **Environmental notes:** device lifecycle, energy use, and reuse commitments (placeholders).
9. **Measurement approach:** how impact is measured, in plain language, with a link to the methodology document in the Resource Library.
10. **Download panel:** "Impact report [year]" as a Resource card.
11. **CTA band:** "Partner with us to expand our impact".

> **Stitch prompt (Impact & Sustainability):** Design an "Impact & Sustainability" page for Swizzy Industries with a row of large stat tiles, a three-column impact-by-pillar section with simple brand-colored charts, three story cards with photos and quotes, economic contribution charts, inclusion and responsible technology sections with icons, a measurement approach block, a downloadable report card, and a gradient CTA. Data-forward but human and trustworthy.


---

## 9. Page Specifications: Pillars & Solutions

The three pillar landing pages on the main site are "front doors". They explain the pillar clearly and hand visitors off to the full pillar website on its subdomain. They should feel complete on their own but always make the handoff obvious.

---

### 9.1 Pillars Overview

- **URL:** `/pillars`
- **Menu location:** Pillars & Solutions > Our Pillars > "See all pillars"
- **Purpose:** Give a single place that explains why these three areas were chosen and how they connect, and route visitors to the right pillar.
- **Primary audience:** Decision makers, government, investors, new visitors.
- **Primary CTA:** Explore a pillar. **Secondary CTA:** Request a Demo.
- **Look & feel:** Clean and structured. Three large color-coded panels, each with its pillar accent. Subtle connecting line motif between the panels to show they belong to one ecosystem.

**Sections:**

1. **Page header:** eyebrow "Our pillars", H1 "Three pillars. One connected economy."
2. **Intro block:** two short paragraphs on why health, education, and socialization were chosen (they are foundational to a productive society) and how immersive technology lifts each.
3. **Pillar showcase:** three full-width alternating panels. Each panel has a large image, the pillar icon chip, title, 3-line description, three key capabilities as small check-list items, and two buttons: "Learn more" (to the landing page on the main site) and "Visit the [Pillar] site" (to the subdomain).
4. **How the pillars connect:** a simple diagram showing the three pillars around a shared "Swizzy immersive platform" core with arrows and short labels (for example "Skills trained in Education serve Health"). Kept simple, line-art style.
5. **Common foundation:** four icon cards on shared strengths: Security and privacy, Local content, Works with common devices, Support and training.
6. **Choose your starting point:** a small three-option selector ("I work in healthcare", "I work in education", "I build communities or platforms") that routes to the correct pillar page.
7. **CTA band.**

> **Stitch prompt (Pillars Overview):** Design a "Pillars Overview" page for Swizzy Industries with a page header, an intro block, three large alternating color-coded pillar panels (Health teal-green, Education blue, Socialization coral) each with a photo, icon chip, description, capability list, and two buttons (learn more and visit the pillar site), a simple line-art diagram showing how the pillars connect around a shared platform, four shared-strength icon cards, a "choose your starting point" three-option selector, and a gradient CTA band.

---

### 9.2 Health (landing page on main site)

- **URL:** `/pillars/health` (hands off to `health.{domain}`)
- **Menu location:** Pillars & Solutions > Our Pillars > Health
- **Purpose:** Explain Swizzy's health offering to hospital and clinic leaders, build trust, and send them to the Health site or to a demo.
- **Primary audience:** Hospital administrators, clinical educators, ministry and county health officials, medical device vendors.
- **Primary CTA:** Visit the Health site. **Secondary CTA:** Request a Health demo.
- **Look & feel:** Calm, clinical, reassuring. Health teal-green accents (`#0E9F8E`) on the shared white and Mist base. Photography of real clinical settings in Kenya, gloves, monitors, training rooms. Extra emphasis on safety, privacy, and evidence. No dramatic or graphic medical imagery.

**Sections:**

1. **Page header:** pillar-tinted wash, eyebrow "Pillar: Health", H1 "Immersive technology for safer, smarter care", intro line, primary and secondary CTAs.
2. **The challenge:** short section on real problems (limited access to training on expensive equipment, shortage of specialist trainers, difficulty practicing rare procedures) with three problem cards. Only cite verified facts, otherwise placeholders.
3. **What we build:** four solution cards, for example:
   - Equipment training simulators (learn to operate hospital equipment without risk to patients)
   - Clinical procedure practice (repeatable virtual scenarios)
   - Patient education and comfort (immersive explanations and relaxation experiences)
   - Remote collaboration for care teams (shared virtual spaces for consultation and training)
4. **How it works in a hospital:** a horizontal four-step flow with icons (Assess, Configure, Train, Measure).
5. **Proof and outcomes:** stat tiles (placeholders) and a short pilot summary with a link to a case study.
6. **Safety, privacy, and compliance:** a Mist section with icon bullets on patient data protection, clinical review of content, and regulatory alignment (only what is true and approved).
7. **Who it is for:** three role cards (Hospital leaders, Clinical trainers, Biomedical engineers).
8. **Featured testimonial:** one large quote with photo.
9. **FAQ accordion:** five questions (devices required, integration with existing training, data handling, pricing approach, pilot process).
10. **Handoff band:** large pillar-tinted band, "Explore the full Swizzy Health site" with a big button to `health.{domain}`.
11. **Related reading:** three article cards tagged Health.

> **Stitch prompt (Health landing):** Design the Health pillar landing page for Swizzy Industries. Use the shared clean corporate system with a teal-green #0E9F8E health accent. Page header with wash; problem cards; four solution cards (equipment training simulators, clinical procedure practice, patient education, remote collaboration); four-step "how it works" flow; stat tiles; safety and privacy section with icon bullets; role cards; a testimonial; FAQ accordion; a strong handoff band with a button to the Health site; and related articles. Calm, clinical, reassuring, no graphic imagery.

---

### 9.3 Education (landing page on main site)

- **URL:** `/pillars/education` (hands off to `education.{domain}`)
- **Menu location:** Pillars & Solutions > Our Pillars > Education
- **Purpose:** Show schools, universities, and training providers how immersive content delivery improves learning, and direct them to the Education site or a demo.
- **Primary audience:** School leaders, teachers, university and TVET (technical and vocational) administrators, curriculum bodies, education NGOs, parents.
- **Primary CTA:** Visit the Education site. **Secondary CTA:** Request an Education demo.
- **Look & feel:** Bright, optimistic, focused. Education blue accents (`#3A5BD9`). Photography of Kenyan classrooms, labs, and learners in uniform using headsets with teachers guiding. Slightly more playful iconography while remaining professional.

**Sections:**

1. **Page header:** eyebrow "Pillar: Education", H1 "Learning that leaves the classroom and reaches every learner".
2. **The challenge:** three problem cards (limited lab equipment, large class sizes, uneven access to quality teaching).
3. **What we build:** four solution cards:
   - Virtual science and technical labs
   - Immersive lessons aligned to the curriculum
   - Skills and vocational training simulations
   - Teacher tools for delivering and tracking immersive lessons
4. **Learning in action:** a three-column "before and after" comparison (traditional vs immersive) with simple icons.
5. **Curriculum alignment:** a Mist section with subject chips (Biology, Chemistry, Physics, Geography, History, Technical skills) and notes on alignment with the Kenyan curriculum (placeholder, confirm accuracy).
6. **For teachers and schools:** three cards on training for teachers, classroom setup, and support.
7. **Outcomes and results:** stat tiles (placeholders) and a short case story.
8. **Accessibility and inclusion:** low bandwidth options, shared device classroom models, support for learners with different needs (only where true).
9. **Testimonial:** teacher or school head quote.
10. **FAQ accordion:** five questions (devices, cost, class size, safety of learners, teacher training).
11. **Handoff band:** "Explore the full Swizzy Education site" with a button to `education.{domain}`.
12. **Related reading:** three article cards tagged Education.

> **Stitch prompt (Education landing):** Design the Education pillar landing page for Swizzy Industries with an education-blue #3A5BD9 accent on the shared clean corporate system. Include a header, problem cards, four solution cards (virtual labs, curriculum-aligned lessons, skills training, teacher tools), a traditional vs immersive comparison, subject chips for curriculum alignment, teacher and school support cards, stat tiles, an inclusion section, a testimonial, FAQ, and a handoff band with a button to the Education site. Bright, optimistic, professional.

---

### 9.4 Socialization (landing page on main site)

- **URL:** `/pillars/socialization` (hands off to `social.{domain}`)
- **Menu location:** Pillars & Solutions > Our Pillars > Socialization
- **Purpose:** Explain how immersive technology can strengthen social connection, community, and creator economies in a safe way, and direct visitors to the Socialization site.
- **Primary audience:** Community organizations, creators, brands, youth and cultural organizations, platform partners, the general public.
- **Primary CTA:** Visit the Socialization site. **Secondary CTA:** Partner with us.
- **Look & feel:** Warm, friendly, and safe. Coral accent (`#E8735A`) used gently. Photography of groups of people in Kenya connecting, laughing, collaborating, with tasteful overlays showing shared virtual spaces. More rounded shapes, more people, but still clean and corporate.

**Sections:**

1. **Page header:** eyebrow "Pillar: Socialization", H1 "Bringing people closer, wherever they are".
2. **The opportunity:** short section on distance, diaspora, and community connection with three insight cards (placeholders).
3. **What we build:** four solution cards:
   - Shared virtual spaces for communities and events
   - Creator and cultural showcases
   - Group learning and mentorship rooms
   - Social experiences for brands and organizations
4. **Safety first:** a prominent Mist section with four icon bullets (identity and moderation tools, age-appropriate experiences, reporting and blocking, privacy controls). This is essential to trust in a social product.
5. **Who it is for:** cards for Communities, Creators, Organizations, Diaspora families.
6. **Experience preview:** a large screenshot or mockup carousel of the social spaces with captions.
7. **Community stories:** two short story cards (placeholders).
8. **Values and guidelines:** short summary of community standards with a link to the full guidelines.
9. **FAQ accordion:** five questions (devices, age limits, moderation, data, costs).
10. **Handoff band:** "Explore the full Swizzy Socialization site" with a button to `social.{domain}`.
11. **Related reading.**

> **Stitch prompt (Socialization landing):** Design the Socialization pillar landing page for Swizzy Industries with a warm coral #E8735A accent on the shared clean corporate system. Header, opportunity insight cards, four solution cards (shared virtual spaces, creator showcases, mentorship rooms, brand experiences), a prominent "Safety first" section with icon bullets, audience cards, an experience preview carousel, community story cards, FAQ, and a handoff band with a button to the Socialization site. Warm, friendly, safe, still corporate.

---

### 9.5 Solutions Overview

- **URL:** `/solutions`
- **Menu location:** Pillars & Solutions > Solutions > Solutions Overview
- **Purpose:** Present what Swizzy delivers across all pillars (platforms, bespoke builds, integrations) and help visitors self-select the right engagement.
- **Primary audience:** Enterprise and institutional buyers, IT leads, procurement.
- **Primary CTA:** Request a Demo. **Secondary CTA:** Talk to our team.
- **Look & feel:** Product-focused and structured. Clean feature grids, device mockups, more technical clarity but still plain language.

**Sections:**

1. **Page header:** eyebrow "Solutions", H1 "Immersive solutions built for real-world work".
2. **Solution categories:** three large cards: Ready-to-deploy platforms, Bespoke development, Devices and integration. Each links to its page.
3. **Platform capabilities:** six-item feature grid with icons (Multi-user sessions, Analytics dashboard, Content library, Offline-friendly delivery, Admin controls, Secure data).
4. **Product tour:** tabbed screenshot viewer (Learner view, Admin dashboard, Content authoring) with captions.
5. **Solutions by pillar:** three compact rows linking to the pillar landing pages.
6. **How we work with you:** five-step process (Discover, Design, Build, Deploy, Support) as a horizontal timeline, each with a two-line description.
7. **Pricing approach:** short explanation of engagement models (pilot, subscription, project-based) without specific prices, with a link to Request a Demo.
8. **Security and reliability:** icon bullets and a "Talk to us about your requirements" link.
9. **Selected case studies:** three cards linking to Case Studies.
10. **FAQ accordion.**
11. **CTA band.**

> **Stitch prompt (Solutions Overview):** Design a "Solutions Overview" page for Swizzy Industries with three category cards (ready-to-deploy platforms, bespoke development, devices and integration), a six-item capability grid, a tabbed product tour with screenshots, solutions-by-pillar rows, a five-step process timeline, a pricing approach block, security bullets, three case study cards, FAQ, and a gradient CTA. Structured, product-focused, clean and trustworthy.

---

### 9.6 Bespoke Development

- **URL:** `/solutions/bespoke-development`
- **Menu location:** Pillars & Solutions > Solutions > Bespoke Development
- **Purpose:** Show organizations that Swizzy can build custom immersive software for their specific needs and explain how the engagement works.
- **Primary audience:** Enterprise, government, NGOs, universities, hospitals with specific requirements.
- **Primary CTA:** Start a project.
- **Look & feel:** Collaborative and confident. Process visuals, workshop photography, clear deliverables and timelines. Slightly more technical typography for lists.

**Sections:**

1. **Page header:** eyebrow "Bespoke development", H1 "Your idea, built as an immersive experience".
2. **What we can build:** examples grid (training simulations, virtual showrooms, immersive onboarding, digital twins of facilities, awareness campaigns).
3. **Our process in detail:** vertical stepper with expandable steps: Discovery workshop, Scope and prototype, Build and test, Pilot, Launch and support. Each shows typical duration and deliverables.
4. **Team and skills:** a compact row of capabilities (3D design, software engineering, instructional design, UX research, project management).
5. **Technology stack (plain language):** logos or chips for supported devices and platforms (placeholders such as standalone headsets, PC VR, mobile AR).
6. **Engagement models:** three cards (Fixed scope project, Retainer, Pilot then scale).
7. **Selected work:** two case study cards.
8. **Brief a project form:** short form (organization, sector, challenge, timeline, budget range, contact) with consent line.
9. **FAQ.**
10. **CTA band.**

> **Stitch prompt (Bespoke Development):** Design a "Bespoke Development" page for Swizzy Industries with a header, an examples grid of what can be built, a vertical expandable five-step process stepper, a capabilities row, device/platform chips, three engagement model cards, two case study cards, a "brief a project" form, FAQ, and gradient CTA. Collaborative, confident, clean.

---

### 9.7 Devices & Integration

- **URL:** `/solutions/devices-integration`
- **Menu location:** Pillars & Solutions > Solutions > Devices & Integration
- **Purpose:** Reassure IT and procurement teams about which devices Swizzy supports, how it integrates with existing systems, and how deployment and support work.
- **Primary audience:** IT managers, biomedical engineers, procurement, school ICT coordinators.
- **Primary CTA:** Talk to our team.
- **Look & feel:** Technical clarity with friendly visuals. Device illustrations on Mist backgrounds, clean comparison tables, minimal jargon.

**Sections:**

1. **Page header:** eyebrow "Devices & integration", H1 "Works with the devices and systems you already use".
2. **Supported devices:** cards with device illustrations (standalone VR headsets, tethered PC VR, tablets and phones for AR) and a compatibility note (placeholders for models).
3. **Device recommendation table:** compare device types by use case, cost tier, portability, and recommended pillar (Health, Education, Socialization).
4. **Integration options:** icon list (single sign-on, learning management systems, hospital information systems, analytics tools, content management), each with a short explanation (only real integrations).
5. **Deployment models:** cloud, on-premise, and hybrid options in three simple cards.
6. **Hardware procurement and setup:** short flow (Advise, Supply, Configure, Train).
7. **Support and maintenance:** service levels in a simple three-column card layout (Standard, Priority, Enterprise) without prices.
8. **Technical FAQ:** accordion (bandwidth, offline use, device management, updates, data storage).
9. **CTA band.**

> **Stitch prompt (Devices & Integration):** Design a "Devices & Integration" page for Swizzy Industries with device illustration cards, a comparison table by use case, an integration options icon list, three deployment model cards, a four-step hardware setup flow, three support-level cards, a technical FAQ accordion, and a gradient CTA. Clean, technical but friendly, on white and Mist backgrounds.

---

### 9.8 Case Studies

- **URL:** `/solutions/case-studies`
- **Menu location:** Pillars & Solutions > Solutions > Case Studies
- **Purpose:** Provide proof through real stories and outcomes, and let visitors filter by pillar or sector.
- **Primary audience:** Prospective buyers, investors, partners.
- **Primary CTA:** Read a case study. **Secondary CTA:** Request a Demo.
- **Look & feel:** Editorial card grid with large images, outcome numbers highlighted in Blue, filter tabs. Confident and human.

**Sections:**

1. **Page header:** eyebrow "Case studies", H1 "Real results from real organizations".
2. **Featured case study:** large hero card with image, client, headline outcome, and "Read case study" link.
3. **Filter bar:** tabs (All, Health, Education, Socialization) plus a dropdown for sector and organization type.
4. **Case study grid:** three columns of cards. Each has image, pillar pill, client name, title, a one-line outcome metric, and an arrow link.
5. **Pagination or "Load more".**
6. **Outcome summary band:** three stat tiles aggregated across studies.
7. **CTA band:** "Want results like these?" with Request a Demo.

**Case study detail template `/solutions/case-studies/[slug]`:**
- Header with client logo, pillar pill, title, and key outcome stats row.
- Sections: The challenge, The solution (with screenshots), The results (stat tiles and chart), A quote from the client, Timeline and technology used.
- Sidebar (sticky on desktop): summary facts (client, sector, location, duration, devices), share buttons, "Download PDF" button.
- Footer: next and previous case study, related case studies, CTA band.

> **Stitch prompt (Case Studies):** Design a "Case Studies" listing page for Swizzy Industries with a large featured case study card, filter tabs by pillar, a three-column grid of case study cards showing outcome metrics, pagination, a stat band, and a CTA. Also design a case study detail template with a header stats row, challenge, solution with screenshots, results with charts, a client quote, a sticky summary sidebar with PDF download, and related case studies. Editorial, human, clean.

---

### 9.9 Request a Demo

- **URL:** `/solutions/request-a-demo`
- **Menu location:** Pillars & Solutions > Solutions > Request a Demo (also the header primary button)
- **Purpose:** Convert interested visitors into leads with a friction-light form that sets clear expectations.
- **Primary audience:** Decision makers ready to see the product.
- **Primary CTA:** Request my demo (form submit).
- **Look & feel:** Focused and reassuring. Two-column layout with a short benefit list beside the form. Minimal navigation distraction (keep the header but remove heavy sections). Soft gradient wash behind the form card.

**Sections:**

1. **Split layout header:** left column with eyebrow "Request a demo", H1 "See immersive technology in action", three benefit bullets ("30-minute tailored walkthrough", "Try it on a real headset", "No obligation"), and a small testimonial. Right column with the form card.
2. **Form card:**
   - Fields: full name, work email, phone, organization, role, sector (Health, Education, Socialization, Other), preferred demo format (Online, In person), preferred date range, message (optional).
   - Consent checkbox with a link to the Privacy Policy.
   - Primary button "Request my demo".
   - Inline validation and a clear success state that explains what happens next ("We will reply within [x] business days").
3. **What happens next:** three-step strip (We contact you, We tailor the session, You see it live).
4. **Trust row:** small logo strip and a short privacy assurance.
5. **FAQ:** four questions about the demo.
6. **Alternative contact:** a small line with phone and email for those who prefer to talk.

> **Stitch prompt (Request a Demo):** Design a focused "Request a Demo" page for Swizzy Industries with a two-column layout: left has eyebrow, H1, three benefit bullets, and a small testimonial; right has a clean form card with fields for name, email, phone, organization, role, sector, demo format, preferred dates, and message, plus a consent checkbox and a primary button. Below: a three-step "what happens next" strip, a small logo row, and an FAQ. Soft gradient wash, calm and reassuring.


---

## 10. Page Specifications: Blog & News

All pages in this section share an editorial look: generous reading space, strong photography, clear typographic hierarchy, and consistent category pills.

---

### 10.1 Blog

- **URL:** `/blog`
- **Menu location:** Blog & News > Read > Blog
- **Purpose:** Share thought leadership and practical insight that builds authority, supports SEO, and educates newcomers.
- **Primary audience:** Prospective buyers, students, professionals, partners, journalists.
- **Primary CTA:** Read the latest. **Secondary CTA:** Subscribe to the newsletter.
- **Look & feel:** Modern editorial. Clean card grid, big feature story at the top, comfortable spacing, readable type. Category pills use pillar accent tints.

**Sections:**

1. **Page header:** eyebrow "Blog", H1 "Ideas for a reimagined Kenya", short intro.
2. **Featured post:** a large two-column card (image left, text right) with category, title, excerpt, author, date, read time.
3. **Filter and search bar:** category tabs (All, Health, Education, Socialization, Immersive Tech 101, Company, Insights), plus a search input.
4. **Post grid:** three-column Article cards, 9 per page, with pagination or "Load more".
5. **Popular posts sidebar (desktop) or strip (mobile):** top 5 by views.
6. **Topics cloud:** small pill tags.
7. **Newsletter block:** Mist card with email field and consent line, "Get one useful email a month".
8. **CTA band (light).**

**Article template `/blog/[slug]`:**
- **Header:** breadcrumbs, category pill, H1, subtitle, author avatar and name, date, read time, share buttons.
- **Hero image:** full-width 16:9 with 20px radius and a caption.
- **Body:** narrow 720px reading column, 18px body text, generous line height, styled blockquotes (blue left border), inline images with captions, code or data callout boxes, pull quotes, embedded videos.
- **Left sticky rail (desktop):** table of contents and share icons.
- **Author box:** portrait, bio, links.
- **Tags** row.
- **Related articles:** three cards.
- **Newsletter and CTA:** a soft banner after the article.
- **Comments:** off by default (moderation burden). Use a "Reply by email" link instead.
- **Reading progress bar:** thin Teal line at the top of the viewport.

> **Stitch prompt (Blog):** Design a "Blog" listing page for Swizzy Industries with a header, a large featured post card, category filter tabs and search, a three-column grid of article cards with category pills, a popular posts strip, a topics tag cloud, and a newsletter card. Also design the article template with breadcrumbs, title block with author and read time, wide hero image, a narrow readable text column with pull quotes and image captions, a sticky table of contents and share rail, author box, related articles, and a newsletter banner. Modern editorial, clean.

---

### 10.2 News & Press Releases

- **URL:** `/news`
- **Menu location:** Blog & News > Read > News & Press Releases
- **Purpose:** Publish official announcements and media coverage in one credible place.
- **Primary audience:** Journalists, investors, partners, government.
- **Primary CTA:** Media enquiries. **Secondary CTA:** Download the press kit.
- **Look & feel:** More formal than the blog. List-style layout with dates prominent, fewer images, more text. A calm, official feel.

**Sections:**

1. **Page header:** eyebrow "Newsroom", H1 "News & press releases".
2. **Latest announcement:** a highlighted card at the top with image, date, title, summary, and "Read the full release".
3. **Tabs:** All, Press releases, Company news, In the media (external coverage), Awards and recognition.
4. **News list:** chronological rows. Each row has date (left), title, one-line summary, tag pills, and an arrow. External coverage rows show the publication name and an external link icon.
5. **Year filter:** a simple dropdown or year pills.
6. **Media contact card:** sticky on desktop with name, role, email, phone, and a "Press kit" button.
7. **Subscribe to press updates:** short form.

**News item template `/news/[slug]`:**
- Dateline and location at the top ("Nairobi, Kenya, [date]").
- Headline, subheadline, and a "Media contact" box.
- Body in the reading column with a boilerplate "About Swizzy Industries" block at the end.
- "Download as PDF" button and share icons.
- Related releases.

> **Stitch prompt (News & Press Releases):** Design a formal "News & Press Releases" page for Swizzy Industries with a header, a highlighted latest announcement card, tabs (all, press releases, company news, in the media, awards), a clean chronological list with prominent dates and tag pills, external-link rows for media coverage, a sticky media contact card with a press kit button, and a subscribe form. Also design the press release template with dateline, headline, media contact box, body, About Swizzy boilerplate, and PDF download. Calm and official.

---

### 10.3 Events & Webinars

- **URL:** `/events`
- **Menu location:** Blog & News > Read > Events & Webinars
- **Purpose:** Promote live and recorded events, drive registrations, and keep an archive of past sessions.
- **Primary audience:** Prospective customers, students, partners, media.
- **Primary CTA:** Register now.
- **Look & feel:** Lively but controlled. Event cards with clear dates in a calendar-style badge, speaker portraits, and status pills (Upcoming, Live, On demand).

**Sections:**

1. **Page header:** eyebrow "Events", H1 "Learn with us, live and on demand".
2. **Next event spotlight:** large card with date badge, title, time zone (East Africa Time), speakers, and a "Register" button with a countdown.
3. **Upcoming events:** grid or list of event cards with date badge, format (Online, In person, Hybrid), location, and register link.
4. **Calendar view toggle:** list or month calendar view. "Add to calendar" links on each event.
5. **Past events and recordings:** grid with thumbnails, duration, and "Watch now".
6. **Speakers:** portrait row of recurring speakers.
7. **Host an event with us:** small form or link for partners who want to co-host.
8. **CTA band.**

**Event template `/events/[slug]`:**
- Header with title, date and time, format, location or link, and a sticky registration card on the right.
- Agenda timeline, speakers with bios, "Who should attend", FAQ, and map for in-person events.
- After the event, the page switches to "Watch the recording" with a video, slides download, and Q&A summary.

> **Stitch prompt (Events & Webinars):** Design an "Events & Webinars" page for Swizzy Industries with a header, a next-event spotlight with countdown and register button, an upcoming events grid with calendar-style date badges and format pills, a list/calendar view toggle, a past-events recordings grid, a speakers row, and a "host with us" block. Also design an event detail template with a sticky registration card, agenda timeline, speaker bios, and an on-demand recording state. Lively but controlled and trustworthy.

---

### 10.4 Resource Library (documents and resources)

- **URL:** `/resources`
- **Menu location:** Blog & News > Explore > Resource Library
- **Purpose:** Give anyone who wants to look into Swizzy and what it does a home for documents: company profile, brochures, whitepapers, reports, pillar overviews, and methodology notes.
- **Primary audience:** Investors, partners, procurement teams, government, journalists, students.
- **Primary CTA:** Download. **Secondary CTA:** Request a custom pack.
- **Look & feel:** Organized like a well-kept library. Clear filters, document cards with file type icons, quick previews. Neutral, orderly, easy to scan.

**Sections:**

1. **Page header:** eyebrow "Resources", H1 "Everything you need to understand Swizzy", search input inside the header.
2. **Featured documents:** three large cards (for example "Company profile", "Impact report [year]", "Investor overview").
3. **Filters:** sidebar on desktop (top sheet on mobile) with checkboxes for Type (Company profile, Brochure, Whitepaper, Report, Case study PDF, Presentation, Policy), Pillar (Health, Education, Socialization, General), and Year.
4. **Document grid or list:** Resource cards with icon by file type, title, short description, page count or size, updated date, and buttons "Preview" and "Download". Some documents may be gated behind a short form (name and email) while others are open. Gated items show a small lock icon.
5. **Document preview modal:** opens an embedded PDF viewer with a download button.
6. **Collections:** grouped bundles such as "Investor pack", "Hospital pack", "School pack", each with a "Download all (ZIP)" button.
7. **Request a document:** small form for things not listed.
8. **Licensing note:** a short line on how documents may be shared and cited.

> **Stitch prompt (Resource Library):** Design a "Resource Library" page for Swizzy Industries as an orderly document hub: a header with a search field, three featured document cards, a filter sidebar (type, pillar, year), a grid of resource cards with file-type icons, size, date, and Preview/Download buttons, lock icons for gated items, a PDF preview modal, collection bundles with "Download all", and a request-a-document form. Neutral, organized, easy to scan.

---

### 10.5 Press & Media Kit

- **URL:** `/press-kit`
- **Menu location:** Blog & News > Explore > Press & Media Kit
- **Purpose:** Let journalists and partners grab approved brand assets and facts quickly and consistently.
- **Primary audience:** Journalists, event organizers, partners, bloggers.
- **Primary CTA:** Download the full press kit (ZIP).
- **Look & feel:** Practical and tidy. Asset tiles on Mist backgrounds, clear usage rules, minimal decoration.

**Sections:**

1. **Page header:** eyebrow "Press kit", H1 "Brand assets and media resources".
2. **Quick facts:** a fact sheet card (name, tagline, founded, HQ, pillars, leadership names, boilerplate paragraph with a copy button).
3. **Logos:** tiles showing logo variants (full color, white on dark, single color, icon only) with PNG, SVG, and PDF download buttons.
4. **Logo usage rules:** do and don't examples with small visual tiles (clear space, minimum size, no recoloring, no distortion).
5. **Brand colors and typography:** swatches with hex codes and copy buttons, plus font names.
6. **Executive photos and bios:** portraits with download buttons and short bios.
7. **Product images and screenshots:** grid with download buttons.
8. **Boilerplate and approved descriptions:** short (25 words), medium (50 words), long (100 words) with copy buttons.
9. **Media contact:** card with name, email, phone.
10. **Recent coverage:** three links to external articles.

> **Stitch prompt (Press & Media Kit):** Design a "Press & Media Kit" page for Swizzy Industries with a quick-facts card with copy-boilerplate button, logo variant tiles with PNG/SVG/PDF downloads, do/don't logo usage tiles, color swatches with hex copy buttons and font names, executive photo tiles with downloads, product screenshot grid, short/medium/long boilerplate blocks with copy buttons, a media contact card, and a "Download full press kit" button. Practical and tidy.

---

### 10.6 Gallery

- **URL:** `/gallery`
- **Menu location:** Blog & News > Explore > Gallery
- **Purpose:** Show the human and immersive side of Swizzy through photos, videos, and 360 or product visuals that are difficult to explain in text.
- **Primary audience:** Everyone, especially newcomers, partners, journalists, and candidates.
- **Primary CTA:** Explore the moments. **Secondary CTA:** Share your story.
- **Look & feel:** Visual and immersive but still clean. Masonry grid on white, minimal chrome, elegant hover captions, a lightbox with dark overlay for viewing.

**Sections:**

1. **Page header:** eyebrow "Gallery", H1 "Moments from Kenya's immersive journey".
2. **Filter tabs:** All, Photos, Videos, Product visuals, Events, Behind the scenes. Secondary pills by pillar.
3. **Featured video:** large 16:9 video card with a custom play button.
4. **Masonry grid:** mixed-size tiles with 12px radius. Hover shows caption, date, and pillar tag. Videos show a small play icon and duration.
5. **Albums:** cards grouping photos by event or project (for example "Health pilot at [hospital]"), each opening its own album view.
6. **Lightbox:** dark 80 percent overlay, large media, caption, previous and next arrows, keyboard support, thumbnail strip, share and download (where permitted), close button.
7. **Immersive preview (optional):** a 360 or interactive viewer for one or two selected scenes.
8. **Load more** button (not infinite scroll, for accessibility).
9. **Submit your moment:** small callout for partners to send photos, with a link to Contact.
10. **CTA band.**

**Media rules:** every image needs alt text and a caption. Get consent for any identifiable person, especially children and patients. Never publish patient-identifying imagery.

> **Stitch prompt (Gallery):** Design a "Gallery" page for Swizzy Industries with a header, filter tabs (all, photos, videos, product visuals, events, behind the scenes), a featured video card, a masonry grid of rounded photo and video tiles with hover captions and play icons, album cards, a dark lightbox viewer with captions and arrows, and a load more button. Visual and immersive but clean, on a white background.

---

## 11. Page Specifications: Careers

The Careers dropdown is a full section of the site. The tone shifts slightly warmer and more energetic while keeping the same trustworthy design system.

---

### 11.1 Why Swizzy (Careers home)

- **URL:** `/careers`
- **Menu location:** Careers > Life at Swizzy > Why Swizzy
- **Purpose:** Attract great people by showing the mission, culture, and opportunity to shape the future of Kenya.
- **Primary audience:** Engineers, designers, clinicians, educators, operations professionals, graduates.
- **Primary CTA:** See open roles. **Secondary CTA:** Join the talent community.
- **Look & feel:** Energetic, human, optimistic. Larger team photography, candid moments, bold headline typography, a touch of Savannah Amber for highlights. Still clean and corporate.

**Sections:**

1. **Hero:** split layout with a team photo mosaic. Eyebrow "Careers", H1 "Help us reimagine Kenya", subhead, and two buttons.
2. **Mission strip:** a single powerful sentence connecting work to impact.
3. **Why work here:** four large icon cards (Meaningful work, Growth, Collaboration, Local impact).
4. **Culture in action:** three photo stories with short captions (for example hack days, pilot visits, learning sessions).
5. **Our values:** compact reprise of the six values with a link to the full page.
6. **Teams:** grid of department cards (Engineering, Product and Design, Health, Education, Operations, Business Development) each showing open role counts and linking to filtered roles.
7. **Voices from the team:** three employee quote cards with portraits.
8. **Open roles preview:** four latest job cards with "View all roles".
9. **Early careers teaser:** banner linking to Internships & Graduate Programme.
10. **Talent community CTA band.**

> **Stitch prompt (Why Swizzy / Careers):** Design the Careers landing page for Swizzy Industries with an energetic split hero with a team photo mosaic and headline "Help us reimagine Kenya", a mission strip, four "why work here" icon cards, three culture photo stories, department cards with open role counts, three employee quote cards, a four-job preview, an early careers banner, and a talent community CTA. Warm, human, optimistic, same clean corporate system with a small amber accent.

---

### 11.2 Life & Benefits

- **URL:** `/careers/life-and-benefits`
- **Menu location:** Careers > Life at Swizzy > Life & Benefits
- **Purpose:** Show what daily life and support look like so candidates can picture themselves at Swizzy.
- **Primary audience:** Candidates who are seriously considering applying.
- **Primary CTA:** See open roles.
- **Look & feel:** Warm and reassuring. Icon-led benefit cards, day-in-the-life storytelling, lots of candid photography.

**Sections:**

1. **Page header:** eyebrow "Life at Swizzy", H1 "A place to do your best work".
2. **Benefits grid:** eight benefit cards with icons (placeholders to be confirmed by HR): Health cover, Learning budget, Flexible working, Paid leave, Equipment, Pension or savings, Wellness support, Team retreats.
3. **A day at Swizzy:** a vertical timeline of a typical day with small illustrations.
4. **Learning and growth:** career paths, mentorship, training, and conference support.
5. **Diversity, equity, and inclusion:** short commitments and how they show up in hiring and daily practice (only true statements).
6. **Working environment:** office photo carousel and a description of the hybrid or in-person model.
7. **Team traditions:** playful photo cards (demo days, team lunches, community service).
8. **Testimonials.**
9. **CTA band.**

> **Stitch prompt (Life & Benefits):** Design a "Life & Benefits" careers page for Swizzy Industries with a header, an eight-card benefits grid with icons, a "day at Swizzy" vertical timeline, learning and growth section, DEI commitments, an office photo carousel, team tradition cards, testimonials, and a CTA to open roles. Warm, reassuring, clean.

---

### 11.3 Open Roles

- **URL:** `/careers/open-roles`
- **Menu location:** Careers > Join Us > Open Roles
- **Purpose:** Let candidates find and filter roles quickly and start an application.
- **Primary audience:** Active job seekers.
- **Primary CTA:** View role and apply.
- **Look & feel:** Functional and fast. A tidy list with strong filters, minimal decoration, clear status labels.

**Sections:**

1. **Page header:** eyebrow "Open roles", H1 "Find your place at Swizzy", search input, and a count of open roles.
2. **Filter bar:** dropdowns for Department, Location (Nairobi, Remote, Other Kenyan locations), Type (Full-time, Part-time, Contract, Internship), and Seniority.
3. **Job list:** Job cards in rows (title, department pill, location pill, type pill, posted date, "View role" arrow). "New" badge for roles posted in the last 7 days.
4. **Empty state:** friendly illustration and a "Join the talent community" button when no roles match.
5. **Not seeing your role:** callout linking to the Talent Community.
6. **Recruitment notice:** short warning that Swizzy never asks for payment during hiring, with the official email domain.

**Job detail template `/careers/open-roles/[slug]`:**
- Header: title, department, location, type, posted date, "Apply now" button, share and copy link.
- Two-column layout: left has "About the role", "What you will do", "What you bring", "Nice to have", "Benefits", "Our hiring process"; right has a sticky summary card (location, type, salary range if published, closing date) and an Apply button.
- Apply form: name, email, phone, LinkedIn or portfolio, CV upload, cover note, consent checkbox, and optional equal-opportunity monitoring section.
- Related roles and a link back to all roles.

> **Stitch prompt (Open Roles):** Design an "Open Roles" page for Swizzy Industries with a header and search, a filter bar (department, location, type, seniority), a tidy list of job cards with pills and "new" badges, an empty state, a "not seeing your role" callout, and a recruitment scam notice. Also design a job detail template with a two-column layout, sticky summary card, and application form with CV upload and consent. Functional, fast, clean.

---

### 11.4 Internships & Graduate Programme

- **URL:** `/careers/early-careers`
- **Menu location:** Careers > Join Us > Internships & Graduate Programme
- **Purpose:** Attract students and new graduates and explain how the programme works.
- **Primary audience:** University and college students, recent graduates, universities and career offices.
- **Primary CTA:** Apply for the programme. **Secondary CTA:** Notify me when applications open.
- **Look & feel:** Youthful and encouraging. Brighter imagery of young Kenyan professionals, slightly more playful layout, still consistent with the brand.

**Sections:**

1. **Page header:** eyebrow "Early careers", H1 "Start your career in immersive technology".
2. **Programme options:** cards for Internship, Graduate Programme, and Attachment (industrial attachment for Kenyan students), each with duration, requirements, and status pill (Open, Opening soon, Closed).
3. **What you will do:** four skill-building tracks with icons.
4. **Timeline of the programme:** horizontal steps from application to conversion to a full role.
5. **Alumni stories:** two or three quote cards.
6. **Eligibility and requirements:** simple checklist.
7. **Apply steps:** four-step strip.
8. **University partnerships:** logo row and a link for institutions to partner with Swizzy.
9. **FAQ accordion.**
10. **CTA band.**

> **Stitch prompt (Internships & Graduate Programme):** Design an early careers page for Swizzy Industries with a youthful header, three programme cards with status pills, four skill tracks, a horizontal programme timeline, alumni quote cards, an eligibility checklist, a four-step apply strip, a university partner logo row, FAQ, and CTA. Encouraging, clean, on-brand.

---

### 11.5 Hiring Process

- **URL:** `/careers/hiring-process`
- **Menu location:** Careers > Life at Swizzy > Hiring Process
- **Purpose:** Reduce anxiety and drop-off by explaining every step transparently.
- **Primary audience:** Applicants and prospective applicants.
- **Primary CTA:** See open roles.
- **Look & feel:** Clear and calm. A numbered vertical or horizontal stepper with friendly icons and short explanations.

**Sections:**

1. **Page header:** eyebrow "Hiring process", H1 "What to expect, step by step".
2. **Process stepper:** Apply, Application review, Intro call, Skills conversation or assessment, Team interview, Offer, Welcome. Each step shows typical timing, who you will meet, and how to prepare.
3. **How we assess:** short section on fair, structured evaluation.
4. **Tips for great applications:** icon list.
5. **Accessibility and adjustments:** how candidates can request adjustments.
6. **Frequently asked questions.**
7. **Fraud warning:** short and clear.
8. **CTA band.**

> **Stitch prompt (Hiring Process):** Design a "Hiring Process" page with a numbered stepper (apply, review, intro call, assessment, team interview, offer, welcome) with timing and preparation tips, a fair assessment section, application tips, adjustments info, FAQ, a fraud warning, and a CTA. Clear, calm, friendly.

---

### 11.6 Talent Community

- **URL:** `/careers/talent-community`
- **Menu location:** Careers > Join Us > Talent Community
- **Purpose:** Capture people who are interested but do not have a matching role right now.
- **Primary audience:** Passive candidates, students, professionals watching Swizzy.
- **Primary CTA:** Join the community.
- **Look & feel:** Simple, inviting, single-purpose. Short page with a soft gradient wash and one form.

**Sections:**

1. **Split header:** left with H1 "Stay close to Swizzy" and three benefit bullets (first to hear about roles, invitations to events, career tips), right with the sign-up form.
2. **Form:** name, email, area of interest (multi-select), location, LinkedIn (optional), CV upload (optional), and consent checkbox.
3. **What to expect:** short note on email frequency and how to unsubscribe.
4. **Success state:** inline confirmation with links to the Blog and Open Roles.

> **Stitch prompt (Talent Community):** Design a simple "Talent Community" sign-up page with a split layout: left H1 and three benefit bullets, right a clean form card (name, email, interests, location, LinkedIn, optional CV, consent). Add a short expectations note and a success state. Soft gradient wash, inviting and minimal.


---

## 12. Page Specification: Contacts

Contacts is the **only top-level item without a dropdown**. Because everything contact-related lives on one page, this page must be well organized and complete: general enquiries, support, partnerships, press, careers routing, and FAQs all in a single scrollable experience with an in-page quick-jump bar.

### 12.1 Contact page

- **URL:** `/contact`
- **Menu location:** Contacts (single link, no dropdown)
- **Purpose:** Make it effortless for any type of visitor to reach the right person, and reduce misrouted messages.
- **Primary audience:** Everyone: buyers, patients' institutions, schools, partners, investors, press, candidates, general public.
- **Primary CTA:** Send message (form submit). **Secondary CTA:** Request a Demo.
- **Look & feel:** Open, friendly, and efficient. Two-column layout with the form as the hero of the page, calm gradient wash behind, clear contact cards, a map with a soft-toned style. Reassuring microcopy about response times.

**Sections (top to bottom):**

1. **Page header:** breadcrumbs, eyebrow "Contact us", H1 "Let's talk about your Kenya, reimagined", one-line intro with promised response time.
2. **Quick-jump bar (sticky under the header on desktop):** anchor pills for "Send a message", "Support", "Partnerships", "Press", "Careers", "Visit us", "FAQ".
3. **Main split section:**
   - **Left column (contact form card):**
     - Field "I am contacting you about" (dropdown: General enquiry, Request a demo, Health solutions, Education solutions, Socialization, Partnership or investment, Support, Media, Careers, Other). The choice changes helper text and routes the email internally.
     - Fields: full name, work email, phone (with Kenya country code +254 default), organization, role, message (max 1000 characters with counter).
     - Optional file attachment.
     - Consent checkbox with a link to the Privacy Policy.
     - Primary button "Send message". Inline validation. Success state with a confirmation summary, expected response time, and links to helpful pages.
     - Spam protection that does not hurt accessibility (for example an invisible honeypot plus a lightweight verification).
   - **Right column (contact details stack):**
     - Card "Email us": general, sales, partnerships addresses.
     - Card "Call us": phone number with working hours in East Africa Time.
     - Card "WhatsApp" (optional, popular in Kenya): button that opens a chat.
     - Card "Visit us": office address in Kenya, hours, a note on visiting by appointment.
     - Social icons row.
4. **Who to contact (routing grid):** six small cards with icon, team name, what they handle, and a mailto link: Sales and demos, Partnerships and investors, Customer support, Media and press, Careers and recruitment, Data protection officer.
5. **Support section (anchor `#support`):** for existing customers. Short text on how to get help, links to documentation or resources, and a support request mini-form or link (with priority levels), plus service hours.
6. **Partnerships and press section (anchors `#partnerships` and `#press`):** two side-by-side cards linking to `/partners` and `/press-kit` with direct email links.
7. **Careers pointer (anchor `#careers`):** small card linking to `/careers/open-roles` and the Talent Community so recruitment enquiries are not lost in the general form.
8. **Map and directions (anchor `#visit`):** large embedded map with a soft neutral style, a marker in Swizzy Blue, an "Open in Maps" button, directions notes, and parking or public transport hints. Photo of the building entrance beneath.
9. **FAQ (anchor `#faq`):** accordion with six to eight questions: response times, demo process, pricing approach, supported devices, data privacy, partnership process, hiring enquiries, media requests.
10. **Response promise band:** Blue Tint band with three icons: "Reply within [x] business days", "Real people, not bots", "Your data stays protected".
11. **Newsletter strip.**
12. **Footer.**

**Form behavior details:**
- Real-time validation with plain language ("Please enter a valid email address").
- The form must work without JavaScript as a fallback (progressive enhancement).
- After submission, redirect to `/thank-you?source=contact` or show the inline success state, and send an automatic confirmation email.
- Store consent timestamps.

**Accessibility notes:** all fields have programmatic labels, error summaries are announced to screen readers, the map has a text alternative with the full address.

> **Stitch prompt (Contact):** Design a single-page "Contact" page for Swizzy Industries (no dropdown menu) with a friendly header and response-time promise, a sticky quick-jump pill bar (Send a message, Support, Partnerships, Press, Careers, Visit us, FAQ), a two-column main section with a contact form card on the left (topic dropdown, name, email, phone with +254, organization, role, message with counter, consent, send button) and stacked contact cards on the right (email, phone, WhatsApp, visit us, socials), a six-card "who to contact" routing grid, a support section, partnerships and press cards, a careers pointer, a large soft-toned map with a blue marker and directions, an FAQ accordion, a response promise band, and the footer. Open, friendly, efficient, on-brand.

---

## 13. Utility & System Pages

### 13.1 Search results

- **URL:** `/search?q=`
- **Purpose:** Help visitors find pages, articles, resources, and jobs quickly.
- **Look & feel:** Minimal and fast. A large search input at the top, result count, tabs by content type (All, Pages, Blog, News, Resources, Careers), and result cards with highlighted matching text.
- **Sections:** search input with suggestions, filter tabs, result list with breadcrumb path under each title, pagination, and a "Can't find it?" callout linking to Contact.
- **Empty state:** friendly message, spelling tips, and popular pages.

> **Stitch prompt:** Design a minimal search results page with a large search field, content type tabs, result cards with highlighted terms and breadcrumb paths, pagination, and a friendly empty state with popular pages and a contact link.

### 13.2 Thank you page

- **URL:** `/thank-you`
- **Purpose:** Confirm submissions (contact, demo, newsletter, talent community) and guide the next step. Also used for analytics conversion tracking.
- **Look & feel:** Warm and uncluttered. A large check icon in a Success-tinted circle, H1 "Thank you", a short message adjusted to the form type, a "What happens next" mini timeline, and three helpful links (Read the blog, Explore the pillars, Follow us).

> **Stitch prompt:** Design a thank-you confirmation page with a success icon, headline, message, a three-step "what happens next" mini timeline, and three suggested links. Warm and uncluttered.

### 13.3 Legal pages (shared template)

- **URLs:** `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/legal/accessibility`
- **Purpose:** Communicate obligations and rights in a readable, trustworthy way.
- **Look & feel:** Plain, readable, narrow 720px column with a sticky table of contents on the left on desktop. Last updated date at the top. Numbered headings. A "Print" and "Download PDF" button. Minimal decoration.
- **Extra elements:** summary box at the top ("In plain language"), and contact details for data enquiries.

> **Stitch prompt:** Design a legal page template with a narrow reading column, sticky table of contents, last-updated date, a plain-language summary box, numbered headings, and print/download buttons. Minimal and readable.

### 13.4 HTML sitemap

- **URL:** `/sitemap`
- **Purpose:** Accessibility and SEO helper that lists every page by section.
- **Look & feel:** Simple multi-column link lists grouped under the five nav headings and utility pages.

### 13.5 Error pages (404 and 500)

- **404 look & feel:** Friendly and on-brand. A calm geometric illustration of a floating cube that has drifted off, H1 "We couldn't find that page", a search input, and links to Home, Pillars, Blog, Contact.
- **500 look & feel:** Similar layout, H1 "Something went wrong on our side", a "Try again" button, and a status contact link.
- **Tone:** light and reassuring, never blaming the visitor.

> **Stitch prompt:** Design a 404 page for Swizzy Industries with a soft geometric illustration of a floating cube, headline "We couldn't find that page", a search field, and four helpful links. Also a matching 500 error variant.

### 13.6 Cookie banner and preferences

- **Banner:** bottom-left card (bottom sheet on mobile) with short text, buttons Accept all, Reject non-essential, and Manage preferences.
- **Preferences modal:** toggles for Necessary (always on), Analytics, Functional, and Marketing with plain descriptions and a Save button.

### 13.7 Maintenance and coming soon page (optional)

- A single centered page with the logo, tagline, a short message, an email capture for launch updates, and social links. Useful for zones that launch later.

---

## 14. Pillar Zone Sites (Subdomains)

Each zone is its own Next.js application, but it must feel like part of the same brand. Use the same design tokens, the same header and footer shell, and the pillar accent color for highlights.

### 14.1 Shared rules for all zones

- **Header:** identical to the main site header, plus a small left-aligned "Swizzy Industries" back-link and the pillar name as a sub-brand label (for example "Swizzy Health"). The mega menu remains the same five items so visitors can jump back to any part of the main site.
- **Local sub-navigation:** a slim secondary bar under the header (48px, Mist background) with the pillar's own links.
- **Accent:** each zone uses its pillar accent color for icon chips, card top borders, secondary buttons, and the sub-navigation active state. Primary buttons stay Swizzy Blue for consistency.
- **Footer:** same as the main site, plus a pillar-specific link column at the start.
- **Hero style:** each zone has its own hero with pillar-specific photography and a two-line headline, but uses the same layout structure as the main homepage hero.
- **Shared components:** cards, forms, FAQ, CTA bands, and testimonial components come from the shared component library.

### 14.2 Swizzy Health (`health.{domain}`)

- **Purpose:** The complete home for health solutions, from product detail to pilot enrollment.
- **Local sub-navigation:** Overview, Solutions, Use Cases, Clinical Safety, Training Programs, Pilots, Resources, Contact.
- **Suggested pages:**
  - **Overview (home):** hero "Immersive technology for safer, smarter care", solution highlights, outcomes, trust section, pilot CTA.
  - **Solutions:** equipment training simulators, clinical procedure practice, patient education and comfort, remote collaboration. Each with a detail page (features, screenshots, requirements).
  - **Use cases:** by role (Clinical trainers, Biomedical engineers, Hospital leaders) and by department (for example theatre, ICU, radiology, nursing).
  - **Clinical safety and governance:** content review process, advisory clinicians, privacy and data handling.
  - **Training programs:** how Swizzy trains hospital staff on the platform.
  - **Pilots:** how to start a pilot, timeline, required resources, application form.
  - **Resources:** health-tagged documents and articles.
  - **Contact:** health-specific enquiry form.
- **Look & feel notes:** teal-green accents, calm clinical photography, evidence and safety emphasized on every page.

> **Stitch prompt (Health zone home):** Design the homepage for "Swizzy Health" (health.{domain}), a sub-site of Swizzy Industries. Reuse the main header with a "Swizzy Industries" back-link and a slim secondary navigation bar (Overview, Solutions, Use Cases, Clinical Safety, Training Programs, Pilots, Resources, Contact). Teal-green #0E9F8E accents, hero "Immersive technology for safer, smarter care", solution cards, outcomes stats, trust and safety section, pilot CTA, and the shared footer. Calm, clinical, reassuring.

### 14.3 Swizzy Education (`education.{domain}`)

- **Purpose:** The complete home for education solutions, from lesson libraries to school onboarding.
- **Local sub-navigation:** Overview, Solutions, Lesson Library, For Schools, For Teachers, For Universities & TVET, Pricing & Plans, Resources, Contact.
- **Suggested pages:**
  - **Overview (home):** hero "Learning that reaches every learner", subject highlights, outcomes, teacher tools, school onboarding CTA.
  - **Lesson Library:** browsable catalog filtered by subject, level, and curriculum topic, with a lesson detail page (learning objectives, duration, devices needed, preview video).
  - **For Schools:** setup guide, classroom models (single headset, shared rotation, full lab), safety, cost planning.
  - **For Teachers:** training, lesson planning tools, classroom management, community of practice.
  - **For Universities & TVET:** labs and skills simulations, research partnerships.
  - **Pricing & Plans:** engagement models with comparison table (no numbers until confirmed).
  - **Resources:** teacher guides, curriculum alignment documents.
  - **Contact:** education-specific enquiry form and school demo booking.
- **Look & feel notes:** education blue accents, bright classroom photography, slightly friendlier iconography.

> **Stitch prompt (Education zone home):** Design the homepage for "Swizzy Education" (education.{domain}), a sub-site of Swizzy Industries. Reuse the main header with a back-link and a slim secondary navigation (Overview, Solutions, Lesson Library, For Schools, For Teachers, For Universities & TVET, Pricing & Plans, Resources, Contact). Education-blue #3A5BD9 accents, hero "Learning that reaches every learner", subject highlight cards, a lesson library preview, outcomes, teacher tools, and a school onboarding CTA. Bright, optimistic, professional.

### 14.4 Swizzy Socialization (`social.{domain}`)

- **Purpose:** The complete home for social and community experiences, with a strong emphasis on safety and trust.
- **Local sub-navigation:** Overview, Experiences, For Communities, For Creators, For Organizations, Safety & Guidelines, Events, Resources, Contact.
- **Suggested pages:**
  - **Overview (home):** hero "Bringing people closer, wherever they are", experience previews, safety highlights, community stories, join CTA.
  - **Experiences:** showcase of shared virtual spaces, events, and creator showcases with media previews.
  - **For Communities / Creators / Organizations:** audience-specific benefits and onboarding.
  - **Safety & Guidelines:** community standards, moderation approach, reporting, privacy controls, parental information.
  - **Events:** upcoming virtual gatherings.
  - **Resources and Contact.**
- **Look & feel notes:** coral accents, people-forward photography, rounder shapes, safety signals always visible.

> **Stitch prompt (Socialization zone home):** Design the homepage for "Swizzy Socialization" (social.{domain}), a sub-site of Swizzy Industries. Reuse the main header with a back-link and a slim secondary navigation (Overview, Experiences, For Communities, For Creators, For Organizations, Safety & Guidelines, Events, Resources, Contact). Coral #E8735A accents, hero "Bringing people closer, wherever they are", experience previews, a visible safety highlights band, community stories, and a join CTA. Warm, friendly, safe, still corporate.

---

## 15. Content, Voice & Microcopy Guidelines

### 15.1 Voice

- **Clear:** short sentences, plain words, define technical terms once.
- **Confident, not boastful:** state facts and outcomes, avoid superlatives.
- **Human:** speak about people (patients, learners, communities) before technology.
- **Local:** use Kenyan examples, place names, and relevant institutions. Consider using occasional Swahili greetings or phrases ("Karibu") only where natural and reviewed by a native speaker.
- **Inclusive:** avoid jargon and gendered language, write for people using different devices and connection speeds.

### 15.2 Words to prefer and avoid

| Prefer | Avoid |
| --- | --- |
| Immersive technology, VR, AR | Metaverse (unless explaining it) |
| Solutions, tools | Revolutionary, disruptive |
| Learners, clinicians | Users (when referring to people in context) |
| Pilot, partner | Hack, growth hack |
| Safe, private, protected | Bulletproof, unhackable |

### 15.3 Headline patterns

- **Outcome-led:** "Safer training for every hospital"
- **Human-led:** "Learning that reaches every learner"
- **Place-led:** "Kenya reimagined through immersive technology"

### 15.4 Microcopy examples

| Element | Copy |
| --- | --- |
| Primary nav CTA | Request a Demo |
| Form success | "Thank you. We have your message and will reply within [x] business days." |
| Form error | "Please enter a valid email address, for example name@organization.com." |
| Empty search | "We couldn't find anything for that. Try a different word or browse popular pages." |
| Newsletter | "One useful email a month. Unsubscribe anytime." |
| Cookie banner | "We use cookies to make this site work and to understand how it is used. You choose what to allow." |
| 404 | "We couldn't find that page. Let's get you back on track." |
| Download button | "Download PDF (2.4 MB)" |

### 15.5 Language and localization

- **English** is the primary language.
- **Kiswahili** is a recommended second language, especially for Education and Socialization zones and for community-facing content.
- Design all components with room for text that can grow by 30 percent.
- Use Kenya-friendly formats: dates as "12 March 2026", times in East Africa Time (EAT), currency in Kenyan shillings (KES) when prices appear, phone numbers with +254.

---

## 16. SEO, Performance & Accessibility

### 16.1 SEO

- Unique title tag (under 60 characters) and meta description (under 155 characters) for every page.
- One H1 per page, logical heading order.
- Clean, human-readable URLs as listed in the sitemap.
- Structured data (JSON-LD): Organization, WebSite, BreadcrumbList, Article, Event, JobPosting, FAQPage.
- Open Graph and social share images for every page (1200 by 630).
- XML sitemap that includes the main site and links to each zone's sitemap. Canonical URLs to avoid duplicate content across zones.
- Internal linking between blog posts, pillars, and case studies.
- Local SEO: mention Kenya and relevant cities where natural, and add a Google Business Profile for the office.

### 16.2 Performance (important for varying connection speeds in Kenya)

- Target Core Web Vitals in the "Good" range: LCP under 2.5s, INP under 200ms, CLS under 0.1.
- Use Next.js image optimization, modern formats (AVIF, WebP), and responsive sizes.
- Lazy load below-the-fold media and videos. Use poster images and click-to-play video.
- Keep JavaScript small: code-split per route, avoid heavy libraries for simple effects.
- Serve fonts with `font-display: swap` and self-host or subset them.
- Use a CDN with edge locations serving East Africa where possible.
- Design for low bandwidth: provide a lightweight mode (fewer animations, compressed images) and avoid auto-playing video.

### 16.3 Accessibility checklist

- Semantic HTML landmarks (header, nav, main, footer).
- All images have meaningful alt text (decorative images have empty alt).
- Video has captions and a transcript link. Audio has transcripts.
- Mega menu is fully keyboard operable and announces expanded state with ARIA attributes.
- Color contrast meets WCAG 2.2 AA. Focus states are always visible.
- Forms have labels, error messages linked to fields, and a summary of errors at the top after submission.
- No content depends on hover alone (touch and keyboard alternatives exist).
- Respect `prefers-reduced-motion` and `prefers-color-scheme` as noted (light mode is the default design).
- Provide an Accessibility Statement page describing conformance and how to report issues.

### 16.4 Analytics and measurement

- Track: demo requests, contact submissions, newsletter sign-ups, resource downloads, job applications, clicks from main site to each zone, and video plays.
- Use privacy-respecting analytics with a consent-aware setup.
- Track cross-zone journeys using a shared measurement ID and consistent campaign parameters.

---

## 17. Legal, Privacy & Data Protection

> This section lists what pages and features are needed. Have qualified legal counsel write and review the actual text.

- **Kenya Data Protection Act, 2019:** consider registration with the Office of the Data Protection Commissioner where required, publish a clear privacy notice, name a data protection contact, and honor data subject rights (access, correction, deletion).
- **Health-related content:** avoid collecting patient data through the website. Any pilot or demo that touches health data needs separate agreements and safeguards.
- **Children and education:** if learner information is ever collected, obtain appropriate consent from schools or guardians and follow child-safeguarding principles.
- **Consent management:** cookie banner with granular choices, consent logs, and easy withdrawal.
- **Forms:** every form links to the Privacy Policy and states what will be done with the data.
- **Testimonials and images:** written permission for all named people and identifiable individuals.
- **Claims:** any health or educational outcome claim must be supported by evidence and reviewed before publishing.
- **Accessibility statement and terms of use:** both required pages.
- **Third-party embeds:** map, video, and analytics providers must be disclosed in the cookie policy.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt (paste this first, before any page)

> You are designing the website for **Swizzy Industries**, a registered Kenyan company that builds immersive VR and AR software and tools (not games) for the sectors that matter most to the economy: Health, Education, and Socialization. Tagline: "Kenya reimagined through immersive technology".
>
> **Style:** clean, corporate, trustworthy, with a subtle futuristic touch. Light theme only. No neon, no glitch, no gamer look, no dark-mode-first design.
>
> **Colors:** Deep Navy #0A1F44, Swizzy Blue #1B5FC1 (primary, buttons and links), Immersion Teal #12A5B4 (accent), Savannah Amber #F2A63B (rare highlight), white #FFFFFF, Mist #F5F8FC, Cloud borders #E6ECF4, Slate #64748B, Deep Slate #334155, Ink #0F172A. Pillar accents: Health #0E9F8E, Education #3A5BD9, Socialization #E8735A. Horizon gradient from #1B5FC1 to #12A5B4 at 135 degrees, used softly.
>
> **Typography:** Plus Jakarta Sans for headings (600 and 700), Inter for body and UI. Display 64, H1 48, H2 36, H3 28, body 16 to 18. Sentence case headings.
>
> **Layout:** 12-column grid, 1200px container, 4px spacing base, 96px section padding on desktop, alternating white and Mist sections. Cards with 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall with 12px radius.
>
> **Imagery:** real Kenyan people and places, warm natural light, headsets used in real settings, no white-void stock photos. Subtle geometric shapes (cubes, layered planes) in blue and teal as accents for depth.
>
> **Navigation:** five-item mega menu: Home, Pillars & Solutions, Blog & News, Careers (all with large dropdown panels) and Contacts (a plain link, no dropdown), plus a "Request a Demo" primary button and a search icon.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive from 360px to 1536px, lots of white space, consistent components across every page.

### 18.2 Component prompts (generate these second)

> **Header and mega menu:** Design the website header with logo left, five nav items centered (Home, Pillars & Solutions, Blog & News, Careers, Contacts), and search icon plus "Request a Demo" button on the right. Show the open state of each dropdown as a full-width white panel with columns of links, each with icon, title, and one-line description, a Mist bottom strip, and a featured card. Pillars & Solutions panel: three large pillar cards (Health, Education, Socialization) on the left and a Solutions list on the right. Contacts has no dropdown. Also design the mobile full-screen menu with accordion sections.

> **Footer:** Design a navy footer with a top CTA band, five columns (brand and tagline with social icons, Company, Pillars & Solutions, Explore, Join & Contact), newsletter field, and a bottom bar with copyright and legal links. Show desktop and mobile accordion versions.

### 18.3 Suggested prompt pattern for each page

1. Paste the page's Stitch prompt.
2. Add: "Use the same header, footer, and design system as previous pages."
3. If the result drifts, follow up with a correction such as: "Reduce visual effects, increase white space, keep the color palette to blue, teal, and neutrals only."
4. Ask for the mobile version: "Now show the mobile layout at 390px width."

### 18.4 Common corrections to have ready

- "Make it feel more trustworthy and less flashy."
- "Remove gradients except in the hero wash and the CTA band."
- "Use real-looking photography of Kenyan people in clinics and classrooms instead of abstract art."
- "Increase text contrast and font size for accessibility."
- "Simplify the layout: fewer sections, more spacing."
- "Keep pillar colors only as small accents, primary buttons stay Swizzy Blue."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and design tokens
2. Header and mega menu (desktop and mobile)
3. Footer
4. Homepage
5. Pillars Overview and the three pillar landing pages
6. About Us, Mission Vision & Values, Our Story
7. Team & Leadership (plus profile template)
8. Solutions Overview, Bespoke Development, Devices & Integration
9. Case Studies (plus detail template) and Request a Demo
10. Contact (single page)
11. Blog, Article template, News, Events
12. Resource Library, Press & Media Kit, Gallery
13. Partners & Investors, Impact & Sustainability
14. Careers pages (Why Swizzy, Life & Benefits, Open Roles, Job detail, Early Careers, Hiring Process, Talent Community)
15. Utility pages (search, thank you, legal, sitemap, 404 and 500, cookie banner)
16. Zone homepages (Health, Education, Socialization)

### 19.2 Per-page quality checklist

- [ ] Uses the shared header, footer, and tokens
- [ ] One clear primary CTA
- [ ] Follows the section order in this document
- [ ] Mobile layout reviewed at 390px
- [ ] Tablet layout reviewed at 768px
- [ ] Contrast and focus states verified
- [ ] Real or clearly marked placeholder content
- [ ] Alt text and captions drafted
- [ ] SEO title and description written
- [ ] Links to the correct subdomain where relevant

### 19.3 Launch checklist

- [ ] Domain and subdomains configured, with SSL for all
- [ ] Multi-zone rewrites and cross-zone links tested
- [ ] Shared cookie and consent behavior verified across subdomains
- [ ] Forms tested end to end (delivery, confirmation email, spam protection)
- [ ] Analytics and conversion tracking verified
- [ ] Performance and accessibility audits passed
- [ ] Legal pages approved
- [ ] 404 and 500 pages live
- [ ] Redirects and sitemap submitted to search engines

---

## 20. Placeholders to Fill In

Collect these from the company before or during design so that no real page ships with placeholders:

| Item | Where it is used |
| --- | --- |
| Root domain name | Everywhere (`{domain}`) |
| Final logo files (color, white, single color, icon) | Header, footer, press kit |
| Founding year, headquarters city, team size | About, Quick facts, Press kit |
| Mission and vision statements (final wording) | Mission page, About |
| Leadership names, roles, photos, bios | Team page, profiles, About |
| Partner and investor logos and names | Partners, homepage logo strip |
| Impact numbers with sources | Homepage stats, Impact page |
| Case study details and client approvals | Case Studies, homepage spotlight |
| Testimonials with written permission | Homepage, pillar pages, Partners |
| Product screenshots and demo videos | Solutions, pillar pages, Gallery |
| Office address, phone, email addresses, WhatsApp number | Contact page, footer |
| Demo and contact response-time promise | Contact, Request a Demo |
| Careers: open roles, benefits list, hiring process | Careers section |
| Legal texts (privacy, terms, cookies, accessibility) | Legal pages |
| Curriculum alignment details | Education pillar and zone |
| Clinical review and compliance statements | Health pillar and zone |
| Community guidelines and moderation policy | Socialization pillar and zone |
| Pricing or engagement model wording | Solutions, Education zone |
| Newsletter platform and forms handling service | Footer, Blog, Contact |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
