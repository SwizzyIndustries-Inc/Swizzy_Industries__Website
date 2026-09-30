"use client"

import Link from "next/link"
import { ArrowRight, Heart, MapPin } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const storyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJsCQ5Z9OfDuQAaT1y2FEMu8nfhfImIYSaK5iazHb0UGKBXhn48ksjTcLLhx8pnq3lQaN8uxv5fjchhhAot3Q3GoNa70uv7OlOiz4b5IgWH3lB9RCAbEbRl_I4KtSxJmn_hI2L6cPRNRguO5hOXMp1_I5F7bJYJARMVp0THVJzB0fDuT7Jx5U0eVMRoW8ON8qNg4KSwZsFdZJ3lGmW40I49sYsOBqVvktlipSJNaZgYuDlT95nirLD"

export function DiasporaStorySection() {
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Card className="grid overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <ImagePanel
              src={storyImage}
              alt={translate(
                "A mother and daughter sharing a warm video gathering across continents.",
                language
              )}
              className="h-full min-h-72 bg-muted sm:min-h-96"
            />
            <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 rounded-xl border border-border/70 bg-card/95 p-3 text-center shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-4">
              {[
                ["8,800", "Miles bridged"],
                ["0ms", "Spatial lag"],
                ["4 Gen", "Together"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block font-heading text-lg text-primary sm:text-xl">
                    {value}
                  </strong>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    {translate(label, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <Badge variant="secondary" className="mb-4 w-fit rounded-full">
              {translate("Diaspora spotlight", language)}
            </Badge>
            <p className="mb-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin aria-hidden="true" className="size-3.5" />
              {translate("Seattle to Eldoret", language)}
            </p>
            <h2 className="font-heading text-2xl font-bold text-balance sm:text-3xl">
              {translate(
                "How the Mwangi family celebrates birthdays together in Jumuika",
                language
              )}
            </h2>
            <blockquote className="mt-5 border-l-2 border-primary pl-4 text-base leading-7 text-muted-foreground">
              “
              {translate(
                "In Jumuika, Mum sits on the virtual veranda with Auntie while the cousins play music in the garden room. It genuinely feels like coming home.",
                language
              )}
              ”
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                WM
              </span>
              <div>
                <p className="text-sm font-semibold">
                  {translate("Wanjiku Mwangi", language)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {translate(
                    "Software architect in Seattle · Host of The Mwangi Compound",
                    language
                  )}
                </p>
              </div>
            </div>
            <Button
              render={<Link href="/stories/diaspora-chronicles" />}
              nativeButton={false}
              variant="link"
              className="mt-6 h-auto w-fit px-0"
            >
              {translate("Read more community stories", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -top-28 -right-20 size-80 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-primary-foreground/35 text-primary-foreground"
            >
              {translate("Your living room has no borders", language)}
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate(
                "Distance is just a detail. Show up together today.",
                language
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">
              {translate(
                "Create a shared room, invite family, or meet your community wherever life has taken you.",
                language
              )}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                render={<Link href="/download" />}
                nativeButton={false}
                variant="secondary"
                size="lg"
              >
                {translate("Create your first space — free", language)}
                <Heart aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="#how-it-works" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                {translate("See how it works", language)}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/80">
              {["Web browser", "Meta Quest & SteamVR", "iOS & Android"].map(
                (platform) => (
                  <span key={platform}>{translate(platform, language)}</span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
