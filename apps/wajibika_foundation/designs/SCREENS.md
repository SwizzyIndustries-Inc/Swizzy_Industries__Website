# Wajibika: Website Sitemap & Design Brief

> Master reference for generating the Wajibika website UI in Stitch.
> Wajibika is a Swizzy Industries pillar brand. Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

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
9. Page Specifications: Issues & Campaigns
10. Page Specifications: Voices & Stories
11. Page Specifications: Careers
12. Page Specification: Contacts
13. Utility & System Pages
14. Community Moderation & Safety
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
6. Export into `apps/wajibika_foundation`, wired to `packages/ui`.

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain. Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content.
- **Look & feel** notes describe visual intent, not code.
- **CTA** means call to action.
- "Issue area" means one of Wajibika's four focus areas: Economy, Politics & Governance, Social Norms, Community Voice.

### 1.3 What this brief deliberately does not include

- Real campaign content, petitions, or political positions — use clearly marked placeholders.
- Real contributor photos without consent — use placeholder portraits.
- Legal or editorial-policy text — Section 17 lists what's needed, not the wording. All published civic content follows an editorial and moderation policy reviewed by counsel before launch.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Brand name:** Wajibika (Swahili — "to take responsibility / to be accountable")
- **Parent company:** Swizzy Industries Limited
- **Industry:** Civic advocacy and platform technology — a voice-and-visibility platform for issues affecting the public
- **Tagline:** "Your voice, amplified."
- **What it does:** Gives ordinary people, community organizers, and advocacy groups a structured platform to raise, discuss, and track issues in the economy, politics and governance, and social norms — with tools for campaigns, petitions, and accountability tracking. Uses immersive and data-visualization technology to make civic issues tangible, not abstract.
- **Four issue areas:**
  - **Economy:** cost of living, jobs, taxation, informal-sector livelihoods
  - **Politics & Governance:** transparency, representation, public-service delivery
  - **Social Norms:** gender, generational, and community-level issues affecting daily life
  - **Community Voice:** hyperlocal issues — a specific school, road, market, or estate

### 2.2 Brand personality

Wajibika should feel like the platform a first-time civic participant trusts to be heard, and an established advocacy organization trusts to be credible.

- **Bold but fair:** confident in giving people a voice, scrupulously neutral on the platform's own editorial stance
- **Accountable:** shows sourcing, moderation, and follow-through — a claim without a source doesn't stand
- **Dignified:** civic seriousness, not outrage-bait; no rage-farming visual or copy patterns
- **Inclusive:** accessible language, multiple Kenyan languages where feasible, low-bandwidth friendly
- **Safe:** visible, enforced community standards protect contributors from harassment

### 2.3 Brand attributes to avoid

- No inflammatory red-and-black "protest poster" aesthetic used as a default UI language
- No partisan color association (avoid party-linked color combinations)
- No anonymous pile-on visual patterns (upvote-only rage mechanics); every interaction favors substantive contribution
- No stock photos of generic "angry crowd" imagery; show real, dignified community engagement

### 2.3.1 The one-sentence brief for any designer

"A bold, civic-serious platform in deep maroon and warm ochre, dignified rather than inflammatory, built to make a first-time contributor feel safe speaking up and an institution feel it's dealing with a credible platform, not a mob."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Everyday citizens | A place to be heard, visible response | Simple posting flow, visible follow-through on past issues |
| Community organizers & CBOs | Tools to run campaigns, track support | Campaign dashboard, petition tools, export/reporting |
| Advocacy & civil-society organizations | Credible platform to partner with | Editorial standards, moderation transparency, partnership terms |
| Journalists & media | Sourced, verifiable public sentiment data | Data/methodology transparency, press contact |
| Government & public officials | A legitimate channel, not just noise | Structured issue tracking, verified respondent tools |
| Investors & development partners | Civic-tech impact, sustainable model | Team page, milestones, governance safeguards |

### 2.5 Tagline usage

- **Primary tagline:** "Your voice, amplified."
- Use in the homepage hero, footer, and social bios.
- Shorter alternates: "Speak. Be counted. Be heard." and "Accountability starts here."
- Always sentence case in body copy.

### 2.6 Logo guidance (until a final logo exists)

- Wordmark: "Wajibika" in a confident, slightly condensed bold weight.
- A simple geometric mark: an abstract raised hand or megaphone formed from overlapping rounded shapes, echoing the Swizzy lens-symbol language.
- Provide light and dark versions plus a single-color version.
- Minimum clear space equals the height of the letter "W" on all sides.
- Always paired with a small "part of Swizzy Industries" lockup in co-branded contexts.

---

## 3. Design System

### 3.1 Design principles

1. **Dignity over drama.** Every page reads as serious civic infrastructure, not a protest poster.
2. **Sourcing is visible.** Claims, statistics, and campaign progress always show their basis.
3. **One voice at a time.** Layouts favor individual, legible contributions over noisy aggregation.
4. **Consistent with the Swizzy family.** Shares grid, spacing, and component shapes with the master brand; differs in color and tone.
5. **Safety-first interaction design.** Reporting, blocking, and moderation controls are never more than one tap away.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `wajibika-maroon` | Civic Maroon | `#7A2331` | Primary — buttons, links, active nav |
| `wajibika-maroon-hover` | Maroon Hover | `#611B27` | Hover/pressed state |
| `wajibika-maroon-tint` | Maroon Tint | `#F5E6E8` | Hover fills, selected chips |
| `wajibika-ochre` | Ochre Accent | `#D98C3A` | Accent — highlights, active campaign markers |
| `wajibika-ochre-tint` | Ochre Tint | `#FBEEDD` | Soft highlight backgrounds |
| `issue-economy` | Economy | `#1E8F6B` | Issue-area tag |
| `issue-governance` | Politics & Governance | `#3A5BD9` | Issue-area tag |
| `issue-social` | Social Norms | `#E8735A` | Issue-area tag |
| `issue-community` | Community Voice | `#8C5FD9` | Issue-area tag |
| `feedback-success` | Success | `#1E9E6A` | Confirmations |
| `feedback-warning` | Warning | `#E0A100` | Non-blocking notices |
| `feedback-error` | Error | `#D64545` | Errors |

#### Backgrounds & neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant surface |
| `mist-bg` | `#FAF5F4` | Alternating section fill (warm-tinted mist) |
| `cloud-border` | `#EADDDB` | 1px structural borders |
| `ink-text` | `#241417` | Primary text |
| `slate-body` | `#4A3438` | Body copy |
| `slate-muted` | `#7A666A` | Placeholder/secondary text |

WCAG AA compliance required throughout — maroon-on-white and white-on-maroon pairings must be checked carefully at this darker hue.

### 3.3 Typography

- **Headings:** Plus Jakarta Sans, 600–700 weight — set slightly bolder/tighter than Swizzy master for civic gravitas.
- **Body & UI:** Inter, 400–500 weight.
- **Scale:** Display 60px, H1 48px, H2 36px, H3 28px, body 16–18px.
- **Casing:** Sentence case everywhere except the `eyebrow` token (all caps, issue-area color).

### 3.4 Layout & spacing

Same 12-column grid, 1200px container, 8pt base grid, 96px desktop section padding as the Swizzy master system. Long-form campaign and story content uses the 720px narrow container for readability.

---

## 4. Global Components

- **Issue-area badges:** pill-shaped, issue-colored, on every post/campaign/story card (Economy / Politics & Governance / Social Norms / Community Voice).
- **Sourcing chip:** small chip citing a source, or marking content as "community-submitted, unverified" — mandatory distinction between sourced and user-submitted claims.
- **Campaign progress bar:** shows signatures/participants against a stated goal, in ochre.
- **Response-status tag:** "Raised" / "Under review" / "Responded" / "Resolved" — tracks institutional accountability visibly.
- **Report/moderate control:** always present, one tap from any user-generated content.
- Buttons, inputs, and cards inherit the shared `packages/ui` primitives, recolored via the tokens above.

---

## 5. Site Architecture

Single Next.js app (`apps/wajibika_foundation`) sharing `packages/ui`. Authenticated posting/campaign-management flows live within this app; no separate subdomain needed at launch.

---

## 6. Full Sitemap

- Home
- Issues & Campaigns
  - Economy
  - Politics & Governance
  - Social Norms
  - Community Voice
- Campaign detail template / Start a Campaign
- Voices & Stories (+ story detail template)
- Accountability Tracker (public-response status board)
- Partners & Organizations
- About Wajibika (Mission, Story, Team, Editorial & Moderation Standards)
- Careers
- Contact / Report an Issue
- Utility: Search, Thank You, Legal, Community Guidelines, Sitemap, 404/500

---

## 7. Navigation Specification (Mega Menu)

**Five-item mega menu:** Home, Issues & Campaigns, Voices & Stories, Accountability Tracker, Careers — plus a plain **Contact** link, a **"Raise an Issue"** primary button, and a search icon.

- **Issues & Campaigns panel:** four large issue-area cards (Economy, Politics & Governance, Social Norms, Community Voice) on the left, a "Trending Campaigns" list on the right.
- **Voices & Stories panel:** featured contributor stories teaser, filterable by issue area.
- Mobile: full-screen accordion menu, same grouping.

---

## 8. Page Specifications: Home

**Purpose:** Convince a first-time visitor their voice will be taken seriously here, and show that the platform already has credible, structured activity.

**Sections:**
1. Hero — headline, tagline, primary CTA ("Raise an Issue"), secondary CTA ("Explore Campaigns"), maroon-to-ochre horizon wash, real dignified community photography
2. Issue-area selector — four cards (Economy, Politics & Governance, Social Norms, Community Voice)
3. Trending campaigns carousel — progress bars, issue badges
4. How it works — three-step strip (Raise an issue → Gather support → Track the response)
5. Accountability stats band (navy/maroon background, placeholder numbers clearly marked)
6. Featured Voices & Stories spotlight
7. Partner organizations strip
8. Community CTA band — "Start a campaign in your area"
9. Editorial & moderation standards teaser link
10. Footer

> **Stitch prompt:** "Design the Wajibika homepage: bold, dignified civic-advocacy brand in maroon and ochre, hero with dual CTA, a four-card issue-area selector (Economy, Politics & Governance, Social Norms, Community Voice), a trending-campaigns carousel with progress bars and issue-colored badges, an accountability stats band, and a featured-stories spotlight. Same grid, spacing, and card shapes as the Swizzy Industries master design system, but in maroon and ochre, dignified rather than inflammatory."

---

## 9. Page Specifications: Issues & Campaigns

Four sub-pages (Economy, Politics & Governance, Social Norms, Community Voice), each following the same template:

1. Issue-area hero (issue-colored eyebrow, headline, relevant photography)
2. Why this matters (framing, sourced context)
3. Active campaigns in this area (card grid with progress bars)
4. Recent Voices & Stories in this area
5. Accountability tracker excerpt for this area
6. CTA band — "Raise an issue in [Economy / Politics & Governance / Social Norms / Community Voice]"

> **Stitch prompt:** "Design an Issues & Campaigns area page for [Economy / Politics & Governance / Social Norms / Community Voice], issue color [insert], with a hero, context/framing section, an active-campaigns card grid with progress bars, a Voices & Stories teaser, and an accountability-tracker excerpt. Use the same header, footer, and design system as the homepage."

---

## 10. Page Specifications: Voices & Stories

Editorial-style listing of first-person or reported stories, filterable by issue area, with a distinct **verified / community-submitted** distinction on every entry. Story template includes a "What happened next" accountability follow-up block where applicable.

---

## 11. Page Specifications: Careers

Mirrors Swizzy's careers structure, with civic-technology-specific culture content — community moderators, editorial staff, and policy researchers alongside engineers.

---

## 12. Page Specification: Contacts

Single page: general inquiry form, "Report an Issue" form (routes by issue area), partnership contact for organizations, press contact, and a safety/moderation escalation contact.

---

## 13. Utility & System Pages

Search, Thank You, Privacy Policy, Terms of Use, Community Guidelines (a first-class page, not buried in legal), Accessibility Statement, Sitemap, 404, 500, Cookie banner.

---

## 14. Community Moderation & Safety

- Every user-generated post passes through a stated moderation policy before wide visibility; policy is published, not just enforced silently.
- Reporting and blocking controls are visible on every piece of user content, not nested in menus.
- Contributor identity protection: pseudonymous posting supported by default for sensitive issue areas (Politics & Governance, Social Norms), with verified/organizational posting available as an opt-in tier.
- A visible escalation path exists for harassment or safety concerns, separate from general contact.

---

## 15. Content, Voice & Microcopy Guidelines

- Speak to contributors as capable civic actors, not victims or activists-by-default.
- The platform itself takes no editorial position on issues; language stays neutral in system copy ("An issue was raised" not "A scandal was exposed").
- Every statistic or claim in platform-authored content (not user posts) carries a source.
- Avoid "outrage," "expose," "scandal" in system/marketing copy — prefer "raised," "reported," "tracked."

---

## 16. SEO, Performance & Accessibility

Same technical bar as Swizzy master brief: WCAG AA, 44px touch targets, responsive 360–1536px, privacy-respecting analytics. Additionally: low-bandwidth performance is a first-class requirement given the platform's reach into areas with limited connectivity.

---

## 17. Legal, Privacy & Data Protection

- **Contributor safety:** pseudonymous-by-default posting for sensitive issue areas; real-name/verified data handled per Kenya Data Protection Act, 2019.
- **Editorial & moderation policy:** published policy reviewed by legal counsel before launch, covering takedown, appeal, and escalation processes.
- **Defamation and misinformation safeguards:** clear distinction in UI between sourced claims and unverified user submissions (Section 4 sourcing chip) is a legal safeguard, not just a design choice.
- Standard privacy notice, terms of use, accessibility statement, cookie consent per Swizzy master brief.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt

> You are designing the website for **Wajibika**, a Swizzy Industries brand that gives people a structured platform to raise and track civic issues across Economy, Politics & Governance, Social Norms, and Community Voice, in Kenya. Tagline: "Your voice, amplified."
>
> **Style:** bold but dignified, civic-serious. Light theme only. No inflammatory protest-poster aesthetic, no partisan color signaling, no rage-farming visual patterns.
>
> **Colors:** Civic Maroon #7A2331 (primary), Maroon Hover #611B27, Maroon Tint #F5E6E8, Ochre Accent #D98C3A, Ochre Tint #FBEEDD, white #FFFFFF, Mist #FAF5F4, Cloud borders #EADDDB, Ink #241417, Slate body #4A3438, Slate muted #7A666A. Issue colors: Economy #1E8F6B, Politics & Governance #3A5BD9, Social Norms #E8735A, Community Voice #8C5FD9.
>
> **Typography:** Plus Jakarta Sans for headings (600/700, slightly tighter for gravitas), Inter for body/UI. Display 60, H1 48, H2 36, H3 28, body 16–18. Sentence case.
>
> **Layout:** 12-column grid, 1200px container (720px narrow container for stories/campaigns), 8pt spacing base, 96px section padding desktop, alternating white and Mist sections. Cards 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall, 12px radius.
>
> **Imagery:** real, dignified Kenyan community settings — markets, meetings, neighborhoods; no "angry crowd" stock imagery, no white-void protest clichés.
>
> **Navigation:** five-item mega menu — Home, Issues & Campaigns, Voices & Stories, Accountability Tracker, Careers — plus plain Contact link, "Raise an Issue" button, search icon.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive 360–1536px, visible report/moderate controls on all user content, consistent components across every page.

### 18.2 Component prompts

> **Header and mega menu:** logo left, five nav items centered, search icon and "Raise an Issue" button right. Issues & Campaigns dropdown shows four issue-area cards (Economy, Politics & Governance, Social Norms, Community Voice) with icon, title, one-line description, issue color accent, plus a "Trending Campaigns" list column.

> **Footer:** maroon footer, top CTA band ("Start a campaign in your area"), columns for Brand, Issues & Campaigns, Voices & Stories, Careers & Contact, newsletter field, bottom bar with "part of Swizzy Industries" lockup, legal links, and a link to Community Guidelines.

### 18.3 Suggested prompt pattern for each page

Same pattern as Swizzy master brief Section 18.3.

### 18.4 Common corrections to have ready

- "Tone this down — dignified, not inflammatory."
- "Make the sourcing/verification distinction more visible on this card."
- "Report/moderate control needs to be one tap, not buried."
- "Keep issue colors to badges and accents only — primary buttons stay Civic Maroon."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and tokens
2. Header and mega menu
3. Footer
4. Homepage
5. Issues & Campaigns overview + four issue-area pages
6. Campaign detail template + Start a Campaign flow
7. Accountability Tracker
8. Voices & Stories listing + story template
9. Partners & Organizations
10. About, Team, Editorial & Moderation Standards
11. Careers pages
12. Contact / Report an Issue
13. Utility pages, Community Guidelines

### 19.2 Per-page quality checklist

Same as Swizzy master brief Section 19.2, plus: report/moderate control present on all user-generated content shown.

### 19.3 Launch checklist

Same as Swizzy master brief Section 19.3, plus: editorial & moderation policy published and legally reviewed; escalation path tested end to end.

---

## 20. Placeholders to Fill In

| Item | Where it is used |
| --- | --- |
| Root domain / subdomain | Everywhere (`{domain}`) |
| Final Wajibika logo files | Header, footer, press kit |
| Editorial & moderation policy (final wording) | Community Guidelines, footer link |
| Founding year, HQ, team size | About, Quick facts |
| Partner/CBO names and logos (with approval) | Partners page, homepage |
| Accountability tracker data and methodology | Accountability Tracker page |
| Sample campaigns and stories content | Issues & Campaigns, Voices & Stories |
| Office address, phone, email, escalation contact | Contact |
| Open roles and hiring process detail | Careers |
| Legal texts (privacy, terms, community guidelines) | Legal pages |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
