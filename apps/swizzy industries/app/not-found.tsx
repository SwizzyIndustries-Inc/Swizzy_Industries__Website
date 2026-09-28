import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export const metadata: Metadata = {
  title: "Page not found | Swizzy Industries",
  description:
    "We couldn't find that page. Explore Swizzy Industries, our pillars, and the latest insights.",
}

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-9rem)] items-center overflow-hidden bg-background px-5 py-10 text-foreground sm:px-8 lg:min-h-[calc(100svh-10rem)] lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top_right,var(--color-blue-tint),transparent_68%)] opacity-70 dark:opacity-20"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <section className="order-2 max-w-xl lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
            Error 404
          </div>

          <h1 className="font-heading text-4xl leading-tight font-bold tracking-normal text-foreground sm:text-5xl sm:leading-[1.12]">
            We couldn&apos;t find it.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            The page may have moved, or the address may be incorrect.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Button
              render={<Link href="/" />}
              nativeButton={false}
              className="h-11 rounded-xl px-4"
            >
              <ArrowLeft aria-hidden="true" data-icon="inline-start" />
              Back to home
            </Button>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
            >
              Contact us <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>

        <div className="order-1 mx-auto w-full max-w-[560px] lg:order-2">
          <Image
            src="/images/not-found.svg"
            alt="A colorful geometric landscape with a floating cube that has drifted off course"
            width={2835}
            height={2097}
            priority
            className="h-auto w-full drop-shadow-[0_24px_32px_rgba(10,31,68,0.08)] dark:drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </main>
  )
}
