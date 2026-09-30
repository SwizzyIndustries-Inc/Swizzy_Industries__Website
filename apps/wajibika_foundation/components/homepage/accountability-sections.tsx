"use client"

import Link from "next/link"
import { ArrowRight, FileCheck2, Scale, ShieldCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const principles = [
  [
    "Source status",
    "Distinguish sourced material, community submissions, and opinion.",
  ],
  [
    "Response stage",
    "Show whether an issue is under review, acknowledged, or awaiting follow-up.",
  ],
  [
    "Public record",
    "Keep updates and supporting context together for readers.",
  ],
]

export function AccountabilitySection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 text-foreground sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-border text-primary"
          >
            {translate("Public accountability", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Make the status, sources, and next step clear.",
              language
            )}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {translate(
              "Wajibika separates the concern from its evidence and tracks the response without implying an outcome before it is documented.",
              language
            )}
          </p>
          <Button
            render={<Link href="/accountability-tracker" />}
            nativeButton={false}
            variant="secondary"
            className="mt-6"
          >
            {translate("Open accountability tracker", language)}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {principles.map(([title, description], index) => (
            <Card
              key={title}
              className="rounded-lg border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <span className="mb-2 grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                  {index === 0 ? (
                    <ShieldCheck aria-hidden="true" className="size-5" />
                  ) : index === 1 ? (
                    <Scale aria-hidden="true" className="size-5" />
                  ) : (
                    <FileCheck2 aria-hidden="true" className="size-5" />
                  )}
                </span>
                <CardTitle className="text-base text-card-foreground">
                  {translate(title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
