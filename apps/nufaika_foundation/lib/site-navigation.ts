import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  HandCoins,
  HeartPulse,
  Home,
  LockKeyhole,
  Search,
  ShieldCheck,
  School,
  Sparkles,
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
export type MegaMenuKey = "home" | "categories" | "providers" | "careers"
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
  { key: "categories", title: "Categories & services", href: "/categories" },
  { key: "providers", title: "For providers", href: "/for-providers" },
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
          title: "Get to know Nufaika",
          links: [
            {
              title: "About Nufaika",
              description: "Learn how Nufaika connects skills and services.",
              href: "/about",
              icon: BriefcaseBusiness,
            },
            {
              title: "How it works",
              description: "See how to find, book, and work with a provider.",
              href: "/how-it-works",
              icon: Sparkles,
            },
            {
              title: "Browse services",
              description: "Explore services and providers across Kenya.",
              href: "/categories",
              icon: Search,
            },
          ],
        },
        {
          title: "Find trusted help",
          links: [
            {
              title: "Search providers",
              description: "Find skilled providers near you.",
              href: "/search",
              icon: Search,
            },
            {
              title: "Service categories",
              description: "Browse services by skill and area.",
              href: "/categories",
              icon: Home,
            },
            {
              title: "Trust & safety",
              description: "Learn how provider verification and payments work.",
              href: "/trust-safety",
              icon: ShieldCheck,
            },
            {
              title: "Join as a provider",
              description: "Create a profile and connect with customers.",
              href: "/for-providers/join",
              icon: BriefcaseBusiness,
            },
            {
              title: "Provider verification",
              description: "Learn how provider checks and badges work.",
              href: "/for-providers/verification",
              icon: BadgeCheck,
            },
            {
              title: "Careers at Nufaika",
              description: "Help connect skills with opportunity.",
              href: "/careers",
              icon: UsersRound,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Skills meet opportunity",
        title: "Find trusted help nearby",
        description: "Connect with skilled providers across Kenya.",
        href: "/search",
        action: "Search services",
        icon: Search,
      },
    },
    categories: {
      sectionLink: { title: "Categories & services", href: "/categories" },
      groups: [
        {
          title: "Find a specialist",
          links: [
            {
              title: "Home & trade",
              description:
                "Repairs, installations, cleaning, and home projects.",
              href: "/categories/home-trade",
              icon: Home,
            },
            {
              title: "Skills & tutoring",
              description: "Tutors, coaches, and vocational specialists.",
              href: "/categories/skills-tutoring",
              icon: School,
            },
            {
              title: "Professional services",
              description: "Business, design, and expert support.",
              href: "/categories/professional",
              icon: BriefcaseBusiness,
            },
            {
              title: "Creative & care",
              description: "Events, creative work, care, and wellness.",
              href: "/categories/creative-care",
              icon: HeartPulse,
            },
          ],
        },
        {
          title: "How it works",
          links: [
            {
              title: "How it works",
              description: "See how to find, book, and work with a provider.",
              href: "/how-it-works",
              icon: Sparkles,
            },
            {
              title: "Search services",
              description: "Find providers by service and location.",
              href: "/search",
              icon: Search,
            },
            {
              title: "Booking guidance",
              description: "Learn what to expect when working with a provider.",
              href: "/how-it-works/booking",
              icon: ClipboardList,
            },
            {
              title: "Home & trade",
              description:
                "Repairs, installations, cleaning, and home projects.",
              href: "/categories/home-trade",
              icon: Home,
            },
            {
              title: "Skills & tutoring",
              description: "Tutors, coaches, and vocational specialists.",
              href: "/categories/skills-tutoring",
              icon: School,
            },
            {
              title: "Professional services",
              description: "Business, design, and expert support.",
              href: "/categories/professional",
              icon: BriefcaseBusiness,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Start with what you need",
        title: "Find trusted help nearby",
        description:
          "Search skilled providers across Kenya by service and location.",
        href: "/search",
        action: "Search services",
        icon: Search,
      },
    },
    providers: {
      sectionLink: { title: "For providers", href: "/for-providers" },
      groups: [
        {
          title: "Grow your service business",
          links: [
            {
              title: "Join as a provider",
              description: "Create a profile and connect with customers.",
              href: "/for-providers/join",
              icon: BriefcaseBusiness,
            },
            {
              title: "Verification process",
              description: "Learn how provider checks and badges work.",
              href: "/for-providers/verification",
              icon: BadgeCheck,
            },
            {
              title: "Provider standards",
              description: "Review service and marketplace expectations.",
              href: "/provider-agreement",
              icon: ShieldCheck,
            },
          ],
        },
        {
          title: "Trust, safety & provider growth",
          links: [
            {
              title: "Trust & safety overview",
              description: "Explore safeguards for customers and providers.",
              href: "/trust-safety",
              icon: ShieldCheck,
            },
            {
              title: "Provider verification",
              description: "Understand checks and profile credentials.",
              href: "/trust-safety/verification",
              icon: BadgeCheck,
            },
            {
              title: "Payments & escrow",
              description: "See how payment protection is designed.",
              href: "/trust-safety/payments",
              icon: HandCoins,
            },
            {
              title: "Reviews & support",
              description: "Get help and learn how customer feedback works.",
              href: "/trust-safety/reviews",
              icon: LockKeyhole,
            },
            {
              title: "Provider profile guide",
              description: "Present your services clearly to customers.",
              href: "/for-providers/profile-guide",
              icon: BriefcaseBusiness,
            },
            {
              title: "Set your service area",
              description: "Help nearby customers find your work.",
              href: "/for-providers/service-area",
              icon: Home,
            },
            {
              title: "Provider support",
              description: "Get help managing your service profile.",
              href: "/for-providers/support",
              icon: UsersRound,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "For skilled professionals",
        title: "Make your skills easier to find",
        description:
          "Build trust with a clear profile, service details, and reviews.",
        href: "/for-providers/join",
        action: "Become a provider",
        icon: Sparkles,
      },
    },
    careers: {
      sectionLink: { title: "Careers", href: "/careers" },
      groups: [
        {
          title: "Join the Nufaika team",
          links: [
            {
              title: "Careers at Nufaika",
              description: "Help connect skills with opportunity.",
              href: "/careers",
              icon: BriefcaseBusiness,
            },
            {
              title: "Open roles",
              description: "See current opportunities to join our team.",
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
              title: "Life at Nufaika",
              description: "Learn about the team and how we work.",
              href: "/careers/life-at-nufaika",
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
        eyebrow: "Build with confidence",
        title: "Grow your work with Nufaika",
        description: "Connect your skills with people who need them.",
        href: "/for-providers",
        action: "Become a provider",
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
    title: "Tibika",
    description: "Clinical training, research, and patient wellbeing.",
    descriptionSw: "Mafunzo ya kitabibu, utafiti na ustawi wa wagonjwa.",
    href: `${protocol}://tibika.${host}`,
    color: "#0e9f8e",
    icon: HeartPulse,
  },
  {
    title: "Wajibika",
    description: "A clearer path from civic voice to action.",
    descriptionSw: "Njia wazi kutoka sauti ya kiraia hadi hatua.",
    href: `${protocol}://wajibika.${host}`,
    color: "#7a2331",
    icon: BriefcaseBusiness,
  },
]

export const megaMenus = createMegaMenus(productLinks)
