"use client"

import Link from "next/link"

import {
  ArrowRight,
  CalendarDays,
  Download,
  ExternalLink,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, PageHero, StatGrid } from "@/components/shared"

import {
  FilterableFeed,
  type EditorialItem,
} from "@/components/editorial/editorial-feed"

const pressItems: EditorialItem[] = [
  {
    title:
      "Ministry of Education initiates a county STEM spatial computing pilot",
    summary:
      "A proposed rollout of virtual physics, biology, and geometry activities for technical training institutions.",
    category: "milestones",
    date: "March 10, 2025",
    meta: "4 min read",
  },
  {
    title: "How Nairobi's Swizzy Industries is rethinking medical simulation",
    summary:
      "A media feature on local immersive systems and practical clinical training needs.",
    category: "media",
    date: "February 24, 2025",
    meta: "Business Daily Africa",
  },
  {
    title: "Swizzy Industries shares an institutional deployment update",
    summary:
      "An update on partner conversations and the next phase of spatial learning pilots.",
    category: "press-release",
    date: "February 6, 2025",
    meta: "Official dispatch",
  },
  {
    title: "Local engineering team presents at an immersive technology forum",
    summary:
      "A technical briefing on browser-based XR and offline-aware deployment models.",
    category: "awards",
    date: "January 20, 2025",
    meta: "Recognition",
  },
  {
    title: "County partners explore practical virtual science laboratories",
    summary:
      "Education stakeholders discuss ways to complement physical lab sessions with interactive modules.",
    category: "milestones",
    date: "December 12, 2024",
    meta: "Deployment milestone",
  },
]

const pressCategories = [
  { value: "all", label: "All dispatches" },
  { value: "press-release", label: "Press releases" },
  { value: "milestones", label: "Deployment milestones" },
  { value: "media", label: "Media coverage" },
  { value: "awards", label: "Awards and recognition" },
]

export function NewsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Official dispatches and press"
        title="News and institutional press releases"
        description="Official announcements, partner updates, deployment milestones, and media coverage from Swizzy Industries."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "News" },
        ]}
      />
      <ContentSection title="Newsroom at a glance" tone="muted">
        <StatGrid
          items={[
            {
              value: "Official",
              label: "Company updates",
              detail: "Announcements from Swizzy Industries.",
            },
            {
              value: "Field",
              label: "Partner milestones",
              detail: "Updates from institutional collaborations.",
            },
            {
              value: "Media",
              label: "Coverage",
              detail: "Reporting and features about immersive technology.",
            },
            {
              value: "Nairobi",
              label: "Press contact",
              detail: "Connect with the communications team.",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Featured announcement"
        title="Clinical simulation and institutional readiness"
      >
        <Card className="border-border bg-card text-card-foreground shadow-sm">
          <CardContent className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Regulatory milestone</Badge>
                <Badge variant="outline">
                  <CalendarDays aria-hidden="true" className="mr-1 size-3" />{" "}
                  March 18, 2025
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground">
                Swizzy Industries receives statutory certification for clinical
                simulation systems
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                A featured newsroom notice on clinical governance, institutional
                deployment, and data protection considerations for spatial
                simulation systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                  <ShieldCheck aria-hidden="true" className="mr-1 size-3" />{" "}
                  Governance update
                </Badge>
                <Badge variant="outline">Nairobi, Kenya</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <Button
                nativeButton={false}
                render={<Link href="#dispatches" />}
                className="h-10 gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
              >
                Read release <ArrowRight aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                className="h-10 gap-2 rounded-lg"
                onClick={() => window.print()}
              >
                <Download aria-hidden="true" /> Print digest
              </Button>
            </div>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        id="dispatches"
        eyebrow="Newsroom"
        title="Recent institutional dispatches"
        tone="muted"
      >
        <FilterableFeed
          items={pressItems}
          categories={pressCategories}
          placeholder="Search releases and media coverage"
        />
      </ContentSection>
      <ContentSection
        eyebrow="Media relations"
        title="Press and media inquiries"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="space-y-1">
              <h3 className="font-heading font-semibold text-foreground">
                Swizzy Industries communications
              </h3>
              <p className="text-sm text-muted-foreground">
                For interviews, approved company information, and media
                requests.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={
                <Link href="mailto:info@swizzy.co.ke?subject=Media%20inquiry" />
              }
              variant="outline"
              className="h-10 gap-2"
            >
              Contact press desk <ExternalLink aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
