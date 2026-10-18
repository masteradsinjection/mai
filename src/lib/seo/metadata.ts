import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  keywords = [
    "Digital Marketing Agency",
    "Paid Advertising",
    "Google Ads Management",
    "Meta Ads Agency",
    "Conversion Tracking",
    "Server-Side Tracking",
    "Google Tag Manager Implementation",
    "GA4 Configuration",
    "Marketing Analytics",
    "Conversion Rate Optimization",
  ],
  ogType = "website",
  publishedTime,
  authors,
  image = siteConfig.ogImage,
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const url = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: authors ? authors.map((name) => ({ name })) : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@masteradsinject",
      images: [image.startsWith("http") ? image : `${siteConfig.url}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
