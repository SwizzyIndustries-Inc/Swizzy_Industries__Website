import type { MetadataRoute } from "next"

import { getSitemapRoutes } from "@/lib/construction-routes"

const siteUrl = "https://jumuika.swizzyindustries.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set(["/", ...getSitemapRoutes()])

  return [...paths].map((pathname) => ({
    url: new URL(pathname, siteUrl).toString(),
    changeFrequency: pathname === "/" ? "weekly" : "monthly",
    priority: pathname === "/" ? 1 : 0.6,
  }))
}
