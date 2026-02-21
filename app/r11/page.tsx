import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomizationSection from "@/components/CustomizationSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "#1 Outdoor Tiles Manufacturer in India | 20mm Outdoor Tiles| Vegnar Surfaces",
  description: "#1 Outdoor tiles manufacturer in India. Premium porcelain pavers, 2cm tiles, heavy-duty R11 surface tiles for garden, swimming pool & outdoor spaces.",
};

const FEATURED_INSPIRATIONS = [
  { id: 1, title: "Outdoor Patio Design", image: "/assets/product-outdoor.jpg", description: "Modern outdoor space with 2cm porcelain pavers", category: "Porcelain Pavers" },
  { id: 2, title: "Kitchen Backsplash", image: "/assets/product-subway.jpg", description: "Classic white subway tile kitchen", category: "Subway Tiles" },
  { id: 3, title: "Bathroom Feature Wall", image: "/assets/about-tiles-test.jpg", description: "Stunning mosaic feature wall", category: "Mosaic Tiles" },
  { id: 4, title: "Living Room Floor", image: "/assets/hero-marble-bg.jpg", description: "Elegant living room flooring", category: "Porcelain Tiles" },
  { id: 5, title: "Kitchen Countertop", image: "/assets/product-slab.jpg", description: "Seamless kitchen countertop design", category: "Large Format Slabs" },
  { id: 6, title: "Curved Wall Design", image: "/assets/about-tiles-test.jpg", description: "Innovative curved wall installation", category: "Flexible Tiles" }
];

export default function R11Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main>
        <AboutSection />
        <WhyChooseUs />
        
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
  );
}
