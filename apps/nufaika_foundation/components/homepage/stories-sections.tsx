"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const storyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9A3mfRMMlJJ06lCGWeS5UpSG-OvPjQDCK5uJlKUuhUE1hQZVAcqkpajp-zFR_zyX8DGxy-f-ZdPMUHDdTyOTX_ahTckEk8WjVXALjfSQ7Vv0Q98ToQgl4plhpAnQQuN2grq1O3toAsVwjeIM1gEwE20kqKnFbQaTKoTSK_eve3sRhiH4SIT47am-3OZkfMWbQG2iYdARVyA_mXq0fixzcAD-wdUGWIcaHNk-WEU4Yz1ATSywwlCiu"

export function ProviderStorySection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Card className="grid overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel
            src={storyImage}
            alt={translate(
              "Peter Kamau, a Kenyan plumbing professional, standing beside his service van.",
              language
            )}
            className="h-full min-h-72 bg-muted sm:min-h-96"
          />
          <div className="flex flex-col justify-between gap-7 p-6 sm:p-9 lg:p-12">
            <div>
              <Badge variant="secondary" className="mb-4 rounded-full">
                {translate("Provider spotlight", language)}
              </Badge>
              <p className="mb-4 flex items-center gap-1 text-secondary">
                <Star aria-hidden="true" className="size-4 fill-secondary" />
                <Star aria-hidden="true" className="size-4 fill-secondary" />
                <Star aria-hidden="true" className="size-4 fill-secondary" />
                <Star aria-hidden="true" className="size-4 fill-secondary" />
                <Star aria-hidden="true" className="size-4 fill-secondary" />
                <span className="ml-2 text-xs text-muted-foreground">
                  {translate("180+ completed jobs", language)}
                </span>
              </p>
              <blockquote className="font-heading text-xl leading-relaxed font-semibold sm:text-2xl">
                “
                {translate(
                  "From irregular gigs to steady monthly work. My verified profile helped customers feel confident hiring me.",
                  language
                )}
                ”
              </blockquote>
              <div className="mt-5">
                <p className="text-sm font-semibold">
                  {translate("Peter Kamau", language)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {translate(
                    "Master plumbing contractor · Eastlands & Nairobi CBD",
                    language
                  )}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
              {[
                ["14 days", "To first enterprise contract"],
                ["100%", "On-time escrow payouts"],
                ["5.0 ★", "Customer satisfaction"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block font-heading text-lg text-primary">
                    {translate(value, language)}
                  </strong>
                  <span className="text-[10px] leading-4 text-muted-foreground sm:text-xs">
                    {translate(label, language)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Badge variant="outline" className="mb-4 rounded-full">
            {translate("Join Kenya's growing services marketplace", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("Empowering local expertise, guaranteed.", language)}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {translate(
              "Find reliable help for your next project or grow your service business with clear profiles, rates, and customer feedback.",
              language
            )}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              render={<Link href="/search" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Find a verified service", language)}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/for-providers" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              {translate("Register as a provider", language)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
