"use client";

import { useEffect, useState, useMemo } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    const parts = path.split("/").filter(Boolean);
    if (parts[0] === "catalog" && parts[1]) {
      const decoded = decodeURIComponent(parts.slice(1).join("/"));
      const known = [
        "All",
        "Large Slab Collection",
        "Subway Collection",
        "Outdoor Collection",
        "Mosaics Collection",
        "200x200MM Collection",
      ];
      const match = known.find(
        (c) => c.toLowerCase() === decoded.toLowerCase()
      );
      if (match) setSelectedCategory(match);
    }
  }, []);

  const categories = [
    "All",
    "Large Slab Collection",
    "Subway Collection",
    "Outdoor Collection",
    "Mosaics Collection",
    "200x200MM Collection",
  ];

  const catalogs = useMemo(() => [
    {
      id: 1,
      title: "Porceluxe Collection",
      description: "Premium porcelain tiles collection with elegant designs and superior quality",
      pages: 24,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "/catalogs/thumbnails/poreluxe.png",
      featured: true,
      driveViewLink: "https://drive.google.com/file/d/18jRkqKhIOy_4DocQrJJn4PQoIXkzds18/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/18jRkqKhIOy_4DocQrJJn4PQoIXkzds18/view?usp=sharing",
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
      image: "/catalogs/thumbnails/carving.png",
      driveViewLink: "https://drive.google.com/file/d/1eBrsM5NYZbzk7Ijc63w4k8bV8rkh2P66/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1eBrsM5NYZbzk7Ijc63w4k8bV8rkh2P66/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/carving.png",
    },
    {
      id: 3,
      title: "Artisan Carve Series B",
      description: "Extended collection of carved tiles with unique surface textures",
      pages: 18,
      size: "7 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "/catalogs/thumbnails/carving.png",
      driveViewLink: "https://drive.google.com/file/d/10i9c8OPZOFJDzsdQRkgM1AkYf6WhV8GH/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/10i9c8OPZOFJDzsdQRkgM1AkYf6WhV8GH/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/carving.png",
    },
    {
      id: 4,
      title: "GrooveStone A",
      description: "Natural stone-inspired tiles with distinctive groove patterns",
      pages: 20,
      size: "8 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "/catalogs/thumbnails/1600mm.png",
      driveViewLink: "https://drive.google.com/file/d/1A1Pdi-FHfSg9rbJFW9dsWEtQWMaYifH8/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1A1Pdi-FHfSg9rbJFW9dsWEtQWMaYifH8/view?usp=sharing",
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
      image: "/catalogs/thumbnails/800-1600mm.png",
      driveViewLink: "https://drive.google.com/file/d/13pvxGijiLSEejB3Fs0OKniOB5Sel2oLr/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/13pvxGijiLSEejB3Fs0OKniOB5Sel2oLr/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/800-1600mm.png",
    },
    {
      id: 6,
      title: "GrooveStone C",
      description: "Complete GrooveStone range with premium stone-like appearances",
      pages: 24,
      size: "10 MB",
      format: "PDF",
      category: "Large Slab Collection",
      image: "/catalogs/thumbnails/rediant.png",
      driveViewLink: "https://drive.google.com/file/d/19nXyepOdNHz7CqbPywYUbvyogHRRZEDo/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/19nXyepOdNHz7CqbPywYUbvyogHRRZEDo/view?usp=sharing",
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
      image: "/catalogs/thumbnails/ambiens.png",
      driveViewLink: "https://drive.google.com/file/d/1N1LFvnWbb0nZLMZF_zBjYXWgioD3wJPx/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1N1LFvnWbb0nZLMZF_zBjYXWgioD3wJPx/view?usp=sharing",
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
      image: "/catalogs/thumbnails/ambiens.png",
      driveViewLink: "https://drive.google.com/file/d/1gI0UcDZklPzLHa8mBlRSMkxgIs9TQHXt/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1gI0UcDZklPzLHa8mBlRSMkxgIs9TQHXt/view?usp=sharing",
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
      image: "/catalogs/thumbnails/ambiens.png",
      driveViewLink: "https://drive.google.com/file/d/1dFNsu_np1L_KNHaK5Q6YtASO5pubyTUU/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1dFNsu_np1L_KNHaK5Q6YtASO5pubyTUU/view?usp=sharing",
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
      image: "/catalogs/thumbnails/Matt Collection.png",
      driveViewLink: "https://drive.google.com/file/d/1x7I1ewezocZKcx2KE9xX0F_Bon56TN4i/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1x7I1ewezocZKcx2KE9xX0F_Bon56TN4i/view?usp=sharing",
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
      image: "/catalogs/thumbnails/highgloss.png",
      driveViewLink: "https://drive.google.com/file/d/1WAJgCQbHaaNLSv6B7kWoq4JrNk5NVQfK/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1WAJgCQbHaaNLSv6B7kWoq4JrNk5NVQfK/view?usp=sharing",
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
      image: "/catalogs/thumbnails/highgloss.png",
      driveViewLink: "https://drive.google.com/file/d/1Q9ZDDLaQGTnp83AmhwPow_8sUt98MiL5/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1Q9ZDDLaQGTnp83AmhwPow_8sUt98MiL5/view?usp=sharing",
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
      image: "/catalogs/thumbnails/peralshine.png",
      driveViewLink: "https://drive.google.com/file/d/1bii5wIenYeIJYcR3DEqFh3TWVPUcqFa3/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1bii5wIenYeIJYcR3DEqFh3TWVPUcqFa3/view?usp=sharing",
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
      image: "/catalogs/thumbnails/redianceluxe.png",
      driveViewLink: "https://drive.google.com/file/d/1VThQvyq4JJxkGmdDMuHw9h5b91XtSrtK/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1VThQvyq4JJxkGmdDMuHw9h5b91XtSrtK/view?usp=sharing",
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
      image: "/catalogs/thumbnails/luxeA.png",
      driveViewLink: "https://drive.google.com/file/d/1lKPvyVJ00gkwJQmLCmbEmMNi_ID7gSr_/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1lKPvyVJ00gkwJQmLCmbEmMNi_ID7gSr_/view?usp=sharing",
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
      image: "/catalogs/thumbnails/luxeA.png",
      driveViewLink: "https://drive.google.com/file/d/1_5EAOy5M23gUfQksbdPlsLH1KiiJp-wf/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1_5EAOy5M23gUfQksbdPlsLH1KiiJp-wf/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/luxeA.png",
    },
    {
      id: 21,
      title: "FluteLuxe Series 75×300 mm",
      description: "Elegant fluted subway tiles in premium 75x300mm format",
      pages: 16,
      size: "7 MB",
      format: "PDF",
      category: "Subway Collection",
      image: "/catalogs/thumbnails/FluteLuxe Series 75×300 mm.png",
      driveViewLink: "https://drive.google.com/file/d/1uqsF8FT7pKoGKgF6BttKhj36fk57Vwe8/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1uqsF8FT7pKoGKgF6BttKhj36fk57Vwe8/view?usp=sharing",
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
      image: "/catalogs/thumbnails/MetroLuxe 65×260 mm.png",
      driveViewLink: "https://drive.google.com/file/d/1EOY7uTKqNpIXlFlAQB9bKnW8aoXYi6UT/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1EOY7uTKqNpIXlFlAQB9bKnW8aoXYi6UT/view?usp=sharing",
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
      image: "/catalogs/thumbnails/MetroLuxe Pente 65×260 mm.png",
      driveViewLink: "https://drive.google.com/file/d/1gfVp7jg5UlFgotKqpCFPlXRfWGwlw-jx/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1gfVp7jg5UlFgotKqpCFPlXRfWGwlw-jx/view?usp=sharing",
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
      image: "/catalogs/thumbnails/MetroLuxe Series 75×300 mm.png",
      driveViewLink: "https://drive.google.com/file/d/1xgYYOnTieJHhIFirJZrjAhii7C4Q9IY9/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1xgYYOnTieJHhIFirJZrjAhii7C4Q9IY9/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/MetroLuxe Series 75×300 mm.png",
    },
    {
      id: 25,
      title: "Outdoor Collection A",
      description: "Weather-resistant outdoor tiles for terraces and patios",
      pages: 20,
      size: "9 MB",
      format: "PDF",
      category: "Outdoor Collection",
      image: "/catalogs/thumbnails/Outdoor Collection A.png",
      driveViewLink: "https://drive.google.com/file/d/1yq6RcQitw-xnYhc-pPmi1-BeBqOLw4-d/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1yq6RcQitw-xnYhc-pPmi1-BeBqOLw4-d/view?usp=sharing",
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
      image: "/catalogs/thumbnails/Outdoor Collection A.png",
      driveViewLink: "https://drive.google.com/file/d/1iBbk3vYJ6xeQH0XxwwtOp73aX92NpNCD/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1iBbk3vYJ6xeQH0XxwwtOp73aX92NpNCD/view?usp=sharing",
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
      image: "/catalogs/thumbnails/Outdoor Collection A.png",
      driveViewLink: "https://drive.google.com/file/d/1Y__d2wa56IoYXA4I3cHDEjZlGA7lXDfs/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1Y__d2wa56IoYXA4I3cHDEjZlGA7lXDfs/view?usp=sharing",
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
      image: "/catalogs/thumbnails/Outdoor Collection A.png",
      driveViewLink: "https://drive.google.com/file/d/1_p0phH2_ubuZHoxRMt4oPMRPGobbTURV/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1_p0phH2_ubuZHoxRMt4oPMRPGobbTURV/view?usp=sharing",
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
      image: "/catalogs/thumbnails/Outdoor Collection A.png",
      driveViewLink: "https://drive.google.com/file/d/1x9Fxa-r01l8hrYQLG5xn_ipYuyAaJaAK/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1x9Fxa-r01l8hrYQLG5xn_ipYuyAaJaAK/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Outdoor Collection A.png",
    },
    {
      id: 30,
      title: "AquaVista Pool Collection",
      description: "Specialized pool and spa mosaic tiles with water-resistant properties",
      pages: 24,
      size: "12 MB",
      format: "PDF",
      category: "Mosaics Collection",
      image: "/catalogs/thumbnails/AquaVista Pool Collection.png",
      driveViewLink: "https://drive.google.com/file/d/17ZG1nZfa2k_-6L9A3_80-bO6vXDZtMox/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/17ZG1nZfa2k_-6L9A3_80-bO6vXDZtMox/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/AquaVista Pool Collection.png",
    },
    {
      id: 31,
      title: "Master Collection",
      description: "Comprehensive mosaic collection with artistic patterns and designs",
      pages: 32,
      size: "15 MB",
      format: "PDF",
      category: "Mosaics Collection",
      image: "/catalogs/thumbnails/Master Collection.png",
      driveViewLink: "https://drive.google.com/file/d/1yLZ640fV1hlNhEWdO3zIwsIdoSti9Gu1/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1yLZ640fV1hlNhEWdO3zIwsIdoSti9Gu1/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Master Collection.png",
    },
    {
      id: 40,
      title: "Bloomora 200×200 mm",
      description: "Premium 200×200 mm tiles collection",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
      driveViewLink: "https://drive.google.com/file/d/1SJDXP5n7LuHm_yl94PE5_VRDmca8vfK9/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1SJDXP5n7LuHm_yl94PE5_VRDmca8vfK9/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Bloomora 200×200 mm.png",
    },
    {
      id: 41,
      title: "MagnaStone 200×200 mm",
      description: "Premium 200×200 mm tiles collection",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image: "/catalogs/thumbnails/Mengen.png",
      driveViewLink: "https://drive.google.com/file/d/1hSf4ifqAiMbNH1uUf75XlEdpZsIDbNA2/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1hSf4ifqAiMbNH1uUf75XlEdpZsIDbNA2/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Mengen.png",
    },
    {
      id: 42,
      title: "MonoLux 200×200 mm",
      description: "Premium 200×200 mm tiles collection",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image: "/catalogs/thumbnails/Monopole.png",
      driveViewLink: "https://drive.google.com/file/d/1T-YRn_4TBv5vJd-NopJbUogbXyg5BPVO/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1T-YRn_4TBv5vJd-NopJbUogbXyg5BPVO/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Monopole.png",
    },
    {
      id: 43,
      title: "OpalTone 200×200 mm",
      description: "Premium 200×200 mm tiles collection",
      pages: 12,
      size: "5 MB",
      format: "PDF",
      category: "200x200MM Collection",
      image: "/catalogs/thumbnails/Opaque.png",
      driveViewLink: "https://drive.google.com/file/d/1tPSl6ZF1HPGYDVTNBEyjsA5P7ko5Kvsx/view?usp=sharing",
      driveDownloadLink: "https://drive.google.com/file/d/1tPSl6ZF1HPGYDVTNBEyjsA5P7ko5Kvsx/view?usp=sharing",
      thumbnailImage: "/catalogs/thumbnails/Opaque.png",
    },
  ], []);

  const filteredCatalogs = useMemo(() => 
    selectedCategory === "All"
      ? catalogs
      : catalogs.filter((catalog) => catalog.category === selectedCategory),
    [catalogs, selectedCategory]
  );

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              E-Catalogue
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download our comprehensive product catalogs and technical specifications
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 marble-pattern">
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
                onClick={() => {
                  if (category === "All") {
                    router.push("/catalog");
                  } else {
                    router.push(`/catalog/${encodeURIComponent(category)}`);
                  }
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="marble-pattern">
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
                    <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg relative">
                      <Image
                        src={catalog.thumbnailImage || catalog.image}
                        alt={catalog.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                          window.open(catalog.driveDownloadLink, "_blank");
                        }}
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                        onClick={() =>
                          window.open(catalog.driveViewLink, "_blank")
                        }
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange text-orange h-10 w-10 p-0 flex items-center justify-center"
                        onClick={() => {
                          const shareUrl = catalog.driveViewLink;
                          const shareText = `Check out ${catalog.title} - ${catalog.description}`;

                          if (navigator.share) {
                            navigator.share({
                              title: catalog.title,
                              text: shareText,
                              url: shareUrl,
                            });
                          } else {
                            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
                              shareText + " " + shareUrl
                            )}`;
                            const emailUrl = `mailto:?subject=${encodeURIComponent(
                              catalog.title
                            )}&body=${encodeURIComponent(
                              shareText + "\n\n" + shareUrl
                            )}`;

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

      <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charcoal mb-2">
                Plate Packaging
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Vegnar Surfaces plate packaging details
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/YOUR_PLATE_PACKAGING_FILE_ID/view",
                      "_blank"
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-md border border-orange text-orange px-3 py-2 text-sm hover:bg-orange/10 transition-colors"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?export=download&id=YOUR_PLATE_PACKAGING_FILE_ID",
                      "_blank"
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-md border border-orange text-orange px-3 py-2 text-sm hover:bg-orange/10 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
                <button
                  onClick={async () => {
                    const url =
                      "https://drive.google.com/file/d/YOUR_PLATE_PACKAGING_FILE_ID/view";
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: "Vegnar Surfaces – Plate Packaging",
                          url,
                        });
                      } else {
                        await navigator.clipboard.writeText(url);
                        alert("Link copied to clipboard");
                      }
                    } catch (e) {
                      // user cancelled or share not available
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-md border border-orange text-orange px-3 py-2 text-sm hover:bg-orange/10 transition-colors"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}