"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, UsersRound } from "lucide-react"

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
import { useLanguage } from "@/components/language-provider"
import { MobileNavigation } from "@/components/mobile-navigation"
import { primaryNavigation, productLinks } from "@/lib/site-navigation"

function isCurrentPage(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [menuValue, setMenuValue] = useState<string | null>(null)
  const parent = productLinks.find((product) => product.parent)
  const siblings = productLinks.filter((product) => !product.parent)
  const links = primaryNavigation.filter(
    (item) => item.href !== "/" && item.href !== "/spaces"
  )
  const labels =
    language === "sw"
      ? {
          home: "Mwanzo",
          spaces: "Nafasi na jumuiya",
          products: "Bidhaa na suluhisho",
          parent: "Kampuni mama",
          language: "Lugha",
          action: "Anza",
        }
      : {
          home: "Home",
          spaces: "Spaces & communities",
          products: "Products & Solutions",
          parent: "Parent company",
          language: "Language",
          action: "Get started",
        }

  useEffect(() => setMenuValue(null), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="Jumuika home"
          className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <UsersRound aria-hidden="true" className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold">
              Jumuika
            </span>
            <span className="block text-[11px] text-muted-foreground">
              {language === "sw"
                ? "Sehemu ya Swizzy Industries"
                : "A Swizzy Industries brand"}
            </span>
          </span>
        </Link>
        <NavigationMenu
          className="hidden flex-1 justify-center xl:flex"
          value={menuValue}
          onValueChange={(value) => setMenuValue(value as string | null)}
        >
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                render={
                  <Link
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                  />
                }
                className={cn(
                  "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                  pathname === "/" && "text-primary"
                )}
              >
                {labels.home}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={
                  <Link
                    href="/spaces"
                    aria-current={
                      isCurrentPage(pathname, "/spaces") ? "page" : undefined
                    }
                  />
                }
                className={cn(
                  "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                  isCurrentPage(pathname, "/spaces") && "text-primary"
                )}
              >
                {labels.spaces}
              </NavigationMenuLink>
            </NavigationMenuItem>
            {links.slice(0, 1).map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={
                    <Link
                      href={item.href}
                      aria-current={
                        isCurrentPage(pathname, item.href) ? "page" : undefined
                      }
                    />
                  }
                  className={cn(
                    "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                    isCurrentPage(pathname, item.href) && "text-primary"
                  )}
                >
                  {language === "sw"
                    ? ((
                        {
                          "/events": "Matukio",
                          "/safety-privacy": "Usalama na faragha",
                          "/stories": "Hadithi",
                          "/careers": "Kazi",
                          "/contact": "Mawasiliano",
                        } as Record<string, string>
                      )[item.href] ?? item.title)
                    : item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem value="products">
              <NavigationMenuTrigger>{labels.products}</NavigationMenuTrigger>
              <NavigationMenuContent className="!w-[min(calc(100vw-2rem),860px)] !p-0">
                <div className="grid gap-5 p-5 sm:grid-cols-[0.85fr_1.6fr] sm:p-6">
                  <a
                    href={parent?.href}
                    className="flex min-h-40 flex-col justify-between rounded-xl bg-primary p-5 text-primary-foreground hover:brightness-95"
                  >
                    <UsersRound aria-hidden="true" className="size-6" />
                    <span>
                      <span className="block text-xs font-semibold tracking-wide uppercase opacity-75">
                        {labels.parent}
                      </span>
                      <span className="mt-1 block font-heading text-xl font-bold">
                        Swizzy Industries
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm">
                        {language === "sw"
                          ? "Tembelea kampuni"
                          : "Visit the company"}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </span>
                    </span>
                  </a>
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {labels.products}
                    </p>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {siblings.map((product) => {
                        const Icon = product.icon
                        return (
                          <a
                            key={product.title}
                            href={product.href}
                            className="flex min-h-16 items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted"
                          >
                            <span
                              className="flex size-10 items-center justify-center rounded-lg"
                              style={{
                                color: product.color,
                                backgroundColor: `${product.color}18`,
                              }}
                            >
                              <Icon aria-hidden="true" className="size-5" />
                            </span>
                            <span>
                              <span className="block font-semibold">
                                {product.title}
                              </span>
                              <span className="block text-xs leading-5 text-muted-foreground">
                                {language === "sw"
                                  ? product.descriptionSw
                                  : product.description}
                              </span>
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {links.slice(1).map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={
                    <Link
                      href={item.href}
                      aria-current={
                        isCurrentPage(pathname, item.href) ? "page" : undefined
                      }
                    />
                  }
                  className={cn(
                    "h-10 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-muted",
                    isCurrentPage(pathname, item.href) && "text-primary"
                  )}
                >
                  {language === "sw"
                    ? ((
                        {
                          "/safety-privacy": "Usalama",
                          "/stories": "Hadithi",
                          "/careers": "Kazi",
                          "/contact": "Mawasiliano",
                        } as Record<string, string>
                      )[item.href] ?? item.title)
                    : item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <div
            role="group"
            aria-label={labels.language}
            className="inline-flex items-center rounded-lg border border-border p-0.5"
          >
            {(["en", "sw"] as const).map((option) => (
              <Button
                key={option}
                type="button"
                variant={language === option ? "secondary" : "ghost"}
                size="sm"
                aria-pressed={language === option}
                className="h-8 min-w-9 px-2 text-xs"
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </Button>
            ))}
          </div>
          <Button
            render={<Link href="/download" />}
            nativeButton={false}
            className="h-11 rounded-xl px-4 text-sm"
          >
            {labels.action}
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  )
}
