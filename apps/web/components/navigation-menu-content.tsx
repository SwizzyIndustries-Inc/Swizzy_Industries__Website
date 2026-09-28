import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import {
  megaMenus,
  type NavigationEntry,
  type NavigationGroup,
  type PillarNavigationEntry,
} from "@/lib/site-navigation"

function NavigationEntryLink({
  entry,
  compact = false,
}: {
  entry: NavigationEntry
  compact?: boolean
}) {
  const Icon = entry.icon

  return (
    <Link
      href={entry.href}
      className={cn(
        "group flex min-h-14 items-start gap-3 rounded-lg border border-transparent p-2.5 transition-colors hover:border-border hover:bg-muted focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none",
        compact && "min-h-11 gap-2.5 px-2 py-2"
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon aria-hidden="true" className="size-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
          {entry.title}
        </span>
        {!compact && (
          <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
            {entry.description}
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
  compact = false,
}: {
  group: NavigationGroup
  compact?: boolean
}) {
  return (
    <section aria-label={group.title} className="min-w-0">
      <h3 className="mb-2 px-2 text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        {group.title}
      </h3>
      <div className="grid gap-1">
        {group.links.map((entry) => (
          <NavigationEntryLink
            key={entry.href}
            entry={entry}
            compact={compact}
          />
        ))}
      </div>
    </section>
  )
}

function FeaturedNavigationCard({
  menuKey,
}: {
  menuKey: keyof typeof megaMenus
}) {
  const featured = megaMenus[menuKey].featured
  const Icon = featured.icon

  return (
    <aside className="flex min-h-full flex-col justify-between rounded-xl border border-border bg-muted p-5">
      <div>
        <span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-card text-primary shadow-low">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          {featured.eyebrow}
        </p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground">
          {featured.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {featured.description}
        </p>
      </div>
      <Link
        href={featured.href}
        className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
      >
        {featured.action}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>
    </aside>
  )
}

function PillarNavigationCard({ pillar }: { pillar: PillarNavigationEntry }) {
  const Icon = pillar.icon

  return (
    <article
      className={cn(
        "group rounded-lg border border-l-4 border-border bg-card p-3 transition-shadow hover:shadow-medium",
        pillar.accent === "health" && "border-l-pillar-health",
        pillar.accent === "education" && "border-l-pillar-education",
        pillar.accent === "social" && "border-l-pillar-social"
      )}
    >
      <Link
        href={pillar.href}
        className="flex items-start gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
      >
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-lg",
            pillar.accent === "health" &&
              "bg-teal-tint text-pillar-health dark:bg-pillar-health/15 dark:text-teal-300",
            pillar.accent === "education" &&
              "bg-blue-tint text-pillar-education dark:bg-pillar-education/15 dark:text-blue-300",
            pillar.accent === "social" &&
              "bg-[#FCEAE6] text-pillar-social dark:bg-pillar-social/15 dark:text-[#F5A08D]"
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <span>
          <span className="block text-sm font-semibold text-card-foreground group-hover:text-primary">
            {pillar.title}
          </span>
          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
            {pillar.description}
          </span>
        </span>
      </Link>
      <Link
        href={pillar.zoneHref}
        className="mt-2 ml-[52px] inline-flex min-h-8 items-center gap-1 text-xs font-medium text-primary hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
      >
        Visit Swizzy {pillar.title}
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </Link>
    </article>
  )
}

function PillarsMegaMenu() {
  const menu = megaMenus.pillars

  return (
    <div className="grid gap-5 p-5 lg:grid-cols-[1.2fr_0.8fr]">
      <section aria-label="Our pillars">
        <div className="mb-3 flex items-center justify-between gap-3 px-1">
          <h3 className="text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            Our pillars
          </h3>
          <Link
            href="/pillars"
            className="inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-primary hover:text-accent-foreground"
          >
            See all pillars{" "}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
        <div className="grid gap-2">
          {menu.pillars?.map((pillar) => (
            <PillarNavigationCard key={pillar.href} pillar={pillar} />
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-4">
        {menu.groups.map((group) => (
          <NavigationGroupList key={group.title} group={group} />
        ))}
        <div className="rounded-lg bg-secondary px-4 py-3">
          <p className="text-sm font-semibold text-secondary-foreground">
            Not sure where to start?
          </p>
          <Link
            href="/contact"
            className="mt-1 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-secondary-foreground hover:text-primary"
          >
            Talk to our team{" "}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function StandardMegaMenu({
  menuKey,
}: {
  menuKey: Exclude<keyof typeof megaMenus, "pillars">
}) {
  const menu = megaMenus[menuKey]

  return (
    <div
      className={cn(
        "grid gap-5 p-5",
        menu.groups.length === 3
          ? "lg:grid-cols-[1fr_1fr_1fr_260px]"
          : "sm:grid-cols-2 lg:grid-cols-[1fr_1fr_280px]"
      )}
    >
      {menu.groups.map((group) => (
        <NavigationGroupList key={group.title} group={group} />
      ))}
      <FeaturedNavigationCard menuKey={menuKey} />
    </div>
  )
}

export function MegaMenuPanel({
  menuKey,
}: {
  menuKey: keyof typeof megaMenus
}) {
  return (
    <div className="overflow-hidden rounded-b-xl border border-border bg-popover text-popover-foreground shadow-high">
      {menuKey === "pillars" ? (
        <PillarsMegaMenu />
      ) : (
        <StandardMegaMenu menuKey={menuKey} />
      )}
      {menuKey === "pillars" && (
        <div className="border-t border-border bg-muted px-6 py-3 text-center text-xs text-muted-foreground">
          {megaMenus.pillars.featured.description}
        </div>
      )}
    </div>
  )
}

export { NavigationEntryLink, NavigationGroupList }
