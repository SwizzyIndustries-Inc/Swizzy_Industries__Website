"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  School,
  ShieldCheck,
  Sparkles,
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
import { useLanguage } from "@/components/language-provider"

type Copy = { en: string; sw: string }
type PageCard = {
  title: Copy
  description: Copy
  href?: string
  icon?: LucideIcon
}

function content(en: string, sw: string): Copy {
  return { en, sw }
}

function ElimikaPage({
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
  const isSwahili = language === "sw"
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <Badge
            variant="secondary"
            className="mb-5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
          >
            {isSwahili ? eyebrow.sw : eyebrow.en}
          </Badge>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight font-bold text-balance sm:text-5xl">
            {isSwahili ? title.sw : title.en}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {isSwahili ? description.sw : description.en}
          </p>
        </div>
      </section>
      {image && (
        <section className="mx-auto max-w-[1200px] px-5 pt-10 sm:px-8">
          <div
            role="img"
            aria-label={isSwahili ? title.sw : title.en}
            className="min-h-64 rounded-2xl border border-border bg-cover bg-center shadow-sm sm:min-h-80"
            style={{ backgroundImage: `url("${image}")` }}
          />
        </section>
      )}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-bold tracking-wide text-primary uppercase">
                Elimika Foundation
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                {isSwahili ? "Chunguza suluhisho" : "Explore the possibilities"}
              </h2>
            </div>
            <Sparkles
              aria-hidden="true"
              className="hidden size-8 shrink-0 text-primary sm:block"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon ?? BookOpen
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
                      {isSwahili ? card.title.sw : card.title.en}
                    </CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {isSwahili ? card.description.sw : card.description.en}
                    </p>
                  </CardHeader>
                  {card.href && (
                    <CardContent>
                      <Link
                        href={card.href}
                        className="inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-primary"
                      >
                        {isSwahili ? "Jifunze zaidi" : "Learn more"}
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
              Elimika Foundation
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              {isSwahili
                ? "Jifunze zaidi kuhusu Elimika"
                : "Talk with the Elimika team"}
            </h2>
          </div>
          <Button
            render={<Link href="/contact/request-a-demo" />}
            nativeButton={false}
            variant="secondary"
            className="h-12 shrink-0 rounded-xl px-5"
          >
            {isSwahili ? "Omba onyesho" : "Request a demo"}
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

const trackCards: PageCard[] = [
  {
    title: content("K-12", "K-12"),
    description: content(
      "Curriculum-aligned science, history, and language discovery.",
      "Ugunduzi wa sayansi, historia na lugha unaolingana na mtaala."
    ),
    href: "/solutions/k-12",
    icon: School,
  },
  {
    title: content("Higher education", "Elimu ya juu"),
    description: content(
      "Virtual labs and spatial research for university programs.",
      "Maabara pepe na utafiti wa anga kwa programu za vyuo vikuu."
    ),
    href: "/solutions/higher-education",
    icon: GraduationCap,
  },
  {
    title: content("TVET & skills", "TVET na stadi"),
    description: content(
      "Repeatable simulations for practical vocational learning.",
      "Uigaji unaorudiwa kwa mafunzo ya vitendo ya ufundi."
    ),
    href: "/solutions/tvet-skills",
    icon: Wrench,
  },
  {
    title: content("Educators & institutions", "Walimu na taasisi"),
    description: content(
      "Classroom tools that keep educators at the centre.",
      "Zana za darasa zinazowaweka walimu katikati."
    ),
    href: "/solutions/educators-institutions",
    icon: BookOpen,
  },
]

export function LearningSolutionsPage() {
  return (
    <ElimikaPage
      eyebrow={content("Learning solutions", "Suluhisho za ujifunzaji")}
      title={content(
        "Learning experiences built around the curriculum.",
        "Uzoefu wa kujifunza uliojengwa kuzunguka mtaala."
      )}
      description={content(
        "Explore Elimika learning tracks for schools, universities, TVET institutions, and educators across Kenya.",
        "Chunguza mikondo ya Elimika kwa shule, vyuo, taasisi za TVET na walimu kote Kenya."
      )}
      cards={trackCards}
    />
  )
}
export function K12Page() {
  return (
    <ElimikaPage
      eyebrow={content("K-12 learning", "Mafunzo ya K-12")}
      title={content(
        "Transform abstract science and history into tangible 3D discovery.",
        "Geuza sayansi na historia dhahania kuwa ugunduzi wa 3D unaoonekana."
      )}
      description={content(
        "Curriculum-aligned spatial lessons help learners explore ideas by seeing and doing, with educators guiding every step.",
        "Masomo ya anga yanayoendana na mtaala huwasaidia wanafunzi kuchunguza kwa kuona na kufanya, huku walimu wakiongoza kila hatua."
      )}
      cards={[
        trackCards[1],
        {
          title: content("Virtual science labs", "Maabara pepe za sayansi"),
          description: content(
            "Explore biology, chemistry, and physics with interactive models.",
            "Chunguza biolojia, kemia na fizikia kwa kutumia miundo shirikishi."
          ),
          href: "/labs",
          icon: FlaskConical,
        },
        trackCards[3],
      ]}
    />
  )
}
export function HigherEducationPage() {
  return (
    <ElimikaPage
      eyebrow={content("Higher education", "Elimu ya juu")}
      title={content(
        "Break campus lab boundaries with university-grade simulations.",
        "Vunja mipaka ya maabara za chuo kwa uigaji wa kiwango cha chuo kikuu."
      )}
      description={content(
        "Give university learners and researchers more ways to examine complex systems, collaborate, and practice.",
        "Wape wanafunzi na watafiti wa vyuo njia zaidi za kuchunguza mifumo changamano, kushirikiana na kufanya mazoezi."
      )}
      cards={[
        {
          title: content("Spatial research", "Utafiti wa anga"),
          description: content(
            "Visualize concepts and findings in shared digital environments.",
            "Onyesha dhana na matokeo katika mazingira ya pamoja ya kidijitali."
          ),
          href: "/research/spatial-learning",
          icon: FlaskConical,
        },
        {
          title: content("Virtual laboratories", "Maabara pepe"),
          description: content(
            "Extend practical learning with repeatable digital experiments.",
            "Panua mafunzo ya vitendo kwa majaribio ya kidijitali yanayoweza kurudiwa."
          ),
          href: "/labs",
          icon: School,
        },
        trackCards[3],
      ]}
    />
  )
}
export function TVETPage() {
  return (
    <ElimikaPage
      eyebrow={content("TVET & skills", "TVET na stadi")}
      title={content(
        "Practice high-risk, high-cost trade simulations safely.",
        "Fanya mazoezi ya kazi za hatari na gharama kubwa kwa usalama."
      )}
      description={content(
        "Repeatable immersive practice helps learners build confidence before using tools and equipment in the field.",
        "Mazoezi ya ndani yanayoweza kurudiwa huwajengea wanafunzi ujasiri kabla ya kutumia zana na vifaa kazini."
      )}
      cards={[
        {
          title: content("Trade simulations", "Uigaji wa ufundi"),
          description: content(
            "Practice electrical, mechanical, and other vocational tasks.",
            "Fanya mazoezi ya kazi za umeme, ufundi na stadi nyingine za kiufundi."
          ),
          href: "/labs",
          icon: Wrench,
        },
        trackCards[2],
        trackCards[3],
      ]}
    />
  )
}
export function EducatorsPage() {
  return (
    <ElimikaPage
      eyebrow={content("Educators & institutions", "Walimu na taasisi")}
      title={content(
        "Give educators insight into spatial learning.",
        "Wape walimu maarifa kuhusu ujifunzaji wa anga."
      )}
      description={content(
        "Tools for lesson preparation, classroom facilitation, and learner progress keep educators at the centre.",
        "Zana za maandalizi ya somo, uongozi wa darasa na maendeleo ya wanafunzi huwaweka walimu katikati."
      )}
      cards={[
        trackCards[0],
        trackCards[1],
        {
          title: content("Institutional engagement", "Ushirikiano wa taasisi"),
          description: content(
            "Plan an engagement suited to your school or university.",
            "Panga ushirikiano unaofaa shule au chuo chako."
          ),
          href: "/pricing",
          icon: School,
        },
      ]}
    />
  )
}
export function LabsPage() {
  return (
    <ElimikaPage
      eyebrow={content("Labs & modules", "Maabara na moduli")}
      title={content(
        "Explore curriculum-mapped virtual labs and simulations.",
        "Chunguza maabara pepe na uigaji unaolingana na mtaala."
      )}
      description={content(
        "Browse learning experiences for science, engineering, health-adjacent subjects, trades, and languages.",
        "Vinjari uzoefu wa kujifunza sayansi, uhandisi, masomo yanayohusiana na afya, ufundi na lugha."
      )}
      cards={[
        {
          title: content("Human anatomy 3D atlas", "Atlasi ya anatomia ya 3D"),
          description: content(
            "Explore anatomy through an interactive spatial model.",
            "Chunguza anatomia kupitia mfano shirikishi wa anga."
          ),
          icon: FlaskConical,
        },
        {
          title: content("Geothermal dynamics", "Mienendo ya jotoardhi"),
          description: content(
            "Explore energy systems through a Rift Valley model.",
            "Chunguza mifumo ya nishati kupitia mfano wa Bonde la Ufa."
          ),
          icon: Lightbulb,
        },
        {
          title: content("TVET skills practice", "Mazoezi ya stadi za TVET"),
          description: content(
            "Build vocational skills in guided, repeatable scenarios.",
            "Jenga stadi za ufundi katika hali zinazoongozwa na kurudiwa."
          ),
          href: "/solutions/tvet-skills",
          icon: Wrench,
        },
      ]}
    />
  )
}
export function ResearchPage() {
  return (
    <ElimikaPage
      eyebrow={content("Blog & research", "Blogu na utafiti")}
      title={content(
        "Empirical research, field insights, and learning outcomes.",
        "Utafiti wa kisayansi, maarifa ya nyanjani na matokeo ya ujifunzaji."
      )}
      description={content(
        "Read research and field notes on spatial learning, implementation, and curriculum-aligned immersive education.",
        "Soma utafiti na taarifa za nyanjani kuhusu ujifunzaji wa anga, utekelezaji na elimu ya ndani inayolingana na mtaala."
      )}
      cards={[
        {
          title: content(
            "Spatial learning study",
            "Utafiti wa ujifunzaji wa anga"
          ),
          description: content(
            "A longitudinal study of 3D spatial mental models in Kenyan secondary schools.",
            "Utafiti wa muda mrefu wa mifano ya fikra za anga za 3D katika shule za upili nchini Kenya."
          ),
          href: "/research/spatial-learning",
          icon: FlaskConical,
        },
        {
          title: content("Impact & outcomes", "Athari na matokeo"),
          description: content(
            "Explore how learning outcomes are assessed and reported.",
            "Chunguza jinsi matokeo ya ujifunzaji yanavyotathminiwa na kuripotiwa."
          ),
          href: "/impact",
          icon: ShieldCheck,
        },
        {
          title: content("Learning labs", "Maabara za ujifunzaji"),
          description: content(
            "Browse the experiences that support classroom practice.",
            "Vinjari uzoefu unaosaidia mazoezi ya darasani."
          ),
          href: "/labs",
          icon: School,
        },
      ]}
    />
  )
}
export function SpatialLearningStudyPage() {
  return (
    <ElimikaPage
      eyebrow={content("Research study", "Utafiti")}
      title={content(
        "Longitudinal analysis of spatial mental models in Kenyan schools.",
        "Uchambuzi wa muda mrefu wa mifano ya fikra za anga katika shule za Kenya."
      )}
      description={content(
        "Review the research questions, approach, and context behind a study of 3D learning and physical laboratory resources.",
        "Kagua maswali, mbinu na muktadha wa utafiti wa ujifunzaji wa 3D na rasilimali za maabara halisi."
      )}
      cards={[
        {
          title: content("Research approach", "Mbinu ya utafiti"),
          description: content(
            "Understand the study questions, setting, and measures.",
            "Elewa maswali, mazingira na vipimo vya utafiti."
          ),
          icon: FlaskConical,
        },
        {
          title: content("Learning context", "Mazingira ya ujifunzaji"),
          description: content(
            "Explore how simulation can complement practical learning.",
            "Chunguza jinsi uigaji unavyoweza kuongeza mafunzo ya vitendo."
          ),
          href: "/labs",
          icon: BookOpen,
        },
      ]}
    />
  )
}
export function ImpactPage() {
  return (
    <ElimikaPage
      eyebrow={content("Impact & outcomes", "Athari na matokeo")}
      title={content(
        "Measure meaningful learning outcomes across Kenya.",
        "Pima matokeo yenye maana ya ujifunzaji nchini Kenya."
      )}
      description={content(
        "Our reporting focuses on evidence, implementation, and practical learning opportunities. Findings are shared with clear context.",
        "Ripoti zetu huzingatia ushahidi, utekelezaji na fursa za mafunzo ya vitendo. Matokeo hushirikiwa kwa muktadha ulio wazi."
      )}
      cards={[
        {
          title: content("Learning research", "Utafiti wa ujifunzaji"),
          description: content(
            "Review the methods and questions behind our learning research.",
            "Kagua mbinu na maswali yaliyo nyuma ya utafiti wetu."
          ),
          href: "/research",
          icon: FlaskConical,
        },
        {
          title: content(
            "Institutional partnerships",
            "Ushirikiano wa taasisi"
          ),
          description: content(
            "Discuss a pilot or a longer-term learning program.",
            "Jadili majaribio au programu ya muda mrefu ya ujifunzaji."
          ),
          href: "/contact",
          icon: School,
        },
      ]}
    />
  )
}
export function PricingPage() {
  return (
    <ElimikaPage
      eyebrow={content("Pricing & engagement", "Bei na ushirikiano")}
      title={content(
        "Sustainable, predictable investment for every institution.",
        "Uwekezaji endelevu na unaotabirika kwa kila taasisi."
      )}
      description={content(
        "Engagement models are shaped around learning context, rollout needs, and available infrastructure.",
        "Miundo ya ushirikiano hupangwa kulingana na mazingira ya ujifunzaji, mahitaji ya utekelezaji na miundombinu iliyopo."
      )}
      cards={[
        {
          title: content("Schools and universities", "Shule na vyuo"),
          description: content(
            "Explore options for institution-wide learning programs.",
            "Chunguza chaguo za programu za ujifunzaji za taasisi nzima."
          ),
          href: "/contact/request-a-demo",
          icon: School,
        },
        {
          title: content("Plan a demonstration", "Panga onyesho"),
          description: content(
            "Share your goals and discuss an appropriate next step.",
            "Shiriki malengo yako na mjadili hatua inayofuata inayofaa."
          ),
          href: "/contact/request-a-demo",
          icon: GraduationCap,
        },
      ]}
    />
  )
}
export function AboutPage() {
  return (
    <ElimikaPage
      eyebrow={content("About Elimika", "Kuhusu Elimika")}
      title={content(
        "Bridge the practical learning gap through immersive spatial science.",
        "Ziba pengo la mafunzo ya vitendo kupitia sayansi ya anga."
      )}
      description={content(
        "Elimika helps make complex ideas tangible while supporting educators and locally relevant learning.",
        "Elimika hufanya mawazo changamano yaonekane huku ikiunga mkono walimu na ujifunzaji unaofaa mazingira ya hapa."
      )}
      cards={[
        {
          title: content("Mission & team", "Dhamira na timu"),
          description: content(
            "Meet the people and principles behind Elimika.",
            "Kutana na watu na misingi iliyo nyuma ya Elimika."
          ),
          icon: School,
        },
        {
          title: content("Impact & outcomes", "Athari na matokeo"),
          description: content(
            "See how we assess learning and institutional impact.",
            "Tazama jinsi tunavyotathmini ujifunzaji na athari za taasisi."
          ),
          href: "/impact",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function CareersPage() {
  return (
    <ElimikaPage
      eyebrow={content("Careers", "Kazi")}
      title={content(
        "Build the future of African education in three dimensions.",
        "Jenga mustakabali wa elimu ya Afrika katika vipimo vitatu."
      )}
      description={content(
        "Join a team working across education, spatial computing, research, and institutional partnerships.",
        "Jiunge na timu inayofanya kazi katika elimu, kompyuta za anga, utafiti na ushirikiano wa taasisi."
      )}
      cards={[
        {
          title: content("Open roles", "Nafasi zilizo wazi"),
          description: content(
            "Explore current opportunities and the skills we value.",
            "Chunguza fursa za sasa na stadi tunazothamini."
          ),
          icon: GraduationCap,
        },
        {
          title: content("Meet the team", "Kutana na timu"),
          description: content(
            "Learn about the people building Elimika.",
            "Fahamu watu wanaojenga Elimika."
          ),
          href: "/about",
          icon: School,
        },
      ]}
    />
  )
}
export function ContactPage() {
  return (
    <ElimikaPage
      eyebrow={content("Contact Elimika", "Wasiliana na Elimika")}
      title={content(
        "Empower your learners with modern spatial science.",
        "Wape wanafunzi uwezo kupitia sayansi ya kisasa ya anga."
      )}
      description={content(
        "Tell us about your school, university, or training institution and the learning goals you are working toward.",
        "Tuambie kuhusu shule, chuo au taasisi yako ya mafunzo na malengo ya ujifunzaji unayolenga."
      )}
      cards={[
        {
          title: content(
            "Choose a learning track",
            "Chagua mkondo wa ujifunzaji"
          ),
          description: content(
            "Compare K-12, higher education, TVET, and educator solutions.",
            "Linganisha suluhisho za K-12, elimu ya juu, TVET na walimu."
          ),
          href: "/solutions",
          icon: GraduationCap,
        },
        {
          title: content("Plan an engagement", "Panga ushirikiano"),
          description: content(
            "Review institutional options before requesting a demo.",
            "Kagua chaguo za taasisi kabla ya kuomba onyesho."
          ),
          href: "/pricing",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
