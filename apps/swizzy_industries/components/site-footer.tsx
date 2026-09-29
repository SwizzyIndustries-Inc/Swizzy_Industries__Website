"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Layers3 } from "lucide-react"

import { isSitePage } from "@/lib/construction-routes"

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our story", href: "/about/our-story" },
      { label: "Team & leadership", href: "/about/team" },
      { label: "Impact", href: "/impact" },
      { label: "Partners & investors", href: "/partners" },
    ],
  },
  {
    title: "Products & solutions",
    links: [
      { label: "Tibika | Health", href: "/products/tibika" },
      { label: "Elimika | Education", href: "/products/elimika" },
      { label: "Jumuika | Socialization", href: "/products/jumuika" },
      { label: "Solutions", href: "/solutions" },
      { label: "Case studies", href: "/solutions/case-studies" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "Events & webinars", href: "/events" },
      { label: "Resources", href: "/resources" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Join & contact",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Open roles", href: "/careers/open-roles" },
      { label: "Contact us", href: "/contact" },
      { label: "Request a demo", href: "/solutions/request-a-demo" },
    ],
  },
]

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
]

function MinimalErrorFooter() {
  return (
    <footer className="border-t border-border px-5 py-5 text-muted-foreground sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Swizzy Industries</p>
        <Link
          href="/contact"
          className="inline-flex min-h-9 items-center text-xs font-medium hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
        >
          Contact us
        </Link>
      </div>
    </footer>
  )
}

export function SiteFooter() {
  const pathname = usePathname()

  if (!isSitePage(pathname)) {
    return <MinimalErrorFooter />
  }

  return (
    <footer className="bg-navy-deep text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:py-10">
          <div>
            <h2 className="font-heading text-xl font-semibold sm:text-2xl">
              Ready to explore immersive technology?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Tell us what you are working on. We&apos;ll help you find a useful
              next step.
            </p>
          </div>
          <Link
            href="/solutions/request-a-demo"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-navy-deep transition-colors hover:bg-blue-tint focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep focus-visible:outline-none"
          >
            Request a demo <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
          >
            <Layers3 aria-hidden="true" className="size-6 text-teal-300" />
            <span className="font-heading text-lg font-bold">
              Swizzy Industries
            </span>
          </Link>
          <p className="mt-3 text-sm font-medium text-white/85">
            Kenya reimagined through immersive technology
          </p>
          <p className="mt-3 text-sm leading-6 text-white/65">
            Immersive software and tools for the sectors that matter to Kenya.
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="mb-3 text-sm font-semibold text-white">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-sm text-white/65 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-white/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Swizzy Industries. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-8 items-center hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
