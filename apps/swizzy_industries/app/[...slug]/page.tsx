import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { UnderConstructionPage } from "@/components/under-construction-page"
import { getConstructionRoute } from "@/lib/construction-routes"

type PageProps = {
  params: Promise<{ slug: string[] }>
}

async function getRouteInfo(params: PageProps["params"]) {
  const { slug } = await params
  return getConstructionRoute(`/${slug.join("/")}`)
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const route = await getRouteInfo(params)

  return {
    title: route
      ? `${route.title} | Swizzy Industries`
      : "Page not found | Swizzy Industries",
    description: route?.description,
  }
}

export default async function NavigationPlaceholderPage({ params }: PageProps) {
  const route = await getRouteInfo(params)

  if (!route) {
    notFound()
  }

  return (
    <UnderConstructionPage
      title={route.title}
      description={route.description}
    />
  )
}
