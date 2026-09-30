"use client"

import { BadgeCheck, Check, CircleDollarSign, Search } from "lucide-react"
import { useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { translate, useLanguage } from "@/components/language-provider"

const customerSteps = [
  {
    title: "Search & compare ratings",
    description:
      "Explore verified professionals with authentic reviews, clear portfolios, and upfront standard rates.",
    note: "No hidden call-out charges",
  },
  {
    title: "Pay through protected escrow",
    description:
      "Commit funds securely. Payment is held until you confirm the agreed work is complete.",
    note: "Kenya DPA compliant",
  },
  {
    title: "Inspect, approve & review",
    description:
      "Confirm the work and release payment, then share an honest review of your experience.",
    note: "Build community accountability",
  },
]

const providerSteps = [
  {
    title: "Complete vetting & build credibility",
    description:
      "Submit identity and skill credentials to build a profile customers can trust.",
    note: "Free onboarding and verification",
  },
  {
    title: "Receive direct inquiries",
    description:
      "Connect with customers looking for your services, with clear expectations and rates.",
    note: "You set your service rates",
  },
  {
    title: "Get paid when work is approved",
    description:
      "After the agreed work is confirmed, receive your payment through the selected method.",
    note: "Clear milestone payments",
  },
]

export function HowItWorksSection() {
  const [track, setTrack] = useState("customer")
  const { language } = useLanguage()
  const steps = track === "customer" ? customerSteps : providerSteps
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] space-y-8 px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full">
            {translate("Frictionless & secure", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "How Nufaika connects and protects both sides",
              language
            )}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "Clear expectations from the first search to the final payment.",
              language
            )}
          </p>
        </div>
        <div className="flex justify-center">
          <Tabs value={track} onValueChange={setTrack}>
            <TabsList className="h-auto flex-wrap">
              <TabsTrigger value="customer" className="min-h-10 px-4">
                {translate("For customers & businesses", language)}
              </TabsTrigger>
              <TabsTrigger value="provider" className="min-h-10 px-4">
                {translate("For service providers & artisans", language)}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ title, description, note }, index) => (
            <Card key={title} className="rounded-xl">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 font-heading text-lg font-bold text-primary">
                    0{index + 1}
                  </span>
                  {index === 0 ? (
                    <Search
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                  ) : index === 1 ? (
                    <BadgeCheck
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                  ) : (
                    <CircleDollarSign
                      aria-hidden="true"
                      className="size-5 text-primary"
                    />
                  )}
                </div>
                <CardTitle className="text-base">
                  {translate(title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
                <p className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-xs font-medium text-primary">
                  <Check aria-hidden="true" className="size-4" />
                  {translate(note, language)}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
