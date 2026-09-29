---
name: Warm Social Immersion
colors:
  surface: '#fff8f6'
  surface-dim: '#eed4d0'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e5'
  surface-container-high: '#fde2de'
  surface-container-highest: '#f7ddd8'
  on-surface: '#261816'
  on-surface-variant: '#56423e'
  inverse-surface: '#3d2d2a'
  inverse-on-surface: '#ffedea'
  outline: '#8a726c'
  outline-variant: '#ddc0ba'
  surface-tint: '#a13e2a'
  primary: '#a13e2a'
  on-primary: '#ffffff'
  primary-container: '#e8735a'
  on-primary-container: '#5f0e01'
  inverse-primary: '#ffb4a4'
  secondary: '#6448c2'
  on-secondary: '#ffffff'
  secondary-container: '#9d82ff'
  on-secondary-container: '#330290'
  tertiary: '#855400'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc861a'
  on-tertiary-container: '#432800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a4'
  on-primary-fixed: '#3e0500'
  on-primary-fixed-variant: '#822715'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#ccbeff'
  on-secondary-fixed: '#1f0060'
  on-secondary-fixed-variant: '#4c2da8'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#ffb95d'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fff8f6'
  on-background: '#261816'
  surface-variant: '#f7ddd8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a warm, deeply human design language tailored for virtual shared spaces. Centered around the principle "Distance is just a detail," the product champions authentic togetherness over performative digital interaction—focusing on shared emotional presence, diaspora connection, and familial comfort.

The aesthetic fuses warm tactile minimalism with welcoming, soft-surfaced interfaces. It deliberately avoids cold, sterile cyberpunk or glossy sci-fi tropes typical of virtual reality products. Instead, interfaces emphasize sun-drenched horizon gradients, soft earthen paper tones, crisp architectural borders, and glowing presence indicators that make digital gatherings feel as intimate and natural as sitting in a sunlit living room with loved ones.

## Colors

The palette balances earthy warmth, technological optimism, and community distinction across all touchpoints:

- **Primary (Gathering Coral):** `#E8735A` anchors the core identity, evoking hearth warmth, dawn light, and human hospitality. Interactive hover transitions to `#CF5C44`, while `#FBEAE6` acts as a gentle, low-contrast background fill for active states and subtle containers.
- **Accent (Presence Violet):** `#7A5FD9` provides intuitive contrast for spatial interaction, avatars, and live audiovisual activity, supported by `#EFEBFB` for soft badge fills.
- **Space Types:** Categorical anchors delineate room paradigms across the social catalog:
  - *Family & Friends:* Royal Blue `#3A5BD9`
  - *Diaspora & Heritage:* Sunlit Ochre `#F2A63B`
  - *Interest Communities:* Deep Teal `#0E9F8E`
  - *Events & Gatherings:* Rose Berry `#D9527A`
- **Neutrals & Surfaces:**
  - *Pure Surface:* White `#FFFFFF` for elevated foreground cards and floating HUD components.
  - *Canvas Mist:* `#FBF6F5` serves as the primary canvas wash.
  - *Cloud Borders:* `#F1E2DE` establishes subtle, 1px separation lines.
  - *Ink:* Primary display and title text `#241819`.
  - *Slate Body:* Readable, high-contrast narrative text `#4A3936`.
  - *Slate Muted:* Informational metadata, captions, and deactivated controls `#7A6864`.
- **System Feedback:** Success `#1E9E6A`, Warning `#E0A100`, Error `#D64545`.

## Typography

The typographic hierarchy pairs the open, warm geometry of **Plus Jakarta Sans** for expressive storytelling and headings with the neutral clarity of **Inter** for dense interface controls, metadata, and long-form reading.

- Headings use negative letter spacing (`-0.02em` on display styles) to maintain optical density and punchiness.
- All body copy maintains generous vertical metrics (`1.5` to `1.6` line-height ratio) to ensure effortless readability on bright displays.
- Numerical readouts, space population counters, and presence metadata leverage tabular figures within Inter to eliminate horizontal jitter during live updates.

## Layout & Spacing

Layouts follow an intentional 12-column responsive fluid grid designed to balance expansive marketing canvases with structured community directories:

- **Desktop (1024px+):** Max-width 1280px container, 12 columns, 24px (`1.5rem`) gutters, and 48px (`3rem`) page margins.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, and 32px outer canvas margins.
- **Mobile (320px - 767px):** 4 columns, 16px (`1rem`) gutters, and 20px (`1.25rem`) outer margins.

Vertical rhythm relies on multiples of 8px. Hero modules and room showcases maintain spacious section gaps (`space-xl` scaled to 80px–120px in hero viewports) to evoke breathability and physical spaciousness.

## Elevation & Depth

Visual depth is achieved through delicate, warm-tinted ambient shadows paired with crisp 1px structural outlines, avoiding murky grays:

- **Border Architecture:** All elevated cards, modal panels, and surface sheets use a structural `1px solid #F1E2DE` (Cloud) boundary to retain tactile tangibility over the Mist background.
- **Ambient Shadow Structure:**
  - *Base Surface:* Flat canvas with zero elevation.
  - *Interactive Cards (Rest):* `0 2px 8px -2px rgba(74, 57, 54, 0.04), 0 1px 3px 0 rgba(74, 57, 54, 0.02)`.
  - *Elevated Cards & Popovers (Hover/Active):* `0 12px 24px -4px rgba(74, 57, 54, 0.08), 0 4px 8px -2px rgba(74, 57, 54, 0.03)`.
  - *Immersive Modals & Navigation Overlays:* `0 20px 32px -6px rgba(36, 24, 25, 0.12), 0 8px 16px -4px rgba(36, 24, 25, 0.04)`.
- **Warm Horizon Atmospheric Shading:** Large hero sections and promotional containers implement soft, non-directional radial gradients transitioning from `#FBEAE6` (Coral Tint) and `#EFEBFB` (Violet Tint) into `#FBF6F5` (Mist), simulating ambient sunset light.

## Shapes

The design system maintains a unified **12px (`0.75rem`) corner radius** across interactive containers, cards, and primary buttons. 

- **Primary Interactive Elements:** Standard cards, room tiles, dialogs, form inputs, and buttons share an exact 12px radius, producing a coherent, welcoming, and ergonomically friendly silhouette.
- **Badges, Presence Indicators, and Micro-Pills:** Status badges, live participant counts, and category chips leverage a full pill radius (`9999px`) to immediately signal high-priority contextual status distinct from structural layout blocks.

## Components

### Buttons
- **Primary:** 48px height, 12px border radius, `#E8735A` background, `#FFFFFF` text (`label-md`), 24px horizontal padding. Hover shifts to `#CF5C44`. Active state scales down slightly (`0.98`).
- **Secondary:** 48px height, 12px border radius, `#FFFFFF` background, `1px solid #F1E2DE`, `#241819` text. Hover shifts to `#FBEAE6` surface with `#E8735A` border.
- **Ghost:** 48px height, transparent background, `#4A3936` text. Hover applies `#FBEAE6` fill with `#E8735A` text.

### Presence Badges & Privacy Tags
- **Live Room Indicator:** Pill container with `#EFEBFB` background, `#7A5FD9` text (`label-sm`), featuring a live 8px pulsating dot (`#1E9E6A` green or `#7A5FD9` violet) with an animated radar ring.
- **Space Category Badges:** Pill container using 10% tint of the space color (e.g., `#3A5BD9` at 10% opacity) with matching solid text and 8px horizontal padding.
- **Privacy Mode Tags:** Subtle chip with `#F1E2DE` background, 1px border, `#4A3936` text paired with an outline icon (e.g., "Family Private" or "Public Gathering").

### Space & Community Cards
- Constructed with a 12px border radius, `#FFFFFF` surface, 1px `#F1E2DE` border, and base ambient shadow.
- Feature full-bleed 16:9 imagery showcasing authentic togetherness, capped with a top-left Space Category badge and top-right live participant counter.
- Inner card body has 20px padding, a bold `headline-sm` space name, slate body host attribution, and an avatar stack showing who is currently present.

### Form Inputs & Textareas
- 48px height, 12px border radius, `#FFFFFF` fill, and 1px `#F1E2DE` border.
- Text rendered in `#241819` (`body-md`), placeholder in `#7A6864`.
- Focus states display a 1px border of `#E8735A` accompanied by an ambient `0 0 0 3px #FBEAE6` focus ring.

### Checkboxes & Radio Buttons
- 20px boxes/radii with 1px `#F1E2DE` borders.
- Checked state transitions immediately to `#E8735A` fill with white check/dot vector graphics.