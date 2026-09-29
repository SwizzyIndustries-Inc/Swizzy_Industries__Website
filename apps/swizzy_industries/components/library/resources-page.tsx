"use client"

import Link from "next/link"

import { useMemo, useState } from "react"

import {
  ArrowRight,
  Building2,
  FileText,
  HeartPulse,
  Network,
  Search,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

const resourceItems = [
  {
    title: "Company profile",
    type: "Company profile",
    area: "General",
    description:
      "An overview of Swizzy Industries, its products, and institutional focus.",
  },
  {
    title: "Health product overview",
    type: "Brochure",
    area: "Health",
    description:
      "An introduction to Tibika and immersive clinical learning use cases.",
  },
  {
    title: "Education product overview",
    type: "Brochure",
    area: "Education",
    description: "An introduction to Elimika and virtual practical learning.",
  },
  {
    title: "Impact measurement approach",
    type: "Methodology",
    area: "General",
    description:
      "A guide to defining outcomes, data sources, and evaluation methods.",
  },
  {
    title: "Institutional deployment guide",
    type: "Guide",
    area: "General",
    description:
      "Questions to consider when planning devices, connectivity, and support.",
  },
  {
    title: "Community experience overview",
    type: "Brochure",
    area: "Socialization",
    description: "An introduction to Jumuika and shared spatial experiences.",
  },
]

const resourceTypes = [
  "All",
  "Company profile",
  "Brochure",
  "Methodology",
  "Guide",
]

export function ResourcesPage() {
  const [query, setQuery] = useState("")
  const [type, setType] = useState("All")
  const filtered = useMemo(
    () =>
      resourceItems.filter((item) => {
        const matchesType = type === "All" || item.type === type
        const matchesQuery = `${item.title} ${item.description} ${item.area}`
          .toLowerCase()
          .includes(query.toLowerCase())
        return matchesType && matchesQuery
      }),
    [query, type]
  )

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Resource library"
        title="Everything you need to understand Swizzy Industries"
        description="Explore company information, product overviews, practical guides, and methodology notes."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Resources" },
        ]}
      >
        <div className="relative max-w-xl">
          <Search
            aria-hidden="true"
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search resources"
            placeholder="Search resources"
            className="h-11 pl-9"
          />
        </div>
      </PageHero>
      <ContentSection
        eyebrow="Featured collections"
        title="Start with an overview"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Building2}
            title="Company profile"
            description="Who we are, what we build, and the institutions we work with."
            href="/contact"
            action="Request the profile"
          />
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Health product overview"
            description="An introduction to clinical simulation and healthcare learning."
            href="/contact"
            action="Request the overview"
          />
          <FeatureCard
            icon={Network}
            title="Deployment planning"
            description="A practical guide to scoping device, network, and support needs."
            href="/contact"
            action="Request the guide"
          />
        </div>
      </ContentSection>
      <ContentSection eyebrow="Browse resources" title="Documents and guides">
        <Tabs value={type} onValueChange={(value) => setType(value ?? "All")}>
          <TabsList className="mb-5 h-auto w-full flex-wrap justify-start bg-muted p-1">
            {resourceTypes.map((item) => (
              <TabsTrigger key={item} value={item} className="min-h-9 px-3">
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <p aria-live="polite" className="mb-4 text-sm text-muted-foreground">
          {filtered.length} resources
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Card
              key={item.title}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <Badge variant="outline" className="w-fit">
                  {item.type} | {item.area}
                </Badge>
                <CardTitle className="text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Button
                  nativeButton={false}
                  render={<Link href="/contact?subject=resource" />}
                  variant="outline"
                  className="h-10 gap-2"
                >
                  Request this resource <ArrowRight aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {!filtered.length ? (
          <p className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No resources match your search. Try a different term or contact us
            for a custom information pack.
          </p>
        ) : null}
      </ContentSection>
      <ContentSection
        eyebrow="Collections"
        title="Information packs for your team"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Hospital pack",
              "Clinical simulation overview and deployment questions.",
            ],
            [
              "School pack",
              "Education product overview and classroom planning.",
            ],
            ["Partner pack", "Company profile and collaboration information."],
          ].map(([title, description]) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-3 p-5">
                <Badge variant="secondary">Available on request</Badge>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
                <Link
                  href="/contact?subject=information-pack"
                  className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-primary"
                >
                  Request pack{" "}
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
