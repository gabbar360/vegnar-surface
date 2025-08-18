"use client";

import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Large Slab Collection",
    "200x200MM Collection",
    "Subway Collection",
    "Outdoor Collection",
    "Mosaics Collection",
  ];

  const catalogs = [
    // Large Slab Collection (16 PDFs)
    {
      id: 1,
      title: "Porceluxe Collection",
      description:
        "Premium porcelain tiles collection with elegant designs and superior quality",
      pages: 24,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      featured: true,
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Porceluxe Collection.pdf",
      thumbnailImage: "/catalogs/thumbnails/poreluxe.png",
    },
    {
      id: 2,
      title: "Artisan Carve Series A",
      description: "Handcrafted textured tiles with artistic carving patterns",
      pages: 16,
      size: "6 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Artisan Carve Series A.pdf",
      thumbnailImage: "/catalogs/thumbnails/carving.png",
    },
    {
      id: 3,
      title: "Artisan Carve Series B",
      description:
        "Extended collection of carved tiles with unique surface textures",
      pages: 18,
      size: "7 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Artisan Carve Series B.pdf",
      thumbnailImage: "/catalogs/thumbnails/carving.png",
    },
    {
      id: 4,
      title: "GrooveStone A",
      description:
        "Natural stone-inspired tiles with distinctive groove patterns",
      pages: 20,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - GrooveStone A.pdf",
      thumbnailImage: "/catalogs/thumbnails/1600mm.png",
    },
    {
      id: 5,
      title: "GrooveStone B",
      description: "Continuation of GrooveStone series with varied textures",
      pages: 22,
      size: "9 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - GrooveStone B.pdf",
      thumbnailImage: "/catalogs/thumbnails/800-1600mm.png",
    },
    {
      id: 6,
      title: "GrooveStone C",
      description:
        "Complete GrooveStone range with premium stone-like appearances",
      pages: 24,
      size: "10 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - GrooveStone C.pdf",
      thumbnailImage: "/catalogs/thumbnails/rediant.png",
    },
    {
      id: 7,
      title: "Lumora Pearl A",
      description: "Lustrous pearl-finish tiles with sophisticated elegance",
      pages: 18,
      size: "7 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Lumora Pearl A.pdf",
      thumbnailImage: "/catalogs/thumbnails/ambiens.png",
    },
    {
      id: 8,
      title: "Lumora Pearl B",
      description: "Extended Lumora Pearl range with varied pearl textures",
      pages: 20,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Lumora Pearl B.pdf",
      thumbnailImage: "/catalogs/thumbnails/ambiens.png",
    },
    {
      id: 9,
      title: "Lumora Pearl C",
      description: "Complete Lumora Pearl series with premium finishes",
      pages: 22,
      size: "9 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Lumora Pearl C.pdf",
      thumbnailImage: "/catalogs/thumbnails/ambiens.png",
    },
    {
      id: 10,
      title: "Matt Collection",
      description: "Sophisticated matte finish tiles for modern interiors",
      pages: 16,
      size: "6 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      pdfPath: "/catalogs/Large Slab Collection/Vegnar Surfaces - Matt.pdf",
      thumbnailImage: "/catalogs/thumbnails/Matt Collection.png",
    },
    {
      id: 11,
      title: "Obsidian Shine A",
      description: "Dark, glossy tiles with obsidian-like reflective surfaces",
      pages: 16,
      size: "6 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Obsidian Shine A.pdf",
      thumbnailImage: "/catalogs/thumbnails/highgloss.png",
    },
    {
      id: 12,
      title: "Obsidian Shine B",
      description: "Extended Obsidian Shine range with varied dark finishes",
      pages: 18,
      size: "7 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Obsidian Shine B.pdf",
      thumbnailImage: "/catalogs/thumbnails/highgloss.png",
    },
    {
      id: 13,
      title: "Pearl Shine Collection",
      description: "Elegant pearl-shine tiles with subtle luminous effects",
      pages: 20,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Pearl Shine.pdf",
      thumbnailImage: "/catalogs/thumbnails/peralshine.png",
    },
    {
      id: 14,
      title: "Radiance Luxe Collection",
      description: "Luxurious tiles with radiant finishes and premium quality",
      pages: 24,
      size: "10 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Radiance Luxe.pdf",
      thumbnailImage: "/catalogs/thumbnails/redianceluxe.png",
    },
    {
      id: 15,
      title: "Vellura Luxe A",
      description: "Premium Vellura tiles with luxurious textures and finishes",
      pages: 22,
      size: "9 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Vellura Luxe A.pdf",
      thumbnailImage: "/catalogs/thumbnails/luxeA.png",
    },
    {
      id: 16,
      title: "Vellura Luxe B",
      description: "Extended Vellura Luxe range with sophisticated designs",
      pages: 24,
      size: "10 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      pdfPath:
        "/catalogs/Large Slab Collection/Vegnar Surfaces - Vellura Luxe B.pdf",
      thumbnailImage: "/catalogs/thumbnails/luxeA.png",
    },

    // 200x200MM Collection (4 PDFs)
    {
      id: 17,
      title: "Bloomora 200×200 mm",
      description:
        "Beautiful floral-inspired 200x200mm tiles with elegant patterns",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      pdfPath:
        "/catalogs/200x200MM Collection/Vegnar Surfaces - Bloomora 200×200 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
    },
    {
      id: 18,
      title: "MagnaStone 200×200 mm",
      description: "Magnetic stone-effect tiles in compact 200x200mm format",
      pages: 14,
      size: "6 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      pdfPath:
        "/catalogs/200x200MM Collection/Vegnar Surfaces - MagnaStone 200×200 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
    },
    {
      id: 19,
      title: "MonoLux 200×200 mm",
      description: "Monochromatic luxury tiles in versatile 200x200mm size",
      pages: 10,
      size: "4 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      pdfPath:
        "/catalogs/200x200MM Collection/Vegnar Surfaces - MonoLux 200×200 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
    },
    {
      id: 20,
      title: "OpalTone 200×200 mm",
      description: "Opal-toned tiles with subtle color variations in 200x200mm",
      pages: 16,
      size: "7 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      pdfPath:
        "/catalogs/200x200MM Collection/Vegnar Surfaces - OpalTone 200×200 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
    },

    // Subway Collection (4 PDFs)
    {
      id: 21,
      title: "FluteLuxe Series 75×300 mm",
      description: "Elegant fluted subway tiles in premium 75x300mm format",
      pages: 16,
      size: "7 MB",
      format: "PDF",
      category: "Subway Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      pdfPath:
        "/catalogs/Subway Collection/Vegnar Surfaces - FluteLuxe Series 75×300 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/FluteLuxe Series 75×300 mm.png",
    },
    {
      id: 22,
      title: "MetroLuxe 65×260 mm",
      description: "Classic metro-style tiles in versatile 65x260mm dimensions",
      pages: 14,
      size: "6 MB",
      format: "PDF",
      category: "Subway Collection",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      pdfPath:
        "/catalogs/Subway Collection/Vegnar Surfaces - MetroLuxe 65×260 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/MetroLuxe 65×260 mm.png",
    },
    {
      id: 23,
      title: "MetroLuxe Pente 65×260 mm",
      description: "Pentagonal metro tiles with unique geometric appeal",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "Subway Collection",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      pdfPath:
        "/catalogs/Subway Collection/Vegnar Surfaces - MetroLuxe Pente 65×260 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/MetroLuxe Pente 65×260 mm.png",
    },
    {
      id: 24,
      title: "MetroLuxe Series 75×300 mm",
      description: "Premium metro series in larger 75x300mm format",
      pages: 18,
      size: "8 MB",
      format: "PDF",
      category: "Subway Collection",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      pdfPath:
        "/catalogs/Subway Collection/Vegnar Surfaces - MetroLuxe Series 75×300 mm.pdf",
      thumbnailImage: "/catalogs/thumbnails/MetroLuxe Series 75×300 mm.png",
    },

    // Outdoor Collection (5 PDFs)
    {
      id: 25,
      title: "Outdoor Collection A",
      description: "Weather-resistant outdoor tiles for terraces and patios",
      pages: 20,
      size: "9 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      pdfPath: "/catalogs/Outdoor Collection/Vegnar Surfaces Outdoor -A.pdf",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },
    {
      id: 26,
      title: "Outdoor Collection B",
      description: "Extended outdoor range with anti-slip properties",
      pages: 18,
      size: "8 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      pdfPath: "/catalogs/Outdoor Collection/Vegnar Surfaces Outdoor -B.pdf",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },
    {
      id: 27,
      title: "Outdoor Collection C",
      description: "Frost-resistant outdoor tiles for harsh climates",
      pages: 22,
      size: "10 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      pdfPath: "/catalogs/Outdoor Collection/Vegnar Surfaces Outdoor -C.pdf",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },
    {
      id: 28,
      title: "Outdoor Collection D",
      description: "Commercial-grade outdoor tiles for heavy traffic areas",
      pages: 24,
      size: "11 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      pdfPath: "/catalogs/Outdoor Collection/Vegnar Surfaces Outdoor -D.pdf",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },
    {
      id: 29,
      title: "Outdoor Collection E",
      description: "Premium outdoor collection with natural stone textures",
      pages: 26,
      size: "12 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      pdfPath: "/catalogs/Outdoor Collection/Vegnar Surfaces Outdoor -E.pdf",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },

    // Mosaics Collection (2 PDFs)
    {
      id: 30,
      title: "AquaVista Pool Collection",
      description:
        "Specialized pool and spa mosaic tiles with water-resistant properties",
      pages: 24,
      size: "12 MB",
      format: "PDF",
      category: "Mosaics Collection",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      pdfPath:
        "/catalogs/Mosaics Collection/Vegnar Surfaces - AquaVista Pool Collection.pdf",
      thumbnailImage: "/catalogs/thumbnails/AquaVista Pool Collection.png",
    },
    {
      id: 31,
      title: "Master Collection",
      description:
        "Comprehensive mosaic collection with artistic patterns and designs",
      pages: 32,
      size: "15 MB",
      format: "PDF",
      category: "Mosaics Collection",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      pdfPath:
        "/catalogs/Mosaics Collection/Vegnar Surfaces - Master Collection.pdf",
      thumbnailImage: "/catalogs/thumbnails/Master Collection.png",
    },
  ];

  const filteredCatalogs =
    selectedCategory === "All"
      ? catalogs
      : catalogs.filter((catalog) => catalog.category === selectedCategory);

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
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Featured Catalog
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="w-full h-64 md:h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={catalogs[0].thumbnailImage || catalogs[0].image}
                      alt={catalogs[0].title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
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
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = catalogs[0].pdfPath;
                        link.download = `${catalogs[0].title}.pdf`;
                        link.click();
                      }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange text-orange flex-1 min-w-0"
                      onClick={() => window.open(catalogs[0].pdfPath, "_blank")}
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
      </section> */}

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-orange hover:bg-orange/90 text-white"
                    : "border-orange text-orange hover:bg-orange hover:text-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Catalogs */}
      <section className="  bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            {selectedCategory === "All" ? "All Catalogs" : selectedCategory}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCatalogs
              .slice(selectedCategory === "All" ? 1 : 0)
              .map((catalog) => (
                <Card
                  key={catalog.id}
                  className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={catalog.thumbnailImage || catalog.image}
                        alt={catalog.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
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
                    <div className="flex gap-2 items-center">
                      <Button
                        className="flex-1 bg-orange hover:bg-orange/90 text-white h-10"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = catalog.pdfPath;
                          link.download = `${catalog.title}.pdf`;
                          link.click();
                        }}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                        onClick={() => window.open(catalog.pdfPath, "_blank")}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                        onClick={() => {
                          const shareUrl =
                            window.location.origin + catalog.pdfPath;
                          const shareText = `Check out ${catalog.title} - ${catalog.description}`;

                          if (navigator.share) {
                            navigator.share({
                              title: catalog.title,
                              text: shareText,
                              url: shareUrl,
                            });
                          } else {
                            // Fallback: Create share options
                            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                              shareText + " " + shareUrl
                            )}`;
                            const emailUrl = `mailto:?subject=${encodeURIComponent(
                              catalog.title
                            )}&body=${encodeURIComponent(
                              shareText + "\n\n" + shareUrl
                            )}`;

                            // Show options or default to WhatsApp
                            if (
                              confirm("Share via WhatsApp? (Cancel for Email)")
                            ) {
                              window.open(whatsappUrl, "_blank");
                            } else {
                              window.open(emailUrl, "_blank");
                            }
                          }
                        }}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

              {/* <Card className="text-center p-6 hover:shadow-lg transition-shadow">
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
              </Card> */}

              {/* <Card className="text-center p-6 hover:shadow-lg transition-shadow">
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
              </Card> */}
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
