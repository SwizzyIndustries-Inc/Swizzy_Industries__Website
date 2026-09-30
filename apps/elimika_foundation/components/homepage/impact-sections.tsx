"use client"

import { ShieldCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { translate, useLanguage } from "@/components/language-provider"

const impactMetrics = [
  ["42,000+", "Active Kenyan learners", "Across 47 counties"],
  ["180+", "Curriculum-mapped labs", "STEM, TVET & humanities"],
  ["3.8×", "Practical skill retention", "Reported learning impact"],
  ["98%", "Fewer consumables", "Across repeatable modules"],
]

const frameworks = [
  "Kenya Institute of Curriculum Development",
  "Competency-Based Curriculum",
  "TVETA Kenya",
  "Commission for University Education",
  "Swizzy Industries Innovation Labs",
]

export function ImpactStatsSection() {
  const { language } = useLanguage()

  return (
    <section className="bg-background py-14 text-foreground sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full">
            {translate("Quantified nationwide impact", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Helping more learners put knowledge into practice",
              language
            )}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {impactMetrics.map(([value, label, note], index) => (
            <div
              key={label}
              className="bg-card px-3 py-6 text-center sm:px-5 sm:py-8"
            >
              <p
                className={
                  index % 2 === 0
                    ? "font-heading text-3xl font-bold text-primary sm:text-4xl"
                    : "font-heading text-3xl font-bold text-secondary-foreground sm:text-4xl"
                }
              >
                {value}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                {translate(label, language)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {translate(note, language)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InstitutionalStrip() {
  const { language } = useLanguage()

  return (
    <section className="border-b border-border bg-card py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="mb-5 text-center text-xs font-semibold text-muted-foreground uppercase">
          {translate(
            "Aligned with national education frameworks and regulators",
            language
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {frameworks.map((name) => (
            <Badge
              key={name}
              variant="outline"
              className="min-h-9 rounded-md px-3 text-center"
            >
              <ShieldCheck aria-hidden="true" data-icon="inline-start" />
              {translate(name, language)}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
