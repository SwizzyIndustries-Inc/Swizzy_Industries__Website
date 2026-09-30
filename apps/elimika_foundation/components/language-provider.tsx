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
export type LocalizedText = { en: string; sw: string }

const languageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

const languageStorageKey = "elimika-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey)
    if (savedLanguage === "en" || savedLanguage === "sw") {
      startTransition(() => setLanguageState(savedLanguage))
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
  }, [language])

  function setLanguage(nextLanguage: Language) {
    window.localStorage.setItem(languageStorageKey, nextLanguage)
    setLanguageState(nextLanguage)
  }

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
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

export function text(en: string, sw: string, language: Language) {
  return language === "sw" ? sw : en
}

export function translate(value: string, language: Language) {
  if (language === "en") return value
  return swahiliTranslations.get(value) ?? value
}
