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
import {
  translate,
  useLanguage,
  type Language,
} from "@/components/language-provider"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MegaMenuPanel } from "@/components/navigation-menu-content"
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

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language
  onChange: (language: Language) => void
}) {
  return (
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
          title={translate(
            option === "en" ? "Switch to English" : "Switch to Swahili",
            language
          )}
          onClick={() => onChange(option)}
          className={cn(
            "inline-flex h-8 min-w-9 items-center justify-center rounded-md px-2 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            language === option
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [menuState, setMenuState] = useState<{
    pathname: string
    value: string | null
  }>({ pathname, value: null })
  const menuValue = menuState.pathname === pathname ? menuState.value : null

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label={translate("Elimika Foundation home", language)}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background">
            <BrandLogo
              src="/logos/elimika_logo_icon.svg"
              viewBox="0 0 2009.74 2009.74"
              className="size-8 object-contain"
            />
          </span>
          <span className="leading-tight">
            <BrandLogo
              src="/logos/elimika_logo_text.svg"
              viewBox="0 0 368.54 72.54"
              label="Elimika"
              width={102}
              height={20}
              className="block"
            />
          </span>
        </Link>

        <NavigationMenu
          className="hidden flex-1 xl:flex"
          align="center"
          value={menuValue}
          onValueChange={(value) =>
            setMenuState({ pathname, value: value as string | null })
          }
        >
          <NavigationMenuList className="gap-1">
            {primaryNavigation.map((item) => {
              const active = isCurrentPage(pathname, item.href)
              const label = translate(item.title, language)

              if (item.key === "contact") {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                        />
                      }
                      className={cn(
                        "relative h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary",
                        active && "text-primary"
                      )}
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }

              const menuKey = item.key as MegaMenuKey
              const sectionLink = megaMenus[menuKey].sectionLink

              return (
                <NavigationMenuItem key={item.key} value={item.key}>
                  <NavigationMenuTrigger
                    nativeButton={false}
                    render={
                      <Link
                        href={sectionLink.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMenuState({ pathname, value: null })}
                      />
                    }
                    className={cn(
                      "relative h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary",
                      active && "text-primary"
                    )}
                  >
                    {label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[min(calc(100vw-2rem),1200px)] !p-0">
                    <div
                      onClickCapture={(event) => {
                        if ((event.target as HTMLElement).closest("a")) {
                          setMenuState({ pathname, value: null })
                        }
                      }}
                    >
                      <MegaMenuPanel menuKey={menuKey} language={language} />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 xl:ml-0">
          <LanguageSwitcher language={language} onChange={setLanguage} />
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
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            className="hidden h-11 rounded-xl px-4 text-sm sm:inline-flex lg:px-5"
          >
            {translate("Request a Demo", language)}
            <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
