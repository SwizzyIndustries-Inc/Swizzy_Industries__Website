"use client"

import Link from "next/link"
import { ArrowRight, BadgeCheck, School, Sparkles, WifiOff } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

export function HeroSection() {
  const { language } = useLanguage()
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="max-w-2xl">
          <Badge
            variant="secondary"
            className="mb-5 gap-1.5 rounded-full px-3 py-1.5"
          >
            <Sparkles aria-hidden="true" className="size-3.5" />
            {translate("Impact-driven immersive education in Kenya", language)}
          </Badge>
          <h1 className="max-w-[13ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[56px]">
            {translate("Learning, reimagined in three dimensions", language)}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {translate(
              "Curriculum-aligned VR classrooms, virtual science laboratories, and practical skills training for schools, universities, and TVET institutions across Kenya.",
              language
            )}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              render={<Link href="/contact/request-a-demo" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Request an institutional demo", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="#lab-catalog" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              {translate("Explore interactive labs", language)}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck aria-hidden="true" className="size-4 text-primary" />
              {translate("CBC aligned", language)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <School aria-hidden="true" className="size-4 text-primary" />
              {translate("KICD evaluated", language)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <WifiOff aria-hidden="true" className="size-4 text-primary" />
              {translate("Low-bandwidth ready", language)}
            </span>
          </div>
        </div>

        <div className="relative min-w-0">
          <ImagePanel
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjsXO9i28uj3o3nTGugmWT1KC2DGZYWSaX4lYXzEVmvkn6K6wPEGsIN-OMwQm1GDP8xVbFtf0HM0Z5PLZElVVnBFL3CSP_UmTkaRlFOIRJMMhmBXlou-I4x2grZ7HSI2Cf6dxWbRvm9lqsS1ufLKKt-jQxdZBV2lyNS6jJtX7m6w5qgEwfTnLtU5fVoCIb9kIIu-v7z4PCFhgPhYAtfreUT2UFUjHZlfNSdhbOI2ivS7qLfSOzv4mrDg"
            alt={translate(
              "Kenyan learners using immersive technology in a classroom",
              language
            )}
            className="aspect-[1.08] w-full rounded-xl bg-muted shadow-lg sm:aspect-[1.2] lg:aspect-[1.03]"
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-lg border border-border/70 bg-card/95 p-3 shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5 sm:gap-4 sm:p-4">
            <div className="relative grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-secondary text-sm font-bold text-foreground">
              <span className="absolute inset-[-3px] rounded-full border-[3px] border-primary border-r-transparent border-b-transparent" />
              82%
            </div>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
                {translate("Active session · Nairobi science lab", language)}
              </p>
              <p className="mt-1 line-clamp-2 text-sm leading-5 font-semibold">
                {translate(
                  "Orbital mechanics & gravitational physics",
                  language
                )}
              </p>
            </div>
            <div className="hidden shrink-0 text-right sm:block">
              <p className="text-xs font-semibold">
                {translate("32 headsets synced", language)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {translate("Local mesh session", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
