import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vegnar Surfaces | India's Largest Outdoor Tiles Manufacturer & Exporter",
  description: "India's largest outdoor tiles manufacturer & leading exporter to USA, Europe. Premium R11 tiles, 2cm porcelain pavers, heavy-duty outdoor tiles. ISO certified wholesale supplier since 2000.",
  keywords: "outdoor tiles manufacturer India, outdoor tiles exporter India, R11 outdoor tiles India, 2cm porcelain outdoor tiles, heavy duty outdoor tiles, outdoor tile exporter USA, premium outdoor tiles brand India, wholesale outdoor tiles India, luxury outdoor tile company, outdoor poolside tiles, garden tiles, terrace tiles, India's largest outdoor tiles manufacturer, leading exporter outdoor tiles, ISO certified outdoor tiles, premium wholesale supplier outdoor tiles",
  openGraph: {
    title: "About Vegnar Surfaces | India's Largest Outdoor Tiles Manufacturer & Exporter",
    description: "India's largest outdoor tiles manufacturer & leading exporter to USA, Europe. Premium R11 tiles, 2cm porcelain pavers, heavy-duty outdoor tiles. ISO certified wholesale supplier since 2000.",
    images: [{
      url: '/assets/about-section.jpg',
      width: 1200,
      height: 630,
      alt: 'About Vegnar Surfaces - India\'s largest outdoor tiles manufacturer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Vegnar Surfaces | India's Largest Outdoor Tiles Manufacturer & Exporter",
    description: "India's largest outdoor tiles manufacturer & leading exporter to USA, Europe. Premium R11 tiles, 2cm porcelain pavers, heavy-duty outdoor tiles.",
    images: ['/assets/about-section.jpg'],
  },
  alternates: {
    canonical: 'https://vegnarsurfaces.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Vegnar Surfaces',
    description: 'Learn about India\'s largest outdoor tiles manufacturer and leading exporter',
    url: 'https://vegnarsurfaces.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Vegnar Surfaces',
      foundingDate: '2000',
      description: 'India\'s largest outdoor tiles manufacturer and leading exporter of premium R11 tiles, 2cm porcelain pavers, and heavy-duty outdoor tiles to USA, Europe and global markets',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Gujarat',
        addressLocality: 'Morbi'
      },
      areaServed: [
        {
          '@type': 'Place',
          name: 'India'
        },
        {
          '@type': 'Place', 
          name: 'USA'
        },
        {
          '@type': 'Place',
          name: 'Europe'
        },
        {
          '@type': 'Place',
          name: 'Worldwide'
        }
      ],
      knowsAbout: [
        'Outdoor Tiles Manufacturing',
        'R11 Outdoor Tiles',
        '2cm Porcelain Pavers',
        'Heavy Duty Outdoor Tiles',
        'Poolside Tiles',
        'Garden Tiles',
        'Terrace Tiles',
        'Export Quality Outdoor Tiles'
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Certification',
        credentialCategory: 'Quality Management'
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Premium Outdoor Tiles',
          category: 'Building Materials',
          description: 'R11 anti-slip outdoor tiles, 2cm porcelain pavers, heavy-duty outdoor tiles for pools, gardens, terraces'
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}