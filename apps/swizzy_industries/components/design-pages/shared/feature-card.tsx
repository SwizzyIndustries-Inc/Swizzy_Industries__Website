import Link from "next/link"

import { ArrowRight, type LucideIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  action = "Learn more",
  accent = "blue",
}: {
  icon?: LucideIcon
  eyebrow?: string
  title: string
  description: string
  href?: string
  action?: string
  accent?: "blue" | "teal" | "coral" | "amber"
}) {
  const accents = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200",
    teal: "bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200",
    coral:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-200",
    amber:
      "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200",
  }

  return (
    <Card className="h-full border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="gap-4">
        {Icon ? (
          <span
            className={`flex size-11 items-center justify-center rounded-xl ${accents[accent]}`}
          >
            <Icon aria-hidden="true" className="size-5" />
          </span>
        ) : null}
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href ? (
          <Button
            variant="link"
            nativeButton={false}
            render={<Link href={href} />}
            className="h-9 w-fit justify-start px-0 text-primary"
          >
            {action} <ArrowRight aria-hidden="true" />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
}
