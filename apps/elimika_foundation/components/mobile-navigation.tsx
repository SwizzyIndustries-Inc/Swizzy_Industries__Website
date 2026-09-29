"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, School, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
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
import {
  pageLinks,
  primaryNavigation,
  productLinks,
} from "@/lib/site-navigation"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const siblings = productLinks.filter((product) => !product.parent)
  const parent = productLinks.find((product) => product.parent)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="xl:hidden"
            aria-label={
              language === "sw" ? "Fungua menyu" : "Open navigation menu"
            }
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
            {language === "sw"
              ? "Kujifunza katika vipimo vitatu."
              : "Learning in three dimensions."}
          </SheetDescription>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label={
                  language === "sw" ? "Funga menyu" : "Close navigation menu"
                }
                className="absolute top-2 right-3"
              />
            }
          >
            <X aria-hidden="true" />
          </SheetClose>
        </SheetHeader>
        <div
          role="group"
          aria-label={language === "sw" ? "Lugha" : "Language"}
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
          aria-label={language === "sw" ? "Urambazaji" : "Mobile navigation"}
          className="min-h-0 flex-1 overflow-y-auto px-4 py-2"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border px-2 text-base font-semibold hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
          <section className="py-4">
            <h2 className="px-2 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {language === "sw"
                ? "Bidhaa na suluhisho"
                : "Products & Solutions"}
            </h2>
            {parent && (
              <a
                href={parent.href}
                className="flex min-h-12 items-center gap-3 rounded-lg px-2 font-semibold hover:bg-muted"
              >
                <School aria-hidden="true" className="size-5 text-primary" />
                Swizzy Industries{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  ({language === "sw" ? "Kampuni mama" : "Parent company"})
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
                  <span className="font-semibold">{product.title}</span>
                </a>
              )
            })}
          </section>
          <section className="border-t border-border py-4">
            <h2 className="px-2 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {language === "sw" ? "Suluhisho za elimu" : "Learning solutions"}
            </h2>
            {pageLinks.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-2 text-sm hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}
          </section>
        </nav>
        <div className="border-t border-border bg-background p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            className="h-12 w-full rounded-xl"
            onClick={() => setOpen(false)}
          >
            {language === "sw" ? "Omba onyesho" : "Request a Demo"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
