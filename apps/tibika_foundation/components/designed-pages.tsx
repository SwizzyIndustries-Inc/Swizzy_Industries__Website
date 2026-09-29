"use client"

import Link from "next/link"
import {
  ArrowRight,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
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
const copy = (en: string, sw: string): Copy => ({ en, sw })

function TibikaPage({
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
            <div className="mb-8 flex gap-3 rounded-xl border border-border bg-muted p-4 text-sm leading-6">
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
                Tibika clinical technology
              </p>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">
                {sw ? "Mazingira ya kitabibu" : "Clinical context"}
              </h2>
            </div>
            <HeartPulse
              aria-hidden="true"
              className="hidden size-8 text-primary sm:block"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon ?? ClipboardCheck
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
              Tibika
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              {sw
                ? "Fanya mazoezi kwa usahihi. Linda maisha."
                : "Practice precision. Protect life."}
            </h2>
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

export function SolutionsPage() {
  return (
    <TibikaPage
      eyebrow={copy(
        "Clinical & research solutions",
        "Suluhisho za kitabibu na utafiti"
      )}
      title={copy(
        "Engineered for clinical practice, research, and patient wellbeing.",
        "Imeundwa kwa mazoezi ya kitabibu, utafiti na ustawi wa wagonjwa."
      )}
      description={copy(
        "Explore simulation tools for clinical training, medical research, and clinician-supervised care.",
        "Chunguza zana za uigaji kwa mafunzo ya kitabibu, utafiti wa afya na utunzaji unaosimamiwa na wahudumu wa afya."
      )}
      cards={[
        {
          title: copy("Clinical training", "Mafunzo ya kitabibu"),
          description: copy(
            "Rehearse procedures and equipment workflows in simulation.",
            "Fanya mazoezi ya taratibu na matumizi ya vifaa katika uigaji."
          ),
          href: "/solutions/clinical-training",
          icon: Stethoscope,
        },
        {
          title: copy("Research & simulation", "Utafiti na uigaji"),
          description: copy(
            "Explore spatial tools for research and model review.",
            "Chunguza zana za anga kwa utafiti na mapitio ya mifano."
          ),
          href: "/solutions/medical-research",
          icon: Microscope,
        },
        {
          title: copy(
            "Patient care & wellbeing",
            "Utunzaji na ustawi wa wagonjwa"
          ),
          description: copy(
            "Review clinician-supervised care and rehabilitation experiences.",
            "Kagua uzoefu wa utunzaji na urekebishaji unaosimamiwa kitabibu."
          ),
          href: "/solutions/patient-care",
          icon: HeartPulse,
        },
      ]}
    />
  )
}
export function ClinicalTrainingPage() {
  return (
    <TibikaPage
      eyebrow={copy("Clinical training", "Mafunzo ya kitabibu")}
      title={copy(
        "Repeatable clinical procedures in a controlled virtual environment.",
        "Taratibu za kitabibu zinazoweza kurudiwa katika mazingira pepe yanayodhibitiwa."
      )}
      description={copy(
        "Simulation provides a structured setting to rehearse procedures, equipment workflows, and emergency-response scenarios.",
        "Uigaji hutoa mazingira yaliyopangwa ya kufanya mazoezi ya taratibu, matumizi ya vifaa na hali za kukabiliana na dharura."
      )}
      cards={[
        {
          title: copy("Procedure rehearsal", "Mazoezi ya taratibu"),
          description: copy(
            "Review a procedure through a repeatable learning scenario.",
            "Kagua utaratibu kupitia hali ya mafunzo inayoweza kurudiwa."
          ),
          href: "/catalog",
          icon: Stethoscope,
        },
        {
          title: copy("Equipment workflows", "Matumizi ya vifaa"),
          description: copy(
            "Practice equipment sequences in a simulated environment.",
            "Fanya mazoezi ya hatua za kutumia vifaa katika mazingira ya uigaji."
          ),
          href: "/catalog",
          icon: ClipboardCheck,
        },
        {
          title: copy("Institutional review", "Mapitio ya taasisi"),
          description: copy(
            "Discuss training and review requirements with the Tibika team.",
            "Jadili mahitaji ya mafunzo na mapitio na timu ya Tibika."
          ),
          href: "/contact",
          icon: ShieldCheck,
        },
      ]}
      notice={copy(
        "Simulation supports rehearsal and education. It is not clinical guidance and does not replace supervised training or professional judgment.",
        "Uigaji husaidia mazoezi na elimu. Si mwongozo wa kitabibu wala mbadala wa mafunzo yanayosimamiwa au uamuzi wa kitaalamu."
      )}
    />
  )
}
export function MedicalResearchPage() {
  return (
    <TibikaPage
      eyebrow={copy(
        "Medical research & simulation",
        "Utafiti na uigaji wa afya"
      )}
      title={copy(
        "Spatial modeling for biomedical research and simulation.",
        "Uundaji wa mifano ya anga kwa utafiti na uigaji wa afya ya viumbe."
      )}
      description={copy(
        "Explore tools for researchers to visualize models, examine scenarios, and discuss simulation needs.",
        "Chunguza zana za watafiti za kuona mifano, kuchunguza hali na kujadili mahitaji ya uigaji."
      )}
      cards={[
        {
          title: copy("Simulation catalog", "Katalogi ya uigaji"),
          description: copy(
            "Review available modules and simulation examples.",
            "Kagua moduli na mifano ya uigaji inayopatikana."
          ),
          href: "/catalog",
          icon: Microscope,
        },
        {
          title: copy("Evidence and outcomes", "Ushahidi na matokeo"),
          description: copy(
            "Read how evidence and limitations are communicated.",
            "Soma jinsi ushahidi na mipaka yake inavyowasilishwa."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
        {
          title: copy("Research consultation", "Ushauri wa utafiti"),
          description: copy(
            "Share your research context and technical requirements.",
            "Shiriki mazingira ya utafiti na mahitaji ya kiufundi."
          ),
          href: "/contact",
          icon: HeartPulse,
        },
      ]}
    />
  )
}
export function PatientCarePage() {
  return (
    <TibikaPage
      eyebrow={copy(
        "Patient care & wellbeing",
        "Utunzaji na ustawi wa wagonjwa"
      )}
      title={copy(
        "Clinician-supervised VR for care and rehabilitation.",
        "VR ya utunzaji na urekebishaji inayosimamiwa na wahudumu wa afya."
      )}
      description={copy(
        "Explore patient-adjacent experiences designed to be reviewed and used under appropriate clinical supervision.",
        "Chunguza uzoefu unaohusiana na wagonjwa ulioundwa kukaguliwa na kutumiwa chini ya usimamizi unaofaa wa kitabibu."
      )}
      cards={[
        {
          title: copy("Clinical oversight", "Usimamizi wa kitabibu"),
          description: copy(
            "Care experiences require appropriate professional review.",
            "Uzoefu wa utunzaji unahitaji mapitio yanayofaa ya kitaalamu."
          ),
          href: "/compliance",
          icon: ShieldCheck,
        },
        {
          title: copy("Simulation catalog", "Katalogi ya uigaji"),
          description: copy(
            "Explore modules and their intended settings.",
            "Chunguza moduli na mazingira yaliyokusudiwa."
          ),
          href: "/catalog",
          icon: HeartPulse,
        },
      ]}
      notice={copy(
        "Experiences described here are not a diagnosis or treatment recommendation. Use requires appropriate clinical review and supervision.",
        "Uzoefu unaoelezwa hapa si utambuzi wala pendekezo la matibabu. Matumizi yanahitaji mapitio na usimamizi unaofaa wa kitabibu."
      )}
    />
  )
}
export function CatalogPage() {
  return (
    <TibikaPage
      eyebrow={copy("Simulation catalog", "Katalogi ya uigaji")}
      title={copy(
        "Verified simulation and module catalog.",
        "Katalogi ya uigaji na moduli zilizokaguliwa."
      )}
      description={copy(
        "Review simulation subjects, intended learning settings, and available institutional information.",
        "Kagua mada za uigaji, mazingira ya ujifunzaji yaliyokusudiwa na taarifa za taasisi zinazopatikana."
      )}
      cards={[
        {
          title: copy("Clinical training", "Mafunzo ya kitabibu"),
          description: copy(
            "Procedure and equipment rehearsal scenarios.",
            "Hali za mazoezi ya taratibu na vifaa."
          ),
          href: "/solutions/clinical-training",
          icon: Stethoscope,
        },
        {
          title: copy("Medical research", "Utafiti wa afya"),
          description: copy(
            "Spatial modeling and research-focused simulation.",
            "Uundaji wa mifano ya anga na uigaji unaolenga utafiti."
          ),
          href: "/solutions/medical-research",
          icon: Microscope,
        },
        {
          title: copy("Evidence and outcomes", "Ushahidi na matokeo"),
          description: copy(
            "Read about review practices and published evidence.",
            "Soma kuhusu taratibu za mapitio na ushahidi uliochapishwa."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
      ]}
      notice={copy(
        "Catalog examples describe intended contexts and do not establish clinical effectiveness.",
        "Mifano ya katalogi inaeleza mazingira yaliyokusudiwa na haithibitishi ufanisi wa kitabibu."
      )}
    />
  )
}
export function EvidencePage() {
  return (
    <TibikaPage
      eyebrow={copy("Evidence & outcomes", "Ushahidi na matokeo")}
      title={copy(
        "Evidence, multicenter research, and clinical outcomes.",
        "Ushahidi, utafiti wa vituo vingi na matokeo ya kitabibu."
      )}
      description={copy(
        "We distinguish published evidence, ongoing research, and illustrative examples; simulation content is not clinical guidance.",
        "Tunatofautisha ushahidi uliochapishwa, utafiti unaoendelea na mifano ya maelezo; maudhui ya uigaji si mwongozo wa kitabibu."
      )}
      cards={[
        {
          title: copy("Research publications", "Machapisho ya utafiti"),
          description: copy(
            "Review research notes and publications with their context.",
            "Kagua taarifa na machapisho ya utafiti pamoja na muktadha wake."
          ),
          href: "/publications",
          icon: Microscope,
        },
        {
          title: copy("Compliance and ethics", "Uzingatiaji na maadili"),
          description: copy(
            "Read about clinical review, consent, and data safeguards.",
            "Soma kuhusu mapitio ya kitabibu, idhini na ulinzi wa data."
          ),
          href: "/compliance",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function CaseStudiesPage() {
  return (
    <TibikaPage
      eyebrow={copy(
        "Hospital & academic case studies",
        "Masomo ya mifano ya hospitali na vyuo"
      )}
      title={copy(
        "Institutional examples, with context.",
        "Mifano ya taasisi, ikiwa na muktadha."
      )}
      description={copy(
        "Explore institutional examples and keep illustrative information distinct from verified outcomes.",
        "Chunguza mifano ya taasisi na tofautisha taarifa za mfano na matokeo yaliyothibitishwa."
      )}
      cards={[
        {
          title: copy("Clinical training", "Mafunzo ya kitabibu"),
          description: copy(
            "See how institutions approach repeatable simulation practice.",
            "Tazama jinsi taasisi zinavyotumia mazoezi ya uigaji yanayorudiwa."
          ),
          href: "/solutions/clinical-training",
          icon: Stethoscope,
        },
        {
          title: copy("Evidence and outcomes", "Ushahidi na matokeo"),
          description: copy(
            "Review the evidence behind reported outcomes.",
            "Kagua ushahidi ulio nyuma ya matokeo yaliyoripotiwa."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
      ]}
    />
  )
}
export function PricingPage() {
  return (
    <TibikaPage
      eyebrow={copy("Institutional engagement", "Ushirikiano wa taasisi")}
      title={copy(
        "Predictable engagement for clinical education and research.",
        "Ushirikiano unaotabirika kwa elimu ya kitabibu na utafiti."
      )}
      description={copy(
        "Engagement models depend on institutional context, simulation scope, equipment, and review requirements.",
        "Miundo ya ushirikiano hutegemea mazingira ya taasisi, wigo wa uigaji, vifaa na mahitaji ya mapitio."
      )}
      cards={[
        {
          title: copy(
            "Hospital and academic teams",
            "Timu za hospitali na vyuo"
          ),
          description: copy(
            "Discuss training and research requirements with our team.",
            "Jadili mahitaji ya mafunzo na utafiti na timu yetu."
          ),
          href: "/contact",
          icon: Stethoscope,
        },
        {
          title: copy("Request a consultation", "Omba ushauri"),
          description: copy(
            "Share your setting and intended use for a tailored discussion.",
            "Shiriki mazingira na matumizi yaliyokusudiwa kwa mazungumzo yanayokufaa."
          ),
          href: "/contact",
          icon: HeartPulse,
        },
      ]}
    />
  )
}
export function AboutPage() {
  return (
    <TibikaPage
      eyebrow={copy("About Tibika", "Kuhusu Tibika")}
      title={copy(
        "Engineering clinical precision and protecting patient life.",
        "Uhandisi wa usahihi wa kitabibu na ulinzi wa maisha ya wagonjwa."
      )}
      description={copy(
        "Tibika develops immersive tools with attention to clinical context, evidence, consent, and the people who provide care.",
        "Tibika hutengeneza zana za ndani kwa kuzingatia muktadha wa kitabibu, ushahidi, idhini na watu wanaotoa huduma."
      )}
      cards={[
        {
          title: copy("Clinical advisory", "Ushauri wa kitabibu"),
          description: copy(
            "Learn about clinical review and advisory oversight.",
            "Jifunze kuhusu mapitio na usimamizi wa ushauri wa kitabibu."
          ),
          href: "/evidence",
          icon: Stethoscope,
        },
        {
          title: copy("Compliance and ethics", "Uzingatiaji na maadili"),
          description: copy(
            "See how consent and health data protections inform our work.",
            "Tazama jinsi idhini na ulinzi wa data ya afya vinavyoongoza kazi yetu."
          ),
          href: "/compliance",
          icon: ShieldCheck,
        },
      ]}
    />
  )
}
export function CareersPage() {
  return (
    <TibikaPage
      eyebrow={copy("Careers", "Kazi")}
      title={copy(
        "Build the spatial computing foundation for East African healthcare.",
        "Jenga msingi wa kompyuta za anga kwa huduma za afya Afrika Mashariki."
      )}
      description={copy(
        "Work across immersive technology, clinical training, research, and care contexts.",
        "Fanya kazi katika teknolojia ya ndani, mafunzo ya kitabibu, utafiti na mazingira ya utunzaji."
      )}
      cards={[
        {
          title: copy("Clinical engineering", "Uhandisi wa kitabibu"),
          description: copy(
            "Explore simulation, spatial computing, and healthcare work.",
            "Chunguza kazi katika uigaji, kompyuta za anga na huduma za afya."
          ),
          href: "/about",
          icon: Stethoscope,
        },
        {
          title: copy("Talk to our team", "Zungumza na timu yetu"),
          description: copy(
            "Share your experience and interests.",
            "Shiriki uzoefu na maslahi yako."
          ),
          href: "/contact",
          icon: HeartPulse,
        },
      ]}
    />
  )
}
export function PublicationsPage() {
  return (
    <TibikaPage
      eyebrow={copy("Publications & research", "Machapisho na utafiti")}
      title={copy(
        "Clinical insights, research, and simulation advances.",
        "Maarifa ya kitabibu, utafiti na maendeleo ya uigaji."
      )}
      description={copy(
        "Read clinical and research publications with clear sourcing and careful interpretation.",
        "Soma machapisho ya kitabibu na utafiti yenye vyanzo wazi na tafsiri makini."
      )}
      cards={[
        {
          title: copy("Evidence and outcomes", "Ushahidi na matokeo"),
          description: copy(
            "Review available evidence and study context.",
            "Kagua ushahidi na muktadha wa tafiti zinazopatikana."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
        {
          title: copy("Research simulation", "Uigaji wa utafiti"),
          description: copy(
            "Explore simulation tools used in research contexts.",
            "Chunguza zana za uigaji zinazotumika katika mazingira ya utafiti."
          ),
          href: "/solutions/medical-research",
          icon: Microscope,
        },
      ]}
    />
  )
}
export function CompliancePage() {
  return (
    <TibikaPage
      eyebrow={copy(
        "Regulatory compliance & ethics",
        "Uzingatiaji wa kanuni na maadili"
      )}
      title={copy(
        "Ethics review and health data safeguards.",
        "Mapitio ya maadili na ulinzi wa data ya afya."
      )}
      description={copy(
        "Clinical use requires appropriate institutional review, consent, and data protections. Tibika tools do not replace professional judgment.",
        "Matumizi ya kitabibu yanahitaji mapitio ya taasisi, idhini na ulinzi wa data unaofaa. Zana za Tibika hazichukui nafasi ya uamuzi wa kitaalamu."
      )}
      cards={[
        {
          title: copy("Consent and ethics", "Idhini na maadili"),
          description: copy(
            "Understand review considerations for patient-adjacent work.",
            "Elewa masuala ya mapitio kwa kazi zinazohusiana na wagonjwa."
          ),
          href: "/about",
          icon: ShieldCheck,
        },
        {
          title: copy("Evidence boundaries", "Mipaka ya ushahidi"),
          description: copy(
            "Distinguish research, illustrative content, and clinical guidance.",
            "Tofautisha utafiti, maudhui ya mfano na mwongozo wa kitabibu."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
      ]}
      notice={copy(
        "This website provides product information, not medical advice. Clinical deployment must follow institutional policy and applicable review.",
        "Tovuti hii hutoa taarifa za bidhaa, si ushauri wa kitabibu. Utekelezaji wa kitabibu lazima ufuate sera za taasisi na mapitio yanayotumika."
      )}
    />
  )
}
export function ContactPage() {
  return (
    <TibikaPage
      eyebrow={copy("Institutional consultation", "Ushauri wa taasisi")}
      title={copy(
        "Schedule a clinical consultation or request a hospital demonstration.",
        "Panga ushauri wa kitabibu au omba onyesho la hospitali."
      )}
      description={copy(
        "Tell us about your clinical, academic, or research setting and the simulation needs you want to discuss.",
        "Tuambie kuhusu mazingira yako ya kitabibu, kitaaluma au utafiti na mahitaji ya uigaji unayotaka kujadili."
      )}
      cards={[
        {
          title: copy(
            "Explore clinical solutions",
            "Chunguza suluhisho za kitabibu"
          ),
          description: copy(
            "Review training, research, and patient-care areas.",
            "Kagua maeneo ya mafunzo, utafiti na utunzaji wa wagonjwa."
          ),
          href: "/solutions",
          icon: HeartPulse,
        },
        {
          title: copy("Review evidence", "Kagua ushahidi"),
          description: copy(
            "See our approach to evidence, safety, and outcomes.",
            "Tazama mbinu yetu ya ushahidi, usalama na matokeo."
          ),
          href: "/evidence",
          icon: ClipboardCheck,
        },
      ]}
    />
  )
}
