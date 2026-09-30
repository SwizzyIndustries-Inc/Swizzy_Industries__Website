"use client"

import { BadgeCheck, BrainCircuit, Microscope, Target } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const processSteps = [
  {
    number: "01",
    title: "Select a curriculum module",
    description:
      "Educators choose mapped CBC, TVET, or university modules and assign them to their learners.",
    note: "Aligned to learning outcomes",
    icon: Target,
  },
  {
    number: "02",
    title: "Learn in 3D or VR",
    description:
      "Learners explore, test, and repeat practical lessons on classroom devices or standalone headsets.",
    note: "Designed for modest hardware",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "See progress clearly",
    description:
      "Educators follow participation, attempts, and demonstrated understanding across each module.",
    note: "Useful learner insight",
    icon: Microscope,
  },
]

export function LearningProcessSection() {
  const { language } = useLanguage()

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full px-3 py-1">
            {translate("Turnkey classroom implementation", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("From curriculum to learner insight", language)}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map(
            ({ number, title, description, note, icon: Icon }) => (
              <Card key={number} className="rounded-lg">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-lg bg-primary/10 font-heading text-lg font-bold text-primary">
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
                <CardFooter className="border-t border-border bg-transparent text-xs font-medium text-primary">
                  <BadgeCheck aria-hidden="true" className="mr-2 size-4" />
                  {translate(note, language)}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}
