"use client"

import Link from "next/link"
import { ArrowRight, ClipboardCheck, ShieldCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const caseImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSvX7lvFAf83mnEF5JXomzraZZtLohOK2mqHNaDAuTZg7nXvQJSxo8QWYTV9snBkzVItebHjvQX03GmL4R-YurRmY6dNhP1MQ7n-ddpMp5PIO5zUGxUu2Cu-NdYaF3Sogj7OYbxcK96PbN6kdomaSYPO_vT7Hp3WxmCF2WrXrCFUG3W5s2pSGjQpU2j9kiRRGrsMAl_-oDGXAO-vzLzZZCXUGjzc8vB1YzcwsvP14rae0i7PZ1HDPXdg"

export function CaseStudySection() {
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Card className="grid overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel
            src={caseImage}
            alt={translate(
              "A clinical team reviewing a three-dimensional anatomy model in a training environment.",
              language
            )}
            className="h-full min-h-72 bg-muted sm:min-h-96"
          />
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <Badge variant="secondary" className="mb-4 w-fit rounded-full">
              {translate("Institutional implementation", language)}
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-balance sm:text-3xl">
              {translate(
                "Start with the learning need. Build the safeguards around it.",
                language
              )}
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {translate(
                "A responsible simulation pilot defines intended learners, supervision, consent, data handling, and review criteria before deployment.",
                language
              )}
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Define intended learning outcomes",
                "Review scenario and consent requirements",
                "Evaluate sessions with qualified educators",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm">
                  <ClipboardCheck
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  {translate(item, language)}
                </p>
              ))}
            </div>
            <Button
              render={<Link href="/case-studies" />}
              nativeButton={false}
              variant="link"
              className="mt-5 h-auto w-fit px-0"
            >
              {translate("Explore institutional case studies", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export function ResearchResourcesSection() {
  const { language } = useLanguage()
  const resources = [
    [
      "Evidence summaries",
      "Concise reviews of relevant research and its limitations.",
    ],
    [
      "Module review notes",
      "Context and oversight questions for simulation scenarios.",
    ],
    [
      "Implementation guides",
      "Planning prompts for institutions and training teams.",
    ],
  ]
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Research resources", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Explore evidence with its context", language)}
            </h2>
          </div>
          <Button
            render={<Link href="/publications" />}
            nativeButton={false}
            variant="ghost"
            className="w-fit px-0"
          >
            {translate("View publications", language)}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map(([title, description]) => (
            <Card key={title} className="rounded-xl">
              <div
                aria-hidden="true"
                className="m-3 mb-0 flex aspect-[1.8] items-end rounded-lg bg-gradient-to-br from-primary/15 via-muted to-secondary/20 p-4"
              >
                <ShieldCheck className="size-7 text-primary" />
              </div>
              <div className="p-4">
                <Badge variant="outline" className="mb-2 rounded-md">
                  {translate("Resource", language)}
                </Badge>
                <h3 className="font-heading text-base font-semibold">
                  {translate(title, language)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="rounded-2xl border border-border bg-card p-7 text-center sm:p-10 lg:p-14">
          <Badge variant="outline" className="mb-4 rounded-full">
            {translate("Deployment integration", language)}
          </Badge>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Bring Tibika to your hospital, university, or research team.",
              language
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {translate(
              "Discuss learning objectives, review requirements, privacy, and institutional readiness with our team.",
              language
            )}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Schedule an institutional consultation", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/compliance" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              {translate("Review ethics & data safeguards", language)}
            </Button>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            {[
              "Consent-centered",
              "Evidence with context",
              "Institutional review",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-3.5 text-primary"
                />
                {translate(item, language)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
