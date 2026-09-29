import {
  HeartPulse,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Card, CardContent } from "@workspace/ui/components/card"

import {
  ContentSection,
  FeatureCard,
  PageHero,
  StatGrid,
} from "@/components/shared"

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
    </main>
  )
}
