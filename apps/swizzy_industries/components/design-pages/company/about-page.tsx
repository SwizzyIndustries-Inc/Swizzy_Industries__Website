import Link from "next/link"

import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
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

import {
  ContentSection,
  FeatureCard,
  PageHero,
  StatGrid,
} from "@/components/design-pages/shared"

const leadership = [
  { name: "Kariuki Mwangi", role: "Chief Executive Officer", initials: "KM" },
  { name: "Dr. Amina Ochieng", role: "Chief Medical Officer", initials: "AO" },
  { name: "David Kiplagat", role: "VP of Learning Systems", initials: "DK" },
  {
    name: "Wanjiku Njeri",
    role: "Head of Spatial Architecture",
    initials: "WN",
  },
]

const operatingPrinciples = [
  {
    title: "Evidence over speculation",
    description:
      "We measure practical outcomes in the wards, classrooms, and communities where our systems are used.",
    icon: BookOpen,
  },
  {
    title: "Rooted in East African reality",
    description:
      "Our products are built around local curricula, infrastructure, languages, and institutional priorities.",
    icon: Landmark,
  },
  {
    title: "Uncompromising privacy",
    description:
      "We treat sensitive clinical, educational, and community information with care and accountability.",
    icon: ShieldCheck,
  },
  {
    title: "Open collaboration",
    description:
      "We work alongside clinicians, educators, engineers, and public institutions from the start.",
    icon: Network,
  },
]

export function AboutPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="About Swizzy Industries"
        title="Building Kenya's immersive future"
        description="We engineer institutional-grade spatial computing solutions that empower healthcare, education, and community across East Africa. Not games, but vital national infrastructure."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "About us" },
        ]}
      >
        <div className="flex flex-wrap gap-3 pt-1">
          <Button
            nativeButton={false}
            render={<Link href="/about/our-story" />}
            className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
          >
            Our story <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/about/team" />}
            variant="outline"
            className="h-11 rounded-xl px-5"
          >
            Meet the team
          </Button>
        </div>
      </PageHero>

      <ContentSection
        eyebrow="Corporate identity and mission"
        title="Purpose-built for African scale"
        description="A Kenyan deep-tech company creating practical spatial tools for critical institutions."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <Card className="border-border bg-card text-card-foreground">
            <CardContent className="space-y-4 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Swizzy Industries Ltd is a registered Kenyan technology company
                building spatial computing platforms for real operating
                conditions. Our multidisciplinary teams bring together
                engineering, clinical practice, and learning design.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                We focus on institutional utility: supporting clinical practice,
                extending access to practical learning, and preserving cultural
                heritage through immersive tools.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="secondary"
                  className="h-auto gap-1.5 px-3 py-1.5"
                >
                  <ShieldCheck aria-hidden="true" className="size-3.5" />{" "}
                  Kenya-based
                </Badge>
                <Badge variant="outline" className="h-auto gap-1.5 px-3 py-1.5">
                  <Network aria-hidden="true" className="size-3.5" />{" "}
                  Offline-aware systems
                </Badge>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <FeatureCard
              icon={HeartPulse}
              accent="teal"
              title="Tibika | Health"
              description="Clinical simulation and spatial tools designed to support healthcare teams."
              href="/products/tibika"
              action="Explore Tibika"
            />
            <FeatureCard
              icon={BookOpen}
              accent="blue"
              title="Elimika | Education"
              description="Immersive practical learning aligned to Kenyan classrooms and training needs."
              href="/products/elimika"
              action="Explore Elimika"
            />
            <FeatureCard
              icon={UsersRound}
              accent="coral"
              title="Jumuika | Socialization"
              description="Shared digital spaces for civic connection, creativity, and cultural memory."
              href="/products/jumuika"
              action="Explore Jumuika"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Why immersive, why now, why Kenya"
        title="Useful technology for challenges that matter"
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Clinical mastery without patient risk"
            description="Repeatable practice gives clinical teams space to build confidence before working with real patients and equipment."
          />
          <FeatureCard
            icon={BookOpen}
            accent="blue"
            title="More practical STEM learning"
            description="Virtual laboratories make interactive science and technical modules available where physical apparatus is limited."
          />
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Culture and presence across distance"
            description="Spatial experiences help communities share places, stories, and heritage with people near and far."
          />
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="The way we work"
        title="Our core operating principles"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {operatingPrinciples.map((principle) => (
            <FeatureCard
              key={principle.title}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Our people"
        title="Guided by people close to the work"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person) => (
            <Card
              key={person.name}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader className="gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-blue-100 font-heading text-lg font-bold text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  {person.initials}
                </span>
                <div>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {person.name}
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {person.role}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Button
          nativeButton={false}
          render={<Link href="/about/team" />}
          variant="link"
          className="mt-5 h-10 px-0"
        >
          Meet the leadership team <ArrowRight aria-hidden="true" />
        </Button>
      </ContentSection>

      <ContentSection
        eyebrow="A growing footprint"
        title="Swizzy Industries at a glance"
      >
        <StatGrid
          items={[
            {
              value: "Kenya",
              label: "Founded and built",
              detail: "Rooted in Nairobi, working across East Africa.",
            },
            {
              value: "3",
              label: "Connected products",
              detail: "Health, education, and social connection.",
            },
            {
              value: "XR",
              label: "Built for institutions",
              detail: "Practical immersive experiences, not games.",
            },
            {
              value: "Local",
              label: "Designed for context",
              detail: "Technology that accounts for local realities.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection
        eyebrow="Our journey so far"
        title="From a Nairobi engineering lab to field deployments"
        tone="muted"
      >
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            [
              "Foundation and lab",
              "Building the engineering foundations and first prototypes.",
            ],
            [
              "Clinical simulation beta",
              "Working with healthcare teams on practical simulation.",
            ],
            [
              "CBC STEM deployment",
              "Bringing interactive learning modules into classrooms.",
            ],
            [
              "Pan-African expansion",
              "Growing partnerships and shared spatial experiences.",
            ],
          ].map(([title, detail], index) => (
            <li key={title}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
    </main>
  )
}
