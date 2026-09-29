import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

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
