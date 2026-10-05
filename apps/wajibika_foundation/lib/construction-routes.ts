import { getDesignedPage } from "@/lib/site-navigation/pages"
import { megaMenus, primaryNavigation } from "@/lib/site-navigation"

export type ConstructionRoute = {
  title: string
  description: string
  href: string
}

const navigationRoutes: ConstructionRoute[] = [
  ...primaryNavigation.map(({ title, href }) => ({
    title,
    description: `Explore ${title.toLowerCase()} at Wajibika.`,
    href,
  })),
  ...Object.values(megaMenus).flatMap((menu) => [
    {
      ...menu.sectionLink,
      description: `Explore ${menu.sectionLink.title.toLowerCase()} at Wajibika.`,
    },
    ...menu.groups.flatMap((group) => group.links),
    menu.featured,
  ]),
]

const routeMap = new Map<string, ConstructionRoute>()
for (const route of navigationRoutes) {
  if (route.href.startsWith("/") && route.href !== "/")
    routeMap.set(route.href, routeMap.get(route.href) ?? route)
}

export function getConstructionRoute(pathname: string) {
  const navigationRoute = routeMap.get(pathname)
  if (navigationRoute) return navigationRoute
  const designedPage = getDesignedPage(pathname)
  return designedPage
    ? {
        title: designedPage.title,
        description: designedPage.description,
        href: pathname,
      }
    : undefined
}

export function getSitemapRoutes() {
  return [...routeMap.keys()]
}
