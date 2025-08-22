"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, Grid3X3, List } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

function ProductsContent() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, productsData] = await Promise.all([
          api.getCategories(),
          api.getProducts()
        ]);
        
        const categoryNames = categoriesData.map((cat: any) => cat.category_name);
        setCategories(["All", ...categoryNames]);
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    const urlCategory = searchParams.get('category');
    
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
    if (urlCategory) {
      const categoryMap: { [key: string]: string } = {
        'subway-tiles': 'Subway Tiles',
        'outdoor-tiles': 'Outdoor Tiles',
        'porcelain-pavers': 'Outdoor Tiles',
        'mosaic-tiles': 'Fullbody Tiles',
        'large-format-slabs': 'Slab Tiles'
      };
      setActiveCategory(categoryMap[urlCategory] || 'All');
    }
  }, [searchParams]);





  const filteredProducts = products.filter(product => {
    const categoryName = product.product_category?.category_name || '';
    const matchesCategory = activeCategory === "All" || categoryName === activeCategory;
    const matchesSearch = product.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) || false;
    return matchesCategory && matchesSearch;
  });

  return (
    <>
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
              {loading ? (
                <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-24 bg-gray-200 animate-pulse rounded-lg"></div>
                  ))}
                </div>
              ) : (
                categories.map((category) => (
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
                ))
              )}
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
          {/* <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">
                {activeCategory === "All" ? "All Products" : activeCategory}
              </h2>
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
            </div>
          </div> */}

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
                  id={product.id.toString()}
                  name={product.product_name}
                  category={product.product_category?.category_name || 'Uncategorized'}
                  size={product.size}
                  image={product.image?.url ? `${API_URL}${product.image.url}` : '/assets/product-subway.jpg'}
                  href={`/product/${product.documentId}`}
                  colors={product.colors || []}
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
    </>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}