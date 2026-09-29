import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getDesignedPage } from "@/lib/site-navigation/pages"

type PageProps = { params: Promise<{ slug: string[] }> }

async function getRoute(params: PageProps["params"]) {
  const { slug } = await params
  const pathname = `/${slug.join("/")}`
  return { pathname, page: getDesignedPage(pathname) }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await getRoute(params)
  return page
    ? { title: `${page.title} | Tibika`, description: page.description }
    : { title: "Page not found | Tibika" }
}

export default async function DesignedRoute({ params }: PageProps) {
  const { page } = await getRoute(params)
  if (!page) notFound()
  const DesignedPage = page.Page
  return <DesignedPage />
}
