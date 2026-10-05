import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { createPageMetadata } from "@workspace/ui/lib/seo"
import { UnderConstructionPage } from "@/components/route-fallbacks"
import { getConstructionRoute } from "@/lib/construction-routes"

type PageProps = { params: Promise<{ slug: string[] }> }

async function getRoute(params: PageProps["params"]) {
  const { slug } = await params
  const pathname = `/${slug.join("/")}`
  return { pathname, route: getConstructionRoute(pathname) }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { pathname, route } = await getRoute(params)
  return route
    ? createPageMetadata({
        pathname,
        siteName: "Jumuika",
        title: `${route.title} | Jumuika`,
        description: route.description,
      })
    : {
        title: "Page not found | Jumuika",
        robots: { index: false, follow: false },
      }
}

export default async function DesignedRoute({ params }: PageProps) {
  const { route } = await getRoute(params)
  if (!route) notFound()
  return (
    <UnderConstructionPage
      title={route.title}
      description={route.description}
    />
  )
}
