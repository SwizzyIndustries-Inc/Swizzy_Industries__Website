"use client"

import Link from "next/link"

import { useState, type FormEvent } from "react"

import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { Input } from "@workspace/ui/components/input"

import { Textarea } from "@workspace/ui/components/textarea"

import { ContentSection, PageHero } from "@/components/shared"

export function RequestDemoPage() {
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Demo request: ${data.get("sector")}`)
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganization: ${data.get("organization")}\nRole: ${data.get("role")}\nSector: ${data.get("sector")}\nFormat: ${data.get("format")}\n\n${data.get("message")}`
    )
    window.location.href = `mailto:info@swizzyindustries.co.ke?subject=${subject}&body=${body}`
    setStatus(
      "Your email app should open with a draft. Review and send it to request your demo."
    )
  }

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Request a demo"
        title="See immersive technology in action"
        description="Request a tailored walkthrough for your institution, learners, or clinical team."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Request a demo" },
        ]}
      />
      <ContentSection
        title="A useful conversation, tailored to you"
        tone="muted"
      >
        <div className="grid items-start gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              What to expect
            </h2>
            <ul className="space-y-3">
              {[
                "A walkthrough tailored to your goals",
                "Time to explore the experience",
                "A clear discussion of requirements and next steps",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 text-teal-accent"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <Card className="border-border bg-card text-card-foreground">
              <CardContent className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  “We appreciated being able to discuss our real training
                  environment before looking at a solution.”
                </p>
                <p className="mt-3 text-xs font-medium text-foreground">
                  Institutional partner | Illustrative placeholder
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-foreground">
                Request your demo
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Submitting opens an email draft; this page does not send or
                store your information.
              </p>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Full name
                  <Input name="name" required className="mt-1 h-11" />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Work email
                  <Input
                    name="email"
                    type="email"
                    required
                    className="mt-1 h-11"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Organization
                  <Input name="organization" required className="mt-1 h-11" />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Role
                  <Input name="role" className="mt-1 h-11" />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Sector
                  <select
                    name="sector"
                    className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 font-normal"
                  >
                    <option>Health</option>
                    <option>Education</option>
                    <option>Socialization</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Preferred format
                  <select
                    name="format"
                    className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 font-normal"
                  >
                    <option>Online</option>
                    <option>In person</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
                  What would you like to explore?
                  <Textarea name="message" className="mt-1" />
                </label>
                <label className="flex items-start gap-2 text-sm text-muted-foreground sm:col-span-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 size-4 accent-blue-primary"
                  />
                  I agree that Swizzy Industries may use these details to
                  respond to my request.{" "}
                  <Link
                    href="/legal/privacy"
                    className="text-primary underline"
                  >
                    Privacy notice
                  </Link>
                </label>
                <Button type="submit" className="h-11 gap-2 sm:col-span-2">
                  Prepare demo request <ArrowRight aria-hidden="true" />
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
      <ContentSection
        eyebrow="What happens next"
        title="Three steps, no surprises"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["We contact you", "Our team reviews your note and follows up."],
            [
              "We tailor the session",
              "We plan around your audience and goals.",
            ],
            [
              "You see it live",
              "Explore the experience and discuss next steps.",
            ],
          ].map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-3 p-5">
                <Badge variant="outline">0{index + 1}</Badge>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}
