"use client"

import Link from "next/link"

import { CheckCircle2, Home } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

export function ThankYouPage() {
  return (
    <main className="design-page bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
          <CheckCircle2 aria-hidden="true" className="size-8" />
        </span>
        <Badge variant="secondary" className="mt-6">
          Message prepared
        </Badge>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Thank you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          We appreciate your interest in Swizzy Industries. If you submitted a
          form that opened your email app, remember to send the prepared draft
          so our team can receive it.
        </p>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
          {[
            ["We receive your note", "Send the email draft to reach our team."],
            [
              "We review your needs",
              "We route your inquiry to the right people.",
            ],
            [
              "We follow up",
              "A team member will respond through your chosen channel.",
            ],
          ].map(([title, description], index) => (
            <Card
              key={title}
              className="border-border bg-card text-card-foreground"
            >
              <CardContent className="space-y-2 p-4">
                <Badge variant="outline">0{index + 1}</Badge>
                <h2 className="font-heading text-sm font-semibold text-foreground">
                  {title}
                </h2>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/" />}
            className="h-11 gap-2"
          >
            Back home <Home aria-hidden="true" />
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/blog" />}
            variant="outline"
            className="h-11"
          >
            Read the blog
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/products" />}
            variant="outline"
            className="h-11"
          >
            Explore products
          </Button>
        </div>
      </div>
    </main>
  )
}
