"use client"

import Link from "next/link"

import { ArrowRight, CalendarDays, UsersRound } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, PageHero } from "@/components/shared"

import {
  FilterableFeed,
  type EditorialItem,
} from "@/components/editorial/editorial-feed"

const eventItems: EditorialItem[] = [
  {
    title:
      "KMPDC Clinical Simulation Masterclass: Minimally Invasive Laparoscopy in VR",
    summary:
      "A clinical learning session exploring procedural rehearsal and haptic interaction.",
    category: "upcoming",
    date: "April 4, 2025 | 09:30 EAT",
    meta: "Hybrid, Nairobi",
  },
  {
    title: "CBC Junior Secondary STEM: Synchronous Virtual Chemistry Labs",
    summary:
      "A practical briefing on curriculum-aligned virtual science activities for schools.",
    category: "upcoming",
    date: "April 15, 2025 | 14:00 EAT",
    meta: "Virtual webinar",
  },
  {
    title: "East Africa HealthTech Summit 2025: Tele-surgical Haptics",
    summary:
      "A keynote on clinical simulation, remote collaboration, and spatial interfaces.",
    category: "upcoming",
    date: "May 8, 2025 | 10:00 EAT",
    meta: "Nairobi, Kenya",
  },
  {
    title: "Spatial Anesthesia Planning: Pediatric VR Case Studies",
    summary:
      "On-demand session discussing virtual rehearsal for pediatric care scenarios.",
    category: "archive",
    date: "Recorded February 2025",
    meta: "Recording",
  },
  {
    title: "Decentralized Spatial Campuses: Engineering Curricula",
    summary:
      "A technical conversation about delivering practical learning across campuses.",
    category: "archive",
    date: "Recorded January 2025",
    meta: "Recording",
  },
  {
    title: "Spatial Digital Twins for County Urban Drainage",
    summary:
      "An introduction to shared spatial models for planning and civic infrastructure.",
    category: "archive",
    date: "Recorded December 2024",
    meta: "Recording",
  },
]

const eventCategories = [
  { value: "all", label: "All events" },
  { value: "upcoming", label: "Upcoming" },
  { value: "archive", label: "On-demand archive" },
]

const recurringSpeakers: [string, string][] = [
  ["Kariuki Mwangi", "Chief Executive Officer"],
  ["Dr. Amina Ochieng", "Lead Medical Advisor"],
  ["Wanjiku Njeri", "Head of Spatial Architecture"],
  ["David Kiplagat", "Spatial Pedagogy Lead"],
]

export function EventsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Live knowledge sharing"
        title="Learn with us, live and on-demand"
        description="Masterclasses, clinical simulation symposiums, spatial education briefings, and WebXR webinars designed for African institutional scale."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Events and webinars" },
        ]}
      />
      <ContentSection
        eyebrow="Featured webinar"
        title="Architecting sovereign spatial systems"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Upcoming webinar</Badge>
                <Badge variant="outline">
                  <CalendarDays aria-hidden="true" className="mr-1 size-3" />{" "}
                  March 27, 2025 | 15:00 EAT
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground">
                Architecting Sovereign Spatial Systems: Overcoming Low-Bandwidth
                Infrastructure in East Africa
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore edge caching, progressive WebXR delivery, and
                responsible institutional data practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Offline edge telemetry</Badge>
                <Badge variant="outline">Progressive WebXR</Badge>
                <Badge variant="outline">Data governance</Badge>
              </div>
              <div className="flex flex-wrap gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
                <span>Kariuki Mwangi, CEO</span>
                <span>Wanjiku Njeri, Spatial Architecture</span>
                <span>Guest moderator</span>
              </div>
            </div>
            <Card className="border-border bg-muted/50 text-card-foreground">
              <CardHeader>
                <CardTitle className="text-foreground">Event details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-start gap-2 text-muted-foreground">
                  <CalendarDays
                    aria-hidden="true"
                    className="mt-0.5 size-4 text-primary"
                  />{" "}
                  Online | Nairobi time (UTC+3)
                </p>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <UsersRound
                    aria-hidden="true"
                    className="mt-0.5 size-4 text-primary"
                  />{" "}
                  Open to institutional teams
                </p>
                <Button
                  nativeButton={false}
                  render={
                    <Link href="mailto:info@swizzy.co.ke?subject=Webinar%20registration" />
                  }
                  className="mt-2 h-10 w-full gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
                >
                  Register interest <ArrowRight aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection eyebrow="Events and recordings" title="Find a session">
        <FilterableFeed
          items={eventItems}
          categories={eventCategories}
          placeholder="Search sessions and topics"
        />
      </ContentSection>
      <ContentSection
        eyebrow="Recurring speakers"
        title="People sharing practical experience"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recurringSpeakers.map(([name, role]) => (
            <Card
              key={name}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-2 p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  {name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {name}
                </h3>
                <p className="text-xs text-muted-foreground">{role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Host a technical briefing"
        title="Bring a practical question to the conversation"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We work with institutions and technical communities to host
              focused sessions about spatial computing in practice.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Discuss a briefing <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
