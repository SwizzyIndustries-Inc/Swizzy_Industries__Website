import {
  megaMenus,
  primaryNavigation,
  type NavigationEntry,
} from "@/lib/site-navigation"

export type ConstructionRoute = Pick<
  NavigationEntry,
  "title" | "description" | "href"
>

const navigationRoutes: ConstructionRoute[] = [
  ...primaryNavigation.map((entry) => ({
    title: entry.label,
    description: `Explore ${entry.label.toLowerCase()} at Swizzy Industries.`,
    href: entry.href,
  })),
  ...Object.values(megaMenus).flatMap((menu) => [
    menu.sectionLink,
    ...menu.groups.flatMap((group) => group.links),
    ...(menu.products ?? []),
    menu.featured,
  ]),
  {
    title: "Tibika | Health product",
    description:
      "Explore immersive simulation and training for healthcare teams.",
    href: "/products/tibika",
  },
  {
    title: "Elimika | Education product",
    description: "Explore immersive STEM learning and vocational training.",
    href: "/products/elimika",
  },
  {
    title: "Jumuika | Socialization product",
    description:
      "Explore shared spaces for culture, community, and civic life.",
    href: "/products/jumuika",
  },
  {
    title: "Tibika | Health product",
    description: "Legacy link for the Tibika product landing page.",
    href: "/pillars/health",
  },
  {
    title: "Elimika | Education product",
    description: "Legacy link for the Elimika product landing page.",
    href: "/pillars/education",
  },
  {
    title: "Jumuika | Socialization product",
    description: "Legacy link for the Jumuika product landing page.",
    href: "/pillars/socialization",
  },
  {
    title: "Search",
    description:
      "Search pages, insights, resources, and opportunities at Swizzy.",
    href: "/search",
  },
  {
    title: "Products overview",
    description: "Explore Swizzy products and their connected areas of work.",
    href: "/pillars",
  },
  {
    title: "Thank you",
    description:
      "Confirmation and next steps after contacting Swizzy Industries.",
    href: "/thank-you",
  },
  {
    title: "Sitemap",
    description: "Browse all sections of the Swizzy Industries website.",
    href: "/sitemap",
  },
  {
    title: "Privacy policy",
    description: "Learn how Swizzy Industries handles personal information.",
    href: "/legal/privacy",
  },
  {
    title: "Terms of use",
    description: "Review the terms for using Swizzy Industries websites.",
    href: "/legal/terms",
  },
  {
    title: "Cookie policy",
    description: "Learn about cookies and your privacy choices.",
    href: "/legal/cookies",
  },
  {
    title: "Accessibility statement",
    description: "Read about accessibility at Swizzy Industries.",
    href: "/legal/accessibility",
  },
]

const routeMap = new Map<string, ConstructionRoute>()

for (const route of navigationRoutes) {
  if (route.href.startsWith("/") && route.href !== "/") {
    routeMap.set(route.href, routeMap.get(route.href) ?? route)
  }
}

const detailRoutes: {
  pattern: RegExp
  title: string
  description: string
}[] = [
  {
    pattern: /^\/(?:blog|news|events)\/[^/]+$/,
    title: "Editorial detail",
    description: "Read a Swizzy Industries article, news item, or event.",
  },
  {
    pattern: /^\/solutions\/case-studies\/[^/]+$/,
    title: "Case study",
    description: "Read a detailed Swizzy Industries case study.",
  },
  {
    pattern: /^\/careers\/open-roles\/[^/]+$/,
    title: "Role details",
    description: "Learn about a role at Swizzy Industries.",
  },
  {
    pattern: /^\/about\/team\/[^/]+$/,
    title: "Team profile",
    description: "Learn about a member of the Swizzy Industries team.",
  },
]

export function getConstructionRoute(pathname: string) {
  const route = routeMap.get(pathname)
  if (route) return route

  const detail = detailRoutes.find(({ pattern }) => pattern.test(pathname))
  return detail ? { ...detail, href: pathname } : undefined
}

export function isSitePage(pathname: string) {
  return pathname === "/" || Boolean(getConstructionRoute(pathname))
}
