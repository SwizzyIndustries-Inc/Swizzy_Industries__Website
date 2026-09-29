"use client"

import Image from "next/image"

import Link from "next/link"

import { ArrowRight, Clock3 } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card } from "@workspace/ui/components/card"

import { homepageImages } from "@/components/homepage/shared"

import { ContentSection, PageHero } from "@/components/shared"

import {
  FilterableFeed,
  type EditorialItem,
} from "@/components/editorial/editorial-feed"

const articleItems: EditorialItem[] = [
  {
    title:
      "From Rote to Spatial: Aligning 3D Physics Modules with Kenya's Competency-Based Curriculum",
    summary:
      "How interactive spatial activities can support active learning across junior secondary physics topics.",
    category: "education",
    date: "February 28, 2025",
    meta: "4 min read",
  },
  {
    title:
      "Sub-12ms WebXR on 4G Rails: Overcoming Intermittent Fiber in Rural County Hospitals",
    summary:
      "Practical approaches to resilient immersive systems when network access varies between facilities.",
    category: "engineering",
    date: "February 20, 2025",
    meta: "7 min read",
  },
  {
    title:
      "Digitizing Maasai Artifacts: Sovereign Photogrammetry and Cultural Preservation",
    summary:
      "Why community participation and control belong at the centre of digital heritage work.",
    category: "civic",
    date: "February 12, 2025",
    meta: "6 min read",
  },
  {
    title: "Haptic Resistance Calibration in Neonatal Emergency Simulation",
    summary:
      "A closer look at how clinical experts can guide the design and review of simulation scenarios.",
    category: "health",
    date: "January 30, 2025",
    meta: "8 min read",
  },
  {
    title:
      "What Hospital Administrators Need to Know Before Investing in Spatial Headsets",
    summary:
      "Questions to ask about facility fit, staff training, content governance, and long-term support.",
    category: "basics",
    date: "January 16, 2025",
    meta: "5 min read",
  },
  {
    title:
      "EdgePod Architecture: Why Standalone Micro-Servers Beat Cloud-Only VR",
    summary:
      "A deployment note on local caching and institutional access in low-bandwidth settings.",
    category: "engineering",
    date: "January 8, 2025",
    meta: "9 min read",
  },
]

const articleCategories = [
  { value: "all", label: "All posts" },
  { value: "health", label: "Healthcare XR" },
  { value: "education", label: "Education and TVET" },
  { value: "civic", label: "Civic social" },
  { value: "basics", label: "Immersive tech 101" },
  { value: "engineering", label: "Engineering" },
]

export function BlogPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Editorial and thought leadership"
        title="Ideas for a reimagined Kenya"
        description="Deep dives into spatial computing, clinical VR simulation, CBC educational tele-presence, and local technological sovereignty across East Africa."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Blog" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Peer-reviewed field trials</Badge>
          <Badge variant="outline">Kenyan institutional perspectives</Badge>
          <Badge variant="outline">Education and healthcare</Badge>
        </div>
      </PageHero>
      <ContentSection
        id="featured"
        eyebrow="Research spotlight"
        title="Zero-latency surgical tele-proctoring: a clinical VR cohort"
      >
        <Card className="overflow-hidden border-border bg-card text-card-foreground lg:grid lg:grid-cols-2">
          <div className="relative min-h-64 bg-muted lg:min-h-[400px]">
            <Image
              src={homepageImages.hero}
              alt="Clinical team exploring a spatial medical simulation"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 p-5 sm:p-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Healthcare XR</Badge>
                <Badge variant="outline">
                  <Clock3 aria-hidden="true" className="mr-1 size-3" /> 6 min
                  read
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground sm:text-3xl">
                Zero-Latency Surgical Tele-Proctoring: How Kenyatta National
                Hospital is Pioneering Laparoscopic VR Cohorts
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                An examination of clinical protocols, local edge-caching
                hardware, and data governance considerations behind multi-user
                procedural rehearsal.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Dr. Amina Ochieng
                </p>
                <p className="text-xs text-muted-foreground">
                  Clinical simulation | March 14, 2025
                </p>
              </div>
              <Button
                nativeButton={false}
                render={<Link href="#recent-dispatches" />}
                className="h-10 gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
              >
                Read article <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Card>
      </ContentSection>
      <ContentSection
        id="recent-dispatches"
        eyebrow="Peer-reviewed insights"
        title="Recent dispatches and technical reports"
        tone="muted"
      >
        <FilterableFeed
          items={articleItems}
          categories={articleCategories}
          placeholder="Search research and protocols"
        />
      </ContentSection>
    </main>
  )
}
