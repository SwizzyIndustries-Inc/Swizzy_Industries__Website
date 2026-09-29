"use client"

import Link from "next/link"

import {
  ArrowRight,
  HeartPulse,
  Lightbulb,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

const cultureAreas = [
  [
    "Meaningful work",
    "Build useful technology around important real-world needs.",
    HeartPulse,
  ],
  [
    "Growth",
    "Learn across engineering, clinical practice, and education.",
    Lightbulb,
  ],
  [
    "Collaboration",
    "Work with colleagues and institutional partners.",
    UsersRound,
  ],
  [
    "Local impact",
    "Help shape technology in the communities where it is used.",
    Sparkles,
  ],
] as const

export function CareersHomePage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Careers"
        title="Help us reimagine Kenya"
        description="Join a multidisciplinary team building immersive tools for health, education, and community. Explore the work, our values, and future opportunities."
        breadcrumbs={[{ label: "Careers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/careers/open-roles" />}
            className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
          >
            See open roles <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/careers/talent-community" />}
            variant="outline"
            className="h-11 rounded-xl px-5"
          >
            Join the talent community
          </Button>
        </div>
      </PageHero>
      <section className="border-b border-border bg-muted py-8 text-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="font-heading text-xl font-semibold text-muted-foreground sm:text-2xl">
            Work on technology that serves people, institutions, and
            communities.
          </p>
        </div>
      </section>
      <ContentSection
        eyebrow="Why Swizzy Industries"
        title="A place to build with purpose"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cultureAreas.map(([title, description, Icon], index) => (
            <FeatureCard
              key={title}
              icon={Icon}
              accent={index === 0 ? "teal" : index === 3 ? "amber" : "blue"}
              title={title}
              description={description}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection eyebrow="Culture in action" title="How we work together">
        <div className="grid gap-4 md:grid-cols-3">
          {(
            [
              [
                "Build and learn",
                "Prototype, learn from feedback, and improve the work.",
              ],
              [
                "Visit the field",
                "Spend time understanding the places and people involved.",
              ],
              [
                "Share knowledge",
                "Bring different disciplines into the same conversation.",
              ],
            ] as const
          ).map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-4 p-5">
                <span className="flex aspect-[16/9] items-center justify-center rounded-lg bg-muted text-primary">
                  {index === 0 ? (
                    <Lightbulb aria-hidden="true" className="size-8" />
                  ) : index === 1 ? (
                    <MapPin aria-hidden="true" className="size-8" />
                  ) : (
                    <UsersRound aria-hidden="true" className="size-8" />
                  )}
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Teams"
        title="Different disciplines, shared goals"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Engineering", "Software, spatial systems, and field technology."],
            [
              "Product and design",
              "User research, experience design, and product direction.",
            ],
            ["Health", "Clinical subject expertise and simulation."],
            ["Education", "Curriculum, pedagogy, and learning design."],
            ["Operations", "Delivery, procurement, and partner support."],
            [
              "Business development",
              "Institutional relationships and partnerships.",
            ],
          ].map(([team, description]) => (
            <Card
              key={team}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex items-start justify-between gap-3 p-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {team}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
                <Badge variant="outline">Role count TBD</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Open roles"
        title="Find your place at Swizzy Industries"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-foreground">
                No roles are currently published here.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back later or join the talent community for future
                updates.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/careers/open-roles" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Open roles page <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Early careers"
        title="Start your career in immersive technology"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="secondary">
                Internships and graduate programme
              </Badge>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Explore routes into engineering, design, clinical technology,
                and education work. Programme dates and eligibility are
                confirmed when applications open.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/careers/early-careers" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Explore early careers <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
