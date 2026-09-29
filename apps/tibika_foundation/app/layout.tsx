import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/components/language-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tibika | Practice precision. Protect life.",
  description:
    "Immersive tools for clinical training, medical research, and patient wellbeing.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
