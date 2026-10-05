import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/components/language-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { createSiteMetadata } from "@workspace/ui/lib/seo"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  ...createSiteMetadata({
    siteName: "Tibika",
    siteUrl: "https://tibika.swizzyindustries.com",
    title: "Tibika | Practice precision. Protect life.",
    description:
      "Immersive tools for clinical training, medical research, and patient wellbeing.",
    keywords: [
      "clinical simulation",
      "medical training",
      "virtual reality healthcare",
      "medical research",
      "clinical education",
      "patient wellbeing",
    ],
    logoPath: "/logos/tibika_logo_icon.svg",
  }),
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-brand="tibika"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="flex min-h-full flex-col">
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
