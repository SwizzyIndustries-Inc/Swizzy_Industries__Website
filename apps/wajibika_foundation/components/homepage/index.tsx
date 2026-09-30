import { AccountabilitySection } from "@/components/homepage/accountability-sections"
import {
  CampaignsSection,
  IssueAreasSection,
} from "@/components/homepage/issues-sections"
import { ActionWorkflowSection } from "@/components/homepage/workflow-sections"
import { HeroSection } from "@/components/homepage/hero-sections"
import {
  ContactCtaSection,
  PartnersSection,
  VoicesStoriesSection,
} from "@/components/homepage/stories-sections"

export function HomepageSections() {
  return (
    <main className="text-foreground">
      <HeroSection />
      <IssueAreasSection />
      <CampaignsSection />
      <ActionWorkflowSection />
      <AccountabilitySection />
      <VoicesStoriesSection />
      <PartnersSection />
      <ContactCtaSection />
    </main>
  )
}
