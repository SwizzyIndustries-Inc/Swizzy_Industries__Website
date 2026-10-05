# Nufaika

Nufaika is the Swizzy Industries services marketplace. It connects customers
with skilled service providers and supports local businesses and workers
across Kenya.

Production: [nufaika.swizzyindustries.com](https://nufaika.swizzyindustries.com)

## Local development

From the repository root, install workspace dependencies once:

```bash
bun install
```

Start Nufaika from this directory:

```bash
bun run dev
```

The site is available at [http://localhost:4203](http://localhost:4203).
Alternatively, run `bun run dev` from the repository root to start all six
sites through Turbo. Press `Ctrl+C` to stop the development server.

`.env.development` and `.env.production` configure `NEXT_PUBLIC_HOST` and
`NEXT_PUBLIC_PROTOCOL`, which are used by navigation links to other sites.
Use the development settings locally and do not publish environment values.

## Commands

Run from `apps/nufaika_foundation`:

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `bun run dev`   | Start the development server on port 4203 |
| `bun run build` | Create a production build                 |
| `bun run start` | Serve a production build on port 4203     |
| `bun run lint`  | Run ESLint                                |

The root `build`, `lint`, `typecheck`, and `format` commands use Turbo across
the monorepo; each workspace participates only when it defines that task.

## Code map

- `app/page.tsx` is the homepage entry point. Feature sections are composed in
  `components/homepage/`.
- `components/site-header.tsx`, `components/mobile-navigation.tsx`, and
  `components/site-footer.tsx` contain the shared navigation and page chrome.
- `lib/site-navigation.ts` defines menus and navigation links.
- `lib/construction-routes.ts` maps supported paths and provides sitemap
  entries. `app/[...slug]/page.tsx` renders routes and route-specific SEO
  metadata.
- `app/layout.tsx` sets providers, shared CSS, Nufaika's brand, and global SEO
  defaults. Reusable components and design tokens are in `packages/ui/`.

When creating a new page, update its page/navigation definition using the
existing route patterns so its link, metadata, and sitemap entry agree.

## Brand, icons, and SEO

The root layout sets `data-brand="nufaika"`. Nufaika's light and dark theme
variables are in `packages/ui/src/styles/brands/nufaika.css`; use the shared
theme tokens rather than hard-coding the palette.

The site header displays `public/logos/nufaika_logo_icon.svg` alongside
`public/logos/nufaika_logo_text.svg`. The browser favicon and Apple touch
icons live in `public/icons/`. `public/images/og-image.png` supplies the
Open Graph/social-sharing preview shown by messaging apps when available.

Shared metadata behavior lives in `packages/ui/src/lib/seo.ts`. The app
publishes its crawler rules and sitemap at `/robots.txt` and `/sitemap.xml`.

## Checks and deployment

Before shipping, run:

```bash
bun run lint
bun run build
```

Deploy the `nufaika_foundation` workspace as its own Next.js app at the
production domain above. Ensure the production host and protocol environment
values are configured for links between sites.
