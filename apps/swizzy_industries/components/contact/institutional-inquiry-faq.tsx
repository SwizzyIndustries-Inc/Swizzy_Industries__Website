import { ContentSection } from "@/components/shared"

export function InstitutionalInquiryFaq() {
  return (
    <ContentSection
      eyebrow="Institutional inquiries FAQ"
      title="A few useful details"
    >
      <div className="divide-y divide-border rounded-xl border border-border bg-card px-5">
        {[
          [
            "What should I include in my inquiry?",
            "A short description of your audience, goals, timeline, and existing devices helps us route the conversation.",
          ],
          [
            "Can we arrange an in-person discussion?",
            "Yes. Contact the team to arrange a visit or meeting in Nairobi.",
          ],
          [
            "Do you work with schools and hospitals outside Nairobi?",
            "Yes. We discuss connectivity, device availability, and local support as part of scoping.",
          ],
          [
            "How do I contact the team directly?",
            "Email info@swizzy.co.ke or call +254 (0) 20 794 3000.",
          ],
        ].map(([question, answer]) => (
          <details key={question} className="group py-4">
            <summary className="cursor-pointer list-none font-medium text-foreground">
              <span className="flex items-center justify-between gap-4">
                {question}
                <span className="text-primary group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="pt-3 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </ContentSection>
  )
}
