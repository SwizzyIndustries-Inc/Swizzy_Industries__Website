"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

import { ArrowLeft, ArrowRight } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, PageHero } from "@/components/shared"

const detailNavLinks: [string, string][] = [
  ["Products", "/products"],
  ["Solutions", "/solutions"],
  ["Contact", "/contact"],
]

export function DynamicDetailPage() {
  const pathname = usePathname()
  const slug = pathname.split("/").filter(Boolean).at(-1) ?? "story"
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
  const isJob = pathname.startsWith("/careers/open-roles/")
  const section = isJob
    ? "Careers"
    : pathname.startsWith("/solutions/case-studies/")
      ? "Case study"
      : pathname.startsWith("/about/team/")
        ? "Team profile"
        : "Insights"
  const backHref = isJob
    ? "/careers/open-roles"
    : pathname.startsWith("/solutions/case-studies/")
      ? "/solutions/case-studies"
      : pathname.startsWith("/about/team/")
        ? "/about/team"
        : pathname.startsWith("/news/")
          ? "/news"
          : pathname.startsWith("/events/")
            ? "/events"
            : "/blog"

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section={section}
        title={title}
        description={
          isJob
            ? "This role detail template is ready for an approved job description. No unverified opening is being advertised."
            : "This detail page uses the shared Swizzy Industries reading layout. Add approved article, event, profile, or case-study content here."
        }
        breadcrumbs={[{ label: section, href: backHref }, { label: title }]}
      >
        {isJob ? (
          <Button
            nativeButton={false}
            render={<Link href="/careers/talent-community" />}
            className="h-11 gap-2"
          >
            Join talent community <ArrowRight aria-hidden="true" />
          </Button>
        ) : null}
      </PageHero>
      <ContentSection title={isJob ? "Role information" : "About this page"}>
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <article className="space-y-6">
            <Card className="border-border bg-card text-card-foreground">
              <CardContent className="space-y-4 p-6">
                <Badge variant="outline">Content pending approval</Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This route provides the intended page structure. Publish only
                  content approved by the relevant editorial, clinical, HR, or
                  partner owner.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For information about this page, contact{" "}
                  <a
                    className="text-primary underline"
                    href="mailto:info@swizzy.co.ke"
                  >
                    info@swizzy.co.ke
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
            <Button
              nativeButton={false}
              render={<Link href={backHref} />}
              variant="outline"
              className="h-10 gap-2"
            >
              <ArrowLeft aria-hidden="true" /> Back to {section.toLowerCase()}
            </Button>
          </article>
          <Card className="h-fit border-border bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">Explore more</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {detailNavLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex min-h-9 items-center justify-between text-sm text-muted-foreground hover:text-primary"
                >
                  {label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </main>
  )
}
