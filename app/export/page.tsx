"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Truck, Award, Users } from "lucide-react";
import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("@/components/Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gradient-to-r from-gray-900 to-black rounded-2xl flex items-center justify-center">
      <div className="text-white text-xl">Loading Interactive Globe...</div>
    </div>
  ),
});

export default function Export() {
  const exportCountries = {
    Europe: [
      "United Kingdom", "Germany", "France", "Netherlands", "Belgium", "Poland", 
      "Austria", "Portugal", "Greece", "Czech Republic", "Hungary", "Romania", 
      "Sweden", "Denmark", "Norway", "Ireland", "Finland"
    ],
    "North America": [
      "United States (Houston)", "Canada", "Mexico"
    ],
    "Middle East": [
      "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman"
    ],
    Africa: [
      "South Africa"
    ],
    Asia: [
      "Australia", "New Zealand", "Japan", "South Korea", "Maldives", "Vietnam"
    ]
  };

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
  <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-charcoal mb-2">30+</h3>
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
              <h3 className="text-3xl font-bold text-charcoal mb-2">25000+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
  <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-8">
              Our Global Presence
            </h2>
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p>
                At Vegnar Surfaces, our reach extends far beyond borders. With a product portfolio tailored to diverse markets, we proudly export to multiple countries across Europe, North America, and beyond.
              </p>
              <p>
                Our commitment to exceptional design, consistent quality, and reliable service has made us a trusted partner for architects, designers, distributors, and builders worldwide.
              </p>
              <p>
                From sleek subway tiles in the UK to durable 20 mm outdoor pavers in the USA and Canada, and large-format porcelain slabs across Europe, our surfaces are crafted to meet the unique needs of every market we serve.
              </p>
              <p>
                Wherever your project is, Vegnar Surfaces delivers products that are truly built for the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Globe */}
      <section className="py-20 marble-pattern">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Interactive Global Presence
          </h2>
        </div>

        {/* 3D Globe Component */}
        <div className="w-full mb-12">
          <Globe3D rotationSpeed={1.5} />
        </div>
        
        {/* Country Presence List */}
        {/* <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-charcoal text-center mb-12">
              Countries We Export To
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(exportCountries).map(([region, countries]) => (
                <div key={region} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-bold text-charcoal mb-4 border-b border-orange pb-2">
                    {region}
                  </h4>
                  <ul className="space-y-2">
                    {countries.map((country) => (
                      <li key={country} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-orange rounded-full mr-3"></span>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      <Footer />
    </div>
  );
}
