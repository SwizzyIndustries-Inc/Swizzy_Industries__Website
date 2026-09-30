"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  HandCoins,
  Megaphone,
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
    icon: UsersRound,
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
