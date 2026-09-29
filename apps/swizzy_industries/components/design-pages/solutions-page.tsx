import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  Cpu,
  Layers3,
  Network,
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
import {
  ContentSection,
  FeatureCard,
  PageCta,
  PageHero,
} from "@/components/design-pages/shared"

const platformCapabilities = [
  "Synchronous multi-user sessions",
  "Responsive physics and spatial interactions",
  "Offline edge execution for local networks",
  "Supervisor telemetry and cohort oversight",
  "Kenyan data protection-aware storage",
  "Cross-device browser runtime",
]

const deploymentSteps = [
  [
    "01",
    "Needs and facility audit",
    "Map learning goals, spaces, devices, and connectivity.",
  ],
  [
    "02",
    "Curriculum calibration",
    "Align scenarios to institutional programmes and local requirements.",
  ],
  [
    "03",
    "Hardware provisioning",
    "Configure devices and local infrastructure for the deployment.",
  ],
  [
    "04",
    "Proctor training",
    "Prepare educators and supervisors to guide sessions.",
  ],
  [
    "05",
    "Continuous upgrades",
    "Review usage and keep content and systems current.",
  ],
]

const engagementOptions = [
  {
    title: "Pilot cohort hub",
    detail:
      "Begin with a defined cohort, target use case, and evaluation plan.",
    icon: UsersRound,
    accent: "blue" as const,
  },
  {
    title: "Enterprise site licence",
    detail:
      "Deploy a managed platform across departments or multiple facilities.",
    icon: Building2,
    accent: "teal" as const,
  },
  {
    title: "Custom co-development",
    detail:
      "Build new simulations and workflows alongside your subject experts.",
    icon: Layers3,
    accent: "coral" as const,
  },
]

export function SolutionsPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Products and solutions"
        title="Immersive solutions built for real-world work"
        description="Turnkey spatial computing infrastructure tailored for hospital theatres, school STEM labs, and cultural archives across Sub-Saharan Africa."
        breadcrumbs={[{ label: "Products and solutions" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/solutions/request-a-demo" />}
            className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
          >
            Request a demo <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="#ready-platforms" />}
            variant="outline"
            className="h-11 rounded-xl px-5"
          >
            Explore platforms
          </Button>
        </div>
      </PageHero>
      <ContentSection
        id="ready-platforms"
        eyebrow="Ready-to-deploy platforms"
        title="Start with a platform. Adapt it to your institution."
        description="Purpose-built experiences for healthcare, education, and shared cultural spaces."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Activity}
            accent="teal"
            title="Tibika | Health"
            description="Clinical simulation, equipment training, and patient education workflows."
            href="/products/tibika"
            action="Explore Tibika"
          />
          <FeatureCard
            icon={Layers3}
            title="Elimika | Education"
            description="Virtual science labs, curriculum-aligned modules, and vocational skills practice."
            href="/products/elimika"
            action="Explore Elimika"
          />
          <FeatureCard
            icon={UsersRound}
            accent="coral"
            title="Jumuika | Socialization"
            description="Shared civic environments, creative showcases, and cultural archives."
            href="/products/jumuika"
            action="Explore Jumuika"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Built around your requirements"
        title="Bespoke development and hardware integration"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                <Cpu aria-hidden="true" className="size-5" />
              </span>
              <CardTitle className="text-foreground">
                Bespoke development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                When a workflow needs a purpose-built spatial experience, we
                work with your teams to scope, model, test, and refine it.
              </p>
              <Link
                href="/solutions/bespoke-development"
                className="inline-flex min-h-10 items-center gap-2 font-medium text-primary hover:underline"
              >
                Discuss a custom build{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="border-border bg-card text-card-foreground">
            <CardHeader>
              <span className="flex size-11 items-center justify-center rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
                <Network aria-hidden="true" className="size-5" />
              </span>
              <CardTitle className="text-foreground">
                Hardware integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Plan device provisioning, local networking, and support around
                the equipment and infrastructure your institution already has.
              </p>
              <Link
                href="/solutions/devices-integration"
                className="inline-flex min-h-10 items-center gap-2 font-medium text-primary hover:underline"
              >
                Plan an integration{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Platform capabilities"
        title="Designed for dependable institutional use"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((capability, index) => (
            <Card
              key={capability}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="flex items-start gap-3 p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
                  {index === 0 ? (
                    <UsersRound aria-hidden="true" className="size-4" />
                  ) : index === 1 ? (
                    <Activity aria-hidden="true" className="size-4" />
                  ) : index === 2 ? (
                    <Network aria-hidden="true" className="size-4" />
                  ) : index === 3 ? (
                    <UsersRound aria-hidden="true" className="size-4" />
                  ) : index === 4 ? (
                    <ShieldCheck aria-hidden="true" className="size-4" />
                  ) : (
                    <Layers3 aria-hidden="true" className="size-4" />
                  )}
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {capability}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Our deployment process"
        title="A clear path from assessment to continued support"
        tone="muted"
      >
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {deploymentSteps.map(([number, title, description]) => (
            <li key={number}>
              <Card className="h-full border-border bg-card text-card-foreground">
                <CardContent className="space-y-3 p-4">
                  <Badge variant="outline">{number}</Badge>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection
        eyebrow="Engagement models"
        title="Choose a useful first step"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {engagementOptions.map((option) => (
            <FeatureCard
              key={option.title}
              icon={option.icon}
              accent={option.accent}
              title={option.title}
              description={option.detail}
              href="/solutions/request-a-demo"
              action="Discuss this option"
            />
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="What every deployment includes"
        title="A partnership beyond the software"
        tone="muted"
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Local needs assessment",
            "Configured devices and environments",
            "Staff onboarding",
            "Offline-aware access planning",
            "Usage review with your team",
            "Ongoing content and system updates",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground"
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
        title="Find the right solution for your institution"
        description="Share your goals and operating context with our Nairobi team."
      />
    </main>
  )
}
