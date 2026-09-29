import type { ComponentType } from "react"

import {
  AboutPage,
  AccountabilityPage,
  CampaignDocketPage,
  CareersPage,
  CommunityGuidelinesPage,
  ContactPage,
  EconomyIssuesPage,
  IssuesPage,
  PartnersPage,
  RaiseIssuePage,
  VoicesPage,
  WeighbridgesStoryPage,
} from "@/components/designed-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}
const designedPages: Record<string, DesignedPageDefinition> = {
  "/issues": {
    title: "Issues & campaigns",
    description: "Community concerns, campaigns, and tracked responses.",
    Page: IssuesPage,
  },
  "/issues/economy": {
    title: "Economy & livelihoods",
    description: "Community issues about work, trade, and household costs.",
    Page: EconomyIssuesPage,
  },
  "/accountability-tracker": {
    title: "Accountability tracker",
    description: "Track response stages and recorded follow-up.",
    Page: AccountabilityPage,
  },
  "/campaigns/mama-mboga-livelihood-protection": {
    title: "Mama Mboga campaign docket",
    description: "Illustrative campaign docket with sourcing status.",
    Page: CampaignDocketPage,
  },
  "/voices": {
    title: "Voices & stories",
    description: "Community perspectives with context and source status.",
    Page: VoicesPage,
  },
  "/stories/behind-the-weighbridges": {
    title: "Behind the weighbridges",
    description:
      "Illustrative community story awaiting independent verification.",
    Page: WeighbridgesStoryPage,
  },
  "/partners": {
    title: "Partners & organizations",
    description: "Civic partnerships grounded in accountability.",
    Page: PartnersPage,
  },
  "/raise-an-issue": {
    title: "Raise a civic issue",
    description: "Save a structured issue draft on this device.",
    Page: RaiseIssuePage,
  },
  "/community-guidelines": {
    title: "Community guidelines & moderation charter",
    description: "Sourcing, moderation, and participant safety standards.",
    Page: CommunityGuidelinesPage,
  },
  "/about": {
    title: "About Wajibika",
    description: "Evidence-aware civic action and public accountability.",
    Page: AboutPage,
  },
  "/careers": {
    title: "Careers & civic fellowships",
    description: "Build accountable civic technology.",
    Page: CareersPage,
  },
  "/contact": {
    title: "Contact & issue escalation",
    description: "Secure communication for citizens and partners.",
    Page: ContactPage,
  },
}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
