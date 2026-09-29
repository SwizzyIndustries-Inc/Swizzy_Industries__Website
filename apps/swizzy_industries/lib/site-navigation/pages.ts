import type { ComponentType } from "react"

import {
  AboutPage,
  MissionValuesPage,
  OurStoryPage,
  TeamPage,
} from "@/components/design-pages/company-pages"
import {
  CareersHomePage,
  EarlyCareersPage,
  HiringProcessPage,
  LifeBenefitsPage,
  OpenRolesPage,
  TalentCommunityPage,
} from "@/components/design-pages/career-pages"
import { ContactPage } from "@/components/design-pages/contact-page"
import {
  GalleryPage,
  PressKitPage,
  ResourcesPage,
} from "@/components/design-pages/library-pages"
import {
  BlogPage,
  EventsPage,
  NewsPage,
} from "@/components/design-pages/editorial-pages"
import {
  ElimikaProductPage,
  JumuikaProductPage,
  TibikaProductPage,
} from "@/components/design-pages/pillar-pages"
import {
  ImpactPage,
  PartnersPage,
  ProductsOverviewPage,
} from "@/components/design-pages/organization-pages"
import {
  BespokeDevelopmentPage,
  CaseStudiesPage,
  DevicesIntegrationPage,
  RequestDemoPage,
} from "@/components/design-pages/solution-pages"
import { SolutionsPage } from "@/components/design-pages/solutions-page"
import {
  DynamicDetailPage,
  LegalPage,
  SearchPage,
  SitemapPage,
  ThankYouPage,
} from "@/components/design-pages/utility-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}

const tibikaPage: DesignedPageDefinition = {
  title: "Tibika | Health",
  description: "Immersive technology for safer, smarter care.",
  Page: TibikaProductPage,
}

const elimikaPage: DesignedPageDefinition = {
  title: "Elimika | Education",
  description:
    "Interactive 3D virtual STEM laboratories and curriculum simulations.",
  Page: ElimikaProductPage,
}

const jumuikaPage: DesignedPageDefinition = {
  title: "Jumuika | Socialization",
  description:
    "Safe spatial environments for community, culture, and civic participation.",
  Page: JumuikaProductPage,
}

const designedPages: Record<string, DesignedPageDefinition> = {
  "/about": {
    title: "About Us",
    description:
      "Learn about Swizzy Industries and our work in immersive technology.",
    Page: AboutPage,
  },
  "/about/mission-vision-values": {
    title: "Mission, Vision and Values",
    description:
      "The principles guiding Swizzy Industries' work and partnerships.",
    Page: MissionValuesPage,
  },
  "/about/our-story": {
    title: "Our Story",
    description:
      "How Swizzy Industries began in Nairobi and grew its work across Kenya.",
    Page: OurStoryPage,
  },
  "/about/team": {
    title: "Team and Leadership",
    description: "Meet the multidisciplinary team behind Swizzy Industries.",
    Page: TeamPage,
  },
  "/partners": {
    title: "Partners and Investors",
    description: "Explore partnership opportunities with Swizzy Industries.",
    Page: PartnersPage,
  },
  "/impact": {
    title: "Impact and Sustainability",
    description:
      "Learn how Swizzy Industries measures responsible impact across Kenya.",
    Page: ImpactPage,
  },
  "/pillars": {
    title: "Products Overview",
    description:
      "Explore the Swizzy Industries products for health, education, and community.",
    Page: ProductsOverviewPage,
  },
  "/solutions": {
    title: "Solutions Overview",
    description:
      "Explore immersive platforms, custom development, and deployment support.",
    Page: SolutionsPage,
  },
  "/products": {
    title: "Products and Solutions",
    description:
      "Explore Swizzy Industries products and institutional immersive technology solutions.",
    Page: ProductsOverviewPage,
  },
  "/products/tibika": tibikaPage,
  "/products/elimika": elimikaPage,
  "/products/jumuika": jumuikaPage,
  "/pillars/health": tibikaPage,
  "/pillars/education": elimikaPage,
  "/pillars/socialization": jumuikaPage,
  "/blog": {
    title: "Blog and Insights",
    description:
      "Ideas on spatial computing, clinical simulation, and learning across East Africa.",
    Page: BlogPage,
  },
  "/news": {
    title: "News and Press Releases",
    description: "Company announcements, partner updates, and media coverage.",
    Page: NewsPage,
  },
  "/events": {
    title: "Events and Webinars",
    description:
      "Live and on-demand sessions on immersive technology in practice.",
    Page: EventsPage,
  },
  "/solutions/bespoke-development": {
    title: "Bespoke Development",
    description: "Custom immersive software for specific institutional needs.",
    Page: BespokeDevelopmentPage,
  },
  "/solutions/devices-integration": {
    title: "Devices and Integration",
    description:
      "Plan devices, connectivity, and system integration for deployment.",
    Page: DevicesIntegrationPage,
  },
  "/solutions/case-studies": {
    title: "Case Studies",
    description: "Explore institutional immersive technology use cases.",
    Page: CaseStudiesPage,
  },
  "/solutions/request-a-demo": {
    title: "Request a Demo",
    description:
      "Request a tailored walkthrough of Swizzy Industries products and solutions.",
    Page: RequestDemoPage,
  },
  "/resources": {
    title: "Resource Library",
    description:
      "Browse Swizzy Industries product information, guides, and resources.",
    Page: ResourcesPage,
  },
  "/press-kit": {
    title: "Press and Media Kit",
    description:
      "Company facts, approved brand information, and media contact.",
    Page: PressKitPage,
  },
  "/gallery": {
    title: "Gallery",
    description:
      "Explore moments from Swizzy Industries' immersive technology work.",
    Page: GalleryPage,
  },
  "/careers": {
    title: "Careers at Swizzy Industries",
    description:
      "Learn about working at Swizzy Industries and explore opportunities.",
    Page: CareersHomePage,
  },
  "/careers/life-and-benefits": {
    title: "Life and Benefits",
    description:
      "Learn about life, development, and working at Swizzy Industries.",
    Page: LifeBenefitsPage,
  },
  "/careers/open-roles": {
    title: "Open Roles",
    description: "Search current opportunities at Swizzy Industries.",
    Page: OpenRolesPage,
  },
  "/careers/early-careers": {
    title: "Internships and Graduate Programme",
    description: "Explore early-career opportunities at Swizzy Industries.",
    Page: EarlyCareersPage,
  },
  "/careers/hiring-process": {
    title: "Hiring Process",
    description:
      "Understand each step in the Swizzy Industries hiring process.",
    Page: HiringProcessPage,
  },
  "/careers/talent-community": {
    title: "Talent Community",
    description:
      "Stay connected with future opportunities at Swizzy Industries.",
    Page: TalentCommunityPage,
  },
  "/search": {
    title: "Search Swizzy Industries",
    description:
      "Search pages, insights, resources, and opportunities at Swizzy Industries.",
    Page: SearchPage,
  },
  "/thank-you": {
    title: "Thank You",
    description:
      "Confirmation and next steps after contacting Swizzy Industries.",
    Page: ThankYouPage,
  },
  "/legal/privacy": {
    title: "Privacy Policy",
    description: "How Swizzy Industries handles personal information.",
    Page: LegalPage,
  },
  "/legal/terms": {
    title: "Terms of Use",
    description: "Terms for using Swizzy Industries websites.",
    Page: LegalPage,
  },
  "/legal/cookies": {
    title: "Cookie Policy",
    description: "Information about cookies and privacy choices.",
    Page: LegalPage,
  },
  "/legal/accessibility": {
    title: "Accessibility Statement",
    description:
      "Accessibility information and feedback for Swizzy Industries.",
    Page: LegalPage,
  },
  "/sitemap": {
    title: "Sitemap",
    description: "Browse all main sections of the Swizzy Industries website.",
    Page: SitemapPage,
  },
  "/contact": {
    title: "Contact Swizzy Industries",
    description:
      "Contact our Nairobi team about institutional deployments and partnerships.",
    Page: ContactPage,
  },
}

export function getDesignedPage(pathname: string) {
  const staticPage = designedPages[pathname]
  if (staticPage) return staticPage

  const detailPatterns = [
    { pattern: /^\/(?:blog|news|events)\/[^/]+$/, title: "Article or event" },
    { pattern: /^\/solutions\/case-studies\/[^/]+$/, title: "Case Study" },
    { pattern: /^\/careers\/open-roles\/[^/]+$/, title: "Role Details" },
    { pattern: /^\/about\/team\/[^/]+$/, title: "Team Profile" },
  ]
  const detail = detailPatterns.find(({ pattern }) => pattern.test(pathname))

  return detail
    ? {
        title: detail.title,
        description: "Details from Swizzy Industries.",
        Page: DynamicDetailPage,
      }
    : undefined
}
