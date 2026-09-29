import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Landmark,
  Network,
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
import {
  ContentSection,
  FeatureCard,
  PageCta,
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

      <PageCta
        title="Build something useful with us"
        description="Tell us about the people, training, or institutional challenge you are working to support."
      />
    </main>
  )
}

const values = [
  {
    title: "Trust and clinical rigor",
    description:
      "We prioritize safety, evidence, and expert review in high-stakes settings.",
    icon: ShieldCheck,
  },
  {
    title: "Measured national impact",
    description: "We focus on outcomes institutions can observe and evaluate.",
    icon: Target,
  },
  {
    title: "Radical inclusion",
    description:
      "Access and usability should account for different places, people, and abilities.",
    icon: UsersRound,
  },
  {
    title: "Engineering excellence",
    description: "Reliable, maintainable systems matter more than novelty.",
    icon: Sparkles,
  },
  {
    title: "Intellectual and cultural sovereignty",
    description:
      "Local knowledge and ownership belong at the center of the work.",
    icon: Landmark,
  },
  {
    title: "Institutional accountability",
    description:
      "We communicate clearly, protect information, and take responsibility.",
    icon: HeartPulse,
  },
]

export function MissionValuesPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="What guides every decision"
        title="Mission, vision and values"
        description="The institutional compass directing our engineering, partnerships, and spatial technology deployment across Kenya."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Mission, vision and values" },
        ]}
      />
      <ContentSection
        eyebrow="Our institutional mission"
        title="Make immersive computing useful, accessible, and trusted"
        tone="muted"
      >
        <Card className="border-border bg-card text-card-foreground shadow-sm">
          <CardContent className="space-y-5 p-6 sm:p-10">
            <Badge variant="secondary">Ratified at Nairobi HQ</Badge>
            <blockquote className="max-w-4xl font-heading text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
              “To transform Kenya&apos;s economy by making immersive spatial
              computing useful, accessible, and trusted across healthcare,
              education, and civic community.”
            </blockquote>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We build practical spatial infrastructure for clinical learning,
              vocational education, and cultural preservation, designed to work
              across a range of devices and connectivity conditions.
            </p>
          </CardContent>
        </Card>
      </ContentSection>
      <ContentSection
        eyebrow="Pan-African spatial horizon"
        title="A future with fewer geographic and resource barriers"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-border bg-card text-card-foreground">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <Target aria-hidden="true" className="size-8 text-primary" />
              <blockquote className="font-heading text-xl leading-snug font-semibold text-foreground sm:text-2xl">
                “A Kenya where every hospital, classroom, and community can
                reach the future through immersive experiences.”
              </blockquote>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether a medical intern is training in Lodwar, a learner is
                exploring biology in Kilifi, or an archivist is recording local
                histories, spatial tools can help people learn and participate
                across distance.
              </p>
            </CardContent>
          </Card>
          <StatGrid
            items={[
              {
                value: "47",
                label: "Counties",
                detail: "A long-term ambition for broader access.",
              },
              {
                value: "CBC",
                label: "Learning aligned",
                detail: "Curriculum-aware science and technical modules.",
              },
              {
                value: "Local",
                label: "Cultural knowledge",
                detail: "Community-led preservation and participation.",
              },
              {
                value: "Open",
                label: "Access by design",
                detail: "Experiences that account for varied infrastructure.",
              },
            ]}
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="The operating principles"
        title="Six non-negotiable core values"
        description="Every simulation, data pipeline, and institutional partnership answers to these tenets."
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              accent={
                index % 3 === 0 ? "teal" : index % 3 === 1 ? "blue" : "coral"
              }
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Values in action"
        title="Rooted in Nairobi. Engineered for Africa."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={ShieldCheck}
            title="Protect people"
            description="Privacy and safety guide how we design, deploy, and support systems."
          />
          <FeatureCard
            icon={Network}
            title="Build with partners"
            description="Institutions and communities help shape the tools they use."
          />
          <FeatureCard
            icon={Sparkles}
            title="Measure what matters"
            description="We make progress legible through clear goals and honest evaluation."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Product alignment"
        title="One mission, three connected products"
        tone="muted"
      >
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">People served</th>
                <th className="p-4 font-semibold">Our contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <th className="p-4 font-medium text-foreground">Tibika</th>
                <td className="p-4">Clinical teams and trainees</td>
                <td className="p-4">Safer, repeatable simulation</td>
              </tr>
              <tr>
                <th className="p-4 font-medium text-foreground">Elimika</th>
                <td className="p-4">Learners and educators</td>
                <td className="p-4">Practical virtual laboratories</td>
              </tr>
              <tr>
                <th className="p-4 font-medium text-foreground">Jumuika</th>
                <td className="p-4">Creators and communities</td>
                <td className="p-4">Shared cultural and civic spaces</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentSection>
      <PageCta
        title="Put the values into practice"
        description="Start a conversation about a responsible, locally grounded deployment."
      />
    </main>
  )
}

const milestones: [string, string, string][] = [
  [
    "2022",
    "Company registration and WebXR core",
    "Swizzy is established in Nairobi and begins building its browser-based spatial platform.",
  ],
  [
    "2023",
    "First clinical pilot",
    "Clinical simulation work begins with healthcare training partners.",
  ],
  [
    "2024",
    "Virtual STEM labs",
    "Curriculum-aligned learning modules expand into school and TVET settings.",
  ],
  [
    "2025",
    "County and community programmes",
    "Offline-first deployments and shared cultural spaces continue to grow.",
  ],
]

export function OurStoryPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Our journey and momentum"
        title="From an idea to a national movement"
        description="How Swizzy Industries began in Nairobi and grew into an institutional spatial computing organization."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Our story" },
        ]}
      />
      <ContentSection
        eyebrow="The genesis"
        title="Engineered for Kenya's realities"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="border-border bg-muted/50 text-card-foreground">
            <CardContent className="flex min-h-56 flex-col justify-end gap-2 p-6">
              <Badge variant="secondary" className="w-fit">
                Westlands Studio, Nairobi
              </Badge>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                First WebXR core prototyping workshop
              </h3>
              <p className="text-sm text-muted-foreground">
                A local team focused on practical access, not imported
                assumptions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card text-card-foreground">
            <CardContent className="space-y-4 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                The early work began with a simple observation: learners and
                clinicians often had too little time with specialized physical
                equipment. At the same time, many imported systems assumed
                reliable high-speed internet and costly hardware.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Swizzy set out to build browser-based immersive tools with local
                connectivity and institutional realities in mind, alongside the
                people who would use them.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Institutional milestones"
        title="The trajectory of transformation"
        tone="muted"
      >
        <ol className="relative grid gap-4 border-l border-border pl-6 md:grid-cols-2 md:gap-6">
          {milestones.map(([year, title, description]) => (
            <li key={year} className="relative">
              <span className="absolute top-5 -left-[31px] size-2.5 rounded-full bg-primary ring-4 ring-background" />
              <Card className="border-border bg-card text-card-foreground">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {year}
                  </Badge>
                  <CardTitle className="text-foreground">{title}</CardTitle>
                </CardHeader>
                <CardContent>
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
        eyebrow="Strategic product roadmap"
        title="Building for the next set of needs"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Network}
            title="Offline edge systems"
            description="Extend access to practical learning and simulation in low-connectivity settings."
          />
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Clinical learning"
            description="Support safe preparation for procedures and patient care."
          />
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Spatial heritage"
            description="Help communities capture and share cultural knowledge on their terms."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Moments from the journey"
        title="The work is built in the field"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Clinical trials",
            "Junior secondary pilots",
            "EdgePod assembly",
            "Coastal heritage scan",
          ].map((moment, index) => (
            <Card
              key={moment}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-4 p-5">
                <span className="flex aspect-[4/3] items-center justify-center rounded-lg bg-muted text-primary">
                  {index === 0 ? (
                    <HeartPulse aria-hidden="true" className="size-8" />
                  ) : index === 1 ? (
                    <BookOpen aria-hidden="true" className="size-8" />
                  ) : index === 2 ? (
                    <Network aria-hidden="true" className="size-8" />
                  ) : (
                    <Sparkles aria-hidden="true" className="size-8" />
                  )}
                </span>
                <h3 className="font-heading font-semibold text-foreground">
                  {moment}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <PageCta
        title="Help shape what comes next"
        description="Partner with a Nairobi team building immersive tools around local needs."
      />
    </main>
  )
}

const leaders: [string, string, string][] = [
  [
    "Kariuki Mwangi",
    "Chief Executive Officer",
    "Leads company strategy and institutional partnerships.",
  ],
  [
    "Dr. Amina Ochieng",
    "Chief Medical Officer",
    "Guides clinical governance and healthcare simulation.",
  ],
  [
    "David Kiplagat",
    "VP of Learning Systems",
    "Connects immersive learning modules to curriculum needs.",
  ],
  [
    "Wanjiku Njeri",
    "Head of Spatial Architecture",
    "Leads browser-based rendering and spatial systems.",
  ],
  [
    "Samuel Ombima",
    "VP of Field Engineering and Logistics",
    "Supports resilient deployments and hardware operations.",
  ],
  [
    "Dr. Faith Wanjiku",
    "Clinical Telemetry Lead",
    "Works on clinical instrumentation and sensor systems.",
  ],
]

const advisors: [string, string][] = [
  ["Prof. Peter Kiprop", "Engineering and technical education"],
  ["Agnes Mwangi", "Curriculum and education leadership"],
  ["Dr. Evans Otieno", "Clinical practice and governance"],
  ["Beatrice Cherono", "Community and institutional partnerships"],
]

export function TeamPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="People behind the work"
        title="Executive leadership and domain leads"
        description="A multidisciplinary team of engineers, clinicians, educators, and operators building practical immersive systems in Kenya."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Team and leadership" },
        ]}
      />
      <ContentSection
        eyebrow="Leadership"
        title="Close to the work, accountable for outcomes"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map(([name, role, bio], index) => (
            <Card
              key={name}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader className="gap-4">
                <div className="flex aspect-[4/3] items-end rounded-xl bg-muted p-4">
                  <Badge variant="secondary">
                    {index < 2 ? "Executive leadership" : "Domain lead"}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {name}
                  </CardTitle>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {role}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Clinical governance"
        title="Advisory board and institutional perspective"
        tone="muted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map(([name, field]) => (
            <Card
              key={name}
              className="border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  {name
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .slice(0, 2)
                    .join("")}
                </span>
                <CardTitle className="text-foreground">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{field}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Built and governed locally"
        title="Local expertise is part of the infrastructure"
      >
        <StatGrid
          items={[
            {
              value: "Kenya",
              label: "IP jurisdiction",
              detail: "Locally governed work and partnerships.",
            },
            {
              value: "Open",
              label: "Standards-minded",
              detail: "Interoperability matters across institutions.",
            },
            {
              value: "Local",
              label: "Field engineering",
              detail: "Deployment and support close to partners.",
            },
            {
              value: "Shared",
              label: "Clinical governance",
              detail: "Expert review informs high-stakes content.",
            },
          ]}
        />
      </ContentSection>
      <PageCta
        title="Work with our team"
        description="Bring your institutional challenge to the people designing the solution."
      />
    </main>
  )
}
