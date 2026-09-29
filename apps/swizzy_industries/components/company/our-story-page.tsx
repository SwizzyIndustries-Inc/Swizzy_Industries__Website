import { BookOpen, HeartPulse, Network, Sparkles } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

const milestones: [string, string, string][] = [
  [
    "2022",
    "Company registration and WebXR core",
    "Swizzy Industries is established in Nairobi and begins building its browser-based spatial platform.",
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
                Swizzy Industries set out to build browser-based immersive tools
                with local connectivity and institutional realities in mind,
                alongside the people who would use them.
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
    </main>
  )
}
