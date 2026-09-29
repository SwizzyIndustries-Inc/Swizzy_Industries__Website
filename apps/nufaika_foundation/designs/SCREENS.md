# Nufaika: Website Sitemap & Design Brief

> Master reference for generating the Nufaika website UI in Stitch.
> Nufaika is a Swizzy Industries pillar brand. Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

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
9. Page Specifications: Categories & Services
10. Page Specifications: For Providers
11. Page Specifications: Careers
12. Page Specification: Contacts
13. Utility & System Pages
14. Marketplace Trust & Safety
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
6. Export into `apps/nufaika_foundation`, wired to `packages/ui`.

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain. Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content.
- **Look & feel** notes describe visual intent, not code.
- **CTA** means call to action.
- "Category" means one of Nufaika's service groupings (see Section 6).

### 1.3 What this brief deliberately does not include

- Real provider listings, prices, or reviews — use clearly marked placeholders.
- Real provider photos without consent — use placeholder portraits.
- Legal or fee-structure text — Section 17 lists what's needed, not the wording.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Brand name:** Nufaika (Swahili root *nufaika* — to benefit/prosper)
- **Parent company:** Swizzy Industries Limited
- **Industry:** Services marketplace and economic-empowerment platform
- **Tagline:** "Skills meet opportunity."
- **What it does:** Connects people who have skills or services to offer — artisans, tutors, technicians, freelancers, small businesses — with people and organizations who need them. Positioned as "Jumia, but for services and skills," with tools for listing, booking, secure payment, and reputation-building.
- **Category groups:**
  - **Home & Trade Services:** plumbing, electrical, construction, cleaning, repair
  - **Skills & Tutoring:** academic tutoring, vocational skills, digital skills, language coaching
  - **Professional & Business Services:** accounting, design, legal-adjacent, marketing, admin support
  - **Creative & Events:** photography, catering, décor, entertainment
  - **Care & Wellness:** childcare, eldercare, fitness, personal care

### 2.2 Brand personality

Nufaika should feel like the platform a skilled but underemployed young person trusts to find real work, and a busy household or business trusts to find a reliable provider.

- **Energetic and enabling:** the feeling of opportunity opening up, not a sterile listings site
- **Trustworthy transactions:** verified providers, visible ratings, secure payment — trust is the product
- **Straightforward:** find, book, pay, review — no confusing flows
- **Inclusive of the informal sector:** dignifies skilled trades and informal work as much as white-collar services
- **Kenyan hustle, done right:** the energy of the jua kali and gig economy, with professional-grade reliability

### 2.3 Brand attributes to avoid

- No generic "big-box e-commerce" sterility — this is about people and skills, not just SKUs
- No exploitative gig-economy visual cues (no race-to-the-bottom pricing emphasis)
- No stock photos of generic handshakes in suits; show real trades, real work being done
- No overpromising ("get rich," "guaranteed income") in marketing language

### 2.3.1 The one-sentence brief for any designer

"An energetic, trustworthy services marketplace in growth green and amber, built to make a skilled provider feel like this is where their next client comes from, and a customer feel safe booking someone they've never met."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Service providers (individuals) | Steady clients, fair pay, visible reputation | Simple listing flow, transparent fees, real success stories |
| Small businesses offering services | New customer channel, scheduling tools | Business profile tools, booking management, analytics |
| Customers seeking services | Reliable, vetted help, fair pricing | Verified badges, reviews, transparent pricing, secure payment |
| Organizations/NGOs sourcing bulk services | Vetted providers at scale | Procurement-friendly tools, invoicing, bulk booking |
| Investors & development partners | Economic-impact story, unit economics | Team page, milestones, provider-earnings impact data |

### 2.5 Tagline usage

- **Primary tagline:** "Skills meet opportunity."
- Use in the homepage hero, footer, and social bios.
- Shorter alternates: "Find it. Book it. Get it done." and "Your skill is your business."
- Always sentence case in body copy.

### 2.6 Logo guidance (until a final logo exists)

- Wordmark: "Nufaika" in a bold, energetic sans, slightly rounded terminals.
- A simple geometric mark: an abstract upward arrow or handshake formed from overlapping rounded shapes.
- Provide light and dark versions plus a single-color version.
- Minimum clear space equals the height of the letter "N" on all sides.
- Always paired with a small "part of Swizzy Industries" lockup in co-branded contexts.

---

## 3. Design System

### 3.1 Design principles

1. **Find, book, done.** Every core flow (search → provider → book → pay) stays under a few taps.
2. **Trust signals everywhere.** Verification, ratings, and pricing are visible before commitment, never hidden.
3. **Energy through color, order through layout.** Bright accents are allowed; the underlying grid stays disciplined.
4. **Consistent with the Swizzy family.** Shares grid, spacing, and component shapes with the master brand; differs in color and tone.
5. **Dignifies every category.** A plumber's profile gets the same visual respect as a graphic designer's.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `nufaika-green` | Growth Green | `#1E8F5C` | Primary — buttons, links, active nav |
| `nufaika-green-hover` | Green Hover | `#166E47` | Hover/pressed state |
| `nufaika-green-tint` | Green Tint | `#E4F5EC` | Hover fills, selected chips |
| `nufaika-amber` | Opportunity Amber | `#F2A63B` | Accent — highlights, featured listings, ratings stars |
| `nufaika-amber-tint` | Amber Tint | `#FCF1DC` | Soft highlight backgrounds |
| `cat-home` | Home & Trade | `#3A5BD9` | Category tag |
| `cat-skills` | Skills & Tutoring | `#6C4FD9` | Category tag |
| `cat-business` | Professional & Business | `#0E9F8E` | Category tag |
| `cat-creative` | Creative & Events | `#E8735A` | Category tag |
| `cat-care` | Care & Wellness | `#D9527A` | Category tag |
| `feedback-success` | Success | `#1E9E6A` | Confirmations, completed bookings |
| `feedback-warning` | Warning | `#E0A100` | Non-blocking notices |
| `feedback-error` | Error | `#D64545` | Errors, payment failures |

#### Backgrounds & neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant surface |
| `mist-bg` | `#F5FAF6` | Alternating section fill (green-tinted mist) |
| `cloud-border` | `#DFEFE3` | 1px structural borders |
| `ink-text` | `#0F1F17` | Primary text |
| `slate-body` | `#33463B` | Body copy |
| `slate-muted` | `#647568` | Placeholder/secondary text |

WCAG AA compliance required throughout.

### 3.3 Typography

- **Headings:** Plus Jakarta Sans, 600–700 weight.
- **Body & UI:** Inter, 400–500 weight.
- **Scale:** Display 58px, H1 46px, H2 34px, H3 26px, body 16–18px — dense enough for listing-heavy pages, friendly enough for a marketplace.
- **Casing:** Sentence case everywhere except the `eyebrow` token.

### 3.4 Layout & spacing

Same 12-column grid, 1200px container, 8pt base grid, 96px desktop section padding as the Swizzy master system. Listing/search-result pages may use a wider 1320px container to accommodate provider-card grids.

---

## 4. Global Components

- **Category badges:** pill-shaped, category-colored, on every listing/provider card.
- **Verified-provider badge:** distinct checkmark badge, always in `nufaika-green`, separate from category color — trust signal must never be confused with categorization.
- **Rating stars:** amber, with review count, on every provider card and profile.
- **Price display:** transparent, upfront — "From KES [X]" or "KES [X]/hr" pattern, never hidden behind a contact-to-reveal wall for browsing.
- **Provider card:** photo, name, category badge, verified badge, rating, starting price, "View profile" / "Book now" CTA.
- **Booking status tag:** "Requested" / "Confirmed" / "In progress" / "Completed" — visible accountability for both sides.
- Buttons, inputs, and cards inherit the shared `packages/ui` primitives, recolored via the tokens above.

---

## 5. Site Architecture

Single Next.js app (`apps/nufaika_foundation`) sharing `packages/ui`. Authenticated provider dashboards and customer booking flows live within this app; no separate subdomain needed at launch.

---

## 6. Full Sitemap

- Home
- Categories & Services
  - Home & Trade Services
  - Skills & Tutoring
  - Professional & Business Services
  - Creative & Events
  - Care & Wellness
- Search Results / Provider Listing
- Provider Profile template
- How It Works (customers) / How It Works (providers)
- For Providers (become a provider, pricing/fees, success stories)
- Trust & Safety
- Blog & Guides
- About Nufaika (Mission, Story, Team)
- Careers
- Contact / Support
- Utility: Search, Thank You, Legal, Sitemap, 404/500

---

## 7. Navigation Specification (Mega Menu)

**Five-item mega menu:** Home, Categories & Services, For Providers, Trust & Safety, Careers — plus a plain **Contact** link, a **"Find a Service"** primary button (or "Become a Provider" as secondary), and a search icon prominent in the header (marketplace search is primary, not incidental).

- **Categories & Services panel:** five category cards (Home & Trade, Skills & Tutoring, Professional & Business, Creative & Events, Care & Wellness) with icon, one-line description, category color; a "Popular Services" list alongside.
- **For Providers panel:** "Become a Provider" steps teaser, fee transparency link, success-story teaser.
- Mobile: full-screen accordion menu, same grouping, search bar pinned at top.

---

## 8. Page Specifications: Home

**Purpose:** Get a customer searching within seconds, and convince a potential provider this is a credible place to list their skills.

**Sections:**
1. Hero — prominent search bar ("What service do you need?"), tagline, green-to-amber horizon wash, real Kenyan tradespeople/professionals at work
2. Category grid — five cards (Home & Trade, Skills & Tutoring, Professional & Business, Creative & Events, Care & Wellness)
3. Featured/verified providers carousel — rating, price, verified badge
4. How it works — two parallel three-step strips (customer flow and provider flow)
5. Trust & safety band — verification process, secure payment, dispute resolution, briefly explained
6. Success story spotlight (provider earnings/growth story)
7. "Become a Provider" CTA band
8. Blog/Guides teaser
9. Footer

> **Stitch prompt:** "Design the Nufaika homepage: energetic, trustworthy services-marketplace brand in growth green and amber, hero with a prominent search bar, a five-card category grid (Home & Trade, Skills & Tutoring, Professional & Business, Creative & Events, Care & Wellness), a featured-providers carousel with verified badges and amber rating stars, a trust & safety band, and a provider success-story spotlight. Same grid, spacing, and card shapes as the Swizzy Industries master design system, but in green and amber."

---

## 9. Page Specifications: Categories & Services

Five sub-pages (one per category), each following the same template:

1. Category hero (category-colored eyebrow, headline, relevant photography)
2. Sub-category quick links (e.g. under Home & Trade: Plumbing, Electrical, Cleaning, Construction)
3. Featured/top-rated providers in this category (card grid)
4. How pricing typically works in this category (transparent guidance, not fixed prices)
5. Trust & verification note specific to this category (e.g. license checks for trades)
6. CTA band — "Post a job in [category]" / "List your [category] service"

> **Stitch prompt:** "Design a Categories & Services page for [category name], category color [insert], with a hero, sub-category quick links, a top-rated-providers card grid with verified badges and ratings, and a pricing-guidance section. Use the same header, footer, and design system as the homepage."

---

## 10. Page Specifications: For Providers

- Become a Provider (step-by-step onboarding explainer)
- Pricing & Fees (transparent fee structure, no hidden costs)
- Success Stories (provider case studies, earnings growth — with consent)
- Provider Dashboard preview (screenshots of booking/earnings management tools)

---

## 11. Page Specifications: Careers

Mirrors Swizzy's careers structure, with marketplace-specific culture content — trust & safety specialists, category managers, and community/provider-success staff alongside engineers.

---

## 12. Page Specification: Contacts

Single page: general inquiry form, customer support contact, provider support contact, dispute/trust-and-safety escalation contact, and a partnership contact for organizations sourcing bulk services.

---

## 13. Utility & System Pages

Search, Thank You, Privacy Policy, Terms of Use, Provider Agreement, Accessibility Statement, Sitemap, 404, 500, Cookie banner.

---

## 14. Marketplace Trust & Safety

- Provider verification process explained plainly (ID checks, skills/credential checks where applicable).
- Secure, escrow-style payment flow explained (funds held until service confirmed complete).
- Rating and review system explained (both parties rate; reviews cannot be edited by the rated party).
- Dispute resolution path clearly signposted from both provider and customer dashboards.
- Reporting control present on every provider profile and booking.

---

## 15. Content, Voice & Microcopy Guidelines

- Speak to providers as business owners, not gig workers to be managed.
- Speak to customers with plain, confidence-building language around safety and pricing.
- Every price shown is a real starting price or clearly marked as an estimate — never a bait figure.
- Avoid "cheap," "cheapest" as primary positioning — prefer "fair," "transparent," "verified."

---

## 16. SEO, Performance & Accessibility

Same technical bar as Swizzy master brief: WCAG AA, 44px touch targets, responsive 360–1536px, privacy-respecting analytics. Additionally: category and location-based landing pages (e.g. "plumbers in Nairobi") are a core SEO surface and must follow the same design system as primary pages, not a stripped-down template.

---

## 17. Legal, Privacy & Data Protection

- **Payment data:** handled through a licensed payment processor; the platform itself does not store raw payment-card data.
- **Provider verification data:** ID and credential data handled per Kenya Data Protection Act, 2019, with a clear retention and access policy.
- **Provider Agreement and fee structure:** published, versioned, and linked from every provider-facing page.
- Standard privacy notice, terms of use, accessibility statement, cookie consent per Swizzy master brief.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt

> You are designing the website for **Nufaika**, a Swizzy Industries brand that connects skilled providers with customers across Home & Trade, Skills & Tutoring, Professional & Business, Creative & Events, and Care & Wellness services, in Kenya. Tagline: "Skills meet opportunity."
>
> **Style:** energetic, trustworthy, straightforward marketplace. Light theme only. No sterile big-box e-commerce feel, no exploitative gig-economy visual cues.
>
> **Colors:** Growth Green #1E8F5C (primary), Green Hover #166E47, Green Tint #E4F5EC, Opportunity Amber #F2A63B (accent, ratings), Amber Tint #FCF1DC, white #FFFFFF, Mist #F5FAF6, Cloud borders #DFEFE3, Ink #0F1F17, Slate body #33463B, Slate muted #647568. Category colors: Home & Trade #3A5BD9, Skills & Tutoring #6C4FD9, Professional & Business #0E9F8E, Creative & Events #E8735A, Care & Wellness #D9527A.
>
> **Typography:** Plus Jakarta Sans for headings (600/700), Inter for body/UI. Display 58, H1 46, H2 34, H3 26, body 16–18. Sentence case.
>
> **Layout:** 12-column grid, 1200px container (1320px wide container for listing/search pages), 8pt spacing base, 96px section padding desktop, alternating white and Mist sections. Cards 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall, 12px radius.
>
> **Imagery:** real Kenyan tradespeople, tutors, and professionals actively working; warm natural light; no generic suited-handshake stock photos.
>
> **Navigation:** five-item mega menu — Home, Categories & Services, For Providers, Trust & Safety, Careers — plus plain Contact link, prominent search bar, "Find a Service" / "Become a Provider" buttons.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive 360–1536px, verified badges and transparent pricing visible on every provider card, consistent components across every page.

### 18.2 Component prompts

> **Header and mega menu:** logo left, prominent search bar center, five nav items and "Find a Service" / "Become a Provider" buttons right. Categories & Services dropdown shows five category cards with icon, title, one-line description, category color accent, plus a "Popular Services" list column.

> **Footer:** green footer, top CTA band ("Ready to grow your business? Become a provider"), columns for Brand, Categories, For Providers, Careers & Contact, newsletter field, bottom bar with "part of Swizzy Industries" lockup and legal links including Provider Agreement.

### 18.3 Suggested prompt pattern for each page

Same pattern as Swizzy master brief Section 18.3.

### 18.4 Common corrections to have ready

- "Make pricing more upfront and visible, not hidden behind contact."
- "Verified badge needs to stand apart visually from the category badge."
- "Reduce visual clutter on the listing grid — increase card spacing."
- "Keep category colors to badges and accents only — primary buttons stay Growth Green."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and tokens
2. Header and mega menu (with search)
3. Footer
4. Homepage
5. Categories & Services overview + five category pages
6. Search Results / Provider Listing
7. Provider Profile template
8. How It Works (both flows)
9. For Providers (onboarding, pricing, success stories)
10. Trust & Safety
11. About, Team
12. Blog & Guides listing + article template
13. Careers pages
14. Contact / Support
15. Utility pages

### 19.2 Per-page quality checklist

Same as Swizzy master brief Section 19.2, plus: pricing and verification status visible without a click on every provider card.

### 19.3 Launch checklist

Same as Swizzy master brief Section 19.3, plus: payment processor integration tested end to end (booking, hold, release, refund/dispute).

---

## 20. Placeholders to Fill In

| Item | Where it is used |
| --- | --- |
| Root domain / subdomain | Everywhere (`{domain}`) |
| Final Nufaika logo files | Header, footer, press kit |
| Fee structure (final wording and figures) | Provider Agreement, For Providers > Pricing |
| Founding year, HQ, team size | About, Quick facts |
| Provider success stories (with consent) | Homepage, For Providers |
| Category taxonomy and sub-category lists | Categories & Services |
| Sample provider listings and pricing ranges | Search Results, Provider Profile |
| Payment processor and verification vendor details | Trust & Safety, Legal |
| Office address, phone, email, support hours | Contact |
| Open roles and hiring process detail | Careers |
| Legal texts (privacy, terms, Provider Agreement) | Legal pages |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
