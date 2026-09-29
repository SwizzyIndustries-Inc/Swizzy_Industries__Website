"use client"

import { useState } from "react"
import Link from "next/link"
import { BriefcaseBusiness, Menu, Search, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { useLanguage } from "@/components/language-provider"
import { primaryNavigation, productLinks } from "@/lib/site-navigation"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)
  const sw = language === "sw"
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="xl:hidden"
            aria-label={sw ? "Fungua menyu" : "Open navigation menu"}
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
        <SheetHeader className="relative border-b px-5 py-4 pr-16">
          <SheetTitle className="flex items-center gap-2">
            <BriefcaseBusiness
              aria-hidden="true"
              className="size-5 text-primary"
            />
            Nufaika
          </SheetTitle>
          <SheetDescription>
            {sw ? "Stadi zinakutana na fursa." : "Skills meet opportunity."}
          </SheetDescription>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label={sw ? "Funga menyu" : "Close menu"}
                className="absolute top-2 right-3"
              />
            }
          >
            <X aria-hidden="true" />
          </SheetClose>
        </SheetHeader>
        <form action="/search" className="border-b p-4">
          <label htmlFor="nufaika-mobile-search" className="sr-only">
            {sw ? "Tafuta huduma" : "Search services"}
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="nufaika-mobile-search"
              name="q"
              placeholder={
                sw ? "Unahitaji huduma gani?" : "What service do you need?"
              }
              className="h-11 pl-10"
            />
          </div>
        </form>
        <div
          role="group"
          aria-label={sw ? "Lugha" : "Language"}
          className="flex justify-end gap-1 border-b border-border px-4 py-2"
        >
          {(["en", "sw"] as const).map((option) => (
            <Button
              key={option}
              type="button"
              size="sm"
              variant={language === option ? "secondary" : "ghost"}
              aria-pressed={language === option}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </Button>
          ))}
        </div>
        <nav
          aria-label={sw ? "Urambazaji" : "Mobile navigation"}
          className="min-h-0 flex-1 overflow-y-auto px-4 py-2"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border px-2 font-semibold hover:text-primary"
            >
              {sw
                ? (
                    {
                      "/": "Mwanzo",
                      "/categories": "Aina za huduma",
                      "/how-it-works": "Jinsi inavyofanya kazi",
                      "/for-providers": "Kwa watoa huduma",
                      "/trust-safety": "Uaminifu na usalama",
                      "/careers": "Kazi",
                      "/contact": "Mawasiliano",
                    } as Record<string, string>
                  )[item.href]
                : item.title}
            </Link>
          ))}
          <section className="py-4">
            <h2 className="px-2 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {sw ? "Bidhaa na suluhisho" : "Products & Solutions"}
            </h2>
            {parent && (
              <a
                href={parent.href}
                className="flex min-h-12 items-center gap-3 rounded-lg px-2 font-semibold hover:bg-muted"
              >
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="size-5 text-primary"
                />
                Swizzy Industries{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  ({sw ? "Kampuni mama" : "Parent company"})
                </span>
              </a>
            )}
            {siblings.map((product) => {
              const Icon = product.icon
              return (
                <a
                  key={product.title}
                  href={product.href}
                  className="flex min-h-12 items-center gap-3 rounded-lg px-2 hover:bg-muted"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    style={{ color: product.color }}
                  />
                  {product.title}
                </a>
              )
            })}
          </section>
        </nav>
        <div className="border-t p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            render={<Link href="/for-providers" />}
            nativeButton={false}
            className="h-12 w-full rounded-xl"
            onClick={() => setOpen(false)}
          >
            {sw ? "Jiunge kama mtoa huduma" : "Become a provider"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
