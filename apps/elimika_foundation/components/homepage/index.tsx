import {
  CaseStudySection,
  ContactCtaSection,
} from "@/components/homepage/stories-sections"
import { LearningProcessSection } from "@/components/homepage/deployment-sections"
import { HeroSection } from "@/components/homepage/hero-sections"
import {
  ImpactStatsSection,
  InstitutionalStrip,
} from "@/components/homepage/impact-sections"
import {
  LabCatalogSection,
  LearningTracksSection,
} from "@/components/homepage/solutions-sections"

export function HomepageExperience() {
  return (
    <main className="text-foreground">
      <HeroSection />
      <LearningTracksSection />
      <LabCatalogSection />
      <LearningProcessSection />
      <ImpactStatsSection />
      <InstitutionalStrip />
      <CaseStudySection />
      <ContactCtaSection />
    </main>
  )
}
