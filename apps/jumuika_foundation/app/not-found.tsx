import type { Metadata } from "next"

import { NotFoundPage } from "@/components/route-fallbacks"

export const metadata: Metadata = {
  title: "Page not found | Jumuika",
  description:
    "We couldn’t find that page. Explore Jumuika spaces and stories.",
}

export default function NotFound() {
  return <NotFoundPage />
}
