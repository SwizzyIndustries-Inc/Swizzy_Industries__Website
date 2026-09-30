import type { ComponentType } from "react"

export type DesignedPageDefinition = {
  title: string
  description: string
  Page: ComponentType
}

const designedPages: Record<string, DesignedPageDefinition> = {}

export function getDesignedPage(pathname: string) {
  return designedPages[pathname]
}
