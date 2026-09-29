import Link from "next/link"

import {
  Activity,
  ArrowRight,
  BookOpen,
  HeartPulse,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import {
  ContentSection,
  FeatureCard,
  PageHero,
  StatGrid,
} from "@/components/shared"

export function JumuikaProductPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Jumuika | Socialization product"
        title="Bringing people closer, wherever they are"
        description="Connecting regional creators, youth, diaspora communities, and civic initiatives inside safe, moderated spatial environments celebrating African innovation and culture."
        breadcrumbs={[
          { label: "Products", href: "/solutions" },
          { label: "Jumuika" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          className="h-11 gap-2 rounded-xl bg-blue-primary px-5 text-white hover:bg-blue-hover dark:bg-blue-primary dark:text-white"
        >
          Talk about a community space <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="A connected cultural future"
        title="Bridging distance through shared experience"
        description="Spatial environments can create new ways to gather, make, teach, and preserve culture."
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={UsersRound}
            accent="coral"
            title="Bridge the diaspora divide"
            description="Create a sense of presence across distance for families and communities."
          />
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Grow the creative economy"
            description="Give African creators new spaces to exhibit, collaborate, and reach audiences."
          />
          <FeatureCard
            icon={Landmark}
            title="Civic and youth forums"
            description="Host participatory gatherings designed around local communities."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Shared virtual spaces"
        title="Experiences for culture, learning, and civic life"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={UsersRound}
            accent="coral"
            title="Civic spaces"
            description="Shared virtual venues for public conversations and community events."
          />
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Creator showcases"
            description="Exhibitions that bring art, craft, and cultural work to new audiences."
          />
          <FeatureCard
            icon={BookOpen}
            title="Mentorship rooms"
            description="Collaborative spaces for skills, knowledge, and peer connection."
          />
          <FeatureCard
            icon={Layers3}
            title="Organizational pavilions"
            description="Interactive branded and institutional environments."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Safety and trust"
        title="Participation designed with care"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={ShieldCheck}
            title="Verified identity"
            description="Identity and age controls appropriate to the experience."
          />
          <FeatureCard
            icon={Activity}
            title="Active moderation"
            description="Clear community standards with human oversight."
          />
          <FeatureCard
            icon={UsersRound}
            title="Personal boundaries"
            description="Tools to support individual comfort in shared spaces."
          />
          <FeatureCard
            icon={Network}
            title="Data sovereignty"
            description="Respectful information practices and transparent governance."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Who participates"
        title="A broad ecosystem of people and institutions"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Creative studios and 3D artists"
            description="Build and share immersive cultural work."
          />
          <FeatureCard
            icon={Landmark}
            title="Cultural institutions"
            description="Preserve and interpret collections with communities."
          />
          <FeatureCard
            icon={UsersRound}
            title="Youth and civic movements"
            description="Bring people together around shared local priorities."
          />
          <FeatureCard
            icon={HeartPulse}
            accent="teal"
            title="Diaspora families"
            description="Stay connected to people, stories, and places."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Active community environments"
        title="Spaces rooted in Kenyan culture"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Layers3}
            accent="coral"
            title="Boma 3D Cultural Archive"
            description="A shared place for community-led heritage interpretation."
          />
          <FeatureCard
            icon={UsersRound}
            title="Nairobi Future Tech Forum"
            description="A gathering space for ideas, learning, and civic technology."
          />
          <FeatureCard
            icon={Sparkles}
            accent="coral"
            title="Swahili Coast Virtual Pavilion"
            description="Explore coastal stories and cultural knowledge in 3D."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Ecosystem metrics"
        title="Participation that can grow across East Africa"
      >
        <StatGrid
          items={[
            {
              value: "Shared",
              label: "Community spaces",
              detail: "Designed for collaboration and events.",
            },
            {
              value: "Local",
              label: "Cultural content",
              detail: "Created with people and institutions.",
            },
            {
              value: "Safe",
              label: "Participation",
              detail: "Moderation and boundaries are foundational.",
            },
            {
              value: "Regional",
              label: "Connection",
              detail: "Bring local and diaspora communities together.",
            },
          ]}
        />
      </ContentSection>
      <ContentSection
        eyebrow="Frequently asked questions"
        title="Spatial culture and society"
      >
        <div className="divide-y divide-border rounded-xl border border-border bg-card px-5">
          {[
            [
              "Who is a shared space for?",
              "Each environment is designed around a specific community, institution, or event.",
            ],
            [
              "How do you keep spaces safe?",
              "Moderation, clear conduct rules, and suitable identity and privacy controls are part of deployment planning.",
            ],
            [
              "Can cultural institutions contribute content?",
              "Yes. Content should be developed with rights holders and relevant community partners.",
            ],
            [
              "Can spaces work on different devices?",
              "Deployment planning considers device access, bandwidth, and the needs of the intended audience.",
            ],
          ].map(([question, answer]) => (
            <details key={question} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {question}
                  <span className="text-primary group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </ContentSection>
    </main>
  )
}
