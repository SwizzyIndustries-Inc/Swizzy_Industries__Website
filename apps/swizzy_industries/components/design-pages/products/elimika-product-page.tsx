import Link from "next/link"

import {
  Activity,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Layers3,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import {
  ComparisonGrid,
  ContentSection,
  FeatureCard,
  PageHero,
} from "@/components/design-pages/shared"

export function ElimikaProductPage() {
  const subjects = [
    "Chemistry and matter",
    "Physics and mechanics",
    "Biology and anatomy",
    "Geography and earth science",
    "Agriculture and soil science",
    "Electrical and industrial wiring",
  ]

  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Elimika | Education product"
        title="Learning that leaves the classroom and reaches every learner"
        description="Equipping schools, universities, and TVET institutes across Kenya with interactive 3D virtual STEM laboratories and CBC-aligned curriculum simulations."
        breadcrumbs={[
          { label: "Products", href: "/solutions" },
          { label: "Elimika" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/solutions/request-a-demo" />}
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Plan a learning pilot <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="The practical learning gap"
        title="More learners need time doing, not just watching"
        description="Virtual practice can help schools and training centres work around physical lab constraints."
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Scarce reagents and glassware"
            description="Consumables and fragile equipment can limit how often learners experiment."
            accent="blue"
          />
          <FeatureCard
            icon={Layers3}
            title="Apparatus bottlenecks"
            description="Large classes often share too few practical stations and tools."
            accent="teal"
          />
          <FeatureCard
            icon={GraduationCap}
            title="TVET practical skill deficit"
            description="Learners need more opportunities to rehearse vocational skills."
            accent="coral"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Learning platforms"
        title="Virtual science and technical labs"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={BookOpen}
            title="CBC-aligned modules"
            description="Interactive practical activities designed to support curriculum learning."
          />
          <FeatureCard
            icon={Layers3}
            accent="teal"
            title="TVET skills simulators"
            description="Virtual rehearsal for technical and vocational processes."
          />
          <FeatureCard
            icon={UsersRound}
            title="Educator control"
            description="Give teachers tools to guide activities and track learner progress."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Safe experimentation"
            description="Explore scenarios without the same material and equipment constraints."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="CBC and technical learning"
        title="Explore practical subjects across the curriculum"
        tone="muted"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Card
              key={subject}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex items-center gap-3 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  <BookOpen aria-hidden="true" className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {subject}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Compare learning environments"
        title="Virtual practice complements physical labs"
      >
        <ComparisonGrid
          items={[
            {
              title: "Conventional physical lab",
              points: [
                "Recurring reagent and material costs",
                "Equipment availability limits repetition",
                "Learners may observe while others take turns",
              ],
            },
            {
              title: "Swizzy Industries XR virtual science",
              points: [
                "Reusable virtual experiments",
                "Repeat activities and explore variations",
                "Every learner can take an active role",
              ],
              tone: "good",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Deployment support"
        title="Turnkey classroom hardware and educator enablement"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Layers3}
            title="Classroom hardware"
            description="Device provisioning and setup matched to the learning environment."
          />
          <FeatureCard
            icon={GraduationCap}
            title="Teacher training"
            description="Digital pedagogy onboarding and support for educators."
            accent="blue"
          />
          <FeatureCard
            icon={Activity}
            title="Low-bandwidth delivery"
            description="Plan for local access and edge caching where connectivity is limited."
            accent="teal"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Learning across Africa"
        title="Latest insights in spatial learning"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="CBC curriculum alignment"
            description="Designing immersive experiences to support classroom learning objectives."
            href="/blog"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Safe practical science"
            description="How virtual labs can give learners room to experiment."
            href="/blog"
          />
          <FeatureCard
            icon={Network}
            title="Learning beyond connectivity"
            description="Making digital lessons more resilient across varied networks."
            href="/blog"
          />
        </div>
      </ContentSection>
    </main>
  )
}
