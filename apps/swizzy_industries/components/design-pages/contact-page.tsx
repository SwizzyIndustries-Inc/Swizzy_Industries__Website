"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  UsersRound,
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
import { Textarea } from "@workspace/ui/components/textarea"
import {
  ContentSection,
  FeatureCard,
  PageHero,
} from "@/components/design-pages/shared"

const departments = [
  {
    title: "Sales and county pilots",
    email: "info@swizzy.co.ke",
    tag: "Institutional",
  },
  {
    title: "Academic partnerships",
    email: "info@swizzy.co.ke",
    tag: "Education",
  },
  { title: "Biomedical AR support", email: "info@swizzy.co.ke", tag: "Health" },
  { title: "Media and press bureau", email: "info@swizzy.co.ke", tag: "Media" },
  {
    title: "Careers and fellowships",
    email: "info@swizzy.co.ke",
    tag: "People",
  },
  {
    title: "Data protection inquiries",
    email: "info@swizzy.co.ke",
    tag: "Privacy",
  },
]

export function ContactPage() {
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

    window.location.href = `mailto:info@swizzy.co.ke?subject=${subject}&body=${body}`
    setStatus(
      "Your email app should open with a draft. Review and send it there to reach our team."
    )
  }

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Direct collaboration and inquiries"
        title="Let's talk about your Kenya, reimagined"
        description="Connect directly with our spatial engineering lab, clinical simulation advisors, and institutional deployment teams in Nairobi."
        breadcrumbs={[{ label: "Contacts" }]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="h-auto gap-2 px-3 py-1.5">
            <span className="size-2 rounded-full bg-teal-accent" /> Nairobi team
            available
          </Badge>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" className="size-4" /> Typical reply
            within one business day
          </span>
        </div>
      </PageHero>

      <ContentSection title="Start an institutional conversation" tone="muted">
        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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
                Complete the fields below to prepare an email addressed to our
                Nairobi team. Your email app will handle sending.
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
                    <option value="Bespoke XR solutions">
                      Bespoke XR solutions
                    </option>
                    <option value="Hardware integration">
                      Hardware integration
                    </option>
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
                    I agree that Swizzy Industries may use these details to
                    respond to my inquiry. See the{" "}
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

          <div className="space-y-4" id="direct-channels">
            <Card className="border-border bg-card text-card-foreground">
              <CardHeader>
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <CardTitle className="text-foreground">
                  Institutional HQ
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Nairobi general secretariat
                </p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <a
                  href="mailto:info@swizzy.co.ke"
                  className="flex min-h-10 items-center gap-2 text-primary hover:underline"
                >
                  <Mail aria-hidden="true" className="size-4" />{" "}
                  info@swizzy.co.ke
                </a>
                <a
                  href="tel:+254207943000"
                  className="flex min-h-10 items-center gap-2 text-primary hover:underline"
                >
                  <Phone aria-hidden="true" className="size-4" /> +254 (0) 20
                  794 3000
                </a>
                <a
                  href="https://wa.me/254207943000"
                  className="flex min-h-10 items-center gap-2 text-primary hover:underline"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />{" "}
                  WhatsApp desk
                </a>
              </CardContent>
            </Card>
            <Card className="border-border bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Dedicated department inboxes
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose the closest match; our team will route your inquiry.
                </p>
              </CardHeader>
              <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {departments.map((department) => (
                  <a
                    key={department.title}
                    href={`mailto:${department.email}?subject=${encodeURIComponent(department.title)}`}
                    className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 hover:bg-muted"
                  >
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {department.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {department.email}
                      </span>
                    </span>
                    <Badge variant="outline">{department.tag}</Badge>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Nairobi location"
        title="Westlands innovation precinct"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-5 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Riverside Green Suites
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Riverside Drive, Nairobi, Kenya
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 aria-hidden="true" className="size-4" /> Visits by
                  appointment
                </p>
              </div>
            </div>
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://maps.google.com/?q=Riverside+Green+Suites+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              variant="outline"
              className="h-10 gap-2"
            >
              Open map <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>

      <ContentSection
        eyebrow="Our service commitments"
        title="Clear, human support"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Clock3}
            title="Human response"
            description="We aim to respond to institutional inquiries within one business day."
          />
          <FeatureCard
            icon={ShieldCheck}
            accent="teal"
            title="Respectful data handling"
            description="Inquiry details are used to respond and route your request."
          />
          <FeatureCard
            icon={UsersRound}
            title="Direct expertise"
            description="We connect you with the team closest to your institutional needs."
          />
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Institutional inquiries FAQ"
        title="A few useful details"
      >
        <div className="divide-y divide-border rounded-xl border border-border bg-card px-5">
          {[
            [
              "What should I include in my inquiry?",
              "A short description of your audience, goals, timeline, and existing devices helps us route the conversation.",
            ],
            [
              "Can we arrange an in-person discussion?",
              "Yes. Contact the team to arrange a visit or meeting in Nairobi.",
            ],
            [
              "Do you work with schools and hospitals outside Nairobi?",
              "Yes. We discuss connectivity, device availability, and local support as part of scoping.",
            ],
            [
              "How do I contact the team directly?",
              "Email info@swizzy.co.ke or call +254 (0) 20 794 3000.",
            ],
          ].map(([question, answer]) => (
            <details key={question} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-primary group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </ContentSection>
      <section className="border-t border-border bg-muted/40 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-6 gap-y-3 px-5 text-sm text-muted-foreground sm:px-8">
          <span className="inline-flex items-center gap-2">
            <Activity aria-hidden="true" className="size-4 text-teal-accent" />{" "}
            Nairobi lab status: available
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-4 text-primary" />{" "}
            Kenya Data Protection Act-aware practices
          </span>
        </div>
      </section>
    </main>
  )
}
