# Swizzy Industries

Swizzy Industries is the company website and entry point to its immersive
technology portfolio:

- **Tibika** — health, clinical training, and medical research
- **Elimika** — education, STEM learning, and vocational training
- **Jumuika** — social connection and shared community spaces
- **Nufaika** — services marketplace and economic opportunity
- **Wajibika** — civic participation and public accountability

Production: [swizzyindustries.com](https://swizzyindustries.com)

## Local development

From the repository root, install dependencies:

```bash
bun install
```

Start Swizzy by itself from this directory:

```bash
bun run dev
```

Open [http://localhost:4200](http://localhost:4200). To run the whole site
family, run `bun run dev` from the repository root; Turbo starts all apps.
Stop the server with `Ctrl+C`.

For development, Swizzy can also serve as the local gateway for product
subdomains. Its `next.config.ts` rewrites host-matched requests such as
`elimika.localhost:4200` to the corresponding app on ports 4201–4205. Start
the relevant product app as well for its pages to be available through the
gateway. `proxy.ts` returns a branded service-unavailable page when a
configured upstream is not running.

`.env.development` and `.env.production` configure `NEXT_PUBLIC_HOST` and
`NEXT_PUBLIC_PROTOCOL` for cross-site links. Use development configuration
locally, and do not place private values in source control.

## Commands

Run from `apps/swizzy_industries`:

| Command             | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `bun run dev`       | Start the development server on port 4200   |
| `bun run build`     | Create a production build                   |
| `bun run start`     | Serve a production build on port 4200       |
| `bun run lint`      | Run ESLint                                  |
| `bun run typecheck` | Run TypeScript without emitting files       |
| `bun run format`    | Format TypeScript and TSX files in this app |

At the repository root, `bun run build`, `bun run lint`, `bun run typecheck`,
and `bun run format` use Turbo to run the matching tasks where configured.

## Where to work

- `app/page.tsx` and `components/homepage/` compose the main landing page.
- `components/site-header.tsx`, `components/site-footer.tsx`, and
  `components/swizzy-logo.tsx` define the shared frame and brand identity.
- `components/organization/`, `components/products/`, `components/solutions/`,
  `components/editorial/`, `components/careers/`, and `components/contact/`
  contain the corresponding sections and pages.
- `lib/site-navigation.ts` contains the navigation structure;
  `lib/site-navigation/pages.ts` maps designed routes, and
  `lib/construction-routes.ts` describes recognized paths and sitemap entries.
- `app/[...slug]/page.tsx` resolves non-homepage routes. Keep route data,
  navigation, and metadata aligned when adding a page.
- `next.config.ts`, `lib/microfrontend-upstreams.ts`, and `proxy.ts` configure
  local product-site routing and upstream availability behavior.

## Theme and public assets

Swizzy uses the default theme from `packages/ui/src/styles/globals.css`.
Do not set `data-brand="swizzy"` on its root layout: Swizzy is the default
brand, and the root attribute would override the default dark-mode cascade.
Shared UI components and the other apps' brand themes live in `packages/ui/`.

`public/logos/` holds the Swizzy icon, text logo, and full logo. `public/icons/`
contains the favicon and Apple touch icons. `public/images/og-image.png` is the
social-sharing image. Shared metadata helpers are in
`packages/ui/src/lib/seo.ts`; the sitemap and crawler rules are served at
`/sitemap.xml` and `/robots.txt`.

## Checks and deployment

Before shipping, run:

```bash
bun run lint
bun run typecheck
bun run build
```

Deploy this workspace as the Swizzy Industries Next.js site. Product apps are
separate workspaces and deploy to their own subdomains; ensure their
host/protocol configuration and production routing agree with the links in
the site navigation.
