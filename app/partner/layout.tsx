import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner with Vegnar Surfaces - India\'s #1 Outdoor Tiles Manufacturer | Dealership | Franchise | Global Export Partnership',
  description: 'Partner with Vegnar Surfaces - India\'s largest outdoor tiles manufacturer since 2000. Exclusive dealership, franchise & distributor opportunities. Premium R11 tiles, 2cm porcelain pavers. ISO 9001:2015 certified. Wholesale pricing, marketing support, territory protection. Join 500+ partners across 30+ countries. Apply now for partnership!',
  keywords: [
    'partner with Vegnar Surfaces',
    'outdoor tiles dealership India',
    'outdoor tiles franchise opportunity',
    'R11 tiles distributor partnership',
    '2cm porcelain pavers dealer India',
    'premium outdoor tiles franchise',
    'outdoor tiles supplier partnership',
    'tiles dealership opportunity India',
    'outdoor tiles business partnership',
    'wholesale outdoor tiles dealer',
    'exclusive tiles distributor India',
    'outdoor tiles export partnership',
    'premium tiles franchise India',
    'outdoor flooring dealership',
    'tiles manufacturer partnership',
    'outdoor tiles wholesale partner',
    'tiles distributor program India',
    'outdoor tiles dealer network',
    'premium outdoor tiles business',
    'tiles franchise opportunity 2024',
    'outdoor tiles investment opportunity',
    'tiles dealership profit margins',
    'outdoor tiles market opportunity',
    'tiles business partnership India',
    'outdoor tiles distributor network',
    'premium tiles dealer program',
    'outdoor tiles franchise cost',
    'tiles dealership requirements',
    'outdoor tiles business model',
    'tiles partnership benefits',
    'outdoor tiles dealer support',
    'tiles franchise marketing support',
    'outdoor tiles territory rights',
    'tiles dealership training program',
    'outdoor tiles business growth',
    'tiles partnership ROI',
    'outdoor tiles dealer profits',
    'tiles franchise success stories',
    'outdoor tiles market leader',
    'tiles partnership application'
  ],
  authors: [{ name: 'Vegnar Surfaces' }],
  publisher: 'Vegnar Surfaces',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.vegnarsurfaces.com/partner'
  },
  other: {
    'google-site-verification': 'google6e2d7efd2a4d4d4f',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'p:domain_verify': 'your-pinterest-verification-code'
  },
  openGraph: {
    title: 'Partner with Vegnar Surfaces - India\'s #1 Outdoor Tiles Manufacturer | Dealership | Franchise',
    description: 'Partner with India\'s largest outdoor tiles manufacturer. Exclusive dealership, franchise & distributor opportunities. Join 500+ partners across 30+ countries.',
    url: 'https://www.vegnarsurfaces.com/partner',
    siteName: 'Vegnar Surfaces',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.vegnarsurfaces.com/assets/partner-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Partner with Vegnar Surfaces - Outdoor Tiles Dealership Opportunities'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VegnarSurfaces',
    creator: '@VegnarSurfaces',
    title: 'Partner with Vegnar Surfaces - India\'s #1 Outdoor Tiles Manufacturer',
    description: 'Exclusive dealership, franchise & distributor opportunities. Join 500+ partners across 30+ countries.',
    images: ['https://www.vegnarsurfaces.com/assets/partner-twitter-image.jpg']
  },
  verification: {
    google: 'google6e2d7efd2a4d4d4f',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code'
    }
  },
  category: 'Business Partnership',
  classification: 'Business Opportunity',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vegnar Surfaces",
            "url": "https://www.vegnarsurfaces.com",
            "logo": "https://www.vegnarsurfaces.com/assets/logo.png",
            "description": "India's largest outdoor tiles manufacturer and global exporter",
            "foundingDate": "2000",
            "numberOfEmployees": "500+",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "Gujarat",
              "addressLocality": "Morbi"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Partnership Inquiries",
              "availableLanguage": ["English", "Hindi"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Partnership Opportunities",
              "description": "Dealership, Franchise, and Distributor partnerships available",
              "category": "Business Partnership"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "brand": {
              "@type": "Brand",
              "name": "Vegnar Surfaces"
            },
            "sameAs": [
              "https://www.facebook.com/vegnarsurfaces",
              "https://www.instagram.com/vegnarsurfaces",
              "https://www.linkedin.com/company/vegnarsurfaces",
              "https://twitter.com/vegnarsurfaces"
            ]
          })
        }}
      />
    </>
  )
}