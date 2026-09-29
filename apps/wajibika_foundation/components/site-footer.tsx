"use client"

import Link from "next/link"
import { ArrowRight, Megaphone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { useLanguage } from "@/components/language-provider"
import { productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const sw = language === "sw"
  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold">
              {sw
                ? "Anza hatua ya kiraia yenye uwajibikaji"
                : "Start a structured civic action"}
            </h2>
            <p className="mt-2 text-sm text-background/70">
              {sw
                ? "Shiriki suala pamoja na muktadha na ushahidi."
                : "Share an issue with context and supporting information."}
            </p>
          </div>
          <Button
            render={<Link href="/raise-an-issue" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 rounded-xl px-5"
          >
            {sw ? "Wasilisha suala" : "Raise an issue"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2">
            <Megaphone aria-hidden="true" className="size-6 text-amber-300" />
            <span className="font-heading text-lg font-bold">Wajibika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-background/85">
            {sw ? "Sauti yako, ikisikika zaidi." : "Your voice, amplified."}
          </p>
          <p className="mt-3 text-sm leading-6 text-background/65">
            {sw
              ? "Wajibika ni chapa ya Swizzy Industries."
              : "Wajibika is a Swizzy Industries brand."}
          </p>
        </div>
        <nav aria-label={sw ? "Masuala" : "Issues"}>
          <h3 className="mb-3 text-sm font-semibold">
            {sw ? "Masuala" : "Issues"}
          </h3>
          <ul className="space-y-1">
            {[
              ["Issues & campaigns", "/issues"],
              ["Economy & livelihoods", "/issues/economy"],
              ["Accountability tracker", "/accountability-tracker"],
              ["Voices & stories", "/voices"],
              ["Community guidelines", "/community-guidelines"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
                >
                  {sw
                    ? (
                        {
                          "/issues": "Masuala na kampeni",
                          "/issues/economy": "Uchumi na maisha",
                          "/accountability-tracker": "Kifuatilia uwajibikaji",
                          "/voices": "Sauti na hadithi",
                          "/community-guidelines": "Mwongozo wa jumuiya",
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
                  className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
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
            className="inline-flex min-h-9 items-center text-sm text-background/65 hover:text-background"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-background/65 hover:text-background"
          >
            {sw ? "Mawasiliano" : "Contact"}
          </Link>
        </nav>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-background/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Wajibika.{" "}
            {sw ? "Haki zote zimehifadhiwa." : "All rights reserved."}
          </p>
          <Link
            href="/community-guidelines"
            className="inline-flex min-h-8 items-center hover:text-background"
          >
            {sw ? "Kanuni za jamii" : "Community standards"}
          </Link>
        </div>
      </div>
    </footer>
  )
}
