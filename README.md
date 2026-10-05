# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## SEO and brand image assets

Each app's SEO metadata uses the existing assets under its `public` directory:

- `images/og-image.png` — the 1424 × 752 social preview/banner used by Open
  Graph and X/Twitter. Messaging apps such as WhatsApp use this Open Graph
  image when generating a website preview.
- `icons/favicon.ico` and the app's SVG icon in `logos/` — browser favicons.
- `icons/apple-touch-icon-180x180.png` — the Apple touch icon.

Headers use each app's `logos/*_logo_icon.svg` alongside its matching
`logos/*_logo_text.svg` wordmark.
