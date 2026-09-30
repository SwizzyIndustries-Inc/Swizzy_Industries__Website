import {
  CaseStudySection,
  ContactCtaSection,
  ResearchResourcesSection,
} from "@/components/homepage/stories-sections"
import { LearningWorkflowSection } from "@/components/homepage/deployment-sections"
import {
  EvidenceSection,
  ClinicalReviewSection,
} from "@/components/homepage/impact-sections"
import { HeroSection } from "@/components/homepage/hero-sections"
import {
  DomainSection,
  SimulationCatalogSection,
} from "@/components/homepage/solutions-sections"

export function HomepageSections() {
  return (
    <main className="text-foreground">
      <HeroSection />
      <DomainSection />
      <SimulationCatalogSection />
      <LearningWorkflowSection />
      <EvidenceSection />
      <CaseStudySection />
      <ClinicalReviewSection />
      <ResearchResourcesSection />
      <ContactCtaSection />
    </main>
  )
}
