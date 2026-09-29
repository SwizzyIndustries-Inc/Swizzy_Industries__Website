"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Language = "en" | "sw"
const languageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)
const storageKey = "nufaika-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey)
    if (saved === "en" || saved === "sw") setLanguageState(saved)
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
