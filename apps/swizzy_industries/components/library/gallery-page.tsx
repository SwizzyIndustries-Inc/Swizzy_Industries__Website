"use client"

import Image from "next/image"

import Link from "next/link"

import { useState } from "react"

import { ArrowRight, Image as ImageIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { homepageImages } from "@/components/homepage/shared"

import { ContentSection, PageHero } from "@/components/shared"

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
        description="Explore the people, places, and ideas behind Swizzy Industries' work. Images shown are design previews; production galleries require approved media and consent."
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
              Share with Swizzy Industries <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
