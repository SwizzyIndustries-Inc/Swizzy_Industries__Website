"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Scale, ShieldCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfjjKEQas5_tNDJbQHeSnpaGBJtsCQ7tGO_nISB_Co9XN_fSOiqTt6NUJmm93LG4y5oV8S1CLadEspvgMyLKx-G8C-r43pSF_zJlg9Du0yQAjnTx7PQMED5GvC59RH0EQebq04FcJuyjU2mEv5V8Ce9WO4CDjfaz0cphKoqtjBNC3uJMyW6U3ETXS_cRXcDw_nqjLn3ZU08LyagRvihX-4nHR52cdhhqYFy77nCNfRdDMARWJOQpYfOw"

export function HeroSection() {
  const { language } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/70 via-background to-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="flex flex-col items-start gap-5">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1.5 uppercase"
          >
            {translate("Kenya's civic advocacy platform", language)}
          </Badge>
          <h1 className="max-w-[13ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl">
            {translate(
              "Your voice, amplified. Structured change, delivered.",
              language
            )}
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {translate(
              "A verified platform for citizens, community organizers, and civic groups to raise, deliberate, and track public accountability across Kenya.",
              language
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              render={<Link href="/raise-an-issue" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Raise an issue", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="#active-campaigns" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              {translate("Explore active campaigns", language)}
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-emerald-600"
              />
              {translate("Local issues, clearly documented", language)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              {translate("Verification status stays visible", language)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Scale
                aria-hidden="true"
                className="size-4 text-secondary-foreground"
              />
              {translate("Sourced and non-partisan", language)}
            </span>
          </div>
        </div>
        <div className="relative min-w-0">
          <ImagePanel
            src={heroImage}
            alt={translate(
              "Community members taking part in a civic discussion in Nairobi.",
              language
            )}
            className="aspect-[1.02] w-full rounded-xl bg-muted shadow-xl sm:aspect-[1.12]"
          />
          <div className="absolute inset-3 flex flex-col justify-between sm:inset-4">
            <Badge
              variant="secondary"
              className="w-fit rounded-full bg-card/95"
            >
              {translate("Illustrative docket preview", language)}
            </Badge>
            <div className="rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:p-5">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <Badge variant="outline" className="rounded-md">
                  {translate("Economy · Informal livelihoods", language)}
                </Badge>
                <Badge variant="secondary" className="rounded-md">
                  {translate("Sample petition", language)}
                </Badge>
              </div>
              <h2 className="font-heading text-base font-semibold">
                {translate("Market access and fair local fees", language)}
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {translate(
                  "Example docket showing how a concern, its sources, and response stage can be presented.",
                  language
                )}
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3 text-xs">
                <span className="font-semibold text-primary">
                  {translate("Source review", language)}
                </span>
                <span className="text-muted-foreground">
                  {translate("Example status", language)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
