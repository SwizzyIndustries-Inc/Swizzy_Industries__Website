"use client"

import Link from "next/link"
import {
  ArrowRight,
  Atom,
  BookOpen,
  FlaskConical,
  GraduationCap,
  School,
  Timer,
  Wrench,
} from "lucide-react"
import { useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const tracks = [
  {
    title: "Junior & Senior School",
    label: "K-12 CBC",
    description:
      "Immersive science, history, and language learning aligned to Kenya's curriculum.",
    href: "/solutions/k-12",
    icon: School,
    color: "var(--track-k12)",
  },
  {
    title: "University Faculty",
    label: "Higher education",
    description:
      "Virtual laboratories and spatial research for university programs.",
    href: "/solutions/higher-education",
    icon: GraduationCap,
    color: "var(--track-highered)",
  },
  {
    title: "Vocational Labs",
    label: "TVET & skills",
    description:
      "Repeatable simulations for practical, high-skill technical training.",
    href: "/solutions/tvet-skills",
    icon: Wrench,
    color: "var(--track-tvet)",
  },
  {
    title: "Institutional Suite",
    label: "Educators",
    description:
      "Classroom tools, learner insight, and support for teaching teams.",
    href: "/solutions/educators-institutions",
    icon: BookOpen,
    color: "var(--track-educator)",
  },
]

const labs = [
  {
    category: "medical",
    track: "Higher education",
    title: "Molecular Biochemistry",
    detail: "DNA transcription & protein synthesis",
    description:
      "Explore codon translation and protein folding in an interactive molecular sandbox.",
    duration: "45 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA75F8oFM9bo6UjQnkd983hy9E7xDlJmmDDhQ0GsLHTLBliOVziXluBKBvtrMfvjFkczGqB8aPmW07uPpEwrL-b1GF3r4_EHDIwjDM9IXDgAI-NxGvM1GnF8y8BMDlpqwWeXezibzRsvok5gjLlXOxBOflIrPiTbmdYGF-mOQ-IwxL8NbtwAleORB7Jad_DTSx5sAT7MZotGUA9bLNn5t0RErJCIwX8gqitkkSpJ_HPqHE507Dw91vn_w",
    alt: "Three-dimensional DNA strand visualization in a molecular learning lab",
    icon: Atom,
  },
  {
    category: "physics",
    track: "K-12 CBC",
    title: "Hydraulic Pressure",
    detail: "Grade 9 fluid mechanics",
    description:
      "Test mechanical advantage through changing piston size, force, and fluid density.",
    duration: "30 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkBMhPV9NZt-pYyO4DiEYL81RZ8GrhQkojWYL7XHaScok3f4mgx6rkojgKBvPpL3eJjXMjqqhhKwZDTXtvpjBw_nXF1ES9UbZMDQ9Tg24yni_DrAvI3VSZmn3cuMJ4HvVjVKptQ8XS7850X2FrOqxlpb4NpU3RErz92qDTALhjGUylf1uy0B3GQxkCuDo5imfZYsRHphWkbu1RmxBdf4qBq1NpcLuIMxUpHJz96H9i3bzZ3B7sViw1Ng",
    alt: "Interactive hydraulic piston and fluid pressure simulation",
    icon: FlaskConical,
  },
  {
    category: "tvet",
    track: "TVET skills",
    title: "MIG & Arc Welding",
    detail: "Safety and weld-pool technique",
    description:
      "Practice torch angle, heat control, and workshop safety in a repeatable simulation.",
    duration: "60 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEjSENg4I6nFOHYV0bNSGakTxhrExo7cFKHutCHXr5-5gKrmaHw4nR3mEGCxfDaUsBwLw26uISGqlMPfsW3htJNobyVi3Q8uzp7bIwDaksKSmvxzzjoxd-XCDWPecS7OybItxdC_1ZIcfT9oUvDljnmF3afzYEwi-HG9UiybFVrQeJIzPhV_VarQ22teDjgy_lGu1esxXs2guqqO3962uPaN_i4zY9c-O5NASSr5c7n8Zwdl23fG0kpQ",
    alt: "Virtual welding practice with a guided safety interface",
    icon: Wrench,
  },
  {
    category: "history",
    track: "K-12 humanities",
    title: "Historic East Africa",
    detail: "Trade routes & Swahili Coast architecture",
    description:
      "Explore Indian Ocean trade and the coral-stone architecture of the Swahili coast.",
    duration: "35 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrP2R5OhZBcIC8wjDpMPT0Qo33cHyzQJusEr7BwdOoOMN1MchYt1SBHfG9yXxkEO7gWDFj6fnQeHZw2abrUry-dQ8J9oTr4gG3IsyAk1VkU5ypCzVxoWfj_8p8hRKi24PPrADSHuI6UowOoRThiVP8B4DPtJLlsExNC_ZPV4feIpeqBva2-PtDYg5OV2_GwekYoQw4Fhf7kv-MNWAwz9Ec3Wuaa9ziqzxCehyL-xL_DAe9M0NFrZ1OBg",
    alt: "Reconstruction of Swahili coast architecture and Indian Ocean trade",
    icon: BookOpen,
  },
]

const filters = [
  { value: "all", label: "All labs" },
  { value: "physics", label: "Physics & chemistry" },
  { value: "medical", label: "Medical & life sciences" },
  { value: "tvet", label: "TVET trades" },
  { value: "history", label: "African history" },
]

export function LearningTracksSection() {
  const { language } = useLanguage()

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Pedagogical frameworks", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Learning architectures for every level", language)}
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {translate(
                "Purpose-built for Kenya's competency frameworks and technical programs.",
                language
              )}
            </p>
          </div>
          <Button
            render={<Link href="/solutions" />}
            nativeButton={false}
            variant="ghost"
            className="w-fit px-0"
          >
            {translate("View all solutions", language)}{" "}
            <ArrowRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map(
            ({ title, label, description, href, icon: Icon, color }) => (
              <Card
                key={label}
                className="rounded-lg transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="outline" className="rounded-md">
                      {translate(label, language)}
                    </Badge>
                    <Icon
                      aria-hidden="true"
                      className="size-5 shrink-0"
                      style={{ color }}
                    />
                  </div>
                  <CardTitle className="text-lg">
                    {translate(title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(description, language)}
                  </p>
                </CardHeader>
                <CardFooter className="border-t border-border bg-transparent">
                  <Link
                    href={href}
                    className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {translate("Explore track", language)}{" "}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export function LabCatalogSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { language } = useLanguage()
  const visibleLabs =
    activeFilter === "all"
      ? labs
      : labs.filter((lab) => lab.category === activeFilter)

  return (
    <section
      id="lab-catalog"
      className="scroll-mt-24 border-y border-border bg-muted/50 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Laboratory repository", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Virtual labs made for active learning", language)}
            </h2>
          </div>
          <Tabs value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-lg p-1 lg:w-auto">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter.value}
                  value={filter.value}
                  className="min-h-9 flex-none px-3 data-active:bg-background"
                >
                  {translate(filter.label, language)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleLabs.map((lab) => {
            const Icon = lab.icon
            return (
              <Card key={lab.title} className="rounded-lg">
                <ImagePanel
                  src={lab.image}
                  alt={translate(lab.alt, language)}
                  className="aspect-[1.55] w-full bg-muted"
                />
                <CardHeader className="gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="secondary"
                      className="max-w-[70%] truncate rounded-md"
                    >
                      {translate(lab.track, language)}
                    </Badge>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                      <Timer aria-hidden="true" className="size-3.5" />
                      {translate(lab.duration, language)}
                    </span>
                  </div>
                  <CardTitle className="text-base">
                    {translate(lab.title, language)}
                  </CardTitle>
                  <p className="text-xs font-medium text-primary">
                    {translate(lab.detail, language)}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(lab.description, language)}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    render={<Link href="/labs" />}
                    nativeButton={false}
                    variant="outline"
                    className="w-full"
                  >
                    <Icon aria-hidden="true" data-icon="inline-start" />
                    {translate("Explore module", language)}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
