"use client"

import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { useLanguage } from "@/components/language-provider"

const domains = [
  {
    icon: Stethoscope,
    title: "Clinical training",
    sw: "Mafunzo ya kitabibu",
    body: "Rehearse procedures and equipment workflows in simulation.",
    swBody: "Fanya mazoezi ya taratibu na matumizi ya vifaa katika uigaji.",
    href: "/solutions/clinical-training",
    color: "#0e9f8e",
  },
  {
    icon: Microscope,
    title: "Medical research",
    sw: "Utafiti wa afya",
    body: "Explore spatial models and research simulation tools.",
    swBody: "Chunguza mifano ya anga na zana za uigaji wa utafiti.",
    href: "/solutions/medical-research",
    color: "#3a5bd9",
  },
  {
    icon: HeartPulse,
    title: "Patient care & wellbeing",
    sw: "Utunzaji na ustawi wa wagonjwa",
    body: "Consider clinician-supervised care and rehabilitation contexts.",
    swBody:
      "Chunguza mazingira ya utunzaji na urekebishaji yanayosimamiwa kitabibu.",
    href: "/solutions/patient-care",
    color: "#6c4fd9",
  },
]

export function HomepageSections() {
  const { language } = useLanguage()
  const sw = language === "sw"
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto grid min-h-[570px] max-w-[1320px] items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16 lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
            >
              {sw
                ? "Teknolojia ya kitabibu ya ndani"
                : "Immersive clinical technology"}
            </Badge>
            <h1 className="max-w-[14ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[58px]">
              {sw
                ? "Fanya mazoezi kwa usahihi. Linda maisha."
                : "Practice precision. Protect life."}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {sw
                ? "Tibika hutengeneza zana za uigaji kwa mafunzo ya kitabibu na utafiti wa afya, kwa mapitio makini na matumizi katika mazingira yanayofaa ya taasisi."
                : "Tibika develops simulation tools for clinical training and medical research, designed for careful review and use in the right institutional context."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 rounded-xl px-5"
              >
                {sw ? "Omba ushauri" : "Request a consultation"}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href="/catalog" />}
                nativeButton={false}
                variant="outline"
                className="h-12 rounded-xl border-primary/25 bg-background px-5"
              >
                {sw ? "Tazama uigaji" : "View simulations"}
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              {sw
                ? "Ushahidi, usalama na idhini huzingatiwa"
                : "Evidence, safety, and consent stay in view"}
            </p>
          </div>
          <div
            role="img"
            aria-label={
              sw
                ? "Mafunzo ya kitabibu kwa kutumia teknolojia ya Tibika"
                : "Clinical training with Tibika immersive technology"
            }
            className="min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center shadow-xl sm:min-h-[380px] md:min-h-[430px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcJ-vF1smcfDyjWd8qzbJ3FgqsPggtm4iUU1KWYX05VkIXWvLC4NGikClH93PDB2Bfs6ZF4EugnoNccPLQMp8QagFbzDQjDvYYOwrY69KlAkvdsj0jfWH286BN48qps7NjfilGGhsOw_yeuPhsUfsZ_H2fqtuE9stpAirVk-xett_0UdEtVHsi3SNRlz2eit1add3vWUJWP4B_FrrZ2d7nTYazORU68icz0rtSuSAtUKqiqcbmnti3vg')",
            }}
          />
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Maeneo ya matumizi" : "Areas of practice"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Teknolojia ya kitabibu, kwa muktadha."
                : "Clinical technology, in context."}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Chunguza maeneo matatu yenye mahitaji tofauti ya mafunzo, utafiti na utunzaji."
                : "Explore three areas with distinct training, research, and care needs."}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {domains.map(
              ({
                icon: Icon,
                title,
                sw: titleSw,
                body,
                swBody,
                href,
                color,
              }) => (
                <Card
                  key={title}
                  className="group rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CardHeader>
                    <span
                      className="flex size-11 items-center justify-center rounded-lg"
                      style={{ color, backgroundColor: `${color}18` }}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <CardTitle className="pt-1 text-lg">
                      {sw ? titleSw : title}
                    </CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {sw ? swBody : body}
                    </p>
                    <Link
                      href={href}
                      className="inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary"
                    >
                      {sw ? "Chunguza" : "Explore"}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
      <section className="bg-muted/70 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Ushahidi na ulinzi" : "Evidence and safeguards"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw ? "Muktadha ni muhimu." : "Context matters."}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              {sw
                ? "Maudhui ya kitabibu yanahitaji mapitio yanayofaa, idhini na ulinzi wa data. Uigaji si mwongozo wa kitabibu."
                : "Clinical content requires appropriate review, consent, and data safeguards. Simulation is not clinical guidance."}
            </p>
            <Button
              render={<Link href="/compliance" />}
              nativeButton={false}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              {sw ? "Soma kuhusu uzingatiaji" : "Review compliance"}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <ClipboardCheck
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <CardTitle className="mt-2">
                  {sw ? "Mapitio ya ushahidi" : "Evidence review"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Soma ushahidi pamoja na mipaka na muktadha wake."
                    : "Review evidence with its context and limitations."}
                </p>
              </CardHeader>
            </Card>
            <Card className="rounded-xl sm:mt-10">
              <CardHeader>
                <ShieldCheck
                  aria-hidden="true"
                  className="text-instrument-navy size-6"
                />
                <CardTitle className="mt-2">
                  {sw ? "Idhini na data" : "Consent and data"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Ulinzi wa mgonjwa na data ni sehemu ya usanifu."
                    : "Patient and data safeguards inform design."}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-instrument-navy py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-teal-200 uppercase">
              {sw
                ? "Kwa hospitali na taasisi za elimu"
                : "For hospitals and academic institutions"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Jadili mazingira yako ya kitabibu."
                : "Discuss your clinical context."}
            </h2>
            <p className="mt-3 text-base leading-7 text-white/70">
              {sw
                ? "Tuambie timu yako inahitaji kufanyia mazoezi, kuunda mfano au kukagua nini."
                : "Tell us what your team needs to rehearse, model, or review."}
            </p>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Omba ushauri" : "Request a consultation"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
