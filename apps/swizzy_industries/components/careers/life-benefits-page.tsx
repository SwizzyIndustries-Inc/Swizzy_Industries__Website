"use client"

import {
  BookOpen,
  BriefcaseBusiness,
  Check,
  HeartPulse,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

export function LifeBenefitsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Life at Swizzy Industries"
        title="A place to do your best work"
        description="Get a clearer picture of the values, collaboration, and learning that shape life at Swizzy Industries. Specific benefits and working arrangements are confirmed by the team during hiring."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Life and benefits" },
        ]}
      />
      <ContentSection
        eyebrow="What matters at work"
        title="Support for good work, built around people"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["Health and wellbeing", "Details confirmed by HR."],
              [
                "Learning and growth",
                "Development expectations discussed by role.",
              ],
              ["Flexible work", "Work model confirmed for each position."],
              [
                "Equipment and tools",
                "Role-relevant equipment discussed during hiring.",
              ],
              ["Leave", "Policies shared during the hiring process."],
              ["Mentorship", "Opportunities to learn across teams."],
              [
                "Team connection",
                "Ways to collaborate in person and remotely.",
              ],
              ["Community", "Opportunities to work alongside local partners."],
            ] as const
          ).map(([title, description], index) => (
            <FeatureCard
              key={title}
              icon={
                [
                  HeartPulse,
                  BookOpen,
                  Network,
                  BriefcaseBusiness,
                  Check,
                  Lightbulb,
                  UsersRound,
                  Sparkles,
                ][index]
              }
              accent={index === 0 ? "teal" : "blue"}
              title={title}
              description={description}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Benefits listed here are topics, not a promise of specific employment
          terms.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="A day at Swizzy Industries"
        title="Focused work, shared learning"
      >
        <ol className="grid gap-3 md:grid-cols-4">
          {[
            ["Plan", "Align on priorities and partner needs."],
            [
              "Build",
              "Work through a design, technical, or delivery challenge.",
            ],
            ["Review", "Share progress with colleagues and subject experts."],
            ["Learn", "Capture feedback and plan the next step."],
          ].map(([title, description], index) => (
            <li key={title}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Learning and inclusion"
        title="A respectful, collaborative workplace"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Keep learning"
            description="Knowledge sharing and role-relevant development support better work."
          />
          <FeatureCard
            icon={UsersRound}
            title="Value different perspectives"
            description="We aim to create space for people with different disciplines and experiences."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Clear expectations"
            description="Hiring and team processes should be transparent and respectful."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Team traditions"
        title="Connection is part of the work"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Project demonstrations",
            "Partner learning sessions",
            "Team meetups",
          ].map((item) => (
            <Card
              key={item}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex min-h-28 items-center gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <UsersRound aria-hidden="true" className="size-5" />
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}
