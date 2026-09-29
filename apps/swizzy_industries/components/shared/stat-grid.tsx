import { Card, CardContent } from "@workspace/ui/components/card"

export function StatGrid({
  items,
}: {
  items: { value: string; label: string; detail?: string }[]
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card
          key={item.label}
          className="border-border bg-card text-card-foreground"
        >
          <CardContent className="space-y-2 p-5">
            <p className="font-heading text-3xl font-bold text-primary">
              {item.value}
            </p>
            <p className="text-sm font-semibold text-foreground">
              {item.label}
            </p>
            {item.detail ? (
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
