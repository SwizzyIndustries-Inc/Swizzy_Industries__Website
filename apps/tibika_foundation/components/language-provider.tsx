"use client"

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { swahiliTranslations } from "@/components/swahili-translations"

export type Language = "en" | "sw"
const languageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)
const storageKey = "tibika-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey)
    if (saved === "en" || saved === "sw")
      startTransition(() => setLanguageState(saved))
  }, [])
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
    window.localStorage.setItem(storageKey, language)
  }, [language])
  return (
    <languageContext.Provider
      value={{ language, setLanguage: setLanguageState }}
    >
      {children}
    </languageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(languageContext)
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

export function translate(value: string, language: Language) {
  if (language === "en") return value
  return swahiliTranslations.get(value) ?? value
}
