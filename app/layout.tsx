import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

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
  title: "Vegnar Surface - Premium Ceramic & Tile Solutions",
  description:
    "Discover premium ceramic tiles, porcelain pavers, and luxury surfaces from Vegnar Surface. Quality craftsmanship meets modern design.",
  keywords:
    "ceramic tiles, porcelain pavers, luxury surfaces, tile installation, home design",
  icons: {
    icon: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    shortcut: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    apple: "/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
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
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
