"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ChevronDown, Menu, Moon, School, Sun, X } from "lucide-react"

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
import { translate, useLanguage } from "@/components/language-provider"
import { NavigationGroupList } from "@/components/navigation-menu-content"
import {
  megaMenus,
  primaryNavigation,
  productLinks,
  type MegaMenuKey,
} from "@/lib/site-navigation"

type PrimaryNavigationItem = (typeof primaryNavigation)[number]

function MobileNavigationSection({
  item,
  onNavigate,
}: {
  item: PrimaryNavigationItem
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const label = translate(item.title, language)

  if (item.key === "contact") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="flex min-h-12 items-center border-b border-border px-2 text-base font-semibold hover:text-primary"
      >
        {label}
      </Link>
    )
  }

  const menu = megaMenus[item.key as MegaMenuKey]

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex min-h-12 items-center justify-between border-b border-border">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex min-h-12 flex-1 items-center px-2 text-base font-semibold hover:text-primary"
        >
          {label}
        </Link>
        <CollapsibleTrigger
          aria-label={`${translate(open ? "Collapse" : "Expand", language)} ${label}`}
          className="flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <ChevronDown
            aria-hidden="true"
            className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="overflow-hidden data-[closed]:animate-accordion-up data-[open]:animate-accordion-down">
        <div className="space-y-4 py-3 pl-2">
          {menu.groups.map((group) => (
            <NavigationGroupList
              key={group.title}
              group={group}
              language={language}
              compact
            />
          ))}
          <Link
            href={menu.featured.href}
            onClick={onNavigate}
            className="mx-2 flex min-h-10 items-center gap-2 rounded-lg bg-muted px-3 text-sm font-semibold text-primary"
          >
            {translate(menu.featured.action, language)}
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function MobileNavigation() {
  const pathname = usePathname()
  const [sheetState, setSheetState] = useState({ pathname, open: false })
  const open = sheetState.pathname === pathname && sheetState.open
  const { resolvedTheme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const parentCompany = productLinks.find((product) => product.parent)
  const relatedProducts = productLinks.filter((product) => !product.parent)

  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => setSheetState({ pathname, open: nextOpen })}
    >
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="xl:hidden"
            aria-label={translate("Open navigation menu", language)}
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
          <SheetTitle className="flex items-center gap-2 text-left">
            <School aria-hidden="true" className="size-5 text-primary" />
            Elimika Foundation
          </SheetTitle>
          <SheetDescription>
            {translate("Learning in three dimensions.", language)}
          </SheetDescription>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label={translate("Close navigation menu", language)}
                className="absolute top-2 right-3"
              />
            }
          >
            <X aria-hidden="true" />
          </SheetClose>
        </SheetHeader>

        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2">
          <div
            role="group"
            aria-label={translate("Language", language)}
            className="inline-flex h-9 items-center rounded-lg border border-border bg-background p-0.5"
          >
            {(["en", "sw"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                aria-label={translate(
                  option === "en" ? "English" : "Swahili",
                  language
                )}
                onClick={() => setLanguage(option)}
                className={`inline-flex h-8 min-w-9 items-center justify-center rounded-md px-2 text-xs font-semibold ${language === option ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label={translate("Toggle color theme", language)}
            title={translate("Toggle light and dark mode", language)}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun aria-hidden="true" className="hidden dark:block" />
            <Moon aria-hidden="true" className="block dark:hidden" />
          </Button>
        </div>

        <div
          className="min-h-0 flex-1 overflow-y-auto px-4"
          onClickCapture={(event) => {
            if ((event.target as HTMLElement).closest("a")) {
              setSheetState({ pathname, open: false })
            }
          }}
        >
          <nav
            aria-label={translate("Mobile navigation", language)}
            className="py-2"
          >
            {primaryNavigation.map((item) => (
              <MobileNavigationSection
                key={item.key}
                item={item}
                onNavigate={() => setSheetState({ pathname, open: false })}
              />
            ))}
          </nav>

          <section className="border-t border-border py-4">
            <h2 className="px-2 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {translate("Related products", language)}
            </h2>
            {parentCompany && (
              <a
                href={parentCompany.href}
                className="flex min-h-11 items-center gap-3 rounded-lg px-2 font-semibold hover:bg-muted"
              >
                <School aria-hidden="true" className="size-5 text-primary" />
                {parentCompany.title}
                <span className="text-xs font-normal text-muted-foreground">
                  ({translate("Parent company", language)})
                </span>
              </a>
            )}
            {relatedProducts.map((product) => {
              const Icon = product.icon
              return (
                <a
                  key={product.title}
                  href={product.href}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-2 hover:bg-muted"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    style={{ color: product.color }}
                  />
                  <span className="font-semibold">{product.title}</span>
                </a>
              )
            })}
          </section>
        </div>

        <div className="border-t border-border bg-background p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            className="h-12 w-full justify-center rounded-xl text-base"
            onClick={() => setSheetState({ pathname, open: false })}
          >
            {translate("Request an institutional demo", language)}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
