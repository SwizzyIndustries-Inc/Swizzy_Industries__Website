"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

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
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
    window.localStorage.setItem(languageStorageKey, language)
  }, [language])

  function setLanguage(nextLanguage: Language) {
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
