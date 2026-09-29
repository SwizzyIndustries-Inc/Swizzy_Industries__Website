"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  Cloud,
  Cpu,
  Database,
  HardDrive,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
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
import { Textarea } from "@workspace/ui/components/textarea"
import {
  ComparisonGrid,
  ContentSection,
  FeatureCard,
  PageCta,
  PageHero,
} from "@/components/design-pages/shared"

const bespokeExamples: [string, string][] = [
  [
    "Training simulations",
    "Scenario-based practice for clinical, technical, and operational skills.",
  ],
  [
    "Virtual showrooms",
    "Interactive product and facility walkthroughs for distributed audiences.",
  ],
  [
    "Immersive onboarding",
    "Guided orientation for equipment, processes, and environments.",
  ],
  [
    "Spatial facility models",
    "Digital representations that support planning and shared understanding.",
  ],
  [
    "Public awareness experiences",
    "Accessible learning experiences for important community topics.",
  ],
]

const developmentSteps: [string, string, string][] = [
  ["01", "Discovery workshop", "Understand users, context, and the challenge."],
  [
    "02",
    "Scope and prototype",
    "Agree on a focused experience and test the direction.",
  ],
  [
    "03",
    "Build and test",
    "Develop content and software with subject experts.",
  ],
  ["04", "Pilot", "Try the solution in a real institutional setting."],
  ["05", "Launch and support", "Prepare teams and plan ongoing maintenance."],
]

export function BespokeDevelopmentPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Bespoke development"
        title="Your idea, built as an immersive experience"
        description="We work with organizations to design and deliver custom spatial software for specific training, learning, and communication needs."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Bespoke development" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Start a project <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="What we can build"
        title="Purpose-built experiences around your goals"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bespokeExamples.map(([title, description], index) => (
            <FeatureCard
              key={title}
              icon={
                [Layers3, Sparkles, UsersRound, Network, ShieldCheck][index]
              }
              title={title}
              description={description}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Our process"
        title="From first conversation to supported deployment"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {developmentSteps.map(([number, title, description]) => (
            <li key={number}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-4">
                  <Badge variant="outline">{number}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Multidisciplinary skills"
        title="The right expertise for each challenge"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "3D design",
            "Software engineering",
            "Learning design",
            "User research",
            "Project delivery",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="h-auto justify-start gap-2 rounded-xl px-4 py-3 text-sm"
            >
              <Check aria-hidden="true" className="size-4 text-teal-accent" />
              {skill}
            </Badge>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Engagement models"
        title="Start at a scale that fits"
      >
        <ComparisonGrid
          items={[
            {
              title: "Fixed-scope project",
              points: [
                "Defined use case and deliverables",
                "Agreed timeline and review points",
                "A clear path to pilot",
              ],
            },
            {
              title: "Pilot then scale",
              points: [
                "Start with a focused cohort",
                "Review feedback and performance",
                "Plan next steps using evidence",
              ],
              tone: "good",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Brief a project"
        title="Share the challenge you want to solve"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A first conversation helps us understand your users, environment,
              and requirements before discussing scope.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 gap-2"
            >
              Brief our team <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Let's build the right experience"
        description="Bring your subject experts and institutional context into the conversation."
        href="/contact"
        action="Start a project"
      />
    </main>
  )
}

const deviceRows = [
  [
    "Standalone VR headsets",
    "Clinical simulation, virtual labs",
    "Portable",
    "To be scoped",
  ],
  [
    "Computers and PC VR",
    "High-detail specialist experiences",
    "Room-based",
    "To be scoped",
  ],
  [
    "Tablets and phones",
    "Learning activities and mobile AR",
    "Highly portable",
    "To be scoped",
  ],
]

export function DevicesIntegrationPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Devices and integration"
        title="Works with devices and systems you already use"
        description="We assess your existing equipment, connectivity, and institutional systems before recommending a deployment approach."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Devices and integration" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          variant="outline"
          className="h-11 gap-2 rounded-xl px-5"
        >
          Talk to our team <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="Supported device types"
        title="Choose equipment around the use case"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={HardDrive}
            title="Standalone VR"
            description="Self-contained headsets for guided immersive learning and simulation."
          />
          <FeatureCard
            icon={Cpu}
            title="PC-connected systems"
            description="For workflows that need additional graphics or specialist peripherals."
          />
          <FeatureCard
            icon={Layers3}
            title="Tablets and phones"
            description="Accessible devices for mobile learning and augmented experiences."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Device recommendation"
        title="Start with your people and environment"
        tone="muted"
      >
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                {[
                  "Device type",
                  "Example use",
                  "Deployment",
                  "Model compatibility",
                ].map((heading) => (
                  <th key={heading} className="p-4 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {deviceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={cell}
                        className="p-4 font-medium text-foreground"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td key={cell} className="p-4">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Specific device models and compatibility should be confirmed during
          technical discovery.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="Integration planning"
        title="Connect with your current environment"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={UsersRound}
            title="Identity and access"
            description="Discuss account provisioning and access requirements for your institution."
          />
          <FeatureCard
            icon={Database}
            title="Learning and clinical systems"
            description="Review potential data flows with your system owners before integration."
          />
          <FeatureCard
            icon={Network}
            title="Analytics and reporting"
            description="Agree on the minimum information needed to support evaluation."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Deployment models"
        title="Cloud, local, or hybrid options"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Cloud}
            title="Cloud-connected"
            description="For institutions with reliable internet access and approved cloud requirements."
          />
          <FeatureCard
            icon={HardDrive}
            accent="teal"
            title="Local network"
            description="For experiences that need to remain available within a facility or campus."
          />
          <FeatureCard
            icon={Network}
            title="Hybrid"
            description="Combine online management with local access where it fits the use case."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Hardware setup"
        title="Advise, configure, train, support"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Advise", "Review the use case and requirements."],
            ["Supply", "Agree on device and procurement needs."],
            ["Configure", "Set up devices, access, and local networking."],
            ["Train", "Prepare educators and administrators."],
          ].map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-3 p-5">
                <Badge variant="secondary">0{index + 1}</Badge>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Support and maintenance"
        title="Support plans shaped around deployment needs"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Wrench}
            title="Standard"
            description="Documentation and support channels for routine deployment questions."
          />
          <FeatureCard
            icon={Activity}
            title="Priority"
            description="A planned response approach for active institutional programmes."
          />
          <FeatureCard
            icon={Building2}
            title="Enterprise"
            description="A support agreement scoped to your organization and operating needs."
          />
        </div>
      </ContentSection>
      <PageCta
        title="Plan your deployment"
        description="Our team can help assess devices, connectivity, and integration requirements."
        href="/contact"
        action="Talk to our team"
      />
    </main>
  )
}

const caseStudies = [
  {
    category: "health",
    client: "Clinical training partner",
    title: "Clinical simulation pilot",
    outcome: "Outcome metrics to be confirmed with the partner.",
  },
  {
    category: "education",
    client: "Education partner",
    title: "Virtual STEM learning pilot",
    outcome: "Learning measures to be confirmed with the partner.",
  },
  {
    category: "socialization",
    client: "Cultural partner",
    title: "Shared heritage experience",
    outcome: "Participation measures to be confirmed with the partner.",
  },
]

export function CaseStudiesPage() {
  const [category, setCategory] = useState("all")
  const filtered =
    category === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === category)

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Case studies"
        title="Real work, evaluated with our partners"
        description="Explore how immersive technology is being considered and tested across healthcare, education, and community settings."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Case studies" },
        ]}
      />
      <ContentSection
        eyebrow="Featured story"
        title="Clinical simulation pilot"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-5 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <Badge variant="secondary">Health</Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Working with clinical educators on repeatable practice
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A partner story should include the training need, the solution,
                and outcome measures reviewed by the institution.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={
                <Link href="/solutions/case-studies/clinical-simulation-pilot" />
              }
              variant="outline"
              className="h-10 gap-2"
            >
              Read story <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Case study library"
        title="Browse by area"
        tone="muted"
      >
        <Tabs
          value={category}
          onValueChange={(value) => setCategory(value ?? "all")}
        >
          <TabsList className="mb-5 h-auto flex-wrap justify-start bg-muted p-1">
            <TabsTrigger value="all" className="min-h-9 px-3">
              All
            </TabsTrigger>
            <TabsTrigger value="health" className="min-h-9 px-3">
              Health
            </TabsTrigger>
            <TabsTrigger value="education" className="min-h-9 px-3">
              Education
            </TabsTrigger>
            <TabsTrigger value="socialization" className="min-h-9 px-3">
              Socialization
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-4 md:grid-cols-3">
          {filtered.map((item) => (
            <Card
              key={item.category}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit capitalize">
                  {item.category}
                </Badge>
                <CardTitle className="text-foreground">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.client}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.outcome}
                </p>
                <Link
                  href={`/solutions/case-studies/${item.category}`}
                  className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-primary"
                >
                  View story{" "}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <PageCta
        title="Want to explore a use case?"
        description="Tell us about your institution and we can scope a useful first conversation."
      />
    </main>
  )
}

export function RequestDemoPage() {
  const [status, setStatus] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Demo request: ${data.get("sector")}`)
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganization: ${data.get("organization")}\nRole: ${data.get("role")}\nSector: ${data.get("sector")}\nFormat: ${data.get("format")}\n\n${data.get("message")}`
    )
    window.location.href = `mailto:info@swizzy.co.ke?subject=${subject}&body=${body}`
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
                  I agree that Swizzy may use these details to respond to my
                  request.{" "}
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
      <PageCta
        title="Prefer a direct conversation?"
        description="Email info@swizzy.co.ke or call +254 (0) 20 794 3000."
        href="/contact"
        action="Contact our team"
      />
    </main>
  )
}
