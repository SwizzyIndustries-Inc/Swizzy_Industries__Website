import Link from "next/link"

import {
  Activity,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import {
  ComparisonGrid,
  ContentSection,
  FeatureCard,
  PageHero,
  StatGrid,
} from "@/components/design-pages/shared"

export function TibikaProductPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Tibika | Health product"
        title="Immersive technology for safer, smarter care"
        description="Empowering clinical teams, medical trainees, and biomedical engineers across Kenya with zero-risk virtual simulations of complex procedures and critical ICU machinery."
        breadcrumbs={[
          { label: "Products", href: "/solutions" },
          { label: "Tibika" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/solutions/request-a-demo" />}
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Discuss a clinical pilot <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="The clinical challenge"
        title="Practice should not depend on scarce equipment"
        description="Healthcare teams need the space to learn, repeat, and prepare for complex situations."
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Layers3}
            title="Limited equipment access"
            description="Specialized equipment is expensive, shared, and needed for patient care."
            accent="teal"
          />
          <FeatureCard
            icon={UsersRound}
            title="Specialist shortages"
            description="Teams need scalable ways to practice and share specialist knowledge across facilities."
            accent="blue"
          />
          <FeatureCard
            icon={Activity}
            title="Rare complication readiness"
            description="Some urgent scenarios are too uncommon to rehearse on real patients or equipment."
            accent="coral"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Clinical simulation"
        title="Training tools shaped around real workflows"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Equipment training simulators"
            description="Practice with virtual representations of critical care and biomedical equipment."
          />
          <FeatureCard
            icon={Activity}
            accent="teal"
            title="Clinical procedure practice"
            description="Repeat procedural steps in a safe, guided virtual environment."
          />
          <FeatureCard
            icon={UsersRound}
            title="Patient education"
            description="Use spatial models to make complex care plans easier to understand."
          />
          <FeatureCard
            icon={Layers3}
            title="Care team collaboration"
            description="Bring multiple roles together around the same scenario and shared view."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Clinical deployment"
        title="How Swizzy Industries integrates into your facility"
        tone="muted"
      >
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            [
              "01",
              "Assess infrastructure",
              "Review learning objectives, devices, and connectivity.",
            ],
            [
              "02",
              "Configure digital twins",
              "Adapt simulations to equipment and local procedures.",
            ],
            [
              "03",
              "Train clinical staff",
              "Support faculty and clinical trainers through onboarding.",
            ],
            [
              "04",
              "Measure competency",
              "Review usage and agreed learning outcomes with partners.",
            ],
          ].map(([number, title, detail]) => (
            <li key={number}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-5">
                  <Badge variant="secondary">{number}</Badge>
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
      <ContentSection
        eyebrow="Built for healthcare leadership"
        title="Tailored for teams across East Africa"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Landmark}
            title="Hospital and county health directors"
            description="Plan training capacity, deployment, and evaluation around facility priorities."
          />
          <FeatureCard
            icon={GraduationCap}
            title="Clinical educators and deans"
            description="Build reusable learning scenarios that fit existing teaching programmes."
          />
          <FeatureCard
            icon={Activity}
            accent="teal"
            title="Biomedical engineers"
            description="Train on equipment workflows without taking clinical machines out of service."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Field outcomes"
        title="Measurable impact across clinical wards"
        tone="muted"
      >
        <StatGrid
          items={[
            {
              value: "Repeatable",
              label: "Practice",
              detail:
                "Run scenarios again without consuming clinical supplies.",
            },
            {
              value: "Shared",
              label: "Learning",
              detail: "Bring clinical teams together around common procedures.",
            },
            {
              value: "Local",
              label: "Deployment",
              detail: "Plan around facility devices and network conditions.",
            },
            {
              value: "Reviewed",
              label: "Evidence",
              detail: "Evaluate outcomes with institutional partners.",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="System integration"
        title="Designed to fit clinical environments"
      >
        <ComparisonGrid
          items={[
            {
              title: "Facility-ready deployment",
              points: [
                "Needs and infrastructure assessment",
                "Device provisioning and setup",
                "Staff onboarding and support",
              ],
              tone: "good",
            },
            {
              title: "Clinical governance",
              points: [
                "Partner review of clinical scenarios",
                "Clear data handling responsibilities",
                "Evaluation aligned to learning goals",
              ],
            },
          ]}
        />
      </ContentSection>
    </main>
  )
}
