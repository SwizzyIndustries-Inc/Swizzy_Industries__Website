"use client"

import Link from "next/link"

import {
  ArrowRight,
  Check,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import {
  ComparisonGrid,
  ContentSection,
  FeatureCard,
  PageHero,
} from "@/components/shared"

const bespokeExamples: [string, string][] = [
  [
    "Training simulations",
    "Scenario-based practice for clinical, technical, and operational skills.",
  ],
  [
    "Virtual showrooms",
    "Interactive product and facility walkthroughs for distributed audiences.",
  ],
  [
    "Immersive onboarding",
    "Guided orientation for equipment, processes, and environments.",
  ],
  [
    "Spatial facility models",
    "Digital representations that support planning and shared understanding.",
  ],
  [
    "Public awareness experiences",
    "Accessible learning experiences for important community topics.",
  ],
]

const developmentSteps: [string, string, string][] = [
  ["01", "Discovery workshop", "Understand users, context, and the challenge."],
  [
    "02",
    "Scope and prototype",
    "Agree on a focused experience and test the direction.",
  ],
  [
    "03",
    "Build and test",
    "Develop content and software with subject experts.",
  ],
  ["04", "Pilot", "Try the solution in a real institutional setting."],
  ["05", "Launch and support", "Prepare teams and plan ongoing maintenance."],
]

export function BespokeDevelopmentPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Bespoke development"
        title="Your idea, built as an immersive experience"
        description="We work with organizations to design and deliver custom spatial software for specific training, learning, and communication needs."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Bespoke development" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Start a project <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="What we can build"
        title="Purpose-built experiences around your goals"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bespokeExamples.map(([title, description], index) => (
            <FeatureCard
              key={title}
              icon={
                [Layers3, Sparkles, UsersRound, Network, ShieldCheck][index]
              }
              title={title}
              description={description}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Our process"
        title="From first conversation to supported deployment"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {developmentSteps.map(([number, title, description]) => (
            <li key={number}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-4">
                  <Badge variant="outline">{number}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Multidisciplinary skills"
        title="The right expertise for each challenge"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "3D design",
            "Software engineering",
            "Learning design",
            "User research",
            "Project delivery",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="h-auto justify-start gap-2 rounded-xl px-4 py-3 text-sm"
            >
              <Check aria-hidden="true" className="size-4 text-teal-accent" />
              {skill}
            </Badge>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Engagement models"
        title="Start at a scale that fits"
      >
        <ComparisonGrid
          items={[
            {
              title: "Fixed-scope project",
              points: [
                "Defined use case and deliverables",
                "Agreed timeline and review points",
                "A clear path to pilot",
              ],
            },
            {
              title: "Pilot then scale",
              points: [
                "Start with a focused cohort",
                "Review feedback and performance",
                "Plan next steps using evidence",
              ],
              tone: "good",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Brief a project"
        title="Share the challenge you want to solve"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A first conversation helps us understand your users, environment,
              and requirements before discussing scope.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 gap-2"
            >
              Brief our team <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
