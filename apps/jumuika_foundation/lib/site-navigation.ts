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
  { title: "Spaces & communities", href: "/spaces" },
  { title: "Events", href: "/events" },
  { title: "Safety & privacy", href: "/safety-privacy" },
  { title: "Stories", href: "/stories" },
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
