import Link from "next/link"
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

type BreadcrumbItem = {
  label: string
  href?: string
}

export function PageHero({
  section,
  title,
  description,
  breadcrumbs,
  children,
}: {
  section: string
  title: string
  description: string
  breadcrumbs: BreadcrumbItem[]
  children?: React.ReactNode
}) {
  return (
    <header className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-9 items-center hover:text-primary"
              >
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li
                key={`${crumb.label}:${crumb.href ?? "current"}`}
                className="inline-flex items-center gap-2"
              >
                <ChevronRight aria-hidden="true" className="size-3.5" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="inline-flex min-h-9 items-center hover:text-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="font-medium text-foreground"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl space-y-5">
          <Badge
            variant="secondary"
            className="h-auto px-3 py-1.5 text-xs tracking-wider uppercase"
          >
            {section}
          </Badge>
          <h1 className="font-heading text-4xl leading-tight font-bold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
          {children}
        </div>
      </div>
    </header>
  )
}

export function ContentSection({
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  id,
}: {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  tone?: "default" | "muted"
  id?: string
}) {
  return (
    <section
      id={id}
      className={
        tone === "muted"
          ? "border-y border-border bg-muted/40 py-14 sm:py-18 lg:py-20"
          : "py-14 sm:py-18 lg:py-20"
      }
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {eyebrow || title || description ? (
          <div className="mb-9 max-w-3xl space-y-3 sm:mb-12">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  action = "Learn more",
  accent = "blue",
}: {
  icon?: LucideIcon
  eyebrow?: string
  title: string
  description: string
  href?: string
  action?: string
  accent?: "blue" | "teal" | "coral" | "amber"
}) {
  const accents = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200",
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200",
    coral:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-200",
    amber:
      "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  }

  return (
    <Card className="h-full border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="gap-4">
        {Icon ? (
          <span
            className={`flex size-11 items-center justify-center rounded-xl ${accents[accent]}`}
          >
            <Icon aria-hidden="true" className="size-5" />
          </span>
        ) : null}
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href ? (
          <Button
            variant="link"
            nativeButton={false}
            render={<Link href={href} />}
            className="h-9 w-fit justify-start px-0 text-primary"
          >
            {action} <ArrowRight aria-hidden="true" />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
}

export function StatGrid({
  items,
}: {
  items: { value: string; label: string; detail?: string }[]
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card
          key={item.label}
          className="border-border bg-card text-card-foreground"
        >
          <CardContent className="space-y-2 p-5">
            <p className="font-heading text-3xl font-bold text-primary">
              {item.value}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {item.label}
            </p>
            {item.detail ? (
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function PageCta({
  title,
  description,
  href = "/solutions/request-a-demo",
  action = "Request a demo",
}: {
  title: string
  description: string
  href?: string
  action?: string
}) {
  return (
    <section className="bg-navy-deep py-14 text-white sm:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        </div>
        <Button
          nativeButton={false}
          render={<Link href={href} />}
          className="h-11 shrink-0 gap-2 rounded-xl bg-white px-5 text-navy-deep hover:bg-blue-50 dark:bg-white dark:text-navy-deep dark:hover:bg-blue-50"
        >
          {action} <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}

export function ComparisonGrid({
  items,
}: {
  items: { title: string; points: string[]; tone?: "good" | "muted" }[]
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <Card
          key={item.title}
          className="border-border bg-card text-card-foreground"
        >
          <CardHeader>
            <CardTitle className="text-foreground">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    className={
                      item.tone === "good"
                        ? "mt-2 size-1.5 rounded-full bg-teal-accent"
                        : "mt-2 size-1.5 rounded-full bg-muted-foreground/60"
                    }
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
