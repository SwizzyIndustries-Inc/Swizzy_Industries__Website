"use client"

import Link from "next/link"
import { ArrowRight, BriefcaseBusiness } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { primaryNavigation, productLinks } from "@/lib/site-navigation"

export function SiteFooter() {
  const { language } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const links = primaryNavigation.filter((item) => item.href !== "/")

  return (
    <footer className="bg-nufaika-footer text-nufaika-footer-foreground">
      <div className="border-b border-nufaika-footer-foreground/15 bg-nufaika-footer-foreground/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-xl font-semibold sm:text-2xl">
              {translate("Your skills deserve opportunity.", language)}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-nufaika-footer-foreground/85">
              {translate(
                "Connect with customers looking for your service.",
                language
              )}
            </p>
          </div>
          <Button
            render={<Link href="/for-providers" />}
            nativeButton={false}
            variant="secondary"
            className="h-11 shrink-0 rounded-xl bg-nufaika-footer-cta px-5 text-nufaika-footer-cta-foreground hover:bg-nufaika-footer-cta/90"
          >
            {translate("Become a provider", language)}
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
            <BriefcaseBusiness
              aria-hidden="true"
              className="size-6 text-nufaika-footer-accent"
            />
            <span className="font-heading text-lg font-bold">Nufaika</span>
          </Link>
          <p className="mt-3 text-sm font-medium text-nufaika-footer-foreground/85">
            {translate("Skills meet opportunity", language)}
          </p>
          <p className="mt-3 text-sm leading-6 text-nufaika-footer-foreground/85">
            {translate("Nufaika is a Swizzy Industries brand.", language)}
          </p>
        </div>
        <nav aria-label={translate("Services", language)}>
          <h3 className="mb-3 text-sm font-semibold">
            {translate("Services", language)}
          </h3>
          <ul className="space-y-1">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-sm text-nufaika-footer-foreground/85 hover:text-nufaika-footer-foreground"
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
                  className="inline-flex min-h-9 items-center text-sm text-nufaika-footer-foreground/85 hover:text-nufaika-footer-foreground"
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
            className="inline-flex min-h-9 items-center text-sm text-nufaika-footer-foreground/85 hover:text-nufaika-footer-foreground"
          >
            Swizzy Industries
          </a>
          <Link
            href="/contact"
            className="mt-1 flex min-h-9 items-center text-sm text-nufaika-footer-foreground/85 hover:text-nufaika-footer-foreground"
          >
            {translate("Contact us", language)}
          </Link>
        </nav>
      </div>
      <div className="border-t border-nufaika-footer-foreground/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-xs text-nufaika-footer-foreground/80 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Nufaika.{" "}
            {translate("All rights reserved.", language)}
          </p>
          <Link
            href="/provider-agreement"
            className="inline-flex min-h-8 items-center hover:text-nufaika-footer-foreground"
          >
            {translate("Provider standards", language)}
          </Link>
        </div>
      </div>
    </footer>
  )
}
