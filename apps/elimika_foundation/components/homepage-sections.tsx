"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  School,
  Sparkles,
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
import { useLanguage } from "@/components/language-provider"

const tracks = [
  {
    title: "K-12",
    sw: "K-12",
    text: "Curriculum-aligned science, history, and language discovery.",
    swText: "Ugunduzi wa sayansi, historia na lugha unaolingana na mtaala.",
    href: "/solutions/k-12",
    icon: School,
    color: "#3a5bd9",
  },
  {
    title: "Higher education",
    sw: "Elimu ya juu",
    text: "Virtual labs and spatial research for university programs.",
    swText: "Maabara pepe na utafiti wa anga kwa programu za vyuo vikuu.",
    href: "/solutions/higher-education",
    icon: GraduationCap,
    color: "#6c4fd9",
  },
  {
    title: "TVET & skills",
    sw: "TVET na stadi",
    text: "Repeatable simulations for practical vocational learning.",
    swText: "Uigaji unaorudiwa kwa mafunzo ya vitendo ya ufundi.",
    href: "/solutions/tvet-skills",
    icon: Wrench,
    color: "#1e8f6b",
  },
  {
    title: "Educators & institutions",
    sw: "Walimu na taasisi",
    text: "Classroom tools that keep educators at the centre.",
    swText: "Zana za darasa zinazowaweka walimu katikati.",
    href: "/solutions/educators-institutions",
    icon: BookOpen,
    color: "#d97a3a",
  },
]

export function HomepageSections() {
  const { language } = useLanguage()
  const swahili = language === "sw"

  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto grid min-h-[570px] max-w-[1320px] items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16 lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
            >
              {swahili
                ? "Elimu ya ndani kwa Kenya"
                : "Immersive education for Kenya"}
            </Badge>
            <h1 className="max-w-[15ch] font-heading text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[58px]">
              {swahili
                ? "Kujifunza, kufikiriwa upya katika vipimo vitatu"
                : "Learning, reimagined in three dimensions"}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {swahili
                ? "Elimika hujenga madarasa ya VR, maabara pepe za sayansi na mafunzo ya stadi za vitendo yanayoendana na mtaala kwa shule, vyuo na taasisi za TVET."
                : "Elimika builds curriculum-aligned VR classrooms, virtual science laboratories, and hands-on skills training for schools, universities, and TVET institutions."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/contact/request-a-demo" />}
                nativeButton={false}
                className="h-12 rounded-xl px-5"
              >
                {swahili ? "Omba onyesho" : "Request a Demo"}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href="/labs" />}
                nativeButton={false}
                variant="outline"
                className="h-12 rounded-xl border-primary/25 bg-background px-5"
              >
                {swahili ? "Chunguza maabara" : "Explore Labs"}
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sparkles aria-hidden="true" className="size-4 text-primary" />
              {swahili
                ? "Imejengwa pamoja na walimu na taasisi za Kenya"
                : "Built with Kenyan educators and institutions"}
            </p>
          </div>
          <div
            role="img"
            aria-label={
              swahili
                ? "Wanafunzi wakijifunza kwa kutumia teknolojia ya Elimika"
                : "Learners exploring an Elimika immersive lesson"
            }
            className="min-h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-cover bg-center shadow-xl sm:min-h-[380px] md:min-h-[430px]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjsXO9i28uj3o3nTGugmWT1KC2DGZYWSaX4lYXzEVmvkn6K6wPEGsIN-OMwQm1GDP8xVbFtf0HM0Z5PLZElVVnBFL3CSP_UmTkaRlFOIRJMMhmBXlou-I4x2grZ7HSI2Cf6dxWbRvm9lqsS1ufLKKt-jQxdZBV2lyNS6jJtX7m6w5qgEwfTnLtU5fVoCIb9kIIu-v7z4PCFhgPhYAtfreUT2UFUjHZlfNSdhbOI2ivS7qLfSOzv4mrDg')",
            }}
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {swahili ? "Mikondo ya ujifunzaji" : "Learning tracks"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {swahili
                ? "Njia ya kujifunza kwa kila hatua"
                : "A learning path for every stage"}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {swahili
                ? "Chagua mkondo unaolingana na wanafunzi, walimu na malengo ya taasisi yako."
                : "Choose a track shaped around your learners, educators, and institutional goals."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map(
              ({ title, sw, text, swText, href, icon: Icon, color }) => (
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
                      {swahili ? sw : title}
                    </CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {swahili ? swText : text}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={href}
                      className="inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary"
                    >
                      {swahili ? "Chunguza" : "Explore"}
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
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {swahili ? "Jifunze kwa kufanya" : "Learn by doing"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {swahili
                ? "Mawazo magumu, yanayoonekana"
                : "Make complex ideas tangible"}
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-muted-foreground">
              {swahili
                ? "Uigaji na maabara pepe huwapa wanafunzi nafasi ya kuchunguza dhana, kufanya mazoezi na kurudia somo kwa mwongozo wa mwalimu."
                : "Virtual labs and simulations give learners room to explore concepts, practice, and revisit lessons with an educator guiding the way."}
            </p>
            <Button
              render={<Link href="/labs" />}
              nativeButton={false}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              {swahili ? "Tazama maabara zote" : "Explore all labs"}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl">
              <CardHeader>
                <FlaskConical
                  aria-hidden="true"
                  className="size-6 text-primary"
                />
                <CardTitle className="mt-2">
                  {swahili ? "Maabara pepe" : "Virtual science labs"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {swahili
                    ? "Chunguza biolojia, kemia na fizikia kupitia miundo shirikishi."
                    : "Explore biology, chemistry, and physics through interactive models."}
                </p>
              </CardHeader>
            </Card>
            <Card className="rounded-xl sm:mt-10">
              <CardHeader>
                <Lightbulb
                  aria-hidden="true"
                  className="text-gold-achievement size-6"
                />
                <CardTitle className="mt-2">
                  {swahili ? "Stadi za vitendo" : "Practical skills"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {swahili
                    ? "Fanya mazoezi ya kazi za ufundi katika mazingira salama yanayoweza kurudiwa."
                    : "Practice vocational tasks in safe, repeatable environments."}
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 md:grid-cols-3">
          <div>
            <GraduationCap
              aria-hidden="true"
              className="text-gold-achievement size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {swahili ? "Mtaala kwanza" : "Curriculum first"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {swahili
                ? "Masomo yanayotengenezwa kuzunguka malengo ya ujifunzaji."
                : "Experiences designed around learning objectives."}
            </p>
          </div>
          <div>
            <School
              aria-hidden="true"
              className="text-gold-achievement size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {swahili ? "Mwalimu katikati" : "Educators at the centre"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {swahili
                ? "Teknolojia inayosaidia walimu kuongoza, si kuchukua nafasi yao."
                : "Technology that supports teachers instead of replacing them."}
            </p>
          </div>
          <div>
            <BookOpen
              aria-hidden="true"
              className="text-gold-achievement size-7"
            />
            <h2 className="mt-4 font-heading text-xl font-bold">
              {swahili ? "Utafiti na ushahidi" : "Research and evidence"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {swahili
                ? "Matokeo hupimwa kwa uwazi na muktadha."
                : "Outcomes are measured with context and care."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
              {swahili ? "Hatua inayofuata" : "Your next step"}
            </p>
            <h2 className="font-heading text-3xl font-bold">
              {swahili
                ? "Tujenge uzoefu bora wa kujifunza"
                : "Bring immersive learning to your institution"}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {swahili
                ? "Jadili mtaala, mahitaji ya darasa na namna ya kuanza."
                : "Talk curriculum, classroom needs, and how to get started."}
            </p>
          </div>
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {swahili ? "Omba onyesho" : "Request a demo"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
