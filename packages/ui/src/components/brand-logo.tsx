type BrandLogoProps = {
  src: string
  viewBox: string
  width?: number
  height?: number
  className?: string
  label?: string
}

export function BrandLogo({
  src,
  viewBox,
  width,
  height,
  className,
  label,
}: BrandLogoProps) {
  return (
    <svg
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      focusable="false"
      height={height}
      role={label ? "img" : undefined}
      viewBox={viewBox}
      width={width}
    >
      <use href={`${src}#Layer_1`} />
    </svg>
  )
}
