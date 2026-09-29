import {
  DeploymentSection,
  ImpactStatsSection,
} from "@/components/homepage/deployment-sections"
import {
  HeroSection,
  InstitutionalStrip,
} from "@/components/homepage/hero-sections"
import {
  CaseStudySection,
  ContactCtaSection,
  InsightsSection,
  TestimonialsSection,
} from "@/components/homepage/stories-sections"
import {
  ProductsSection,
  TechnologySection,
} from "@/components/homepage/solutions-sections"

export function HomepageSections() {
  return (
    <main className="homepage min-h-screen bg-white text-slate-body">
      <HeroSection />
      <InstitutionalStrip />
      <ProductsSection />
      <TechnologySection />
      <DeploymentSection />
      <ImpactStatsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactCtaSection />
    </main>
  )
}
