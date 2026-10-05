# Tibika

Tibika is the Swizzy Industries health platform. It supports immersive
clinical training, medical research, and patient wellbeing.

Production: [tibika.swizzyindustries.com](https://tibika.swizzyindustries.com)

## Local development

Install dependencies from the repository root (once per checkout):

```bash
bun install
```

Run Tibika on its own from this directory:

```bash
bun run dev
```

Open [http://localhost:4204](http://localhost:4204). Run `bun run dev` at the
repository root to start all six sites with Turbo. Press `Ctrl+C` to stop.

The app's `.env.development` and `.env.production` configure
`NEXT_PUBLIC_HOST` and `NEXT_PUBLIC_PROTOCOL` for cross-site navigation. Use
development configuration on your machine and keep environment values
private.

## Commands

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `bun run dev`   | Start the development server on port 4204 |
| `bun run build` | Create a production build                 |
| `bun run start` | Serve the production build on port 4204   |
| `bun run lint`  | Run ESLint                                |

Run commands from `apps/tibika_foundation`. The root workspace uses Turbo to
run available tasks across apps and shared packages. Not every workspace
defines a `typecheck` or `format` script.

## Code map and routes

- `app/page.tsx` renders the homepage assembled from `components/homepage/`.
  Sections cover clinical solutions, deployment, impact, and stories.
- `components/site-header.tsx`, `components/mobile-navigation.tsx`, and
  `components/site-footer.tsx` define site navigation and shared layout.
- `lib/site-navigation.ts` owns menu content. `lib/construction-routes.ts`
  maps supported links and supplies sitemap paths.
- `app/[...slug]/page.tsx` handles recognized non-homepage routes and their
  page metadata. Keep navigation links, route entries, and page definitions
  consistent when adding destinations.
- `app/layout.tsx` configures global styles, providers, theme, and metadata.
  Shared UI components and CSS tokens live in `packages/ui/`.

## Theme and public assets

The root layout sets `data-brand="tibika"`. Brand-specific light and dark
variables live in `packages/ui/src/styles/brands/tibika.css`; prefer semantic
theme tokens in components.

The header uses the icon and wordmark SVGs in `public/logos/`. Browser and
Apple icons are in `public/icons/`, and `public/images/og-image.png` is the
Open Graph banner used for social previews (including WhatsApp link previews).
SEO helpers are shared in `packages/ui/src/lib/seo.ts`; crawler endpoints are
`/robots.txt` and `/sitemap.xml`.

## Checks and deployment

Run `bun run lint` and `bun run build` from this directory before shipping.
Deploy this workspace as a Next.js app at the production URL above, with the
production host/protocol environment settings available.
