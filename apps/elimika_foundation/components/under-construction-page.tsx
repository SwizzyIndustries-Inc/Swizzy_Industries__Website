import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export function UnderConstructionPage({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background px-5 py-12 text-foreground sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top_left,var(--color-blue-tint),transparent_68%)] opacity-70 dark:opacity-20"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <section className="order-2 max-w-xl lg:order-1">
          <div className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            <Hammer aria-hidden="true" className="size-3.5 text-primary" />
            Under construction
          </div>

          <h1 className="mt-6 font-heading text-4xl leading-tight font-bold tracking-normal text-foreground sm:text-5xl sm:leading-[1.12]">
            {title} is on its way.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {description}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
            We&apos;re preparing this part of Elimika Foundation. In the
            meantime, our team can help you find what you need.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<Link href="/" />}
              nativeButton={false}
              className="h-12 rounded-xl px-5"
            >
              <ArrowLeft aria-hidden="true" data-icon="inline-start" />
              Back to home
            </Button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              className="h-12 rounded-xl px-5"
            >
              Contact our team
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </section>

        <div className="order-1 mx-auto w-full max-w-[560px] lg:order-2">
          <Image
            src="/under-construction.svg"
            alt="Geometric illustration of a workspace being built"
            width={2970}
            height={2475}
            priority
            sizes="(max-width: 1023px) 90vw, 560px"
            className="h-auto w-full drop-shadow-[0_24px_32px_rgba(10,31,68,0.08)] dark:drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </main>
  )
}
