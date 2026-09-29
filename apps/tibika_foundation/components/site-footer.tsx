"use client"

import Link from "next/link"
import { ArrowRight, HeartPulse } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { useLanguage } from "@/components/language-provider"
import { productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const sw = language === "sw"
  return (
    <footer className="bg-primary text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold">
              {sw
                ? "Jadili mahitaji ya taasisi yako"
                : "Discuss your institutional needs"}
            </h2>
            <p className="mt-2 text-sm text-white/70">
              {sw
                ? "Mazungumzo kuhusu mafunzo, utafiti au uigaji."
                : "Talk about training, research, or simulation."}
            </p>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 rounded-xl px-5"
          >
            {sw ? "Omba ushauri" : "Request a consultation"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2">
            <HeartPulse aria-hidden="true" className="size-6 text-teal-300" />
            <span className="font-heading text-lg font-bold">Tibika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-white/85">
            {sw
              ? "Fanya mazoezi kwa usahihi. Linda maisha."
              : "Practice precision. Protect life."}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/65">
            {sw
              ? "Tibika ni chapa ya Swizzy Industries."
              : "Tibika is a Swizzy Industries brand."}
          </p>
        </div>
        <nav aria-label={sw ? "Suluhisho" : "Solutions"}>
          <h3 className="mb-3 text-sm font-semibold">
            {sw ? "Suluhisho" : "Solutions"}
          </h3>
          <ul className="space-y-1">
            {[
              ["Clinical training", "/solutions/clinical-training"],
              ["Medical research", "/solutions/medical-research"],
              ["Patient care", "/solutions/patient-care"],
              ["Evidence", "/evidence"],
              ["Compliance", "/compliance"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
                >
                  {sw
                    ? (
                        {
                          "/solutions/clinical-training": "Mafunzo ya kitabibu",
                          "/solutions/medical-research": "Utafiti wa afya",
                          "/solutions/patient-care": "Utunzaji wa wagonjwa",
                          "/evidence": "Ushahidi",
                          "/compliance": "Uzingatiaji",
                        } as Record<string, string>
                      )[href]
                    : label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={sw ? "Bidhaa nyingine" : "Other products"}>
          <h3 className="mb-3 text-sm font-semibold">
            {sw ? "Bidhaa nyingine" : "Other products"}
          </h3>
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
        <nav aria-label={sw ? "Kampuni mama" : "Parent company"}>
          <h3 className="mb-3 text-sm font-semibold">
            {sw ? "Kampuni mama" : "Parent company"}
          </h3>
          <a
            href={parent?.href}
            className="inline-flex min-h-9 items-center text-sm text-white/65 hover:text-white"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-white/65 hover:text-white"
          >
            {sw ? "Mawasiliano" : "Contact"}
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-white/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Tibika.{" "}
            {sw ? "Haki zote zimehifadhiwa." : "All rights reserved."}
          </p>
          <Link
            href="/compliance"
            className="inline-flex min-h-8 items-center hover:text-white"
          >
            {sw ? "Maadili na ulinzi wa data" : "Ethics & data safeguards"}
          </Link>
        </div>
      </div>
    </footer>
  )
}
