"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Activity,
  ShieldCheck,
  Wifi,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDcJ-vF1smcfDyjWd8qzbJ3FgqsPggtm4iUU1KWYX05VkIXWvLC4NGikClH93PDB2Bfs6ZF4EugnoNccPLQMp8QagFbzDQjDvYYOwrY69KlAkvdsj0jfWH286BN48qps7NjfilGGhsOw_yeuPhsUfsZ_H2fqtuE9stpAirVk-xett_0UdEtVHsi3SNRlz2eit1add3vWUJWP4B_FrrZ2d7nTYazORU68icz0rtSuSAtUKqiqcbmnti3vg"

export function HeroSection() {
  const { language } = useLanguage()
  return (
    <section className="overflow-hidden bg-background py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-5">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1.5 uppercase"
            >
              {translate("Virtual reality in medicine & research", language)}
            </Badge>
            <h1 className="max-w-[12ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl">
              {translate("Practice precision. Protect life.", language)}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {translate(
                "High-fidelity simulation tools for clinical skills training, surgical rehearsal, and biomedical research, designed for the realities of East African healthcare.",
                language
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
              >
                {translate("Request a consultation", language)}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="#simulation-catalog" />}
                nativeButton={false}
                variant="outline"
                size="lg"
              >
                {translate("Explore simulation catalog", language)}
              </Button>
            </div>
            <div className="mt-2 grid w-full max-w-md grid-cols-3 gap-3 border-t border-border pt-5">
              {[
                ["Clinical training", "Skills rehearsal"],
                ["Research", "Spatial models"],
                ["Governance", "Consent & safety"],
              ].map(([title, detail]) => (
                <div key={title}>
                  <strong className="block text-sm">
                    {translate(title, language)}
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {translate(detail, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0">
            <ImagePanel
              src={heroImage}
              alt={translate(
                "A surgical resident practicing a procedure in a clinical simulation environment.",
                language
              )}
              className="aspect-[1.08] w-full rounded-xl bg-muted shadow-xl sm:aspect-[1.2]"
            />
            <div className="absolute inset-x-3 top-3 flex flex-wrap gap-2 sm:inset-x-4 sm:top-4">
              <Badge variant="secondary" className="rounded-md bg-card/95">
                <span className="mr-2 size-2 rounded-full bg-emerald-500" />
                {translate("Active session: laparoscopic practice", language)}
              </Badge>
              <Badge
                variant="outline"
                className="rounded-md border-background/40 bg-foreground/70 text-background"
              >
                {translate("Simulation preview", language)}
              </Badge>
            </div>
            <CardPreview language={language} />
          </div>
        </div>
        <div className="mt-12 rounded-xl border border-border bg-card px-5 py-6 sm:mt-16 sm:px-7">
          <p className="mb-4 text-center text-xs font-semibold text-muted-foreground uppercase">
            {translate(
              "Designed for clinical education and research contexts",
              language
            )}
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "Teaching hospitals",
              "Health sciences faculties",
              "Clinical research teams",
              "Simulation centres",
            ].map((name) => (
              <div
                key={name}
                className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-muted px-2 text-center text-xs font-semibold"
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                {translate(name, language)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CardPreview({ language }: { language: "en" | "sw" }) {
  return (
    <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border/70 bg-card/95 p-3 shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-4">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold">
        <Activity aria-hidden="true" className="size-4 text-primary" />
        {translate("Procedural practice session", language)}
      </div>
      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>{translate("Practice progress", language)}</span>
        <span className="font-semibold text-primary">
          {translate("Simulation data", language)}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-3/4 rounded-full bg-primary" />
      </div>
      <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
        <BadgeCheck aria-hidden="true" className="size-3.5 text-primary" />
        <Wifi aria-hidden="true" className="size-3.5" />
        {translate("Session telemetry preview", language)}
      </div>
    </div>
  )
}
