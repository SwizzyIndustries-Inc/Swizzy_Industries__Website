"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  HandCoins,
  MapPin,
  Megaphone,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { translate, useLanguage } from "@/components/language-provider"

const areas = [
  {
    title: "Economy & livelihoods",
    description: "Work, trade, household costs, and local livelihoods.",
    href: "/issues/economy",
    icon: HandCoins,
    color: "var(--chart-3)",
  },
  {
    title: "Politics & governance",
    description: "Representation, public services, and accountability.",
    href: "/issues/governance",
    icon: BarChart3,
    color: "var(--chart-1)",
  },
  {
    title: "Social norms",
    description: "Inclusion, dignity, and community wellbeing.",
    href: "/issues/social-norms",
    icon: ShieldCheck,
    color: "var(--chart-4)",
  },
  {
    title: "Community voice",
    description: "Local concerns connected to place and community.",
    href: "/issues/community-voice",
    icon: Megaphone,
    color: "var(--chart-2)",
  },
]

const dockets = [
  {
    category: "economy",
    domain: "Economy & livelihoods",
    title: "Market waste collection schedules",
    description:
      "Example of a community request to publish service schedules and oversight records.",
    source: "Illustrative community submission",
    status: "Source review",
    location: "Sample ward",
  },
  {
    category: "services",
    domain: "Governance & health",
    title: "Rural medicine supply reporting",
    description:
      "Example of a public-service issue with source notes and response milestones.",
    source: "Illustrative source log",
    status: "Response requested",
    location: "Sample county",
  },
  {
    category: "community",
    domain: "Community voice",
    title: "Pedestrian corridor lighting",
    description:
      "Example of a neighborhood request with a documented follow-up stage.",
    source: "Illustrative resident report",
    status: "Follow-up pending",
    location: "Sample neighborhood",
  },
]

const filters = [
  { value: "all", label: "All examples" },
  { value: "economy", label: "Economy" },
  { value: "services", label: "Public services" },
  { value: "community", label: "Community voice" },
]

export function IssueAreasSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Civic arenas", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Explore issues by domain", language)}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {translate(
              "Explore structured categories with clear context and public record tracking.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ title, description, href, icon: Icon, color }) => (
            <Card
              key={title}
              className="group rounded-xl transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="outline" className="rounded-md">
                    {translate(title, language)}
                  </Badge>
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    style={{ color }}
                  />
                </div>
                <CardTitle className="text-base">
                  {translate(title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  render={<Link href={href} />}
                  nativeButton={false}
                  variant="link"
                  className="h-9 px-0"
                >
                  {translate("Explore arena", language)}
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CampaignsSection() {
  const [filter, setFilter] = useState("all")
  const { language } = useLanguage()
  const visibleDockets =
    filter === "all"
      ? dockets
      : dockets.filter((docket) => docket.category === filter)
  return (
    <section
      id="active-campaigns"
      className="scroll-mt-24 bg-muted/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="secondary" className="mb-3 rounded-full">
              {translate(
                "Illustrative examples · Not live campaigns",
                language
              )}
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Active petitions & civic audits", language)}
            </h2>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="h-auto w-full flex-wrap justify-start md:w-auto">
              {filters.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="min-h-9"
                >
                  {translate(item.label, language)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {visibleDockets.map((docket) => (
            <Card key={docket.title} className="rounded-xl">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="outline" className="rounded-md">
                    {translate(docket.domain, language)}
                  </Badge>
                  <Badge variant="secondary" className="rounded-md">
                    {translate("Sample docket", language)}
                  </Badge>
                </div>
                <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {translate(docket.location, language)}
                </p>
                <CardTitle className="pt-1 text-base">
                  {translate(docket.title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(docket.description, language)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center justify-between gap-2 border-t border-border pt-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-3.5 text-primary"
                    />
                    {translate(docket.source, language)}
                  </span>
                  <span className="font-semibold text-primary">
                    {translate(docket.status, language)}
                  </span>
                </div>
                <Button
                  render={<Link href="/accountability-tracker" />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full"
                >
                  {translate("View docket stages", language)}
                  <ArrowRight aria-hidden="true" data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
