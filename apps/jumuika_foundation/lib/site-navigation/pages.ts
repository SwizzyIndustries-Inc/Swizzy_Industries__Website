import type { ComponentType } from "react"

import {
  AboutPage,
  CareersPage,
  CommunityStandardsPage,
  ContactPage,
  DiasporaPage,
  DiasporaStoryPage,
  EventRsvpPage,
  EventsPage,
  FamilyFriendsPage,
  GetStartedPage,
  SafetyPage,
  SpacePreviewPage,
  SpacesPage,
  StoriesPage,
} from "@/components/designed-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}

const designedPages: Record<string, DesignedPageDefinition> = {
  "/spaces": {
    title: "Spaces & communities",
    description: "Find a shared space for family, culture, and community.",
    Page: SpacesPage,
  },
  "/spaces/family-friends": {
    title: "Family & friends spaces",
    description: "Private rooms for the people you know best.",
    Page: FamilyFriendsPage,
  },
  "/spaces/diaspora-heritage": {
    title: "Diaspora & heritage spaces",
    description: "Keep culture and community close across distance.",
    Page: DiasporaPage,
  },
  "/spaces/nairobi-sunset-verandah": {
    title: "Nairobi Sunset Verandah",
    description: "Preview a shared Jumuika gathering space.",
    Page: SpacePreviewPage,
  },
  "/events": {
    title: "Events & gatherings",
    description: "Find live conversations and community events.",
    Page: EventsPage,
  },
  "/events/diaspora-jam-session": {
    title: "Diaspora Jam Session RSVP",
    description: "Details for a shared music gathering.",
    Page: EventRsvpPage,
  },
  "/download": {
    title: "Get started with Jumuika",
    description: "Gather from anywhere with Jumuika.",
    Page: GetStartedPage,
  },
  "/safety-privacy": {
    title: "Safety & privacy",
    description: "Privacy choices and clear community expectations.",
    Page: SafetyPage,
  },
  "/community-standards": {
    title: "Community standards",
    description: "Governance for dignity in shared spaces.",
    Page: CommunityStandardsPage,
  },
  "/stories": {
    title: "Stories",
    description: "Stories of family, heritage, and belonging.",
    Page: StoriesPage,
  },
  "/stories/diaspora-chronicles": {
    title: "Diaspora chronicles",
    description: "Real warmth across distance.",
    Page: DiasporaStoryPage,
  },
  "/about": {
    title: "About Jumuika",
    description: "Our belief in presence and connection.",
    Page: AboutPage,
  },
  "/careers": {
    title: "Careers at Jumuika",
    description: "Build spaces where people meet.",
    Page: CareersPage,
  },
  "/contact": {
    title: "Community support",
    description: "Contact the Jumuika support team.",
    Page: ContactPage,
  },
}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
