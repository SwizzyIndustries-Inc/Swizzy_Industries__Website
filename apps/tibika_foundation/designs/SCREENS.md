# Tibika: Website Sitemap & Design Brief

> Master reference for generating the Tibika website UI in Stitch.
> Tibika is a Swizzy Industries pillar brand. Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

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
9. Page Specifications: Clinical & Research Solutions
10. Page Specifications: Blog & Publications
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

1. Paste **Section 18.1 (Global Design Prompt)** into Stitch first.
2. Generate the **Header + Mega Menu** and **Footer** next.
3. Generate pages in the build order listed in **Section 19**.
4. For each page, paste that page's **Stitch prompt** and its section list.
5. Check each page against **Section 3 (Design System)** for consistency.
6. Export into `apps/tibika_foundation`, wired to `packages/ui`.

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain. Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content.
- **Look & feel** notes describe visual intent, not code.
- **CTA** means call to action.
- "Domain" means one of Tibika's three focus areas: Clinical Training, Medical Research & Simulation, Patient Care & Wellbeing.

### 1.3 What this brief deliberately does not include

- Real clinical data, trial results, or patient testimonials — use clearly marked placeholders.
- Real clinician or patient photos without consent — use placeholder portraits.
- Legal or regulatory text — Section 17 lists what's needed, not the wording. Clinical claims require qualified medical and legal review before publishing.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Brand name:** Tibika (Swahili root *tiba* — treatment/healing)
- **Parent company:** Swizzy Industries Limited
- **Industry:** VR applications in medicine, clinical training, and medical research & experimentation
- **Tagline:** "Practice precision. Protect life."
- **What it does:** Builds VR simulation tools for clinical training (procedures, equipment operation, emergency response), and research/experiment environments for medical researchers who need to model, rehearse, or visualize interventions before real-world application.
- **Three domains:**
  - **Clinical Training:** procedure rehearsal, equipment simulation, emergency-response drills for hospitals and nursing/medical schools
  - **Medical Research & Simulation:** experiment modeling, anatomical visualization, data-driven simulation environments for researchers
  - **Patient Care & Wellbeing:** therapeutic and rehabilitation VR experiences used under clinical supervision

### 2.2 Brand personality

Tibika should feel like the tool a hospital's chief medical officer would approve without hesitation, and a nursing student would trust with their training hours.

- **Clinical and precise:** every claim evidence-based, every visual exact, no exaggeration
- **Calm under pressure:** the aesthetic of an operating theatre, not a hospital drama
- **Rigorously safe:** safety, consent, and compliance are visible values, not footnotes
- **Human:** technology in service of patients and the clinicians who care for them
- **Kenyan and regionally credible:** built for the realities of East African healthcare infrastructure

### 2.3 Brand attributes to avoid

- No graphic medical imagery, no gore, no clinical-horror aesthetic
- No red-heavy "emergency" visual language outside genuine alert states
- No claims of diagnostic or treatment efficacy without cited clinical evidence
- No stock photos of doctors in a white void; show real clinical and training settings

### 2.3.1 The one-sentence brief for any designer

"A calm, clinical, deeply trustworthy medical technology website in teal and navy, precise typography, and zero visual drama, built to make a hospital board approve it on first read."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Hospital administrators & medical directors | Safer training, lower cost of error, compliance | Evidence, safety framing, procurement clarity |
| Medical & nursing school deans | Better-prepared graduates, repeatable practice | Curriculum fit, accreditation alignment, pilot data |
| Clinical researchers | Modeling and visualization tools | Technical rigor, publication support, data integrity |
| Practicing clinicians | Low-friction skills refreshers | Time-efficient modules, CME-style credit potential |
| Ministry of Health & regulators | Public health impact, safety compliance | Evidence base, regulatory alignment, pilot outcomes |
| Investors & development partners | Market, traction, team | Team page, milestones, evidence-backed impact |
| Patients & families (wellbeing line only) | Is this safe and does it help | Plain-language explainers, clinician endorsement |

### 2.5 Tagline usage

- **Primary tagline:** "Practice precision. Protect life."
- Use in the homepage hero, footer, and social bios.
- Shorter alternates: "Rehearse the moment that matters." and "Simulation that saves lives."
- Always sentence case in body copy.

### 2.6 Logo guidance (until a final logo exists)

- Wordmark: "Tibika" in a precise, medium-weight sans, evoking clinical instrumentation rather than warmth.
- A simple geometric mark: an abstract cross or pulse-line integrated into a rounded lens shape.
- Provide light and dark versions plus a single-color version.
- Minimum clear space equals the height of the letter "T" on all sides.
- Always paired with a small "part of Swizzy Industries" lockup in co-branded contexts.

---

## 3. Design System

### 3.1 Design principles

1. **Clinical clarity.** Every page reads like a well-designed instrument panel: nothing ambiguous.
2. **Trust through evidence.** Every claim is sourced or clearly marked as illustrative.
3. **Calm precision over drama.** No urgency-red, no flashing, no gamified scoring language.
4. **Consistent with the Swizzy family.** Shares grid, spacing, and component shapes with the master brand; differs in color and tone.
5. **Consent-visible.** Data handling and consent are shown, not hidden, wherever patient-adjacent content appears.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `tibika-teal` | Clinical Teal | `#0E9F8E` | Primary — buttons, links, active nav (matches Swizzy health pillar) |
| `tibika-teal-hover` | Teal Hover | `#0B7F72` | Hover/pressed state |
| `tibika-teal-tint` | Teal Tint | `#DFF6F2` | Hover fills, selected chips |
| `tibika-navy` | Instrument Navy | `#0A2A44` | High-contrast grounding, headers, footer |
| `domain-clinical` | Clinical Training | `#0E9F8E` | Domain tag |
| `domain-research` | Research & Simulation | `#3A5BD9` | Domain tag |
| `domain-wellbeing` | Patient Care & Wellbeing | `#6C4FD9` | Domain tag |
| `feedback-success` | Success | `#1E9E6A` | Confirmations |
| `feedback-warning` | Warning | `#E0A100` | Non-blocking notices |
| `feedback-error` | Error | `#D64545` | Errors — used sparingly and only for genuine errors, never decoratively |

#### Backgrounds & neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant surface |
| `mist-bg` | `#F4F9F8` | Alternating section fill (teal-tinted mist) |
| `cloud-border` | `#DCEAE7` | 1px structural borders |
| `ink-text` | `#0B1B2B` | Primary text |
| `slate-body` | `#33424A` | Body copy |
| `slate-muted` | `#647178` | Placeholder/secondary text |

WCAG AA compliance required throughout.

### 3.3 Typography

- **Headings:** Plus Jakarta Sans, 600–700 weight.
- **Body & UI:** Inter, 400–500 weight — favor slightly tighter line-height than Swizzy master for an instrument-panel feel in data-dense clinical views.
- **Scale:** Display 56px, H1 44px, H2 32px, H3 24px, body 16px — restrained, denser than Elimika's friendlier scale.
- **Casing:** Sentence case everywhere except the `eyebrow` token.

### 3.4 Layout & spacing

Same 12-column grid, 1200px container, 8pt base grid, 96px desktop section padding as the Swizzy master system. Data-dense pages (simulation specs, research tools) may use a 720px narrow container for long-form technical content, matching Swizzy's narrow-container convention.

---

## 4. Global Components

- **Domain badges:** pill-shaped, domain-colored, used on every simulation/module card (Clinical Training / Research & Simulation / Patient Care & Wellbeing).
- **Evidence chip:** small chip citing a source or marking content as "illustrative, not clinical guidance" — mandatory wherever an outcome claim appears.
- **Simulation preview card:** thumbnail/3D preview, domain badge, specialty tag, duration, "View simulation" CTA.
- **Compliance strip:** small persistent strip (footer-adjacent) noting data-protection and clinical-review status.
- Buttons, inputs, and cards inherit the shared `packages/ui` primitives, recolored via the tokens above.

---

## 5. Site Architecture

Single Next.js app (`apps/tibika_foundation`) sharing `packages/ui`. If Research & Simulation later needs a gated, authenticated researcher portal, split it into its own subdomain the way Swizzy split pillar zones (Section 14).

---

## 6. Full Sitemap

- Home
- Clinical & Research Solutions
  - Clinical Training
  - Medical Research & Simulation
  - Patient Care & Wellbeing
- Simulation & Module Catalog (+ detail template)
- Evidence & Outcomes
- Blog & Publications
- Case Studies (+ detail template)
- Partners & Institutions
- Pricing / Engagement Models
- About Tibika (Mission, Story, Team, Clinical Advisory Board)
- Careers
- Contact / Request a Demo
- Utility: Search, Thank You, Legal, Sitemap, 404/500

---

## 7. Navigation Specification (Mega Menu)

**Five-item mega menu:** Home, Clinical & Research Solutions, Simulation Catalog, Evidence & Outcomes, Careers — plus a plain **Contact** link, a **"Request a Demo"** primary button, and a search icon.

- **Clinical & Research Solutions panel:** three large domain cards (Clinical Training, Medical Research & Simulation, Patient Care & Wellbeing) on the left, a "Clinical Advisory Board" callout on the right.
- **Simulation Catalog panel:** filterable preview teaser (Specialty: Surgery-adjacent, Emergency Response, Anatomy, Rehabilitation) linking to the full catalog.
- Mobile: full-screen accordion menu, same grouping.

---

## 8. Page Specifications: Home

**Purpose:** Convince a hospital board this is clinically credible and a researcher this is scientifically rigorous, within five seconds.

**Sections:**
1. Hero — headline, tagline, dual CTA ("Request a Demo" / "View Simulations"), calm teal-to-navy wash, real clinical/training photography
2. Domain selector — three cards (Clinical Training, Research & Simulation, Patient Care & Wellbeing)
3. Featured simulation carousel — preview cards with domain badges and evidence chips
4. How it works — three-step strip (Select a simulation → Rehearse in VR → Review outcomes)
5. Evidence & outcomes band (navy background, placeholder figures clearly marked, sourced)
6. Clinical Advisory Board strip — credentialed reviewers, builds instant trust
7. Case study spotlight
8. Institutional CTA band — "Bring Tibika to your hospital or school"
9. Blog/Publications teaser
10. Footer

> **Stitch prompt:** "Design the Tibika homepage: calm, clinical medical-technology brand in teal and navy, hero with dual CTA, a three-card domain selector (Clinical Training, Medical Research & Simulation, Patient Care & Wellbeing), a simulation preview carousel with domain-colored badges and evidence chips, an evidence/outcomes band on navy, and a Clinical Advisory Board credibility strip. Same grid, spacing, and card shapes as the Swizzy Industries master design system, but in teal and navy, with zero visual drama."

---

## 9. Page Specifications: Clinical & Research Solutions

Three sub-pages (Clinical Training, Medical Research & Simulation, Patient Care & Wellbeing), each following the same template:

1. Domain hero (domain-colored eyebrow, headline, relevant photography)
2. Problem framing (the real-world risk or cost this domain addresses)
3. How Tibika solves it (feature grid, 4–6 items)
4. Sample simulations/modules for this domain
5. Evidence & safety detail — citations, review process
6. Pricing or engagement model summary
7. CTA band — "Request a demo for your [hospital / research team / clinic]"

> **Stitch prompt:** "Design a Clinical & Research Solutions domain page for [Clinical Training / Medical Research & Simulation / Patient Care & Wellbeing], domain color [insert], with a hero, problem framing, a feature grid, a sample-simulations card grid with domain badges, and an evidence & safety section. Use the same header, footer, and design system as the homepage."

---

## 10. Page Specifications: Blog & Publications

Standard blog listing filtered by domain and specialty, plus a distinct **Publications** content type for peer-reviewed or internally reviewed research outputs — each publication entry links to a source or DOI where available.

---

## 11. Page Specifications: Careers

Mirrors Swizzy's careers structure, with clinical-technology-specific culture content — clinical advisors, medical illustrators, and simulation engineers alongside software engineers.

---

## 12. Page Specification: Contacts

Single page: general inquiry form, "Request a Demo" form (routes by domain), partnership/procurement contact for institutions, and a support contact for existing clinical customers.

---

## 13. Utility & System Pages

Search, Thank You, Privacy Policy, Terms of Use, Accessibility Statement, Sitemap, 404, 500, Cookie banner.

---

## 14. Institution Portals (Subdomains)

Not needed at launch. A gated researcher portal for Medical Research & Simulation is the most likely future candidate for its own subdomain, inheriting this design system.

---

## 15. Content, Voice & Microcopy Guidelines

- Speak to clinicians as peers, to administrators as partners, to patients (wellbeing content) in plain, reassuring language.
- Avoid "revolutionize," "cure," "breakthrough" — prefer concrete, sourced claims ("reduces procedure rehearsal cost by [X], per [source]").
- Every simulation/module description states specialty, clinical level, and duration up front.
- Any outcome or efficacy claim requires a citation or an "illustrative example" disclaimer — no exceptions.

---

## 16. SEO, Performance & Accessibility

Same technical bar as Swizzy master brief. Additionally: any patient-facing (Wellbeing) content must be reviewed for health-literacy-appropriate plain language, and alt text on simulation thumbnails must avoid graphic description.

---

## 17. Legal, Privacy & Data Protection

- **Clinical data:** the public website never collects patient-identifiable data. Any pilot touching health data requires a separate data-processing agreement and clinical-ethics review, referenced but not reproduced on the public site.
- **Regulatory:** content claiming clinical efficacy requires review against Kenya's health-sector regulations and, where applicable, Ministry of Health guidance, before publishing.
- **Consent:** written consent required for any identifiable clinician, patient, or institution shown.
- Standard privacy notice, terms of use, accessibility statement, cookie consent per Swizzy master brief.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt

> You are designing the website for **Tibika**, a Swizzy Industries brand that builds VR simulation tools for Clinical Training, Medical Research & Simulation, and Patient Care & Wellbeing, across Kenya and the region. Tagline: "Practice precision. Protect life."
>
> **Style:** calm, clinical, precise. Light theme only. Zero visual drama — no urgency-red, no gore, no gamified scoring. Same restrained corporate polish as the Swizzy master brand.
>
> **Colors:** Clinical Teal #0E9F8E (primary), Teal Hover #0B7F72, Teal Tint #DFF6F2, Instrument Navy #0A2A44, white #FFFFFF, Mist #F4F9F8, Cloud borders #DCEAE7, Ink #0B1B2B, Slate body #33424A, Slate muted #647178. Domain colors: Clinical Training #0E9F8E, Research & Simulation #3A5BD9, Patient Care & Wellbeing #6C4FD9.
>
> **Typography:** Plus Jakarta Sans for headings (600/700), Inter for body/UI, slightly tighter line-height. Display 56, H1 44, H2 32, H3 24, body 16. Sentence case.
>
> **Layout:** 12-column grid, 1200px container (720px narrow container for technical/long-form content), 8pt spacing base, 96px section padding desktop, alternating white and Mist sections. Cards 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall, 12px radius.
>
> **Imagery:** real clinical training environments, simulation labs, and research settings; calm natural or clinical lighting; no gore, no graphic medical imagery, no white-void stock photos.
>
> **Navigation:** five-item mega menu — Home, Clinical & Research Solutions, Simulation Catalog, Evidence & Outcomes, Careers — plus plain Contact link, "Request a Demo" button, search icon.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive 360–1536px, consistent components across every page.

### 18.2 Component prompts

> **Header and mega menu:** logo left, five nav items centered, search icon and "Request a Demo" button right. Clinical & Research Solutions dropdown shows three domain cards (Clinical Training, Medical Research & Simulation, Patient Care & Wellbeing) with icon, title, one-line description, domain color accent, plus a Clinical Advisory Board callout column.

> **Footer:** navy footer, top CTA band ("Bring Tibika to your institution"), columns for Brand, Solutions, Evidence & Publications, Careers & Contact, newsletter field, bottom bar with "part of Swizzy Industries" lockup, legal links, and a compliance/data-protection note.

### 18.3 Suggested prompt pattern for each page

Same pattern as Swizzy master brief Section 18.3.

### 18.4 Common corrections to have ready

- "Remove any red except genuine error states."
- "Make this read more like a medical instrument panel, less like a marketing page."
- "Add a source citation or illustrative-example disclaimer to this claim."
- "Keep domain colors to badges and accents only — primary buttons stay Clinical Teal."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and tokens
2. Header and mega menu
3. Footer
4. Homepage
5. Clinical & Research Solutions overview + three domain pages
6. Simulation & Module catalog + detail template
7. Evidence & Outcomes
8. Case Studies + detail template
9. Pricing / Engagement Models
10. About, Team, Clinical Advisory Board
11. Blog/Publications listing + article template
12. Careers pages
13. Contact / Request a Demo
14. Utility pages

### 19.2 Per-page quality checklist

Same as Swizzy master brief Section 19.2, plus: every efficacy/outcome claim has a citation or disclaimer.

### 19.3 Launch checklist

Same as Swizzy master brief Section 19.3, plus: clinical-ethics and regulatory review signed off before publishing any Patient Care & Wellbeing content.

---

## 20. Placeholders to Fill In

| Item | Where it is used |
| --- | --- |
| Root domain / subdomain | Everywhere (`{domain}`) |
| Final Tibika logo files | Header, footer, press kit |
| Clinical Advisory Board names, credentials, photos | Homepage, About, nav panel |
| Evidence sources for all outcome claims | Homepage, Solutions pages, Evidence & Outcomes |
| Founding year, HQ, team size | About, Quick facts |
| Pilot hospital/university partners (with approval) | Case studies, homepage |
| Simulation/module catalog content | Simulation Catalog |
| Pricing/engagement model wording per domain | Solutions pages, Pricing |
| Office address, phone, email, demo response-time promise | Contact |
| Open roles and hiring process detail | Careers |
| Regulatory/compliance statements | Legal pages, compliance strip |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
