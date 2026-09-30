"use client"

import Link from "next/link"
import { ArrowRight, Megaphone } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { primaryNavigation, productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const links = primaryNavigation.filter((item) => item.href !== "/")

  return (
    <footer className="bg-wajibika-footer text-wajibika-footer-foreground">
      <div className="border-b border-wajibika-footer-foreground/15 bg-wajibika-footer-foreground/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold sm:text-2xl">
              {translate("Start a structured civic action", language)}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-wajibika-footer-foreground/70">
              {translate(
                "Share an issue with context and supporting information.",
                language
              )}
            </p>
          </div>
          <Button
            render={<Link href="/raise-an-issue" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 shrink-0 rounded-xl bg-wajibika-footer-cta px-5 text-wajibika-footer-cta-foreground hover:bg-wajibika-footer-cta/90"
          >
            {translate("Raise an issue", language)}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8 lg:py-14">
        <div className="max-w-xs">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg"
          >
            <Megaphone
              aria-hidden="true"
              className="size-6 text-wajibika-footer-accent"
            />
            <span className="font-heading text-lg font-bold">Wajibika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-wajibika-footer-foreground/85">
            {translate("Your voice, amplified.", language)}
          </p>
          <p className="mt-3 text-sm leading-6 text-wajibika-footer-foreground/65">
            {translate("Wajibika is a Swizzy Industries brand.", language)}
          </p>
        </div>
        <nav aria-label={translate("Issues", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Explore", language)}
          </h3>
          <ul className="space-y-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-wajibika-footer-foreground/65 hover:text-wajibika-footer-foreground"
                >
                  {translate(item.title, language)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={translate("Other products", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Other products", language)}
          </h3>
          <ul className="space-y-1">
            {siblings.map((product) => (
              <li key={product.title}>
                <a
                  href={product.href}
                  className="inline-flex min-h-9 items-center text-sm text-wajibika-footer-foreground/65 hover:text-wajibika-footer-foreground"
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={translate("Parent company", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Partners & contact", language)}
          </h3>
          <a
            href={parent?.href}
            className="inline-flex min-h-9 items-center text-sm text-wajibika-footer-foreground/65 hover:text-wajibika-footer-foreground"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-wajibika-footer-foreground/65 hover:text-wajibika-footer-foreground"
          >
            {translate("Contact", language)}
          </Link>
        </nav>
      </div>
      <div className="border-t border-wajibika-footer-foreground/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-wajibika-footer-foreground/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Wajibika.{" "}
            {translate("All rights reserved.", language)}
          </p>
          <Link
            href="/community-guidelines"
            className="inline-flex min-h-8 items-center hover:text-wajibika-footer-foreground"
          >
            {translate("Community standards", language)}
          </Link>
        </div>
      </div>
    </footer>
  )
}
