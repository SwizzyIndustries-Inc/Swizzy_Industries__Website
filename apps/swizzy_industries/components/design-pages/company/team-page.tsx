import { Badge } from "@workspace/ui/components/badge"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

import {
  ContentSection,
  PageHero,
  StatGrid,
} from "@/components/design-pages/shared"

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
    </main>
  )
}
