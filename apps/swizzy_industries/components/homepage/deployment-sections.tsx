import { SectionHeading } from "@/components/homepage/shared"

const deploymentSteps = [
  {
    number: "01",
    title: "Needs assessment",
    description:
      "Institutional audit of curriculum priorities, clinical throughput, network parameters, and facility readiness.",
    timing: "Weeks 1-2",
    color: "bg-blue-tint text-blue-primary",
  },
  {
    number: "02",
    title: "Solution tailoring",
    description:
      "Custom virtual models, CBC-aligned modules, and surgical protocols matched to your syllabus and regional accreditations.",
    timing: "Weeks 3-6",
    color: "bg-teal-tint text-teal-accent",
  },
  {
    number: "03",
    title: "Deploy & empower",
    description:
      "Turnkey device delivery, train-the-trainer workshops, technical care, and ongoing firmware updates.",
    timing: "Ongoing partnership",
    color: "bg-orange-50 text-orange-700",
  },
]

export function DeploymentSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Deployment blueprint"
          title="How we partner with your institution"
          description="A clear transition from operational assessment to self-sustaining spatial computing infrastructure."
        />
        <ol className="grid gap-5 md:grid-cols-3 lg:gap-8">
          {deploymentSteps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-border bg-muted/70 p-6 transition hover:bg-white hover:shadow-medium sm:p-8"
            >
              <div className="space-y-4">
                <span
                  className={`flex size-12 items-center justify-center rounded-xl text-lg font-bold ${step.color}`}
                >
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-navy-deep">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-muted">
                  {step.description}
                </p>
              </div>
              <span className="mt-6 inline-flex w-fit rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-slate-body">
                {step.timing}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const impactStats = [
  {
    label: "Reach",
    value: "24,000+",
    title: "Learners reached",
    detail: "Across primary, secondary, and tertiary hubs",
  },
  {
    label: "Healthcare",
    value: "1,450+",
    title: "Clinicians trained",
    detail: "Doctors, nurses, and biomedical interns",
  },
  {
    label: "Network",
    value: "48",
    title: "Partner institutions",
    detail: "Teaching hospitals, TVETs, and polytechnics",
  },
  {
    label: "Counties",
    value: "14",
    title: "Counties in Kenya",
    detail: "Active decentralized rollouts",
  },
]

export function ImpactStatsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1b5fc1_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-2 gap-4 px-5 sm:gap-6 sm:px-8 lg:grid-cols-4">
        {impactStats.map((stat, index) => (
          <article
            key={stat.label}
            className="flex min-h-48 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-7"
          >
            <span
              className={`mb-2 text-xs font-semibold tracking-wider uppercase ${index % 2 ? "text-blue-300" : "text-teal-300"}`}
            >
              {stat.label}
            </span>
            <strong className="font-heading text-3xl font-extrabold sm:text-5xl">
              {stat.value}
            </strong>
            <span className="mt-2 text-sm font-semibold text-slate-100">
              {stat.title}
            </span>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              {stat.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
