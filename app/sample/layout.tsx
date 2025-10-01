import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vegnar Surfaces — Free Tile Samples | Ceramic, Porcelain & R11 Outdoor Tiles',
  description: 'Order free tile samples from Vegnar Surfaces. Explore premium ceramic, porcelain, marble & R11 anti-slip outdoor tiles. 1000+ designs, export-quality, delivered across India & internationally. Request samples now.',
  keywords: [
    'tile samples India',
    'free tile samples',
    'ceramic tile samples',
    'porcelain tile samples',
    'outdoor tile samples',
    'R11 anti-slip tile samples',
    '2cm porcelain paver samples',
    'pool tile samples',
    'marble tile samples',
    'granite tile samples',
    'export quality tile samples',
    'order tile samples online India',
    'Vegnar Surfaces sample kit',
    'wholesale tile sample request',
    'free tile samples international',
    'tile sample delivery USA',
    'tile sample delivery UK',
    'tile sample delivery Europe',
    'premium tile samples India',
    'luxury tile samples',
    'outdoor flooring samples',
    'anti-slip tile samples',
    'weatherproof tile samples',
    'commercial tile samples',
    'residential tile samples'
  ],
  authors: [{ name: 'Vegnar Surfaces' }],
  publisher: 'Vegnar Surfaces',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.vegnarsurfaces.com/sample'
  },
  other: {
    'google-site-verification': 'google6e2d7efd2a4d4d4f',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code'
  },
  openGraph: {
    title: 'Vegnar Surfaces — Free Tile Samples | Ceramic, Porcelain & R11 Outdoor Tiles',
    description: 'Order free tile samples from Vegnar Surfaces. Explore premium ceramic, porcelain, marble & R11 anti-slip outdoor tiles. 1000+ designs, export-quality.',
    url: 'https://www.vegnarsurfaces.com/sample',
    siteName: 'Vegnar Surfaces',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.vegnarsurfaces.com/assets/sample-kit-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Tile Samples from Vegnar Surfaces - Premium Ceramic, Porcelain & R11 Outdoor Tiles'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VegnarSurfaces',
    creator: '@VegnarSurfaces',
    title: 'Vegnar Surfaces — Free Tile Samples | Premium Tiles',
    description: 'Order free tile samples. Premium ceramic, porcelain, marble & R11 anti-slip outdoor tiles. 1000+ designs, export-quality.',
    images: ['https://www.vegnarsurfaces.com/assets/sample-kit-twitter.jpg']
  },
  verification: {
    google: 'google6e2d7efd2a4d4d4f',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code'
    }
  },
  category: 'Product Samples',
  classification: 'E-commerce',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function SampleLayout({
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
            "@graph": [
              {
                "@type": "Organization",
                "name": "Vegnar Surfaces",
                "url": "https://www.vegnarsurfaces.com",
                "logo": "https://www.vegnarsurfaces.com/assets/logo.png",
                "description": "India's largest outdoor tiles manufacturer and global exporter since 2000",
                "foundingDate": "2000",
                "numberOfEmployees": "500+",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN",
                  "addressRegion": "Gujarat",
                  "addressLocality": "Morbi"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "contactType": "Sample Requests",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": ["IN", "US", "GB", "DE", "RU", "FR", "IT", "ES"]
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/vegnarsurfaces",
                  "https://www.instagram.com/vegnarsurfaces",
                  "https://www.linkedin.com/company/vegnarsurfaces",
                  "https://twitter.com/vegnarsurfaces"
                ]
              },
              {
                "@type": "Product",
                "name": "Vegnar Tile Sample Kit",
                "description": "Free tile sample kit featuring ceramic, porcelain, marble, granite and R11 anti-slip outdoor tiles",
                "brand": {
                  "@type": "Brand",
                  "name": "Vegnar Surfaces"
                },
                "category": "Tile Samples",
                "offers": {
                  "@type": "Offer",
                  "url": "https://www.vegnarsurfaces.com/sample",
                  "price": "0.00",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "priceValidUntil": "2025-12-31",
                  "seller": {
                    "@type": "Organization",
                    "name": "Vegnar Surfaces"
                  },
                  "deliveryLeadTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 3,
                    "maxValue": 7,
                    "unitCode": "DAY"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  }
                },
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Sample Types",
                    "value": "Ceramic, Porcelain, Marble, Granite, R11 Outdoor, 2cm Pavers"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Quality Standard",
                    "value": "ISO 9001:2015 Certified"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Export Quality",
                    "value": "USA, Europe, UK, Germany, Russia"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "name": "Free Tile Samples - Vegnar Surfaces",
                "url": "https://www.vegnarsurfaces.com/sample",
                "description": "Order free tile samples from India's largest outdoor tiles manufacturer",
                "mainEntity": {
                  "@type": "Product",
                  "name": "Vegnar Tile Sample Kit"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.vegnarsurfaces.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Free Tile Samples",
                      "item": "https://www.vegnarsurfaces.com/sample"
                    }
                  ]
                }
              }
            ]
          })
        }}
      />
    </>
  )
}