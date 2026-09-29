"use client"

import Link from "next/link"
import { ArrowRight, School } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { useLanguage } from "@/components/language-provider"
import { pageLinks, productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const labels =
    language === "sw"
      ? {
          ready: "Tujenge uzoefu bora wa kujifunza",
          action: "Omba onyesho",
          company: "Elimika ni chapa ya Swizzy Industries.",
          tracks: "Suluhisho za ujifunzaji",
          other: "Bidhaa nyingine",
          contact: "Wasiliana nasi",
          parent: "Kampuni mama",
          rights: "Haki zote zimehifadhiwa.",
        }
      : {
          ready: "Bring immersive learning to your institution",
          action: "Request a demo",
          company: "Elimika is a Swizzy Industries brand.",
          tracks: "Learning solutions",
          other: "Other products",
          contact: "Contact us",
          parent: "Parent company",
          rights: "All rights reserved.",
        }

  return (
    <footer className="bg-navy-deep text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:py-10">
          <div>
            <h2 className="font-heading text-xl font-semibold sm:text-2xl">
              {labels.ready}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              {language === "sw"
                ? "Tujadili mtaala, mahitaji ya darasa na hatua inayofuata."
                : "Let’s talk curriculum, classroom needs, and a practical next step."}
            </p>
          </div>
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 shrink-0 rounded-xl px-5"
          >
            {labels.action}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg"
          >
            <School aria-hidden="true" className="size-6 text-indigo-300" />
            <span className="font-heading text-lg font-bold">
              Elimika Foundation
            </span>
          </Link>
          <p className="mt-3 text-sm font-medium text-white/85">
            {language === "sw"
              ? "Kujifunza, kufikiriwa upya katika vipimo vitatu"
              : "Learning, reimagined in three dimensions"}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/65">
            {labels.company}
          </p>
        </div>
        <nav aria-label={labels.tracks}>
          <h3 className="mb-3 text-sm font-semibold">{labels.tracks}</h3>
          <ul className="space-y-1">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={labels.other}>
          <h3 className="mb-3 text-sm font-semibold">{labels.other}</h3>
          <ul className="space-y-1">
            {siblings.map((product) => (
              <li key={product.title}>
                <a
                  href={product.href}
                  className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={labels.parent}>
          <h3 className="mb-3 text-sm font-semibold">{labels.contact}</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/contact"
                className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
              >
                {labels.contact}
              </Link>
            </li>
            <li>
              <a
                href={productLinks.find((product) => product.parent)?.href}
                className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
              >
                Swizzy Industries ({labels.parent})
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-white/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Elimika Foundation. {labels.rights}
          </p>
          <Link
            href="/legal/privacy"
            className="inline-flex min-h-8 items-center hover:text-white"
          >
            {language === "sw" ? "Faragha" : "Privacy"}
          </Link>
        </div>
      </div>
    </footer>
  )
}
