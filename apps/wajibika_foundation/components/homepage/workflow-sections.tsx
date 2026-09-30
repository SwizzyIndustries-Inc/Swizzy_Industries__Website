"use client"

import { ClipboardCheck, FileText, UsersRound } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const stages = [
  {
    number: "01",
    title: "Raise an issue",
    description:
      "Submit a structured concern with location, context, and supporting material where available.",
    note: "Sources and privacy choices",
    icon: FileText,
  },
  {
    number: "02",
    title: "Mobilize & verify",
    description:
      "Community members and independent partners can add context and review source information.",
    note: "Independent review where available",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Track response",
    description:
      "Follow recorded responses, public commitments, and documented next steps over time.",
    note: "Status history stays visible",
    icon: ClipboardCheck,
  },
]

export function ActionWorkflowSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="outline" className="mb-3 rounded-full">
            {translate("Framework of action", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("How Wajibika works", language)}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "A structured process can help move public concerns toward a documented response.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stages.map(({ number, title, description, note, icon: Icon }) => (
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
