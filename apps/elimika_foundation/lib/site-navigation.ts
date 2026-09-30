import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  Newspaper,
  Sparkles,
  School,
  Target,
  UsersRound,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export type SiteLink = { title: string; href: string }

export const primaryNavigation = [
  { key: "home", title: "Home", href: "/" },
  {
    key: "solutions",
    title: "Learning solutions",
    href: "/solutions",
  },
  {
    key: "labs",
    title: "Labs & modules",
    href: "/labs",
  },
  {
    key: "insights",
    title: "Research & impact",
    href: "/research",
  },
  {
    key: "contact",
    title: "Contact",
    href: "/contact",
  },
] as const

export type NavigationEntry = SiteLink & {
  description: string
  icon: LucideIcon
}

export type NavigationGroup = {
  title: string
  links: NavigationEntry[]
}

export type MegaMenuKey = "home" | "solutions" | "labs" | "insights"

type MegaMenuDefinition = {
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

export const megaMenus: Record<MegaMenuKey, MegaMenuDefinition> = {
  home: {
    sectionLink: { title: "Home", href: "/" },
    groups: [
      {
        title: "Elimika",
        links: [
          {
            title: "About us",
            description:
              "Our mission, people, and approach to immersive learning",
            href: "/about",
            icon: School,
          },
          {
            title: "Impact & outcomes",
            description: "See how learning experiences make a difference",
            href: "/impact",
            icon: Target,
          },
          {
            title: "Pricing & engagement",
            description: "Flexible models for institutions and partners",
            href: "/pricing",
            icon: Building2,
          },
        ],
      },
      {
        title: "Get involved",
        links: [
          {
            title: "Careers",
            description: "Help shape the future of learning in Kenya",
            href: "/careers",
            icon: BriefcaseBusiness,
          },
          {
            title: "Guest trial & demo",
            description:
              "Request a guided guest trial or institutional walkthrough",
            href: "/contact/guest-trial",
            icon: ArrowUpRight,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Start here",
      title: "Learning, reimagined in three dimensions",
      description:
        "Discover curriculum-aligned learning through AR, VR, and interactive labs.",
      action: "Preview CBC and tertiary learning",
      href: "/solutions/cbc-and-tertiary",
      icon: Lightbulb,
    },
  },
  solutions: {
    sectionLink: {
      title: "Learning solutions",
      href: "/solutions",
    },
    groups: [
      {
        title: "Schools & CBC",
        links: [
          {
            title: "K-12 learning",
            description: "Curriculum-aligned discovery for CBC learners",
            href: "/solutions/k-12",
            icon: School,
          },
          {
            title: "Students & guardians",
            description:
              "Guided CBC learning experiences for learners and families",
            href: "/solutions/students-guardians",
            icon: UsersRound,
          },
          {
            title: "CBC subject journeys",
            description:
              "Explore science, humanities, and language learning by subject",
            href: "/solutions/cbc-subject-journeys",
            icon: FlaskConical,
          },
        ],
      },
      {
        title: "Education leadership",
        links: [
          {
            title: "School administrators & educators",
            description:
              "LMS tools, training, and classroom support for school teams",
            href: "/solutions/school-administration",
            icon: UsersRound,
          },
          {
            title: "Ministry & county leaders",
            description:
              "System-level evidence for education leadership and planning",
            href: "/solutions/ministry-county",
            icon: Building2,
          },
          {
            title: "TSC & KICD partners",
            description:
              "Curriculum alignment and educator practice for national partners",
            href: "/solutions/curriculum-partners",
            icon: School,
          },
          {
            title: "County implementation planning",
            description:
              "Plan deployments, reporting, and support across school networks",
            href: "/solutions/county-implementation",
            icon: Target,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "For every learner",
      title: "See Elimika in your institution",
      description:
        "Book a guided trial for educators, learners, or your leadership team.",
      action: "Request an institutional demo",
      href: "/contact/request-a-demo",
      icon: Sparkles,
    },
  },
  labs: {
    sectionLink: { title: "Labs & modules", href: "/labs" },
    groups: [
      {
        title: "Tertiary & technical",
        links: [
          {
            title: "Higher education",
            description: "Virtual labs for universities and colleges",
            href: "/solutions/higher-education",
            icon: GraduationCap,
          },
          {
            title: "TVET & skills",
            description: "Practice technical skills through simulation",
            href: "/solutions/tvet-skills",
            icon: Wrench,
          },
          {
            title: "Colleges & universities",
            description:
              "Explore practical programmes for tertiary institutions",
            href: "/solutions/colleges-universities",
            icon: Building2,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Practice and explore",
      title: "Learning through virtual labs",
      description:
        "Explore hands-on modules for tertiary and technical learning.",
      action: "Explore labs & modules",
      href: "/labs",
      icon: FlaskConical,
    },
  },
  insights: {
    sectionLink: {
      title: "Research & impact",
      href: "/research",
    },
    groups: [
      {
        title: "Research",
        links: [
          {
            title: "Applied education research",
            description: "Evidence on immersive and spatial learning",
            href: "/research/applied-education",
            icon: Microscope,
          },
          {
            title: "Spatial learning study",
            description: "A longitudinal study in Kenyan schools",
            href: "/research/spatial-learning",
            icon: BookOpen,
          },
        ],
      },
      {
        title: "Outcomes",
        links: [
          {
            title: "Learning outcomes & evaluation",
            description: "Implementation and learning outcomes",
            href: "/research/learning-outcomes",
            icon: Target,
          },
          {
            title: "CBC evidence brief",
            description:
              "Review evidence for curriculum-aligned immersive learning",
            href: "/research/cbc-evidence",
            icon: FlaskConical,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Evidence-led education",
      title: "Measure what matters",
      description:
        "Explore research and outcomes designed for Kenya's education system.",
      action: "Read the national impact brief",
      href: "/research/national-impact-brief",
      icon: Newspaper,
    },
  },
}

export type ProductLink = SiteLink & {
  description: string
  icon: LucideIcon
  color: string
  parent?: true
}

export const productLinks: ProductLink[] = [
  {
    title: "Swizzy Industries",
    description:
      "Immersive technology serving people and institutions in Kenya.",
    href: `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}`,
    icon: Building2,
    color: "#1b5fc1",
    parent: true,
  },
  {
    title: "Tibika",
    description: "Clinical training, research, and patient wellbeing.",
    href: `${process.env.NEXT_PUBLIC_PROTOCOL}://tibika.${process.env.NEXT_PUBLIC_HOST}`,
    icon: HeartPulse,
    color: "#0e9f8e",
  },
  {
    title: "Jumuika",
    description: "Shared spaces that bring people closer.",
    href: `${process.env.NEXT_PUBLIC_PROTOCOL}://jumuika.${process.env.NEXT_PUBLIC_HOST}`,
    icon: UsersRound,
    color: "#e8735a",
  },
  {
    title: "Nufaika",
    description: "Skills and trusted services, connected.",
    href: `${process.env.NEXT_PUBLIC_PROTOCOL}://nufaika.${process.env.NEXT_PUBLIC_HOST}`,
    icon: BriefcaseBusiness,
    color: "#1e8f5c",
  },
  {
    title: "Wajibika",
    description: "A clearer path from civic voice to action.",
    href: `${process.env.NEXT_PUBLIC_PROTOCOL}://wajibika.${process.env.NEXT_PUBLIC_HOST}`,
    icon: BookOpen,
    color: "#7a2331",
  },
]

export const pageLinks: SiteLink[] = [
  { title: "K-12", href: "/solutions/k-12" },
  {
    title: "Higher education",
    href: "/solutions/higher-education",
  },
  {
    title: "TVET & skills",
    href: "/solutions/tvet-skills",
  },
  {
    title: "Educators & institutions",
    href: "/solutions/educators-institutions",
  },
  { title: "Impact & outcomes", href: "/impact" },
  {
    title: "Pricing & engagement",
    href: "/pricing",
  },
]

export const currentProduct = "Elimika"
export const currentProductIcon = School
