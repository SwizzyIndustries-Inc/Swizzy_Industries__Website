"use client"

import { useState, type FormEvent } from "react"
import { Save } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { useLanguage } from "@/components/language-provider"

type IssueDraft = {
  title: string
  location: string
  context: string
  evidence: string
  savedAt: string
}

export function RaiseIssueForm() {
  const { language } = useLanguage()
  const [saved, setSaved] = useState(false)
  const sw = language === "sw"

  function saveDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const draft: IssueDraft = {
      title: String(data.get("title") ?? ""),
      location: String(data.get("location") ?? ""),
      context: String(data.get("context") ?? ""),
      evidence: String(data.get("evidence") ?? ""),
      savedAt: new Date().toISOString(),
    }
    window.localStorage.setItem("wajibika-issue-draft", JSON.stringify(draft))
    setSaved(true)
  }

  return (
    <form
      onSubmit={saveDraft}
      className="space-y-4 rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      <div>
        <label
          htmlFor="issue-title"
          className="mb-1.5 block text-sm font-medium"
        >
          {sw ? "Suala ni nini?" : "What is the issue?"}
        </label>
        <Input id="issue-title" name="title" required maxLength={120} />
      </div>
      <div>
        <label
          htmlFor="issue-location"
          className="mb-1.5 block text-sm font-medium"
        >
          {sw ? "Liko wapi?" : "Where is it happening?"}
        </label>
        <Input
          id="issue-location"
          name="location"
          required
          maxLength={120}
          placeholder={
            sw ? "Kaunti, eneo au jamii" : "County, area, or community"
          }
        />
      </div>
      <div>
        <label
          htmlFor="issue-context"
          className="mb-1.5 block text-sm font-medium"
        >
          {sw ? "Muktadha" : "Context"}
        </label>
        <Textarea
          id="issue-context"
          name="context"
          required
          maxLength={2000}
          rows={4}
          placeholder={
            sw
              ? "Eleza kile ulichoona na kwa nini ni muhimu."
              : "Describe what you observed and why it matters."
          }
        />
      </div>
      <div>
        <label
          htmlFor="issue-evidence"
          className="mb-1.5 block text-sm font-medium"
        >
          {sw ? "Chanzo au ushahidi (hiari)" : "Source or evidence (optional)"}
        </label>
        <Textarea
          id="issue-evidence"
          name="evidence"
          maxLength={1000}
          rows={3}
          placeholder={
            sw
              ? "Ongeza kiungo au maelezo ya chanzo."
              : "Add a link or describe the source."
          }
        />
      </div>
      <div className="rounded-lg bg-muted p-3 text-sm leading-6 text-muted-foreground">
        {sw
          ? "Rasimu hii huhifadhiwa kwenye kifaa hiki pekee. Haitumwi wala kuchapishwa."
          : "This draft is saved on this device only. It is not sent or published."}
      </div>
      <Button type="submit" className="h-11 rounded-xl">
        {sw ? "Hifadhi rasimu" : "Save draft"}
        <Save aria-hidden="true" className="ml-2 size-4" />
      </Button>
      {saved && (
        <p role="status" className="text-sm font-medium text-primary">
          {sw
            ? "Rasimu imehifadhiwa kwenye kifaa hiki."
            : "Draft saved on this device."}
        </p>
      )}
    </form>
  )
}
