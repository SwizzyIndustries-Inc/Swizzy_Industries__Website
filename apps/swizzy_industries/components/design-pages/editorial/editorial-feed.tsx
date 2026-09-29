"use client"

import Link from "next/link"

import { useMemo, useState } from "react"

import { ArrowRight, Search } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

export type EditorialItem = {
  title: string
  summary: string
  category: string
  date: string
  meta: string
}

export function FilterableFeed({
  items,
  categories,
  placeholder,
}: {
  items: EditorialItem[]
  categories: { value: string; label: string }[]
  placeholder: string
}) {
  const [category, setCategory] = useState("all")
  const [query, setQuery] = useState("")
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category
      const matchesQuery =
        !normalizedQuery ||
        `${item.title} ${item.summary} ${item.meta}`
          .toLowerCase()
          .includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [category, items, query])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <Tabs
          value={category}
          onValueChange={(value) => setCategory(value ?? "all")}
        >
          <TabsList className="h-auto w-full flex-wrap justify-start bg-muted p-1 lg:w-fit">
            {categories.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="min-h-9 px-3 text-xs sm:text-sm"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full lg:max-w-xs">
          <Search
            aria-hidden="true"
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="h-10 pl-9"
          />
        </div>
      </div>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        Showing {filteredItems.length}{" "}
        {filteredItems.length === 1 ? "result" : "results"}
      </p>
      {filteredItems.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card
              key={item.title}
              className="h-full border-border bg-card text-card-foreground"
            >
              <CardHeader className="gap-3">
                <Badge variant="secondary" className="w-fit capitalize">
                  {item.category.replaceAll("-", " ")}
                </Badge>
                <CardTitle className="text-base leading-snug text-foreground">
                  {item.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {item.date} | {item.meta}
                </p>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <Link
                  href="#featured"
                  className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Read more <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            No items match that search. Try another term or category.
          </CardContent>
        </Card>
      )}
    </div>
  )
}
