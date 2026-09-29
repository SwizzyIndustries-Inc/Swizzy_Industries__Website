"use client"

import { BookOpen, Check, Cpu, HeartPulse, Sparkles } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

export function EarlyCareersPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Early careers"
        title="Start your career in immersive technology"
        description="Explore ways students and recent graduates may build experience across engineering, design, healthcare, and education technology."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Early careers" },
        ]}
      />
      <ContentSection
        eyebrow="Programme options"
        title="Different ways to get started"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Internship",
              "A time-bound learning experience with a scoped project.",
            ],
            [
              "Graduate programme",
              "Early-career development across a relevant Swizzy Industries team.",
            ],
            [
              "Industrial attachment",
              "Practical exposure for eligible Kenyan students.",
            ],
          ].map(([title, description]) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Programme details to be announced
                </Badge>
                <CardTitle className="text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Skill-building tracks"
        title="Learn by working across disciplines"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Cpu}
            title="Engineering"
            description="Software, device integration, and spatial systems."
          />
          <FeatureCard
            icon={Sparkles}
            title="Design"
            description="Research, interaction design, and 3D content."
          />
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Health technology"
            description="Clinical workflows, simulation, and subject review."
          />
          <FeatureCard
            icon={BookOpen}
            title="Learning systems"
            description="Curriculum, pedagogy, and educational products."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Programme journey"
        title="A transparent path from application to learning"
        tone="muted"
      >
        <ol className="grid gap-3 md:grid-cols-4">
          {[
            ["Apply", "Share your interests and experience."],
            ["Connect", "Meet the team and discuss fit."],
            ["Learn", "Join a scoped project and get support."],
            ["Reflect", "Review growth and possible next steps."],
          ].map(([title, description], index) => (
            <li key={title}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="secondary">0{index + 1}</Badge>
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
        eyebrow="Eligibility"
        title="Applications should be clear and accessible"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Programme dates and eligibility are confirmed before applications open.",
            "Applicants can share accessibility needs during the process.",
            "Selection criteria are shared with each opportunity.",
            "No recruitment or application fees are charged.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
            >
              <Check
                aria-hidden="true"
                className="size-4 shrink-0 text-teal-accent"
              />
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>
    </main>
  )
}
