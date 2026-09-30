import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  HeartPulse,
  House,
  LockKeyhole,
  Music2,
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

export type NavigationGroup = {
  title: string
  links: NavigationEntry[]
}

export type MegaMenuKey = "home" | "spaces" | "events" | "careers"

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
  { key: "spaces", title: "Spaces & communities", href: "/spaces" },
  { key: "events", title: "Events & stories", href: "/events" },
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
          title: "Discover Jumuika",
          links: [
            {
              title: "About Jumuika",
              description: "Learn about the community behind Jumuika.",
              href: "/about",
              icon: UsersRound,
            },
            {
              title: "How it works",
              description: "Learn how to create a room and invite your circle.",
              href: "/how-it-works",
              icon: Sparkles,
            },
            {
              title: "Our community",
              description: "Meet the people and communities that make Jumuika.",
              href: "/community",
              icon: UsersRound,
            },
            {
              title: "Spaces & communities",
              description:
                "Find a shared space for the people and interests you care about.",
              href: "/spaces",
              icon: House,
            },
            {
              title: "Live spaces",
              description: "See what's happening across the community.",
              href: "/spaces/live",
              icon: Music2,
            },
            {
              title: "Upcoming events",
              description: "Find conversations, celebrations, and live shows.",
              href: "/events/upcoming",
              icon: CalendarDays,
            },
          ],
        },
        {
          title: "From the community",
          links: [
            {
              title: "Stories",
              description: "Read stories from the Jumuika community.",
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
          ],
        },
      ],
      featured: {
        eyebrow: "Start together",
        title: "Distance is just a detail.",
        description: "Create a shared space for the people who matter to you.",
        href: "/download",
        action: "Get started",
        icon: UsersRound,
      },
    },
    spaces: {
      sectionLink: { title: "Spaces & communities", href: "/spaces" },
      groups: [
        {
          title: "Gather with your people",
          links: [
            {
              title: "Family & friends",
              description:
                "Private rooms for familiar faces and everyday moments.",
              href: "/spaces/family-friends",
              icon: House,
            },
            {
              title: "Diaspora & heritage",
              description: "Keep culture, language, and home within reach.",
              href: "/spaces/diaspora-heritage",
              icon: UsersRound,
            },
            {
              title: "Interest communities",
              description: "Find people who share your interests and passions.",
              href: "/spaces/interests",
              icon: BookOpen,
            },
            {
              title: "Events & gatherings",
              description: "Make room for live conversations and celebrations.",
              href: "/spaces/events",
              icon: CalendarDays,
            },
            {
              title: "Live spaces",
              description: "See what's happening across the community.",
              href: "/spaces/live",
              icon: Music2,
            },
            {
              title: "How it works",
              description: "Learn how to create a room and invite your circle.",
              href: "/how-it-works",
              icon: Sparkles,
            },
            {
              title: "Create a space",
              description: "Start a room for your people and interests.",
              href: "/spaces/create",
              icon: House,
            },
          ],
        },
        {
          title: "Your space, your boundaries",
          links: [
            {
              title: "Safety & privacy",
              description: "Explore the safeguards that protect your spaces.",
              href: "/safety-privacy",
              icon: ShieldCheck,
            },
            {
              title: "Privacy controls",
              description: "Choose who can find and enter your spaces.",
              href: "/safety-privacy/controls",
              icon: LockKeyhole,
            },
            {
              title: "Community standards",
              description: "Read the principles that guide how we gather.",
              href: "/community-standards",
              icon: ShieldCheck,
            },
            {
              title: "Age safeguards",
              description: "Learn about safer experiences for younger members.",
              href: "/safety-privacy/age-safeguards",
              icon: School,
            },
            {
              title: "Invite your circle",
              description: "Bring friends and family into a shared room.",
              href: "/spaces/invitations",
              icon: UsersRound,
            },
            {
              title: "Community discovery",
              description: "Find communities and conversations to join.",
              href: "/spaces/discover",
              icon: BookOpen,
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Start together",
        title: "Distance is just a detail.",
        description: "Create a shared space for the people who matter to you.",
        href: "/download",
        action: "Get started",
        icon: UsersRound,
      },
    },
    events: {
      sectionLink: { title: "Events & stories", href: "/events" },
      groups: [
        {
          title: "Join a gathering",
          links: [
            {
              title: "Upcoming events",
              description: "Find conversations, celebrations, and live shows.",
              href: "/events/upcoming",
              icon: CalendarDays,
            },
            {
              title: "Music & watch parties",
              description: "Listen, watch, and react together in real time.",
              href: "/events/music-watch-parties",
              icon: Music2,
            },
            {
              title: "Host an event",
              description: "Bring your community together in a shared room.",
              href: "/events/host",
              icon: Sparkles,
            },
            {
              title: "Event calendar",
              description: "Plan around gatherings across time zones.",
              href: "/events/calendar",
              icon: CalendarDays,
            },
            {
              title: "Event hosting guide",
              description: "Prepare a welcoming shared event.",
              href: "/events/host-guide",
              icon: Sparkles,
            },
            {
              title: "Attendee guide",
              description: "Get ready to join a live gathering.",
              href: "/events/attendee-guide",
              icon: UsersRound,
            },
          ],
        },
        {
          title: "From the community",
          links: [
            {
              title: "Stories",
              description: "Read stories from the Jumuika community.",
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
        eyebrow: "On the calendar",
        title: "Make time for each other",
        description: "Find your next live gathering across time zones.",
        href: "/events/calendar",
        action: "View the calendar",
        icon: CalendarDays,
      },
    },
    careers: {
      sectionLink: { title: "Careers", href: "/careers" },
      groups: [
        {
          title: "Join Jumuika",
          links: [
            {
              title: "Careers at Jumuika",
              description: "Help build more connected communities.",
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
              title: "Life at Jumuika",
              description:
                "Learn about the people and culture behind the product.",
              href: "/careers/life-at-jumuika",
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
          title: "Other Swizzy products",
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
        eyebrow: "Join the team",
        title: "Build closer communities",
        description: "Bring people together through thoughtful technology.",
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
    title: "Tibika",
    description: "Clinical training, research, and patient wellbeing.",
    descriptionSw: "Mafunzo ya kitabibu, utafiti na ustawi wa wagonjwa.",
    href: `${protocol}://tibika.${host}`,
    color: "#0e9f8e",
    icon: HeartPulse,
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
