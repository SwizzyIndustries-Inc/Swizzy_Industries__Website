import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileText,
  HeartPulse,
  Handshake,
  Newspaper,
  School,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export type NavigationEntry = {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export type NavigationGroup = {
  title: string
  links: NavigationEntry[]
}

export type ProductNavigationEntry = NavigationEntry & {
  zoneHref: string
  accent: "health" | "education" | "social" | "business" | "government"
}

export type MegaMenuDefinition = {
  sectionLink: Pick<NavigationEntry, "title" | "description" | "href">
  groups: NavigationGroup[]
  featured: {
    eyebrow: string
    title: string
    description: string
    href: string
    action: string
    icon: LucideIcon
  }
  products?: ProductNavigationEntry[]
}

export const primaryNavigation = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "products",
    label: "Products & Solutions",
    href: "/products",
  },
  { key: "insights", label: "Blog & News", href: "/blog" },
  { key: "careers", label: "Careers", href: "/careers" },
  { key: "contacts", label: "Contacts", href: "/contact" },
] as const

export type MegaMenuKey = "home" | "products" | "insights" | "careers"

export const megaMenus: Record<MegaMenuKey, MegaMenuDefinition> = {
  home: {
    sectionLink: {
      title: "Home",
      description: "Return to the Swizzy Industries homepage.",
      href: "/",
    },
    groups: [
      {
        title: "Company",
        links: [
          {
            title: "About us",
            description: "Who we are and why we exist",
            href: "/about",
            icon: Building2,
          },
          {
            title: "Mission, vision & values",
            description: "What guides every decision",
            href: "/about/mission-vision-values",
            icon: Target,
          },
          {
            title: "Our story",
            description: "How Swizzy Industries began and where we are headed",
            href: "/about/our-story",
            icon: BookOpen,
          },
        ],
      },
      {
        title: "People & partners",
        links: [
          {
            title: "Team & leadership",
            description: "Meet the people building Swizzy Industries",
            href: "/about/team",
            icon: UsersRound,
          },
          {
            title: "Partners & investors",
            description: "Organizations growing with us",
            href: "/partners",
            icon: Handshake,
          },
        ],
      },
      {
        title: "Our impact",
        links: [
          {
            title: "Impact & sustainability",
            description: "Measuring what matters for Kenya",
            href: "/impact",
            icon: Sparkles,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Start here",
      title: "New to immersive technology?",
      description:
        "See how virtual and augmented reality can support real work across Kenya.",
      href: "/about",
      action: "Meet Swizzy Industries",
      icon: Sparkles,
    },
  },
  products: {
    sectionLink: {
      title: "Products & Solutions",
      description: "Explore Swizzy Industries' products and solutions.",
      href: "/products",
    },
    groups: [
      {
        title: "Solutions",
        links: [
          {
            title: "Solutions overview",
            description: "Explore the ways we work with organizations",
            href: "/solutions",
            icon: Sparkles,
          },
          {
            title: "Bespoke development",
            description: "Immersive software built around your needs",
            href: "/solutions/bespoke-development",
            icon: Building2,
          },
          {
            title: "Devices & integration",
            description: "Hardware, deployment, and connected systems",
            href: "/solutions/devices-integration",
            icon: Target,
          },
          {
            title: "Case studies",
            description: "Stories and evidence from the field",
            href: "/solutions/case-studies",
            icon: FileText,
          },
          {
            title: "Request a demo",
            description: "See an immersive solution in action",
            href: "/solutions/request-a-demo",
            icon: ArrowUpRight,
          },
        ],
      },
    ],
    products: [
      {
        title: "Tibika",
        description: "Immersive tools for hospitals, clinics, and care.",
        href: `${process.env.NEXT_PUBLIC_PROTOCOL}://tibika.${process.env.NEXT_PUBLIC_HOST}`,
        zoneHref: "https://tibika.swizzyindustries.com",
        icon: HeartPulse,
        accent: "health",
      },
      {
        title: "Elimika",
        description: "Immersive learning that reaches every classroom.",
        href: `${process.env.NEXT_PUBLIC_PROTOCOL}://elimika.${process.env.NEXT_PUBLIC_HOST}`,
        zoneHref: "https://elimika.swizzyindustries.com",
        icon: School,
        accent: "education",
      },
      {
        title: "Jumuika",
        description: "Connection and community, reimagined.",
        href: `${process.env.NEXT_PUBLIC_PROTOCOL}://jumuika.${process.env.NEXT_PUBLIC_HOST}`,
        zoneHref: "https://jumuika.swizzyindustries.com",
        icon: UsersRound,
        accent: "social",
      },
      {
        title: "Nufaika",
        description: "Immersive tools for businesses and organizations.",
        href: `${process.env.NEXT_PUBLIC_PROTOCOL}://nufaika.${process.env.NEXT_PUBLIC_HOST}`,
        zoneHref: "https://nufaika.swizzyindustries.com",
        icon: Building2,
        accent: "business",
      },
      {
        title: "Wajibika",
        description: "Immersive tools for government and public service.",
        href: `${process.env.NEXT_PUBLIC_PROTOCOL}://wajibika.${process.env.NEXT_PUBLIC_HOST}`,
        zoneHref: "https://wajibika.swizzyindustries.com",
        icon: BriefcaseBusiness,
        accent: "government",
      },
    ],
    featured: {
      eyebrow: "Our products",
      title: "Three focus areas. One connected economy.",
      description:
        "Health, education, and socialization are where immersive technology can serve people directly.",
      href: "/products",
      action: "See all products",
      icon: Target,
    },
  },
  insights: {
    sectionLink: {
      title: "Blog & News",
      description: "Read insights and updates from Swizzy Industries.",
      href: "/blog",
    },
    groups: [
      {
        title: "Read",
        links: [
          {
            title: "Blog",
            description: "Ideas on immersive technology in Kenya",
            href: "/blog",
            icon: BookOpen,
          },
          {
            title: "News & press releases",
            description: "Company announcements and coverage",
            href: "/news",
            icon: Newspaper,
          },
          {
            title: "Events & webinars",
            description: "Join us live or watch on demand",
            href: "/events",
            icon: CalendarDays,
          },
        ],
      },
      {
        title: "Explore",
        links: [
          {
            title: "Resource library",
            description: "Reports, guides, and company documents",
            href: "/resources",
            icon: FileText,
          },
          {
            title: "Press & media kit",
            description: "Logos, facts, and approved brand assets",
            href: "/press-kit",
            icon: Newspaper,
          },
          {
            title: "Gallery",
            description: "Photos, videos, and immersive moments",
            href: "/gallery",
            icon: Sparkles,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "From Swizzy Industries",
      title: "Ideas for a reimagined Kenya",
      description:
        "Read practical perspectives on health, learning, and connected communities.",
      href: "/blog",
      action: "Explore the blog",
      icon: BookOpen,
    },
  },
  careers: {
    sectionLink: {
      title: "Careers",
      description: "Explore careers at Swizzy Industries.",
      href: "/careers",
    },
    groups: [
      {
        title: "Life at Swizzy Industries",
        links: [
          {
            title: "Why Swizzy Industries",
            description: "Our culture and what we stand for",
            href: "/careers",
            icon: HeartPulse,
          },
          {
            title: "Life & benefits",
            description: "How we support our people",
            href: "/careers/life-and-benefits",
            icon: Sparkles,
          },
          {
            title: "Hiring process",
            description: "What to expect, step by step",
            href: "/careers/hiring-process",
            icon: Target,
          },
        ],
      },
      {
        title: "Join us",
        links: [
          {
            title: "Open roles",
            description: "See where you could fit",
            href: "/careers/open-roles",
            icon: BriefcaseBusiness,
          },
          {
            title: "Internships & graduate programme",
            description: "Start your career with us",
            href: "/careers/early-careers",
            icon: School,
          },
          {
            title: "Talent community",
            description: "Stay in touch about future roles",
            href: "/careers/talent-community",
            icon: UsersRound,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Careers",
      title: "Help us reimagine Kenya",
      description:
        "Build useful immersive technology with a team rooted in local needs.",
      href: "/careers/open-roles",
      action: "Explore open roles",
      icon: BriefcaseBusiness,
    },
  },
}
