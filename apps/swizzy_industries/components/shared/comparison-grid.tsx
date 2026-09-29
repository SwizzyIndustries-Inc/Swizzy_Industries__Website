import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function ComparisonGrid({
  items,
}: {
  items: { title: string; points: string[]; tone?: "good" | "muted" }[]
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <Card
          key={item.title}
          className="border-border bg-card text-card-foreground"
        >
          <CardHeader>
            <CardTitle className="text-foreground">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    className={
                      item.tone === "good"
                        ? "mt-2 size-1.5 rounded-full bg-teal-accent"
                        : "mt-2 size-1.5 rounded-full bg-muted-foreground/60"
                    }
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
