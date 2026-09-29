"use client"

import Link from "next/link"
import { ArrowRight, UsersRound } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { useLanguage } from "@/components/language-provider"
import { productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const swahili = language === "sw"
  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold">
              {swahili
                ? "Tukutane katika nafasi ya pamoja"
                : "Make room for a shared moment"}
            </h2>
            <p className="mt-2 text-sm text-background/70">
              {swahili
                ? "Anza na familia, urithi au jumuiya yako."
                : "Start with family, heritage, or a community you want to find."}
            </p>
          </div>
          <Button
            render={<Link href="/download" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 rounded-xl px-5"
          >
            {swahili ? "Anza" : "Get started"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2">
            <UsersRound aria-hidden="true" className="text-coral-300 size-6" />
            <span className="font-heading text-lg font-bold">Jumuika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-background/85">
            {swahili
              ? "Umbali ni jambo dogo tu."
              : "Distance is just a detail."}
          </p>
          <p className="mt-3 text-sm leading-6 text-background/65">
            {swahili
              ? "Jumuika ni chapa ya Swizzy Industries."
              : "Jumuika is a Swizzy Industries brand."}
          </p>
        </div>
        <nav aria-label={swahili ? "Nafasi na matukio" : "Spaces and events"}>
          <h3 className="mb-3 text-sm font-semibold">
            {swahili ? "Gundua" : "Explore"}
          </h3>
          <ul className="space-y-1">
            {[
              ["Spaces & communities", "/spaces"],
              ["Events", "/events"],
              ["Stories", "/stories"],
              ["Safety & privacy", "/safety-privacy"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
                >
                  {swahili
                    ? (
                        {
                          "/spaces": "Nafasi na jumuiya",
                          "/events": "Matukio",
                          "/stories": "Hadithi",
                          "/safety-privacy": "Usalama na faragha",
                        } as Record<string, string>
                      )[href]
                    : label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={swahili ? "Bidhaa nyingine" : "Other products"}>
          <h3 className="mb-3 text-sm font-semibold">
            {swahili ? "Bidhaa nyingine" : "Other products"}
          </h3>
          <ul className="space-y-1">
            {siblings.map((product) => (
              <li key={product.title}>
                <a
                  href={product.href}
                  className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={swahili ? "Kampuni mama" : "Parent company"}>
          <h3 className="mb-3 text-sm font-semibold">
            {swahili ? "Kampuni mama" : "Parent company"}
          </h3>
          <a
            href={parent?.href}
            className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-background/65 hover:text-background"
          >
            {swahili ? "Wasiliana nasi" : "Contact us"}
          </Link>
        </nav>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-background/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Jumuika.{" "}
            {swahili ? "Haki zote zimehifadhiwa." : "All rights reserved."}
          </p>
          <Link
            href="/community-standards"
            className="inline-flex min-h-8 items-center hover:text-background"
          >
            {swahili ? "Viwango vya jumuiya" : "Community standards"}
          </Link>
        </div>
      </div>
    </footer>
  )
}
