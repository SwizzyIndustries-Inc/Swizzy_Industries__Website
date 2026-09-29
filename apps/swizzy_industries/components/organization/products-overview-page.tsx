"use client"

import Link from "next/link"

import {
  ArrowRight,
  HeartPulse,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

const productAreas = [
  {
    brand: "Tibika",
    category: "Health",
    title: "Safer, smarter clinical care",
    description:
      "Immersive tools for clinical learning, equipment training, patient education, and care-team collaboration.",
    href: "/products/tibika",
    accent: "teal" as const,
    icon: HeartPulse,
  },
  {
    brand: "Elimika",
    category: "Education",
    title: "Practical learning for every learner",
    description:
      "Virtual science labs, curriculum-aware learning experiences, and vocational skills practice.",
    href: "/products/elimika",
    accent: "blue" as const,
    icon: Sparkles,
  },
  {
    brand: "Jumuika",
    category: "Socialization",
    title: "Connection and community, reimagined",
    description:
      "Shared spaces for cultural learning, community events, creative work, and civic participation.",
    href: "/products/jumuika",
    accent: "coral" as const,
    icon: UsersRound,
  },
]

export function ProductsOverviewPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Products and solutions"
        title="Three products. One connected economy."
        description="Explore Swizzy Industries' product areas for health, education, and community, built to make immersive technology practical for institutions across Kenya."
        breadcrumbs={[{ label: "Products and solutions" }]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/solutions" />}
          variant="outline"
          className="h-11 gap-2 rounded-xl px-5"
        >
          Explore solutions <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="Our products"
        title="Choose the area closest to your work"
        description="Each product is shaped around the people, institutions, and daily challenges it is intended to support."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {productAreas.map((product) => (
            <FeatureCard
              key={product.brand}
              icon={product.icon}
              eyebrow={`${product.brand} | ${product.category}`}
              accent={product.accent}
              title={product.title}
              description={product.description}
              href={product.href}
              action={`Explore ${product.brand}`}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="A common foundation"
        title="Made to work in institutional settings"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={ShieldCheck}
            title="Security and privacy"
            description="Data handling is considered from early scoping through deployment."
          />
          <FeatureCard
            icon={Landmark}
            title="Locally relevant content"
            description="Work with local experts and align experiences to the right context."
          />
          <FeatureCard
            icon={Network}
            title="Practical device support"
            description="Plan for suitable devices, connectivity, and shared environments."
          />
          <FeatureCard
            icon={UsersRound}
            title="Training and support"
            description="Help staff feel confident using the tools in day-to-day work."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Shared outcomes"
        title="Health, learning, and connection support one another"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Learning supports care",
              "Practice and technical education prepare people to do important work.",
            ],
            [
              "Care supports communities",
              "Healthy people and stronger services help communities thrive.",
            ],
            [
              "Connection creates opportunity",
              "Shared knowledge links people, institutions, and ideas.",
            ],
          ].map(([title, description]) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-3 p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <Network aria-hidden="true" className="size-4" />
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}
