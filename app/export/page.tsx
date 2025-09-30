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
              Global Exporter of Premium Outdoor Tiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              India's leading outdoor tiles supplier to Europe, UK, USA, Germany & Russia. Premium R11 tiles, 2cm porcelain pavers & wholesale outdoor tiles at competitive prices.
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

      {/* Export Content */}
      <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
              India's Leading Outdoor Tiles Exporter
            </h2>
            <div className="text-lg text-muted-foreground mb-12 space-y-6">
              <p>
                Vegnar Surfaces stands as India's premier <strong>outdoor tiles supplier in Europe</strong>, <strong>outdoor tiles supplier in UK</strong>, <strong>outdoor tiles supplier in USA</strong>, <strong>outdoor tiles supplier in Germany</strong>, and <strong>outdoor tiles supplier in Russia</strong>. With over two decades of export excellence, we have established ourselves as the most trusted <strong>premium outdoor tile exporter India</strong> serves to global markets.
              </p>
              <p>
                Our comprehensive export portfolio includes premium <strong>R11 outdoor tiles</strong>, innovative <strong>2cm porcelain pavers</strong>, heavy-duty outdoor tiles, poolside tiles, and garden tiles. As a leading <strong>wholesale outdoor tiles supplier</strong>, we offer competitive pricing without compromising on quality, making us the preferred choice for international distributors and contractors.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Export Expertise & Global Partnerships
            </h2>
            <div className="text-lg text-muted-foreground mb-12 space-y-6">
              <p>
                As an experienced <strong>exporter of R11 outdoor tiles</strong> and <strong>exporter of 2cm porcelain tiles</strong>, Vegnar Surfaces has built strong international partnerships across continents. Our ISO 9001:2015 certification and adherence to international quality standards ensure that every shipment meets the stringent requirements of global markets.
              </p>
              <p>
                Our export division specializes in understanding diverse market preferences, from European design aesthetics to American durability standards. We maintain dedicated logistics partnerships for seamless delivery to Europe, UK, USA, Germany, Russia, and 30+ countries worldwide.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>CE marking compliance for European markets</li>
                <li>ANSI standards adherence for USA exports</li>
                <li>Customized packaging for international shipping</li>
                <li>Multi-language product documentation</li>
                <li>Local market support and technical assistance</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Premium Product Range for Global Markets
            </h2>
            <div className="text-lg text-muted-foreground mb-12 space-y-6">
              <p>
                Our export-focused product range is designed to meet the diverse needs of international markets:
              </p>
              
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                R11 Anti-Slip Outdoor Tiles
              </h3>
              <p>
                Our premium <strong>R11 outdoor tiles</strong> collection offers superior anti-slip properties, perfect for European poolside applications, UK garden pathways, and USA commercial terraces. Available in 600x600mm, 800x800mm, and custom sizes.
              </p>

              <h3 className="text-xl font-semibold text-charcoal mb-3">
                2cm Porcelain Pavers
              </h3>
              <p>
                Innovative <strong>2cm porcelain outdoor tiles</strong> designed for heavy-duty applications. These extra-thick pavers are ideal for German commercial projects, Russian industrial applications, and American driveways requiring superior load-bearing capacity.
              </p>

              <h3 className="text-xl font-semibold text-charcoal mb-3">
                Specialized Outdoor Solutions
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Heavy duty outdoor tiles</strong> - Engineered for extreme weather conditions</li>
                <li><strong>Poolside tiles</strong> - Chlorine-resistant and slip-resistant</li>
                <li><strong>Garden tiles</strong> - UV-stable and frost-resistant</li>
                <li><strong>Wall and floor tiles</strong> - Versatile indoor-outdoor applications</li>
                <li>Custom designs and sizes for specific market requirements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Why Choose Vegnar Surfaces as Your Global Partner
            </h2>
            <div className="text-lg text-muted-foreground mb-12 space-y-6">
              <p>
                As a leading <strong>global outdoor tile company</strong>, we offer unmatched advantages to our international partners:
              </p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Premium Quality Assurance:</strong> ISO 9001:2015 certified manufacturing with rigorous quality control</li>
                <li><strong>Competitive Wholesale Pricing:</strong> Direct manufacturer pricing for <strong>wholesale outdoor tiles</strong> without intermediaries</li>
                <li><strong>Global Logistics Excellence:</strong> Experienced shipping to Europe, UK, USA, Germany, Russia with 100% on-time delivery</li>
                <li><strong>Free Sample Service:</strong> Comprehensive sample collection for international buyers</li>
                <li><strong>Expert Technical Support:</strong> Multilingual support team for installation and maintenance guidance</li>
                <li><strong>Extensive Design Portfolio:</strong> 1000+ designs including latest European and American trends</li>
                <li><strong>Customization Capabilities:</strong> Bespoke solutions for specific market requirements</li>
                <li><strong>Sustainable Manufacturing:</strong> Eco-friendly processes meeting international environmental standards</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Partner with India's Premier Outdoor Tiles Exporter
            </h2>
            <div className="text-lg text-muted-foreground mb-8 space-y-6">
              <p>
                Join the growing network of international distributors, contractors, and architects who trust Vegnar Surfaces for their premium outdoor tiles requirements. Whether you're looking for bulk orders, exclusive distribution partnerships, or custom manufacturing solutions, we're ready to support your business growth.
              </p>
              <p>
                Contact our export division today to discuss wholesale pricing, sample requests, and partnership opportunities. Experience why we're recognized as the leading <strong>premium outdoor tiles exporter India</strong> and the preferred <strong>outdoor tiles supplier</strong> for Europe, UK, USA, Germany, Russia, and global markets.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white px-8 py-3">
                Contact Export Division
              </Button>
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
