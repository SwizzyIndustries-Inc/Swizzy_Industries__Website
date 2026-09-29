---
name: Civic Dignity
colors:
  surface: '#fff8f7'
  surface-dim: '#f1d3d7'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f1'
  surface-container: '#ffe9eb'
  surface-container-high: '#ffe1e5'
  surface-container-highest: '#fadbdf'
  on-surface: '#27171a'
  on-surface-variant: '#554243'
  inverse-surface: '#3e2b2f'
  inverse-on-surface: '#ffecee'
  outline: '#887273'
  outline-variant: '#dbc0c1'
  surface-tint: '#9e3e4b'
  primary: '#5c0b1c'
  on-primary: '#ffffff'
  primary-container: '#7a2331'
  on-primary-container: '#ff8f99'
  inverse-primary: '#ffb2b8'
  secondary: '#8c5000'
  on-secondary: '#ffffff'
  secondary-container: '#ffac58'
  on-secondary-container: '#734100'
  tertiary: '#00217d'
  on-tertiary: '#ffffff'
  tertiary-container: '#0033b2'
  on-tertiary-container: '#99abff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#40000e'
  on-primary-fixed-variant: '#7f2735'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#ffb873'
  on-secondary-fixed: '#2d1600'
  on-secondary-fixed-variant: '#6a3b00'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b8c4ff'
  on-tertiary-fixed: '#001354'
  on-tertiary-fixed-variant: '#0637b8'
  background: '#fff8f7'
  on-background: '#27171a'
  surface-variant: '#fadbdf'
  maroon-hover: '#611B27'
  maroon-tint: '#F5E6E8'
  ochre-tint: '#FBEEDD'
  mist-bg: '#FAF5F4'
  cloud-border: '#EADDDB'
  slate-body: '#4A3438'
  slate-muted: '#7A666A'
  issue-economy: '#1E8F6B'
  issue-governance: '#3A5BD9'
  issue-social: '#E8735A'
  issue-community: '#8C5FD9'
  feedback-success: '#1E9E6A'
  feedback-warning: '#E0A100'
  feedback-error: '#D64545'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
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
  eyebrow:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-trust, dignified civic platform environment. Its identity balances institutional gravitas with accessible, grassroots community engagement, prioritizing accountability, structural transparency, and legibility over sensationalist outrage. The visual tone deliberately rejects aggressive protest aesthetics and ephemeral corporate minimalism in favor of grounded authority and enduring civic safety.

The target audience spans everyday community organizers, concerned citizens, civic investigators, journalists, and institutional representatives. The UI must evoke feelings of safety, clarity, deliberative purpose, and unyielding credibility. 

The aesthetic is Modern Civic Functionalism: crisp structural framing, warm mist-tinted surfaces, generous white space, and warm earthy branding that conveys historical rootedness alongside modern public utility. Content hierarchy is strictly disciplined through clear typography, structural 1px dividing lines, and unambiguous semantic metadata indicators.

## Colors

The palette operates under an exclusive light color mode to preserve clarity, readability, and democratic transparency across outdoor and low-power mobile displays.

### Core Architecture
- **Primary (`#7A2331`)**: Civic Maroon serves as the principal anchor for high-level interactive states, focused navigation elements, institutional stat blocks, and authoritative calls to action.
- **Secondary (`#D98C3A`)**: Ochre provides warm momentum, reserved exclusively for active civic campaign progress indicators, status milestones, and targeted emphasis.
- **Tertiary (`#3A5BD9`)**: Governance Blue anchors institutional public oversight and systemic verification contexts.
- **Neutral (`#241417`)**: Deep Ink establishes maximum legibility for titles and top-level headers without the harsh chromatic drop of pure black.

### Issue Area Categorization
Category tokens are reserved strictly for thematic badging, metadata tags, and micro-accents. They must never supplant primary interactive buttons:
- **Economy**: `#1E8F6B`
- **Politics & Governance**: `#3A5BD9`
- **Social Norms**: `#E8735A`
- **Community Voice**: `#8C5FD9`

### Surface Foundations
The layout alternates between crisp white surfaces (`#FFFFFF`) for primary interactive cards and soft mist fills (`#FAF5F4`) for section rhythm. Structural rules and element demarcations use muted Cloud lines (`#EADDDB`), avoiding sharp gray contrast in favor of warm, cohesive boundaries.

## Typography

The typographic hierarchy pairs the structured, geometric gravitas of `Plus Jakarta Sans` for headers with the high-legibility, utilitarian precision of `Inter` for interfaces, operational data, and continuous prose.

### Conventions & Casing
- **Sentence Case:** Standard throughout all headlines, subheads, buttons, and instructional content.
- **Eyebrow Treatments:** Exclusively uppercase for category kickers and issue labels with wide tracking (`0.08em`) to guarantee quick categorical scanning.
- **Body Hierarchy:** Standard body copy defaults to `#4A3438` (Slate body) to mitigate reading fatigue while preserving WCAG AA contrast against both pure white and mist backgrounds. Secondary metadata, timestamps, and input placeholding default to `#7A666A` (Slate muted).

## Layout & Spacing

The layout is grounded in an 8px rhythmic spatial increment with strict horizontal containment rules to maintain sustained reading focus.

### Grid & Viewports
- **Standard Structural Grid:** 12-column fluid grid system across desktop viewports with a max-width container of `1200px`.
- **Editorial Narrow Container:** A centered `720px` max-width container dedicated to sustained long-form civic reports, investigative logs, and citizen testimonies.
- **Breakpoints:**
  - *Mobile (`360px` - `767px`):* 4 columns, `margin-sm` (16px), `gutter-sm` (16px).
  - *Tablet (`768px` - `1023px`):* 8 columns, `margin` (32px), `gutter` (24px).
  - *Desktop (`1024px` - `1536px`):* 12 columns, `margin-lg` (80px) dynamic margin, `gutter` (24px), capped at `1200px`.

### Spacing Principles
Main section padding runs at `6rem` (96px) on desktop to establish deliberate pacing between distinct civic topics, contracting to `3rem` (48px) on mobile viewports. Interactive components respect a strict 44px minimum touch target.

## Elevation & Depth

Visual hierarchy rejects exaggerated drop shadows and heavy blur surfaces. The interface relies on architectural framing, calibrated border contrast, and soft groundings to preserve sobriety.

### Depth Mechanics
- **Base Level (Flat/Framed):** Standard cards and informational panels feature `#FFFFFF` fills framed with a single `1px solid #EADDDB` border on top of `#FAF5F4` backgrounds, using no drop shadow.
- **Raised Interactive Level:** Hovered cards, context tooltips, and interactive dropdowns introduce an ambient, warm-tinted shadow: `0 8px 24px -4px rgba(36, 20, 23, 0.06), 0 2px 6px -1px rgba(36, 20, 23, 0.04)`.
- **Overlay & Modal Level:** Fixed navigation layers and civic submission modals incorporate a subtle backdrop tint with `rgba(36, 20, 23, 0.4)` and ambient dispersion: `0 20px 32px -8px rgba(36, 20, 23, 0.12)`.
- **Hero Horizon Wash:** Hero modules utilize a soft, directional linear wash blending subtly from `#7A2331` (tinted at low opacity) into `#D98C3A` to establish civic presence without compromising typographic contrast.

## Shapes

The interface embraces a balanced curvature model where cards and buttons share an approachable `12px` (0.75rem / token tier 2) corner radius. This prevents the harshness of brutalist right angles while avoiding excessive, informal circularity on analytical containers.

### Shape Classifications
- **Primary Interactive Elements & Cards:** `12px` radius. Applied to standard containers, field inputs, and major interaction targets.
- **Metadata Badges & Chips:** Fully pill-shaped (`9999px`) to immediately signal categorical metadata, status tracking, and source verifications.
- **Embedded Media & Data Panels:** `12px` bounding radius with an internal `1px` structural boundary line.

## Components

### Buttons
- **Primary:** Fixed 48px height, `12px` border-radius. Background is Civic Maroon (`#7A2331`), typography is White (`#FFFFFF`) in `label-lg` (Inter 600). Hover state shifts smoothly to `#611B27`. Focus states require a 2px offset ring in `#D98C3A`.
- **Secondary / Outline:** Fixed 48px height, `12px` radius. White or transparent background with a `1.5px solid #7A2331` border and Civic Maroon text. Hover introduces `#F5E6E8` surface fill.
- **Tertiary / Ghost:** 48px height, padding matching text bounds, with no default border or background. Hover triggers `#FAF5F4` background.

### Issue Chips & Metadata Badges
- Constructed with a `9999px` full pill radius. 
- Padding: 4px vertical, 12px horizontal.
- Categorical variants apply a 10% tinted background of the designated issue color with full saturation text (e.g., Economy displays a light green surface with `#1E8F6B` typography).
- Sourcing verification chips include a leading 6px circular dot indicating system-authenticated status.

### Form Inputs & Fields
- Height: 48px with `12px` border-radius.
- Border: `1px solid #EADDDB` resting on a `#FFFFFF` fill.
- Typography: `#241417` value text with `#7A666A` placeholder styling.
- Focus: `1.5px solid #7A2331` with no displacement.
- Error: `1.5px solid #D64545` paired with direct inline supporting labels.

### Selection Controls (Checkboxes & Radios)
- Checkboxes utilize a `4px` corner radius; radios are circular.
- Dimensions: 20px x 20px, framed by `1.5px solid #7A666A`.
- Active state fills with `#7A2331` displaying crisp white glyphs.

### Cards & Content Containers
- Base background `#FFFFFF` enclosed by `1px solid #EADDDB` and `12px` corner rounding.
- Internal padding: 24px (`space-lg`) on mobile, 32px (`space-xl`) on desktop.
- Interactive cards introduce the ambient warm-tinted shadow and shift border tone to `#7A2331` at 30% opacity on hover.

### Civic Specific: Accountability Flag & Moderation Trigger
- Every citizen post, evidence submission, and community comment module must contain a persistent, accessible moderation trigger.
- Represented as a restrained secondary utility link or flag icon (`#7A666A`) that transitions to `#D64545` on interaction, remaining within a single touch target (minimum 44px) across all viewports.