import type { Metadata } from "next"

import { NotFoundPage } from "@/components/route-fallbacks"

export const metadata: Metadata = {
  title: "Page not found | Nufaika",
  description:
    "We couldn't find that page. Explore Nufaika services and providers.",
}

export default function NotFound() {
  return <NotFoundPage />
}
