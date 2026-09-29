import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const departments = [
  {
    title: "Sales and county pilots",
    email: "sales@swizzyindustries.co.ke",
    tag: "Institutional",
  },
  {
    title: "Academic partnerships",
    email: "academics@swizzyindustries.co.ke",
    tag: "Education",
  },
  {
    title: "Biomedical AR support",
    email: "health@swizzyindustries.co.ke",
    tag: "Health",
  },
  {
    title: "Media and press bureau",
    email: "media@swizzyindustries.co.ke",
    tag: "Media",
  },
  {
    title: "Careers and fellowships",
    email: "careers@swizzyindustries.co.ke",
    tag: "People",
  },
  {
    title: "Data protection inquiries",
    email: "privacy@swizzyindustries.co.ke",
    tag: "Privacy",
  },
]

export function DirectContactChannels() {
  return (
    <div className="space-y-4" id="direct-channels">
      <Card className="border-border bg-card text-card-foreground">
        <CardHeader>
          <span className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200">
            <MapPin aria-hidden="true" className="size-5" />
          </span>
          <CardTitle className="text-foreground">Institutional HQ</CardTitle>
          <p className="text-sm text-muted-foreground">
            Nairobi general secretariat
          </p>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <a
            href="mailto:info@swizzyindustries.co.ke"
            className="flex min-h-10 items-center gap-2 text-primary hover:underline"
          >
            <Mail aria-hidden="true" className="size-4" />{" "}
            info@swizzyindustries.co.ke
          </a>
          <a
            href="tel:+254207943000"
            className="flex min-h-10 items-center gap-2 text-primary hover:underline"
          >
            <Phone aria-hidden="true" className="size-4" /> +254 (0) 20 794 3000
          </a>
          <a
            href="https://wa.me/254207943000"
            className="flex min-h-10 items-center gap-2 text-primary hover:underline"
          >
            <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
            desk
          </a>
        </CardContent>
      </Card>
      <Card className="border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-foreground">
            Dedicated department inboxes
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Choose the closest match; our team will route your inquiry.
          </p>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {departments.map((department) => (
            <a
              key={department.title}
              href={`mailto:${department.email}?subject=${encodeURIComponent(department.title)}`}
              className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 hover:bg-muted"
            >
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {department.title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {department.email}
                </span>
              </span>
              <Badge variant="outline">{department.tag}</Badge>
            </a>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
