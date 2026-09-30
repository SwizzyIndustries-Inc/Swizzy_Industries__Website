import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  HandCoins,
  HeartPulse,
  Images,
  Info,
  Megaphone,
  Newspaper,
  Scale,
  School,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export type SiteLink = { title: string; href: string }

export type NavigationEntry = SiteLink & {
  description: string
  descriptionSw?: string
  color?: string
  variant?: "parent-company"
  rowSpan?: 3
  icon: LucideIcon
}
export type NavigationGroup = {
  title: string
  links: NavigationEntry[]
  layout?: "featured-cards" | "full-width"
  columnSpan?: 1 | 2 | 3
  cardColumns?: 1 | 2
  cardRows?: 3
}

export type MegaMenuKey =
  "home" | "campaigns" | "stories" | "accountability" | "careers"
export type MegaMenuDefinition = {
  sectionLink: SiteLink
  groups: NavigationGroup[]
  featured: {
    eyebrow: string
    title: string
    description: string
    descriptionSw?: string
    href: string
    action: string
    icon: LucideIcon
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
    title: "Tibika",
    description: "Clinical training, research, and patient wellbeing.",
    descriptionSw: "Mafunzo ya kitabibu, utafiti na ustawi wa wagonjwa.",
    href: `${protocol}://tibika.${host}`,
    color: "#0e9f8e",
    icon: HeartPulse,
  },
]

export const primaryNavigation = [
  { key: "home", title: "Home", href: "/" },
  {
    key: "campaigns",
    title: "Campaigns",
    href: "/issues",
  },
  {
    key: "stories",
    title: "Stories",
    href: "/voices",
  },
  {
    key: "accountability",
    title: "Accountability",
    href: "/accountability-tracker",
  },
  { key: "careers", title: "Careers", href: "/careers" },
  { key: "contacts", title: "Contacts", href: "/contact" },
] as const

const parentProduct = productLinks.find((product) => product.parent)!
const productEntries: NavigationEntry[] = productLinks
  .filter((product) => !product.parent)
  .map((product) => ({
    title: product.title,
    description: product.description,
    descriptionSw: product.descriptionSw,
    href: product.href,
    icon: product.icon,
  }))

export const megaMenus: Record<MegaMenuKey, MegaMenuDefinition> = {
  home: {
    sectionLink: { title: "Home", href: "/" },
    groups: [
      {
        title: "About Wajibika",
        columnSpan: 2,
        links: [
          {
            title: "Our mission",
            description: "See what guides our work for public accountability.",
            href: "/about/mission",
            icon: Megaphone,
          },
          {
            title: "Our approach",
            description: "Learn how we connect community voice with action.",
            href: "/about/approach",
            icon: Scale,
          },
          {
            title: "Our impact",
            description: "Explore the change communities are working toward.",
            href: "/about/impact",
            icon: BarChart3,
          },
          {
            title: "Our team",
            description: "Meet the people behind Wajibika.",
            href: "/about/team",
            icon: UsersRound,
          },
        ],
      },
      {
        title: "Get involved",
        columnSpan: 1,
        links: [
          {
            title: "Raise an issue",
            description:
              "Share a public-interest issue and track its progress.",
            href: "/raise-an-issue",
            icon: FileCheck2,
          },
          {
            title: "Volunteer",
            description:
              "Join our community of volunteers supporting civic action.",
            href: "/volunteer",
            icon: UsersRound,
          },
          {
            title: "Donate",
            description:
              "Support Wajibika’s work to strengthen public accountability.",
            href: "/donate",
            icon: HeartPulse,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Our purpose",
      title: "A stronger public voice",
      description:
        "Discover how Wajibika supports community-led accountability.",
      href: "/about",
      action: "About Wajibika",
      icon: Info,
    },
  },
  campaigns: {
    sectionLink: { title: "Issues & campaigns", href: "/issues" },
    groups: [
      {
        title: "Issues",
        links: [
          {
            title: "Browse issues",
            description: "Explore public-interest issues and their status.",
            href: "/issues",
            icon: FileCheck2,
          },
          {
            title: "Submit an issue",
            description:
              "Share a public-interest issue and track its progress.",
            href: "/issues/submit-issue",
            icon: FileCheck2,
          },
          {
            title: "Petitions",
            description: "See open petitions and their latest status.",
            href: "/issues/petitions",
            icon: BarChart3,
          },
        ],
      },
      {
        title: "Campaigns",
        links: [
          {
            title: "Active campaigns",
            description: "See open campaigns and their latest status.",
            href: "/issues/campaigns",
            icon: BarChart3,
          },
          {
            title: "Submit a campaign",
            description:
              "Share a public-interest campaign and track its progress.",
            href: "/issues/submit-campaign",
            icon: FileCheck2,
          },
          {
            title: "Research & impact",
            description: "Explore research and impact reports on campaigns.",
            href: "/issues/research-impact",
            icon: BarChart3,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Community-led accountability",
      title: "Raise an issue, follow its progress",
      description:
        "Share public-interest issues and track responses from authorities.",
      href: "/raise-an-issue",
      action: "Raise an issue",
      icon: FileCheck2,
    },
  },
  stories: {
    sectionLink: { title: "Voices & stories", href: "/voices" },
    groups: [
      {
        title: "Voices & stories",
        links: [
          {
            title: "Field dispatches",
            description: "Read reports grounded in local experience.",
            href: "/voices/field-dispatches",
            icon: BookOpen,
          },
          {
            title: "Citizen testimonies",
            description: "Hear perspectives from affected communities.",
            href: "/voices/testimonies",
            icon: UsersRound,
          },
          {
            title: "Civic journalism",
            description: "Explore sourced, public-interest reporting.",
            href: "/voices/civic-journalism",
            icon: Megaphone,
          },
          {
            title: "News",
            description: "Updates on civic action and public accountability.",
            href: "/news",
            icon: Newspaper,
          },
          {
            title: "Gallery",
            description: "See community work and events in pictures.",
            href: "/gallery",
            icon: Images,
          },
        ],
      },
      {
        title: "From the community",
        links: [
          {
            title: "Stories",
            description: "Read stories from the Wajibika community.",
            href: "/stories",
            icon: BookOpen,
          },
          {
            title: "Diaspora stories",
            description:
              "How people keep their connections close across borders.",
            href: "/stories/diaspora",
            icon: UsersRound,
          },
          {
            title: "Community gatherings",
            description: "Shared moments, traditions, and new friendships.",
            href: "/stories/community",
            icon: BookOpen,
          },
          {
            title: "Stories across distance",
            description: "Read about building presence across distance.",
            href: "/stories/distance",
            icon: HeartPulse,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "From the field",
      title: "Listen to lived experience",
      description:
        "Explore reports that connect public issues to people’s lives.",
      href: "/voices/field-dispatches",
      action: "Read field dispatches",
      icon: BookOpen,
    },
  },
  accountability: {
    sectionLink: { title: "Accountability", href: "/accountability-tracker" },
    groups: [
      {
        title: "Accountability",
        links: [
          {
            title: "Accountability tracker",
            description: "Follow public responses and sourced milestones.",
            href: "/accountability-tracker",
            icon: BarChart3,
          },
          {
            title: "Active petitions",
            description: "See open campaigns and their latest status.",
            href: "/accountability-tracker/petitions",
            icon: BarChart3,
          },
          {
            title: "Independent monitors",
            description:
              "Explore verification and field-monitoring principles.",
            href: "/accountability-tracker/monitors",
            icon: ShieldCheck,
          },
          {
            title: "Public commitments",
            description: "Track commitments and published milestones.",
            href: "/accountability-tracker/commitments",
            icon: FileCheck2,
          },
          {
            title: "Budget & procurement",
            description: "Explore public spending and local oversight.",
            href: "/accountability-tracker/budgets",
            icon: HandCoins,
          },
        ],
      },
      {
        title: "Guides & principles",
        layout: "full-width",
        columnSpan: 3,
        links: [
          {
            title: "Accountability principles",
            description:
              "Learn how Wajibika connects community voice with action.",
            href: "/accountability-principles",
            icon: Scale,
          },
          {
            title: "Monitoring & verification",
            description:
              "Understand how public-interest work is verified and sourced.",
            href: "/monitoring-verification",
            icon: ShieldCheck,
          },
          {
            title: "Public-interest reporting",
            description:
              "See how civic journalism and field reporting are conducted.",
            href: "/public-interest-reporting",
            icon: Megaphone,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Public accountability",
      title: "Follow commitments and progress",
      description:
        "Track public responses, community priorities, and partner action.",
      href: "/accountability-tracker",
      action: "Open the tracker",
      icon: BarChart3,
    },
  },
  careers: {
    sectionLink: { title: "Careers", href: "/careers" },
    groups: [
      {
        title: "Careers & Partnerships",
        layout: "full-width",
        links: [
          {
            title: "Careers at Wajibika",
            description: "Explore opportunities to strengthen public voice.",
            href: "/careers",
            rowSpan: 3,
            icon: BriefcaseBusiness,
          },
          {
            title: "Partners",
            description: "Work with Wajibika on community-led public interest.",
            href: "/partners",
            icon: UsersRound,
          },
          {
            title: "Civil society partners",
            description:
              "Learn how organizations contribute evidence and support.",
            href: "/partners/civil-society",
            icon: UsersRound,
          },
          {
            title: "Partner standards",
            description: "Review expectations for credible collaboration.",
            href: "/partners/standards",
            icon: Scale,
          },
          {
            title: "Apply to partner",
            description: "Connect your organization with Wajibika’s work.",
            href: "/partners/apply",
            icon: ShieldCheck,
          },
        ],
      },
      {
        title: "Other products",
        columnSpan: 2,
        links: [...productEntries],
      },
    ],
    featured: {
      eyebrow: "Parent company",
      title: parentProduct.title,
      description: parentProduct.description,
      descriptionSw: parentProduct.descriptionSw,
      href: parentProduct.href,
      action: "Visit the company",
      icon: parentProduct.icon,
    },
  },
}
