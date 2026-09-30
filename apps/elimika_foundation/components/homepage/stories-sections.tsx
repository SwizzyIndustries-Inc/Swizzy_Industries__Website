"use client"

import Link from "next/link"
import { ArrowRight, Lightbulb } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

export function CaseStudySection() {
  const { language } = useLanguage()

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-lg border border-border bg-card shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <ImagePanel
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASWHhXkUwBIcNjZjVNBCPpzmnn7SJO-gJbmbsCWMtI0KF7DFW80bXh7kkXNmtlIosWkQkZBfzkXH7Ra81DB0mBKif2o3G00AiOVjX7m2di1m1tdR8tVUFJbGPsXpNLwbBahUpQZhF5Vwgnb-Pr7cPzskryucPGYVpF46uiGuQqgcQSNO5IKfl9lu-pnKpHqIaLclv0QmlVJATcdtn7uzfk_w2P46Br3d0T7wAWXjeZe0Y0EQ5kdfwEcww"
          alt={translate(
            "Learners and educators exploring a virtual science experiment",
            language
          )}
          className="min-h-64 bg-muted sm:min-h-80 lg:min-h-full"
        />
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-9 lg:p-12">
          <div>
            <Badge variant="secondary" className="mb-4 rounded-full">
              <Lightbulb aria-hidden="true" data-icon="inline-start" />
              {translate("Institutional pilot", language)}
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-balance sm:text-3xl">
              {translate(
                "Practical learning, built around the classroom",
                language
              )}
            </h2>
            <blockquote className="mt-5 border-l-2 border-primary pl-4 text-base leading-7 text-muted-foreground">
              “
              {translate(
                "Elimika allowed our chemistry classes to run experiments safely and repeatedly. Student engagement increased noticeably within two weeks.",
                language
              )}
              ”
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                JM
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {translate("Dr. Jane Mwangi", language)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {translate("Head of Science & Practical Pedagogy", language)}
                </p>
              </div>
            </div>
          </div>
          <Button
            render={<Link href="/research/spatial-learning" />}
            nativeButton={false}
            variant="link"
            className="h-auto w-fit px-0"
          >
            {translate("Read the pilot outcome study", language)}{" "}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  const { language } = useLanguage()

  return (
    <section className="border-t border-border bg-muted/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1">
            {translate("Next-term rollout available", language)}
          </Badge>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Equip your institution for the future of learning",
              language
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {translate(
              "Bring immersive, curriculum-aligned learning to your school, technical institute, or university.",
              language
            )}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button
              render={<Link href="/contact/request-a-demo" />}
              nativeButton={false}
              size="lg"
            >
              {translate("Schedule a consultation", language)}{" "}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/solutions" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              <Lightbulb aria-hidden="true" data-icon="inline-start" />
              {translate("Explore learning solutions", language)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
