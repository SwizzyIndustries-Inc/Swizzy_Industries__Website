"use client"

import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGi5UX8a5nUe0zmleqzULpzlhEU0CyOdeZw0-D30ZGgJs3RXkG0f5wvhqprUKzmPjriQrWY4XsxQvkE5z-NUPVnfg8TVvh-yetoo87eaLeIOEToBy_mCMIlRsRSIzVeuOk7Z4fMSdEMmjVtUz-cyOmO1pZakjGKTbE7H2OUBfPJpgOvJVXG86FZvhmtknNtpOXcBWN1MLHh4uFHn5Q9qb1krBKoIg83L0tSirL1Ai1YL7kpaIAcd2b"

export function HeroSection() {
  const { language } = useLanguage()

  return (
    <section className="overflow-hidden bg-gradient-to-b from-muted/70 via-background to-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <Badge
            variant="secondary"
            className="w-fit rounded-full px-3.5 py-1.5 uppercase"
          >
            {translate(
              "A Swizzy Industries pillar · Trusted services in Kenya",
              language
            )}
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-[12ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl">
              {translate("Skills meet opportunity.", language)}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {translate(
                "Find verified artisans, expert tutors, certified technicians, and top freelancers across Kenya. Transparent pricing, escrow-protected payments.",
                language
              )}
            </p>
          </div>
          <form
            action="/search"
            className="max-w-2xl rounded-xl border border-border bg-card p-2 shadow-lg"
          >
            <div className="grid gap-2 md:grid-cols-[1fr_190px_auto]">
              <label className="relative min-w-0">
                <Wrench
                  aria-hidden="true"
                  className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <span className="sr-only">
                  {translate("Search services", language)}
                </span>
                <Input
                  name="q"
                  placeholder={translate(
                    "e.g. Electrical wiring, KCSE Math tutor, UI Designer",
                    language
                  )}
                  className="h-12 border-0 pl-10 shadow-none focus-visible:ring-0"
                />
              </label>
              <label className="relative flex items-center gap-2 rounded-lg bg-muted px-3">
                <MapPin
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted-foreground"
                />
                <span className="sr-only">
                  {translate("Location", language)}
                </span>
                <NativeSelect
                  name="location"
                  aria-label={translate("Location", language)}
                  className="w-full border-0 bg-transparent shadow-none focus-within:ring-0"
                >
                  <NativeSelectOption value="all">
                    {translate("All Kenya", language)}
                  </NativeSelectOption>
                  <NativeSelectOption value="nairobi">
                    {translate("Nairobi Metro", language)}
                  </NativeSelectOption>
                  <NativeSelectOption value="mombasa">
                    {translate("Mombasa Coast", language)}
                  </NativeSelectOption>
                  <NativeSelectOption value="kisumu">
                    {translate("Kisumu & West", language)}
                  </NativeSelectOption>
                  <NativeSelectOption value="nakuru">
                    {translate("Nakuru Rift", language)}
                  </NativeSelectOption>
                </NativeSelect>
              </label>
              <Button type="submit" className="h-12 px-5">
                {translate("Search Verified Pros", language)}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 px-1 pt-2 text-xs">
              <span className="font-medium text-muted-foreground">
                {translate("Popular:", language)}
              </span>
              {[
                "Solar Installation",
                "Physics Tutoring",
                "Corporate Catering",
                "Plumbing Repair",
              ].map((tag) => (
                <Button
                  key={tag}
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-7 rounded-full bg-muted px-2.5 text-xs font-normal"
                >
                  {translate(tag, language)}
                </Button>
              ))}
            </div>
          </form>
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
            {[
              ["100% Vetted", "Govt ID & Skill Exam", BadgeCheck],
              ["M-Pesa Escrow", "KES released on approval", ShieldCheck],
              ["24/7 Swizzy Care", "Dispute protection", Star],
            ].map(([title, detail, Icon]) => {
              const FeatureIcon = Icon as typeof BadgeCheck
              return (
                <div
                  key={title as string}
                  className="flex items-center gap-2.5"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <FeatureIcon aria-hidden="true" className="size-4" />
                  </span>
                  <span>
                    <strong className="block text-xs">
                      {translate(title as string, language)}
                    </strong>
                    <span className="block text-[11px] text-muted-foreground">
                      {translate(detail as string, language)}
                    </span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="relative min-w-0 px-3 py-4 sm:px-5">
          <ImagePanel
            src={heroImage}
            alt={translate(
              "Two Kenyan professionals collaborating on technical work at a Nairobi development site.",
              language
            )}
            className="aspect-[0.9] w-full rounded-2xl bg-muted shadow-2xl sm:aspect-[1.05]"
          />
          <div className="absolute inset-x-5 bottom-7 rounded-xl border border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur sm:inset-x-8 sm:bottom-8">
            <Badge variant="secondary" className="rounded-md">
              {translate("Certified Nairobi master pro #NPA-449", language)}
            </Badge>
            <h2 className="mt-2 font-heading text-base font-semibold">
              {translate(
                "Electrical installation & smart diagnostics",
                language
              )}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {translate(
                "Westlands Commercial Plaza · Completed 48 jobs",
                language
              )}
            </p>
          </div>
          <div className="absolute top-1 left-0 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg sm:left-1">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <BadgeCheck aria-hidden="true" className="size-5" />
            </span>
            <span>
              <strong className="block text-xs">
                {translate("100% ID & skill verified", language)}
              </strong>
              <span className="text-[10px] text-muted-foreground">
                {translate("National ID + TVET / EPRA certified", language)}
              </span>
            </span>
          </div>
          <div className="absolute right-0 bottom-1 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg sm:right-1">
            <span className="grid size-10 place-items-center rounded-lg bg-secondary/20 text-secondary-foreground">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </span>
            <span>
              <strong className="block text-xs">KES 48,250,000+</strong>
              <span className="text-[10px] text-muted-foreground">
                {translate("Safely paid via Nufaika escrow", language)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
