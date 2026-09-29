"use client"

import Link from "next/link"
import { useMemo, useState, type FormEvent } from "react"
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Cpu,
  HeartPulse,
  Lightbulb,
  MapPin,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
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
import {
  ContentSection,
  FeatureCard,
  PageCta,
  PageHero,
} from "@/components/design-pages/shared"

const cultureAreas = [
  [
    "Meaningful work",
    "Build useful technology around important real-world needs.",
    HeartPulse,
  ],
  [
    "Growth",
    "Learn across engineering, clinical practice, and education.",
    Lightbulb,
  ],
  [
    "Collaboration",
    "Work with colleagues and institutional partners.",
    UsersRound,
  ],
  [
    "Local impact",
    "Help shape technology in the communities where it is used.",
    Sparkles,
  ],
] as const

export function CareersHomePage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Careers"
        title="Help us reimagine Kenya"
        description="Join a multidisciplinary team building immersive tools for health, education, and community. Explore the work, our values, and future opportunities."
        breadcrumbs={[{ label: "Careers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/careers/open-roles" />}
            className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
          >
            See open roles <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/careers/talent-community" />}
            variant="outline"
            className="h-11 rounded-xl px-5"
          >
            Join the talent community
          </Button>
        </div>
      </PageHero>
      <section className="border-b border-border bg-muted py-8 text-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="font-heading text-xl font-semibold text-muted-foreground sm:text-2xl">
            Work on technology that serves people, institutions, and
            communities.
          </p>
        </div>
      </section>
      <ContentSection
        eyebrow="Why Swizzy"
        title="A place to build with purpose"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cultureAreas.map(([title, description, Icon], index) => (
            <FeatureCard
              key={title}
              icon={Icon}
              accent={index === 0 ? "teal" : index === 3 ? "amber" : "blue"}
              title={title}
              description={description}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection eyebrow="Culture in action" title="How we work together">
        <div className="grid gap-4 md:grid-cols-3">
          {(
            [
              [
                "Build and learn",
                "Prototype, learn from feedback, and improve the work.",
              ],
              [
                "Visit the field",
                "Spend time understanding the places and people involved.",
              ],
              [
                "Share knowledge",
                "Bring different disciplines into the same conversation.",
              ],
            ] as const
          ).map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-4 p-5">
                <span className="flex aspect-[16/9] items-center justify-center rounded-lg bg-muted text-primary">
                  {index === 0 ? (
                    <Lightbulb aria-hidden="true" className="size-8" />
                  ) : index === 1 ? (
                    <MapPin aria-hidden="true" className="size-8" />
                  ) : (
                    <UsersRound aria-hidden="true" className="size-8" />
                  )}
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Teams"
        title="Different disciplines, shared goals"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Engineering", "Software, spatial systems, and field technology."],
            [
              "Product and design",
              "User research, experience design, and product direction.",
            ],
            ["Health", "Clinical subject expertise and simulation."],
            ["Education", "Curriculum, pedagogy, and learning design."],
            ["Operations", "Delivery, procurement, and partner support."],
            [
              "Business development",
              "Institutional relationships and partnerships.",
            ],
          ].map(([team, description]) => (
            <Card
              key={team}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex items-start justify-between gap-3 p-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {team}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
                <Badge variant="outline">Role count TBD</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection eyebrow="Open roles" title="Find your place at Swizzy">
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-foreground">
                No roles are currently published here.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back later or join the talent community for future
                updates.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/careers/open-roles" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Open roles page <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Early careers"
        title="Start your career in immersive technology"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <Badge variant="secondary">
                Internships and graduate programme
              </Badge>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Explore routes into engineering, design, clinical technology,
                and education work. Programme dates and eligibility are
                confirmed when applications open.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/careers/early-careers" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Explore early careers <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
    </main>
  )
}

export function LifeBenefitsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Life at Swizzy"
        title="A place to do your best work"
        description="Get a clearer picture of the values, collaboration, and learning that shape life at Swizzy. Specific benefits and working arrangements are confirmed by the team during hiring."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Life and benefits" },
        ]}
      />
      <ContentSection
        eyebrow="What matters at work"
        title="Support for good work, built around people"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["Health and wellbeing", "Details confirmed by HR."],
              [
                "Learning and growth",
                "Development expectations discussed by role.",
              ],
              ["Flexible work", "Work model confirmed for each position."],
              [
                "Equipment and tools",
                "Role-relevant equipment discussed during hiring.",
              ],
              ["Leave", "Policies shared during the hiring process."],
              ["Mentorship", "Opportunities to learn across teams."],
              [
                "Team connection",
                "Ways to collaborate in person and remotely.",
              ],
              ["Community", "Opportunities to work alongside local partners."],
            ] as const
          ).map(([title, description], index) => (
            <FeatureCard
              key={title}
              icon={
                [
                  HeartPulse,
                  BookOpen,
                  Network,
                  BriefcaseBusiness,
                  Check,
                  Lightbulb,
                  UsersRound,
                  Sparkles,
                ][index]
              }
              accent={index === 0 ? "teal" : "blue"}
              title={title}
              description={description}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Benefits listed here are topics, not a promise of specific employment
          terms.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="A day at Swizzy"
        title="Focused work, shared learning"
      >
        <ol className="grid gap-3 md:grid-cols-4">
          {[
            ["Plan", "Align on priorities and partner needs."],
            [
              "Build",
              "Work through a design, technical, or delivery challenge.",
            ],
            ["Review", "Share progress with colleagues and subject experts."],
            ["Learn", "Capture feedback and plan the next step."],
          ].map(([title, description], index) => (
            <li key={title}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Learning and inclusion"
        title="A respectful, collaborative workplace"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Keep learning"
            description="Knowledge sharing and role-relevant development support better work."
          />
          <FeatureCard
            icon={UsersRound}
            title="Value different perspectives"
            description="We aim to create space for people with different disciplines and experiences."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Clear expectations"
            description="Hiring and team processes should be transparent and respectful."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Team traditions"
        title="Connection is part of the work"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Project demonstrations",
            "Partner learning sessions",
            "Team meetups",
          ].map((item) => (
            <Card
              key={item}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex min-h-28 items-center gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <UsersRound aria-hidden="true" className="size-5" />
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <PageCta
        title="See where you could contribute"
        description="Explore published roles or contact us about future opportunities."
        href="/careers/open-roles"
        action="See open roles"
      />
    </main>
  )
}

type Job = {
  title: string
  department: string
  location: string
  type: string
  slug: string
}
const publishedJobs: Job[] = []

export function OpenRolesPage() {
  const [query, setQuery] = useState("")
  const [department, setDepartment] = useState("all")
  const roles = useMemo(
    () =>
      publishedJobs.filter((job) => {
        const matchesDepartment =
          department === "all" || job.department === department
        const matchesQuery = `${job.title} ${job.department} ${job.location}`
          .toLowerCase()
          .includes(query.toLowerCase())
        return matchesDepartment && matchesQuery
      }),
    [department, query]
  )

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Open roles"
        title="Find your place at Swizzy"
        description="Explore current opportunities to build immersive technology with a team rooted in local needs."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Open roles" },
        ]}
      />
      <ContentSection
        eyebrow={`${roles.length} published roles`}
        title="Search opportunities"
        tone="muted"
      >
        <div className="grid gap-3 rounded-xl border border-border bg-card p-4 sm:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search roles"
              placeholder="Search title, team, location"
              className="h-10 pl-9"
            />
          </div>
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            aria-label="Filter by department"
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
          >
            <option value="all">All departments</option>
            {[
              "Engineering",
              "Product",
              "Health",
              "Education",
              "Operations",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        {roles.length ? (
          <div className="mt-4 space-y-3">
            {roles.map((job) => (
              <Card
                key={job.slug}
                className="border-border bg-card text-card-foreground"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">
                        <MapPin aria-hidden="true" className="mr-1 size-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                  <Button
                    nativeButton={false}
                    render={<Link href={`/careers/open-roles/${job.slug}`} />}
                    variant="outline"
                    className="h-10 gap-2"
                  >
                    View role <ArrowRight aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-4 border-border bg-card text-card-foreground">
            <CardContent className="space-y-3 py-10 text-center">
              <BriefcaseBusiness
                aria-hidden="true"
                className="mx-auto size-8 text-primary"
              />
              <h3 className="font-heading text-lg font-semibold text-foreground">
                No open roles are currently published
              </h3>
              <p className="mx-auto max-w-lg text-sm text-muted-foreground">
                There are no listings matching those filters. Join the talent
                community to hear about future roles.
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/careers/talent-community" />}
                variant="outline"
                className="h-10"
              >
                Join the talent community
              </Button>
            </CardContent>
          </Card>
        )}
      </ContentSection>
      <ContentSection
        eyebrow="Recruitment notice"
        title="Hiring should always be transparent"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex items-start gap-3 p-5">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-teal-accent"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Swizzy Industries does not ask candidates to pay application,
              interview, or recruitment fees. Verify opportunities through our
              official contact channels.
            </p>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Not seeing the right role?"
        description="Join our talent community to stay connected with future opportunities."
        href="/careers/talent-community"
        action="Join the community"
      />
    </main>
  )
}

export function EarlyCareersPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Early careers"
        title="Start your career in immersive technology"
        description="Explore ways students and recent graduates may build experience across engineering, design, healthcare, and education technology."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Early careers" },
        ]}
      />
      <ContentSection
        eyebrow="Programme options"
        title="Different ways to get started"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Internship",
              "A time-bound learning experience with a scoped project.",
            ],
            [
              "Graduate programme",
              "Early-career development across a relevant Swizzy team.",
            ],
            [
              "Industrial attachment",
              "Practical exposure for eligible Kenyan students.",
            ],
          ].map(([title, description]) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Programme details to be announced
                </Badge>
                <CardTitle className="text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Skill-building tracks"
        title="Learn by working across disciplines"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Cpu}
            title="Engineering"
            description="Software, device integration, and spatial systems."
          />
          <FeatureCard
            icon={Sparkles}
            title="Design"
            description="Research, interaction design, and 3D content."
          />
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Health technology"
            description="Clinical workflows, simulation, and subject review."
          />
          <FeatureCard
            icon={BookOpen}
            title="Learning systems"
            description="Curriculum, pedagogy, and educational products."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Programme journey"
        title="A transparent path from application to learning"
        tone="muted"
      >
        <ol className="grid gap-3 md:grid-cols-4">
          {[
            ["Apply", "Share your interests and experience."],
            ["Connect", "Meet the team and discuss fit."],
            ["Learn", "Join a scoped project and get support."],
            ["Reflect", "Review growth and possible next steps."],
          ].map(([title, description], index) => (
            <li key={title}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="secondary">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Eligibility"
        title="Applications should be clear and accessible"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Programme dates and eligibility are confirmed before applications open.",
            "Applicants can share accessibility needs during the process.",
            "Selection criteria are shared with each opportunity.",
            "No recruitment or application fees are charged.",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
            >
              <Check
                aria-hidden="true"
                className="size-4 shrink-0 text-teal-accent"
              />
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>
      <PageCta
        title="Hear when programmes open"
        description="Join our talent community for early-career and internship updates."
        href="/careers/talent-community"
        action="Join the community"
      />
    </main>
  )
}

export function HiringProcessPage() {
  const steps = [
    "Apply",
    "Application review",
    "Introductory conversation",
    "Skills discussion",
    "Team interview",
    "Decision",
    "Welcome",
  ]
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Hiring process"
        title="What to expect, step by step"
        description="We aim to make our hiring process clear, respectful, and relevant to the role."
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: "Hiring process" },
        ]}
      />
      <ContentSection
        eyebrow="Our process"
        title="A clear and considered journey"
        tone="muted"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {step}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Timing and participants vary by role; your recruiter will
                    explain the next step.
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Fair assessment"
        title="Relevant, structured conversations"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Target}
            title="Role-related"
            description="Activities should reflect the skills and responsibilities of the position."
          />
          <FeatureCard
            icon={UsersRound}
            title="Consistent"
            description="Candidates are assessed against shared role criteria."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Accessible"
            description="Applicants can request adjustments for interviews and tasks."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Helpful preparation"
        title="Tips for a strong application"
        tone="muted"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Connect your experience to the role requirements.",
            "Share examples of work you can discuss.",
            "Ask questions about the team and expectations.",
            "Contact us if you need an adjustment or clarification.",
          ].map((tip) => (
            <li
              key={tip}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
            >
              <Check
                aria-hidden="true"
                className="size-4 shrink-0 text-teal-accent"
              />
              {tip}
            </li>
          ))}
        </ul>
      </ContentSection>
      <ContentSection
        eyebrow="Recruitment safety"
        title="We never ask applicants for payment"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex items-start gap-3 p-5">
            <ShieldCheck
              aria-hidden="true"
              className="size-5 shrink-0 text-teal-accent"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you receive a suspicious request for money or sensitive
              financial information, do not respond. Verify opportunities with
              Swizzy using our official contact details.
            </p>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Ready to take the next step?"
        description="Review current opportunities and apply when you find a suitable role."
        href="/careers/open-roles"
        action="See open roles"
      />
    </main>
  )
}

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
        title="Stay close to Swizzy"
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
                  I agree that Swizzy may use this information to contact me
                  about career opportunities.
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
            title="Swizzy insights"
            description="Read about the work, technology, and communities we serve."
            href="/blog"
          />
        </div>
      </ContentSection>
    </main>
  )
}
