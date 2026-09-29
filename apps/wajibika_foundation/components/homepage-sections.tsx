"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  FileCheck2,
  HandCoins,
  Megaphone,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useLanguage } from "@/components/language-provider"

const issueAreas = [
  {
    title: "Economy & livelihoods",
    sw: "Uchumi na maisha",
    body: "Work, trade, household costs, and local livelihoods.",
    swBody: "Kazi, biashara, gharama za kaya na maisha ya eneo.",
    href: "/issues/economy",
    icon: HandCoins,
    color: "#1e8f6b",
  },
  {
    title: "Politics & governance",
    sw: "Siasa na utawala",
    body: "Representation, public services, and accountability.",
    swBody: "Uwakilishi, huduma za umma na uwajibikaji.",
    href: "/issues",
    icon: BarChart3,
    color: "#3a5bd9",
  },
  {
    title: "Social norms",
    sw: "Mila na kanuni za jamii",
    body: "Inclusion, dignity, and community wellbeing.",
    swBody: "Ushirikishwaji, utu na ustawi wa jamii.",
    href: "/issues",
    icon: UsersRound,
    color: "#e8735a",
  },
  {
    title: "Community voice",
    sw: "Sauti ya jamii",
    body: "Local concerns tied to a place and community.",
    swBody: "Masuala ya eneo yanayohusu sehemu na jamii.",
    href: "/issues",
    icon: Megaphone,
    color: "#8c5fd9",
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
                ? "Sauti ya kiraia. Hatua zilizopangwa."
                : "Civic voice. Structured action."}
            </Badge>
            <h1 className="max-w-[14ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[58px]">
              {sw
                ? "Sauti yako isikike. Mabadiliko yafuatiliwe."
                : "Your voice, amplified. Structured change, delivered."}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {sw
                ? "Wajibika huwapa watu njia yenye heshima ya kuibua masuala ya umma, kushiriki muktadha na kufuatilia majibu ya taasisi."
                : "Wajibika gives people a dignified way to raise public issues, share context, and follow institutional responses."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/raise-an-issue" />}
                nativeButton={false}
                className="h-12 rounded-xl px-5"
              >
                {sw ? "Wasilisha suala" : "Raise an issue"}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href="/issues" />}
                nativeButton={false}
                variant="outline"
                className="h-12 rounded-xl border-primary/25 bg-background px-5"
              >
                {sw ? "Chunguza kampeni" : "Explore campaigns"}
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              {sw
                ? "Vyanzo na hali ya uthibitishaji huonyeshwa wazi"
                : "Sources and verification status stay visible"}
            </p>
          </div>
          <div
            role="img"
            aria-label={
              sw
                ? "Jumuiya ikishiriki katika majadiliano ya kiraia"
                : "Community members taking part in civic discussion"
            }
            className="min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center shadow-xl sm:min-h-[380px] md:min-h-[430px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfjjKEQas5_tNDJbQHeSnpaGBJtsCQ7tGO_nISB_Co9XN_fSOiqTt6NUJmm93LG4y5oV8S1CLadEspvgMyLKx-G8C-r43pSF_zJlg9Du0yQAjnTx7PQMED5GvC59RH0EQebq04FcJuyjU2mEv5V8Ce9WO4CDjfaz0cphKoqtjBNC3uJMyW6U3ETXS_cRXcDw_nqjLn3ZU08LyagRvihX-4nHR52cdhhqYFy77nCNfRdDMARWJOQpYfw')",
            }}
          />
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Masuala ya jamii" : "Issues that matter locally"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Sauti tofauti. Muktadha ulio wazi."
                : "Many voices. Clear context."}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Chunguza maeneo ya masuala na muktadha wake kabla ya kushiriki."
                : "Explore issue areas and their context before taking part."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {issueAreas.map(
              ({
                title,
                sw: titleSw,
                body,
                swBody,
                href,
                icon: Icon,
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
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
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
              {sw ? "Ufuatiliaji wa majibu" : "Response you can follow"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Kutoka kuibuliwa hadi kujibiwa."
                : "From raised to responded."}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              {sw
                ? "Kila suala hufuata hatua zilizo wazi. Tofautisha taarifa zenye chanzo, mawasilisho ya jamii na maoni."
                : "Issues move through clear stages. Distinguish sourced information, community submissions, and opinion."}
            </p>
            <Button
              render={<Link href="/accountability-tracker" />}
              nativeButton={false}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              {sw ? "Fungua kifuatiliaji" : "View the tracker"}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <FileCheck2
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <CardTitle className="mt-2">
                  {sw ? "Hali ya majibu" : "Response status"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Imeibuliwa · Inakaguliwa · Imejibiwa · Imetatuliwa"
                    : "Raised · Under review · Responded · Resolved"}
                </p>
              </CardHeader>
            </Card>
            <Card className="rounded-xl sm:mt-10">
              <CardHeader>
                <ShieldCheck
                  aria-hidden="true"
                  className="text-civic-ochre size-6"
                />
                <CardTitle className="mt-2">
                  {sw ? "Vyanzo vinaonekana" : "Sources stay visible"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Madai yaliyowasilishwa na jamii hutofautishwa na yaliyothibitishwa."
                    : "Community submissions are distinguished from verified information."}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-foreground py-14 text-background sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-civic-ochre mb-2 text-xs font-bold tracking-wide uppercase">
              {sw ? "Hatua inayofuata" : "A clear next step"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Wasilisha suala kwa muktadha."
                : "Raise an issue with context."}
            </h2>
            <p className="mt-3 text-base leading-7 text-background/70">
              {sw
                ? "Tumia fomu ya rasimu kuhifadhi maelezo kwenye kifaa chako."
                : "Use the draft form to organize information on your device."}
            </p>
          </div>
          <Button
            render={<Link href="/raise-an-issue" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Anza rasimu" : "Start a draft"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
