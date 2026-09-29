import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  School,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export type SiteLink = { title: string; href: string }

export const primaryNavigation: SiteLink[] = [
  { title: "Home", href: "/" },
  { title: "Learning solutions", href: "/solutions" },
  { title: "Labs & modules", href: "/labs" },
  { title: "Research", href: "/research" },
  { title: "About", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
]

export type ProductLink = SiteLink & {
  description: string
  descriptionSw: string
  icon: LucideIcon
  color: string
  parent?: true
}

export const productLinks: ProductLink[] = [
  {
    title: "Swizzy Industries",
    description:
      "Immersive technology serving people and institutions in Kenya.",
    descriptionSw:
      "Teknolojia ya ndani inayohudumia watu na taasisi nchini Kenya.",
    href: "https://swizzyindustries.com",
    icon: Building2,
    color: "#1b5fc1",
    parent: true,
  },
  {
    title: "Tibika",
    description: "Clinical training, research, and patient wellbeing.",
    descriptionSw: "Mafunzo ya kitabibu, utafiti na ustawi wa wagonjwa.",
    href: "https://tibika.swizzyindustries.com",
    icon: HeartPulse,
    color: "#0e9f8e",
  },
  {
    title: "Jumuika",
    description: "Shared spaces that bring people closer.",
    descriptionSw: "Nafasi za pamoja zinazowaleta watu karibu.",
    href: "https://jumuika.swizzyindustries.com",
    icon: UsersRound,
    color: "#e8735a",
  },
  {
    title: "Nufaika",
    description: "Skills and trusted services, connected.",
    descriptionSw: "Stadi na huduma zinazoaminika, zimeunganishwa.",
    href: "https://nufaika.swizzyindustries.com",
    icon: BriefcaseBusiness,
    color: "#1e8f5c",
  },
  {
    title: "Wajibika",
    description: "A clearer path from civic voice to action.",
    descriptionSw: "Njia wazi kutoka sauti ya kiraia hadi hatua.",
    href: "https://wajibika.swizzyindustries.com",
    icon: BookOpen,
    color: "#7a2331",
  },
]

export const pageLinks: SiteLink[] = [
  { title: "K-12", href: "/solutions/k-12" },
  { title: "Higher education", href: "/solutions/higher-education" },
  { title: "TVET & skills", href: "/solutions/tvet-skills" },
  {
    title: "Educators & institutions",
    href: "/solutions/educators-institutions",
  },
  { title: "Impact & outcomes", href: "/impact" },
  { title: "Pricing & engagement", href: "/pricing" },
]

export const currentProduct = "Elimika"
export const currentProductIcon = School
