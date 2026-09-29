"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Languages, School } from "lucide-react"

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
import { pageLinks, productLinks } from "@/lib/site-navigation"

function isCurrentPage(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const [menuValue, setMenuValue] = useState<string | null>(null)
  const siblingProducts = productLinks.filter((product) => !product.parent)

  useEffect(() => setMenuValue(null), [pathname])

  const navigation =
    language === "sw"
      ? {
          home: "Mwanzo",
          learning: "Suluhisho za ujifunzaji",
          products: "Bidhaa na suluhisho",
          labs: "Maabara",
          research: "Utafiti",
          about: "Kuhusu",
          careers: "Kazi",
          contact: "Mawasiliano",
          demo: "Omba onyesho",
          parent: "Kampuni mama",
        }
      : {
          home: "Home",
          learning: "Learning solutions",
          products: "Products & Solutions",
          labs: "Labs & Modules",
          research: "Research",
          about: "About",
          careers: "Careers",
          contact: "Contact",
          demo: "Request a Demo",
          parent: "Parent company",
        }

  const links = [
    { title: navigation.learning, href: "/solutions" },
    { title: navigation.labs, href: "/labs" },
    { title: navigation.research, href: "/research" },
    { title: navigation.about, href: "/about" },
    { title: navigation.careers, href: "/careers" },
    { title: navigation.contact, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="Elimika Foundation home"
          className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <School aria-hidden="true" className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold">
              Elimika
            </span>
            <span className="block text-[11px] text-muted-foreground">
              Foundation
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
                {navigation.home}
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
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem value="products">
              <NavigationMenuTrigger>
                {navigation.products}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!w-[min(calc(100vw-2rem),920px)] !p-0">
                <div className="grid gap-5 p-5 sm:grid-cols-[0.8fr_1.5fr_1fr] sm:p-6">
                  <a
                    href={productLinks.find((product) => product.parent)?.href}
                    className="flex min-h-44 flex-col justify-between rounded-xl bg-primary p-5 text-primary-foreground hover:brightness-95"
                  >
                    <School aria-hidden="true" className="size-6" />
                    <span>
                      <span className="block text-xs font-semibold tracking-wide uppercase opacity-75">
                        {navigation.parent}
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
                      {navigation.products}
                    </p>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {siblingProducts.map((product) => {
                        const Icon = product.icon
                        return (
                          <a
                            key={product.title}
                            href={product.href}
                            className="flex min-h-16 items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted"
                          >
                            <span
                              className="flex size-10 shrink-0 items-center justify-center rounded-lg"
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
                  <div className="rounded-xl bg-muted p-4">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {language === "sw"
                        ? "Mkondo wa elimu"
                        : "Learning tracks"}
                    </p>
                    {pageLinks.slice(0, 4).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex min-h-9 items-center justify-between gap-2 rounded px-2 text-sm font-medium hover:bg-background"
                      >
                        {language === "sw"
                          ? (
                              {
                                "/solutions/k-12": "K-12",
                                "/solutions/higher-education": "Elimu ya juu",
                                "/solutions/tvet-skills": "TVET na stadi",
                                "/solutions/educators-institutions":
                                  "Walimu na taasisi",
                              } as Record<string, string>
                            )[item.href]
                          : item.title}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 text-primary"
                        />
                      </Link>
                    ))}
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
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden shrink-0 items-center gap-2 sm:flex xl:gap-3">
          <div
            role="group"
            aria-label={language === "sw" ? "Lugha" : "Language"}
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
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            className="h-11 rounded-xl px-4 text-sm"
          >
            {navigation.demo}
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  )
}
