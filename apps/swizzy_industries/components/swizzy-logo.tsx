import { Layers3 } from "lucide-react"
import Image from "next/image"

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
    <span className="group inline-flex min-w-0 items-center gap-1.5 rounded-lg">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-teal-tint dark:bg-blue-primary/15 dark:text-blue-300 dark:group-hover:bg-teal-accent/15 dark:group-hover:text-teal-300">
        <Image
          alt="Swizzy Industries Logo"
          className="size-full"
          src="/logo/logo.png"
          width={30}
          height={30}
          priority
        />
      </span>
      <span className="hidden size-15 shrink-0 items-center justify-center sm:flex dark:bg-blue-primary/15">
        <Image
          alt="Swizzy Industries Text Logo"
          src="/logo/logo-text.png"
          width={120}
          height={30}
          priority
        />
      </span>
    </span>
  )
}
