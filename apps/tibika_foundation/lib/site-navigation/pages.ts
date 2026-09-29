import type { ComponentType } from "react"

import {
  AboutPage,
  CareersPage,
  CaseStudiesPage,
  CatalogPage,
  CompliancePage,
  ContactPage,
  EvidencePage,
  MedicalResearchPage,
  PatientCarePage,
  PricingPage,
  PublicationsPage,
  SolutionsPage,
  ClinicalTrainingPage,
} from "@/components/designed-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}
const designedPages: Record<string, DesignedPageDefinition> = {
  "/solutions": {
    title: "Clinical & research solutions",
    description: "Simulation tools for clinical training, research, and care.",
    Page: SolutionsPage,
  },
  "/solutions/clinical-training": {
    title: "Clinical training solutions",
    description: "Repeatable procedure and equipment rehearsal.",
    Page: ClinicalTrainingPage,
  },
  "/solutions/medical-research": {
    title: "Medical research & simulation",
    description: "Spatial modeling for biomedical research.",
    Page: MedicalResearchPage,
  },
  "/solutions/patient-care": {
    title: "Patient care & wellbeing",
    description: "Clinician-supervised care and rehabilitation contexts.",
    Page: PatientCarePage,
  },
  "/catalog": {
    title: "Simulation module catalog",
    description: "Review simulation subjects and intended settings.",
    Page: CatalogPage,
  },
  "/evidence": {
    title: "Evidence & outcomes",
    description: "Research evidence, outcomes, and limitations.",
    Page: EvidencePage,
  },
  "/case-studies": {
    title: "Hospital & academic case studies",
    description: "Institutional examples with clear context.",
    Page: CaseStudiesPage,
  },
  "/pricing": {
    title: "Institutional engagement models",
    description: "Plan a clinical education or research engagement.",
    Page: PricingPage,
  },
  "/about": {
    title: "About Tibika",
    description: "Clinical precision, evidence, and human care.",
    Page: AboutPage,
  },
  "/careers": {
    title: "Careers at Tibika",
    description: "Build immersive healthcare technology.",
    Page: CareersPage,
  },
  "/publications": {
    title: "Clinical publications & research",
    description: "Clinical and research publications.",
    Page: PublicationsPage,
  },
  "/compliance": {
    title: "Regulatory compliance, ethics & data notice",
    description: "Consent, ethics review, and health data safeguards.",
    Page: CompliancePage,
  },
  "/contact": {
    title: "Request an institutional consultation",
    description: "Discuss clinical training, research, or simulation needs.",
    Page: ContactPage,
  },
}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
