"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Search, Sun } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"
import { isSitePage } from "@/lib/construction-routes"
import { MobileNavigation } from "@/components/mobile-navigation"
import { MegaMenuPanel } from "@/components/navigation-menu-content"
import { SwizzyLogo } from "@/components/swizzy-logo"
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
  const { resolvedTheme, setTheme } = useTheme()
  const [menuValue, setMenuValue] = useState<string | null>(null)

  useEffect(() => {
    setMenuValue(null)
  }, [pathname])

  if (!isSitePage(pathname)) {
    return (
      <header className="bg-background px-5 py-4 text-foreground sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            aria-label="Swizzy Industries home"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
          >
            <SwizzyLogo compact />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-low backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
          aria-label="Swizzy Industries home"
        >
          <SwizzyLogo />
        </Link>

        <NavigationMenu
          className="hidden flex-1 lg:flex"
          align="center"
          value={menuValue}
          onValueChange={(value) => setMenuValue(value as string | null)}
        >
          <NavigationMenuList className="gap-1">
            {primaryNavigation.map((item) => {
              const active = isCurrentPage(pathname, item.href)

              if (item.key === "contacts") {
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
                        active && "text-blue-primary"
                      )}
                    >
                      {item.label}
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
                        onClick={() => setMenuValue(null)}
                      />
                    }
                    className={cn(
                      "relative h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary",
                      active && "text-blue-primary"
                    )}
                  >
                    {sectionLink.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[min(calc(100vw-2rem),1200px)] !p-0">
                    <div
                      onClickCapture={(event) => {
                        if ((event.target as HTMLElement).closest("a"))
                          setMenuValue(null)
                      }}
                    >
                      <MegaMenuPanel menuKey={menuKey} />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0">
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label="Toggle color theme"
            title="Toggle light and dark mode"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun aria-hidden="true" className="hidden dark:block" />
            <Moon aria-hidden="true" className="block dark:hidden" />
          </Button>
          <Button
            render={<Link href="/search" aria-label="Search" />}
            nativeButton={false}
            variant="outline"
            size="icon-lg"
            className="hidden rounded-full sm:inline-flex"
          >
            <Search aria-hidden="true" />
          </Button>
          <Button
            render={<Link href="/solutions/request-a-demo" />}
            nativeButton={false}
            className="hidden h-11 rounded-xl px-4 text-sm sm:inline-flex lg:px-5"
          >
            Request a Demo
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
