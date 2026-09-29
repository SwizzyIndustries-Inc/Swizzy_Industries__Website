export function ContentSection({
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  id,
}: {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  tone?: "default" | "muted"
  id?: string
}) {
  return (
    <section
      id={id}
      className={
        tone === "muted"
          ? "border-y border-border bg-muted/40 py-14 sm:py-18 lg:py-20"
          : "py-14 sm:py-18 lg:py-20"
      }
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {eyebrow || title || description ? (
          <div className="mb-9 max-w-3xl space-y-3 sm:mb-12">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-heading text-2xl leading-tight font-bold text-foreground sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
