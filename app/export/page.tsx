"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Truck, Award, Users } from "lucide-react";

export default function Export() {
  const exportCountries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "New Zealand",
    "UAE",
    "Saudi Arabia",
    "Kuwait",
    "Qatar",
    "Oman",
    "Bahrain",
    "South Africa",
    "Kenya",
    "Nigeria",
    "Ghana",
    "Morocco",
    "Egypt",
    "Libya",
    "Tunisia",
    "Algeria",
    "Bangladesh",
    "Sri Lanka",
    "Nepal",
    "Maldives",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Philippines",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cream to-marble">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Global Exports
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exporting Tiles That Transform Spaces Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Export Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">29+</h3>
              <p className="text-muted-foreground">Export Countries</p>
            </div>

            <div className="text-center">
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">100%</h3>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </div>

            <div className="text-center">
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">ISO</h3>
              <p className="text-muted-foreground">Certified Quality</p>
            </div>

            <div className="text-center">
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">1000+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Description */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-8">
              Our Global Presence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sunwin ceramica tiles are exported to more than 29 countries in
              the world. Our resoluteness to manufacture superlative tiles, not
              just in terms of quality but also aesthetics, has made us the
              fancy of homeowners across the globe. We export our tiles to many
              European, African, as well as Gulf countries.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-orange text-orange hover:bg-orange hover:text-white"
            >
              Download Export Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Worldwide Network */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Worldwide Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our global distribution network ensures quality tiles reach every
              corner of the world
            </p>
          </div>

          {/* World Map Placeholder */}
          <div className="bg-gradient-to-r from-orange/20 to-orange/10 rounded-2xl p-12 mb-12">
            <div className="text-center">
              <svg
                className="w-full h-64 mx-auto"
                viewBox="0 0 800 400"
                fill="none"
              >
                <rect width="800" height="400" fill="url(#gradient)" rx="20" />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--orange))"
                      stopOpacity="0.1"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--orange))"
                      stopOpacity="0.3"
                    />
                  </linearGradient>
                </defs>
                <text
                  x="400"
                  y="200"
                  textAnchor="middle"
                  className="fill-charcoal font-bold text-2xl"
                >
                  Global Presence Map
                </text>
                <text
                  x="400"
                  y="230"
                  textAnchor="middle"
                  className="fill-muted-foreground text-lg"
                >
                  29+ Countries Worldwide
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Export Countries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Countries We Export To
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {exportCountries.map((country, index) => (
              <div
                key={index}
                className="group bg-secondary/50 p-4 rounded-lg text-center hover:bg-orange hover:text-white transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-6 bg-gradient-to-r from-orange/30 to-orange/60 rounded-sm mx-auto mb-2 group-hover:from-white/30 group-hover:to-white/60 transition-all duration-300" />
                <span className="text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
