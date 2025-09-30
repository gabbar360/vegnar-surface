import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Tiles Collection | Marble, Ceramic, Granite Tiles - Vegnar Surfaces",
  description: "Browse 1000+ premium tiles collection. Marble tiles, ceramic tiles, granite, porcelain, mosaic & outdoor tiles. Export quality, wholesale prices. Filter by size, color, surface type. Free samples across India.",
  keywords: "tiles collection, marble tiles, ceramic tiles, granite tiles, porcelain tiles, mosaic tiles, outdoor tiles, premium tiles, luxury tiles, bathroom tiles, kitchen tiles, floor tiles, wall tiles, tiles catalog, tile designs, Indian tiles, export tiles, wholesale tiles, tile sizes, tile colors, surface types, Vegnar tiles",
  openGraph: {
    title: "Premium Tiles Collection | Vegnar Surfaces",
    description: "Browse 1000+ premium tiles. Marble, ceramic, granite, porcelain tiles. Export quality, wholesale prices. Free samples.",
    images: [{
      url: '/assets/product-subway.jpg',
      width: 1200,
      height: 630,
      alt: 'Premium tiles collection by Vegnar Surfaces'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Tiles Collection | Vegnar Surfaces",
    description: "Browse 1000+ premium tiles. Marble, ceramic, granite, porcelain tiles. Export quality, wholesale prices.",
    images: ['/assets/product-subway.jpg'],
  },
  alternates: {
    canonical: 'https://vegnarsurfaces.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Premium Tiles Collection',
    description: 'Browse our extensive collection of premium marble, ceramic, granite, and porcelain tiles',
    url: 'https://vegnarsurfaces.com/products',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Tiles Collection',
      description: 'Premium tiles for residential and commercial projects',
      numberOfItems: '1000+',
      itemListElement: [
        {
          '@type': 'Product',
          name: 'Marble Tiles',
          category: 'Building Materials',
          description: 'Premium marble tiles for luxury interiors'
        },
        {
          '@type': 'Product',
          name: 'Ceramic Tiles',
          category: 'Building Materials', 
          description: 'High-quality ceramic tiles for all applications'
        },
        {
          '@type': 'Product',
          name: 'Granite Tiles',
          category: 'Building Materials',
          description: 'Durable granite tiles for heavy-duty applications'
        }
      ]
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