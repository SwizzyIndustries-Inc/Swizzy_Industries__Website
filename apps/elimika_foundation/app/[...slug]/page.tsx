import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { UnderConstructionPage } from "@/components/under-construction-page"
import { getConstructionRoute } from "@/lib/construction-routes"
import { getDesignedPage } from "@/lib/site-navigation/pages"

type PageProps = { params: Promise<{ slug: string[] }> }

async function getRoute(params: PageProps["params"]) {
  const { slug } = await params
  const pathname = `/${slug.join("/")}`
  return {
    page: getDesignedPage(pathname),
    route: getConstructionRoute(pathname),
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page, route } = await getRoute(params)
  return {
    title: `${page?.title ?? route?.title ?? "Page not found"} | Elimika Foundation`,
    description: page?.description ?? route?.description,
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
