import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  FileText,
  HeartPulse,
  Microscope,
  School,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export type SiteLink = { title: string; href: string }

export type NavigationEntry = SiteLink & {
  description: string
  descriptionSw?: string
  color?: string
  variant?: "parent-company"
  icon: LucideIcon
}
export type NavigationGroup = { title: string; links: NavigationEntry[] }
export type MegaMenuKey = "home" | "solutions" | "catalog" | "careers"
export type MegaMenuDefinition = {
  sectionLink: SiteLink
  groups: NavigationGroup[]
  featured: {
    eyebrow: string
    title: string
    description: string
    href: string
    action: string
    icon: LucideIcon
  }
}

export const primaryNavigation = [
  { key: "home", title: "Home", href: "/" },
  { key: "solutions", title: "Solutions", href: "/solutions" },
  { key: "catalog", title: "Simulation catalog", href: "/catalog" },
  { key: "careers", title: "Careers", href: "/careers" },
  { key: "contact", title: "Contact", href: "/contact" },
] as const

function createMegaMenus(
  products: ProductLink[]
): Record<MegaMenuKey, MegaMenuDefinition> {
  const productEntries: NavigationEntry[] = products.map((product) => ({
    title: product.title,
    description: product.description,
    descriptionSw: product.descriptionSw,
    color: product.color,
    href: product.href,
    variant: product.parent ? "parent-company" : undefined,
    icon: product.icon,
  }))

  return {
    home: {
      sectionLink: { title: "Home", href: "/" },
      groups: [
        {
          title: "About Tibika",
          links: [
            {
              title: "About Tibika",
              description: "Learn about Tibika and our clinical technology.",
              href: "/about",
              icon: HeartPulse,
            },
            {
              title: "Clinical solutions",
              description: "Explore technology for clinical training and care.",
              href: "/solutions",
              icon: Stethoscope,
            },
            {
              title: "Careers at Tibika",
              description:
                "Help advance clinical training and patient wellbeing.",
              href: "/careers",
              icon: BriefcaseBusiness,
            },
            {
              title: "Clinical training",
              description:
                "Practice reviewed procedural and equipment workflows.",
              href: "/solutions/clinical-training",
              icon: Stethoscope,
            },
            {
              title: "Patient care & wellbeing",
              description:
                "Explore rehabilitation and patient-support contexts.",
              href: "/solutions/patient-care",
              icon: HeartPulse,
            },
            {
              title: "Simulation catalog",
              description: "Browse clinical and care simulation modules.",
              href: "/catalog",
              icon: ClipboardList,
            },
          ],
        },
        {
          title: "Research & evidence",
          links: [
            {
              title: "Evidence & outcomes",
              description: "Review evidence summaries and evaluation context.",
              href: "/evidence",
              icon: FileText,
            },
            {
              title: "Publications",
              description: "Browse research papers and academic outputs.",
              href: "/publications",
              icon: BookOpen,
            },
            {
              title: "Contact Tibika",
              description: "Talk with our team about clinical technology.",
              href: "/contact",
              icon: UsersRound,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Clinical technology",
        title: "Practice precision. Protect life.",
        description:
          "Discover clinical training, research, and patient wellbeing solutions.",
        href: "/solutions",
        action: "Explore solutions",
        icon: Stethoscope,
      },
    },
    solutions: {
      sectionLink: { title: "Solutions", href: "/solutions" },
      groups: [
        {
          title: "Clinical & care",
          links: [
            {
              title: "Clinical training",
              description:
                "Practice reviewed procedural and equipment workflows.",
              href: "/solutions/clinical-training",
              icon: Stethoscope,
            },
            {
              title: "Patient care & wellbeing",
              description:
                "Explore rehabilitation and patient-support contexts.",
              href: "/solutions/patient-care",
              icon: HeartPulse,
            },
            {
              title: "Rehabilitation",
              description:
                "Browse supervised rehabilitation simulation contexts.",
              href: "/catalog/rehabilitation",
              icon: HeartPulse,
            },
          ],
        },
        {
          title: "Research, deployment & support",
          links: [
            {
              title: "Medical research",
              description:
                "Explore spatial models and research simulation tools.",
              href: "/solutions/medical-research",
              icon: Microscope,
            },
            {
              title: "Institutional deployment",
              description:
                "Discuss governance, review, and implementation needs.",
              href: "/solutions/institutions",
              icon: Building2,
            },
            {
              title: "Clinical trials & pilots",
              description:
                "Learn about institutional pilots and review processes.",
              href: "/evidence/trials",
              icon: ClipboardList,
            },
            {
              title: "Compliance & safeguards",
              description:
                "Read about consent, privacy, and content safeguards.",
              href: "/compliance",
              icon: ShieldCheck,
            },
            {
              title: "Request a consultation",
              description: "Talk with our team about training and simulation.",
              href: "/contact",
              icon: UsersRound,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Designed for clinical context",
        title: "Practice precision. Protect life.",
        description:
          "Talk with our team about training, research, and simulation.",
        href: "/contact",
        action: "Request a consultation",
        icon: ShieldCheck,
      },
    },
    catalog: {
      sectionLink: { title: "Simulation catalog", href: "/catalog" },
      groups: [
        {
          title: "Explore simulation areas",
          links: [
            {
              title: "Surgical-adjacent practice",
              description: "Explore procedure rehearsal modules and workflows.",
              href: "/catalog/surgical-practice",
              icon: Stethoscope,
            },
            {
              title: "Emergency response",
              description: "Review structured emergency training scenarios.",
              href: "/catalog/emergency-response",
              icon: ClipboardList,
            },
            {
              title: "Anatomy & visualization",
              description: "Explore spatial anatomy learning resources.",
              href: "/catalog/anatomy",
              icon: Microscope,
            },
            {
              title: "Rehabilitation",
              description:
                "Browse supervised rehabilitation simulation contexts.",
              href: "/catalog/rehabilitation",
              icon: HeartPulse,
            },
          ],
        },
        {
          title: "Evidence & publications",
          links: [
            {
              title: "Evidence & outcomes",
              description: "Review evidence summaries and evaluation context.",
              href: "/evidence",
              icon: FileText,
            },
            {
              title: "Clinical trials & pilots",
              description:
                "Learn about institutional pilots and review processes.",
              href: "/evidence/trials",
              icon: ClipboardList,
            },
            {
              title: "Publications",
              description: "Browse research papers and academic outputs.",
              href: "/publications",
              icon: BookOpen,
            },
            {
              title: "Compliance & safeguards",
              description:
                "Read about consent, privacy, and content safeguards.",
              href: "/compliance",
              icon: ShieldCheck,
            },
            {
              title: "Evidence-led approach",
              description: "Explore evidence alongside its limits and context.",
              href: "/evidence/approach",
              icon: Microscope,
            },
            {
              title: "Surgical-adjacent practice",
              description: "Explore procedure rehearsal modules and workflows.",
              href: "/catalog/surgical-practice",
              icon: Stethoscope,
            },
            {
              title: "Emergency response",
              description: "Review structured emergency training scenarios.",
              href: "/catalog/emergency-response",
              icon: ClipboardList,
            },
            {
              title: "Anatomy & visualization",
              description: "Explore spatial anatomy learning resources.",
              href: "/catalog/anatomy",
              icon: Microscope,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Simulation library",
        title: "Explore the module catalog",
        description:
          "Find training experiences by clinical area and learning need.",
        href: "/catalog/modules",
        action: "Browse modules",
        icon: BookOpen,
      },
    },
    careers: {
      sectionLink: { title: "Careers", href: "/careers" },
      groups: [
        {
          title: "Join the Tibika team",
          links: [
            {
              title: "Careers at Tibika",
              description:
                "Help advance clinical training and patient wellbeing.",
              href: "/careers",
              icon: BriefcaseBusiness,
            },
            {
              title: "Open roles",
              description: "See current opportunities to join the team.",
              href: "/careers/open-roles",
              icon: BriefcaseBusiness,
            },
            {
              title: "Talent community",
              description: "Stay connected to future opportunities.",
              href: "/careers/talent-community",
              icon: UsersRound,
            },
            {
              title: "Our culture",
              description: "Learn about the team behind Tibika.",
              href: "/careers/our-culture",
              icon: HeartPulse,
            },
            {
              title: "Internships",
              description: "Explore early-career opportunities.",
              href: "/careers/internships",
              icon: School,
            },
            {
              title: "Benefits",
              description: "See how we support our team.",
              href: "/careers/benefits",
              icon: HeartPulse,
            },
          ],
        },
        {
          title: "Other products",
          links: [
            {
              title: "Explore all products",
              description: "Browse the Swizzy family of products.",
              href: "/products",
              icon: Building2,
            },
            ...productEntries,
          ],
        },
      ],
      featured: {
        eyebrow: "Careers at Tibika",
        title: "Help shape the future of care",
        description: "Build technology that supports better clinical practice.",
        href: "/careers",
        action: "Explore careers",
        icon: BriefcaseBusiness,
      },
    },
  }
}

export type ProductLink = {
  title: string
  description: string
  descriptionSw: string
  href: string
  color: string
  icon: LucideIcon
  parent?: true
}
const host = process.env.NEXT_PUBLIC_HOST || "swizzyindustries.com"
const protocol = process.env.NEXT_PUBLIC_PROTOCOL || "https"
export const productLinks: ProductLink[] = [
  {
    title: "Swizzy Industries",
    description:
      "Immersive technology serving people and institutions in Kenya.",
    descriptionSw:
      "Teknolojia ya ndani inayohudumia watu na taasisi nchini Kenya.",
    href: `${protocol}://${host}`,
    color: "#1b5fc1",
    icon: Building2,
    parent: true,
  },
  {
    title: "Elimika",
    description: "Immersive learning for every classroom.",
    descriptionSw: "Ujifunzaji wa ndani kwa kila darasa.",
    href: `${protocol}://elimika.${host}`,
    color: "#3a3bd9",
    icon: School,
  },
  {
    title: "Jumuika",
    description: "Shared spaces that bring people closer.",
    descriptionSw: "Nafasi za pamoja zinazowaleta watu karibu.",
    href: `${protocol}://jumuika.${host}`,
    color: "#e8735a",
    icon: UsersRound,
  },
  {
    title: "Nufaika",
    description: "Skills and trusted services, connected.",
    descriptionSw: "Stadi na huduma zinazoaminika, zimeunganishwa.",
    href: `${protocol}://nufaika.${host}`,
    color: "#1e8f5c",
    icon: BriefcaseBusiness,
  },
  {
    title: "Wajibika",
    description: "A clearer path from civic voice to action.",
    descriptionSw: "Njia wazi kutoka sauti ya kiraia hadi hatua.",
    href: `${protocol}://wajibika.${host}`,
    color: "#7a2331",
    icon: UsersRound,
  },
]

export const megaMenus = createMegaMenus(productLinks)
