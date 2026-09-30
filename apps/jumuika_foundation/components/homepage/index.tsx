import {
  ContactCtaSection,
  DiasporaStorySection,
} from "@/components/homepage/stories-sections"
import { HowItWorksSection } from "@/components/homepage/connection-sections"
import { HeroSection } from "@/components/homepage/hero-sections"
import {
  LiveSpacesSection,
  SpaceTypesSection,
} from "@/components/homepage/spaces-sections"
import { TrustSafetySection } from "@/components/homepage/trust-sections"
import { UpcomingEventsSection } from "@/components/homepage/events-sections"

export function HomepageSections() {
  return (
    <main className="text-foreground">
      <HeroSection />
      <SpaceTypesSection />
      <LiveSpacesSection />
      <HowItWorksSection />
      <DiasporaStorySection />
      <TrustSafetySection />
      <UpcomingEventsSection />
      <ContactCtaSection />
    </main>
  )
}
