"use client"

import Link from "next/link"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { translate, useLanguage } from "@/components/language-provider"
import {
  megaMenus,
  productLinks,
  type MegaMenuKey,
} from "@/lib/site-navigation"

export function MegaMenuPanel({ menuKey }: { menuKey: MegaMenuKey }) {
  const { language } = useLanguage()
  const menu = megaMenus[menuKey]
  const FeaturedIcon: LucideIcon = menu.featured.icon
  const parentProduct = productLinks.find((product) => product.parent)
  const relatedProducts = productLinks.filter((product) => !product.parent)

  return (
    <div className="overflow-hidden rounded-b-xl border border-border bg-popover text-popover-foreground shadow-lg">
      <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_260px]">
        {menu.groups.map((group) => (
          <section
            key={group.title}
            aria-label={translate(group.title, language)}
            className="min-w-0"
          >
            <h3 className="mb-2 px-2 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              {translate(group.title, language)}
            </h3>
            <div className="grid gap-1">
              {group.links.map((entry) => {
                const Icon = entry.icon
                const description =
                  language === "sw" && entry.descriptionSw
                    ? entry.descriptionSw
                    : entry.description
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className={cn(
                      "group flex min-h-14 items-start gap-3 rounded-lg border border-transparent p-2.5 transition-colors hover:border-border hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    )}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon aria-hidden="true" className="size-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                        {translate(entry.title, language)}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                        {translate(description, language)}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                )
              })}
            </div>
          </section>
        ))}
        <aside className="flex min-h-full flex-col justify-between rounded-xl border border-border bg-muted p-5 sm:col-span-2 lg:col-span-1">
          <div>
            <span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
              <FeaturedIcon aria-hidden="true" className="size-5" />
            </span>
            <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              {translate(menu.featured.eyebrow, language)}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground">
              {translate(menu.featured.title, language)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {translate(menu.featured.description, language)}
            </p>
          </div>
          <Link
            href={menu.featured.href}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {translate(menu.featured.action, language)}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </aside>
      </div>
      <footer className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-muted px-6 py-3">
        <span className="mr-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          {translate("Related products", language)}
        </span>
        {parentProduct && (
          <a
            href={parentProduct.href}
            className="inline-flex min-h-8 items-center gap-1 text-xs font-semibold hover:text-primary"
          >
            {parentProduct.title}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        )}
        {relatedProducts.map((product) => (
          <a
            key={product.title}
            href={product.href}
            className="inline-flex min-h-8 items-center gap-1 text-xs text-muted-foreground hover:text-primary"
          >
            {product.title}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        ))}
      </footer>
    </div>
  )
}
