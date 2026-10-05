import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { createPageMetadata } from "@workspace/ui/lib/seo"
import { UnderConstructionPage } from "@/components/under-construction-page"
import { getConstructionRoute } from "@/lib/construction-routes"
import { getDesignedPage } from "@/lib/site-navigation/pages"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

async function getRouteInfo(params: PageProps["params"]) {
  const { slug } = await params
  const pathname = `/${slug.join("/")}`
  return {
    pathname,
    route: getConstructionRoute(pathname),
    design: getDesignedPage(pathname),
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { pathname, route, design } = await getRouteInfo(params)
  const title = design?.title ?? route?.title

  return title
    ? createPageMetadata({
        pathname,
        siteName: "Swizzy Industries",
        title: `${title} | Swizzy Industries`,
        description: design?.description ?? route?.description,
      })
    : {
        title: "Page not found | Swizzy Industries",
        robots: { index: false, follow: false },
      }
}

export default async function NavigationPlaceholderPage({ params }: PageProps) {
  const { route, design } = await getRouteInfo(params)

  if (!route) {
    notFound()
  }

  if (design) {
    const DesignedPage = design.Page
    return <DesignedPage />
  }

  return (
    <UnderConstructionPage
      title={route.title}
      description={route.description}
    />
  )
}
