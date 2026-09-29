"use client"

import Link from "next/link"

import { useMemo, useState } from "react"

import { ArrowRight, Search } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { ContentSection, PageHero } from "@/components/design-pages/shared"

const searchablePages = [
  {
    title: "About Swizzy Industries",
    href: "/about",
    type: "Pages",
    description: "Who we are and how we work.",
  },
  {
    title: "Our products",
    href: "/products",
    type: "Pages",
    description: "Tibika, Elimika, and Jumuika.",
  },
  {
    title: "Solutions overview",
    href: "/solutions",
    type: "Pages",
    description: "Platforms, development, and integration.",
  },
  {
    title: "Careers at Swizzy Industries",
    href: "/careers",
    type: "Careers",
    description: "Explore our culture and future opportunities.",
  },
  {
    title: "Blog and insights",
    href: "/blog",
    type: "Blog",
    description: "Ideas on immersive technology in Kenya.",
  },
  {
    title: "News and press",
    href: "/news",
    type: "News",
    description: "Company and partner updates.",
  },
  {
    title: "Events and webinars",
    href: "/events",
    type: "Pages",
    description: "Live and on-demand sessions.",
  },
  {
    title: "Contact Swizzy Industries",
    href: "/contact",
    type: "Pages",
    description: "Reach our Nairobi team.",
  },
  {
    title: "Resource library",
    href: "/resources",
    type: "Resources",
    description: "Guides and company information.",
  },
]

const searchTypes = ["All", "Pages", "Blog", "News", "Resources", "Careers"]

export function SearchPage() {
  const [query, setQuery] = useState("")
  const [type, setType] = useState("All")
  const filtered = useMemo(
    () =>
      searchablePages.filter((item) => {
        const matchesType = type === "All" || item.type === type
        const matchesText =
          !query.trim() ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
        return matchesType && matchesText
      }),
    [query, type]
  )

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Search"
        title="What are you looking for?"
        description="Search pages, insights, resources, and opportunities at Swizzy Industries."
        breadcrumbs={[{ label: "Search" }]}
      >
        <form action="/search" className="relative max-w-2xl">
          <Search
            aria-hidden="true"
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Swizzy Industries"
            aria-label="Search Swizzy Industries"
            className="h-12 pr-24 pl-10"
          />
          <Button type="submit" className="absolute top-1 right-1 h-10">
            Search
          </Button>
        </form>
      </PageHero>
      <ContentSection title={`${filtered.length} results`} tone="muted">
        <Tabs value={type} onValueChange={(value) => setType(value ?? "All")}>
          <TabsList className="mb-5 h-auto flex-wrap justify-start bg-muted p-1">
            {searchTypes.map((value) => (
              <TabsTrigger key={value} value={value} className="min-h-9 px-3">
                {value}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {filtered.length ? (
          <div className="space-y-3">
            {filtered.map((item) => (
              <Card
                key={item.href}
                className="border-border bg-card text-card-foreground"
              >
                <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <Badge variant="outline">{item.type}</Badge>
                    <h2 className="font-heading font-semibold text-foreground">
                      <Link href={item.href} className="hover:text-primary">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      swizzyindustries.com{item.href}
                    </p>
                  </div>
                  <Button
                    nativeButton={false}
                    render={<Link href={item.href} />}
                    variant="outline"
                    className="h-10 gap-2"
                  >
                    Open <ArrowRight aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-border bg-card text-card-foreground">
            <CardContent className="space-y-3 py-10 text-center">
              <Search
                aria-hidden="true"
                className="mx-auto size-8 text-muted-foreground"
              />
              <h2 className="font-heading font-semibold text-foreground">
                No results found
              </h2>
              <p className="text-sm text-muted-foreground">
                Try a different phrase or browse the popular pages below.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  nativeButton={false}
                  render={<Link href="/products" />}
                  variant="outline"
                >
                  Products
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/blog" />}
                  variant="outline"
                >
                  Blog
                </Button>
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" />}
                  variant="outline"
                >
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        <p className="mt-5 text-sm text-muted-foreground">
          Can&apos;t find it?{" "}
          <Link href="/contact" className="font-medium text-primary underline">
            Contact our team
          </Link>
          .
        </p>
      </ContentSection>
    </main>
  )
}
