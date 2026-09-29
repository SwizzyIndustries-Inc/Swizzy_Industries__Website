"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Download,
  ExternalLink,
  Search,
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
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { homepageImages } from "@/components/homepage/shared"
import {
  ContentSection,
  PageCta,
  PageHero,
  StatGrid,
} from "@/components/design-pages/shared"

type EditorialItem = {
  title: string
  summary: string
  category: string
  date: string
  meta: string
}

const articleItems: EditorialItem[] = [
  {
    title:
      "From Rote to Spatial: Aligning 3D Physics Modules with Kenya's Competency-Based Curriculum",
    summary:
      "How interactive spatial activities can support active learning across junior secondary physics topics.",
    category: "education",
    date: "February 28, 2025",
    meta: "4 min read",
  },
  {
    title:
      "Sub-12ms WebXR on 4G Rails: Overcoming Intermittent Fiber in Rural County Hospitals",
    summary:
      "Practical approaches to resilient immersive systems when network access varies between facilities.",
    category: "engineering",
    date: "February 20, 2025",
    meta: "7 min read",
  },
  {
    title:
      "Digitizing Maasai Artifacts: Sovereign Photogrammetry and Cultural Preservation",
    summary:
      "Why community participation and control belong at the centre of digital heritage work.",
    category: "civic",
    date: "February 12, 2025",
    meta: "6 min read",
  },
  {
    title: "Haptic Resistance Calibration in Neonatal Emergency Simulation",
    summary:
      "A closer look at how clinical experts can guide the design and review of simulation scenarios.",
    category: "health",
    date: "January 30, 2025",
    meta: "8 min read",
  },
  {
    title:
      "What Hospital Administrators Need to Know Before Investing in Spatial Headsets",
    summary:
      "Questions to ask about facility fit, staff training, content governance, and long-term support.",
    category: "basics",
    date: "January 16, 2025",
    meta: "5 min read",
  },
  {
    title:
      "EdgePod Architecture: Why Standalone Micro-Servers Beat Cloud-Only VR",
    summary:
      "A deployment note on local caching and institutional access in low-bandwidth settings.",
    category: "engineering",
    date: "January 8, 2025",
    meta: "9 min read",
  },
]

const articleCategories = [
  { value: "all", label: "All posts" },
  { value: "health", label: "Healthcare XR" },
  { value: "education", label: "Education and TVET" },
  { value: "civic", label: "Civic social" },
  { value: "basics", label: "Immersive tech 101" },
  { value: "engineering", label: "Engineering" },
]

const pressItems: EditorialItem[] = [
  {
    title:
      "Ministry of Education initiates a county STEM spatial computing pilot",
    summary:
      "A proposed rollout of virtual physics, biology, and geometry activities for technical training institutions.",
    category: "milestones",
    date: "March 10, 2025",
    meta: "4 min read",
  },
  {
    title: "How Nairobi's Swizzy Industries is rethinking medical simulation",
    summary:
      "A media feature on local immersive systems and practical clinical training needs.",
    category: "media",
    date: "February 24, 2025",
    meta: "Business Daily Africa",
  },
  {
    title: "Swizzy shares an institutional deployment update",
    summary:
      "An update on partner conversations and the next phase of spatial learning pilots.",
    category: "press-release",
    date: "February 6, 2025",
    meta: "Official dispatch",
  },
  {
    title: "Local engineering team presents at an immersive technology forum",
    summary:
      "A technical briefing on browser-based XR and offline-aware deployment models.",
    category: "awards",
    date: "January 20, 2025",
    meta: "Recognition",
  },
  {
    title: "County partners explore practical virtual science laboratories",
    summary:
      "Education stakeholders discuss ways to complement physical lab sessions with interactive modules.",
    category: "milestones",
    date: "December 12, 2024",
    meta: "Deployment milestone",
  },
]

const pressCategories = [
  { value: "all", label: "All dispatches" },
  { value: "press-release", label: "Press releases" },
  { value: "milestones", label: "Deployment milestones" },
  { value: "media", label: "Media coverage" },
  { value: "awards", label: "Awards and recognition" },
]

function FilterableFeed({
  items,
  categories,
  placeholder,
}: {
  items: EditorialItem[]
  categories: { value: string; label: string }[]
  placeholder: string
}) {
  const [category, setCategory] = useState("all")
  const [query, setQuery] = useState("")
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category
      const matchesQuery =
        !normalizedQuery ||
        `${item.title} ${item.summary} ${item.meta}`
          .toLowerCase()
          .includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [category, items, query])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <Tabs
          value={category}
          onValueChange={(value) => setCategory(value ?? "all")}
        >
          <TabsList className="h-auto w-full flex-wrap justify-start bg-muted p-1 lg:w-fit">
            {categories.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="min-h-9 px-3 text-xs sm:text-sm"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full lg:max-w-xs">
          <Search
            aria-hidden="true"
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="h-10 pl-9"
          />
        </div>
      </div>
      <p aria-live="polite" className="text-sm text-muted-foreground">
        Showing {filteredItems.length}{" "}
        {filteredItems.length === 1 ? "result" : "results"}
      </p>
      {filteredItems.length ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card
              key={item.title}
              className="h-full border-border bg-card text-card-foreground"
            >
              <CardHeader className="gap-3">
                <Badge variant="secondary" className="w-fit capitalize">
                  {item.category.replaceAll("-", " ")}
                </Badge>
                <CardTitle className="text-base leading-snug text-foreground">
                  {item.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {item.date} | {item.meta}
                </p>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <Link
                  href="#featured"
                  className="inline-flex min-h-9 items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Read more <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            No items match that search. Try another term or category.
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export function BlogPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Editorial and thought leadership"
        title="Ideas for a reimagined Kenya"
        description="Deep dives into spatial computing, clinical VR simulation, CBC educational tele-presence, and local technological sovereignty across East Africa."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Blog" },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Peer-reviewed field trials</Badge>
          <Badge variant="outline">Kenyan institutional perspectives</Badge>
          <Badge variant="outline">Education and healthcare</Badge>
        </div>
      </PageHero>
      <ContentSection
        id="featured"
        eyebrow="Research spotlight"
        title="Zero-latency surgical tele-proctoring: a clinical VR cohort"
      >
        <Card className="overflow-hidden border-border bg-card text-card-foreground lg:grid lg:grid-cols-2">
          <div className="relative min-h-64 bg-muted lg:min-h-[400px]">
            <Image
              src={homepageImages.hero}
              alt="Clinical team exploring a spatial medical simulation"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 p-5 sm:p-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Healthcare XR</Badge>
                <Badge variant="outline">
                  <Clock3 aria-hidden="true" className="mr-1 size-3" /> 6 min
                  read
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground sm:text-3xl">
                Zero-Latency Surgical Tele-Proctoring: How Kenyatta National
                Hospital is Pioneering Laparoscopic VR Cohorts
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                An examination of clinical protocols, local edge-caching
                hardware, and data governance considerations behind multi-user
                procedural rehearsal.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Dr. Amina Ochieng
                </p>
                <p className="text-xs text-muted-foreground">
                  Clinical simulation | March 14, 2025
                </p>
              </div>
              <Button
                nativeButton={false}
                render={<Link href="#recent-dispatches" />}
                className="h-10 gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
              >
                Read article <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Card>
      </ContentSection>
      <ContentSection
        id="recent-dispatches"
        eyebrow="Peer-reviewed insights"
        title="Recent dispatches and technical reports"
        tone="muted"
      >
        <FilterableFeed
          items={articleItems}
          categories={articleCategories}
          placeholder="Search research and protocols"
        />
      </ContentSection>
      <PageCta
        title="Ready to integrate spatial hardware?"
        description="Talk with our team about institutional use cases, engineering requirements, and deployment."
      />
    </main>
  )
}

export function NewsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Official dispatches and press"
        title="News and institutional press releases"
        description="Official announcements, partner updates, deployment milestones, and media coverage from Swizzy Industries."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "News" },
        ]}
      />
      <ContentSection title="Newsroom at a glance" tone="muted">
        <StatGrid
          items={[
            {
              value: "Official",
              label: "Company updates",
              detail: "Announcements from Swizzy Industries.",
            },
            {
              value: "Field",
              label: "Partner milestones",
              detail: "Updates from institutional collaborations.",
            },
            {
              value: "Media",
              label: "Coverage",
              detail: "Reporting and features about immersive technology.",
            },
            {
              value: "Nairobi",
              label: "Press contact",
              detail: "Connect with the communications team.",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Featured announcement"
        title="Clinical simulation and institutional readiness"
      >
        <Card className="border-border bg-card text-card-foreground shadow-sm">
          <CardContent className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Regulatory milestone</Badge>
                <Badge variant="outline">
                  <CalendarDays aria-hidden="true" className="mr-1 size-3" />{" "}
                  March 18, 2025
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground">
                Swizzy Industries receives statutory certification for clinical
                simulation systems
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                A featured newsroom notice on clinical governance, institutional
                deployment, and data protection considerations for spatial
                simulation systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                  <ShieldCheck aria-hidden="true" className="mr-1 size-3" />{" "}
                  Governance update
                </Badge>
                <Badge variant="outline">Nairobi, Kenya</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <Button
                nativeButton={false}
                render={<Link href="#dispatches" />}
                className="h-10 gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
              >
                Read release <ArrowRight aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                className="h-10 gap-2 rounded-lg"
                onClick={() => window.print()}
              >
                <Download aria-hidden="true" /> Print digest
              </Button>
            </div>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        id="dispatches"
        eyebrow="Newsroom"
        title="Recent institutional dispatches"
        tone="muted"
      >
        <FilterableFeed
          items={pressItems}
          categories={pressCategories}
          placeholder="Search releases and media coverage"
        />
      </ContentSection>
      <ContentSection
        eyebrow="Media relations"
        title="Press and media inquiries"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="space-y-1">
              <h3 className="font-heading font-semibold text-foreground">
                Swizzy Industries communications
              </h3>
              <p className="text-sm text-muted-foreground">
                For interviews, approved company information, and media
                requests.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={
                <Link href="mailto:info@swizzy.co.ke?subject=Media%20inquiry" />
              }
              variant="outline"
              className="h-10 gap-2"
            >
              Contact press desk <ExternalLink aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Stay informed about Swizzy"
        description="Follow new institutional updates and practical research from our teams."
        action="Browse the blog"
        href="/blog"
      />
    </main>
  )
}

const eventItems: EditorialItem[] = [
  {
    title:
      "KMPDC Clinical Simulation Masterclass: Minimally Invasive Laparoscopy in VR",
    summary:
      "A clinical learning session exploring procedural rehearsal and haptic interaction.",
    category: "upcoming",
    date: "April 4, 2025 | 09:30 EAT",
    meta: "Hybrid, Nairobi",
  },
  {
    title: "CBC Junior Secondary STEM: Synchronous Virtual Chemistry Labs",
    summary:
      "A practical briefing on curriculum-aligned virtual science activities for schools.",
    category: "upcoming",
    date: "April 15, 2025 | 14:00 EAT",
    meta: "Virtual webinar",
  },
  {
    title: "East Africa HealthTech Summit 2025: Tele-surgical Haptics",
    summary:
      "A keynote on clinical simulation, remote collaboration, and spatial interfaces.",
    category: "upcoming",
    date: "May 8, 2025 | 10:00 EAT",
    meta: "Nairobi, Kenya",
  },
  {
    title: "Spatial Anesthesia Planning: Pediatric VR Case Studies",
    summary:
      "On-demand session discussing virtual rehearsal for pediatric care scenarios.",
    category: "archive",
    date: "Recorded February 2025",
    meta: "Recording",
  },
  {
    title: "Decentralized Spatial Campuses: Engineering Curricula",
    summary:
      "A technical conversation about delivering practical learning across campuses.",
    category: "archive",
    date: "Recorded January 2025",
    meta: "Recording",
  },
  {
    title: "Spatial Digital Twins for County Urban Drainage",
    summary:
      "An introduction to shared spatial models for planning and civic infrastructure.",
    category: "archive",
    date: "Recorded December 2024",
    meta: "Recording",
  },
]

const eventCategories = [
  { value: "all", label: "All events" },
  { value: "upcoming", label: "Upcoming" },
  { value: "archive", label: "On-demand archive" },
]

const recurringSpeakers: [string, string][] = [
  ["Kariuki Mwangi", "Chief Executive Officer"],
  ["Dr. Amina Ochieng", "Lead Medical Advisor"],
  ["Wanjiku Njeri", "Head of Spatial Architecture"],
  ["David Kiplagat", "Spatial Pedagogy Lead"],
]

export function EventsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Live knowledge sharing"
        title="Learn with us, live and on-demand"
        description="Masterclasses, clinical simulation symposiums, spatial education briefings, and WebXR webinars designed for African institutional scale."
        breadcrumbs={[
          { label: "Blog and news", href: "/blog" },
          { label: "Events and webinars" },
        ]}
      />
      <ContentSection
        eyebrow="Featured webinar"
        title="Architecting sovereign spatial systems"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_280px]">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Upcoming webinar</Badge>
                <Badge variant="outline">
                  <CalendarDays aria-hidden="true" className="mr-1 size-3" />{" "}
                  March 27, 2025 | 15:00 EAT
                </Badge>
              </div>
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground">
                Architecting Sovereign Spatial Systems: Overcoming Low-Bandwidth
                Infrastructure in East Africa
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore edge caching, progressive WebXR delivery, and
                responsible institutional data practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Offline edge telemetry</Badge>
                <Badge variant="outline">Progressive WebXR</Badge>
                <Badge variant="outline">Data governance</Badge>
              </div>
              <div className="flex flex-wrap gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
                <span>Kariuki Mwangi, CEO</span>
                <span>Wanjiku Njeri, Spatial Architecture</span>
                <span>Guest moderator</span>
              </div>
            </div>
            <Card className="border-border bg-muted/50 text-card-foreground">
              <CardHeader>
                <CardTitle className="text-foreground">Event details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="flex items-start gap-2 text-muted-foreground">
                  <CalendarDays
                    aria-hidden="true"
                    className="mt-0.5 size-4 text-primary"
                  />{" "}
                  Online | Nairobi time (UTC+3)
                </p>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <UsersRound
                    aria-hidden="true"
                    className="mt-0.5 size-4 text-primary"
                  />{" "}
                  Open to institutional teams
                </p>
                <Button
                  nativeButton={false}
                  render={
                    <Link href="mailto:info@swizzy.co.ke?subject=Webinar%20registration" />
                  }
                  className="mt-2 h-10 w-full gap-2 rounded-lg bg-blue-primary text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
                >
                  Register interest <ArrowRight aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection eyebrow="Events and recordings" title="Find a session">
        <FilterableFeed
          items={eventItems}
          categories={eventCategories}
          placeholder="Search sessions and topics"
        />
      </ContentSection>
      <ContentSection
        eyebrow="Recurring speakers"
        title="People sharing practical experience"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {recurringSpeakers.map(([name, role]) => (
            <Card
              key={name}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-2 p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  {name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {name}
                </h3>
                <p className="text-xs text-muted-foreground">{role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Host a technical briefing"
        title="Bring a practical question to the conversation"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We work with institutions and technical communities to host
              focused sessions about spatial computing in practice.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              variant="outline"
              className="h-10 gap-2"
            >
              Discuss a briefing <ArrowRight aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </ContentSection>
      <PageCta
        title="Keep learning with Swizzy"
        description="Suggest a topic or invite our team to contribute to your event."
        action="Contact the team"
        href="/contact"
      />
    </main>
  )
}
