"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, Search, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Input } from "@workspace/ui/components/input"
import {
  megaMenus,
  primaryNavigation,
  type MegaMenuKey,
} from "@/lib/site-navigation"
import {
  NavigationEntryLink,
  NavigationGroupList,
} from "@/components/navigation-menu-content"

function MobileNavigationSection({ menuKey }: { menuKey: MegaMenuKey }) {
  const [open, setOpen] = useState(false)
  const item = primaryNavigation.find((entry) => entry.key === menuKey)!
  const menu = megaMenus[menuKey]

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex min-h-12 items-center justify-between border-b border-border">
        <Link
          href={item.href}
          className="flex min-h-12 flex-1 items-center px-2 text-base font-semibold text-foreground hover:text-primary"
        >
          {item.label}
        </Link>
        <CollapsibleTrigger
          aria-label={`${open ? "Collapse" : "Expand"} ${item.label} links`}
          className="flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="overflow-hidden data-[closed]:animate-accordion-up data-[open]:animate-accordion-down">
        <div className="space-y-4 py-3 pl-2">
          {menu.pillars && (
            <div className="space-y-2">
              <Link
                href="/pillars"
                className="block min-h-10 px-2 py-2 text-sm font-semibold text-primary"
              >
                Pillars overview
              </Link>
              {menu.pillars.map((pillar) => (
                <div
                  key={pillar.href}
                  className="rounded-lg border border-border p-2"
                >
                  <NavigationEntryLink entry={pillar} compact />
                  <Link
                    href={pillar.zoneHref}
                    className="ml-11 inline-flex min-h-9 items-center text-xs font-medium text-primary hover:text-accent-foreground"
                  >
                    Visit Swizzy {pillar.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
          {menu.groups.map((group) => (
            <NavigationGroupList key={group.title} group={group} compact />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="lg:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full max-w-none gap-0 overflow-hidden border-0 p-0 sm:max-w-none"
      >
        <SheetHeader className="relative border-b border-border px-5 py-4 pr-16">
          <SheetTitle className="text-left text-foreground">
            Swizzy Industries
          </SheetTitle>
          <SheetDescription className="sr-only">
            Browse company pages, pillars, insights, and careers.
          </SheetDescription>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Close navigation menu"
                className="absolute top-2 right-3"
              />
            }
          >
            <X aria-hidden="true" />
          </SheetClose>
        </SheetHeader>

        <form action="/search" className="border-b border-border p-4">
          <label htmlFor="mobile-site-search" className="sr-only">
            Search Swizzy Industries
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="mobile-site-search"
              name="q"
              placeholder="Search Swizzy"
              className="h-11 pl-10"
            />
          </div>
        </form>

        <div className="min-h-0 flex-1 overflow-y-auto px-4">
          <nav aria-label="Mobile navigation" className="py-2">
            <MobileNavigationSection menuKey="home" />
            <MobileNavigationSection menuKey="pillars" />
            <MobileNavigationSection menuKey="insights" />
            <MobileNavigationSection menuKey="careers" />
            <Link
              href="/contact"
              className="flex min-h-12 items-center border-b border-border px-2 text-base font-semibold text-foreground hover:text-primary"
            >
              Contacts
            </Link>
          </nav>
        </div>

        <div className="border-t border-border bg-background p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            render={<Link href="/solutions/request-a-demo" />}
            nativeButton={false}
            className="h-12 w-full justify-center rounded-xl text-base"
            onClick={() => setOpen(false)}
          >
            Request a Demo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
