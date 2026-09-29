import { Activity, Clock3, ShieldCheck, UsersRound } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import {
  ContentSection,
  FeatureCard,
  PageHero,
} from "@/components/design-pages/shared"

import { ContactInquiryForm } from "@/components/design-pages/contact/contact-inquiry-form"

import { DirectContactChannels } from "@/components/design-pages/contact/direct-contact-channels"

import { NairobiLocationSection } from "@/components/design-pages/contact/nairobi-location-section"

import { InstitutionalInquiryFaq } from "@/components/design-pages/contact/institutional-inquiry-faq"

export function ContactPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <PageHero
        section="Direct collaboration and inquiries"
        title="Let's talk about your Kenya, reimagined"
        description="Connect directly with our spatial engineering lab, clinical simulation advisors, and institutional deployment teams in Nairobi."
        breadcrumbs={[{ label: "Contacts" }]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary" className="h-auto gap-2 px-3 py-1.5">
            <span className="size-2 rounded-full bg-teal-accent" /> Nairobi team
            available
          </Badge>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" className="size-4" /> Typical reply
            within one business day
          </span>
        </div>
      </PageHero>

      <ContentSection title="Start an institutional conversation" tone="muted">
        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactInquiryForm />

          <DirectContactChannels />
        </div>
      </ContentSection>

      <NairobiLocationSection />

      <ContentSection
        eyebrow="Our service commitments"
        title="Clear, human support"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={Clock3}
            title="Human response"
            description="We aim to respond to institutional inquiries within one business day."
          />
          <FeatureCard
            icon={ShieldCheck}
            accent="teal"
            title="Respectful data handling"
            description="Inquiry details are used to respond and route your request."
          />
          <FeatureCard
            icon={UsersRound}
            title="Direct expertise"
            description="We connect you with the team closest to your institutional needs."
          />
        </div>
      </ContentSection>

      <InstitutionalInquiryFaq />
      <section className="border-t border-border bg-muted/40 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-6 gap-y-3 px-5 text-sm text-muted-foreground sm:px-8">
          <span className="inline-flex items-center gap-2">
            <Activity aria-hidden="true" className="size-4 text-teal-accent" />{" "}
            Nairobi lab status: available
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-4 text-primary" />{" "}
            Kenya Data Protection Act-aware practices
          </span>
        </div>
      </section>
    </main>
  )
}
