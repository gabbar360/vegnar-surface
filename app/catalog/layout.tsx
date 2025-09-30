import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vegnar Surfaces - India\'s No.1 Tiles Manufacturer | Premium Marble, Porcelain & Outdoor Tiles',
  description: 'Vegnar Surfaces is India\'s leading tile manufacturer & exporter of premium marble tiles, ceramic tiles, granite, porcelain slabs, mosaic & outdoor tiles. Offering 20+ years of excellence, 1000+ luxury tile designs, R11 surface outdoor tiles, 2cm porcelain pavers, wholesale tile supply, free samples & expert installation services worldwide.',
  keywords: [
    'tiles manufacturer India',
    'No.1 tiles company in India',
    'premium marble tiles India',
    'porcelain tile manufacturer India',
    'outdoor tiles supplier India',
    'luxury tiles India',
    'ceramic tiles manufacturer India',
    'granite tile exporter India',
    'porcelain pavers 2cm India',
    'R11 surface outdoor tiles India',
    'bathroom wall tiles India',
    'kitchen floor tiles India',
    'living room vitrified tiles',
    'premium tile supplier India',
    'wholesale tiles exporter India',
    'ISO certified tile company India',
    'export quality tiles India',
    'Indian tile industry leader',
    'large format porcelain slabs India',
    'subway tile manufacturer India',
    'mosaic tiles exporter India',
    'tile installation services India',
    'commercial flooring tiles India',
    'luxury wall & floor tiles',
    'Vegnar Surfaces premium tiles'
  ],
  authors: [{ name: 'Vegnar Surfaces' }],
  publisher: 'Vegnar Surfaces',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.vegnarsurfaces.com/catalog'
  },
  openGraph: {
    title: 'Vegnar Surfaces - India\'s No.1 Tiles Manufacturer | Premium Marble, Porcelain & Outdoor Tiles',
    description: 'India\'s leading tile manufacturer & exporter of premium marble tiles, ceramic tiles, granite, porcelain slabs, mosaic & outdoor tiles. 20+ years excellence, 1000+ designs.',
    url: 'https://www.vegnarsurfaces.com/catalog',
    siteName: 'Vegnar Surfaces',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegnar Surfaces - India\'s No.1 Tiles Manufacturer',
    description: 'India\'s leading tile manufacturer & exporter of premium marble tiles, ceramic tiles, granite, porcelain slabs, mosaic & outdoor tiles.'
  }
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}