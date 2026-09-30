import type { Metadata } from "next"

import { NotFoundPage } from "@/components/route-fallbacks"

export const metadata: Metadata = {
  title: "Page not found | Wajibika",
  description:
    "We couldn't find that page. Explore Wajibika civic action resources.",
}

export default function NotFound() {
  return <NotFoundPage />
}
