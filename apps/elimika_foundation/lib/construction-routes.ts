import { megaMenus, primaryNavigation } from "@/lib/site-navigation"

export type ConstructionRoute = {
  title: string
  description: string
  href: string
}

const navigationRoutes: ConstructionRoute[] = [
  ...primaryNavigation.map(({ title, href }) => ({
    title,
    description: `Explore ${title.toLowerCase()} at Elimika Foundation.`,
    href,
  })),
  ...Object.values(megaMenus).flatMap((menu) => [
    {
      ...menu.sectionLink,
      description: `Explore ${menu.sectionLink.title.toLowerCase()} at Elimika Foundation.`,
    },
    ...menu.groups.flatMap((group) => group.links),
    menu.featured,
  ]),
  {
    title: "Privacy policy",
    description: "Learn how Elimika Foundation handles personal information.",
    href: "/legal/privacy",
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
