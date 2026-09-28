"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Layers3, Moon, Search, Sun } from "lucide-react"

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
import { MobileNavigation } from "@/components/mobile-navigation"
import { MegaMenuPanel } from "@/components/navigation-menu-content"
import { primaryNavigation, type MegaMenuKey } from "@/lib/site-navigation"

function isCurrentPage(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-low backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-teal-accent focus-visible:outline-none"
          aria-label="Swizzy Industries home"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-tint text-blue-primary transition-colors group-hover:bg-teal-tint group-hover:text-teal-accent dark:bg-blue-primary/15 dark:text-blue-300 dark:group-hover:bg-teal-accent/15 dark:group-hover:text-teal-300">
            <Layers3 aria-hidden="true" className="size-[22px]" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-base font-bold text-foreground sm:text-lg">
              Swizzy
            </span>
            <span className="block text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
              Industries
            </span>
          </span>
        </Link>

        <NavigationMenu className="hidden flex-1 lg:flex" align="center">
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
                        active &&
                          "text-blue-primary after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:rounded-full after:bg-teal-accent"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={item.key} value={item.key}>
                  <NavigationMenuTrigger
                    className={cn(
                      "relative h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary",
                      active &&
                        "text-blue-primary after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:rounded-full after:bg-teal-accent"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[min(calc(100vw-2rem),1200px)] !p-0">
                    <MegaMenuPanel menuKey={item.key as MegaMenuKey} />
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
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>
          <Button
            render={<Link href="/search" aria-label="Search" />}
            variant="outline"
            size="icon-lg"
            className="hidden rounded-full sm:inline-flex"
          >
            <Search aria-hidden="true" />
          </Button>
          <Button
            render={<Link href="/solutions/request-a-demo" />}
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
