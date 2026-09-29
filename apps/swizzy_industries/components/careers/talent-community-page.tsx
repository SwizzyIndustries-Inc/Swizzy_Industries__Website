"use client"

import { useState, type FormEvent } from "react"

import { ArrowRight, BookOpen, BriefcaseBusiness, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

export function TalentCommunityPage() {
  const [status, setStatus] = useState("")
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent("Talent community interest")
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\nLocation: ${data.get("location")}\nLinkedIn: ${data.get("linkedin")}`
    )
    window.location.href = `mailto:info@swizzy.co.ke?subject=${subject}&body=${body}`
    setStatus(
      "Your email app should open with a draft. Review and send it to share your interest."
    )
  }

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Careers | Talent community"
        title="Stay close to Swizzy Industries"
        description="Get occasional updates about opportunities, events, and work across our teams."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Talent community" },
        ]}
      />
      <ContentSection title="Stay connected" tone="muted">
        <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              What you can expect
            </h2>
            <ul className="space-y-3">
              {[
                "Hear when relevant roles are published",
                "Receive occasional event and learning updates",
                "Stay connected to immersive technology work in Kenya",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="size-4 shrink-0 text-teal-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Updates are occasional. You can opt out by contacting us.
            </p>
          </div>
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">
                Join the talent community
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                This prepares an email draft; no information is stored by this
                page.
              </p>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Name
                  <Input name="name" required className="mt-1 h-11" />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Email
                  <Input
                    name="email"
                    type="email"
                    required
                    className="mt-1 h-11"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Area of interest
                  <select
                    name="interest"
                    className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 font-normal"
                  >
                    <option>Engineering</option>
                    <option>Product and design</option>
                    <option>Health</option>
                    <option>Education</option>
                    <option>Operations</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Location
                  <Input
                    name="location"
                    placeholder="Nairobi, remote, or other"
                    className="mt-1 h-11"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                  LinkedIn or portfolio (optional)
                  <Input name="linkedin" type="url" className="mt-1 h-11" />
                </label>
                <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 size-4 accent-blue-primary"
                  />
                  I agree that Swizzy Industries may use this information to
                  contact me about career opportunities.
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
        </div>
      </ContentSection>
      <ContentSection eyebrow="Explore more" title="Find your next step">
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            icon={BriefcaseBusiness}
            title="Open roles"
            description="Review positions that have been formally published."
            href="/careers/open-roles"
          />
          <FeatureCard
            icon={BookOpen}
            title="Swizzy Industries insights"
            description="Read about the work, technology, and communities we serve."
            href="/blog"
          />
        </div>
      </ContentSection>
    </main>
  )
}
