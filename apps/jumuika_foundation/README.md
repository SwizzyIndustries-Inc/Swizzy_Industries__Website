# Jumuika

Jumuika is the Swizzy Industries social-connection platform. It brings family,
friends, diaspora, and communities together through shared spaces, events, and
experiences.

Production: [jumuika.swizzyindustries.com](https://jumuika.swizzyindustries.com)

## Local development

Install the monorepo dependencies once from the repository root:

```bash
bun install
```

Start Jumuika on its own from this directory:

```bash
bun run dev
```

Open [http://localhost:4202](http://localhost:4202). To run all six websites
together, run `bun run dev` from the repository root. Stop a running server
with `Ctrl+C`.

The app's `.env.development` and `.env.production` configure
`NEXT_PUBLIC_HOST` and `NEXT_PUBLIC_PROTOCOL` for links between websites.
Keep environment values private; use the development configuration locally
and do not copy production values into it.

## Useful commands

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `bun run dev`   | Start the development server on port 4202 |
| `bun run build` | Create a production build                 |
| `bun run start` | Serve the production build on port 4202   |
| `bun run lint`  | Run ESLint                                |

Run these inside `apps/jumuika_foundation`. Root-level scripts run the
corresponding Turbo task across workspaces; `bun run typecheck` and
`bun run format` apply only to workspaces that define those scripts.

## Project map

- `app/page.tsx` renders `components/homepage/`; the homepage sections are
  organized by connection, spaces, events, stories, and trust.
- `components/site-header.tsx`, `components/mobile-navigation.tsx`, and
  `components/site-footer.tsx` provide the shared site navigation and layout.
- `lib/site-navigation.ts` defines navigation and menu content.
- `lib/construction-routes.ts` resolves recognized links and provides the
  route list used by the sitemap.
- `app/[...slug]/page.tsx` renders the matching route fallback and creates
  route-specific metadata. Keep route data and links in sync when adding a
  destination.
- `app/layout.tsx` configures global styles, providers, the Jumuika brand, and
  default metadata. Common components and tokens are in `packages/ui/`.

## Brand and sharing assets

The root layout sets `data-brand="jumuika"`. Its light and dark theme variables
are in `packages/ui/src/styles/brands/jumuika.css`. Use the existing shared
tokens rather than introducing app-specific hard-coded brand colors.

The header uses `public/logos/jumuika_logo_icon.svg` and
`public/logos/jumuika_logo_text.svg`. Favicon and Apple touch icons are in
`public/icons/`; `public/images/og-image.png` is the social-preview image read
by Open Graph and messaging apps such as WhatsApp.

Metadata helpers are shared from `packages/ui/src/lib/seo.ts`. The app's
`app/robots.ts` and `app/sitemap.ts` expose `/robots.txt` and `/sitemap.xml`.

## Checks and deployment

Run `bun run lint` and `bun run build` before shipping. Deploy the
`jumuika_foundation` workspace as a Next.js app at the production domain above,
with the production host/protocol environment configuration set for
cross-site links.
