"use client"

import Link from "next/link"

import {
  Activity,
  ArrowRight,
  Building2,
  Cloud,
  Cpu,
  Database,
  HardDrive,
  Layers3,
  Network,
  UsersRound,
  Wrench,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection, FeatureCard, PageHero } from "@/components/shared"

const deviceRows = [
  [
    "Standalone VR headsets",
    "Clinical simulation, virtual labs",
    "Portable",
    "To be scoped",
  ],
  [
    "Computers and PC VR",
    "High-detail specialist experiences",
    "Room-based",
    "To be scoped",
  ],
  [
    "Tablets and phones",
    "Learning activities and mobile AR",
    "Highly portable",
    "To be scoped",
  ],
]

export function DevicesIntegrationPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Devices and integration"
        title="Works with devices and systems you already use"
        description="We assess your existing equipment, connectivity, and institutional systems before recommending a deployment approach."
        breadcrumbs={[
          { label: "Products and solutions", href: "/products" },
          { label: "Devices and integration" },
        ]}
      >
        <Button
          nativeButton={false}
          render={<Link href="/contact" />}
          variant="outline"
          className="h-11 gap-2 rounded-xl px-5"
        >
          Talk to our team <ArrowRight aria-hidden="true" />
        </Button>
      </PageHero>
      <ContentSection
        eyebrow="Supported device types"
        title="Choose equipment around the use case"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={HardDrive}
            title="Standalone VR"
            description="Self-contained headsets for guided immersive learning and simulation."
          />
          <FeatureCard
            icon={Cpu}
            title="PC-connected systems"
            description="For workflows that need additional graphics or specialist peripherals."
          />
          <FeatureCard
            icon={Layers3}
            title="Tablets and phones"
            description="Accessible devices for mobile learning and augmented experiences."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Device recommendation"
        title="Start with your people and environment"
        tone="muted"
      >
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                {[
                  "Device type",
                  "Example use",
                  "Deployment",
                  "Model compatibility",
                ].map((heading) => (
                  <th key={heading} className="p-4 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              {deviceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={cell}
                        className="p-4 font-medium text-foreground"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td key={cell} className="p-4">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Specific device models and compatibility should be confirmed during
          technical discovery.
        </p>
      </ContentSection>
      <ContentSection
        eyebrow="Integration planning"
        title="Connect with your current environment"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={UsersRound}
            title="Identity and access"
            description="Discuss account provisioning and access requirements for your institution."
          />
          <FeatureCard
            icon={Database}
            title="Learning and clinical systems"
            description="Review potential data flows with your system owners before integration."
          />
          <FeatureCard
            icon={Network}
            title="Analytics and reporting"
            description="Agree on the minimum information needed to support evaluation."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Deployment models"
        title="Cloud, local, or hybrid options"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Cloud}
            title="Cloud-connected"
            description="For institutions with reliable internet access and approved cloud requirements."
          />
          <FeatureCard
            icon={HardDrive}
            accent="teal"
            title="Local network"
            description="For experiences that need to remain available within a facility or campus."
          />
          <FeatureCard
            icon={Network}
            title="Hybrid"
            description="Combine online management with local access where it fits the use case."
          />
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Hardware setup"
        title="Advise, configure, train, support"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Advise", "Review the use case and requirements."],
            ["Supply", "Agree on device and procurement needs."],
            ["Configure", "Set up devices, access, and local networking."],
            ["Train", "Prepare educators and administrators."],
          ].map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-3 p-5">
                <Badge variant="secondary">0{index + 1}</Badge>
                <h3 className="font-heading font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>
      <ContentSection
        eyebrow="Support and maintenance"
        title="Support plans shaped around deployment needs"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Wrench}
            title="Standard"
            description="Documentation and support channels for routine deployment questions."
          />
          <FeatureCard
            icon={Activity}
            title="Priority"
            description="A planned response approach for active institutional programmes."
          />
          <FeatureCard
            icon={Building2}
            title="Enterprise"
            description="A support agreement scoped to your organization and operating needs."
          />
        </div>
      </ContentSection>
    </main>
  )
}
