"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"

export function UnderConstructionPage({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const { language } = useLanguage()
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background px-5 py-12 text-foreground sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top_left,var(--color-blue-tint),transparent_68%)] opacity-70 dark:opacity-20" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <section className="order-2 max-w-xl lg:order-1">
          <div className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-xs font-semibold text-muted-foreground uppercase">
            <Hammer aria-hidden="true" className="size-3.5 text-primary" />
            {translate("Under construction", language)}
          </div>
          <h1 className="mt-6 font-heading text-4xl leading-tight font-bold sm:text-5xl sm:leading-[1.12]">
            {translate(title, language)} {translate("is on its way.", language)}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {translate(description, language)}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
            {translate(
              "We're preparing this part of Tibika. In the meantime, our team can help you find what you need.",
              language
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<Link href="/" />}
              nativeButton={false}
              className="h-12 rounded-xl px-5"
            >
              <ArrowLeft aria-hidden="true" data-icon="inline-start" />
              {translate("Back to home", language)}
            </Button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="outline"
              className="h-12 rounded-xl px-5"
            >
              {translate("Contact our team", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </section>
        <div className="order-1 mx-auto w-full max-w-[560px] lg:order-2">
          <Image
            src="/under-construction.svg"
            alt={translate(
              "Geometric illustration of a workspace being built",
              language
            )}
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

export function NotFoundPage() {
  const { language } = useLanguage()
  return (
    <main className="relative isolate flex min-h-[calc(100svh-9rem)] items-center overflow-hidden bg-background px-5 py-10 text-foreground sm:px-8 lg:min-h-[calc(100svh-10rem)] lg:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top_right,var(--color-blue-tint),transparent_68%)] opacity-70 dark:opacity-20" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <section className="order-2 max-w-xl lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase">
            {translate("Error 404", language)}
          </div>
          <h1 className="font-heading text-4xl leading-tight font-bold sm:text-5xl sm:leading-[1.12]">
            {translate("We couldn't find it.", language)}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {translate(
              "The page may have moved, or the address may be incorrect.",
              language
            )}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Button
              render={<Link href="/" />}
              nativeButton={false}
              className="h-11 rounded-xl px-4"
            >
              <ArrowLeft aria-hidden="true" data-icon="inline-start" />
              {translate("Back to home", language)}
            </Button>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {translate("Contact us", language)}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>
        <div className="order-1 mx-auto w-full max-w-[560px] lg:order-2">
          <Image
            src="/not-found.svg"
            alt={translate(
              "A colorful geometric landscape with a floating cube that has drifted off course",
              language
            )}
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
