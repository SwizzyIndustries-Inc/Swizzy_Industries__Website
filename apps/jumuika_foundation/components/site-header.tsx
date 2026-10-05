"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { ArrowUpRight, Moon, Sun } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { BrandLogo } from "@workspace/ui/components/brand-logo"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"
import { translate, useLanguage } from "@/components/language-provider"
import { MegaMenuPanel } from "@/components/navigation-menu-content"
import { MobileNavigation } from "@/components/mobile-navigation"
import {
  megaMenus,
  primaryNavigation,
  type MegaMenuKey,
} from "@/lib/site-navigation"

function isCurrentPage(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [menuState, setMenuState] = useState<{
    pathname: string
    value: string | null
  }>({ pathname, value: null })
  const menuValue = menuState.pathname === pathname ? menuState.value : null
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label={translate("Jumuika home", language)}
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-background">
            <BrandLogo
              src="/logos/jumuika_logo_icon.svg"
              viewBox="0 0 477.4 275.17"
              className="size-8 object-contain"
            />
          </span>
          <span className="leading-tight">
            <BrandLogo
              src="/logos/jumuika_logo_text.svg"
              viewBox="0 0 511.22 69.64"
              label="Jumuika"
              width={120}
              height={16}
              className="block"
            />
          </span>
        </Link>

        <NavigationMenu
          className="hidden flex-1 justify-center xl:flex"
          value={menuValue}
          onValueChange={(value) =>
            setMenuState({ pathname, value: value as string | null })
          }
        >
          <NavigationMenuList className="gap-1">
            {primaryNavigation.map((item) => {
              const current = isCurrentPage(pathname, item.href)
              const menu =
                item.key in megaMenus
                  ? megaMenus[item.key as MegaMenuKey]
                  : undefined
              if (!menu) {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          aria-current={current ? "page" : undefined}
                        />
                      }
                      className={cn(
                        "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                        current && "text-primary"
                      )}
                    >
                      {translate(item.title, language)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }
              return (
                <NavigationMenuItem key={item.key} value={item.key}>
                  <NavigationMenuTrigger
                    nativeButton={false}
                    render={
                      <Link
                        href={menu.sectionLink.href}
                        aria-current={current ? "page" : undefined}
                        onClick={() => setMenuState({ pathname, value: null })}
                      />
                    }
                    className={cn(
                      "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                      current && "text-primary"
                    )}
                  >
                    {translate(item.title, language)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[min(calc(100vw-2rem),960px)] !p-0">
                    <MegaMenuPanel menuKey={item.key as MegaMenuKey} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-0">
          <div
            role="group"
            aria-label={translate("Language", language)}
            className="hidden h-9 items-center rounded-lg border border-border p-0.5 sm:inline-flex"
          >
            {(["en", "sw"] as const).map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={language === option ? "secondary" : "ghost"}
                aria-pressed={language === option}
                className="h-8 min-w-9 px-2 text-xs"
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </Button>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label={translate("Toggle light and dark mode", language)}
            title={translate("Toggle light and dark mode", language)}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun aria-hidden="true" className="hidden dark:block" />
            <Moon aria-hidden="true" className="block dark:hidden" />
          </Button>
          <Button
            render={<Link href="/download" />}
            nativeButton={false}
            className="hidden h-11 rounded-xl px-4 text-sm sm:inline-flex"
          >
            {translate("Get started", language)}
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
