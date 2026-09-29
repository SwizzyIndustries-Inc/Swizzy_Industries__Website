"use client"

import Link from "next/link"

import { useState, type FormEvent } from "react"

import { Activity, ArrowRight, Handshake, MapPin, Target } from "lucide-react"

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

import { Textarea } from "@workspace/ui/components/textarea"

import {
  ContentSection,
  FeatureCard,
  PageHero,
} from "@/components/design-pages/shared"

const partnerGroups = [
  {
    value: "technology",
    label: "Technology",
    organizations: [
      "Device and platform partners",
      "Local connectivity providers",
      "Research collaborators",
    ],
  },
  {
    value: "health",
    label: "Healthcare",
    organizations: [
      "Clinical training partners",
      "Hospitals and care networks",
      "Biomedical engineering teams",
    ],
  },
  {
    value: "education",
    label: "Education",
    organizations: [
      "Schools and universities",
      "TVET institutions",
      "Curriculum collaborators",
    ],
  },
  {
    value: "public",
    label: "Public sector",
    organizations: [
      "County institutions",
      "Government programmes",
      "Public service partners",
    ],
  },
  {
    value: "development",
    label: "Development",
    organizations: [
      "Community organizations",
      "Impact partners",
      "Development institutions",
    ],
  },
]

const partnershipOptions: [string, string][] = [
  [
    "Pilot with us",
    "Test a defined use case with a partner cohort and clear evaluation goals.",
  ],
  [
    "Co-develop with us",
    "Bring subject expertise to the design of a new immersive workflow.",
  ],
  [
    "Distribute or integrate",
    "Explore technical and delivery partnerships for the right institutions.",
  ],
]

export function PartnersPage() {
  const [activeGroup, setActiveGroup] = useState("technology")
  const [status, setStatus] = useState("")
  const selectedGroup =
    partnerGroups.find((group) => group.value === activeGroup) ??
    partnerGroups[0]!

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(
      `Partnership inquiry: ${formData.get("type")}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nOrganization: ${formData.get("organization")}\nPartnership type: ${formData.get("type")}\n\n${formData.get("message")}`
    )
    window.location.href = `mailto:info@swizzy.co.ke?subject=${subject}&body=${body}`
    setStatus(
      "Your email app should open with a draft. Review and send it to contact the Swizzy Industries team."
    )
  }

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Partners and investors"
        title="Growing Kenya's immersive economy together"
        description="We work with institutions and collaborators to make immersive technology useful, accessible, and grounded in local priorities."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Partners and investors" },
        ]}
      />
      <ContentSection
        eyebrow="Our partners"
        title="Collaboration across sectors"
      >
        <Tabs
          value={activeGroup}
          onValueChange={(value) => setActiveGroup(value ?? "technology")}
        >
          <TabsList className="h-auto w-full flex-wrap justify-start bg-muted p-1">
            {partnerGroups.map((group) => (
              <TabsTrigger
                key={group.value}
                value={group.value}
                className="min-h-9 px-3"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {selectedGroup.organizations.map((organization) => (
            <Card
              key={organization}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex min-h-24 items-center justify-center p-5 text-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {organization}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Partner categories are presented as areas of collaboration, not an
          endorsement or confirmed partner list.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="Why partner with Swizzy Industries"
        title="Local context, shared responsibility"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={MapPin}
            title="Local expertise"
            description="Work with teams grounded in Kenyan institutional realities."
          />
          <FeatureCard
            icon={Activity}
            accent="teal"
            title="Practical pilots"
            description="Start with clearly scoped use cases and partner feedback."
          />
          <FeatureCard
            icon={Target}
            title="Measured learning"
            description="Agree on useful outcomes before a project begins."
          />
          <FeatureCard
            icon={Handshake}
            accent="coral"
            title="Collaborative approach"
            description="Bring subject specialists into design and review."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Ways to work together"
        title="Choose a useful first step"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {partnershipOptions.map(([title, description]) => (
            <FeatureCard
              key={title}
              icon={Handshake}
              title={title}
              description={description}
              href="/contact"
              action="Start a conversation"
            />
          ))}
        </div>
      </ContentSection>
      <section className="bg-navy-deep py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge variant="secondary">For investors</Badge>
            <h2 className="font-heading text-3xl font-bold">
              Invest in Kenya&apos;s immersive future
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/75">
              We welcome conversations with aligned investors and development
              partners. Approved market, traction, and financial information is
              shared through a direct discussion.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                className="h-11 gap-2 rounded-xl bg-white px-5 text-navy-deep hover:bg-blue-50 dark:bg-white dark:text-navy-deep"
              >
                Request a meeting <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs tracking-wider text-teal-200 uppercase">
                Focus
              </p>
              <p className="mt-2 text-lg font-semibold">
                Health, learning, connection
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs tracking-wider text-blue-200 uppercase">
                Approach
              </p>
              <p className="mt-2 text-lg font-semibold">
                Institution-led deployment
              </p>
            </div>
            <p className="col-span-full text-xs text-white/60">
              Financial projections and investment materials are available only
              when approved for release.
            </p>
          </div>
        </div>
      </section>
      <ContentSection
        eyebrow="Start a conversation"
        title="Tell us what you would like to explore"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-foreground">
              Partnership inquiry
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              This form prepares an email draft; no information is submitted to
              a server.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-foreground">
                Name
                <Input name="name" required className="mt-1 h-11" />
              </label>
              <label className="space-y-2 text-sm font-medium text-foreground">
                Organization
                <Input name="organization" required className="mt-1 h-11" />
              </label>
              <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                Partnership type
                <select
                  name="type"
                  className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 font-normal"
                  defaultValue="Pilot"
                >
                  <option>Pilot</option>
                  <option>Co-development</option>
                  <option>Distribution or integration</option>
                  <option>Investment</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                Message
                <Textarea
                  name="message"
                  required
                  minLength={10}
                  className="mt-1"
                />
              </label>
              <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 size-4 accent-blue-primary"
                />
                I agree that Swizzy Industries may use these details to respond
                to my inquiry.
              </label>
              <Button type="submit" className="h-11 gap-2 sm:col-span-2">
                Prepare email <ArrowRight aria-hidden="true" />
              </Button>
              {status ? (
                <p
                  role="status"
                  className="text-sm text-foreground sm:col-span-2"
                >
                  {status}
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}
