"use client"

import {
  ClipboardCheck,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const safeguards = [
  {
    title: "Consent and ethics review",
    description:
      "Confirm suitable approvals and participant consent for each use case.",
    icon: UserRoundCheck,
  },
  {
    title: "Data minimization",
    description:
      "Use only the information required for an approved learning or research purpose.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence with context",
    description:
      "Review supporting evidence together with scope, limitations, and intended setting.",
    icon: ClipboardCheck,
  },
  {
    title: "Clinical oversight",
    description:
      "Keep qualified people responsible for review, interpretation, and care decisions.",
    icon: Scale,
  },
]

const reviewRoles = [
  ["Clinical educators", "Review learning objectives and instructional fit."],
  ["Simulation specialists", "Assess scenario design and technical workflow."],
  ["Research teams", "Set protocols, measures, and data handling."],
  ["Ethics & privacy leads", "Confirm consent, governance, and safeguards."],
]

export function EvidenceSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 text-foreground sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-border text-primary"
          >
            {translate("Clinical governance", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Evidence-based simulation needs careful oversight.",
              language
            )}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "Simulation supports education and research; it is not a substitute for clinical guidance, professional judgment, or patient care.",
              language
            )}
          </p>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {safeguards.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="rounded-lg border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <span className="mb-2 grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                  <Icon aria-hidden="true" className="size-5" />
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

export function ClinicalReviewSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 rounded-full">
            {translate("Review framework", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("Different expertise, shared responsibility", language)}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "The right reviewers depend on the module, institution, and intended use.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reviewRoles.map(([title, description]) => (
            <Card key={title} className="rounded-lg">
              <CardHeader>
                <CardTitle className="text-base">
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
