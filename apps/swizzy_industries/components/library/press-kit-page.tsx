"use client"

import Link from "next/link"

import { useState } from "react"

import { ArrowRight, Check, Copy, Download, ExternalLink } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, PageHero } from "@/components/shared"

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
            <Link href="mailto:info@swizzyindustries.co.ke?subject=Press%20kit%20request" />
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
                  <Link href="mailto:info@swizzyindustries.co.ke?subject=Logo%20asset%20request" />
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
                Nairobi, Kenya | info@swizzyindustries.co.ke
              </p>
            </div>
            <Button
              nativeButton={false}
              render={
                <Link href="mailto:info@swizzyindustries.co.ke?subject=Media%20inquiry" />
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
