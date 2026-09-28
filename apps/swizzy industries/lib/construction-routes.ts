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
    title: "Search",
    description:
      "Search pages, insights, resources, and opportunities at Swizzy.",
    href: "/search",
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

export function getConstructionRoute(pathname: string) {
  return routeMap.get(pathname)
}

export function isSitePage(pathname: string) {
  return pathname === "/" || routeMap.has(pathname)
}
