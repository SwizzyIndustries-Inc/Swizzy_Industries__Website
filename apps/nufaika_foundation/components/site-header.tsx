"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, BriefcaseBusiness, Search, Wrench } from "lucide-react"

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

function active(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [menuValue, setMenuValue] = useState<string | null>(null)
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const sw = language === "sw"
  useEffect(() => setMenuValue(null), [pathname])
  const labels = sw
    ? {
        products: "Bidhaa na suluhisho",
        parent: "Kampuni mama",
        find: "Tafuta huduma",
        home: "Mwanzo",
        categories: "Huduma",
        how: "Jinsi inavyofanya kazi",
        providers: "Watoa huduma",
        trust: "Uaminifu na usalama",
        careers: "Kazi",
        contact: "Mawasiliano",
        language: "Lugha",
      }
    : {
        products: "Products & Solutions",
        parent: "Parent company",
        find: "Find a Service",
        home: "Home",
        categories: "Categories",
        how: "How it works",
        providers: "For providers",
        trust: "Trust & safety",
        careers: "Careers",
        contact: "Contact",
        language: "Language",
      }
  const links = [
    { title: labels.categories, href: "/categories" },
    { title: labels.how, href: "/how-it-works" },
    { title: labels.providers, href: "/for-providers" },
    { title: labels.trust, href: "/trust-safety" },
    { title: labels.careers, href: "/careers" },
    { title: labels.contact, href: "/contact" },
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="Nufaika home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <BriefcaseBusiness aria-hidden="true" className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold">
              Nufaika
            </span>
            <span className="block text-[11px] text-muted-foreground">
              {sw ? "Fursa kwa kila stadi" : "Skills meet opportunity"}
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
                  "h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted",
                  pathname === "/" && "text-primary"
                )}
              >
                {labels.home}
              </NavigationMenuLink>
            </NavigationMenuItem>
            {links.slice(0, 1).map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={
                    <Link
                      href={item.href}
                      aria-current={
                        active(pathname, item.href) ? "page" : undefined
                      }
                    />
                  }
                  className={cn(
                    "h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted",
                    active(pathname, item.href) && "text-primary"
                  )}
                >
                  {item.title}
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
                    <Wrench aria-hidden="true" className="size-6" />
                    <span>
                      <span className="block text-xs font-semibold tracking-wide uppercase opacity-75">
                        {labels.parent}
                      </span>
                      <span className="mt-1 block font-heading text-xl font-bold">
                        Swizzy Industries
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm">
                        {sw ? "Tembelea kampuni" : "Visit the company"}
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
                                {sw
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
                        active(pathname, item.href) ? "page" : undefined
                      }
                    />
                  }
                  className={cn(
                    "h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted",
                    active(pathname, item.href) && "text-primary"
                  )}
                >
                  {item.title}
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
            render={<Link href="/search" />}
            nativeButton={false}
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label={labels.find}
          >
            <Search aria-hidden="true" />
          </Button>
          <Button
            render={<Link href="/search" />}
            nativeButton={false}
            className="h-11 rounded-xl px-4 text-sm"
          >
            {labels.find}
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  )
}
