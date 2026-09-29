import Image from "next/image"
import Link from "next/link"
import { Activity, ArrowRight } from "lucide-react"

import { homepageImages } from "@/components/homepage/shared"

const partners = [
  "Kenyatta Hospital",
  "Nairobi Hospital",
  "University of Nairobi",
  "Strathmore University",
  "KMTC Kenya",
  "Ministry of Health",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-32 -right-24 size-[34rem] rounded-full bg-[radial-gradient(circle,#dcecff_0%,#ddf3f5_38%,transparent_70%)] opacity-80 dark:bg-[radial-gradient(circle,#1b5fc1_0%,#0d9488_38%,transparent_70%)] dark:opacity-5" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <a
            href="#products-overview"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            <span aria-hidden="true">KE</span>
            Kenya reimagined through immersive tech
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
          <div className="space-y-4">
            <h1 className="max-w-2xl font-heading text-4xl leading-[1.12] font-extrabold text-navy-deep sm:text-5xl lg:text-[3.25rem]">
              Kenya reimagined through immersive technology
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-body sm:text-lg">
              We engineer turnkey spatial computing software that strengthens
              clinical training, technical education, and civic heritage across
              East Africa. Not games, but vital institutional infrastructure.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row">
            <Link
              href="/solutions/request-a-demo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-primary px-6 text-sm font-semibold text-white shadow-medium transition hover:-translate-y-0.5 hover:bg-blue-hover"
            >
              Request a demo{" "}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href="#products-overview"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white px-5 text-sm font-semibold text-slate-body shadow-low transition hover:bg-muted"
            >
              Explore solutions
            </a>
          </div>
          <div className="w-full border-t border-border pt-4">
            <p className="mb-3 text-xs font-semibold tracking-wider text-slate-muted uppercase">
              Trusted across 45+ institutions
            </p>
            <div className="flex flex-wrap gap-2">
              {partners.slice(0, 4).map((partner) => (
                <span
                  key={partner}
                  className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-semibold text-slate-body"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl border border-border bg-white p-2 shadow-high">
          <div className="relative h-[360px] overflow-hidden rounded-2xl bg-navy-deep sm:h-[440px]">
            <Image
              src={homepageImages.hero}
              alt="Clinicians using spatial computing to examine a holographic cardiovascular model"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-black/20" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy-deep">
              <span className="size-2 rounded-full bg-product-health" />
              Nairobi clinical lab | Live AR telemetry
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/60 bg-white/95 p-4 shadow-medium sm:inset-x-5 sm:bottom-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-tint text-product-health">
                  <Activity aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold tracking-wider text-slate-muted uppercase">
                    Clinical efficacy
                  </span>
                  <span className="block truncate text-sm font-bold text-navy-deep">
                    Surgical simulation accuracy
                  </span>
                </span>
              </div>
              <span className="shrink-0 text-right">
                <span className="block font-heading text-xl font-bold text-product-health">
                  98.4%
                </span>
                <span className="block text-[11px] text-slate-muted">
                  Retention rate
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InstitutionalStrip() {
  return (
    <section className="border-y border-border bg-mist-bg py-8 sm:py-10">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-5 px-5 sm:px-8 lg:flex-row lg:justify-between">
        <h2 className="text-center text-xs font-semibold tracking-widest text-slate-muted uppercase lg:text-left">
          Institutional deployments & collaborators
        </h2>
        <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:w-auto lg:grid-cols-6">
          {partners.map((partner) => (
            <li
              key={partner}
              className="flex min-h-10 items-center justify-center rounded-lg border border-border bg-white px-3 text-center text-xs font-semibold text-slate-body"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
