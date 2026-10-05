import { BrandLogo } from "@workspace/ui/components/brand-logo"

type SwizzyLogoProps = {
  compact?: boolean
}

export function SwizzyLogo({ compact = false }: SwizzyLogoProps) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg">
        <BrandLogo
          src="/logos/swizzy_logo_icon.svg"
          viewBox="0 0 236 405.56"
          className="size-6 object-contain"
        />
        <BrandLogo
          src="/logos/swizzy_logo_text.svg"
          viewBox="0 0 268.79 92.68"
          width={90}
          height={31}
          label="Swizzy Industries"
          className="block"
        />
      </span>
    )
  }

  return (
    <span className="group inline-flex min-w-0 items-center gap-2.5 rounded-lg">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-teal-tint dark:group-hover:bg-teal-accent/15">
        <BrandLogo
          src="/logos/swizzy_logo_icon.svg"
          viewBox="0 0 236 405.56"
          className="size-8 object-contain"
        />
      </span>
      <span className="hidden shrink-0 items-center justify-center sm:flex">
        <BrandLogo
          src="/logos/swizzy_logo_text.svg"
          viewBox="0 0 268.79 92.68"
          width={70}
          height={24}
          className="block"
        />
      </span>
    </span>
  )
}
