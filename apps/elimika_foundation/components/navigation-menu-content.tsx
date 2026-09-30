import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import {
  productLinks,
  megaMenus,
  type MegaMenuKey,
  type NavigationEntry,
  type NavigationGroup,
} from "@/lib/site-navigation"
import type { Language } from "@/components/language-provider"
import { translate } from "@/components/language-provider"

function NavigationEntryLink({
  entry,
  language,
  compact = false,
}: {
  entry: NavigationEntry
  language: Language
  compact?: boolean
}) {
  const Icon = entry.icon

  return (
    <Link
      href={entry.href}
      className={cn(
        "group flex min-h-14 items-start gap-3 rounded-lg border border-transparent p-2.5 transition-colors hover:border-border hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        compact && "min-h-11 gap-2.5 px-2 py-2"
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon aria-hidden="true" className="size-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
          {translate(entry.title, language)}
        </span>
        {!compact && (
          <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
            {translate(entry.description, language)}
          </span>
        )}
      </span>
      {!compact && (
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </Link>
  )
}

function NavigationGroupList({
  group,
  language,
  compact = false,
}: {
  group: NavigationGroup
  language: Language
  compact?: boolean
}) {
  return (
    <section aria-label={translate(group.title, language)} className="min-w-0">
      <h3 className="mb-2 px-2 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        {translate(group.title, language)}
      </h3>
      <div className="grid gap-1">
        {group.links.map((entry) => (
          <NavigationEntryLink
            key={entry.title}
            entry={entry}
            language={language}
            compact={compact}
          />
        ))}
      </div>
    </section>
  )
}

function FeaturedNavigationCard({
  menuKey,
  language,
}: {
  menuKey: MegaMenuKey
  language: Language
}) {
  const featured = megaMenus[menuKey].featured
  const Icon = featured.icon

  return (
    <aside className="flex min-h-full flex-col justify-between rounded-xl border border-border bg-muted p-5">
      <div>
        <span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          {translate(featured.eyebrow, language)}
        </p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground">
          {translate(featured.title, language)}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {translate(featured.description, language)}
        </p>
      </div>
      <Link
        href={featured.href}
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {translate(featured.action, language)}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>
    </aside>
  )
}

export function MegaMenuPanel({
  menuKey,
  language,
}: {
  menuKey: MegaMenuKey
  language: Language
}) {
  const menu = megaMenus[menuKey]
  const relatedProducts = productLinks.filter((product) => !product.parent)
  const parentCompany = productLinks.find((product) => product.parent)

  return (
    <div className="overflow-hidden rounded-b-xl border border-border bg-popover text-popover-foreground shadow-lg">
      <div
        className={cn(
          "grid gap-5 p-5",
          menu.groups.length === 3
            ? "lg:grid-cols-[1fr_1fr_1fr_260px]"
            : "sm:grid-cols-2 lg:grid-cols-[1fr_1fr_280px]"
        )}
      >
        {menu.groups.map((group) => (
          <NavigationGroupList
            key={group.title}
            group={group}
            language={language}
          />
        ))}
        <FeaturedNavigationCard menuKey={menuKey} language={language} />
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-muted px-6 py-3">
        <span className="mr-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          {translate("Related products", language)}
        </span>
        {parentCompany && (
          <a
            href={parentCompany.href}
            className="inline-flex min-h-8 items-center gap-1 text-xs font-semibold hover:text-primary"
          >
            {parentCompany.title}
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
      </div>
    </div>
  )
}

export { NavigationEntryLink, NavigationGroupList }
