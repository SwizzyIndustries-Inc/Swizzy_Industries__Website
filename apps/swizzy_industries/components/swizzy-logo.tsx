import { Layers3 } from "lucide-react"

type SwizzyLogoProps = {
  compact?: boolean
}

export function SwizzyLogo({ compact = false }: SwizzyLogoProps) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg">
        <Layers3 aria-hidden="true" className="size-6 text-primary" />
        <span className="font-heading text-base font-bold">
          Swizzy Industries
        </span>
      </span>
    )
  }

  return (
    <span className="group inline-flex min-w-0 items-center gap-2.5 rounded-lg">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-tint text-blue-primary transition-colors group-hover:bg-teal-tint group-hover:text-teal-accent dark:bg-blue-primary/15 dark:text-blue-300 dark:group-hover:bg-teal-accent/15 dark:group-hover:text-teal-300">
        <Layers3 aria-hidden="true" className="size-[22px]" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-heading text-base font-bold text-foreground sm:text-lg">
          Swizzy
        </span>
        <span className="block text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
          Industries
        </span>
      </span>
    </span>
  )
}
