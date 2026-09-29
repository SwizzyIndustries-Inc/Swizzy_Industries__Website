import Link from "next/link"
import {
  Activity,
  ArrowRight,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  ComparisonGrid,
  ContentSection,
  FeatureCard,
  PageCta,
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
        title="How Swizzy integrates into your facility"
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
      <PageCta
        title="Explore a clinical simulation pilot"
        description="Talk with the Swizzy team about your facility, training objectives, and implementation needs."
      />
    </main>
  )
}

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
              title: "Swizzy XR virtual science",
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
      <PageCta
        title="Bring practical learning to more students"
        description="Start with your curriculum, training needs, and classroom conditions."
      />
    </main>
  )
}

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
      <PageCta
        title="Create a space for people to connect"
        description="Talk with us about a civic, cultural, or community experience."
        action="Contact our team"
        href="/contact"
      />
    </main>
  )
}
