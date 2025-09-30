import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import { LazyWhatsAppWidget, LazyCookieConsent, LazyPageTracker, LazyRoutePreloader } from "@/components/ClientComponents";
import ErrorBoundary from "@/components/ErrorBoundary";
import NavigationProgress from "@/components/NavigationProgress";
import StructuredData from "@/components/StructuredData";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vegnar Surfaces - Premium Tiles, Marble & Stone Manufacturer | India's Leading Tile Company",
  description: "India's premier tile manufacturer offering premium marble tiles, ceramic tiles, granite, porcelain, mosaic & outdoor tiles. 20+ years experience, 1000+ designs, wholesale prices. Free samples & expert installation.",
  keywords: "tiles manufacturer India, marble tiles, ceramic tiles, granite tiles, porcelain tiles, mosaic tiles, outdoor tiles, wall tiles, floor tiles, bathroom tiles, kitchen tiles, premium tiles, luxury tiles, tile supplier, wholesale tiles, tile installation, Indian tiles, export quality tiles, Vegnar Surfaces",
  authors: [{ name: "Vegnar Surfaces" }],
  creator: "Vegnar Surfaces",
  publisher: "Vegnar Surfaces",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vegnarsurfaces.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vegnar Surfaces - India's Leading Premium Tile Manufacturer",
    description: "Premium marble, ceramic, granite & porcelain tiles manufacturer. 1000+ designs, export quality, wholesale prices. Free samples available.",
    url: 'https://vegnarsurfaces.com',
    siteName: 'Vegnar Surfaces',
    images: [
      {
        url: '/assets/hero-marble-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Vegnar Surfaces - Premium Tiles Collection',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vegnar Surfaces - Premium Tiles Manufacturer India",
    description: "India's leading tile manufacturer. Premium marble, ceramic, granite tiles. 1000+ designs, export quality, wholesale prices.",
    images: ['/assets/hero-marble-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: "/tile-favicon-dark.svg",
    shortcut: "/tile-favicon-dark.svg",
    apple: "/tile-favicon-dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vegnarsurfaces.com" />
        <link rel="canonical" href="https://vegnarsurfaces.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vegnar Surfaces" />
        <meta name="publisher" content="Vegnar Surfaces" />
        <meta name="theme-color" content="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NavigationProgress />
        <ErrorBoundary>
          <Providers>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
              <LazyWhatsAppWidget />
              <LazyCookieConsent />
              <LazyPageTracker />
              <LazyRoutePreloader />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </TooltipProvider>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
