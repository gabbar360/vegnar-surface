"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileText, Eye, Share2 } from "lucide-react";

export default function Catalog() {
  const catalogs = [
    {
      id: 1,
      title: "Complete Product Catalog 2025",
      description:
        "Comprehensive catalog featuring all our tile collections including subway, porcelain, slab tiles, and sanitaryware",
      pages: 120,
      size: "45 MB",
      format: "PDF",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      featured: true,
    },
    {
      id: 2,
      title: "Subway Tiles Collection",
      description:
        "Detailed showcase of our subway tiles in various sizes from 75x150mm to 200x200mm",
      pages: 24,
      size: "12 MB",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    },
    {
      id: 3,
      title: "Large Format Slab Tiles",
      description:
        "Premium large format porcelain slab tiles from 800x1600mm to 1600x3200mm",
      pages: 32,
      size: "18 MB",
      format: "PDF",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    },
    {
      id: 4,
      title: "Outdoor Porcelain 20mm Collection",
      description:
        "Weather-resistant 20mm outdoor porcelain tiles for terraces and commercial spaces",
      pages: 28,
      size: "15 MB",
      format: "PDF",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
    },
    {
      id: 5,
      title: "Sanitaryware Collection",
      description:
        "Complete range of sanitaryware including basins, water closets, and urinals",
      pages: 36,
      size: "20 MB",
      format: "PDF",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
    },
    {
      id: 6,
      title: "Technical Specifications",
      description:
        "Detailed technical specifications, installation guides, and maintenance instructions",
      pages: 48,
      size: "8 MB",
      format: "PDF",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cream to-marble">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              E-Catalogue
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download our comprehensive product catalogs and technical
              specifications
            </p>
          </div>
        </div>
      </section>

      {/* Featured Catalog */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Featured Catalog
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={catalogs[0].image}
                    alt={catalogs[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="bg-secondary text-charcoal px-3 py-1 rounded-full text-sm">
                      2025 Edition
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-4">
                    {catalogs[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {catalogs[0].description}
                  </p>

                  <div className="flex gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange">
                        {catalogs[0].pages}
                      </div>
                      <div className="text-sm text-muted-foreground">Pages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange">
                        {catalogs[0].size}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        File Size
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange">
                        {catalogs[0].format}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Format
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-orange hover:bg-orange/90 text-white flex-1"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange text-orange flex-1 min-w-0"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Catalogs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            All Catalogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.slice(1).map((catalog) => (
              <Card
                key={catalog.id}
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={catalog.image}
                    alt={catalog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-semibold text-charcoal">
                    {catalog.format}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-charcoal">
                    {catalog.title}
                  </CardTitle>
                  <CardDescription>{catalog.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                    <span>{catalog.pages} pages</span>
                    <span>{catalog.size}</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Button className="flex-1 bg-orange hover:bg-orange/90 text-white h-10">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">Price List</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Current pricing for all products
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-orange text-orange"
              >
                Download
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">
                Installation Guide
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step installation instructions
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-orange text-orange"
              >
                Download
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">
                Care & Maintenance
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Keep your tiles looking perfect
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-orange text-orange"
              >
                Download
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">
                Warranty Terms
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Product warranty information
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-orange text-orange"
              >
                Download
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
