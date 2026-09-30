"use client"

import Link from "next/link"
import { ArrowRight, Headphones, UsersRound } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMUaLp_U5UVx7WESDGzMw_szKea58joG9E71GzJgMVRkFOoEAHNtJ3ApgcdwlljwWzQd1hK6iWwti1slvqDB3e4D0eiS1BfZ5UxYbPBNGdEX0K_tp9m7Y3xORPDLU-NjXxejHQ2uep_f2Cvc9U8wHBJKYtuBD5v9zD6ITvK8tTWhffbEivJ1-ajOG8aMSDuYBOPdOmqYyUopCyqYlfD8BGVcrCeuew-5svLWYZiAJOSeSCeQLqABbM"

export function HeroSection() {
  const { language } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/60 to-background py-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/12%,transparent_68%)]" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Badge
            variant="secondary"
            className="rounded-full px-3.5 py-1.5 text-xs uppercase"
          >
            <span className="mr-2 size-2 rounded-full bg-primary" />
            {translate("Reimagining social media as shared presence", language)}
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-[12ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl">
              {translate("Distance is just a detail.", language)}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {translate(
                "Step into persistent virtual spaces built for families, diaspora communities, and close friends to talk, hang out, and celebrate together in real time. No infinite feeds. Just real presence.",
                language
              )}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
            <Button
              render={<Link href="/download" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Get Started Free", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="#space-types" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              {translate("Explore Spaces", language)}
            </Button>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card/90 p-3.5 shadow-sm">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="grid size-8 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                KE
              </span>
              <span className="grid size-8 place-items-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                UK
              </span>
              <span className="grid size-8 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                US
              </span>
            </div>
            <p className="max-w-xs text-sm leading-5">
              <strong className="text-primary">
                {translate("Over 48,000", language)}
              </strong>{" "}
              {translate("Kenyans & diaspora connected across", language)}{" "}
              <strong>{translate("34 countries", language)}</strong>
            </p>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="rounded-2xl border border-border bg-card p-2.5 shadow-xl">
            <div className="relative">
              <ImagePanel
                src={heroImage}
                alt={translate(
                  "A warm virtual gathering inspired by Nairobi golden hour, with friends and family sharing a sunlit veranda.",
                  language
                )}
                className="aspect-[1.1] w-full rounded-xl bg-muted sm:aspect-[1.25]"
              />
              <div className="absolute inset-0 flex flex-col justify-between rounded-xl bg-gradient-to-t from-foreground/80 via-transparent to-foreground/10 p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-card/90 backdrop-blur"
                  >
                    <span className="mr-2 size-2 rounded-full bg-secondary" />
                    {translate("Nairobi Sunset Veranda", language)}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="rounded-full border-background/40 bg-foreground/50 text-background backdrop-blur"
                  >
                    <Headphones aria-hidden="true" data-icon="inline-start" />
                    {translate("Spatial Audio Live", language)}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/70 bg-card/95 p-3 shadow-lg backdrop-blur sm:p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <UsersRound aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">
                        {translate("Muthoni, David & 14 others", language)}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {translate("Seattle • Nairobi • Frankfurt", language)}
                      </span>
                    </span>
                  </div>
                  <Button
                    render={<Link href="/spaces/nairobi-sunset-verandah" />}
                    nativeButton={false}
                    size="sm"
                  >
                    {translate("Step In", language)}
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
              <span className="inline-flex min-w-0 items-center gap-2">
                <Headphones
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <span className="truncate">
                  {translate(
                    "Proximity voice active · Natural spatial audio",
                    language
                  )}
                </span>
              </span>
              <span
                className="flex h-5 shrink-0 items-center gap-1"
                aria-hidden="true"
              >
                <i className="h-2 w-1 rounded bg-primary" />
                <i className="h-4 w-1 rounded bg-primary/70" />
                <i className="h-3 w-1 rounded bg-secondary" />
                <i className="h-5 w-1 rounded bg-accent-foreground/60" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
