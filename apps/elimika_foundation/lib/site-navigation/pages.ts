import type { ComponentType } from "react"

import {
  AboutPage,
  CareersPage,
  ContactPage,
  EducatorsPage,
  HigherEducationPage,
  ImpactPage,
  K12Page,
  LabsPage,
  LearningSolutionsPage,
  PricingPage,
  ResearchPage,
  SpatialLearningStudyPage,
  TVETPage,
} from "@/components/designed-pages"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}

const designedPages: Record<string, DesignedPageDefinition> = {
  "/solutions": {
    title: "Learning solutions",
    description: "Learning experiences designed around the curriculum.",
    Page: LearningSolutionsPage,
  },
  "/solutions/k-12": {
    title: "K-12 learning solutions",
    description: "Curriculum-aligned immersive learning for K-12 learners.",
    Page: K12Page,
  },
  "/solutions/higher-education": {
    title: "Higher education solutions",
    description: "Virtual labs and spatial research for university programs.",
    Page: HigherEducationPage,
  },
  "/solutions/tvet-skills": {
    title: "TVET & skills solutions",
    description:
      "Practical vocational learning through repeatable simulations.",
    Page: TVETPage,
  },
  "/solutions/educators-institutions": {
    title: "Educators & institutions",
    description: "Classroom and institutional tools for educators.",
    Page: EducatorsPage,
  },
  "/labs": {
    title: "Labs & modules",
    description:
      "Explore curriculum-mapped virtual labs and spatial simulations.",
    Page: LabsPage,
  },
  "/research": {
    title: "Blog & research",
    description: "Research, field insights, and learning outcomes.",
    Page: ResearchPage,
  },
  "/research/spatial-learning": {
    title: "Spatial learning research study",
    description: "Research on spatial mental models in Kenyan schools.",
    Page: SpatialLearningStudyPage,
  },
  "/impact": {
    title: "Impact & outcomes",
    description: "Evidence and implementation across Kenya.",
    Page: ImpactPage,
  },
  "/pricing": {
    title: "Pricing & engagement models",
    description: "Predictable institutional engagement models.",
    Page: PricingPage,
  },
  "/about": {
    title: "About Elimika",
    description: "Our mission, team, and approach to immersive learning.",
    Page: AboutPage,
  },
  "/careers": {
    title: "Careers at Elimika",
    description: "Build the future of African education with Elimika.",
    Page: CareersPage,
  },
  "/careers/open-roles": {
    title: "Open roles at Elimika",
    description: "Explore current opportunities with Elimika.",
    Page: CareersPage,
  },
  "/contact": {
    title: "Contact Elimika",
    description: "Talk with our team about immersive learning.",
    Page: ContactPage,
  },
  "/contact/request-a-demo": {
    title: "Request an institutional demo",
    description: "Discuss a demonstration for your institution.",
    Page: ContactPage,
  },
}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
