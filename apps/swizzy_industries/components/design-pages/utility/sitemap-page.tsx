"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, PageHero } from "@/components/design-pages/shared"

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
      ["Why Swizzy Industries", "/careers"],
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
        title="Find your way around Swizzy Industries"
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
