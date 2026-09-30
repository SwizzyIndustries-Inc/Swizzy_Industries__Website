"use client"

import {
  BadgeCheck,
  CircleDollarSign,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { translate, useLanguage } from "@/components/language-provider"

const safeguards = [
  {
    title: "Government ID & skill vetting",
    description:
      "Provider profiles can include verified identity and relevant credentials.",
    icon: BadgeCheck,
  },
  {
    title: "M-Pesa escrow safeguard",
    description:
      "Payment protection helps customers and providers agree on completion terms.",
    icon: CircleDollarSign,
  },
  {
    title: "Uncompromised reviews",
    description:
      "Customer feedback helps people make informed service choices.",
    icon: MessageSquareText,
  },
  {
    title: "Dispute support",
    description:
      "A support path is available when a service arrangement needs attention.",
    icon: ShieldCheck,
  },
]

export function TrustSection() {
  const { language } = useLanguage()
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] rounded-2xl bg-primary/5 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-4 rounded-full">
              <ShieldCheck aria-hidden="true" data-icon="inline-start" />
              {translate("Institutional safety guarantee", language)}
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate(
                "Trust is the currency that powers every transaction.",
                language
              )}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {translate(
                "Nufaika is designed to address uncertainty for customers and payment clarity for skilled providers.",
                language
              )}
            </p>
            <Button
              render={<Link href="/trust-safety" />}
              nativeButton={false}
              variant="link"
              className="mt-4 h-auto px-0"
            >
              {translate("Read our trust and escrow charter", language)}
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {safeguards.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="rounded-lg">
                <CardHeader>
                  <span className="mb-2 grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <CardTitle className="text-base">
                    {translate(title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(description, language)}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
