"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, Grid3X3, List } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

function ProductsContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [activeSurfaceType, setActiveSurfaceType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [surfaceTypes, setSurfaceTypes] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const getSizes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/sizes`, {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      console.log("malammiya", data);

      return data.data || [];
    } catch (error) {
      console.error("Error fetching sizes:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          categoriesData,
          productsData,
          sizesData,
          colorsData,
          surfaceTypesData,
        ] = await Promise.all([
          api.getCategories(),
          api.getProducts(),
          getSizes(),
          api.getColors(),
          api.getSurfaceType(),
        ]);

        const categoryNames = categoriesData.map(
          (cat: any) => cat.category_name
        );
        setCategories(["All", ...categoryNames]);

        setSizes(
          sizesData.map((size: any) => size.size_name || size.name || size)
        );
        setColors(
          colorsData.map(
            (color: any) => color.color_name || color.name || color
          )
        );
        setSurfaceTypes(
          surfaceTypesData.map(
            (surface: any) =>
              surface.surface_name || surface.name || surface.surface_type_name
          )
        );
        setProducts(productsData);
        console.log("Products loaded:", productsData.length);
        console.log("Categories:", categoryNames);
        console.log("Sample product:", productsData[0]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const urlSearch = searchParams.get("search");
    const urlCategory = searchParams.get("category");

    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
    if (urlCategory) {
      const categoryMap: { [key: string]: string } = {
        "subway-tiles": "Subway Tiles",
        "outdoor-tiles": "Outdoor Tiles",
        "porcelain-pavers": "Outdoor Tiles",
        "mosaic-tiles": "Fullbody Tiles",
        "large-format-slabs": "Slab Tiles",
      };
      setActiveCategory(categoryMap[urlCategory] || "All");
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const categoryName = product.product_category?.category_name || "";
    const matchesCategory =
      activeCategory === "All" || categoryName === activeCategory;
    const matchesSize =
      !activeSize ||
      (product.sizes &&
        product.sizes.some((size: any) => size.size_name === activeSize));
    const matchesColor =
      !activeColor ||
      (product.colors &&
        product.colors.some((color: any) =>
          typeof color === "string"
            ? color === activeColor
            : color.color_name === activeColor
        ));
    const matchesSurfaceType =
      !activeSurfaceType ||
      (product.surface_types &&
        product.surface_types.some(
          (surface: any) => surface.surface_name === activeSurfaceType
        ));
    const matchesSearch =
      product.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false;
    return (
      matchesCategory &&
      matchesSize &&
      matchesColor &&
      matchesSurfaceType &&
      matchesSearch
    );
  });

  console.log(
    "Filtered products:",
    filteredProducts.length,
    "Active category:",
    activeCategory
  );

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
            <p className="text-xl opacity-90">
              Discover premium ceramic tiles and sanitaryware
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
  <section className="py-8 marble-pattern">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-sm border p-6 lg:sticky lg:top-24">
                <h3 className="text-lg font-semibold text-charcoal mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange text-sm"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {loading ? (
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-8 bg-gray-200 animate-pulse rounded"
                          ></div>
                        ))}
                      </div>
                    ) : (
                      categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            activeCategory === category
                              ? "bg-orange text-white"
                              : "text-gray-700 hover:bg-orange/10 hover:text-orange"
                          }`}
                        >
                          {category}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Size
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setActiveSize(size)}
                        className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
                          activeSize === size
                            ? "bg-orange text-white"
                            : "text-gray-700 hover:bg-orange/10 hover:text-orange border border-gray-200"
                        }`}
                        title={size}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Color
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setActiveColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          activeColor === color
                            ? "border-orange scale-110"
                            : "border-gray-300 hover:border-orange hover:scale-105"
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Surface Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Surface Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {surfaceTypes.map((surfaceType) => (
                      <button
                        key={surfaceType}
                        onClick={() => setActiveSurfaceType(surfaceType)}
                        className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
                          activeSurfaceType === surfaceType
                            ? "bg-orange text-white"
                            : "text-gray-700 hover:bg-orange/10 hover:text-orange border border-gray-200"
                        }`}
                        title={surfaceType}
                      >
                        {surfaceType}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                    setActiveSize("");
                    setActiveColor("");
                    setActiveSurfaceType("");
                  }}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>

            {/* Right Content - Products */}
            <div className="lg:w-3/4">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gray-600">
                  {filteredProducts.length} products found
                </div>

                {/* View Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-orange text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-orange/20"
                    }`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-orange text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-orange/20"
                    }`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      id={product.id.toString()}
                      name={product.product_name}
                      category={
                        product.product_category?.category_name ||
                        "Uncategorized"
                      }
                      sizes={product.sizes}
                      image={
                        product.image?.url || "/assets/product-subway.jpg"
                      }
                      href={`/product/${product.documentId}`}
                      colors={product.colors || []}
                      surfaceTypes={product.surface_types || []}
                      viewMode={viewMode}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                      setActiveSize("All");
                      setActiveColor("All");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
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
