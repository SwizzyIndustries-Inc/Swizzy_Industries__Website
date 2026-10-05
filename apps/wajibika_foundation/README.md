# Wajibika

Wajibika is the Swizzy Industries civic platform for evidence-aware public
issues, campaigns, community participation, and public accountability.

Production: [wajibika.swizzyindustries.com](https://wajibika.swizzyindustries.com)

## Local development

Install the shared workspace dependencies from the repository root:

```bash
bun install
```

Start Wajibika from this directory:

```bash
bun run dev
```

Visit [http://localhost:4205](http://localhost:4205). To run the whole website
family, use `bun run dev` from the repository root; Turbo starts all configured
app servers. Stop the local server with `Ctrl+C`.

The `.env.development` and `.env.production` files configure
`NEXT_PUBLIC_HOST` and `NEXT_PUBLIC_PROTOCOL` for links to sibling apps. Keep
environment values private and use the development settings for local work.

## Commands

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `bun run dev`   | Start the development server on port 4205 |
| `bun run build` | Create a production build                 |
| `bun run start` | Serve the production build on port 4205   |
| `bun run lint`  | Run ESLint                                |

Run these commands from `apps/wajibika_foundation`. Root-level scripts run
Turbo tasks across the monorepo; only packages defining a task will run it.

## Code map

- `app/page.tsx` renders the homepage sections under `components/homepage/`,
  including issues, civic workflows, and accountability.
- `components/site-header.tsx`, `components/mobile-navigation.tsx`, and
  `components/site-footer.tsx` provide navigation and shared site chrome.
- `lib/site-navigation.ts` defines the menus and links.
- `lib/construction-routes.ts` resolves recognized paths and produces sitemap
  entries. `app/[...slug]/page.tsx` renders route fallbacks and page metadata.
- `app/layout.tsx` configures providers, shared styles, brand theme, and SEO
  defaults. Shared UI and theme CSS live in `packages/ui/`.

When adding a destination, keep its navigation entry, recognized route, page
content, and metadata in sync. This lets links, page rendering, and the
sitemap describe the same set of public routes.

## Theme, logos, and SEO

The app layout selects `data-brand="wajibika"`. Wajibika theme variables for
light and dark modes are defined in
`packages/ui/src/styles/brands/wajibika.css`.

The header uses the icon and text-logo SVGs in `public/logos/`. Favicon and
Apple touch icons are in `public/icons/`; `public/images/og-image.png` is the
Open Graph preview banner used by social and messaging link previews. Shared
SEO helpers are in `packages/ui/src/lib/seo.ts`; `app/robots.ts` and
`app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml`.

## Checks and deployment

Before shipping, run `bun run lint` and `bun run build` from this directory.
Deploy the `wajibika_foundation` workspace to the production URL above and
provide its production host/protocol environment configuration.
