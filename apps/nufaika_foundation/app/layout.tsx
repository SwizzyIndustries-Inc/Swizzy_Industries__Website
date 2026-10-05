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
import { cn } from "@workspace/ui/lib/utils"
import { createSiteMetadata } from "@workspace/ui/lib/seo"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  ...createSiteMetadata({
    siteName: "Nufaika",
    siteUrl: "https://nufaika.swizzyindustries.com",
    title: "Nufaika | Skills meet opportunity",
    description:
      "A trusted marketplace connecting skilled service providers with customers across Kenya.",
    keywords: [
      "services marketplace",
      "find skilled professionals",
      "local service providers",
      "Kenya marketplace",
      "small business",
      "skilled work",
    ],
    logoPath: "/logos/nufaika_logo_icon.svg",
  }),
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-brand="nufaika"
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
