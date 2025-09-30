import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomizationSection from "@/components/CustomizationSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "#1 Outdoor Tiles Manufacturer in India | 20mm Outdoor Tiles| Vegnar Surfaces",
  description: "#1 Outdoor tiles manufacturer in India. Premium porcelain pavers, 2cm tiles, heavy-duty R11 surface tiles for garden, swimming pool & outdoor spaces.",
  keywords: "#1 outdoor tiles manufacturer in India, outdoor tiles manufacturer, outdoor tile manufacturers in India, outdoor tile companies, outdoor tile company, exterior tile manufacturers, premium outdoor tiles, outdoor tiles in India, commercial outdoor tile, outdoor tiles wholesale, buy outdoor tile, big outdoor tile, custom outdoor tiles, outdoor tiles best price, premium exterior wall tiles, wholesale outdoor tile flooring, premium porcelain outdoor tiles, premium ceramic tile company, outdoor floor tiles companies, premium tile brand, premium tiles brand in India, premium tiles company, premium tiles in India, premium brand tiles, premium tile outlet, premium tile & stone, premium tile inc, premium tiles near me, q tiles India, outdoor tiles Miami, outdoor tiles Doral, yard tiles, 2x2 outdoor tiles, 4x4 outdoor tiles, bathroom outdoor tiles, kitchen outdoor tiles, luxury outdoor tiles, porcelain pavers, 2cm tiles, heavy duty tiles, tiles for swimming pool area, garden tiles, R11 surface tiles, Vegnar Tiles",
  openGraph: {
    title: "Premium Tiles Manufacturer India | Vegnar Surfaces",
    description: "India's leading tiles manufacturer. Premium marble, ceramic, granite tiles. 1000+ designs, export quality, wholesale prices. Free samples available.",
    images: [{
      url: '/assets/hero-marble-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'Premium tiles collection by Vegnar Surfaces'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Tiles Manufacturer India | Vegnar Surfaces",
    description: "India's leading tiles manufacturer. Premium marble, ceramic, granite tiles. 1000+ designs, export quality.",
    images: ['/assets/hero-marble-bg.jpg'],
  },
  alternates: {
    canonical: 'https://vegnarsurfaces.com',
  },
};

// Move static data outside component to prevent recreation
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Outdoor Pavers 2cm",
    category: "Porcelain Pavers (2 cm)",
    size: "600x600 MM",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
    categoryId: "porcelain-pavers"
  },
  {
    id: 2,
    name: "Classic White Subway Tiles",
    category: "Subway Tiles",
    size: "100x200 MM", 
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600",
    categoryId: "subway-tiles"
  },
  {
    id: 3,
    name: "Marble Effect Mosaic",
    category: "Mosaic Tiles",
    size: "300x300 MM",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    categoryId: "mosaic-tiles"
  },
  {
    id: 4,
    name: "Large Format Floor Tiles",
    category: "Porcelain Tiles", 
    size: "800x800 MM",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    categoryId: "porcelain-tiles"
  },
  {
    id: 5,
    name: "Ultra-thin Porcelain Slabs",
    category: "Large Format Porcelain Slabs",
    size: "1600x3200 MM",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600",
    categoryId: "large-format-slabs"
  },
  {
    id: 6,
    name: "Bendable Ceramic Tiles",
    category: "Flexible Tiles",
    size: "500x1000 MM",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    categoryId: "flexible-tiles"
  }
];

const FEATURED_INSPIRATIONS = [
  { id: 1, title: "Outdoor Patio Design", image: "/assets/product-outdoor.jpg", description: "Modern outdoor space with 2cm porcelain pavers", category: "Porcelain Pavers" },
  { id: 2, title: "Kitchen Backsplash", image: "/assets/product-subway.jpg", description: "Classic white subway tile kitchen", category: "Subway Tiles" },
  { id: 3, title: "Bathroom Feature Wall", image: "/assets/about-tiles-test.jpg", description: "Stunning mosaic feature wall", category: "Mosaic Tiles" },
  { id: 4, title: "Living Room Floor", image: "/assets/hero-marble-bg.jpg", description: "Elegant living room flooring", category: "Porcelain Tiles" },
  { id: 5, title: "Kitchen Countertop", image: "/assets/product-slab.jpg", description: "Seamless kitchen countertop design", category: "Large Format Slabs" },
  { id: 6, title: "Curved Wall Design", image: "/assets/about-tiles-test.jpg", description: "Innovative curved wall installation", category: "Flexible Tiles" }
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Premium Tiles Manufacturer India - Vegnar Surfaces',
    description: 'India\'s leading tiles manufacturer offering premium marble, ceramic, granite, porcelain tiles with 1000+ designs and export quality.',
    url: 'https://vegnarsurfaces.com',
    mainEntity: {
      '@type': 'Organization',
      name: 'Vegnar Surfaces',
      description: 'Premium tiles manufacturer in India',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Premium Tiles Collection',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Marble Tiles',
              category: 'Building Materials',
              description: 'Premium marble tiles for luxury interiors'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Ceramic Tiles',
              category: 'Building Materials',
              description: 'High-quality ceramic tiles for all applications'
            }
          }
        ]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        
        {/* Featured Products Section */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Our Collection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our premium range of ceramic and porcelain tiles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={`/product/${product.id}`}>
                        <Button size="sm" variant="secondary" className="bg-white/90 text-charcoal">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-charcoal font-medium">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">Size: {product.size}</p>
                    <Link href={`/products?category=${product.categoryId}`}>
                      <Button variant="outline" className="w-full">
                        View Category
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products">
                <Button size="lg" className="bg-charcoal text-white hover:bg-charcoal-light">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* Featured Inspirations Section */}
        <section className="py-20 marble-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Design Inspiration</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get inspired by our stunning tile installations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_INSPIRATIONS.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-charcoal">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-charcoal font-medium">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/inspiration" prefetch={true}>
                <Button size="lg" className="bg-charcoal text-white hover:bg-charcoal-light">
                  View All Inspiration
                </Button>
              </Link>
            </div>
          </div>
        </section>
        </main>
        <CustomizationSection />
        <Footer />
      </div>
    </>
  );
}
