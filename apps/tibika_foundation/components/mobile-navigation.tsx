"use client"

import { useState } from "react"
import Link from "next/link"
import { HeartPulse, Menu, X } from "lucide-react"

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
import { translate, useLanguage } from "@/components/language-provider"
import { megaMenus, primaryNavigation } from "@/lib/site-navigation"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
        className="w-full max-w-none gap-0 overflow-hidden border-0 p-0 sm:max-w-[440px]"
      >
        <SheetHeader className="relative border-b px-5 py-4 pr-16">
          <SheetTitle className="flex items-center gap-2">
            <HeartPulse aria-hidden="true" className="size-5 text-primary" />
            Tibika
          </SheetTitle>
          <SheetDescription>
            {translate("Practice precision. Protect life.", language)}
          </SheetDescription>
          <SheetClose
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label={translate("Close menu", language)}
                className="absolute top-2 right-3"
              />
            }
          >
            <X aria-hidden="true" />
          </SheetClose>
        </SheetHeader>
        <div
          role="group"
          aria-label={translate("Language", language)}
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
          aria-label={translate("Mobile navigation", language)}
          className="min-h-0 flex-1 overflow-y-auto px-4 py-2"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-border px-2 font-semibold hover:text-primary"
            >
              {translate(item.title, language)}
            </Link>
          ))}
          {Object.values(megaMenus).map((menu) => (
            <section
              key={menu.sectionLink.href}
              className="border-b border-border py-4"
            >
              <h2 className="px-2 pb-2 text-xs font-semibold text-muted-foreground uppercase">
                {translate(menu.sectionLink.title, language)}
              </h2>
              {menu.groups
                .flatMap((group) => group.links)
                .map((entry) => {
                  const Icon = entry.icon
                  return (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center gap-3 rounded-lg px-2 hover:bg-muted"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary"
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">
                          {translate(entry.title, language)}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {translate(entry.description, language)}
                        </span>
                      </span>
                    </Link>
                  )
                })}
            </section>
          ))}
        </nav>
        <div className="border-t p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-12 w-full rounded-xl"
            onClick={() => setOpen(false)}
          >
            {translate("Request a consultation", language)}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
