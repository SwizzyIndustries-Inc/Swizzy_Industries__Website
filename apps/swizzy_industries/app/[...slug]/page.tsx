import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { UnderConstructionPage } from "@/components/under-construction-page"
import { getDesignedPage } from "@/components/design-pages"
import { getConstructionRoute } from "@/lib/construction-routes"

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
  const { route, design } = await getRouteInfo(params)

  return {
    title: `${design?.title ?? route?.title ?? "Page not found"} | Swizzy Industries`,
    description: design?.description ?? route?.description,
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
