import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CirclePlay,
  GraduationCap,
  HeartPulse,
  Layers3,
  Microscope,
  ShieldCheck,
  UsersRound,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import {
  CheckList,
  homepageImages,
  SectionHeading,
} from "@/components/homepage/shared"

type Pillar = {
  title: string
  category: string
  description: string
  points: string[]
  href: string
  action: string
  Icon: LucideIcon
  color: string
  tint: string
}

const pillars: Pillar[] = [
  {
    title: "Clinical simulation",
    category: "Health pillar",
    description:
      "Immersive spatial software for medical training, ventilator practice, and repeatable surgical drills without risk to patients or expensive equipment.",
    points: [
      "Hospital ICU and dialysis simulators",
      "Repeatable emergency procedure practice",
      "Patient telemetry and anatomical education",
    ],
    href: "/pillars/health",
    action: "Visit health site",
    Icon: HeartPulse,
    color: "text-product-health",
    tint: "bg-teal-tint",
  },
  {
    title: "Virtual STEM labs",
    category: "Education pillar",
    description:
      "Decentralized curriculum delivery equips classrooms across Kenya with rich physics, chemistry, and technical modules aligned to the CBC standard.",
    points: [
      "Virtual science and engineering labs",
      "National CBC curriculum integration",
      "Educator performance and score tracking",
    ],
    href: "/pillars/education",
    action: "Visit education site",
    Icon: GraduationCap,
    color: "text-product-education",
    tint: "bg-blue-tint",
  },
  {
    title: "Pan-African spaces",
    category: "Socialization pillar",
    description:
      "Connect regional creators, youth, and the global African diaspora in safe, moderated shared spaces celebrating culture, art, and civic progress.",
    points: [
      "Shared civic forums and keynote spaces",
      "Historical and cultural 3D photogrammetry",
      "Moderated, safe communal environments",
    ],
    href: "/pillars/socialization",
    action: "Visit socialization site",
    Icon: UsersRound,
    color: "text-product-social",
    tint: "bg-orange-50",
  },
]

function PillarCard({ pillar }: { pillar: Pillar }) {
  const {
    title,
    category,
    description,
    points,
    href,
    action,
    Icon,
    color,
    tint,
  } = pillar

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-low transition duration-300 hover:-translate-y-1 hover:shadow-medium sm:p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`flex size-12 items-center justify-center rounded-xl ${tint} ${color}`}
          >
            <Icon aria-hidden="true" className="size-6" />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${tint} ${color}`}
          >
            {category}
          </span>
        </div>
        <div>
          <h3 className="mb-2 font-heading text-2xl font-bold text-navy-deep capitalize">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-muted">
            {description}
          </p>
        </div>
        <CheckList items={points} color={color} />
      </div>
      <Link
        href={href}
        className={`mt-7 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold ${color} hover:underline`}
      >
        {action} <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  )
}

export function PillarsSection() {
  return (
    <section id="pillars-overview" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our three pillars"
          title="Immersive technology where it matters most"
          description="Targeted spatial architectures designed to empower healthcare teams, educational institutions, and civic community ecosystems."
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.category} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Technology = {
  title: string
  subtitle: string
  label: string
  description: string
  points: string[]
  Icon: LucideIcon
  color: string
}

const technologies: Technology[] = [
  {
    title: "Virtual Reality (VR)",
    subtitle: "Full 3D simulated immersion",
    label: "Fully virtual",
    description:
      "Transports students and clinicians into simulated environments. Ideal for high-risk operations where physical trial and error is dangerous or cost-prohibitive.",
    points: [
      "Zero consumable supplies wasted during chemical drills",
      "Repeatable ICU, dialysis, and surgical practice",
    ],
    Icon: Layers3,
    color: "text-blue-primary",
  },
  {
    title: "Augmented Reality (AR)",
    subtitle: "Live holographic overlays",
    label: "Real + digital",
    description:
      "Keeps you grounded in the physical room while overlaying technical diagrams, diagnostics, or checklists directly onto real equipment.",
    points: [
      "Step-by-step guidance over biomedical equipment",
      "Hands-free telemetry during clinical rounds",
    ],
    Icon: Microscope,
    color: "text-product-health",
  },
]

function TechnologyCard({ technology }: { technology: Technology }) {
  const { title, subtitle, label, description, points, Icon, color } =
    technology

  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-low sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex size-10 items-center justify-center rounded-lg bg-muted ${color}`}
          >
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <span>
            <h3 className="font-heading text-base font-bold text-navy-deep">
              {title}
            </h3>
            <span className="text-xs text-slate-muted">{subtitle}</span>
          </span>
        </div>
        <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-slate-body">
          {label}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-slate-muted">
        {description}
      </p>
      <ul className="space-y-2">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-xs text-slate-body"
          >
            <ArrowRight
              aria-hidden="true"
              className={`mt-0.5 size-4 shrink-0 ${color}`}
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function TechnologySection() {
  return (
    <section className="border-t border-border bg-mist-bg/70 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Demystifying spatial computing"
          title="Immersive technology, explained simply"
          description="We cut through the hype. Here is how virtual and augmented reality tangibly solve institutional constraints."
        />
        <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-5">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.title} technology={technology} />
            ))}
            <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-900">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-blue-primary"
              />
              <p className="text-xs leading-relaxed">
                <strong>Turnkey deployment:</strong> Units arrive pre-configured
                with local offline caching for Kenyan institutional bandwidth.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-white p-3 shadow-low">
            <div className="group relative min-h-[320px] flex-1 overflow-hidden rounded-xl bg-navy-deep sm:min-h-[400px]">
              <Image
                src={homepageImages.technology}
                alt="Clinical trainee examining a 3D holographic medical simulation"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/15 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="flex size-16 items-center justify-center rounded-full bg-blue-primary text-white shadow-high"
                >
                  <CirclePlay className="size-9" />
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-xs text-white">
                <span className="flex items-center gap-2 font-medium">
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  Clinical training in 3D space
                </span>
                <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[11px]">
                  2:45 min
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs text-slate-muted">
              <span>Kenyatta National Hospital Simulation Centre</span>
              <span className="font-medium text-slate-body">
                Swahili & English
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
