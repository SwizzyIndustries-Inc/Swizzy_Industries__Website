"use client"

import { usePathname } from "next/navigation"

import { Printer } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { PageHero } from "@/components/design-pages/shared"

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
