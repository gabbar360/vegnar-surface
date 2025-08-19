"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, Grid3X3, List } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Subway Tiles",
    "Outdoor Tiles", 
    "Porcelain Floor",
    "Slab Tiles",
    "Fullbody Tiles",
    "Sanitaryware"
  ];

  const products = [
    // Subway Tiles (10 products)
    {
      id: "1",
      name: "Subway Tiles 100x200mm",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "/assets/product-subway.jpg",
      href: "/product/subway-tile-100x200mm"
    },
    {
      id: "2",
      name: "Subway Tiles 75x150mm", 
      category: "Subway Tiles",
      size: "75x150 MM",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      href: "/product/subway-tile-75x150mm"
    },
    {
      id: "3",
      name: "Beveled Subway 100x300mm",
      category: "Subway Tiles",
      size: "100x300 MM",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      href: "/product/beveled-subway-100x300mm"
    },
    {
      id: "4",
      name: "Metro Glossy 150x75mm",
      category: "Subway Tiles",
      size: "150x75 MM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      href: "/product/metro-glossy-150x75mm"
    },
    {
      id: "5",
      name: "Classic White Subway 100x200mm",
      category: "Subway Tiles",
      size: "100x200 MM",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=400",
      href: "/product/classic-white-subway-100x200mm"
    },

    // Outdoor Tiles (10 products)
    {
      id: "11",
      name: "Outdoor Porcelain 600x600mm",
      category: "Outdoor Tiles",
      size: "600x600 MM",
      image: "/assets/product-outdoor.jpg",
      href: "/product/outdoor-porcelain-tiles-600x600"
    },
    {
      id: "12",
      name: "Outdoor Porcelain 600x900mm",
      category: "Outdoor Tiles", 
      size: "600x900 MM",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      href: "/product/outdoor-porcelain-tiles-600x900"
    },
    {
      id: "13",
      name: "Anti-Slip Outdoor 600x1200mm",
      category: "Outdoor Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
      href: "/product/anti-slip-outdoor-600x1200"
    },
    {
      id: "14",
      name: "Stone Effect Outdoor 800x800mm",
      category: "Outdoor Tiles",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
      href: "/product/stone-effect-outdoor-800x800"
    },
    {
      id: "15",
      name: "Wood Look Outdoor 200x1200mm",
      category: "Outdoor Tiles",
      size: "200x1200 MM",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400",
      href: "/product/wood-look-outdoor-200x1200"
    },

    // Porcelain Floor (10 products)
    {
      id: "21",
      name: "Porcelain Floor 800x800mm",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      href: "/product/porcelain-tiles-800x800mm"
    },
    {
      id: "22",
      name: "Marble Effect 600x1200mm",
      category: "Porcelain Floor",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      href: "/product/marble-effect-600x1200mm"
    },
    {
      id: "23",
      name: "Wood Grain 200x1200mm",
      category: "Porcelain Floor",
      size: "200x1200 MM",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      href: "/product/wood-grain-200x1200mm"
    },
    {
      id: "24",
      name: "Polished Porcelain 600x600mm",
      category: "Porcelain Floor",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400",
      href: "/product/polished-porcelain-600x600mm"
    },
    {
      id: "25",
      name: "Cement Look 800x800mm",
      category: "Porcelain Floor",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=400",
      href: "/product/cement-look-800x800mm"
    },

    // Slab Tiles (10 products)
    {
      id: "31",
      name: "Large Format Slab 1200x2400mm",
      category: "Slab Tiles",
      size: "1200x2400 MM",
      image: "/assets/product-slab.jpg",
      href: "/product/large-format-slab-1200x2400mm"
    },
    {
      id: "32",
      name: "Ultra Thin Slab 1600x3200mm",
      category: "Slab Tiles",
      size: "1600x3200 MM",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400",
      href: "/product/ultra-thin-slab-1600x3200mm"
    },
    {
      id: "33",
      name: "Calacatta Slab 1200x2700mm",
      category: "Slab Tiles",
      size: "1200x2700 MM",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
      href: "/product/calacatta-slab-1200x2700mm"
    },
    {
      id: "34",
      name: "Statuario Slab 1500x3000mm",
      category: "Slab Tiles",
      size: "1500x3000 MM",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400",
      href: "/product/statuario-slab-1500x3000mm"
    },
    {
      id: "35",
      name: "Bookmatch Slab 1200x2400mm",
      category: "Slab Tiles",
      size: "1200x2400 MM",
      image: "https://images.unsplash.com/photo-1572721546624-05bf65ad9c2a?w=400",
      href: "/product/bookmatch-slab-1200x2400mm"
    },

    // Fullbody Tiles (5 products)
    {
      id: "41",
      name: "Fullbody Porcelain 600x600mm",
      category: "Fullbody Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
      href: "/product/fullbody-porcelain-600x600mm"
    },
    {
      id: "42",
      name: "Through Body 800x800mm",
      category: "Fullbody Tiles",
      size: "800x800 MM",
      image: "https://images.unsplash.com/photo-1556228394-b8fb73c8b8c7?w=400",
      href: "/product/through-body-800x800mm"
    },
    {
      id: "43",
      name: "Homogeneous 600x1200mm",
      category: "Fullbody Tiles",
      size: "600x1200 MM",
      image: "https://images.unsplash.com/photo-1556909195-f4e1d1bf66c8?w=400",
      href: "/product/homogeneous-600x1200mm"
    },
    {
      id: "44",
      name: "Solid Color 400x400mm",
      category: "Fullbody Tiles",
      size: "400x400 MM",
      image: "https://images.unsplash.com/photo-1556909195-4b7b2e39ef0b?w=400",
      href: "/product/solid-color-400x400mm"
    },
    {
      id: "45",
      name: "Vitrified Fullbody 600x600mm",
      category: "Fullbody Tiles",
      size: "600x600 MM",
      image: "https://images.unsplash.com/photo-1556909215-4b1f8b1e7b92?w=400",
      href: "/product/vitrified-fullbody-600x600mm"
    },

    // Sanitaryware (5 products)
    {
      id: "51",
      name: "Table Top Basin",
      category: "Sanitaryware",
      size: "Standard",
      image: "/assets/product-sanitaryware.jpg",
      href: "/product/table-top-basin"
    },
    {
      id: "52",
      name: "Wall Hung Toilet",
      category: "Sanitaryware", 
      size: "Standard",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      href: "/product/wall-hung-toilet"
    },
    {
      id: "53",
      name: "Pedestal Basin",
      category: "Sanitaryware",
      size: "Standard",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      href: "/product/pedestal-basin"
    },
    {
      id: "54",
      name: "Counter Top Basin",
      category: "Sanitaryware",
      size: "Standard",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
      href: "/product/counter-top-basin"
    },
    {
      id: "55",
      name: "One Piece Toilet",
      category: "Sanitaryware",
      size: "Standard",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
      href: "/product/one-piece-toilet"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-80 bg-charcoal flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" 
            alt="Our Product Collection" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Product Collection</h1>
            <p className="text-xl opacity-90">Discover premium ceramic tiles and sanitaryware</p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-cream border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-orange text-white shadow-orange'
                      : 'bg-background text-muted-foreground hover:bg-orange/20 hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-orange text-white' 
                    : 'bg-background text-muted-foreground hover:bg-orange/20'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-orange text-white' 
                    : 'bg-background text-muted-foreground hover:bg-orange/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">
                {activeCategory === "All" ? "All Products" : activeCategory}
              </h2>
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect tiles for your specific project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              Contact Our Experts
            </Button>
            <Button variant="outline" size="lg">
              Download Catalogue
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}