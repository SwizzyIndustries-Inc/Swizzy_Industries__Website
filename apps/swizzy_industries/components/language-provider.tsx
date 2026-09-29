"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { swahiliTranslations } from "@/components/swahili-translations"

type Language = "en" | "sw"

type TranslationEntry = {
  source: string
  rendered: string
}

const LANGUAGE_STORAGE_KEY = "swizzy-language"
const translatedNodes = new WeakMap<Text, TranslationEntry>()
const translatedAttributes = new WeakMap<
  Element,
  Map<string, TranslationEntry>
>()

const languageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
} | null>(null)

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

function translateValue(value: string, language: Language) {
  if (language === "en") return value
  const key = normalize(value)
  return swahiliTranslations.get(key) ?? value
}

function translateTextNode(node: Text, language: Language) {
  const current = node.data
  let entry = translatedNodes.get(node)

  if (!entry || current !== entry.rendered) {
    entry = { source: current, rendered: current }
  }

  const leading = entry.source.match(/^\s*/)?.[0] ?? ""
  const trailing = entry.source.match(/\s*$/)?.[0] ?? ""
  const content = entry.source.slice(
    leading.length,
    entry.source.length - trailing.length || undefined
  )
  const translation = translateValue(content, language)
  const rendered = `${leading}${translation}${trailing}`

  if (node.data !== rendered) node.data = rendered
  entry.rendered = rendered
  translatedNodes.set(node, entry)
}

const translatableAttributes = ["alt", "aria-label", "placeholder", "title"]

function translateElement(element: Element, language: Language) {
  let attributes = translatedAttributes.get(element)
  if (!attributes) {
    attributes = new Map()
    translatedAttributes.set(element, attributes)
  }

  for (const attribute of translatableAttributes) {
    const current = element.getAttribute(attribute)
    if (current === null) continue

    let entry = attributes.get(attribute)
    if (!entry || current !== entry.rendered) {
      entry = { source: current, rendered: current }
    }

    const rendered = translateValue(entry.source, language)
    if (current !== rendered) element.setAttribute(attribute, rendered)
    entry.rendered = rendered
    attributes.set(attribute, entry)
  }
}

function translateTree(node: Node, language: Language) {
  if (node.nodeType === Node.TEXT_NODE) {
    translateTextNode(node as Text, language)
    return
  }

  if (node instanceof Element) translateElement(node, language)
  node.childNodes.forEach((child) => translateTree(child, language))
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === "en" || saved === "sw") setLanguageState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
    translateTree(document.body, language)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text, language)
        } else if (mutation.type === "attributes") {
          if (mutation.target instanceof Element) {
            translateElement(mutation.target, language)
          }
        } else {
          mutation.addedNodes.forEach((node) => translateTree(node, language))
        }
      }
    })

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes,
    })

    return () => observer.disconnect()
  }, [language])

  function setLanguage(nextLanguage: Language) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
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
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export type { Language }
