import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'
const siteName = 'TechBlog'
const siteDescription = 'Thoughts on software engineering, architecture, and the craft of building products.'

interface SeoInput {
  title: string
  description: string
  slug?: string
  coverImage?: string
  tags?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
}

export function generateSeoMetadata({
  title,
  description,
  slug,
  coverImage,
  tags,
  type = 'website',
  publishedTime,
  authors,
}: SeoInput): Metadata {
  const url = slug ? `${siteUrl}/blog/${slug}` : siteUrl
  const imageUrl = coverImage
    ? `${siteUrl}${coverImage}`
    : `${siteUrl}/og-default.png`

  return {
    title: `${title} | ${siteName}`,
    description,
    keywords: tags,
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime
        ? { publishedTime }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/og-default.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export { siteUrl, siteName }
