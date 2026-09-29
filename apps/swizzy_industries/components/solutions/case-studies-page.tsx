"use client"

import Link from "next/link"

import { useState } from "react"

import { ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { ContentSection, PageHero } from "@/components/shared"

const caseStudies = [
  {
    category: "health",
    client: "Clinical training partner",
    title: "Clinical simulation pilot",
    outcome: "Outcome metrics to be confirmed with the partner.",
  },
  {
    category: "education",
    client: "Education partner",
    title: "Virtual STEM learning pilot",
    outcome: "Learning measures to be confirmed with the partner.",
  },
  {
    category: "socialization",
    client: "Cultural partner",
    title: "Shared heritage experience",
    outcome: "Participation measures to be confirmed with the partner.",
  },
]

export function CaseStudiesPage() {
  const [category, setCategory] = useState("all")
  const filtered =
    category === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === category)

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Case studies"
        title="Real work, evaluated with our partners"
        description="Explore how immersive technology is being considered and tested across healthcare, education, and community settings."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Case studies" },
        ]}
      />
      <ContentSection
        eyebrow="Featured story"
        title="Clinical simulation pilot"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-5 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <Badge variant="secondary">Health</Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Working with clinical educators on repeatable practice
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A partner story should include the training need, the solution,
                and outcome measures reviewed by the institution.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={
                <Link href="/solutions/case-studies/clinical-simulation-pilot" />
              }
              variant="outline"
              className="h-10 gap-2"
            >
              Read story <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Case study library"
        title="Browse by area"
        tone="muted"
      >
        <Tabs
          value={category}
          onValueChange={(value) => setCategory(value ?? "all")}
        >
          <TabsList className="mb-5 h-auto flex-wrap justify-start bg-muted p-1">
            <TabsTrigger value="all" className="min-h-9 px-3">
              All
            </TabsTrigger>
            <TabsTrigger value="health" className="min-h-9 px-3">
              Health
            </TabsTrigger>
            <TabsTrigger value="education" className="min-h-9 px-3">
              Education
            </TabsTrigger>
            <TabsTrigger value="socialization" className="min-h-9 px-3">
              Socialization
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-4 md:grid-cols-3">
          {filtered.map((item) => (
            <Card
              key={item.category}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit capitalize">
                  {item.category}
                </Badge>
                <CardTitle className="text-foreground">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.client}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.outcome}
                </p>
                <Link
                  href={`/solutions/case-studies/${item.category}`}
                  className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-primary"
                >
                  View story{" "}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}
