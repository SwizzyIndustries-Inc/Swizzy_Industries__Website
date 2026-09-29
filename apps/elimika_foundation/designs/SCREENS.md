# Elimika Foundation: Website Sitemap & Design Brief

> Master reference for generating the Elimika Foundation website UI in Stitch.
> Elimika is a Swizzy Industries pillar brand. Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

---

## Table of Contents

1. How to Use This Document with Stitch
2. Brand Foundation
3. Design System
4. Global Components
5. Site Architecture
6. Full Sitemap
7. Navigation Specification (Mega Menu)
8. Page Specifications: Home
9. Page Specifications: Learning Solutions
10. Page Specifications: Blog & Research
11. Page Specifications: Careers
12. Page Specification: Contacts
13. Utility & System Pages
14. Institution Portals (Subdomains)
15. Content, Voice & Microcopy Guidelines
16. SEO, Performance & Accessibility
17. Legal, Privacy & Data Protection
18. Stitch Prompting Playbook
19. Build Order & Checklist
20. Placeholders to Fill In

---

## 1. How to Use This Document with Stitch

### 1.1 Recommended workflow

1. Paste **Section 18.1 (Global Design Prompt)** into Stitch first to lock in the visual language.
2. Generate the **Header + Mega Menu** and **Footer** next, since every other page reuses them.
3. Generate pages in the build order listed in **Section 19**.
4. For each page, paste that page's **Stitch prompt** and, if needed, its section list beneath it.
5. Check each page against **Section 3 (Design System)** for color, type, and spacing consistency.
6. Export the generated designs into the `apps/elimika_foundation` Next.js app, wired to `packages/ui`.

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain (e.g. `elimika.swizzy.com` or a standalone domain). Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content the company must supply.
- **Look & feel** notes describe visual intent, not code.
- **CTA** means call to action.
- "Track" means one of the four learner segments: K-12, Higher Education, TVET & Skills, Educators & Institutions.

### 1.3 What this brief deliberately does not include

- Real statistics, school partnerships, or testimonials — use clearly marked placeholders.
- Real student or teacher photos — use placeholder portraits until consent is secured.
- Legal text — Section 17 lists what pages are needed, not the wording.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Brand name:** Elimika Foundation (Swahili root *elimu* — knowledge/education)
- **Parent company:** Swizzy Industries Limited
- **Industry:** VR, AR, and AI applied to education, across all levels
- **Tagline:** "Learning, reimagined in three dimensions"
- **What it does:** Builds immersive classrooms, virtual labs, AI-guided tutoring, and skills-training simulations for schools, universities, TVET institutions, and independent learners across Kenya.
- **Four tracks:**
  - **K-12:** immersive science labs, history walkthroughs, language immersion
  - **Higher Education:** virtual laboratories, engineering and medical-adjacent simulations, research collaboration spaces
  - **TVET & Skills:** trade simulations (welding, electrical, agriculture, hospitality) that are expensive or dangerous to practice physically
  - **Educators & Institutions:** authoring tools, classroom management, curriculum alignment dashboards

### 2.2 Brand personality

Elimika should feel like the tool a headteacher, a university dean, and a curious 14-year-old would all want to open.

- **Encouraging:** learning should feel like discovery, not a lecture
- **Rigorous:** curriculum-aligned, pedagogically sound, never edutainment fluff
- **Accessible:** works on modest hardware and low bandwidth, priced for public institutions
- **Bright without being childish:** playful energy for younger learners, restrained confidence for institutional buyers
- **Kenyan and pan-African:** local curricula (CBC, 8-4-4 legacy, KICD alignment), local languages, local examples

### 2.3 Brand attributes to avoid

- No gamer/esports aesthetic, no loot-box or badge-spam visual language
- No condescending "edutainment" cartoon style for the institutional-facing pages
- No implication that VR replaces teachers — always "empowers educators"
- No stock photos of headsets in a white void; show real classrooms and labs

### 2.3.1 The one-sentence brief for any designer

"A bright, optimistic, curriculum-serious education website in indigo and gold, with the same restrained corporate polish as the parent Swizzy brand, built to make school administrators trust it and students want to click into a lesson."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Headteachers & school administrators | Better outcomes, manageable rollout, CBC alignment | Curriculum mapping, pilot results, pricing clarity |
| University deans & lab heads | Cost-effective lab access, research tools | Case studies, technical specs, integration docs |
| TVET principals | Safe, repeatable trade practice | Safety framing, employer partnerships, certification paths |
| Teachers & lecturers | Easy authoring, classroom control, no tech burden | Demo videos, low-friction onboarding, support |
| Parents | Is this good for my child, is it safe | Plain-language explainers, screen-time framing |
| Students & independent learners | Is this fun and useful | Free trial modules, gallery of experiences |
| Ministry & county education officials | Scale, equity, local capacity | Impact data, public-sector case studies, cost per learner |
| Investors & development partners | Market size, traction, roadmap | Team page, milestones, impact metrics |

### 2.5 Tagline usage

- **Primary tagline:** "Learning, reimagined in three dimensions"
- Use in the homepage hero, footer, and social bios.
- Shorter alternates: "Elimika. See it. Do it. Know it." and "Every lab, every learner."
- Always sentence case in body copy.

### 2.6 Logo guidance (until a final logo exists)

- Wordmark: "Elimika" in bold, with a small geometric mark suggesting an open book folding into a cube (2D-to-3D learning).
- Provide light and dark versions plus a single-color version.
- Minimum clear space equals the height of the letter "E" on all sides.
- Elimika's mark always sits visually subordinate to the Swizzy Industries master brand in co-branded contexts (small "part of Swizzy Industries" lockup in the footer).

---

## 3. Design System

### 3.1 Design principles

1. **Clarity for a classroom.** A teacher with five minutes of prep time must understand a page instantly.
2. **Warmth through color, restraint through layout.** Bright accent colors are allowed; chaotic layouts are not.
3. **Curriculum before chrome.** Real subject content (labs, modules, examples) always outranks decorative UI.
4. **One family with Swizzy.** Shares Swizzy's grid, spacing, and component shapes; differs mainly in color and imagery.
5. **Device-honest.** Never depict UI or hardware Elimika doesn't actually ship.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `elimika-indigo` | Learning Indigo | `#3A3BD9` | Primary — buttons, links, active nav |
| `elimika-indigo-hover` | Indigo Hover | `#2E2EAD` | Hover/pressed state |
| `elimika-indigo-tint` | Indigo Tint | `#E9E9FB` | Hover fills, selected chips |
| `elimika-gold` | Achievement Gold | `#F2B33B` | Accent — progress, badges, highlights |
| `elimika-gold-tint` | Gold Tint | `#FCF1DC` | Soft highlight backgrounds |
| `track-k12` | K-12 Track | `#3A5BD9` | K-12 track tag (matches Swizzy education pillar) |
| `track-highered` | Higher Ed Track | `#6C4FD9` | Higher education track tag |
| `track-tvet` | TVET Track | `#1E8F6B` | TVET & skills track tag |
| `track-educator` | Educator Track | `#D97A3A` | Educator tools track tag |
| `feedback-success` | Success | `#1E9E6A` | Confirmations, completed lessons |
| `feedback-warning` | Warning | `#E0A100` | Non-blocking notices |
| `feedback-error` | Error | `#D64545` | Errors, validation |

#### Backgrounds & neutrals (shared with Swizzy master system)

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant surface |
| `mist-bg` | `#F7F8FF` | Alternating section fill (indigo-tinted mist) |
| `cloud-border` | `#E4E5F5` | 1px structural borders |
| `ink-text` | `#12132B` | Primary text |
| `slate-body` | `#3A3C55` | Body copy |
| `slate-muted` | `#6B6D87` | Placeholder/secondary text |

WCAG AA compliance required throughout (4.5:1 body copy, 3:1 large text and controls).

### 3.3 Typography

- **Headings:** Plus Jakarta Sans, 600–700 weight (shared with Swizzy master brand for family consistency).
- **Body & UI:** Inter, 400–500 weight.
- **Scale:** Display 60px, H1 46px, H2 34px, H3 26px, body 16–18px — one notch friendlier/smaller than Swizzy's institutional scale to feel approachable in a classroom context.
- **Casing:** Sentence case everywhere except the `eyebrow` token (all caps, track color).

### 3.4 Layout & spacing

Same 12-column grid, 1200px container, 8pt base grid, and 96px desktop section padding as the Swizzy master system (Section 3.4 of `DESIGN.md`), so the two properties feel related. Cards use 12px radius; track-specific badges use full pill radius.

---

## 4. Global Components

- **Track badges:** pill-shaped, track-colored background, white text, used on every course/module/lab card to instantly signal K-12 / Higher Ed / TVET / Educator content.
- **Progress ring:** circular indicator in `elimika-gold` used on learner dashboards and module cards.
- **Lab preview card:** thumbnail (or 3D preview), track badge, subject tag, duration, "Try in VR" / "Try in browser" dual CTA.
- **Curriculum-alignment chip:** small chip showing "CBC Aligned" / "KICD Mapped" / "University Accredited" where applicable — builds institutional trust at a glance.
- Buttons, inputs, and cards otherwise inherit the shared `packages/ui` primitives from the Swizzy design system, recolored via the tokens above.

---

## 5. Site Architecture

Single Next.js app (`apps/elimika_foundation`) sharing `packages/ui`. No sub-zones needed at launch; if TVET or Higher Ed grow into distinct portals later, split them the way Swizzy split its three pillars into subdomains (Section 14).

---

## 6. Full Sitemap

- Home
- Learning Solutions
  - K-12
  - Higher Education
  - TVET & Skills
  - For Educators & Institutions
- Labs & Modules Catalog (+ detail template)
- How It Works
- Impact & Outcomes
- Blog & Research
- Case Studies (+ detail template)
- Partners & Institutions
- Pricing / Engagement Models
- About Elimika (Mission, Story, Team)
- Careers
- Contact / Request a Demo
- Utility: Search, Thank You, Legal, Sitemap, 404/500

---

## 7. Navigation Specification (Mega Menu)

**Five-item mega menu:** Home, Learning Solutions, Labs & Modules, Blog & Research, Careers — plus a plain **Contact** link, a **"Request a Demo"** primary button, and a search icon.

- **Learning Solutions panel:** four large track cards (K-12, Higher Education, TVET & Skills, Educators & Institutions) on the left, each with icon, one-line description, track color; a "Popular Labs" list on the right.
- **Labs & Modules panel:** filterable preview grid teaser (Subjects: Science, Engineering, Health-adjacent, Trades, Languages) linking to the full catalog.
- Mobile: full-screen accordion menu, same grouping.

---

## 8. Page Specifications: Home

**Purpose:** Convince an institutional buyer this is credible, and a learner this is exciting, within five seconds — then route each to their track.

**Sections:**
1. Hero — headline, tagline, dual CTA ("Request a Demo" / "Explore Labs"), soft indigo-to-gold horizon wash, real classroom photography
2. Track selector — four cards (K-12, Higher Ed, TVET, Educators), each routes to its solutions page
3. Featured lab carousel — 3D/VR preview cards with track badges
4. How it works — three-step strip (Choose a lab → Learn in 3D → Track mastery)
5. Impact stats band (navy background, placeholder numbers marked clearly)
6. Curriculum alignment strip — CBC / KICD / university accreditation logos
7. Case study spotlight
8. Educator CTA band — "Bring Elimika to your school"
9. Blog/Research teaser (3 latest)
10. Footer

> **Stitch prompt:** "Design the Elimika Foundation homepage: bright indigo-and-gold education brand, hero with dual CTA, a four-card track selector (K-12, Higher Education, TVET & Skills, Educators), a lab preview carousel with track-colored badges, an impact stats band on navy, and a curriculum-alignment logo strip. Same grid, spacing, and card shapes as the Swizzy Industries master design system, but in indigo and gold."

---

## 9. Page Specifications: Learning Solutions

Four sub-pages (K-12, Higher Education, TVET & Skills, Educators & Institutions), each following the same template:

1. Track hero (track-colored eyebrow, headline, relevant photography)
2. Problem framing (what's hard about this today)
3. How Elimika solves it (feature grid, 4–6 items)
4. Sample labs/modules for this track (card grid)
5. Curriculum/accreditation alignment detail
6. Pricing or engagement model summary for this track
7. CTA band — "Request a demo for your [school / university / institute]"

> **Stitch prompt:** "Design a Learning Solutions track page for [K-12 / Higher Education / TVET & Skills / Educators], track color [insert], with a hero, problem framing section, a 2x3 feature grid, a sample-labs card grid with track badges, and a curriculum-alignment section. Use the same header, footer, and design system as the homepage."

---

## 10. Page Specifications: Blog & Research

Standard blog listing with filters by track and subject, plus a distinct **Research** content type for published studies on learning outcomes (important for institutional credibility). Article template includes an "Evidence & Outcomes" callout box style for research posts.

---

## 11. Page Specifications: Careers

Mirrors Swizzy's careers structure (Why Elimika, Life & Benefits, Open Roles, Job detail, Hiring Process) with education-specific culture content — instructional designers, subject-matter experts, and 3D artists alongside engineers.

---

## 12. Page Specification: Contacts

Single page: general inquiry form, "Request a Demo" form (routes by track), regional office/partnership contact, and a support contact for existing institutional customers.

---

## 13. Utility & System Pages

Search, Thank You, Privacy Policy, Terms of Use, Accessibility Statement, Sitemap, 404, 500, Cookie banner — same requirements as Swizzy master brief (Section 13/17).

---

## 14. Institution Portals (Subdomains)

Not needed at launch. If TVET or Higher Ed scale into dedicated logged-in portals with their own dashboards, spin those out the same way Swizzy split pillar zones into subdomains, inheriting this design system.

---

## 15. Content, Voice & Microcopy Guidelines

- Speak to educators as professionals, to students as capable, to officials as partners.
- Avoid "revolutionize," "disrupt," "future of education" — prefer concrete outcomes ("practice a titration without the risk," "walk through the Battle of Nandi Hills").
- Every lab/module description states the subject, level, and duration up front.
- Never claim a specific grade or score improvement without a cited source.

---

## 16. SEO, Performance & Accessibility

Same technical bar as Swizzy master brief: WCAG AA, 44px touch targets, responsive 360–1536px, privacy-respecting analytics. Additionally: alt text on every lab thumbnail must describe the learning activity, not just the visual, for screen-reader users navigating a catalog.

---

## 17. Legal, Privacy & Data Protection

- **Children's data:** strict compliance with Kenya Data Protection Act, 2019, for any K-12 learner data; guardian/school consent required before collecting any learner-identifiable information.
- **Institutional data agreements:** separate data-processing agreements for schools/universities, referenced but not reproduced on the public site.
- Standard privacy notice, terms of use, accessibility statement, cookie consent — see Swizzy master brief Section 17 for shared requirements.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt

> You are designing the website for **Elimika Foundation**, a Swizzy Industries brand that builds immersive VR/AR/AI education tools for K-12, Higher Education, TVET & Skills, and Educators, across Kenya. Tagline: "Learning, reimagined in three dimensions."
>
> **Style:** bright, optimistic, curriculum-serious. Light theme only. Same restrained corporate polish as the Swizzy master brand — no gamer/esports look, no cartoonish edutainment style.
>
> **Colors:** Learning Indigo #3A3BD9 (primary), Indigo Hover #2E2EAD, Indigo Tint #E9E9FB, Achievement Gold #F2B33B (accent), Gold Tint #FCF1DC, white #FFFFFF, Mist #F7F8FF, Cloud borders #E4E5F5, Ink #12132B, Slate body #3A3C55, Slate muted #6B6D87. Track colors: K-12 #3A5BD9, Higher Ed #6C4FD9, TVET #1E8F6B, Educators #D97A3A.
>
> **Typography:** Plus Jakarta Sans for headings (600/700), Inter for body/UI. Display 60, H1 46, H2 34, H3 26, body 16–18. Sentence case.
>
> **Layout:** 12-column grid, 1200px container, 8pt spacing base, 96px section padding desktop, alternating white and Mist sections. Cards 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall, 12px radius. Track badges as pill shapes in track colors.
>
> **Imagery:** real Kenyan classrooms, labs, and learners of all ages using devices naturally; warm light; no white-void headset stock photos.
>
> **Navigation:** five-item mega menu — Home, Learning Solutions, Labs & Modules, Blog & Research, Careers — plus plain Contact link, "Request a Demo" button, search icon.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive 360–1536px, consistent components across every page.

### 18.2 Component prompts

> **Header and mega menu:** logo left, five nav items centered, search icon and "Request a Demo" button right. Learning Solutions dropdown shows four track cards (K-12, Higher Ed, TVET & Skills, Educators) with icon, title, one-line description, track color accent, plus a "Popular Labs" list column.

> **Footer:** navy footer, top CTA band ("Bring Elimika to your school"), columns for Brand, Learning Solutions, Resources, Careers & Contact, newsletter field, bottom bar with "part of Swizzy Industries" lockup and legal links.

### 18.3 Suggested prompt pattern for each page

Same pattern as Swizzy master brief Section 18.3 — paste page prompt, reference shared header/footer/system, correct for drift, request mobile layout.

### 18.4 Common corrections to have ready

- "Make it feel more like a real classroom tool, less like a game."
- "Keep track colors to badges and accents only — primary buttons stay Learning Indigo."
- "Increase whitespace between lab cards."
- "Show real curriculum alignment logos, not generic badges."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and tokens
2. Header and mega menu
3. Footer
4. Homepage
5. Learning Solutions overview + four track pages
6. Labs & Modules catalog + detail template
7. How It Works, Impact & Outcomes
8. Case Studies + detail template
9. Pricing / Engagement Models
10. About, Team
11. Blog/Research listing + article template
12. Careers pages
13. Contact / Request a Demo
14. Utility pages

### 19.2 Per-page quality checklist

Same as Swizzy master brief Section 19.2.

### 19.3 Launch checklist

Same as Swizzy master brief Section 19.3, plus: guardian-consent flow tested for any K-12 data capture.

---

## 20. Placeholders to Fill In

| Item | Where it is used |
| --- | --- |
| Root domain / subdomain | Everywhere (`{domain}`) |
| Final Elimika logo files | Header, footer, press kit |
| Curriculum alignment evidence (CBC, KICD, university accreditations) | Solutions pages, homepage strip |
| Founding year, HQ, team size | About, Quick facts |
| Leadership and instructional-design team bios | Team page |
| Pilot school/university partners (with approval) | Case studies, homepage |
| Impact numbers with sources | Homepage stats, Impact page |
| Lab/module catalog content and screenshots | Labs & Modules catalog |
| Pricing/engagement model wording per track | Solutions pages, Pricing |
| Office address, phone, email, demo response-time promise | Contact |
| Open roles and hiring process detail | Careers |
| Legal texts | Legal pages |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
