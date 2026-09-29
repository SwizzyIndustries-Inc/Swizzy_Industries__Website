"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  Printer,
  Search,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
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
    title: "Careers at Swizzy",
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
    title: "Contact Swizzy",
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
        description="Search pages, insights, resources, and opportunities at Swizzy."
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
            placeholder="Search Swizzy"
            aria-label="Search Swizzy"
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

export function ThankYouPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
          <CheckCircle2 aria-hidden="true" className="size-8" />
        </span>
        <Badge variant="secondary" className="mt-6">
          Message prepared
        </Badge>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Thank you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          We appreciate your interest in Swizzy. If you submitted a form that
          opened your email app, remember to send the prepared draft so our team
          can receive it.
        </p>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
          {[
            ["We receive your note", "Send the email draft to reach our team."],
            [
              "We review your needs",
              "We route your inquiry to the right people.",
            ],
            [
              "We follow up",
              "A team member will respond through your chosen channel.",
            ],
          ].map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-2 p-4">
                <Badge variant="outline">0{index + 1}</Badge>
                <h2 className="font-heading text-sm font-semibold text-foreground">
                  {title}
                </h2>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/" />}
            className="h-11 gap-2"
          >
            Back home <Home aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/blog" />}
            variant="outline"
            className="h-11"
          >
            Read the blog
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/products" />}
            variant="outline"
            className="h-11"
          >
            Explore products
          </Button>
        </div>
      </div>
    </main>
  )
}

const legalDocuments = {
  "/legal/privacy": {
    title: "Privacy policy",
    summary:
      "We use the information you choose to share to respond to your requests and operate our services responsibly.",
    sections: [
      "Information you provide",
      "How we use information",
      "Data sharing and service providers",
      "Retention and security",
      "Your choices and rights",
      "Contact our data team",
    ],
  },
  "/legal/terms": {
    title: "Terms of use",
    summary:
      "These terms describe responsible use of Swizzy Industries websites and informational materials.",
    sections: [
      "Using this website",
      "Intellectual property",
      "Third-party links",
      "Disclaimers",
      "Changes to these terms",
      "Contact us",
    ],
  },
  "/legal/cookies": {
    title: "Cookie policy",
    summary:
      "This page explains how cookies and similar technologies may support site operation and preferences.",
    sections: [
      "What cookies are",
      "Necessary storage",
      "Optional analytics",
      "Managing preferences",
      "Policy updates",
      "Contact us",
    ],
  },
  "/legal/accessibility": {
    title: "Accessibility statement",
    summary:
      "We aim to make our digital experiences usable by as many people as possible and welcome feedback.",
    sections: [
      "Our accessibility goals",
      "Current experience",
      "Known limitations",
      "Request an accommodation",
      "Feedback and contact",
    ],
  },
}

export function LegalPage() {
  const pathname = usePathname()
  const document =
    legalDocuments[pathname as keyof typeof legalDocuments] ??
    legalDocuments["/legal/privacy"]

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Legal and policies"
        title={document.title}
        description="Last updated: September 2026. This readable overview is not a substitute for approved legal advice."
        breadcrumbs={[
          { label: "Legal", href: "/legal/privacy" },
          { label: document.title },
        ]}
      />
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav
            aria-label="Legal pages"
            className="rounded-xl border border-border bg-card p-4"
          >
            <h2 className="mb-3 text-sm font-semibold text-foreground">
              On this page
            </h2>
            <ul className="space-y-1">
              {document.sections.map((section, index) => (
                <li key={section}>
                  <a
                    href={`#section-${index + 1}`}
                    className="inline-flex min-h-9 items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="min-w-0">
          <Card className="mb-8 border-border bg-muted/50 text-card-foreground">
            <CardContent className="p-5">
              <Badge variant="secondary">In plain language</Badge>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {document.summary} Contact us if you have a question about this
                policy or need an accessible copy.
              </p>
            </CardContent>
          </Card>
          <div className="mb-6 flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.print()}
              className="h-9 gap-2"
            >
              <Printer aria-hidden="true" /> Print
            </Button>
          </div>
          <div className="space-y-10">
            {document.sections.map((section, index) => (
              <section
                id={`section-${index + 1}`}
                key={section}
                className="scroll-mt-24 space-y-3"
              >
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {index + 1}. {section}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Swizzy Industries is committed to handling this area with care
                  and transparency. The final policy details should be reviewed
                  and approved by the company before publication. For questions
                  about {section.toLowerCase()}, contact{" "}
                  <a
                    className="text-primary underline"
                    href="mailto:info@swizzy.co.ke"
                  >
                    info@swizzy.co.ke
                  </a>
                  .
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

const sitemapGroups: { title: string; links: [string, string][] }[] = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Mission, vision and values", "/about/mission-vision-values"],
      ["Our story", "/about/our-story"],
      ["Team and leadership", "/about/team"],
      ["Partners and investors", "/partners"],
      ["Impact", "/impact"],
    ],
  },
  {
    title: "Products and solutions",
    links: [
      ["Products overview", "/products"],
      ["Tibika | Health", "/products/tibika"],
      ["Elimika | Education", "/products/elimika"],
      ["Jumuika | Socialization", "/products/jumuika"],
      ["Solutions overview", "/solutions"],
      ["Bespoke development", "/solutions/bespoke-development"],
      ["Devices and integration", "/solutions/devices-integration"],
      ["Case studies", "/solutions/case-studies"],
      ["Request a demo", "/solutions/request-a-demo"],
    ],
  },
  {
    title: "Blog and news",
    links: [
      ["Blog", "/blog"],
      ["News", "/news"],
      ["Events", "/events"],
      ["Resources", "/resources"],
      ["Press kit", "/press-kit"],
      ["Gallery", "/gallery"],
    ],
  },
  {
    title: "Careers",
    links: [
      ["Why Swizzy", "/careers"],
      ["Life and benefits", "/careers/life-and-benefits"],
      ["Open roles", "/careers/open-roles"],
      ["Early careers", "/careers/early-careers"],
      ["Hiring process", "/careers/hiring-process"],
      ["Talent community", "/careers/talent-community"],
    ],
  },
  {
    title: "Contact and policies",
    links: [
      ["Contact", "/contact"],
      ["Search", "/search"],
      ["Privacy", "/legal/privacy"],
      ["Terms", "/legal/terms"],
      ["Cookies", "/legal/cookies"],
      ["Accessibility", "/legal/accessibility"],
    ],
  },
]

export function SitemapPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Sitemap"
        title="Find your way around Swizzy"
        description="Browse pages and resources by section."
        breadcrumbs={[{ label: "Sitemap" }]}
      />
      <ContentSection title="All sections" tone="muted">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sitemapGroups.map((group) => (
            <Card
              key={group.title}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <CardTitle className="text-foreground">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-flex min-h-9 items-center text-sm text-muted-foreground hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}

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
            : "This detail page uses the shared Swizzy reading layout. Add approved article, event, profile, or case-study content here."
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
