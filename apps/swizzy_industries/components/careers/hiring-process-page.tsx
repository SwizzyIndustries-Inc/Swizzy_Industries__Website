"use client"

import { Check, ShieldCheck, Target, UsersRound } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

export function HiringProcessPage() {
  const steps = [
    "Apply",
    "Application review",
    "Introductory conversation",
    "Skills discussion",
    "Team interview",
    "Decision",
    "Welcome",
  ]
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Hiring process"
        title="What to expect, step by step"
        description="We aim to make our hiring process clear, respectful, and relevant to the role."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Hiring process" },
        ]}
      />
      <ContentSection
        eyebrow="Our process"
        title="A clear and considered journey"
        tone="muted"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {step}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Timing and participants vary by role; your recruiter will
                    explain the next step.
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Fair assessment"
        title="Relevant, structured conversations"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Target}
            title="Role-related"
            description="Activities should reflect the skills and responsibilities of the position."
          />
          <FeatureCard
            icon={UsersRound}
            title="Consistent"
            description="Candidates are assessed against shared role criteria."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Accessible"
            description="Applicants can request adjustments for interviews and tasks."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Helpful preparation"
        title="Tips for a strong application"
        tone="muted"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Connect your experience to the role requirements.",
            "Share examples of work you can discuss.",
            "Ask questions about the team and expectations.",
            "Contact us if you need an adjustment or clarification.",
          ].map((tip) => (
            <li
              key={tip}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
            >
              <Check
                aria-hidden="true"
                className="size-4 shrink-0 text-teal-accent"
              />
              {tip}
            </li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection
        eyebrow="Recruitment safety"
        title="We never ask applicants for payment"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex items-start gap-3 p-5">
            <ShieldCheck
              aria-hidden="true"
              className="size-5 shrink-0 text-teal-accent"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you receive a suspicious request for money or sensitive
              financial information, do not respond. Verify opportunities with
              Swizzy Industries using our official contact details.
            </p>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
