"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Grid3X3, List, ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
// Product images now use public paths

const ProductShowcase = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  // Product data based on Vegnar's actual products
  const products = [
    // Subway Tiles (10 products)
    {
      id: "1",
      name: "White Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "/assets/product-subway.jpg",
      href: "/products/white-subway-tiles"
    },
    {
      id: "2",
      name: "Black Subway Tiles",
      category: "Subway Tiles", 
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/black-subway-tiles"
    },
    {
      id: "3",
      name: "Grey Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/grey-subway-tiles"
    },
    {
      id: "4",
      name: "Beveled Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/beveled-subway-tiles"
    },
    {
      id: "5",
      name: "Crackle Subway Tiles",
      category: "Subway Tiles", 
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/crackle-subway-tiles"
    },
    {
      id: "6",
      name: "Matte Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400", 
      href: "/products/matte-subway-tiles"
    },
    {
      id: "7",
      name: "Glossy Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "/assets/product-subway.jpg",
      href: "/products/glossy-subway-tiles"
    },
    {
      id: "8",
      name: "Marble Look Subway",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/marble-subway-tiles"
    },
    {
      id: "9", 
      name: "Wood Look Subway",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/wood-subway-tiles"
    },
    {
      id: "10",
      name: "Textured Subway Tiles",
      category: "Subway Tiles",
      size: "100x200 MM", 
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/textured-subway-tiles"
    },

    // Outdoor Tiles (10 products)
    {
      id: "11",
      name: "Outdoor Stone Look",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "/assets/product-outdoor.jpg",
      href: "/products/outdoor-stone-look"
    },
    {
      id: "12",
      name: "Anti-Slip Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM", 
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/anti-slip-outdoor"
    },
    {
      id: "13",
      name: "Concrete Look Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", 
      href: "/products/concrete-outdoor"
    },
    {
      id: "14",
      name: "Natural Stone Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "/assets/product-outdoor.jpg",
      href: "/products/natural-stone-outdoor"
    },
    {
      id: "15",
      name: "Wood Look Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/wood-look-outdoor"
    },
    {
      id: "16",
      name: "Travertine Look Outdoor",
      category: "Outdoor Tiles", 
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/travertine-outdoor"
    },
    {
      id: "17",
      name: "Slate Look Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/slate-outdoor"
    },
    {
      id: "18",
      name: "Sandstone Look Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "/assets/product-outdoor.jpg",
      href: "/products/sandstone-outdoor"
    },
    {
      id: "19",
      name: "Granite Look Outdoor", 
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/granite-outdoor"
    },
    {
      id: "20",
      name: "Limestone Look Outdoor",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400", 
      href: "/products/limestone-outdoor"
    },

    // Porcelain Floor Tiles (10 products)
    {
      id: "21",
      name: "Polished Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      href: "/products/polished-porcelain"
    },
    {
      id: "22",
      name: "Matt Porcelain Floor",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/products/matt-porcelain-floor"
    },
    {
      id: "23",
      name: "Marble Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM", 
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/marble-porcelain"
    },
    {
      id: "24",
      name: "Wood Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/wood-porcelain"
    },
    {
      id: "25",
      name: "Stone Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      href: "/products/stone-porcelain"
    },
    {
      id: "26",
      name: "Concrete Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", 
      href: "/products/concrete-porcelain"
    },
    {
      id: "27",
      name: "Terrazzo Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/terrazzo-porcelain"
    },
    {
      id: "28",
      name: "Metallic Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/metallic-porcelain"
    },
    {
      id: "29",
      name: "Fabric Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      href: "/products/fabric-porcelain"
    },
    {
      id: "30", 
      name: "Vintage Effect Porcelain",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/products/vintage-porcelain"
    },

    // Large Slab Tiles (10 products) 
    {
      id: "31",
      name: "Calacatta Marble Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "/assets/product-slab.jpg",
      href: "/products/calacatta-slab"
    },
    {
      id: "32",
      name: "Carrara Marble Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/carrara-slab"
    },
    {
      id: "33",
      name: "Nero Marquina Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/nero-marquina-slab"
    },
    {
      id: "34",
      name: "Emperador Marble Slab",
      category: "Large Slab",
      size: "1200x2400 MM", 
      image: "/assets/product-slab.jpg",
      href: "/products/emperador-slab"
    },
    {
      id: "35",
      name: "Onyx Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/onyx-slab"
    },
    {
      id: "36",
      name: "Travertine Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/travertine-slab"
    },
    {
      id: "37",
      name: "Granite Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", 
      href: "/products/granite-slab"
    },
    {
      id: "38",
      name: "Quartzite Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "/assets/product-slab.jpg",
      href: "/products/quartzite-slab"
    },
    {
      id: "39",
      name: "Concrete Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/concrete-slab"
    },
    {
      id: "40",
      name: "Wood Look Slab",
      category: "Large Slab",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/wood-slab"
    },

    // Fullbody Tiles (10 products)
    {
      id: "41",
      name: "Natural Stone Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/products/natural-fullbody"
    },
    {
      id: "42",
      name: "Concrete Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/concrete-fullbody"
    },
    {
      id: "43",
      name: "Marble Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/marble-fullbody"
    },
    {
      id: "44",
      name: "Granite Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/products/granite-fullbody"
    },
    {
      id: "45",
      name: "Sandstone Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/sandstone-fullbody"
    },
    {
      id: "46", 
      name: "Limestone Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/limestone-fullbody"
    },
    {
      id: "47",
      name: "Slate Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/slate-fullbody"
    },
    {
      id: "48",
      name: "Travertine Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/products/travertine-fullbody"
    },
    {
      id: "49",
      name: "Basalt Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/basalt-fullbody"
    },
    {
      id: "50",
      name: "Quartzite Fullbody",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/quartzite-fullbody"
    },

    // Sanitaryware (10 products)
    {
      id: "51",
      name: "Table Top Basin",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "/assets/product-sanitaryware.jpg",
      href: "/products/table-top-basin"
    },
    {
      id: "52",
      name: "Wall Hung Basin",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/wall-hung-basin"
    },
    {
      id: "53",
      name: "Pedestal Basin",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/pedestal-basin"
    },
    {
      id: "54",
      name: "One Piece Closet",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "/assets/product-sanitaryware.jpg",
      href: "/products/one-piece-closet"
    },
    {
      id: "55",
      name: "Two Piece Closet",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/two-piece-closet"
    },
    {
      id: "56",
      name: "Wall Hung Closet",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/wall-hung-closet"
    },
    {
      id: "57",
      name: "Urinal",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/products/urinal"
    },
    {
      id: "58",
      name: "Bidet",
      category: "Sanitaryware", 
      size: "Standard Size",
      image: "/assets/product-sanitaryware.jpg",
      href: "/products/bidet"
    },
    {
      id: "59",
      name: "Shower Tray",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1584622781584-8bc5d2ba16ae?w=400",
      href: "/products/shower-tray"
    },
    {
      id: "60",
      name: "Bath Tub",
      category: "Sanitaryware",
      size: "Standard Size",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/products/bath-tub"
    }
  ];

  const categories = [
    "All Products",
    "Subway Tiles", 
    "Outdoor Tiles",
    "Porcelain Floor",
    "Large Slab", 
    "Fullbody Tiles",
    "Sanitaryware"
  ];

  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(product => product.category.includes(activeCategory));

  const { containerRef: gridRef, visibleItems } = useStaggeredAnimation(filteredProducts.length, 150);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header with scroll animation */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-orange font-semibold tracking-wider uppercase text-sm">
            Choose Our Collection
          </span>
          <h2 className="section-title mt-4 mb-6">
            You can choose from a variety of tiles at Vegnar
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our tile collection includes fullbody tiles, wall tiles, outdoor porcelain tiles
            20 mm thick, subway tiles, slab tiles, sanitaryware, and so on.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                   ? 'bg-orange text-white shadow-orange'
                   : 'bg-secondary text-muted-foreground hover:bg-orange/20 hover:text-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-orange text-white' 
                  : 'bg-secondary text-muted-foreground hover:bg-orange/20'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-orange text-white' 
                  : 'bg-secondary text-muted-foreground hover:bg-orange/20'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid with staggered animation */}
        <div 
          ref={gridRef}
          className={`grid gap-8 mb-16 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              className={cn(
                "transition-all duration-700 ease-out",
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95"
              )}
            />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Button variant="outline-orange" size="lg" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;