import type { ComponentType } from "react"

import {
  AboutPage,
  BlogPage,
  CareersPage,
  CategoriesPage,
  ContactPage,
  ForProvidersPage,
  HomeTradePage,
  HowItWorksPage,
  ProviderAgreementPage,
  ProviderProfilePage,
  SearchPage,
  TrustSafetyPage,
} from "@/components/designed-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}
const designedPages: Record<string, DesignedPageDefinition> = {
  "/categories": {
    title: "Categories & services",
    description: "Browse local services and skilled professionals.",
    Page: CategoriesPage,
  },
  "/categories/home-trade": {
    title: "Home & trade services",
    description: "Find skilled home and trade service providers.",
    Page: HomeTradePage,
  },
  "/search": {
    title: "Search verified providers",
    description: "Compare provider profiles, reviews, and services.",
    Page: SearchPage,
  },
  "/providers/jared-ombati": {
    title: "Jared Ombati sample profile",
    description: "Sample provider profile for the Nufaika directory.",
    Page: ProviderProfilePage,
  },
  "/how-it-works": {
    title: "How Nufaika works",
    description: "Clear steps for customers and service providers.",
    Page: HowItWorksPage,
  },
  "/for-providers": {
    title: "For providers",
    description: "Present your skills and connect with customers.",
    Page: ForProvidersPage,
  },
  "/trust-safety": {
    title: "Trust & safety",
    description: "Verification and service transaction standards.",
    Page: TrustSafetyPage,
  },
  "/blog": {
    title: "Blog & guides",
    description: "Practical guides for Kenyan customers and providers.",
    Page: BlogPage,
  },
  "/about": {
    title: "About Nufaika",
    description: "A marketplace dignifying Kenyan skills and services.",
    Page: AboutPage,
  },
  "/careers": {
    title: "Careers at Nufaika",
    description: "Build opportunity for skilled communities.",
    Page: CareersPage,
  },
  "/contact": {
    title: "Contact Nufaika",
    description: "Support for services, bookings, and provider profiles.",
    Page: ContactPage,
  },
  "/provider-agreement": {
    title: "Provider agreement",
    description: "Provider responsibilities and platform standards.",
    Page: ProviderAgreementPage,
  },
}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
