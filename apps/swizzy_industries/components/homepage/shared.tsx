import { Check } from "lucide-react"

export const homepageImages = {
  hero: "/images/homepage/hero.jpeg",
  technology:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjC_-tapFO_NZI1WoOP9nJC4M5VoVLC-bFgm97pIoNWCuNUUumqBhXhc3f5YmswewDVweyddogPcwoeOMxPhBL4f9Ug4dFvsXlFeFd-hpfxM6CNjYFr8_1Bf7bXWoW4MQxlycRO9qLwqBO3wuwJkQqwldSgA62q_NaRBUKd4jUjf_TJ8-CdyZ_xGqR_3MVpJkCQqDDXPoveI650u7kcBejuYtF_vE_OKwC9HBo9O_hnu8rMQt7fc4u",
  caseStudy:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDydFnqEBFyTagO5gGZhLWvR2AKEbQpCdPdqz6wnh8yn49stgupHNaXhJ2VgE9i3y8lRLcZ38zpkknIu3Ck_XvEWkEyKm-MMo_0xbOUOMrb3w53l8f-BMnjPaIWVsWTALUSVGLe7At3ftD15J-ccDkh9O2BNMA_YzDwEXgfGzjqxP0Y24NIexLvWorJhFgbRAOtkLtmeP9sMUchMJv6PPXNSom6aWBLWwI5hQPfAmRWX0Pgl_QHKZvy",
  insightHardware:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmoppmnwHSCnRCjsnI5jrGYROQhXDgAnlIjpSztsa3A3L62QTzVpi7kJARq55zZeCbtyRksSC9zuNhg3foz7brb-hGjLU_sc95EjWQJ3jbM2l63oZBhBpwtswO3_mC7QHZGhK4QYiAWTNqyjGC6_4QTv9RQYc1BDLAMOOTWr7PHykm9nmvm5wKnFMFuRmXSNkmpGllVxFBIEyloE3J7ZcjNw0n3_DBdQ5QiwslyYJOqsKPG8OQwoaz",
  insightEducation:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6tlUrsmF8kY6xH2CiaQXzWX1Rj0YRO2pfeupOk_7m4zqxxJxf7d95IoqUzZIHwy5JEKJRDc9RxWNSr7Ch0H1k1uzK16V2pDlGqYxVhCzpCP1Z968DIFcd_sgNYyPp9w_UO5YjYa6KJxlEVtjxnaWiu5k0gSgTEGwuyuEigwpRRGw0jkaqAdvhOf0w4lgNAu9wpUAL4CrFCh75ZRGGorznZ4rY0inwDs9p4VymJ7Rb1_h6azWMT9C",
  insightCommunity:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_7TXNJZww2Xf7sn4dciwpNvE3nSz5GvHOY9FyoRGEvZdPQmlwVBvznSy3CbYSqyxinHAGF7eENnSCoRTcg094awOezZLlZI6BnHQyV16bWzqpsxYsD12-O-FHbwCKtt1oN1h4IMQ4C1MTOv-QTlqTseackhP4mwlZa1rko4_wdeo_fnJig46gKc8dhtcVJf5DJaimbnvGs7zFJi4wWyglMjsk-y3DH9Zl5uvDFIHGaapsf9iQdNFe",
}

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto mb-12 max-w-2xl space-y-3 text-center lg:mb-16"
          : "max-w-2xl space-y-3"
      }
    >
      <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl leading-tight font-bold text-navy-deep sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-muted">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function CheckList({
  items,
  color = "text-product-health",
}: {
  items: string[]
  color?: string
}) {
  return (
    <ul className="space-y-2.5 border-t border-border pt-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm text-slate-body"
        >
          <Check
            aria-hidden="true"
            className={`mt-0.5 size-4 shrink-0 ${color}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
