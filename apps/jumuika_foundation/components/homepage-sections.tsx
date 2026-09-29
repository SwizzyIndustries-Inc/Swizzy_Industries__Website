"use client"

import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Heart,
  LockKeyhole,
  Music2,
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

const gatheringTypes = [
  {
    icon: Heart,
    title: "Family & friends",
    sw: "Familia na marafiki",
    body: "A private place for the people you know best.",
    swBody: "Nafasi ya faragha kwa watu unaowafahamu zaidi.",
    href: "/spaces/family-friends",
    color: "#3a5bd9",
    tag: "Private",
    swTag: "Faragha",
  },
  {
    icon: Music2,
    title: "Diaspora & heritage",
    sw: "Diaspora na urithi",
    body: "Keep culture, language, and home within reach.",
    swBody: "Weka utamaduni, lugha na nyumbani karibu.",
    href: "/spaces/diaspora-heritage",
    color: "#f2a63b",
    tag: "Community",
    swTag: "Jumuiya",
  },
  {
    icon: UsersRound,
    title: "Interest communities",
    sw: "Jumuiya za maslahi",
    body: "Find people who enjoy the same things you do.",
    swBody: "Pata watu wanaopenda mambo kama yako.",
    href: "/spaces",
    color: "#0e9f8e",
    tag: "Shared space",
    swTag: "Nafasi ya pamoja",
  },
  {
    icon: CalendarDays,
    title: "Events & gatherings",
    sw: "Matukio na mikusanyiko",
    body: "Join a live conversation, celebration, or watch party.",
    swBody: "Jiunge na mazungumzo, sherehe au kutazama pamoja.",
    href: "/events",
    color: "#d9527a",
    tag: "Event",
    swTag: "Tukio",
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
              {sw ? "Uwepo badala ya kusogeza" : "Presence over the feed"}
            </Badge>
            <h1 className="max-w-[14ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[60px]">
              {sw ? "Umbali ni jambo dogo tu." : "Distance is just a detail."}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {sw
                ? "Jumuika huwaleta watu pamoja katika nafasi za mazungumzo, sherehe na nyakati zinazofanya umbali uhisi mdogo."
                : "Jumuika brings people together in shared spaces for conversations, celebrations, and moments that make distance feel smaller."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/download" />}
                nativeButton={false}
                className="h-12 rounded-xl px-5"
              >
                {sw ? "Anza" : "Get started"}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href="/spaces" />}
                nativeButton={false}
                variant="outline"
                className="h-12 rounded-xl border-primary/25 bg-background px-5"
              >
                {sw ? "Chunguza nafasi" : "Explore spaces"}
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <UsersRound aria-hidden="true" className="size-4 text-primary" />
              {sw
                ? "Familia, urithi na jumuiya katika sehemu moja"
                : "Family, heritage, and community in one place"}
            </p>
          </div>
          <div
            role="img"
            aria-label={
              sw
                ? "Watu wakishiriki pamoja katika nafasi ya Jumuika"
                : "People gathering together in a Jumuika space"
            }
            className="min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center shadow-xl sm:min-h-[380px] md:min-h-[430px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCscE9lQMOFhOQkkU7MiLUKDGw2Fyg82W8AGwGLEPgOxbQVXEbOyqLmL_bvSxv-Et7-v9Fj28RO9MwftmHwPOvuBJ5cduy_ytp96R2MGxDmR0w2sH7BLLIWuIIGBIawRa1tWyz1arRbg7E7YdUBnhwyu9k8ZeFgiaUPXPTRVHwKPtC55bgZ7nJrjrvhsTUZwx0d2g3t1UM7EJMO1ZWMXeGflbNLB6GJImbZ1MSTOLK37sIHdCjQEsT6')",
            }}
          />
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw
                ? "Nafasi za kila aina ya uhusiano"
                : "Spaces for every kind of connection"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw ? "Chagua mkusanyiko wako" : "Find your kind of gathering"}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Tengeneza chumba cha faragha, ungana na urithi wako au jiunge na jumuiya."
                : "Create a private room, connect with your heritage, or join a community."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gatheringTypes.map(
              ({
                icon: Icon,
                title,
                sw: titleSw,
                body,
                swBody,
                href,
                color,
                tag,
                swTag,
              }) => (
                <Card
                  key={title}
                  className="group rounded-xl border-border/80 transition-all hover:-translate-y-0.5 hover:shadow-md"
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
                    <Badge
                      variant="outline"
                      className="mt-1 w-fit rounded-full"
                    >
                      {sw ? swTag : tag}
                    </Badge>
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
              {sw ? "Salama kwa chaguo lako" : "Safety stays visible"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Onyesha utu wako. Kwa usalama."
                : "Safe to show up as yourself."}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              {sw
                ? "Chagua wanaoweza kuona na kuingia katika nafasi yako. Kanuni wazi na zana za usalama huweka heshima katikati."
                : "Choose who can see and enter your space. Clear community standards and safety tools keep respect at the centre."}
            </p>
            <Button
              render={<Link href="/safety-privacy" />}
              nativeButton={false}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              {sw ? "Jifunze kuhusu usalama" : "Explore safety & privacy"}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <LockKeyhole
                  aria-hidden="true"
                  className="text-violet-presence size-6"
                />
                <CardTitle className="mt-2">
                  {sw ? "Faragha kwa chaguo" : "Privacy by choice"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Dhibiti ufikiaji wa nafasi zako."
                    : "Set who can find or enter your spaces."}
                </p>
              </CardHeader>
            </Card>
            <Card className="rounded-xl sm:mt-10">
              <CardHeader>
                <UsersRound
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <CardTitle className="mt-2">
                  {sw ? "Jumuiya zenye heshima" : "Respectful communities"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Kanuni wazi huongoza ushiriki."
                    : "Shared standards guide every gathering."}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-foreground py-14 text-background sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-violet-presence mb-2 text-xs font-bold tracking-wide uppercase">
              {sw ? "Kutana moja kwa moja" : "Meet in the moment"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Sauti, muziki na watu unaowakosa."
                : "Familiar voices, music, and people you miss."}
            </h2>
            <p className="mt-3 text-base leading-7 text-background/70">
              {sw
                ? "Jiunge na mkusanyiko wa diaspora au tafuta nafasi inayokufaa."
                : "Join a diaspora gathering or find a shared space that feels like yours."}
            </p>
          </div>
          <Button
            render={<Link href="/events" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Tazama matukio" : "Explore events"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {sw ? "Anza popote ulipo" : "Begin wherever you are"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {sw
                ? "Kusanyika ni hatua moja tu."
                : "Your next shared moment is one step away."}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {sw
                ? "Chagua namna ya kuingia kwenye nafasi ya pamoja."
                : "Find the right way to join a shared space with your people."}
            </p>
          </div>
          <Button
            render={<Link href="/download" />}
            nativeButton={false}
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Anza" : "Get started"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
