type SiteMetadataOptions = {
  siteName: string
  siteUrl: string
  title: string
  description: string
  keywords: string[]
  logoPath: string
}

type PageMetadataOptions = {
  pathname: string
  siteName: string
  title: string
  description?: string
}

export function createSiteMetadata({
  siteName,
  siteUrl,
  title,
  description,
  keywords,
  logoPath,
}: SiteMetadataOptions) {
  const openGraphImage = "/images/og-image.png"

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    title,
    description,
    keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    category: "technology",
    alternates: { canonical: "/" },
    icons: {
      icon: [
        { url: "/icons/favicon.ico", type: "image/x-icon" },
        { url: logoPath, type: "image/svg+xml" },
      ],
      shortcut: "/icons/favicon.ico",
      apple: [{ url: "/icons/apple-touch-icon-180x180.png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url: siteUrl,
      siteName,
      title,
      description,
      images: [
        {
          url: openGraphImage,
          width: 1424,
          height: 752,
          alt: `${siteName} — ${description}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export function createPageMetadata({
  pathname,
  siteName,
  title,
  description,
}: PageMetadataOptions) {
  const openGraphImage = "/images/og-image.png"

  return {
    title,
    ...(description ? { description } : {}),
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "en_KE",
      siteName,
      title,
      ...(description ? { description } : {}),
      url: pathname,
      images: [
        {
          url: openGraphImage,
          width: 1424,
          height: 752,
          alt: `${siteName} — ${description ?? title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      ...(description ? { description } : {}),
      images: [openGraphImage],
    },
  }
}
