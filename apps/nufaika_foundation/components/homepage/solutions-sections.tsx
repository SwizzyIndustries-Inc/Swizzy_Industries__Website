"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  GraduationCap,
  HeartPulse,
  Home,
  MapPin,
  Star,
} from "lucide-react"
import { useState } from "react"
import type { LucideIcon } from "lucide-react"

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

type Category = {
  title: string
  description: string
  href: string
  count: string
  icon: LucideIcon
  color: string
}
const categories: Category[] = [
  {
    title: "Home & Trade",
    description: "Plumbing, solar, electrical, masonry, and repairs.",
    href: "/categories/home-trade",
    count: "380+ providers",
    icon: Home,
    color: "var(--chart-1)",
  },
  {
    title: "Skills & Tutoring",
    description: "KCSE and IGCSE support, languages, and vocational skills.",
    href: "/categories/skills-tutoring",
    count: "260+ tutors",
    icon: GraduationCap,
    color: "var(--chart-2)",
  },
  {
    title: "Professional & Business",
    description: "Accounting, legal support, design, and business services.",
    href: "/categories/professional",
    count: "190+ professionals",
    icon: BriefcaseBusiness,
    color: "var(--chart-3)",
  },
  {
    title: "Creative & Events",
    description: "Photography, catering, sound, decor, and event services.",
    href: "/categories/creative-care",
    count: "210+ providers",
    icon: Camera,
    color: "var(--chart-4)",
  },
  {
    title: "Care & Wellness",
    description: "Eldercare, fitness, wellness, and personal care.",
    href: "/categories/creative-care",
    count: "140+ providers",
    icon: HeartPulse,
    color: "var(--chart-5)",
  },
]

type Provider = {
  category: string
  type: string
  name: string
  role: string
  rating: string
  reviews: string
  location: string
  description: string
  rateLabel: string
  rate: string
  action: string
  image: string
  alt: string
}
const providers: Provider[] = [
  {
    category: "home",
    type: "Home & Trade",
    name: "John Mwangi",
    role: "Certified master electrician",
    rating: "4.9",
    reviews: "124 reviews",
    location: "Kilimani, Nairobi",
    description:
      "EPRA Class B licensed. Residential wiring, solar backups, and three-phase troubleshooting.",
    rateLabel: "Starting rate",
    rate: "KES 1,800 / visit",
    action: "Book provider",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1eNm_qT5G2Q0lRhITwdkhevRDdLm18SDFhlpwOXRoQQT6cjXQYMiyG9EwYKy5Hv8zdn7T3xaLr1iQR2FouGqRUE_gbHdgcnxz2zabqZwv6Rjy-c2cFv_Vog_uEUK4v17mmPfbX9au2cuOVuOw4MeuH-F7NcYqo9K2iJV_yv-N1zn8W4SWleluNgVWvGjDmCpblVX8QEIYDobvpfuvO36mpf1bO4yVaojJs_OKfcNET9Hn3PmtNAH-",
    alt: "Kenyan electrician checking an electrical panel at a Nairobi worksite",
  },
  {
    category: "tutoring",
    type: "Skills & Tutoring",
    name: "Faith Chebet",
    role: "High school & A-level math tutor",
    rating: "5.0",
    reviews: "98 reviews",
    location: "Westlands / Online",
    description:
      "Applied mathematics graduate supporting KCSE and Cambridge IGCSE learners.",
    rateLabel: "Session rate",
    rate: "KES 1,200 / hour",
    action: "Book session",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ogtQT-e316Du38HoVMycdenklyrv8QFC4QgcPoobxnwECWBdzWjKot1o4SziOG4t4BkXtoQB3NTqd1qT83TSXNmzGMqb5lePXjrLNM-6oV_iOVFMtbcjAAwB5HdhoM5xkWZtoEuClenaTWLIgm38aUr9joKMxA8mLONEI2YTriIKO_V-Hm4WK-kndqNIZ64Y4MRl2ctwm6DNe8syoIST-B5oA1MytxddYTQaswBhYT1mcmOIw4U",
    alt: "Kenyan mathematics tutor holding a tablet in a bright classroom",
  },
  {
    category: "creative",
    type: "Creative & Events",
    name: "David Ochieng",
    role: "Commercial photographer",
    rating: "4.8",
    reviews: "87 reviews",
    location: "Nairobi & Coast",
    description:
      "Event documentaries, real estate photography, and brand shoots.",
    rateLabel: "Starting package",
    rate: "KES 15,000 / event",
    action: "View profile",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYzvipHa3moJL-_PPxdpv_uEjvjN0DSmQX25FcYsHXeKRu7ZKDykN8TYHkWO8iaCcrXpxaJmlTgfTQb_E8ede_kV-idsKeWj_5LjFw7sxQkA4qb36Scfe0VrlZU2iPgrwFYdfGFKQvuiqz4y24g-lu7ldw1K-FgZ00oeQoSc5TwvTMQAuD_93hd7EQX0uGDXDmEk7EYUVi0QBifDSTJl9Ns1bl94pJfaBFNrWmnufQG80VYOLJkmEh",
    alt: "Nairobi photographer holding a professional camera outdoors",
  },
  {
    category: "business",
    type: "Professional & Business",
    name: "Amina Hassan",
    role: "CPA-K financial consultant",
    rating: "4.9",
    reviews: "64 reviews",
    location: "Upper Hill, Nairobi",
    description:
      "SME bookkeeping, VAT reconciliation, and corporate tax support.",
    rateLabel: "Base package",
    rate: "KES 4,500 / filing",
    action: "Hire advisor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqiKTs9MQHbRyJiSmn6cOa5HnlnsHygW5u1cCggaMgqyeGz10DbgiALH6QuWJb1yIBjIFZzZmg7jvm5fxv420JZWJfPnIh-x9nP7jvkepHnEqGKCWvF8MuoarifHSG5hJ5CrYxP0a10UgXxamSyUsrdWoSs48D0596hg_-nrkW-gQo2JLNKVjogpj8022BXTUwGhfaWgytNKAlmF-fwwOqMKdpN6BSif_vdLrrHW2bgQh83BfikstC",
    alt: "Kenyan consultant working at a desk in a Nairobi office",
  },
]

const providerFilters = [
  { value: "all", label: "All featured" },
  { value: "home", label: "Home repairs" },
  { value: "tutoring", label: "Academic tutors" },
  { value: "creative", label: "Creative pros" },
]

export function CategoriesSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] space-y-8 px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Categorized specializations", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Explore Kenya's verified talent ecosystem", language)}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {translate(
                "From home infrastructure to digital learning, find the right skills with clear service details.",
                language
              )}
            </p>
          </div>
          <Button
            render={<Link href="/categories" />}
            nativeButton={false}
            variant="ghost"
            className="w-fit px-0"
          >
            {translate("View all services", language)}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map(
            ({ title, description, href, count, icon: Icon, color }) => (
              <Card
                key={title}
                className="rounded-lg border-t-2 transition-shadow hover:shadow-md"
                style={{ borderTopColor: color }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid size-11 place-items-center rounded-lg bg-primary/10"
                      style={{ color }}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="secondary" className="rounded-md text-xs">
                      {translate(count, language)}
                    </Badge>
                  </div>
                  <CardTitle className="pt-2 text-base">
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
                    {translate("Explore category", language)}
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

export function FeaturedProvidersSection() {
  const [filter, setFilter] = useState("all")
  const { language } = useLanguage()
  const visibleProviders =
    filter === "all"
      ? providers
      : providers.filter((provider) => provider.category === filter)

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] space-y-8 px-5 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Top rated talent", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Verified specialists on Nufaika today", language)}
            </h2>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="h-auto w-full flex-wrap justify-start lg:w-auto">
              {providerFilters.map((item) => (
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
          {visibleProviders.map((provider) => (
            <Card key={provider.name} className="overflow-hidden rounded-lg">
              <ImagePanel
                src={provider.image}
                alt={translate(provider.alt, language)}
                className="aspect-[1.4] w-full bg-muted"
              />
              <CardHeader className="gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">
                      {translate(provider.name, language)}
                    </CardTitle>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {translate(provider.role, language)}
                    </p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 rounded-md">
                    <BadgeCheck aria-hidden="true" data-icon="inline-start" />
                    {translate("Verified", language)}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1">
                    <Star
                      aria-hidden="true"
                      className="size-3.5 fill-secondary text-secondary"
                    />
                    <strong>{provider.rating}</strong>
                    <span className="text-muted-foreground">
                      ({translate(provider.reviews, language)})
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <MapPin aria-hidden="true" className="size-3.5" />
                    {translate(provider.location, language)}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {translate(provider.description, language)}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between gap-2 rounded-md bg-muted p-2.5 text-xs">
                  <span className="text-muted-foreground">
                    {translate(provider.rateLabel, language)}
                  </span>
                  <strong>{translate(provider.rate, language)}</strong>
                </div>
                <Button
                  render={<Link href="/search" />}
                  nativeButton={false}
                  className="w-full"
                >
                  {translate(provider.action, language)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
