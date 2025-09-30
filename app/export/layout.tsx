import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vegnar Surfaces | Global Exporter of Premium Outdoor Tiles',
  description: 'Vegnar Surfaces is India\'s leading exporter of outdoor tiles, porcelain pavers, R11 surface tiles & 2cm tiles. Supplying Europe, UK, USA, Germany & Russia with premium quality at wholesale prices.',
  keywords: [
    'outdoor tiles supplier in Europe',
    'outdoor tiles supplier in UK', 
    'outdoor tiles supplier in USA',
    'outdoor tiles supplier in Germany',
    'outdoor tiles supplier in Russia',
    'exporter of R11 tiles',
    'exporter of 2cm tiles',
    'premium outdoor tiles exporter India',
    'wholesale outdoor tiles',
    'Vegnar Surfaces export'
  ],
  authors: [{ name: 'Vegnar Surfaces' }],
  publisher: 'Vegnar Surfaces',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vegnarsurfaces.com/export'
  },
  openGraph: {
    title: 'Vegnar Surfaces | Global Exporter of Premium Outdoor Tiles',
    description: 'India\'s leading exporter of outdoor tiles, porcelain pavers, R11 surface tiles & 2cm tiles. Supplying Europe, UK, USA, Germany & Russia.',
    url: 'https://vegnarsurfaces.com/export',
    siteName: 'Vegnar Surfaces',
    type: 'website',
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegnar Surfaces | Global Exporter of Premium Outdoor Tiles',
    description: 'India\'s leading exporter of outdoor tiles, porcelain pavers, R11 surface tiles & 2cm tiles.'
  }
}

export default function ExportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}