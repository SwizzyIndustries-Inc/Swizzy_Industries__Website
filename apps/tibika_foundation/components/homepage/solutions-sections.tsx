"use client"

import Link from "next/link"
import {
  ArrowRight,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Timer,
} from "lucide-react"
import { useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { translate, useLanguage } from "@/components/language-provider"
import { ImagePanel } from "@/components/homepage/shared"

const domains = [
  {
    title: "Clinical training",
    description: "Rehearse procedures and equipment workflows in simulation.",
    href: "/solutions/clinical-training",
    icon: Stethoscope,
    color: "var(--chart-3)",
    result: "Repeatable practice with review safeguards.",
  },
  {
    title: "Medical research",
    description: "Explore spatial models and research simulation tools.",
    href: "/solutions/medical-research",
    icon: Microscope,
    color: "var(--chart-1)",
    result: "Research workflows with clear context.",
  },
  {
    title: "Patient care & wellbeing",
    description:
      "Consider clinician-supervised care and rehabilitation contexts.",
    href: "/solutions/patient-care",
    icon: HeartPulse,
    color: "var(--chart-2)",
    result: "Patient-centered care and consent.",
  },
]

const modules = [
  {
    category: "clinical",
    type: "Clinical training",
    title: "Pediatric airway management",
    description:
      "Practice anatomical orientation and airway response in a supervised simulation context.",
    level: "Resident / registrar",
    duration: "25 min",
    note: "Simulation module · Review required",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcJ-vF1smcfDyjWd8qzbJ3FgqsPggtm4iUU1KWYX05VkIXWvLC4NGikClH93PDB2Bfs6ZF4EugnoNccPLQMp8QagFbzDQjDvYYOwrY69KlAkvdsj0jfWH286BN48qps7NjfilGGhsOw_yeuPhsUfsZ_H2fqtuE9stpAirVk-xett_0UdEtVHsi3SNRlz2eit1add3vWUJWP4B_FrrZ2d7nTYazORU68icz0rtSuSAtUKqiqcbmnti3vg",
    alt: "Clinical simulation station for supervised airway management practice",
  },
  {
    category: "research",
    type: "Research & simulation",
    title: "Volumetric cranial visualization",
    description:
      "Explore spatial anatomy models with a guided research-oriented workflow.",
    level: "Research team",
    duration: "Interactive",
    note: "Spatial model · Data governance applies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSvX7lvFAf83mnEF5JXomzraZZtLohOK2mqHNaDAuTZg7nXvQJSxo8QWYTV9snBkzVItebHjvQX03GmL4R-YurRmY6dNhP1MQ7n-ddpMp5PIO5zUGxUu2Cu-NdYaF3Sogj7OYbxcK96PbN6kdomaSYPO_vT7Hp3WxmCF2WrXrCFUG3W5s2pSGjQpU2j9kiRRGrsMAl_-oDGXAO-vzLzZZCXUGjzc8vB1YzcwsvP14rae0i7PZ1HDPXdg",
    alt: "Research team reviewing a three-dimensional anatomical visualization",
  },
  {
    category: "care",
    type: "Patient care",
    title: "Post-stroke sensorimotor practice",
    description:
      "Explore supervised feedback activities for rehabilitation planning.",
    level: "Clinician supervised",
    duration: "15 min",
    note: "Care context · Clinician oversight",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjsXO9i28uj3o3nTGugmWT1KC2DGZYWSaX4lYXzEVmvkn6K6wPEGsIN-OMwQm1GDP8xVbFtf0HM0Z5PLZElVVnBFL3CSP_UmTkaRlFOIRJMMhmBXlou-I4x2grZ7HSI2Cf6dxWbRvm9lqsS1ufLKKt-jQxdZBV2lyNS6jJtX7m6w5qgEwfTnLtU5fVoCIb9kIIu-v7z4PCFhgPhYAtfreUT2UFUjHZlfNSdhbOI2ivS7qLfSOzv4mrDg",
    alt: "Clinical team reviewing a guided rehabilitation session",
  },
  {
    category: "clinical",
    type: "Clinical training",
    title: "Laparoscopic instrument rehearsal",
    description:
      "Review instrument handling and procedural workflow in a training simulation.",
    level: "Surgical trainee",
    duration: "40 min",
    note: "Skills rehearsal · Instructor review",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCscE9lQMOFhOQkkU7MiLUKDGw2Fyg82W8AGwGLEPgOxbQVXEbOyqLmL_bvSxv-Et7-v9Fj28RO9MwftmHwPOvuBJ5cduy_ytp96R2MGxDmR0w2sH7BLLIWuIIGBIawRa1tWyz1arRbg7E7YdUBnhwyu9k8ZeFgiaUPXPTRVHwKPtC55bgZ7nJrjrvhsTUZwx0d2g3t1UM7EJMO1ZWMXeGflbNLB6GJImbZ1MSTOLK37sIHdCjQEsT6",
    alt: "Resident using a clinical simulation headset in a training room",
  },
]

const filters = [
  { value: "all", label: "All modules" },
  { value: "clinical", label: "Clinical training" },
  { value: "research", label: "Research" },
  { value: "care", label: "Patient care" },
]

export function DomainSection() {
  const { language } = useLanguage()
  return (
    <section className="bg-muted/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] space-y-8 px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold text-primary uppercase">
            {translate("Three specialized pillars", language)}
          </p>
          <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
            {translate(
              "Engineered for clinicians, researchers, and patients",
              language
            )}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {translate(
              "Modular virtual environments developed for training, research, and care contexts.",
              language
            )}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {domains.map(
            ({ title, description, href, icon: Icon, color, result }) => (
              <Card
                key={title}
                className="relative overflow-hidden rounded-xl border-t-2"
                style={{ borderTopColor: color }}
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit rounded-md">
                    {translate(title, language)}
                  </Badge>
                  <CardTitle className="pt-2 text-lg">
                    {translate(title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(description, language)}
                  </p>
                  <p className="mt-2 rounded-md bg-muted p-3 text-xs text-muted-foreground">
                    <strong className="block text-primary">
                      {translate("Designed for", language)}
                    </strong>
                    {translate(result, language)}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    render={<Link href={href} />}
                    nativeButton={false}
                    variant="link"
                    className="h-9 px-0"
                  >
                    {translate("Explore solution", language)}
                    <ArrowRight aria-hidden="true" data-icon="inline-end" />
                  </Button>
                </CardContent>
                <Icon
                  aria-hidden="true"
                  className="absolute top-5 right-5 size-5 opacity-50"
                  style={{ color }}
                />
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export function SimulationCatalogSection() {
  const [filter, setFilter] = useState("all")
  const { language } = useLanguage()
  const visibleModules =
    filter === "all"
      ? modules
      : modules.filter((module) => module.category === filter)
  return (
    <section
      id="simulation-catalog"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-primary uppercase">
              {translate("Curriculum modules", language)}
            </p>
            <h2 className="font-heading text-3xl font-bold text-balance sm:text-4xl">
              {translate("Standardized clinical catalog", language)}
            </h2>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="h-auto w-full flex-wrap justify-start md:w-auto">
              {filters.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="min-h-9"
                >
                  {translate(item.label, language)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visibleModules.map((module) => (
            <Card
              key={module.title}
              className="overflow-hidden rounded-xl sm:grid sm:grid-cols-[0.65fr_1fr]"
            >
              <ImagePanel
                src={module.image}
                alt={translate(module.alt, language)}
                className="aspect-[1.4] w-full bg-muted sm:aspect-auto sm:min-h-full"
              />
              <div className="flex flex-col justify-between">
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="secondary" className="rounded-md">
                      {translate(module.type, language)}
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Timer aria-hidden="true" className="size-3.5" />
                      {translate(module.duration, language)}
                    </span>
                  </div>
                  <CardTitle className="text-base">
                    {translate(module.title, language)}
                  </CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {translate(module.description, language)}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 rounded-md bg-muted p-2.5 text-xs text-muted-foreground">
                    {translate("Intended level", language)}:{" "}
                    <strong className="text-foreground">
                      {translate(module.level, language)}
                    </strong>
                  </p>
                  <Badge variant="outline" className="rounded-md">
                    <ShieldCheck aria-hidden="true" data-icon="inline-start" />
                    {translate(module.note, language)}
                  </Badge>
                  <Button
                    render={<Link href="/catalog" />}
                    nativeButton={false}
                    variant="outline"
                    className="mt-4 w-full"
                  >
                    {translate("View module details", language)}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
