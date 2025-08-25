import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vegnar Surface - Premium Ceramic & Tiles Solutions",
  description:
    "Discover premium ceramic tiles, porcelain pavers, and luxury surfaces from Vegnar Surface. Quality craftsmanship meets modern design.",
  keywords:
    "ceramic tiles, porcelain pavers, luxury surfaces, tile installation, home design",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
            <WhatsAppWidget />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
