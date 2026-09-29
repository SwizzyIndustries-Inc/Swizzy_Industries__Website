import { ArrowRight, Clock3, MapPin } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

import { Card, CardContent } from "@workspace/ui/components/card"

import { ContentSection } from "@/components/design-pages/shared"

export function NairobiLocationSection() {
  return (
    <ContentSection
      eyebrow="Nairobi location"
      title="Westlands innovation precinct"
    >
      <Card className="border-border bg-card text-card-foreground">
        <CardContent className="grid gap-5 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="font-heading font-semibold text-foreground">
                Riverside Green Suites
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Riverside Drive, Nairobi, Kenya
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 aria-hidden="true" className="size-4" /> Visits by
                appointment
              </p>
            </div>
          </div>
          <Button
            nativeButton={false}
            render={
              <a
                href="https://maps.google.com/?q=Riverside+Green+Suites+Nairobi"
                target="_blank"
                rel="noreferrer"
              />
            }
            variant="outline"
            className="h-10 gap-2"
          >
            Open map <ArrowRight aria-hidden="true" />
          </Button>
        </CardContent>
      </Card>
    </ContentSection>
  )
}
