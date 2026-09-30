"use client"

import Link from "next/link"
import { CalendarDays, Clock3 } from "lucide-react"
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

const zones = ["EAT", "GMT", "EST", "PST"]
const events = [
  {
    category: "Music & Acoustic",
    title: "Diaspora Jam Session: Benga meets Afro-House",
    description:
      "A live spatial audio set with musicians joining from Nairobi and London.",
    times: {
      EAT: "Tomorrow · 8:00 PM",
      GMT: "Tomorrow · 6:00 PM",
      EST: "Tomorrow · 1:00 PM",
      PST: "Tomorrow · 10:00 AM",
    },
  },
  {
    category: "Storytelling & Arts",
    title: "Sheng Literature & Storytelling Circle",
    description:
      "Urban language, contemporary poetry, and open-mic reflections.",
    times: {
      EAT: "Saturday · 4:00 PM",
      GMT: "Saturday · 2:00 PM",
      EST: "Saturday · 9:00 AM",
      PST: "Saturday · 6:00 AM",
    },
  },
  {
    category: "Sports Watch Party",
    title: "Premier League Watch Party",
    description:
      "A shared big-screen lounge with live fan reactions and banter corners.",
    times: {
      EAT: "Sunday · 6:30 PM",
      GMT: "Sunday · 4:30 PM",
      EST: "Sunday · 11:30 AM",
      PST: "Sunday · 8:30 AM",
    },
  },
]

export function UpcomingEventsSection() {
  const [zone, setZone] = useState("EAT")
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold text-secondary uppercase">
              {translate("Community calendar", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Gatherings on the horizon", language)}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {translate("Timezone", language)}
            </span>
            <Tabs value={zone} onValueChange={setZone}>
              <TabsList>
                {zones.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} className="rounded-xl">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="secondary" className="rounded-md">
                    {translate(event.category, language)}
                  </Badge>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    <Clock3 aria-hidden="true" className="size-3.5" />
                    {translate(
                      event.times[zone as keyof typeof event.times],
                      language
                    )}{" "}
                    {zone}
                  </span>
                </div>
                <CardTitle className="text-base">
                  {translate(event.title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(event.description, language)}
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  render={<Link href="/events/upcoming" />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full"
                >
                  <CalendarDays aria-hidden="true" data-icon="inline-start" />
                  {translate("Reserve a place", language)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
