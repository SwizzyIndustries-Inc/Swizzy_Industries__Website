"use client"
import { ClipboardCheck, FileSearch, Stethoscope } from "lucide-react"

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
    title: "Select or review a learning case",
    description:
      "Choose an approved module or institutional case with the appropriate learning objectives and safeguards.",
    note: "Content and context reviewed",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Rehearse in simulation",
    description:
      "Use a guided virtual environment to practice workflows in a controlled training setting.",
    note: "Instructor-led where appropriate",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Evaluate and reflect",
    description:
      "Review session activity with educators and agree on suitable next steps for the learning context.",
    note: "Human review stays central",
    icon: ClipboardCheck,
  },
]

export function LearningWorkflowSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full">
            {translate("Methodology", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("A structured simulation workflow", language)}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "From learning need to review, keep clinical context, consent, and oversight visible at every stage.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, description, note, icon: Icon }) => (
            <Card key={number} className="rounded-xl">
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
                <CardTitle className="text-base">
                  {translate(title, language)}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {translate(description, language)}
                </p>
              </CardHeader>
              <CardFooter className="border-t border-border bg-transparent text-xs font-medium text-primary">
                <ClipboardCheck aria-hidden="true" className="mr-2 size-4" />
                {translate(note, language)}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
