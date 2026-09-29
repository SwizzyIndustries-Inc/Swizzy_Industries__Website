import {
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
  { title: "Categories & services", href: "/categories" },
  { title: "How it works", href: "/how-it-works" },
  { title: "For providers", href: "/for-providers" },
  { title: "Trust & safety", href: "/trust-safety" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
]

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
