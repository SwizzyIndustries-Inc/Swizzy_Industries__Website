import {
  CategoriesSection,
  FeaturedProvidersSection,
} from "@/components/homepage/solutions-sections"
import { HowItWorksSection } from "@/components/homepage/deployment-sections"
import { HeroSection } from "@/components/homepage/hero-sections"
import {
  ContactCtaSection,
  ProviderStorySection,
} from "@/components/homepage/stories-sections"
import { TrustSection } from "@/components/homepage/trust-sections"

export function HomepageSections() {
  return (
    <main className="text-foreground">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProvidersSection />
      <HowItWorksSection />
      <TrustSection />
      <ProviderStorySection />
      <ContactCtaSection />
    </main>
  )
}
