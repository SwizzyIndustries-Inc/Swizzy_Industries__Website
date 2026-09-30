"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Megaphone } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const stories = [
  {
    title: "A neighborhood documents a road access concern",
    description:
      "An illustrative example of residents collecting dates, locations, and public response notes.",
    alt: "A paved neighborhood road in Eldoret, Kenya",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6gWrdDVzNi5gkrnOimmw4KjlBSCzuT57l3tVvDRa5KTSnZDVjR9pyPtG1AZBptcnwzpBCvW_yVgLS4KjyF7vqfwyHo2ORkwjVR6OhgtqZ7eKvyIGE6yEXE6Qy9QmHAN8SGFjdYEqF9M_EGs7Viv_k1I-33qQ24jWqi1oCIDKWdzKGCEmhSklAeXy5W9df4pEW_j9YYGpsIRmGKoaWUvGsnNSOhDkNJeWzUNMg-jM5zSjiqH1ysGjWZQ",
  },
  {
    title: "Market vendors share local fee concerns",
    description:
      "An illustrative field dispatch showing how public concerns can be recorded with context.",
    alt: "Market vendors reviewing civic information at a Nairobi trading stall",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzu20tFjOWBZKxEJXMn0jHBHqzGav328qYq1Qj2nuQSz9By1lpLS_qYxgN4HFSRW95OIYrkhxCxfhwx4anKpnxoR6W16zpFovbnr7T1o0KbqcXhsoqNIFpnTcnY0Qw9ZumpyqSjlx96BlPYh6pextCRNqKZW7zzY-_zbb4sSG-Oh515GjC9uxbuQ3I_IkMWLnFeF6roRsBHHGDS84pX0TiU9YuO7FqZ4U9G9MU7wX0biTeIbvWjl77Gw",
  },
]

const partnerTypes = [
  "Community organizations",
  "Independent monitors",
  "Legal support groups",
  "Public-interest researchers",
  "Local associations",
]

export function VoicesStoriesSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Civic journalism", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Voices & stories spotlight", language)}
            </h2>
          </div>
          <Button
            render={<Link href="/voices" />}
            nativeButton={false}
            variant="ghost"
            className="w-fit px-0"
          >
            {translate("Read field dispatches", language)}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {stories.map((story) => (
            <Card
              key={story.title}
              className="overflow-hidden rounded-xl sm:grid sm:grid-cols-[0.8fr_1.2fr]"
            >
              <ImagePanel
                src={story.image}
                alt={translate(story.alt, language)}
                className="aspect-[1.4] w-full bg-muted sm:aspect-auto sm:min-h-full"
              />
              <div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit rounded-md">
                    <BookOpen aria-hidden="true" data-icon="inline-start" />
                    {translate("Illustrative story", language)}
                  </Badge>
                  <CardTitle className="pt-2 text-base">
                    {translate(story.title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(story.description, language)}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    render={<Link href="/voices/field-dispatches" />}
                    nativeButton={false}
                    variant="link"
                    className="h-9 px-0"
                  >
                    {translate("Read the dispatch", language)}
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PartnersSection() {
  const { language } = useLanguage()
  return (
    <section className="border-y border-border bg-muted/50 py-10 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">
              {translate("Independent coalition", language)}
            </p>
            <h2 className="mt-1 font-heading text-xl font-semibold">
              {translate(
                "Trusted by civic and legal oversight bodies",
                language
              )}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground">
            {translate(
              "Partner categories shown for illustration; participation is published only when confirmed.",
              language
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {partnerTypes.map((name) => (
            <div
              key={name}
              className="flex min-h-12 items-center justify-center rounded-lg border border-border bg-card px-3 text-center text-xs font-semibold"
            >
              {translate(name, language)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCtaSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Card className="grid gap-8 rounded-2xl p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <Badge variant="secondary" className="mb-4 rounded-full">
              <Megaphone aria-hidden="true" data-icon="inline-start" />
              {translate("Get involved", language)}
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate(
                "Ready to take accountability into your hands?",
                language
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {translate(
                "Whether raising a local concern or following a public response, add context and track what is documented.",
                language
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                render={<Link href="/raise-an-issue" />}
                nativeButton={false}
                size="lg"
              >
                {translate("Start a campaign in your area", language)}
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="/community-guidelines" />}
                nativeButton={false}
                variant="outline"
                size="lg"
              >
                {translate("Read community guidelines", language)}
              </Button>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              {translate(
                "Non-partisan participation · Source context · Privacy safeguards",
                language
              )}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="hidden size-44 place-items-center rounded-2xl bg-primary/10 text-primary lg:grid"
          >
            <Megaphone className="size-16" />
          </div>
        </Card>
      </div>
    </section>
  )
}
