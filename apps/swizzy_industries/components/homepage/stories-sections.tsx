import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react"

import { homepageImages, SectionHeading } from "@/components/homepage/shared"

const caseMetrics = [
  { value: "-42%", label: "Training duration", color: "text-product-health" },
  { value: "0 hrs", label: "ICU downtime", color: "text-blue-primary" },
  { value: "99.1%", label: "Competency rate", color: "text-navy-deep" },
]

export function CaseStudySection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <article className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-medium lg:grid-cols-5">
          <div className="relative min-h-[280px] bg-navy-deep lg:col-span-2 lg:min-h-full">
            <Image
              src={homepageImages.caseStudy}
              alt="Biomedical technician working with spatial equipment in a Nairobi hospital"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <span className="absolute top-5 left-5 rounded-full bg-product-health px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase">
              Health spotlight
            </span>
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:col-span-3 lg:p-12">
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-muted uppercase">
                <MapPin aria-hidden="true" className="size-3.5" /> Nairobi,
                Kenya | Clinical simulation centre
              </p>
              <h2 className="font-heading text-2xl leading-snug font-bold text-navy-deep sm:text-3xl">
                Kenyatta National Hospital pilot: 42% less biomedical training
                time
              </h2>
              <p className="text-sm leading-relaxed text-slate-muted sm:text-base">
                Junior medical officers and clinical biomedical engineers
                practiced ICU dialysis and ventilator calibration with
                high-fidelity spatial models, reducing machine downtime and
                equipment wear.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-4">
                {caseMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-muted/70 p-3 sm:p-4"
                  >
                    <strong
                      className={`block font-heading text-xl font-bold sm:text-2xl ${metric.color}`}
                    >
                      {metric.value}
                    </strong>
                    <span className="text-[11px] leading-tight text-slate-muted sm:text-xs">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/solutions/case-studies"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-primary px-5 text-xs font-semibold text-white transition hover:bg-blue-hover"
              >
                Read the case study{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <span className="text-xs text-slate-muted">
                Peer-reviewed protocol metrics
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

type Testimonial = {
  quote: string
  initials: string
  name: string
  role: string
  tint: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Before Swizzy Industries' spatial modules, 40 medical students crowded around one surgical station. Now every trainee explores identical 3D anatomy simultaneously.",
    initials: "DO",
    name: "Dr. David Ochieng",
    role: "Head of Clinical Training, Nairobi Hospital",
    tint: "bg-teal-tint text-product-health",
  },
  {
    quote:
      "Aligning VR lab experiments with Kenya's CBC science curriculum has helped schools without physical science labs. Student STEM engagement rose by 60%.",
    initials: "AM",
    name: "Agnes Mwangi",
    role: "County Director of Education, Kiambu",
    tint: "bg-blue-tint text-blue-primary",
  },
  {
    quote:
      "They built local-network cache sync so our classrooms continue uninterrupted even when international gateway connectivity drops.",
    initials: "PK",
    name: "Prof. Peter Kiprop",
    role: "Dean of Engineering, Eldoret",
    tint: "bg-muted text-slate-body",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-white p-6 shadow-low sm:p-8">
      <div>
        <div
          aria-label="5 out of 5 stars"
          className="mb-4 flex gap-1 text-savannah-amber"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className="size-4 fill-current"
            />
          ))}
        </div>
        <blockquote className="text-sm leading-relaxed text-slate-body italic">
          &quot;{testimonial.quote}&quot;
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${testimonial.tint}`}
        >
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-xs font-bold text-navy-deep">
            {testimonial.name}
          </span>
          <span className="block text-[11px] text-slate-muted">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-mist-bg/70 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Voices from the field"
          title="Proven institutional outcomes"
          centered={false}
        />
        <div className="grid gap-5 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Insight = {
  image: string
  category: string
  date: string
  title: string
  description: string
  tint: string
}

const insights: Insight[] = [
  {
    image: homepageImages.insightHardware,
    category: "White paper",
    date: "May 2025 | 8 min read",
    title:
      "Overcoming edge latency: decentralized XR in low-bandwidth counties",
    description:
      "Architectural blueprints for multi-user spatial simulations across decentralized Kenyan clinics.",
    tint: "text-navy-deep",
  },
  {
    image: homepageImages.insightEducation,
    category: "Education",
    date: "April 2025 | 5 min read",
    title:
      "CBC curriculum integration: the case for immersive virtual chemistry",
    description:
      "Student recall and reagent safety when practicing molecular reactions through VR.",
    tint: "text-blue-primary",
  },
  {
    image: homepageImages.insightCommunity,
    category: "Community",
    date: "March 2025 | 6 min read",
    title:
      "Reconnecting the diaspora: shared virtual spaces for Kenyan heritage",
    description:
      "How spatial audio and photogrammetry can preserve artifacts and indigenous stories.",
    tint: "text-orange-700",
  },
]

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-low transition hover:shadow-medium">
      <div className="relative h-48 bg-muted">
        <Image
          src={insight.image}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold ${insight.tint}`}
        >
          {insight.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[11px] font-medium text-slate-muted">
          {insight.date}
        </span>
        <h3 className="mt-2 font-heading text-base leading-snug font-bold text-navy-deep transition-colors group-hover:text-blue-primary">
          {insight.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-muted">
          {insight.description}
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-blue-primary hover:underline"
        >
          Read article <ArrowRight aria-hidden="true" className="size-3.5" />
        </Link>
      </div>
    </article>
  )
}

export function InsightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-12">
          <SectionHeading
            eyebrow="Dispatches & research"
            title="Latest insights on African spatial computing"
            centered={false}
          />
          <Link
            href="/blog"
            className="inline-flex min-h-10 shrink-0 items-center gap-1 text-xs font-semibold text-blue-primary hover:underline"
          >
            View all publications{" "}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:gap-8">
          {insights.map((insight) => (
            <InsightCard key={insight.title} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  return (
    <section className="from-bg-muted via-bg-muted-700 to-ink-text-foreground relative overflow-hidden bg-gradient-to-br py-16 text-navy-deep sm:py-20 lg:py-24 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--foreground)_2px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="relative mx-auto max-w-4xl space-y-6 px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-navy-deep/20 bg-white/50 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase dark:border-white/20 dark:bg-white/15">
          <CalendarDays aria-hidden="true" className="size-4" /> Partner with
          Swizzy Industries
        </span>
        <h2 className="font-heading text-3xl leading-tight font-extrabold sm:text-5xl">
          Ready to see what immersive technology can do for your institution?
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-navy-deep/85 sm:text-lg dark:text-blue-100">
          Schedule an executive demonstration with our spatial systems
          architects in Nairobi, or request an on-site evaluation for your
          hospital or school.
        </p>
        <div className="flex flex-col justify-center gap-3 pt-1 sm:flex-row">
          <Link
            href="/solutions/request-a-demo"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-navy-deep shadow-medium transition hover:bg-blue-50"
          >
            Request a demo <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-navy-deep/25 bg-white/40 px-6 text-sm font-medium text-navy-deep transition hover:bg-navy-deep/5 dark:border-white/40 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            Talk to our Nairobi team
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-3 text-xs text-navy-deep/85 dark:text-blue-100">
          <li className="inline-flex items-center gap-1.5">
            <Check aria-hidden="true" className="size-4 text-teal-300" />{" "}
            Turnkey enterprise deployments
          </li>
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck aria-hidden="true" className="size-4 text-teal-300" />{" "}
            Kenya data protection aligned
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Activity aria-hidden="true" className="size-4 text-teal-300" />{" "}
            Nairobi-based technical care
          </li>
        </ul>
      </div>
    </section>
  )
}
