"use client"
import { Globe2, HeartHandshake, Laptop, Radio } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const steps = [
  {
    number: "01",
    title: "Choose or create your space",
    description:
      "Pick a curated lounge or build a private room, then invite your circle with a link.",
    note: "Web browser · iOS · Android · VR",
    icon: Laptop,
  },
  {
    number: "02",
    title: "Show up together",
    description:
      "Step into spatial audio. Talk nearby, share a screen, or play music together.",
    note: "Natural proximity audio",
    icon: Radio,
  },
  {
    number: "03",
    title: "Stay connected across oceans",
    description:
      "Keep your room, family memories, and messages in a place your people can return to.",
    note: "Persistent shared memories",
    icon: Globe2,
  },
]

export function HowItWorksSection() {
  const { language } = useLanguage()
  return (
    <section id="how-it-works" className="bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full">
            {translate("Simplicity first", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("No headset required. Zero friction.", language)}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "Step in on your laptop, phone, or VR headset. Jumuika works wherever your people are.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, description, note, icon: Icon }) => (
            <Card key={number} className="rounded-xl">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 font-heading text-lg font-bold text-primary">
                    {number}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-muted-foreground"
                  />
                </div>
                <CardTitle className="text-lg">
                  {translate(title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
              </CardHeader>
              <CardFooter className="border-t border-border bg-transparent text-xs font-medium text-muted-foreground">
                <HeartHandshake
                  aria-hidden="true"
                  className="mr-2 size-4 text-primary"
                />
                {translate(note, language)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
