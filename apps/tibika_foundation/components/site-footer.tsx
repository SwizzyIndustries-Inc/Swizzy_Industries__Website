"use client"

import Link from "next/link"
import { ArrowRight, HeartPulse } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { primaryNavigation, productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const links = primaryNavigation.filter((item) => item.href !== "/")
  return (
    <footer className="bg-tibika-footer text-tibika-footer-foreground">
      <div className="border-b border-tibika-footer-foreground/15 bg-tibika-footer-foreground/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold sm:text-2xl">
              {translate("Discuss your institutional needs", language)}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-tibika-footer-foreground/70">
              {translate(
                "Talk about training, research, or simulation.",
                language
              )}
            </p>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 shrink-0 rounded-xl bg-tibika-footer-cta px-5 text-tibika-footer-cta-foreground hover:bg-tibika-footer-cta/90"
          >
            {translate("Request a consultation", language)}
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
            <HeartPulse
              aria-hidden="true"
              className="size-6 text-tibika-footer-accent"
            />
            <span className="font-heading text-lg font-bold">Tibika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-tibika-footer-foreground/85">
            {translate("Practice precision. Protect life.", language)}
          </p>
          <p className="mt-3 text-sm leading-6 text-tibika-footer-foreground/65">
            {translate("Tibika is a Swizzy Industries brand.", language)}
          </p>
        </div>
        <nav aria-label={translate("Solutions", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Solutions", language)}
          </h3>
          <ul className="space-y-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-tibika-footer-foreground/65 hover:text-tibika-footer-foreground"
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
                  className="inline-flex min-h-9 items-center text-sm text-tibika-footer-foreground/65 hover:text-tibika-footer-foreground"
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={translate("Parent company", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Parent company", language)}
          </h3>
          <a
            href={parent?.href}
            className="inline-flex min-h-9 items-center text-sm text-tibika-footer-foreground/65 hover:text-tibika-footer-foreground"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-tibika-footer-foreground/65 hover:text-tibika-footer-foreground"
          >
            {translate("Contact", language)}
          </Link>
        </nav>
      </div>
      <div className="border-t border-tibika-footer-foreground/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-tibika-footer-foreground/60 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Tibika.{" "}
            {translate("All rights reserved.", language)}
          </p>
          <Link
            href="/compliance"
            className="inline-flex min-h-8 items-center hover:text-tibika-footer-foreground"
          >
            {translate("Ethics & data safeguards", language)}
          </Link>
        </div>
      </div>
    </footer>
  )
}
