"use client"

import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Music2,
  UsersRound,
} from "lucide-react"

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
import { ImagePanel } from "@/components/homepage/shared"
import { useState } from "react"

const gatheringTypes = [
  {
    title: "Family & Friends",
    body: "Private rooms for staying close with people you already know. Birthdays, tea times, and everyday drop-ins.",
    tag: "Private by design",
    icon: Heart,
    href: "/spaces/family-friends",
    color: "var(--chart-1)",
  },
  {
    title: "Diaspora & Heritage",
    body: "Cultural lounges connecting Kenyans abroad with home, language, and traditions.",
    tag: "Community hubs",
    icon: UsersRound,
    href: "/spaces/diaspora-heritage",
    color: "var(--chart-2)",
  },
  {
    title: "Interest Communities",
    body: "Book circles, music rooms, cooking sessions, and shared passions in virtual spaces.",
    tag: "Public community",
    icon: BookOpenIcon,
    href: "/spaces/interests",
    color: "var(--chart-3)",
  },
  {
    title: "Events & Gatherings",
    body: "Live concerts, town halls, watch parties, and community celebrations.",
    tag: "Live stages",
    icon: CalendarDays,
    href: "/events",
    color: "var(--chart-4)",
  },
]

function BookOpenIcon(props: React.ComponentProps<typeof UsersRound>) {
  return <Music2 {...props} />
}

const liveSpaces = [
  {
    category: "events",
    title: "Nairobi Rooftop Sundowner",
    description: "Deep house, skyline views, and open mixer tables.",
    type: "Events & Gatherings",
    count: "142 people",
    status: "Live",
    action: "Join in VR / Browser",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7kNwCMVs4BriGfvBFNLikQzU-Rxulrn2elo5Wl-PS60nYUfBCymqM6Bdc_kzgxwPHSAc-4Yx7nUcQeoUkVBSCY-tHh4EpoES9tMAl2WReaiTmiyB9EjKzDl3qIkGhB2Ru98UIp4p7jVRZkLQ5o7My-nhJwO3-XX-PNm5HEaM_jPmAOscYAmGgmJfrbpQtRTtg-GsDgdoeM3Jt1552hXgQ5IpjYPv0ya7h9XMJPLFQJZoS-ePdXpz",
    alt: "Nairobi rooftop gathering at sunset with people sharing a relaxed evening",
  },
  {
    category: "heritage",
    title: "London & Nairobi Sunday Chai",
    description: "A weekly storytelling circle across GMT and EAT.",
    type: "Diaspora & Heritage",
    count: "18 people",
    status: "Members Only",
    action: "Request Invite",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkXRrOMxSTwV3BwhN9Fbi7dUZt4uGawNMwTd8Pcy5uFXzYa1uVFgl63QItLRM_H5Hjib1BtBSdZ37JLYCjF3bqrQIBCBDBKRjGMOhyFo7q2hw65SeGUYHXOPfeXGZoYO3_MPfnnc05xPkERL6muhTcjV40uwAg6mX7kONXAzPeQSqIoN08F194dm_xJvzz6BH96qHzDVwEi8mMWCIEMHa2mIvJeOWEqDaP0FTZrWwM1nDD_GyTt7xF",
    alt: "Tea cups and pastries set on a sunlit table for friends joining from afar",
  },
  {
    category: "interests",
    title: "Silikali Tech & Founders Jam",
    description: "Demo-day practice, funding tips, and product feedback.",
    type: "Interest Communities",
    count: "56 people",
    status: "Open Stage",
    action: "Listen In",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnY2Qoz2vegaxLQUQ7bVC5t0R54FoOAIDriiUiMFRlFclbEWISd4ElLBQGeJEglnsPYWaCqfYuB_tUqKiS6CWR-6-8QW2S99Xrx-WlhRF2Fi4FzAgxJZOV_opoLjVWkaiMPtHxCaDZtv_dJ063hF_l6_EFxnrfjuHAX4fMayRQ1AAI_IZgcAASgE0FCX6My85A9UlTBYEZMiNuf2KhlXdzHrA2e13OA-ZwSxOI_62CguJlxMUnc9fX",
    alt: "A collaborative Nairobi technology studio with engineers sharing ideas",
  },
  {
    category: "family",
    title: "Kariuki Family Lounge",
    description: "A persistent family room for photos, notes, and catch-ups.",
    type: "Family & Friends",
    count: "8 family members",
    status: "Encrypted Private",
    action: "Private Lounge",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY9X9iBXHTIKJDf6_veRMSnc-RzX_oM5pVPZlcmAWb3GDjNMoUdHvXa1PzYx4uFkhlGKOA9AAUvFnwf2tnLayMEbRxVkW4dpVq1jpdH7JVpKQOGDoftWgz8H5a1IH6_wNByH5UciZvtMJmdclmasC0lVyDM5VmX_f2RwD6Y06DECM2Z4jV56oxNgA6VHtDJU6BdmqFzuH-mCFiCHVZX7TIDqoU-6Y_l98ve46RDXOn5hE0-J3vi6Pw",
    alt: "A comfortable family lounge with framed photos and warm afternoon light",
  },
]

const liveFilters = [
  { value: "all", label: "All spaces" },
  { value: "events", label: "Events" },
  { value: "heritage", label: "Heritage" },
  { value: "interests", label: "Interest circles" },
  { value: "family", label: "Family" },
]

export function SpaceTypesSection() {
  const { language } = useLanguage()
  return (
    <section id="space-types" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold text-primary uppercase">
              {translate("Designed for real living", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Every gathering has a home", language)}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {translate(
              "Whether you want a private room for family or a lively gathering for your community, choose a space designed for human warmth.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gatheringTypes.map(
            ({ title, body, tag, icon: Icon, href, color }) => (
              <Card
                key={title}
                className="group rounded-xl transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid size-11 place-items-center rounded-lg bg-primary/10"
                      style={{ color }}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="secondary" className="rounded-md">
                      {translate(tag, language)}
                    </Badge>
                  </div>
                  <CardTitle className="pt-2 text-lg">
                    {translate(title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(body, language)}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    render={<Link href={href} />}
                    nativeButton={false}
                    variant="link"
                    className="h-9 px-0"
                  >
                    {translate("Browse Spaces", language)}
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export function LiveSpacesSection() {
  const { language } = useLanguage()
  const [filter, setFilter] = useState("all")
  const spaces =
    filter === "all"
      ? liveSpaces
      : liveSpaces.filter((space) => space.category === filter)

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="secondary" className="mb-3 rounded-full">
              <span className="mr-2 size-2 rounded-full bg-secondary" />
              {translate("Active right now", language)}
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Spaces buzzing right now", language)}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {translate("Live cross-border latency:", language)}{" "}
              <strong className="text-foreground">
                14ms {translate("average", language)}
              </strong>
            </p>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="h-auto w-full flex-wrap justify-start lg:w-auto">
              {liveFilters.map((item) => (
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spaces.map((space) => (
            <Card key={space.title} className="overflow-hidden rounded-xl">
              <ImagePanel
                src={space.image}
                alt={translate(space.alt, language)}
                className="aspect-[1.55] w-full bg-muted"
              />
              <CardHeader className="gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="outline" className="rounded-md">
                    {translate(space.type, language)}
                  </Badge>
                  <Badge
                    variant={space.status === "Live" ? "default" : "secondary"}
                    className="rounded-md"
                  >
                    {translate(space.status, language)}
                  </Badge>
                </div>
                <CardTitle className="text-base">
                  {translate(space.title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(space.description, language)}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <UsersRound
                    aria-hidden="true"
                    className="size-4 text-primary"
                  />
                  <span>
                    {translate(space.count, language)}{" "}
                    {translate("are here now", language)}
                  </span>
                </div>
                <Button
                  render={<Link href="/spaces/live" />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full"
                  disabled={space.category === "family"}
                >
                  {translate(space.action, language)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
