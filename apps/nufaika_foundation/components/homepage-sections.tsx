"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Brush,
  HeartPulse,
  Home,
  Search,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { useLanguage } from "@/components/language-provider"

const categories = [
  {
    title: "Home & trade",
    sw: "Nyumbani na ufundi",
    body: "Plumbing, electrical, building, cleaning, and repairs.",
    swBody: "Mabomba, umeme, ujenzi, usafi na ukarabati.",
    href: "/categories/home-trade",
    icon: Wrench,
    color: "#3a5bd9",
  },
  {
    title: "Skills & tutoring",
    sw: "Stadi na mafunzo",
    body: "Tutors, coaches, and vocational specialists.",
    swBody: "Walimu, wakufunzi na wataalamu wa ufundi.",
    href: "/categories",
    icon: BriefcaseBusiness,
    color: "#6c4fd9",
  },
  {
    title: "Professional & business",
    sw: "Huduma za kitaalamu na biashara",
    body: "Business, design, and professional support.",
    swBody: "Biashara, usanifu na usaidizi wa kitaalamu.",
    href: "/categories",
    icon: BadgeCheck,
    color: "#0e9f8e",
  },
  {
    title: "Creative & care",
    sw: "Ubunifu na utunzaji",
    body: "Creative services, events, care, and wellness.",
    swBody: "Huduma za ubunifu, matukio, utunzaji na ustawi.",
    href: "/categories",
    icon: Brush,
    color: "#e8735a",
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
                ? "Soko la huduma la Kenya"
                : "Kenya’s skills and services marketplace"}
            </Badge>
            <h1 className="max-w-[14ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[58px]">
              {sw ? "Stadi zinakutana na fursa." : "Skills meet opportunity."}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {sw
                ? "Pata watoa huduma wenye stadi, linganisha huduma na ukubaliane kuhusu kazi kwa taarifa zilizo wazi tangu mwanzo."
                : "Find skilled local providers, compare services, and agree on the work with clear information from the start."}
            </p>
            <form
              action="/search"
              className="mt-7 flex max-w-xl flex-col gap-2 rounded-xl border border-border bg-background p-2 shadow-sm sm:flex-row"
            >
              <label htmlFor="service-search" className="sr-only">
                {sw ? "Tafuta huduma" : "Search services"}
              </label>
              <div className="relative min-w-0 flex-1">
                <Search
                  aria-hidden="true"
                  className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="service-search"
                  name="q"
                  placeholder={
                    sw ? "Unahitaji huduma gani?" : "What service do you need?"
                  }
                  className="h-11 border-0 pl-10 shadow-none focus-visible:ring-0"
                />
              </div>
              <Button type="submit" className="h-11 shrink-0 rounded-lg px-5">
                {sw ? "Tafuta" : "Search"}
              </Button>
            </form>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              {sw
                ? "Watoa huduma waliothibitishwa · Bei wazi · Maoni ya wateja"
                : "Verified providers · Upfront prices · Customer reviews"}
            </p>
          </div>
          <div
            role="img"
            aria-label={
              sw
                ? "Mtaalamu akifanya kazi kwa mteja"
                : "A skilled professional working for a customer"
            }
            className="min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center shadow-xl sm:min-h-[380px] md:min-h-[430px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjbhHF5rw-CistPU87IPk_W31WpwRXw3TcFBaf3YUFZxGE0nnMRS51XHRiOcTq7VxSVLI8PZhGxxcgLcB8oq_6aERo2tMTkQjBijYk9-NaWOjjWq663Tf8uq1S_1YhTNqHBfMNDAjaEQFYWZFkJr8G_ZaFQ_gfePpvoQWabRQ-Ticw0GB6UbX32WfmxlOAuUYbKFGVawuKSsGg5suli66XjbH5zZGruA5CxlxmTsLYiohT0NS3jmlg')",
            }}
          />
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Tafuta stadi unazohitaji" : "Find the skills you need"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw ? "Huduma kwa kila siku" : "Services for everyday life"}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Kutoka ukarabati wa nyumba hadi mafunzo na huduma za kitaalamu."
                : "From home repairs to tutoring and professional services."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(
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
                      {sw ? "Vinjari" : "Browse"}
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
              {sw ? "Chagua kwa ujasiri" : "Choose with confidence"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw ? "Uaminifu unaonekana." : "Trust should be easy to see."}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              {sw
                ? "Uthibitishaji, maoni na bei zinazoonekana hukusaidia kufanya uamuzi wenye taarifa."
                : "Provider verification, customer reviews, and upfront prices help you make an informed choice."}
            </p>
            <Button
              render={<Link href="/trust-safety" />}
              nativeButton={false}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              {sw ? "Jifunze kuhusu usalama" : "Explore trust & safety"}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <BadgeCheck
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <CardTitle className="mt-2">
                  {sw ? "Watoa huduma waliothibitishwa" : "Verified providers"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Kagua maelezo na tathmini kabla ya kuweka nafasi."
                    : "Review provider details and feedback before booking."}
                </p>
              </CardHeader>
            </Card>
            <Card className="rounded-xl sm:mt-10">
              <CardHeader>
                <Star
                  aria-hidden="true"
                  className="text-opportunity-amber size-6"
                />
                <CardTitle className="mt-2">
                  {sw ? "Bei wazi tangu mwanzo" : "Upfront service prices"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Elewa bei ya kuanzia kabla ya kufanya uamuzi."
                    : "See a starting price before you decide."}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-foreground py-14 text-background sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 md:grid-cols-3">
          <div>
            <Home
              aria-hidden="true"
              className="text-opportunity-amber size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {sw ? "Tafuta huduma" : "Find a service"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-background/70">
              {sw
                ? "Eleza unachohitaji na chunguza chaguo za karibu."
                : "Describe what you need and explore local options."}
            </p>
          </div>
          <div>
            <BadgeCheck
              aria-hidden="true"
              className="text-opportunity-amber size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {sw ? "Linganisha kwa uwazi" : "Compare clearly"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-background/70">
              {sw
                ? "Kagua huduma, maoni na bei kabla ya kuwasiliana."
                : "Review services, feedback, and prices before reaching out."}
            </p>
          </div>
          <div>
            <HeartPulse
              aria-hidden="true"
              className="text-opportunity-amber size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {sw ? "Kubalianeni kuhusu kazi" : "Agree the work"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-background/70">
              {sw
                ? "Fafanua kazi na hatua zinazofuata na mtoa huduma."
                : "Set a clear scope and next step with your provider."}
            </p>
          </div>
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Kwa wenye stadi" : "For skilled providers"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Ufundi wako ni biashara."
                : "Turn your craft into a business."}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Jenga wasifu unaoeleza huduma yako kwa uwazi na uwafikie wateja."
                : "Build a clear service profile and connect with customers looking for your skills."}
            </p>
          </div>
          <Button
            render={<Link href="/for-providers" />}
            nativeButton={false}
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Jiunge kama mtoa huduma" : "Become a provider"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
