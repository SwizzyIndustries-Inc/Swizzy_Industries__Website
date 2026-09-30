import type { Metadata } from "next"

import { NotFoundPage } from "@/components/route-fallbacks"

export const metadata: Metadata = {
  title: "Page not found | Tibika",
  description:
    "We couldn't find that page. Explore Tibika training and research.",
}

export default function NotFound() {
  return <NotFoundPage />
}
