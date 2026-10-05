import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { createPageMetadata } from "@workspace/ui/lib/seo"
import { UnderConstructionPage } from "@/components/under-construction-page"
import { getConstructionRoute } from "@/lib/construction-routes"
import { getDesignedPage } from "@/lib/site-navigation/pages"

type PageProps = { params: Promise<{ slug: string[] }> }

async function getRoute(params: PageProps["params"]) {
  const { slug } = await params
  const pathname = `/${slug.join("/")}`
  return {
    pathname,
    page: getDesignedPage(pathname),
    route: getConstructionRoute(pathname),
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { pathname, page, route } = await getRoute(params)
  const title = page?.title ?? route?.title

  return title
    ? createPageMetadata({
        pathname,
        siteName: "Elimika Foundation",
        title: `${title} | Elimika Foundation`,
        description: page?.description ?? route?.description,
      })
    : {
        title: "Page not found | Elimika Foundation",
        robots: { index: false, follow: false },
      }
}

export default async function DesignedRoute({ params }: PageProps) {
  const { page, route } = await getRoute(params)

  const constructionPage =
    route ??
    (page ? { title: page.title, description: page.description } : undefined)

  if (!constructionPage) notFound()

  return (
    <UnderConstructionPage
      title={constructionPage.title}
      description={constructionPage.description}
    />
  )
}
