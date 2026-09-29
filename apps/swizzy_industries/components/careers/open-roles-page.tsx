"use client"

import Link from "next/link"

import { useMemo, useState } from "react"

import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { ContentSection, PageHero } from "@/components/shared"

type Job = {
  title: string
  department: string
  location: string
  type: string
  slug: string
}

const publishedJobs: Job[] = []

export function OpenRolesPage() {
  const [query, setQuery] = useState("")
  const [department, setDepartment] = useState("all")
  const roles = useMemo(
    () =>
      publishedJobs.filter((job) => {
        const matchesDepartment =
          department === "all" || job.department === department
        const matchesQuery = `${job.title} ${job.department} ${job.location}`
          .toLowerCase()
          .includes(query.toLowerCase())
        return matchesDepartment && matchesQuery
      }),
    [department, query]
  )

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Open roles"
        title="Find your place at Swizzy Industries"
        description="Explore current opportunities to build immersive technology with a team rooted in local needs."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Open roles" },
        ]}
      />
      <ContentSection
        eyebrow={`${roles.length} published roles`}
        title="Search opportunities"
        tone="muted"
      >
        <div className="grid gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search roles"
              placeholder="Search title, team, location"
              className="h-10 pl-9"
            />
          </div>
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            aria-label="Filter by department"
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
          >
            <option value="all">All departments</option>
            {[
              "Engineering",
              "Product",
              "Health",
              "Education",
              "Operations",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        {roles.length ? (
          <div className="mt-4 space-y-3">
            {roles.map((job) => (
              <Card
                key={job.slug}
                className="border-border bg-card text-card-foreground"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">
                        <MapPin aria-hidden="true" className="mr-1 size-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                  <Button
                    nativeButton={false}
                    render={<Link href={`/careers/open-roles/${job.slug}`} />}
                    variant="outline"
                    className="h-10 gap-2"
                  >
                    View role <ArrowRight aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-4 border-border bg-card text-card-foreground">
            <CardContent className="space-y-3 py-10 text-center">
              <BriefcaseBusiness
                aria-hidden="true"
                className="mx-auto size-8 text-primary"
              />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                No open roles are currently published
              </h3>
              <p className="mx-auto max-w-lg text-sm text-muted-foreground">
                There are no listings matching those filters. Join the talent
                community to hear about future roles.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/careers/talent-community" />}
                variant="outline"
                className="h-10"
              >
                Join the talent community
              </Button>
            </CardContent>
          </Card>
        )}
      </ContentSection>
      <ContentSection
        eyebrow="Recruitment notice"
        title="Hiring should always be transparent"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex items-start gap-3 p-5">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-teal-accent"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Swizzy Industries does not ask candidates to pay application,
              interview, or recruitment fees. Verify opportunities through our
              official contact channels.
            </p>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
