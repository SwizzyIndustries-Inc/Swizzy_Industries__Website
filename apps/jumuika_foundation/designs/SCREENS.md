# Jumuika: Website Sitemap & Design Brief

> Master reference for generating the Jumuika website UI in Stitch.
> Jumuika is a Swizzy Industries pillar brand. Everything a designer (or an AI design tool) needs is in this file: brand, design system, navigation, every page, its purpose, its sections, and how it should look and feel.

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
9. Page Specifications: Spaces & Communities
10. Page Specifications: Events
11. Page Specifications: Careers
12. Page Specification: Contacts
13. Utility & System Pages
14. Community Safety & Moderation
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
6. Export into `apps/jumuika_foundation`, wired to `packages/ui`.

### 1.2 Conventions used in this document

- `{domain}` is a placeholder for the real root domain. Replace it everywhere.
- Text in `[square brackets]` is a placeholder for real content.
- **Look & feel** notes describe visual intent, not code.
- **CTA** means call to action.
- "Space" means a themed VR social environment (see Section 6).

### 1.3 What this brief deliberately does not include

- Real user-generated content, avatars, or community screenshots — use clearly marked placeholders.
- Real user photos without consent — use placeholder portraits.
- Legal or community-standards text — Section 17 lists what's needed, not the wording.

---

## 2. Brand Foundation

### 2.1 Company snapshot

- **Brand name:** Jumuika (Swahili root *jumuiya* — community/togetherness)
- **Parent company:** Swizzy Industries Limited
- **Industry:** VR social platform — bringing people together across distance in shared digital spaces
- **Tagline:** "Distance is just a detail."
- **What it does:** A social platform built on VR that lets people who are physically apart — family abroad, friends across counties, diaspora communities, interest groups — gather in shared, persistent digital spaces. Positioned as "social media with a new outlook": presence and shared activity instead of scrolling.
- **Space types:**
  - **Family & Friends:** private rooms for staying close with people you already know
  - **Diaspora & Heritage:** cultural spaces connecting Kenyans abroad with home
  - **Interest Communities:** hobby, fandom, and topic-based public spaces
  - **Events & Gatherings:** ticketed or open live events (concerts, talks, watch parties) in VR

### 2.2 Spaces personality

Jumuika should feel like the platform a homesick relative abroad opens to feel close to family, and a young Kenyan opens to feel like they're somewhere, not just scrolling.

- **Warm and alive:** presence over performance — being together beats posting for an audience
- **Playful but never chaotic:** joyful energy, clean execution, never overwhelming
- **Genuinely social:** built around shared activity (games, watch parties, conversation) not passive feeds
- **Kenyan-forward, globally open:** rooted in local culture and language, welcoming to diaspora and international friends
- **Safe to show up as yourself:** identity and safety controls are visible and easy to use

### 2.3 Brand attributes to avoid

- No addictive infinite-scroll visual language, no engagement-bait notification design
- No generic "metaverse avatar" cyberpunk aesthetic
- No stock photos of a lone person in a headset; show groups, warmth, real gathering energy
- No implying this replaces real-world relationships — always "closer to," never "instead of"

### 2.3.1 The one-sentence brief for any designer

"A warm, playful, genuinely social VR platform in coral and violet, built to make someone feel the pull of being with people, not the pull of a feed."

### 2.4 Audiences

| Audience | What they want | What convinces them |
| --- | --- | --- |
| Diaspora Kenyans | Feel close to family and culture from abroad | Cultural spaces, family-room demos, low-latency claims |
| Families & close friend groups | Easy, private way to gather regularly | Simple private-room setup, no-headset-required option |
| Interest communities & creators | A place to build and host a community | Community/space-creation tools, event hosting |
| Event organizers | A venue for live gatherings without geography | Ticketing, capacity, production-quality examples |
| Investors & development partners | Social-platform traction, retention story | Team page, milestones, engagement metrics |
| Parents (safety-conscious) | Is this safe for my teen/family | Safety controls, moderation policy, age-appropriate spaces |

### 2.5 Tagline usage

- **Primary tagline:** "Distance is just a detail."
- Use in the homepage hero, footer, and social bios.
- Shorter alternates: "Show up together." and "Together, wherever you are."
- Always sentence case in body copy.

### 2.6 Logo guidance (until a final logo exists)

- Wordmark: "Jumuika" in a warm, rounded-terminal bold weight.
- A simple geometric mark: two or three overlapping rounded shapes suggesting people gathered in a circle, echoing the Swizzy lens-symbol language.
- Provide light and dark versions plus a single-color version.
- Minimum clear space equals the height of the letter "J" on all sides.
- Always paired with a small "part of Swizzy Industries" lockup in co-branded contexts.

### 2.6.1 Note on theme

Jumuika is the one Swizzy brand where a **dark, ambient theme is core to the product experience** (the in-VR / in-app social spaces), even though the **marketing website stays in the light theme** described below, for consistency with the rest of the Swizzy family and for institutional/press credibility. Any in-product dark UI is out of scope for this website brief.

---

## 3. Design System

### 3.1 Design principles

1. **Warmth first.** Every page should feel like an invitation, not a product pitch.
2. **Presence over performance.** Imagery and copy emphasize shared activity, not solo content consumption.
3. **Playful within structure.** Bright, warm accents are welcome; the grid stays as disciplined as the rest of the Swizzy family.
4. **Consistent with the Swizzy family.** Shares grid, spacing, and component shapes with the master brand; differs in color and tone.
5. **Safety visible, never hidden.** Privacy and moderation controls are shown as a feature, not a fine-print afterthought.

### 3.2 Color palette

#### Core brand colors

| Token | Name | Hex | Use |
| --- | --- | --- | --- |
| `jumuika-coral` | Gathering Coral | `#E8735A` | Primary — buttons, links, active nav (matches Swizzy socialization pillar) |
| `jumuika-coral-hover` | Coral Hover | `#CF5C44` | Hover/pressed state |
| `jumuika-coral-tint` | Coral Tint | `#FBEAE6` | Hover fills, selected chips |
| `jumuika-violet` | Presence Violet | `#7A5FD9` | Accent — live indicators, featured spaces |
| `jumuika-violet-tint` | Violet Tint | `#EFEBFB` | Soft highlight backgrounds |
| `space-family` | Family & Friends | `#3A5BD9` | Space-type tag |
| `space-diaspora` | Diaspora & Heritage | `#F2A63B` | Space-type tag |
| `space-interest` | Interest Communities | `#0E9F8E` | Space-type tag |
| `space-events` | Events & Gatherings | `#D9527A` | Space-type tag |
| `feedback-success` | Success | `#1E9E6A` | Confirmations |
| `feedback-warning` | Warning | `#E0A100` | Non-blocking notices |
| `feedback-error` | Error | `#D64545` | Errors |
| `live-indicator` | Live Now | `#7A5FD9` | Live/active-space pulse indicator |

#### Backgrounds & neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `white` | `#FFFFFF` | Dominant surface |
| `mist-bg` | `#FBF6F5` | Alternating section fill (warm-tinted mist) |
| `cloud-border` | `#F1E2DE` | 1px structural borders |
| `ink-text` | `#241819` | Primary text |
| `slate-body` | `#4A3936` | Body copy |
| `slate-muted` | `#7A6864` | Placeholder/secondary text |

WCAG AA compliance required throughout.

### 3.3 Typography

- **Headings:** Plus Jakarta Sans, 600–700 weight, occasionally set at a friendlier, rounder tracking for hero moments.
- **Body & UI:** Inter, 400–500 weight.
- **Scale:** Display 62px, H1 48px, H2 36px, H3 28px, body 16–18px.
- **Casing:** Sentence case everywhere except the `eyebrow` token.

### 3.4 Layout & spacing

Same 12-column grid, 1200px container, 8pt base grid, 96px desktop section padding as the Swizzy master system. Space/gallery-heavy pages may use a wider 1320px container to give VR-space preview imagery room to breathe.

---

## 4. Global Components

- **Space-type badges:** pill-shaped, space-colored, on every space/event card (Family & Friends / Diaspora & Heritage / Interest Communities / Events & Gatherings).
- **Live indicator:** small pulsing violet dot + "Live now" label on cards for currently-active spaces/events.
- **Presence count:** small icon + number showing how many people are currently in a space — the core social-proof element for this brand.
- **Space preview card:** thumbnail/3D preview, space-type badge, presence count, live indicator (if applicable), "Join" CTA.
- **Privacy toggle indicator:** clear "Private" / "Public" tag on every space card — safety-relevant and always visible.
- Buttons, inputs, and cards inherit the shared `packages/ui` primitives, recolored via the tokens above.

---

## 5. Site Architecture

Single Next.js app (`apps/jumuika_foundation`) sharing `packages/ui`, serving as the marketing/onboarding site. The actual VR social experience is a separate client application (native/VR runtime), out of scope for this web design brief beyond linking to download/launch it.

---

## 6. Full Sitemap

- Home
- Spaces & Communities
  - Family & Friends
  - Diaspora & Heritage
  - Interest Communities
  - Events & Gatherings
- Space detail / preview template
- Events calendar (+ event detail template)
- Download / Get Started
- Safety & Privacy
- Blog & Stories
- About Jumuika (Mission, Story, Team)
- Careers
- Contact / Support
- Utility: Search, Thank You, Legal, Sitemap, 404/500

---

## 7. Navigation Specification (Mega Menu)

**Five-item mega menu:** Home, Spaces & Communities, Events, Safety & Privacy, Careers — plus a plain **Contact** link, a **"Get Started"** primary button, and a search icon.

- **Spaces & Communities panel:** four large space-type cards (Family & Friends, Diaspora & Heritage, Interest Communities, Events & Gatherings) on the left, a "Live Now" list with presence counts on the right.
- **Events panel:** upcoming-events calendar teaser, filterable by space type.
- Mobile: full-screen accordion menu, same grouping.

---

## 8. Page Specifications: Home

**Purpose:** Make someone feel the pull of gathering with people who matter to them, within five seconds, then route them to download/get started.

**Sections:**
1. Hero — headline, tagline, primary CTA ("Get Started"), secondary CTA ("Explore Spaces"), warm coral-to-violet horizon wash, real group/gathering photography (not solo-headset imagery)
2. Space-type selector — four cards (Family & Friends, Diaspora & Heritage, Interest Communities, Events & Gatherings)
3. "Live Now" carousel — active spaces with presence counts and live indicators
4. How it works — three-step strip (Create or join a space → Show up together → Stay connected)
5. Safety & privacy band — controls explained plainly, builds trust before commitment
6. Diaspora spotlight — a story about staying connected across distance
7. Upcoming events strip
8. "Get Started" download CTA band
9. Blog/Stories teaser
10. Footer

> **Stitch prompt:** "Design the Jumuika homepage: warm, playful VR social-platform brand in coral and violet, hero with dual CTA, a four-card space-type selector (Family & Friends, Diaspora & Heritage, Interest Communities, Events & Gatherings), a 'Live Now' carousel with presence counts and live indicators, a safety & privacy band, and a diaspora-connection story spotlight. Same grid, spacing, and card shapes as the Swizzy Industries master design system, but in coral and violet, with real group-photography warmth, never a lone person in a headset."

---

## 9. Page Specifications: Spaces & Communities

Four sub-pages (Family & Friends, Diaspora & Heritage, Interest Communities, Events & Gatherings), each following the same template:

1. Space-type hero (space-colored eyebrow, headline, relevant photography)
2. What this space type is for (framing, real use cases)
3. Featured/live spaces in this type (card grid with presence counts)
4. How privacy works for this space type (public vs. private defaults)
5. Getting started steps specific to this type
6. CTA band — "Create your [Family / Diaspora / Interest / Event] space"

> **Stitch prompt:** "Design a Spaces & Communities page for [Family & Friends / Diaspora & Heritage / Interest Communities / Events & Gatherings], space color [insert], with a hero, use-case framing, a featured-spaces card grid with presence counts and live indicators, and a privacy explainer section. Use the same header, footer, and design system as the homepage."

---

## 10. Page Specifications: Events

Calendar-style listing of upcoming live events (concerts, talks, watch parties, community gatherings), filterable by space type. Event detail template includes date/time (with timezone handling for diaspora audiences), capacity, ticketing/access info, and a "Join" or "Get Notified" CTA.

---

## 11. Page Specifications: Careers

Mirrors Swizzy's careers structure, with social-platform-specific culture content — community managers, trust & safety staff, and real-time/networking engineers alongside 3D/VR engineers.

---

## 12. Page Specification: Contacts

Single page: general inquiry form, support contact, trust & safety/report escalation contact, partnership contact for community organizers and event hosts.

---

## 13. Utility & System Pages

Search, Thank You, Privacy Policy, Terms of Use, Community Standards, Accessibility Statement, Sitemap, 404, 500, Cookie banner.

---

## 14. Community Safety & Moderation

- Every space has a visible, one-tap report/block/leave control.
- Private spaces are private by default when created for Family & Friends; public spaces (Interest Communities, Events) carry visible, published community standards.
- Age-appropriate space defaults; parental-guidance information provided for younger users, in line with platform age policy.
- Live moderation and escalation path clearly signposted from within the product and on the Safety & Privacy page.

---

## 15. Content, Voice & Microcopy Guidelines

- Speak in terms of presence and togetherness, not metrics ("12 people are here now," not "12 active users").
- Avoid engagement-bait language ("you won't want to miss this," notification-guilt copy).
- Every space/event card shows privacy status and presence count without requiring a click.
- Diaspora-facing copy acknowledges distance warmly, never with pity or cliché ("home" language, not "expat" framing).

---

## 16. SEO, Performance & Accessibility

Same technical bar as Swizzy master brief: WCAG AA, 44px touch targets, responsive 360–1536px, privacy-respecting analytics. Additionally: event pages need accurate timezone display for a geographically distributed (diaspora) audience as a core accessibility/usability requirement.

---

## 17. Legal, Privacy & Data Protection

- **Presence and location data:** handled per Kenya Data Protection Act, 2019; presence counts shown publicly must not reveal precise individual location.
- **Minors:** platform age policy clearly stated; any space accessible to minors follows child-safeguarding principles and guardian-appropriate controls.
- **Community Standards:** published, versioned, and linked from every space and event page.
- Standard privacy notice, terms of use, accessibility statement, cookie consent per Swizzy master brief.

---

## 18. Stitch Prompting Playbook

### 18.1 Global Design Prompt

> You are designing the website for **Jumuika**, a Swizzy Industries brand that uses VR to bring people together across distance — Family & Friends, Diaspora & Heritage, Interest Communities, and Events & Gatherings — reimagining social media as shared presence rather than scrolling. Tagline: "Distance is just a detail."
>
> **Style:** warm, playful, genuinely social. Light theme only for the marketing website (the in-app VR product may use an ambient dark theme, out of scope here). No addictive infinite-scroll visual language, no generic cyberpunk-avatar metaverse look.
>
> **Colors:** Gathering Coral #E8735A (primary), Coral Hover #CF5C44, Coral Tint #FBEAE6, Presence Violet #7A5FD9 (accent, live indicators), Violet Tint #EFEBFB, white #FFFFFF, Mist #FBF6F5, Cloud borders #F1E2DE, Ink #241819, Slate body #4A3936, Slate muted #7A6864. Space-type colors: Family & Friends #3A5BD9, Diaspora & Heritage #F2A63B, Interest Communities #0E9F8E, Events & Gatherings #D9527A.
>
> **Typography:** Plus Jakarta Sans for headings (600/700), Inter for body/UI. Display 62, H1 48, H2 36, H3 28, body 16–18. Sentence case.
>
> **Layout:** 12-column grid, 1200px container (1320px wide container for space/gallery imagery), 8pt spacing base, 96px section padding desktop, alternating white and Mist sections. Cards 12px radius, soft shadows, 1px Cloud borders. Buttons 48px tall, 12px radius.
>
> **Imagery:** real groups of Kenyan people and diaspora families gathering warmly, never a lone person in a headset in a white void; joyful, candid energy.
>
> **Navigation:** five-item mega menu — Home, Spaces & Communities, Events, Safety & Privacy, Careers — plus plain Contact link, "Get Started" button, search icon.
>
> **Quality bar:** WCAG AA contrast, 44px touch targets, responsive 360–1536px, presence counts and privacy status visible on every space card, consistent components across every page.

### 18.2 Component prompts

> **Header and mega menu:** logo left, five nav items centered, search icon and "Get Started" button right. Spaces & Communities dropdown shows four space-type cards (Family & Friends, Diaspora & Heritage, Interest Communities, Events & Gatherings) with icon, title, one-line description, space color accent, plus a "Live Now" list column with presence counts.

> **Footer:** warm coral-toned footer, top CTA band ("Show up together — get started free"), columns for Brand, Spaces & Communities, Events, Careers & Contact, newsletter field, bottom bar with "part of Swizzy Industries" lockup and legal links including Community Standards.

### 18.3 Suggested prompt pattern for each page

Same pattern as Swizzy master brief Section 18.3.

### 18.4 Common corrections to have ready

- "Show groups of people, not a lone person in a headset."
- "Make the privacy status on this card more visible."
- "Reduce notification/urgency language — this is about presence, not engagement-bait."
- "Keep space colors to badges and accents only — primary buttons stay Gathering Coral."

---

## 19. Build Order & Checklist

### 19.1 Recommended build order

1. Global Design Prompt and tokens
2. Header and mega menu
3. Footer
4. Homepage
5. Spaces & Communities overview + four space-type pages
6. Space detail/preview template
7. Events calendar + event detail template
8. Download / Get Started
9. Safety & Privacy
10. About, Team
11. Blog/Stories listing + article template
12. Careers pages
13. Contact / Support
14. Utility pages, Community Standards

### 19.2 Per-page quality checklist

Same as Swizzy master brief Section 19.2, plus: presence count and privacy status visible on every space card without a click.

### 19.3 Launch checklist

Same as Swizzy master brief Section 19.3, plus: age-policy and safety-control flows tested end to end; timezone display verified for diaspora-facing event pages.

---

## 20. Placeholders to Fill In

| Item | Where it is used |
| --- | --- |
| Root domain / subdomain | Everywhere (`{domain}`) |
| Final Jumuika logo files | Header, footer, press kit |
| Community Standards (final wording) | Safety & Privacy, footer link |
| Founding year, HQ, team size | About, Quick facts |
| Sample spaces and events content | Spaces & Communities, Events |
| Diaspora/community stories (with consent) | Homepage, Blog & Stories |
| Download links / app store listings | Download / Get Started |
| Age policy and guardian-control detail | Safety & Privacy, Legal |
| Office address, phone, email, support hours | Contact |
| Open roles and hiring process detail | Careers |
| Legal texts (privacy, terms, Community Standards) | Legal pages |

---

*End of document. Version 1.0. Update this file whenever a page, label, or design decision changes, so it always matches what is built.*
