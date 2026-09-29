"use client"

import {
  BookOpen,
  HeartPulse,
  Leaf,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react"

import {
  ContentSection,
  FeatureCard,
  PageHero,
  StatGrid,
} from "@/components/shared"

export function ImpactPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Impact and sustainability"
        title="Measuring what matters for Kenya"
        description="We aim to support stronger learning, clinical practice, and community connection. Our impact reporting should be grounded in evidence, transparent about limitations, and developed with partners."
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Impact" },
        ]}
      />
      <ContentSection
        eyebrow="Headline measures"
        title="A clear view of progress"
        description="Metrics below are reporting categories, not verified outcome claims. Confirm figures and sources before publication."
        tone="muted"
      >
        <StatGrid
          items={[
            {
              value: "TBD",
              label: "Learners reached",
              detail: "Source and measurement period to be confirmed.",
            },
            {
              value: "TBD",
              label: "Clinical learners",
              detail: "Source and measurement period to be confirmed.",
            },
            {
              value: "TBD",
              label: "Partner institutions",
              detail: "Source and measurement period to be confirmed.",
            },
            {
              value: "TBD",
              label: "Counties represented",
              detail: "Source and measurement period to be confirmed.",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Impact by product area"
        title="Learning, care, and connection"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Tibika | Health"
            description="Track access to repeatable clinical practice, faculty experience, and agreed learning outcomes."
          />
          <FeatureCard
            icon={Sparkles}
            title="Elimika | Education"
            description="Evaluate learner participation, educator experience, and curriculum fit in each deployment."
          />
          <FeatureCard
            icon={UsersRound}
            accent="coral"
            title="Jumuika | Socialization"
            description="Measure participation, safety, creator involvement, and community-defined value."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Stories of change"
        title="Outcomes belong to the people doing the work"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Clinical learning"
            description="A partner story can describe the challenge, the learning activity, and what the institution observed."
            href="/solutions/case-studies"
          />
          <FeatureCard
            icon={BookOpen}
            title="Classroom practice"
            description="Share educator and learner feedback alongside the curriculum context."
            href="/solutions/case-studies"
          />
          <FeatureCard
            icon={UsersRound}
            accent="coral"
            title="Community participation"
            description="Describe how a community shaped an experience and what participants valued."
            href="/solutions/case-studies"
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Responsible delivery"
        title="Access, privacy, and environmental responsibility"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Network}
            title="Inclusion and access"
            description="Consider affordability, shared devices, low bandwidth, and varied accessibility needs."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Responsible technology"
            description="Plan for patient privacy, child safety, moderation, and clear data governance."
          />
          <FeatureCard
            icon={Leaf}
            accent="teal"
            title="Device lifecycle"
            description="Track maintenance, reuse, power requirements, and responsible end-of-life handling."
          />
          <FeatureCard
            icon={Target}
            title="Measurement approach"
            description="Agree on indicators and data sources with participating institutions before a pilot."
            href="/resources"
          />
        </div>
      </ContentSection>
    </main>
  )
}
