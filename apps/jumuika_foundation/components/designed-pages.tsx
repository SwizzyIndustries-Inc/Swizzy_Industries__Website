"use client"

import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Heart,
  LockKeyhole,
  Music2,
  ShieldCheck,
  UsersRound,
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
import { useLanguage } from "@/components/language-provider"

type Copy = { en: string; sw: string }
type PageCard = {
  title: Copy
  description: Copy
  href?: string
  label?: Copy
  icon?: LucideIcon
}
const copy = (en: string, sw: string): Copy => ({ en, sw })

function JumuikaPage({
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
                Jumuika
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                {sw ? "Nafasi za kuwa pamoja" : "Made for shared moments"}
              </h2>
            </div>
            <UsersRound
              aria-hidden="true"
              className="hidden size-8 text-primary sm:block"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon ?? Heart
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
                    {card.label && (
                      <Badge
                        variant="outline"
                        className="mt-1 w-fit rounded-full"
                      >
                        {sw ? card.label.sw : card.label.en}
                      </Badge>
                    )}
                  </CardHeader>
                  {card.href && (
                    <CardContent>
                      <Link
                        href={card.href}
                        className="inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary"
                      >
                        {sw ? "Chunguza" : "Explore"}
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
              Jumuika
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              {sw ? "Umbali ni jambo dogo tu." : "Distance is just a detail."}
            </h2>
          </div>
          <Button
            render={<Link href="/download" />}
            nativeButton={false}
            variant="secondary"
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

export function SpacesPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Spaces & communities", "Nafasi na jumuiya")}
      title={copy(
        "Find your people. Step into your space.",
        "Wapate watu wako. Ingia katika nafasi yako."
      )}
      description={copy(
        "Gather with family, friends, and communities in shared digital spaces made for conversation and time together.",
        "Kusanyika na familia, marafiki na jumuiya katika nafasi za kidijitali zilizoundwa kwa mazungumzo na muda wa pamoja."
      )}
      cards={[
        {
          title: copy("Family & friends", "Familia na marafiki"),
          description: copy(
            "Private rooms for the people who know you best.",
            "Vyumba vya faragha kwa watu wanaokufahamu zaidi."
          ),
          href: "/spaces/family-friends",
          label: copy("Private", "Faragha"),
          icon: Heart,
        },
        {
          title: copy("Diaspora & heritage", "Diaspora na urithi"),
          description: copy(
            "Stay close to home, culture, and community across distance.",
            "Kaa karibu na nyumbani, utamaduni na jumuiya licha ya umbali."
          ),
          href: "/spaces/diaspora-heritage",
          icon: Music2,
        },
        {
          title: copy("Events & gatherings", "Matukio na mikusanyiko"),
          description: copy(
            "Join live moments across time zones.",
            "Jiunge na matukio ya moja kwa moja katika maeneo tofauti ya saa."
          ),
          href: "/events",
          icon: CalendarDays,
        },
      ]}
    />
  )
}
export function FamilyFriendsPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Family & friends", "Familia na marafiki")}
      title={copy(
        "Your living room has no borders.",
        "Sebule yako haina mipaka."
      )}
      description={copy(
        "Create a private place to catch up, celebrate, watch, and spend time with the people you love.",
        "Tengeneza nafasi ya faragha ya kuzungumza, kusherehekea, kutazama na kutumia muda na watu unaowapenda."
      )}
      cards={[
        {
          title: copy("A familiar place", "Nafasi inayofahamika"),
          description: copy(
            "Make a regular gathering feel close, wherever everyone is.",
            "Fanya mkusanyiko wa kawaida uhisi kuwa karibu, popote mlipo."
          ),
          href: "/spaces/nairobi-sunset-verandah",
          label: copy("Private room", "Chumba cha faragha"),
          icon: Heart,
        },
        {
          title: copy("Privacy by choice", "Faragha kwa chaguo"),
          description: copy(
            "Choose who can find and enter your shared room.",
            "Chagua watu wanaoweza kupata na kuingia kwenye chumba chenu."
          ),
          href: "/safety-privacy",
          icon: LockKeyhole,
        },
      ]}
    />
  )
}
export function DiasporaPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Diaspora & heritage", "Diaspora na urithi")}
      title={copy("Bridge the miles back home.", "Vuka umbali hadi nyumbani.")}
      description={copy(
        "Share language, music, memories, and everyday moments with the people and culture that keep you rooted.",
        "Shiriki lugha, muziki, kumbukumbu na nyakati za kila siku na watu na utamaduni unaokupa mizizi."
      )}
      cards={[
        {
          title: copy("Diaspora stories", "Hadithi za diaspora"),
          description: copy(
            "Hear how people keep family and heritage close across distance.",
            "Sikia jinsi watu wanavyoweka familia na urithi karibu licha ya umbali."
          ),
          href: "/stories/diaspora-chronicles",
          icon: Music2,
        },
        {
          title: copy("Live gatherings", "Mikusanyiko ya moja kwa moja"),
          description: copy(
            "Join a gathering built around music and shared culture.",
            "Jiunge na mkusanyiko unaohusu muziki na utamaduni wa pamoja."
          ),
          href: "/events/diaspora-jam-session",
          icon: CalendarDays,
        },
      ]}
    />
  )
}
export function EventsPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Events & gatherings", "Matukio na mikusanyiko")}
      title={copy(
        "Show up live. No matter your timezone.",
        "Shiriki moja kwa moja, popote ulipo."
      )}
      description={copy(
        "Find conversations, celebrations, and community events where being present matters more than scrolling.",
        "Pata mazungumzo, sherehe na matukio ya jumuiya ambako kushiriki ni muhimu kuliko kusogeza ukurasa."
      )}
      cards={[
        {
          title: copy("Diaspora Jam Session", "Kikao cha Muziki cha Diaspora"),
          description: copy(
            "An evening of Benga, Afro-House, and familiar faces.",
            "Jioni ya Benga, Afro-House na nyuso zinazofahamika."
          ),
          href: "/events/diaspora-jam-session",
          label: copy("Event gathering", "Mkusanyiko wa tukio"),
          icon: Music2,
        },
        {
          title: copy("Explore spaces", "Chunguza nafasi"),
          description: copy(
            "Find a community that feels like yours.",
            "Pata jumuiya inayokufaa."
          ),
          href: "/spaces",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function EventRsvpPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Event RSVP", "Kujisajili kwa tukio")}
      title={copy(
        "Diaspora Jam Session: Benga meets Afro-House.",
        "Kikao cha Muziki cha Diaspora: Benga yakutana na Afro-House."
      )}
      description={copy(
        "A shared music gathering for the diaspora community. Review event details and joining information.",
        "Mkusanyiko wa muziki kwa jumuiya ya diaspora. Kagua maelezo ya tukio na taarifa za kujiunga."
      )}
      cards={[
        {
          title: copy("Event details", "Maelezo ya tukio"),
          description: copy(
            "Review the gathering time, space, and joining information.",
            "Kagua muda, nafasi na taarifa za kujiunga."
          ),
          href: "/events",
          icon: CalendarDays,
        },
        {
          title: copy("Space preview", "Hakiki nafasi"),
          description: copy(
            "See the Nairobi Sunset Verandah before you join.",
            "Tazama Veranda ya Machweo ya Nairobi kabla ya kujiunga."
          ),
          href: "/spaces/nairobi-sunset-verandah",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function SpacePreviewPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Space preview", "Hakiki nafasi")}
      title={copy("Nairobi Sunset Verandah.", "Veranda ya Machweo ya Nairobi.")}
      description={copy(
        "Preview a warm shared setting inspired by an evening at home, open for conversation and company.",
        "Hakiki mazingira yenye ukarimu yaliyochochewa na jioni nyumbani, tayari kwa mazungumzo na urafiki."
      )}
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuBMUaLp_U5UVx7WESDGzMw_szKea58joG9E71GzJgMVRkFOoEAHNtJ3ApgcdwlljwWzQd"
      cards={[
        {
          title: copy("Gather with others", "Kusanyika na wengine"),
          description: copy(
            "Find an event or community that is open to you.",
            "Pata tukio au jumuiya iliyo wazi kwako."
          ),
          href: "/events",
          icon: UsersRound,
        },
        {
          title: copy("Choose your privacy", "Chagua faragha yako"),
          description: copy(
            "Learn how Jumuika keeps access and safety in your hands.",
            "Jifunze jinsi Jumuika inavyokuwekea udhibiti wa ufikiaji na usalama."
          ),
          href: "/safety-privacy",
          icon: LockKeyhole,
        },
      ]}
    />
  )
}
export function GetStartedPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Get started", "Anza")}
      title={copy(
        "Step in from any screen. Gather from anywhere.",
        "Ingia kupitia kifaa chochote. Kusanyika popote."
      )}
      description={copy(
        "Find the right way to join a shared space with your community.",
        "Pata njia inayofaa ya kujiunga na nafasi ya pamoja na jumuiya yako."
      )}
      cards={[
        {
          title: copy("Explore spaces", "Chunguza nafasi"),
          description: copy(
            "Choose a gathering that feels right for you.",
            "Chagua mkusanyiko unaokufaa."
          ),
          href: "/spaces",
          icon: UsersRound,
        },
        {
          title: copy("Safety and privacy", "Usalama na faragha"),
          description: copy(
            "Understand your controls before joining.",
            "Elewa vidhibiti vyako kabla ya kujiunga."
          ),
          href: "/safety-privacy",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function SafetyPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Safety & privacy", "Usalama na faragha")}
      title={copy(
        "Safe to show up as yourself. By design.",
        "Ni salama kuwa wewe mwenyewe, tangu mwanzo."
      )}
      description={copy(
        "Privacy options and clear community expectations help people feel comfortable showing up and taking part.",
        "Chaguo za faragha na matarajio yaliyo wazi huwasaidia watu kushiriki wakiwa huru."
      )}
      cards={[
        {
          title: copy("Community standards", "Kanuni za jumuiya"),
          description: copy(
            "Read expectations for respectful participation and moderation.",
            "Soma matarajio ya ushiriki wenye heshima na usimamizi."
          ),
          href: "/community-standards",
          icon: ShieldCheck,
        },
        {
          title: copy("Privacy choices", "Chaguo za faragha"),
          description: copy(
            "Decide who can see and enter a space.",
            "Amua nani anayeweza kuona na kuingia kwenye nafasi."
          ),
          href: "/spaces/family-friends",
          icon: LockKeyhole,
        },
      ]}
    />
  )
}
export function CommunityStandardsPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Community standards", "Viwango vya jumuiya")}
      title={copy(
        "Our covenant for human dignity in shared space.",
        "Ahadi yetu ya utu katika nafasi za pamoja."
      )}
      description={copy(
        "A clear governance charter sets expectations for respectful participation, reporting, and moderation.",
        "Mkataba wazi wa uongozi huweka matarajio ya ushiriki wenye heshima, kuripoti na usimamizi."
      )}
      cards={[
        {
          title: copy("Safety controls", "Vidhibiti vya usalama"),
          description: copy(
            "See the privacy and safety choices available in shared spaces.",
            "Tazama chaguo za faragha na usalama katika nafasi za pamoja."
          ),
          href: "/safety-privacy",
          icon: ShieldCheck,
        },
        {
          title: copy("Contact support", "Wasiliana na usaidizi"),
          description: copy(
            "Ask our community team for help with a gathering.",
            "Omba msaada wa timu yetu kuhusu mkusanyiko."
          ),
          href: "/contact",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function StoriesPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Stories", "Hadithi")}
      title={copy(
        "Real warmth across thousands of miles.",
        "Ukaribu wa kweli licha ya maelfu ya maili."
      )}
      description={copy(
        "Stories of family, heritage, and everyday belonging across borders and time zones.",
        "Hadithi za familia, urithi na kuwa sehemu ya jumuiya licha ya mipaka na tofauti za saa."
      )}
      cards={[
        {
          title: copy("Diaspora chronicles", "Hadithi za diaspora"),
          description: copy(
            "Hear what it means to stay close from far away.",
            "Sikia maana ya kuwa karibu ukiwa mbali."
          ),
          href: "/stories/diaspora-chronicles",
          icon: Music2,
        },
        {
          title: copy("Explore diaspora spaces", "Chunguza nafasi za diaspora"),
          description: copy(
            "Find a shared space rooted in Kenyan culture.",
            "Pata nafasi ya pamoja yenye mizizi katika utamaduni wa Kenya."
          ),
          href: "/spaces/diaspora-heritage",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function DiasporaStoryPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Diaspora chronicles", "Hadithi za diaspora")}
      title={copy(
        "Real warmth across thousands of miles.",
        "Ukaribu wa kweli licha ya maelfu ya maili."
      )}
      description={copy(
        "A story of family, heritage, and staying close across borders and time zones.",
        "Hadithi ya familia, urithi na kuwa karibu licha ya mipaka na tofauti za saa."
      )}
      cards={[
        {
          title: copy("Explore diaspora spaces", "Chunguza nafasi za diaspora"),
          description: copy(
            "Find a shared gathering rooted in culture.",
            "Pata mkusanyiko wa pamoja wenye mizizi katika utamaduni."
          ),
          href: "/spaces/diaspora-heritage",
          icon: Music2,
        },
        {
          title: copy("Join a gathering", "Jiunge na mkusanyiko"),
          description: copy(
            "Make room for the next conversation or celebration.",
            "Tengeneza nafasi ya mazungumzo au sherehe inayofuata."
          ),
          href: "/events",
          icon: CalendarDays,
        },
      ]}
    />
  )
}
export function AboutPage() {
  return (
    <JumuikaPage
      eyebrow={copy("About Jumuika", "Kuhusu Jumuika")}
      title={copy(
        "We believe distance is just a detail.",
        "Tunaamini umbali ni jambo dogo tu."
      )}
      description={copy(
        "Jumuika is built around presence, shared activity, and relationships that matter beyond a screen.",
        "Jumuika imejengwa kuzunguka uwepo, shughuli za pamoja na uhusiano muhimu nje ya skrini."
      )}
      cards={[
        {
          title: copy("Community first", "Jumuiya kwanza"),
          description: copy(
            "Create spaces for people to spend meaningful time together.",
            "Tengeneza nafasi za watu kutumia muda wenye maana pamoja."
          ),
          href: "/spaces",
          icon: UsersRound,
        },
        {
          title: copy("Built with care", "Imejengwa kwa uangalifu"),
          description: copy(
            "Learn about principles behind our shared spaces.",
            "Jifunze misingi iliyo nyuma ya nafasi zetu za pamoja."
          ),
          href: "/safety-privacy",
          icon: Heart,
        },
      ]}
    />
  )
}
export function CareersPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Careers", "Kazi")}
      title={copy(
        "Build the spaces where humans actually meet.",
        "Jenga nafasi ambamo watu hukutana kweli."
      )}
      description={copy(
        "Help create welcoming digital places, thoughtful safety tools, and experiences that bring people closer.",
        "Saidia kujenga nafasi za kidijitali zenye ukarimu, zana makini za usalama na uzoefu unaowaleta watu karibu."
      )}
      cards={[
        {
          title: copy("Our culture", "Utamaduni wetu"),
          description: copy(
            "See how the team approaches community and product craft.",
            "Tazama jinsi timu inavyoshughulikia jumuiya na ubunifu wa bidhaa."
          ),
          href: "/about",
          icon: UsersRound,
        },
        {
          title: copy("Get started", "Anza"),
          description: copy(
            "Explore Jumuika and the communities taking shape.",
            "Chunguza Jumuika na jumuiya zinazoundwa."
          ),
          href: "/download",
          icon: ArrowRight,
        },
      ]}
    />
  )
}
export function ContactPage() {
  return (
    <JumuikaPage
      eyebrow={copy("Community support", "Usaidizi wa jumuiya")}
      title={copy(
        "We’re here to keep your gatherings seamless.",
        "Tupo kusaidia mikusanyiko yenu iende vizuri."
      )}
      description={copy(
        "Contact the community support team with questions about spaces, events, or getting started.",
        "Wasiliana na timu ya usaidizi ukiwa na maswali kuhusu nafasi, matukio au kuanza."
      )}
      cards={[
        {
          title: copy("Explore safety", "Chunguza usalama"),
          description: copy(
            "Review privacy and community guidance.",
            "Kagua mwongozo wa faragha na jumuiya."
          ),
          href: "/safety-privacy",
          icon: ShieldCheck,
        },
        {
          title: copy("Find an event", "Pata tukio"),
          description: copy(
            "See gatherings and community events.",
            "Tazama mikusanyiko na matukio ya jumuiya."
          ),
          href: "/events",
          icon: CalendarDays,
        },
      ]}
    />
  )
}
