import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiles Blog | Design Ideas, Installation Tips & Trends - Vegnar Surfaces",
  description: "Explore expert tiles blog with latest design trends, installation guides, maintenance tips for marble, ceramic, granite tiles. Get inspired with tile design ideas, color combinations, and professional advice from India's leading tiles manufacturer.",
  keywords: "tiles blog, tile design ideas, tile installation tips, marble tiles guide, ceramic tiles trends, granite tiles maintenance, tile design trends, bathroom tiles ideas, kitchen tiles design, floor tiles guide, wall tiles inspiration, tile color combinations, tile patterns, tile care tips, tiles maintenance guide, luxury tiles blog, premium tiles ideas, Indian tiles blog",
  openGraph: {
    title: "Tiles Blog | Design Ideas & Expert Tips - Vegnar Surfaces",
    description: "Expert tiles blog with design trends, installation guides, and maintenance tips. Get inspired with professional advice from India's leading tiles manufacturer.",
    images: [{
      url: '/assets/hero-marble-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'Tiles design ideas and expert tips blog'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiles Blog | Design Ideas & Expert Tips - Vegnar Surfaces",
    description: "Expert tiles blog with design trends, installation guides, and maintenance tips from India's leading tiles manufacturer.",
    images: ['/assets/hero-marble-bg.jpg'],
  },
  alternates: {
    canonical: 'https://vegnarsurfaces.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vegnar Surfaces Tiles Blog',
    description: 'Expert blog covering tile design ideas, installation tips, maintenance guides, and latest trends in marble, ceramic, and granite tiles',
    url: 'https://vegnarsurfaces.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Vegnar Surfaces',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vegnarsurfaces.com/assets/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://vegnarsurfaces.com/blog'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Tile Design'
      },
      {
        '@type': 'Thing', 
        name: 'Tile Installation'
      },
      {
        '@type': 'Thing',
        name: 'Tile Maintenance'
      }
    ]
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