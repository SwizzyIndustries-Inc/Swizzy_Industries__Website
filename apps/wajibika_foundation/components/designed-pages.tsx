"use client"

import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileCheck2,
  HandCoins,
  Megaphone,
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
import { RaiseIssueForm } from "@/components/raise-issue-form"

type Copy = { en: string; sw: string }
type PageCard = {
  title: Copy
  description: Copy
  href?: string
  label?: Copy
  icon?: LucideIcon
}
const copy = (en: string, sw: string): Copy => ({ en, sw })

function WajibikaPage({
  eyebrow,
  title,
  description,
  cards,
  notice,
}: {
  eyebrow: Copy
  title: Copy
  description: Copy
  cards: PageCard[]
  notice?: Copy
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
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          {notice && (
            <div className="mb-8 flex gap-3 rounded-xl border border-border bg-muted p-4 text-sm leading-6 text-muted-foreground">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              <p>{sw ? notice.sw : notice.en}</p>
            </div>
          )}
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
                Wajibika civic platform
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                {sw
                  ? "Ushahidi, heshima na ufuatiliaji"
                  : "Evidence, dignity, follow-through"}
              </h2>
            </div>
            <Megaphone
              aria-hidden="true"
              className="hidden size-8 text-primary sm:block"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon ?? FileCheck2
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
              Wajibika
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              {sw ? "Sauti yako, ikisikika zaidi." : "Your voice, amplified."}
            </h2>
          </div>
          <Button
            render={<Link href="/raise-an-issue" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {sw ? "Wasilisha suala" : "Raise an issue"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export function IssuesPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Issues & campaigns", "Masuala na kampeni")}
      title={copy(
        "Public issues, community petitions, and tracked responses.",
        "Masuala ya umma, maombi ya jamii na majibu yanayofuatiliwa."
      )}
      description={copy(
        "Explore community concerns with clear sourcing, structured campaigns, and visible institutional response status.",
        "Chunguza masuala ya jamii yenye vyanzo wazi, kampeni zilizopangwa na hali inayoonekana ya majibu ya taasisi."
      )}
      cards={[
        {
          title: copy("Economy & livelihoods", "Uchumi na maisha"),
          description: copy(
            "Follow issues affecting work, trade, and everyday costs.",
            "Fuatilia masuala yanayoathiri kazi, biashara na gharama za kila siku."
          ),
          href: "/issues/economy",
          icon: HandCoins,
        },
        {
          title: copy("Accountability tracker", "Kifuatilia uwajibikaji"),
          description: copy(
            "See public response stages and recorded follow-up.",
            "Tazama hatua za majibu ya umma na ufuatiliaji uliorekodiwa."
          ),
          href: "/accountability-tracker",
          icon: BarChart3,
        },
        {
          title: copy("Voices & stories", "Sauti na hadithi"),
          description: copy(
            "Read community accounts with their context and source status.",
            "Soma simulizi za jamii pamoja na muktadha na hali ya chanzo."
          ),
          href: "/voices",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function EconomyIssuesPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Economy & livelihoods", "Uchumi na maisha")}
      title={copy(
        "Protect livelihoods and everyday purchasing power.",
        "Linda maisha na uwezo wa kununua wa kila siku."
      )}
      description={copy(
        "Explore concerns about informal enterprise, fair taxation, and household costs with sourcing shown clearly.",
        "Chunguza masuala kuhusu biashara zisizo rasmi, ushuru wa haki na gharama za kaya, huku vyanzo vikionyeshwa wazi."
      )}
      cards={[
        {
          title: copy(
            "Mama Mboga campaign docket",
            "Jalada la kampeni ya Mama Mboga"
          ),
          description: copy(
            "Review a community-submitted example and its source status.",
            "Kagua mfano uliowasilishwa na jamii pamoja na hali ya chanzo chake."
          ),
          href: "/campaigns/mama-mboga-livelihood-protection",
          label: copy(
            "Community-submitted · unverified",
            "Imewasilishwa na jamii · haijathibitishwa"
          ),
          icon: HandCoins,
        },
        {
          title: copy("Response status", "Hali ya majibu"),
          description: copy(
            "Track institutional responses and recorded next steps.",
            "Fuatilia majibu ya taasisi na hatua zinazofuata zilizorekodiwa."
          ),
          href: "/accountability-tracker",
          icon: BarChart3,
        },
      ]}
    />
  )
}
export function AccountabilityPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Accountability tracker", "Kifuatilia uwajibikaji")}
      title={copy(
        "Public response status board and institutional tracker.",
        "Ubao wa hali ya majibu ya umma na kifuatilia taasisi."
      )}
      description={copy(
        "Follow issues through clear stages, from being raised to reviewed, answered, or resolved.",
        "Fuatilia masuala kupitia hatua zilizo wazi: kuibuliwa, kukaguliwa, kujibiwa au kutatuliwa."
      )}
      cards={[
        {
          title: copy("Raised", "Imeibuliwa"),
          description: copy(
            "An issue has been submitted for review.",
            "Suala limewasilishwa ili likaguliwe."
          ),
          label: copy("Status", "Hali"),
          icon: FileCheck2,
        },
        {
          title: copy("Under review", "Inakaguliwa"),
          description: copy(
            "Context and supporting material are being assessed.",
            "Muktadha na nyenzo za ushahidi zinatathminiwa."
          ),
          label: copy("Status", "Hali"),
          icon: ShieldCheck,
        },
        {
          title: copy("Responded or resolved", "Imejibiwa au kutatuliwa"),
          description: copy(
            "Recorded public responses and follow-up appear here.",
            "Majibu ya umma yaliyorekodiwa na ufuatiliaji huonekana hapa."
          ),
          label: copy("Status", "Hali"),
          icon: CheckCircle2,
        },
      ]}
    />
  )
}
export function CampaignDocketPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Campaign docket", "Jalada la kampeni")}
      title={copy(
        "Mama Mboga Livelihood Protection Act.",
        "Sheria ya Kulinda Riziki za Mama Mboga."
      )}
      description={copy(
        "Review the campaign proposal, its stated evidence, community context, and any institutional response as it develops.",
        "Kagua pendekezo la kampeni, ushahidi uliotajwa, muktadha wa jamii na majibu yoyote ya taasisi yanapoendelea."
      )}
      cards={[
        {
          title: copy("Source and context", "Chanzo na muktadha"),
          description: copy(
            "Distinguish submitted material from independently verified information.",
            "Tofautisha nyenzo zilizowasilishwa na taarifa zilizothibitishwa kwa kujitegemea."
          ),
          href: "/community-guidelines",
          label: copy(
            "Community-submitted · unverified",
            "Imewasilishwa na jamii · haijathibitishwa"
          ),
          icon: ShieldCheck,
        },
        {
          title: copy("Track the response", "Fuatilia majibu"),
          description: copy(
            "See public status and any recorded follow-up.",
            "Tazama hali ya umma na ufuatiliaji wowote uliorekodiwa."
          ),
          href: "/accountability-tracker",
          icon: BarChart3,
        },
      ]}
      notice={copy(
        "This docket is an illustrative design example. Its claims are not independently verified and should not be treated as established fact.",
        "Jalada hili ni mfano wa usanifu. Madai yake hayajathibitishwa kwa kujitegemea na yasichukuliwe kama ukweli uliothibitishwa."
      )}
    />
  )
}
export function VoicesPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Voices & stories", "Sauti na hadithi")}
      title={copy(
        "Voices from the ground. Stories with context.",
        "Sauti kutoka nyanjani. Hadithi zenye muktadha."
      )}
      description={copy(
        "Read individual perspectives and community accounts with clear information about their source and verification status.",
        "Soma mitazamo ya watu binafsi na simulizi za jamii zenye taarifa wazi kuhusu chanzo na hali ya uthibitishaji."
      )}
      cards={[
        {
          title: copy(
            "Behind the weighbridges",
            "Nyuma ya mizani ya barabarani"
          ),
          description: copy(
            "A design-example story about produce transport and county charges.",
            "Hadithi ya mfano kuhusu usafirishaji wa mazao na ada za kaunti."
          ),
          href: "/stories/behind-the-weighbridges",
          label: copy("Illustrative story", "Hadithi ya mfano"),
          icon: UsersRound,
        },
        {
          title: copy("Issues & campaigns", "Masuala na kampeni"),
          description: copy(
            "Explore campaigns and community questions.",
            "Chunguza kampeni na maswali ya jamii."
          ),
          href: "/issues",
          icon: Megaphone,
        },
      ]}
    />
  )
}
export function WeighbridgesStoryPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Community story", "Hadithi ya jamii")}
      title={copy(
        "Behind the weighbridges: farmers and county charges.",
        "Nyuma ya mizani ya barabarani: wakulima na ada za kaunti."
      )}
      description={copy(
        "A design-example account about produce transport, local charges, and documenting claims and responses.",
        "Simulizi la mfano kuhusu usafirishaji wa mazao, ada za eneo na kurekodi madai na majibu."
      )}
      cards={[
        {
          title: copy("Campaign context", "Muktadha wa kampeni"),
          description: copy(
            "Review related community concerns and their stated sources.",
            "Kagua masuala yanayohusiana na vyanzo vilivyotajwa."
          ),
          href: "/issues/economy",
          icon: HandCoins,
        },
        {
          title: copy("Public responses", "Majibu ya umma"),
          description: copy(
            "See how concerns move through the response process.",
            "Tazama jinsi masuala yanavyopita katika mchakato wa majibu."
          ),
          href: "/accountability-tracker",
          icon: BarChart3,
        },
      ]}
      notice={copy(
        "This is an illustrative story design. Names, events, and claims require independent reporting and verification before publication.",
        "Hii ni hadithi ya mfano wa usanifu. Majina, matukio na madai yanahitaji kuripotiwa na kuthibitishwa kwa kujitegemea kabla ya kuchapishwa."
      )}
    />
  )
}
export function PartnersPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Partners & organizations", "Washirika na mashirika")}
      title={copy(
        "Civic alliances grounded in accountability and local action.",
        "Ushirikiano wa kiraia unaotegemea uwajibikaji na hatua za jamii."
      )}
      description={copy(
        "Work with civil-society, community, media, and institutional partners under clear standards.",
        "Fanya kazi na mashirika ya kiraia, jumuiya, vyombo vya habari na taasisi kwa viwango vilivyo wazi."
      )}
      cards={[
        {
          title: copy("Editorial standards", "Viwango vya uhariri"),
          description: copy(
            "Understand how civic information is handled and presented.",
            "Elewa jinsi taarifa za kiraia zinavyoshughulikiwa na kuwasilishwa."
          ),
          href: "/about",
          icon: FileCheck2,
        },
        {
          title: copy("Contact Wajibika", "Wasiliana na Wajibika"),
          description: copy(
            "Discuss a partnership or an issue requiring attention.",
            "Jadili ushirikiano au suala linalohitaji kuangaziwa."
          ),
          href: "/contact",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function RaiseIssuePage() {
  const { language } = useLanguage()
  const sw = language === "sw"
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
          <Badge variant="secondary" className="mb-5 rounded-full">
            {sw ? "Wasilisha suala" : "Raise an issue"}
          </Badge>
          <h1 className="max-w-4xl font-heading text-4xl font-bold sm:text-5xl">
            {sw
              ? "Wasilisha suala la kiraia lililopangwa."
              : "Raise a structured civic issue."}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            {sw
              ? "Shiriki suala pamoja na eneo, muktadha na taarifa za ushahidi ili liweze kukaguliwa kwa uwajibikaji."
              : "Share a concern with its location, context, and supporting information so it can be reviewed responsibly."}
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.65fr]">
          <RaiseIssueForm />
          <aside className="space-y-4">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle>
                  {sw ? "Kabla ya kuanza" : "Before you begin"}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {sw
                    ? "Toa taarifa kwa heshima, tofautisha unachojua na unachodhani, na usiweke taarifa binafsi za watu wengine."
                    : "Share respectfully, distinguish what you know from what you believe, and avoid posting other people’s private information."}
                </p>
              </CardHeader>
            </Card>
            <Link
              href="/community-guidelines"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary"
            >
              {sw ? "Soma mwongozo wa jumuiya" : "Read community guidelines"}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
export function CommunityGuidelinesPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Community guidelines", "Mwongozo wa jumuiya")}
      title={copy(
        "Protect civic courage, evidence, and dignified deliberation.",
        "Linda ujasiri wa kiraia, ushahidi na majadiliano yenye heshima."
      )}
      description={copy(
        "Clear moderation principles distinguish sourced claims, community submissions, and personal views while protecting participants.",
        "Kanuni wazi za usimamizi hutofautisha madai yenye vyanzo, mawasilisho ya jamii na maoni binafsi huku zikilinda washiriki."
      )}
      cards={[
        {
          title: copy("Reporting & moderation", "Kuripoti na usimamizi"),
          description: copy(
            "See how harmful content and safety concerns are handled.",
            "Tazama jinsi maudhui hatari na masuala ya usalama yanavyoshughulikiwa."
          ),
          href: "/contact",
          icon: ShieldCheck,
        },
        {
          title: copy("Sourcing & verification", "Vyanzo na uthibitishaji"),
          description: copy(
            "Understand what labels mean and what they do not claim.",
            "Elewa maana ya lebo na mambo ambayo hazidai."
          ),
          href: "/issues",
          icon: FileCheck2,
        },
      ]}
    />
  )
}
export function AboutPage() {
  return (
    <WajibikaPage
      eyebrow={copy("About Wajibika", "Kuhusu Wajibika")}
      title={copy(
        "Public accountability through evidence and civic action.",
        "Uwajibikaji wa umma kupitia ushahidi na hatua za kiraia."
      )}
      description={copy(
        "Wajibika creates structured ways for communities to raise concerns, share context, and follow public responses.",
        "Wajibika huunda njia zilizopangwa kwa jamii kuibua masuala, kushiriki muktadha na kufuatilia majibu ya umma."
      )}
      cards={[
        {
          title: copy(
            "Editorial & moderation standards",
            "Viwango vya uhariri na usimamizi"
          ),
          description: copy(
            "Learn how the platform supports dignified public participation.",
            "Jifunze jinsi jukwaa linavyosaidia ushiriki wa umma wenye heshima."
          ),
          href: "/community-guidelines",
          icon: ShieldCheck,
        },
        {
          title: copy("Our partners", "Washirika wetu"),
          description: copy(
            "Meet organizations working toward accountable civic action.",
            "Fahamu mashirika yanayofanya kazi kwa hatua za kiraia zenye uwajibikaji."
          ),
          href: "/partners",
          icon: UsersRound,
        },
      ]}
    />
  )
}
export function CareersPage() {
  return (
    <WajibikaPage
      eyebrow={copy("Careers & fellowships", "Kazi na ushirika")}
      title={copy(
        "Build the technology and journalism that holds power accountable.",
        "Jenga teknolojia na uandishi unaowajibisha mamlaka."
      )}
      description={copy(
        "Work on civic technology that helps communities communicate issues and follow responses with care.",
        "Fanya kazi kwenye teknolojia ya kiraia inayosaidia jamii kuwasilisha masuala na kufuatilia majibu kwa uangalifu."
      )}
      cards={[
        {
          title: copy("Civic fellowships", "Ushirika wa kiraia"),
          description: copy(
            "Explore opportunities to contribute to research and community reporting.",
            "Chunguza fursa za kuchangia utafiti na taarifa za jamii."
          ),
          icon: UsersRound,
        },
        {
          title: copy("Community safety", "Usalama wa jumuiya"),
          description: copy(
            "Learn about standards protecting contributors.",
            "Jifunze viwango vinavyolinda wachangiaji."
          ),
          href: "/community-guidelines",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function ContactPage() {
  return (
    <WajibikaPage
      eyebrow={copy(
        "Contact & issue escalation",
        "Mawasiliano na kuripoti suala"
      )}
      title={copy(
        "Direct, secure communication for citizens and partners.",
        "Mawasiliano ya moja kwa moja na salama kwa wananchi na washirika."
      )}
      description={copy(
        "Contact the Wajibika team to report a concern, ask about a campaign, or discuss a partnership.",
        "Wasiliana na timu ya Wajibika kuripoti suala, kuuliza kuhusu kampeni au kujadili ushirikiano."
      )}
      cards={[
        {
          title: copy("Raise an issue", "Wasilisha suala"),
          description: copy(
            "Share a civic concern through the structured issue route.",
            "Shiriki suala la kiraia kupitia njia iliyopangwa."
          ),
          href: "/raise-an-issue",
          icon: Megaphone,
        },
        {
          title: copy("Community guidelines", "Mwongozo wa jumuiya"),
          description: copy(
            "Review participation, moderation, and safety standards.",
            "Kagua viwango vya ushiriki, usimamizi na usalama."
          ),
          href: "/community-guidelines",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
