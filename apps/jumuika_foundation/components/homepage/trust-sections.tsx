"use client"

import { LockKeyhole, Shield, Scale, UserRoundCheck } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"

const principles = [
  {
    title: "Private by default",
    description:
      "Personal rooms are invite-only, with clear controls over who can enter.",
    icon: LockKeyhole,
  },
  {
    title: "One-tap safety controls",
    description:
      "Set personal boundaries, leave a room, mute, or report when needed.",
    icon: Shield,
  },
  {
    title: "Respect for personal data",
    description:
      "We limit data collection and do not sell behavioral data for advertising.",
    icon: Scale,
  },
  {
    title: "Age safeguards",
    description:
      "Age-appropriate settings and moderation help protect younger members.",
    icon: UserRoundCheck,
  },
]

export function TrustSafetySection() {
  const { language } = useLanguage()
  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 rounded-full">
            {translate("Built with radical trust", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate("Safe to show up as yourself", language)}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "Social spaces should nurture psychological safety. Jumuika puts personal boundaries and respect at the centre.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="rounded-xl">
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
    </section>
  )
}
