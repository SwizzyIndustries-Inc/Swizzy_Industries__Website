---
name: Tibika Precision Clinical
colors:
  surface: '#f4faff'
  surface-dim: '#ccdce6'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#e0f0fb'
  surface-container-high: '#daebf5'
  surface-container-highest: '#d5e5ef'
  on-surface: '#0e1d25'
  on-surface-variant: '#3d4946'
  inverse-surface: '#23323a'
  inverse-on-surface: '#e3f3fd'
  outline: '#6d7a76'
  outline-variant: '#bcc9c5'
  surface-tint: '#006b5f'
  primary: '#00685c'
  on-primary: '#ffffff'
  primary-container: '#008375'
  on-primary-container: '#f4fffb'
  inverse-primary: '#63dac7'
  secondary: '#46617d'
  on-secondary: '#ffffff'
  secondary-container: '#c1ddfe'
  on-secondary-container: '#46617e'
  tertiary: '#2d4fce'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a6ae8'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#81f6e3'
  primary-fixed-dim: '#63dac7'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#d0e4ff'
  secondary-fixed-dim: '#adc9ea'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#2d4964'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b8c4ff'
  on-tertiary-fixed: '#001354'
  on-tertiary-fixed-variant: '#0637b8'
  background: '#f4faff'
  on-background: '#0e1d25'
  surface-variant: '#d5e5ef'
  teal-hover: '#0B7F72'
  teal-tint: '#DFF6F2'
  domain-clinical: '#0E9F8E'
  domain-research: '#3A5BD9'
  domain-wellbeing: '#6C4FD9'
  mist-bg: '#F4F9F8'
  cloud-border: '#DCEAE7'
  ink-text: '#0B1B2B'
  slate-muted: '#647178'
  feedback-success: '#1E9E6A'
  feedback-warning: '#E0A100'
  feedback-error: '#D64545'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
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
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system embodies the calculated precision, absolute composure, and unquestioned rigor of modern clinical medicine. Tailored for hospital executives, university medical deans, clinical educators, and surgical research directors, the interface rejects sensory manipulation, flashy marketing gradients, and artificial urgency. It adopts an "instrument-panel" aesthetic—where every visual mark acts as an intentional carrier of functional information.

The overarching design style sits at the intersection of **Minimalism** and **Structured Instrument UI**. Information density is deliberately controlled: crisp 1px structural boundaries replace heavy multi-tiered dropshadows, while cool-cast mist backgrounds delineate sections without decorative interruptions. The emotional output is reassuringly clinical, scientifically disciplined, and serene.

## Colors

The design system operates strictly within a **Light theme** environment. The palette guarantees clinical hygiene, high legibility, and full WCAG AA/AAA contrast ratios against clinical lighting conditions.

### Core Architecture
- **Primary (`#0E9F8E` Clinical Teal):** The operational core of all interactive workflows, active links, primary action triggers, and the clinical training pillar. Never diluted or altered in interactive elements.
- **Secondary (`#0A2A44` Instrument Navy):** Provides architectural weight. Applied to high-contrast structural bands, hero backdrops, outcome stat sections, and comprehensive footer anchors.
- **Tertiary (`#3A5BD9` Domain Research):** Reserved for research, simulation data, and academic domain indicators.
- **Neutral (`#33424A` Slate Body):** The calibrated reading tone for body typography, metadata lists, and secondary narrative copy.

### Architectural Rules
- **Domain Accent Containment:** Colors `#3A5BD9` (Research) and `#6C4FD9` (Wellbeing) must never be used for primary action buttons or high-level navigation chrome. They are strictly limited to categorization badges, small card borders, and icon fills.
- **Error Quarantine:** The alert color `#D64545` is reserved strictly for genuine system warnings and blocking validation errors. It must never appear decoratively, in commercial badges, or in countdowns.

## Typography

The typographic hierarchy balances structural authority with effortless parsing.

- **Plus Jakarta Sans** provides geometric precision for headlines and structural titles, instilling an authoritative posture without cold clinical detachment.
- **Inter** provides high-legibility typographic fidelity across UI elements, numerical readouts, data tables, and long-form scientific narratives.
- **Tight Instrument Rhythm:** Headings and body copy adhere to tighter line-height proportions than conventional consumer layouts, echoing diagnostic monitors and technical dashboards.
- **Case Conventions:** All interface elements, headings, body text, and actions follow sentence case. The only exception is the `eyebrow` token, which uses uppercase lettering coupled with wide tracking (`0.08em`) to designate clinical category tags and overlines.

## Layout & Spacing

Layout geometry follows an exact 8pt spatial cadence. Layout containers enforce clarity and focus across three structural tiers:

1. **Wide Instrument Canvas (1200px Max):** Standard viewport constraint for landing overviews, simulation directories, and navigation containers.
2. **Dense Analytical Container (720px Max):** Centered spatial column dedicated to clinical procedure documentation, curriculum outlines, and research publications to preserve optimal reading length (65–75 characters per line).
3. **Grid Structure:**
   - **Desktop (>=1024px):** 12-column fluid grid, 24px (`1.5rem`) gutters, 32px (`2rem`) minimum outer page margins, and 96px (`6rem`) alternating vertical section padding.
   - **Tablet (768px - 1023px):** 8-column grid with 20px gutters and 24px margins.
   - **Mobile (360px - 767px):** 4-column grid with 16px (`1rem`) gutters and 20px (`1.25rem`) screen margins.

Content transitions between clean White surfaces and Mist (`#F4F9F8`) backgrounds without heavy structural horizontal rules, maintaining fluid continuity.

## Elevation & Depth

This design system avoids theatrical depth, heavy dropshadows, and decorative blurs. Spatial stratification is established through **low-contrast boundaries** and **tonal layering**:

- **Surface Tiers:**
  - **Level 0 (Canvas):** Base background alternating between `#FFFFFF` and `#F4F9F8` (Mist).
  - **Level 1 (Panels & Cards):** Pure `#FFFFFF` surfaces bounded by a crisp 1px solid `#DCEAE7` (Cloud Border).
  - **Level 2 (Active/Floating Elements):** Mega menus, dropdown panels, and hover-lifted cards. Accompanied by a clinical ambient shadow: `0 4px 16px -2px rgba(10, 42, 68, 0.05), 0 1px 3px 0 rgba(10, 42, 68, 0.03)`.
  - **Level 3 (Overlay Shells):** Mobile navigation and compliance overlays utilizing an Instrument Navy scrim: `#0A2A44` at 40% opacity with a subtle `backdrop-filter: blur(4px)`.
- **Hero Wash:** The primary header may employ a subtle linear gradient wash transitioning from `#0E9F8E` (Clinical Teal at 10% opacity) into `#0A2A44` (Instrument Navy at 15% opacity) over desaturated clinical photography.

## Shapes

The design system enforces a calibrated balance between clinical precision and user safety through a uniform shape geometry:

- **12px Radius (`rounded-lg`):** Standard corner roundness applied universally to primary cards, interactive containers, form inputs, modal dialogs, and main action buttons.
- **Pill Geometry (`rounded-full`):** Reserved exclusively for semantic components: category badges, evidence chips, and active operational state pills.
- **Sharp Elements (0px):** Structural system separators, continuous compliance strips, and edge-to-edge section dividers.
- **Logo Perimeter Integrity:** Brand marks must maintain an inviolable clear space around all perimeters equal to the vertical height of the logo’s capital letter "T".

## Components

### Buttons
- **Primary CTA:** Height 48px, minimum width 140px, padding 0 24px. Fill `#0E9F8E`, text `#FFFFFF`, radius 12px. Font Inter 14px Weight 600. Hover state transitions background smoothly to `#0B7F72`. Focus ring: 2px offset with 2px solid `#0E9F8E`.
- **Secondary (Instrument Button):** Height 48px, fill `#FFFFFF`, border 1px solid `#DCEAE7`, text `#0A2A44`. Hover state: background `#F4F9F8`, border-color `#0E9F8E`.
- **Tertiary / Link:** Inline height, zero padding, text `#0E9F8E`, weight 600. Underline on hover.

### Evidence Chips & Domain Badges
- **Evidence Chip:** Height 28px, border-radius 9999px. Background `#F4F9F8`, border 1px solid `#DCEAE7`. Contains leading micro-icon (e.g., scientific journal check), font Inter 12px medium, color `#33424A`. Used to cite validated clinical sources or flag "illustrative non-guidance" data.
- **Domain Badges:** Height 24px, pill shape.
  - *Clinical Training:* Background `#DFF6F2`, text `#0B7F72`.
  - *Research & Simulation:* Background `rgba(58, 91, 217, 0.1)`, text `#3A5BD9`.
  - *Patient Care:* Background `rgba(108, 79, 217, 0.1)`, text `#6C4FD9`.

### Cards
- **Structure:** Surface `#FFFFFF`, border 1px solid `#DCEAE7`, radius 12px, padding 24px.
- **Behavior:** Subtle vertical translation (-2px) on interactive card hover accompanied by the Level 2 soft clinical shadow. The border shifts to `#0E9F8E` at 40% intensity.

### Form Inputs & Selects
- **Geometry:** Height 48px, radius 12px, padding 0 16px. Background `#FFFFFF`, border 1px solid `#DCEAE7`, placeholder color `#647178`, text `#0B1B2B`.
- **Active Focus:** Border transitions to `#0E9F8E`, outer outline 3px solid `rgba(14, 159, 142, 0.15)`.
- **Error State:** Border shifts to `#D64545`, error message renders below input in Inter 12px regular with feedback error color.

### Checkboxes & Radio Buttons
- **Dimensions:** 20px x 20px. Radius 4px for checkboxes, full circle for radios.
- **States:** Default border 1.5px solid `#DCEAE7`. Selected state fill `#0E9F8E` with `#FFFFFF` checkmark or center pip. Focus ring conforms to primary brand ring standards.

### Compliance Strip (System-Specific)
- **Structure:** Full-width fixed or docked horizontal bar, height 40px. Background `#0A2A44`, text `#FFFFFF` at 85% opacity, Inter 12px regular. Contains regulatory status (e.g., ISO, CE Mark, HIPAA) and data privacy verification links.