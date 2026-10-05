import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@workspace/ui/lib/utils"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { createSiteMetadata } from "@workspace/ui/lib/seo"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  ...createSiteMetadata({
    siteName: "Swizzy Industries",
    siteUrl: "https://swizzyindustries.com",
    title: "Swizzy Industries | Building the future, together",
    description:
      "Immersive technology serving people and institutions in Kenya.",
    keywords: [
      "immersive technology",
      "virtual reality",
      "augmented reality",
      "digital solutions",
      "Kenya technology company",
      "healthcare technology",
      "education technology",
    ],
    logoPath: "/logos/swizzy_logo_icon.svg",
  }),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <TooltipProvider>
              <SiteHeader />
              {children}
              <SiteFooter />
              <Analytics />
              <SpeedInsights />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
