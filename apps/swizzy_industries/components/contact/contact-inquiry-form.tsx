"use client"

import { useState, type FormEvent } from "react"

import Link from "next/link"

import { ArrowRight } from "lucide-react"

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

export function ContactInquiryForm() {
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(
      `Institutional inquiry: ${formData.get("focus")}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name")}`,
        `Email: ${formData.get("email")}`,
        `Phone: ${formData.get("phone")}`,
        `Organization: ${formData.get("organization")}`,
        `Inquiry: ${formData.get("focus")}`,
        "",
        String(formData.get("message")),
      ].join("\n")
    )

    window.location.href = `mailto:info@swizzyindustries.co.ke?subject=${subject}&body=${body}`
    setStatus(
      "Your email app should open with a draft. Review and send it there to reach our team."
    )
  }

  return (
    <Card
      id="dispatch-form"
      className="border-border bg-card text-card-foreground"
    >
      <CardHeader>
        <Badge variant="outline" className="w-fit">
          Secure direct dispatch
        </Badge>
        <CardTitle className="text-xl text-foreground sm:text-2xl">
          Tell us what you are working on
        </CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Complete the fields below to prepare an email addressed to our Nairobi
          team. Your email app will handle sending.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="focus"
              className="text-sm font-medium text-foreground"
            >
              Inquiry focus <span aria-hidden="true">*</span>
            </label>
            <select
              id="focus"
              name="focus"
              required
              defaultValue=""
              className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="" disabled>
                Select a program or technical area
              </option>
              <option value="Clinical simulators and surgical AR">
                Clinical simulators and surgical AR
              </option>
              <option value="STEM virtual labs and CBC digitization">
                STEM virtual labs and CBC digitization
              </option>
              <option value="Civic and socialization spaces">
                Civic and socialization spaces
              </option>
              <option value="Bespoke XR solutions">Bespoke XR solutions</option>
              <option value="Hardware integration">Hardware integration</option>
              <option value="Other institutional inquiry">
                Other institutional inquiry
              </option>
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full name *
              </label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Institutional email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@institution.org"
                required
                className="h-11"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Direct phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+254 7xx xxx xxx"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="organization"
                className="text-sm font-medium text-foreground"
              >
                Organization *
              </label>
              <Input
                id="organization"
                name="organization"
                autoComplete="organization"
                placeholder="Hospital, school, or institution"
                required
                className="h-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              How can we help? *
            </label>
            <Textarea
              id="message"
              name="message"
              minLength={20}
              maxLength={1000}
              rows={5}
              placeholder="Tell us about your goals, audience, and timeline."
              required
            />
          </div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1 size-4 rounded border-input accent-blue-primary"
            />
            <span>
              I agree that Swizzy Industries may use these details to respond to
              my inquiry. See the{" "}
              <Link
                href="/legal/privacy"
                className="font-medium text-primary underline underline-offset-4"
              >
                privacy notice
              </Link>
              .
            </span>
          </label>
          <Button
            type="submit"
            className="h-11 w-full gap-2 rounded-xl bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
          >
            Open email draft <ArrowRight aria-hidden="true" />
          </Button>
          {status ? (
            <p
              role="status"
              aria-live="polite"
              className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-3 text-sm text-foreground"
            >
              {status}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  )
}
