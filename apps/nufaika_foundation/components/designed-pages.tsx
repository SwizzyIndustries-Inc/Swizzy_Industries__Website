"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Heart,
  Home,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  type LucideIcon,
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

type Copy = { en: string; sw: string }
type PageCard = {
  title: Copy
  description: Copy
  href?: string
  icon?: LucideIcon
}
const copy = (en: string, sw: string): Copy => ({ en, sw })

function NufaikaPage({
  eyebrow,
  title,
  description,
  cards,
  image,
}: {
  eyebrow: Copy
  title: Copy
  description: Copy
  cards: PageCard[]
  image?: string
}) {
  const { language } = useLanguage()
  const sw = language === "sw"
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <Badge
            variant="secondary"
            className="mb-5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
          >
            {sw ? eyebrow.sw : eyebrow.en}
          </Badge>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-bold text-balance sm:text-5xl">
            {sw ? title.sw : title.en}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {sw ? description.sw : description.en}
          </p>
        </div>
      </section>
      {image && (
        <section className="mx-auto max-w-[1200px] px-5 pt-10 sm:px-8">
          <div
            role="img"
            aria-label={sw ? title.sw : title.en}
            className="min-h-64 rounded-2xl border border-border bg-cover bg-center shadow-sm sm:min-h-80"
            style={{ backgroundImage: `url("${image}")` }}
          />
        </section>
      )}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
                Nufaika marketplace
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                {sw
                  ? "Taarifa wazi, maamuzi bora"
                  : "Clear information. Better decisions."}
              </h2>
            </div>
            <BriefcaseBusiness
              aria-hidden="true"
              className="hidden size-8 text-primary sm:block"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon ?? BadgeCheck
              return (
                <Card
                  key={card.title.en}
                  className="group rounded-xl border-border/80 transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <CardTitle className="pt-2 text-lg">
                      {sw ? card.title.sw : card.title.en}
                    </CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {sw ? card.description.sw : card.description.en}
                    </p>
                  </CardHeader>
                  {card.href && (
                    <CardContent>
                      <Link
                        href={card.href}
                        className="inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary"
                      >
                        {sw ? "Jifunze zaidi" : "Learn more"}
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </CardContent>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-primary px-5 py-12 text-primary-foreground sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary-foreground/75">
              Nufaika
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              {sw ? "Stadi zinakutana na fursa." : "Skills meet opportunity."}
            </h2>
          </div>
          <Button
            render={<Link href="/search" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Tafuta huduma" : "Find a service"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export function CategoriesPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Categories & services", "Aina za huduma na huduma")}
      title={copy(
        "All categories and verified services.",
        "Aina zote za huduma zilizothibitishwa."
      )}
      description={copy(
        "Browse skilled professionals across home trades, learning, business, creative work, and care.",
        "Vinjari wataalamu katika ufundi wa nyumbani, elimu, biashara, ubunifu na utunzaji."
      )}
      cards={[
        {
          title: copy("Home & trade", "Nyumbani na ufundi"),
          description: copy(
            "Find electricians, plumbers, builders, and repair specialists.",
            "Pata mafundi wa umeme, mabomba, ujenzi na ukarabati."
          ),
          href: "/categories/home-trade",
          icon: Home,
        },
        {
          title: copy("Skills & tutoring", "Stadi na mafunzo"),
          description: copy(
            "Connect with tutors, coaches, and vocational specialists.",
            "Ungana na wakufunzi, walimu na wataalamu wa ufundi."
          ),
          href: "/search",
          icon: BriefcaseBusiness,
        },
        {
          title: copy("Care & wellness", "Utunzaji na ustawi"),
          description: copy(
            "Explore personal care and wellbeing services.",
            "Chunguza huduma za utunzaji binafsi na ustawi."
          ),
          href: "/search",
          icon: Heart,
        },
      ]}
    />
  )
}
export function HomeTradePage() {
  return (
    <NufaikaPage
      eyebrow={copy("Home & trade", "Nyumbani na ufundi")}
      title={copy(
        "Certified electricians, plumbers, and builders across Kenya.",
        "Mafundi umeme, mabomba na wajenzi walioidhinishwa kote Kenya."
      )}
      description={copy(
        "Compare local service providers with clear profiles, trust signals, and prices shared before you book.",
        "Linganisha watoa huduma wa karibu kupitia wasifu wazi, ishara za uaminifu na bei zinazoonyeshwa kabla ya kuweka nafasi."
      )}
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuCjbhHF5rw-CistPU87IPk_W31WpwRXw3TcFBaf3YUFZxGE0nnMRS51XHRiOcTq7VxSVLI8PZhGxxcgLcB8oq_6aERo2tMTkQjBijYk9-NaWOjjWq663Tf8uq1S_1YhTNqHBfMNDAjaEQFYWZFkJr8G_ZaFQ_gfePpvoQWabRQ-Ticw0GB6UbX32WfmxlOAuUYbKFGVawuKSsGg5suli66XjbH5zZGruA5CxlxmTsLYiohT0NS3jmlg"
      cards={[
        {
          title: copy(
            "Browse verified providers",
            "Vinjari watoa huduma waliothibitishwa"
          ),
          description: copy(
            "Filter by service and area to find the right professional.",
            "Chuja kwa huduma na eneo ili kupata mtaalamu anayefaa."
          ),
          href: "/search",
          icon: BadgeCheck,
        },
        {
          title: copy("Understand trust checks", "Elewa ukaguzi wa uaminifu"),
          description: copy(
            "See how verification and reviews work.",
            "Tazama jinsi uthibitishaji na maoni yanavyofanya kazi."
          ),
          href: "/trust-safety",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function SearchPage() {
  const { language } = useLanguage()
  const sw = language === "sw"
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
          <Badge variant="secondary" className="mb-4 rounded-full">
            {sw ? "Watoa huduma" : "Provider directory"}
          </Badge>
          <h1 className="font-heading text-4xl font-bold">
            {sw ? "Pata huduma inayokufaa." : "Find the right service."}
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            {sw
              ? "Linganisha wasifu, maoni, eneo la huduma na bei za kuanzia."
              : "Compare provider profiles, reviews, service areas, and starting prices."}
          </p>
          <form
            action="/search"
            className="mt-6 flex max-w-xl gap-2 rounded-xl border bg-background p-2"
          >
            <label htmlFor="provider-query" className="sr-only">
              {sw ? "Tafuta huduma" : "Search providers"}
            </label>
            <Input
              id="provider-query"
              name="q"
              placeholder={
                sw ? "Unahitaji huduma gani?" : "What service do you need?"
              }
              className="h-11 border-0 shadow-none focus-visible:ring-0"
            />
            <Button type="submit" className="h-11 rounded-lg">
              {sw ? "Tafuta" : "Search"}
            </Button>
          </form>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="mb-4 text-xs font-semibold tracking-wide text-primary uppercase">
            {sw ? "Mfano wa wasifu" : "Sample provider profile"}
          </p>
          <Card className="max-w-2xl rounded-xl">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">Jared Ombati</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {sw
                      ? "Huduma za umeme na sola · Wasifu wa mfano"
                      : "Electrical and solar services · Sample profile"}
                  </p>
                </div>
                <Badge variant="secondary" className="gap-1">
                  <BadgeCheck aria-hidden="true" className="size-3.5" />
                  {sw ? "Mfano" : "Sample"}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star
                  aria-hidden="true"
                  className="fill-opportunity-amber text-opportunity-amber size-4"
                />
                <span>
                  {sw
                    ? "Tathmini huonyeshwa kwenye wasifu"
                    : "Reviews appear on provider profiles"}
                </span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {sw
                  ? "Kagua huduma, eneo na bei kabla ya kutuma ombi."
                  : "Review service details, area, and pricing before making a request."}
              </p>
            </CardHeader>
            <CardContent>
              <Link
                href="/providers/jared-ombati"
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary"
              >
                {sw ? "Fungua wasifu wa mfano" : "View sample profile"}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
export function ProviderProfilePage() {
  return (
    <NufaikaPage
      eyebrow={copy(
        "Sample provider profile",
        "Wasifu wa mtoa huduma wa mfano"
      )}
      title={copy("Jared Ombati", "Jared Ombati")}
      description={copy(
        "Example profile for electrical and solar services. Provider details, reviews, and pricing should be verified before a booking.",
        "Wasifu wa mfano wa huduma za umeme na sola. Maelezo, maoni na bei vinapaswa kuthibitishwa kabla ya kuweka nafasi."
      )}
      cards={[
        {
          title: copy("Service details", "Maelezo ya huduma"),
          description: copy(
            "Review the service scope and starting price before making a request.",
            "Kagua wigo wa huduma na bei ya kuanzia kabla ya kutuma ombi."
          ),
          href: "/search",
          icon: Wrench,
        },
        {
          title: copy("Booking protection", "Ulinzi wa nafasi"),
          description: copy(
            "Learn how Nufaika supports clear transactions.",
            "Jifunze jinsi Nufaika inavyosaidia miamala iliyo wazi."
          ),
          href: "/trust-safety",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function HowItWorksPage() {
  return (
    <NufaikaPage
      eyebrow={copy("How it works", "Jinsi inavyofanya kazi")}
      title={copy(
        "How Nufaika works for people who build, hire, and create.",
        "Jinsi Nufaika inavyowasaidia wanaojenga, kuajiri na kuunda."
      )}
      description={copy(
        "Customers find and book services. Providers present their work and manage requests with clear next steps.",
        "Wateja hutafuta na kuweka nafasi ya huduma. Watoa huduma huonyesha kazi zao na kusimamia maombi kwa hatua zilizo wazi."
      )}
      cards={[
        {
          title: copy("For customers", "Kwa wateja"),
          description: copy(
            "Find a service, compare providers, and agree the work before it begins.",
            "Tafuta huduma, linganisha watoa huduma na kubaliana kuhusu kazi kabla haijaanza."
          ),
          href: "/search",
          icon: Search,
        },
        {
          title: copy("For providers", "Kwa watoa huduma"),
          description: copy(
            "Build a clear profile and connect with customers.",
            "Jenga wasifu ulio wazi na ungana na wateja."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
      ]}
    />
  )
}
export function ForProvidersPage() {
  return (
    <NufaikaPage
      eyebrow={copy("For providers", "Kwa watoa huduma")}
      title={copy(
        "Turn your craft into a predictable, thriving business.",
        "Geuza ufundi wako kuwa biashara endelevu inayostawi."
      )}
      description={copy(
        "Create a professional service profile, show how you work, and build a reputation with every completed job.",
        "Tengeneza wasifu wa kitaalamu, onyesha jinsi unavyofanya kazi na jenga sifa kwa kila kazi iliyokamilika."
      )}
      cards={[
        {
          title: copy("Set up your profile", "Sanidi wasifu wako"),
          description: copy(
            "Describe your services, service area, and experience.",
            "Eleza huduma, eneo la kazi na uzoefu wako."
          ),
          href: "/provider-agreement",
          icon: BriefcaseBusiness,
        },
        {
          title: copy("Know the standards", "Fahamu viwango"),
          description: copy(
            "Review provider terms, verification, and transaction expectations.",
            "Kagua masharti, uthibitishaji na matarajio ya miamala."
          ),
          href: "/provider-agreement",
          icon: CheckCircle2,
        },
      ]}
    />
  )
}
export function TrustSafetyPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Trust & safety", "Uaminifu na usalama")}
      title={copy(
        "How Nufaika protects every transaction and home.",
        "Jinsi Nufaika inavyolinda kila muamala na nyumba."
      )}
      description={copy(
        "Verification, clear booking details, and accountable support help customers and providers work with confidence.",
        "Uthibitishaji, maelezo wazi ya nafasi na usaidizi wenye uwajibikaji huwasaidia wateja na watoa huduma kufanya kazi kwa ujasiri."
      )}
      cards={[
        {
          title: copy("Provider verification", "Uthibitishaji wa watoa huduma"),
          description: copy(
            "Understand the checks behind provider trust signals.",
            "Elewa ukaguzi ulio nyuma ya ishara za uaminifu."
          ),
          href: "/provider-agreement",
          icon: BadgeCheck,
        },
        {
          title: copy("Need help?", "Unahitaji msaada?"),
          description: copy(
            "Contact our team about a booking or service concern.",
            "Wasiliana na timu yetu kuhusu nafasi au tatizo la huduma."
          ),
          href: "/contact",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function BlogPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Blog & guides", "Blogu na miongozo")}
      title={copy(
        "Practical intelligence for Kenyan homes and trades.",
        "Maarifa ya vitendo kwa nyumba na ufundi nchini Kenya."
      )}
      description={copy(
        "Guides for customers and providers on choosing, delivering, and growing trusted services.",
        "Miongozo kwa wateja na watoa huduma kuhusu kuchagua, kutoa na kukuza huduma zinazoaminika."
      )}
      cards={[
        {
          title: copy("For customers", "Kwa wateja"),
          description: copy(
            "Prepare for a service visit and make the work scope clear.",
            "Jiandae kwa ziara ya huduma na fafanua kazi inayohitajika."
          ),
          href: "/how-it-works",
          icon: Home,
        },
        {
          title: copy("For providers", "Kwa watoa huduma"),
          description: copy(
            "Build a profile that communicates your work clearly.",
            "Jenga wasifu unaoeleza kazi yako kwa uwazi."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
      ]}
    />
  )
}
export function AboutPage() {
  return (
    <NufaikaPage
      eyebrow={copy("About Nufaika", "Kuhusu Nufaika")}
      title={copy(
        "Dignifying Kenyan craftsmanship. Unlocking trusted opportunity.",
        "Kuthamini ufundi wa Kenya. Kufungua fursa zinazoaminika."
      )}
      description={copy(
        "Nufaika connects skilled people and customers through a services marketplace designed around trust.",
        "Nufaika huwaunganisha wenye stadi na wateja kupitia soko la huduma lililoundwa kuzingatia uaminifu."
      )}
      cards={[
        {
          title: copy("Skills meet opportunity", "Stadi zinakutana na fursa"),
          description: copy(
            "Help local skills become visible and easier to hire.",
            "Saidia stadi za hapa zionekane na kuajiriwa kwa urahisi."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
        {
          title: copy("Trust approach", "Mbinu ya uaminifu"),
          description: copy(
            "See how clear standards support service relationships.",
            "Tazama jinsi viwango wazi vinavyosaidia uhusiano wa huduma."
          ),
          href: "/trust-safety",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function CareersPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Careers", "Kazi")}
      title={copy(
        "Build the infrastructure empowering East Africa’s workforce.",
        "Jenga miundombinu inayowezesha wafanyakazi wa Afrika Mashariki."
      )}
      description={copy(
        "Work on practical tools that help service providers find customers and communities access trusted work.",
        "Fanya kazi kwenye zana zinazowasaidia watoa huduma kupata wateja na jamii kupata kazi inayoaminika."
      )}
      cards={[
        {
          title: copy("Marketplace operations", "Uendeshaji wa soko"),
          description: copy(
            "Help keep service information and transactions clear.",
            "Saidia kuweka taarifa za huduma na miamala wazi."
          ),
          icon: CheckCircle2,
        },
        {
          title: copy("Provider community", "Jumuiya ya watoa huduma"),
          description: copy(
            "Support skilled people building independent businesses.",
            "Saidia wenye stadi wanaojenga biashara huru."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
      ]}
    />
  )
}
export function ContactPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Contact & support", "Mawasiliano na usaidizi")}
      title={copy(
        "We are here to protect your transaction and empower your craft.",
        "Tupo kulinda muamala wako na kuwezesha ufundi wako."
      )}
      description={copy(
        "Contact Nufaika support about a service, booking, provider profile, or account question.",
        "Wasiliana na usaidizi wa Nufaika kuhusu huduma, nafasi, wasifu wa mtoa huduma au akaunti."
      )}
      cards={[
        {
          title: copy("Help with a booking", "Msaada wa nafasi"),
          description: copy(
            "Share booking details so our team can understand the issue.",
            "Shiriki maelezo ya nafasi ili timu yetu ielewe tatizo."
          ),
          href: "/trust-safety",
          icon: ShieldCheck,
        },
        {
          title: copy("Become a provider", "Kuwa mtoa huduma"),
          description: copy(
            "Learn how to list your skills and services.",
            "Jifunze jinsi ya kuorodhesha stadi na huduma zako."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
      ]}
    />
  )
}
export function ProviderAgreementPage() {
  return (
    <NufaikaPage
      eyebrow={copy("Provider agreement", "Makubaliano ya mtoa huduma")}
      title={copy(
        "Nufaika provider agreement and platform standards.",
        "Makubaliano ya watoa huduma na viwango vya jukwaa la Nufaika."
      )}
      description={copy(
        "A clear outline of provider responsibilities, customer expectations, verification, and service standards.",
        "Muhtasari wazi wa majukumu ya watoa huduma, matarajio ya wateja, uthibitishaji na viwango vya huduma."
      )}
      cards={[
        {
          title: copy("Verification", "Uthibitishaji"),
          description: copy(
            "Understand the information used to establish a trusted profile.",
            "Elewa taarifa zinazotumika kuunda wasifu unaoaminika."
          ),
          href: "/trust-safety",
          icon: BadgeCheck,
        },
        {
          title: copy("Start your profile", "Anza wasifu wako"),
          description: copy(
            "Prepare service details customers need to make a decision.",
            "Andaa maelezo ya huduma ambayo wateja wanahitaji kufanya uamuzi."
          ),
          href: "/for-providers",
          icon: BriefcaseBusiness,
        },
      ]}
    />
  )
}
