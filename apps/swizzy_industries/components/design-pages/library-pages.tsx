"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  Building2,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  HeartPulse,
  Image as ImageIcon,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { Input } from "@workspace/ui/components/input"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { homepageImages } from "@/components/homepage/shared"
import {
  ContentSection,
  FeatureCard,
  PageCta,
  PageHero,
} from "@/components/design-pages/shared"

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
        title="Everything you need to understand Swizzy"
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
      <PageCta
        title="Looking for something specific?"
        description="Tell us which documents or information would help your team."
        href="/contact"
        action="Request a resource"
      />
    </main>
  )
}

const pressFacts = [
  ["Company", "Swizzy Industries Ltd"],
  ["Tagline", "Kenya reimagined through immersive technology"],
  ["Headquarters", "Nairobi, Kenya"],
  ["Product areas", "Tibika, Elimika, and Jumuika"],
]

export function PressKitPage() {
  const [copied, setCopied] = useState(false)
  const boilerplate =
    "Swizzy Industries is a Kenya-based technology company developing immersive tools for health, education, and community."

  async function copyBoilerplate() {
    await navigator.clipboard.writeText(boilerplate)
    setCopied(true)
  }

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Press and media kit"
        title="Brand assets and media resources"
        description="Find approved company facts and request current brand assets for editorial, event, and partnership use."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Press kit" },
        ]}
      >
        <Button
          nativeButton={false}
          render={
            <Link href="mailto:info@swizzy.co.ke?subject=Press%20kit%20request" />
          }
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Request full press kit <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection eyebrow="Quick facts" title="Company information">
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
            {pressFacts.map(([label, value]) => (
              <div key={label} className="space-y-1">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="text-sm font-medium text-foreground">{value}</p>
              </div>
            ))}
            <div className="space-y-2 border-t border-border pt-4 sm:col-span-2">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Short boilerplate
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {boilerplate}
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={copyBoilerplate}
                className="h-9 gap-2"
              >
                {copied ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy boilerplate"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Brand identity"
        title="Approved assets and usage"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">Logo files</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Current production-ready SVG, PNG, and print files are shared by
                request to ensure you receive approved assets.
              </p>
              <Button
                nativeButton={false}
                render={
                  <Link href="mailto:info@swizzy.co.ke?subject=Logo%20asset%20request" />
                }
                variant="outline"
                className="h-10 gap-2"
              >
                Request logo assets <Download aria-hidden="true" />
              </Button>
            </CardContent>
          </Card>
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">
                Usage guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Keep clear space around the mark.",
                  "Do not recolor or distort approved artwork.",
                  "Use the right logo variant for the background.",
                  "Request permission before implying endorsement.",
                ].map((rule) => (
                  <li key={rule} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      className="size-4 shrink-0 text-teal-accent"
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Brand palette"
        title="Core colors and typography"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Swizzy Blue", "#1B5FC1", "bg-blue-primary"],
            ["Deep Navy", "#0A1F44", "bg-navy-deep"],
            ["Immersion Teal", "#12A5B4", "bg-teal-accent"],
            ["Savannah Amber", "#F2A63B", "bg-savannah-amber"],
          ].map(([name, hex, color]) => (
            <Card
              key={name}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex items-center gap-3 p-4">
                <span className={`size-10 rounded-lg ${color}`} />
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {name}
                  </span>
                  <span className="text-xs text-muted-foreground">{hex}</span>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Headings: Plus Jakarta Sans. Body and UI: Inter.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="Media contact"
        title="Need an interview or approved image?"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading font-semibold text-foreground">
                Swizzy Industries media desk
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Nairobi, Kenya | info@swizzy.co.ke
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
              Contact media desk <ExternalLink aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}

const galleryItems = [
  {
    title: "Clinical simulation learning",
    category: "Health",
    kind: "Photo",
    src: homepageImages.hero,
    alt: "Clinical team exploring a spatial medical simulation",
  },
  {
    title: "Spatial technology in practice",
    category: "Behind the scenes",
    kind: "Photo",
    src: homepageImages.technology,
    alt: "Trainee examining a three-dimensional medical simulation",
  },
  {
    title: "Engineering for local contexts",
    category: "Behind the scenes",
    kind: "Photo",
    src: homepageImages.insightHardware,
    alt: "Engineering equipment used in a spatial technology lab",
  },
  {
    title: "Learning through immersive science",
    category: "Education",
    kind: "Photo",
    src: homepageImages.insightEducation,
    alt: "Learners exploring an immersive science lesson",
  },
  {
    title: "Community and creative spaces",
    category: "Socialization",
    kind: "Photo",
    src: homepageImages.insightCommunity,
    alt: "A collaborative creative space for a community event",
  },
  {
    title: "Clinical training pilot",
    category: "Events",
    kind: "Photo",
    src: homepageImages.caseStudy,
    alt: "Biomedical technician working with spatial equipment",
  },
]

const galleryFilters = [
  "All",
  "Health",
  "Education",
  "Socialization",
  "Events",
  "Behind the scenes",
]

export function GalleryPage() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<
    (typeof galleryItems)[number] | null
  >(null)
  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter)

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Gallery"
        title="Moments from Kenya's immersive journey"
        description="Explore the people, places, and ideas behind Swizzy's work. Images shown are design previews; production galleries require approved media and consent."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Gallery" },
        ]}
      />
      <ContentSection
        eyebrow="Gallery"
        title="Explore moments from the work"
        tone="muted"
      >
        <Tabs
          value={filter}
          onValueChange={(value) => setFilter(value ?? "All")}
        >
          <TabsList className="mb-5 h-auto flex-wrap justify-start bg-muted p-1">
            {galleryFilters.map((value) => (
              <TabsTrigger key={value} value={value} className="min-h-9 px-3">
                {value}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelected(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                <span className="block font-semibold">{item.title}</span>
                <span className="mt-1 flex items-center gap-2 text-xs text-white/80">
                  <ImageIcon aria-hidden="true" className="size-3.5" />
                  {item.category} | {item.kind}
                </span>
              </span>
            </button>
          ))}
        </div>
      </ContentSection>
      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <DialogContent className="max-w-4xl border-border bg-card p-3 text-card-foreground sm:p-4">
          <DialogHeader className="px-2 pt-1">
            <DialogTitle className="text-foreground">
              {selected?.title}
            </DialogTitle>
            <DialogDescription>
              {selected?.category} | {selected?.kind}
            </DialogDescription>
          </DialogHeader>
          {selected ? (
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                unoptimized
                sizes="90vw"
                className="object-contain"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
      <ContentSection eyebrow="Share a moment" title="Have a story to share?">
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We welcome approved partner stories and images. Please do not send
              identifiable patient or child imagery without the required
              consent.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact?subject=gallery" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Share with Swizzy <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Be part of the next chapter"
        description="Partner with Swizzy to create useful immersive experiences."
        href="/contact"
        action="Share your story"
      />
    </main>
  )
}
