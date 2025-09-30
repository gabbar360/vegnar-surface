"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Building, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-charcoal flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/assets/about-section.jpg" 
            alt="About Vegnar Surfaces - India's Largest Outdoor Tiles Manufacturer" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Vegnar Surfaces - India's Largest Outdoor Tiles Manufacturer</h1>
            <p className="text-xl opacity-90">Leading Exporter of Premium R11 Tiles, 2cm Porcelain Pavers & Heavy-Duty Outdoor Tiles to USA, Europe & Global Markets</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background marble-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="section-title mt-4 mb-6">
                India's Largest Outdoor Tiles Manufacturer
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Vegnar Surfaces, India's largest <strong>outdoor tiles manufacturer</strong> and leading <strong>outdoor tiles exporter</strong> to USA, Europe, and global markets. Since 2000, we have been at the forefront of manufacturing premium <strong>R11 outdoor tiles</strong>, <strong>2cm porcelain outdoor tiles</strong>, and <strong>heavy duty outdoor tiles</strong> that redefine outdoor spaces worldwide.
                </p>
                <p>
                  As a trusted <strong>premium wholesale supplier of outdoor tiles in India</strong>, we combine cutting-edge technology with uncompromising quality standards to deliver exceptional outdoor flooring solutions for residential, commercial, and industrial applications.
                </p>
                <p>
                  With over two decades of excellence in outdoor tiles manufacturing, Vegnar Surfaces has established itself as the most reliable <strong>outdoor tile exporter USA</strong> and Europe markets trust. Our journey began in 2000 in Morbi, Gujarat - the heart of India's ceramic industry - with a vision to create world-class outdoor tiles that withstand the test of time and weather.
                </p>
                <p>
                  Our <strong>ISO 9001:2015 certification</strong> reflects our commitment to maintaining the highest quality standards in every aspect of our manufacturing process. This certification, combined with our state-of-the-art production facilities, positions us as the <strong>premium outdoor tiles brand India</strong> is proud of.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/assets/slab-installation.jpg" 
                alt="Vegnar Surfaces outdoor tiles manufacturing facility" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Comprehensive Product Range</h2>
            <p className="section-subtitle">As India's leading <strong>luxury outdoor tile company</strong>, our extensive product portfolio includes:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-luxury text-center">
              <div className="bg-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Premium R11 Anti-Slip Outdoor Tiles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our <strong>R11 outdoor tiles India</strong> collection features superior anti-slip properties, making them perfect for wet areas, pool decks, and high-traffic outdoor spaces. These tiles meet international safety standards while maintaining aesthetic appeal.
              </p>
            </div>
            
            <div className="card-luxury text-center">
              <div className="bg-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">2cm Porcelain Pavers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our innovative <strong>2cm porcelain outdoor tiles</strong> offer exceptional strength and durability for heavy-duty applications. These extra-thick pavers are ideal for driveways, commercial terraces, and areas requiring superior load-bearing capacity.
              </p>
            </div>

            <div className="card-luxury text-center">
              <div className="bg-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Heavy-Duty Outdoor Tiles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engineered for extreme conditions, our <strong>heavy duty outdoor tiles</strong> withstand harsh weather, heavy foot traffic, and industrial use while maintaining their pristine appearance for years.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-charcoal mb-6 text-center">Specialized Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-2">Outdoor Poolside Tiles</h4>
                <p className="text-sm text-muted-foreground">Chlorine-resistant and slip-resistant</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-2">Garden Tiles</h4>
                <p className="text-sm text-muted-foreground">Weather-resistant and naturally beautiful</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-charcoal mb-2">Terrace Tiles</h4>
                <p className="text-sm text-muted-foreground">UV-stable and thermal shock resistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Global Presence & Export Excellence</h2>
            <p className="section-subtitle">Leading <strong>outdoor tile exporter USA</strong> and European markets trust</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">International Market Leadership</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vegnar Surfaces proudly serves as a leading <strong>outdoor tile exporter USA</strong> and European markets, with our premium products gracing prestigious projects across continents. Our global footprint spans over 30 countries, making us one of the most trusted names in international outdoor tiles trade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our export division specializes in understanding diverse market requirements, ensuring that our <strong>wholesale outdoor tiles India</strong> meets and exceeds international quality standards and design preferences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-orange mb-2">#1</div>
                <div className="text-sm text-muted-foreground">Outdoor Tiles Manufacturer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Journey</h2>
            <p className="section-subtitle">Key milestones in our export growth story</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 md:w-2">
              <div className="w-full h-full bg-gradient-to-b from-orange/30 via-orange/60 to-orange/30 rounded-full shadow-lg animate-pulse"></div>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {[
                { year: "2000", title: "Company Founded", description: "Started our journey in outdoor tiles manufacturing in Morbi, Gujarat" },
                { year: "2005", title: "First Export", description: "Expanded to international markets with premium outdoor tiles" },
                { year: "2015", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification for export standards" },
                { year: "2020", title: "30+ Countries", description: "Reached export milestone serving Europe, UK, USA, Germany & Russia" },
                { year: "2024", title: "Leading Exporter", description: "Became India's largest outdoor tiles exporter with global presence" },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start md:items-center cursor-pointer group"
                >
                  <div className="md:hidden flex items-start w-full">
                    <div className="relative z-20 flex-shrink-0 mt-3 mr-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange to-orange/80 rounded-full shadow-2xl border-4 border-white group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border group-hover:shadow-xl transition-all duration-300">
                        <div className="text-2xl font-bold text-orange mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-charcoal mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden md:flex items-center w-full ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="relative bg-white rounded-3xl p-8 shadow-lg border group-hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl font-bold text-orange mb-4">{milestone.year}</div>
                        <h3 className="text-2xl font-semibold text-charcoal mb-4">{milestone.title}</h3>
                        <p className="text-muted-foreground text-lg">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-20 flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange/80 rounded-full shadow-2xl border-4 border-white group-hover:scale-125 transition-all duration-500 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Innovation */}
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Quality & Innovation</h2>
            <p className="section-subtitle">At Vegnar Surfaces, quality is not just a promise - it's our foundation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Advanced Manufacturing</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Latest Italian and German machinery for precision manufacturing
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Rigorous quality control at every production stage
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Advanced testing laboratories for durability and performance validation
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Continuous R&D for innovative outdoor tile solutions
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Eco-friendly manufacturing processes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Why Choose Vegnar Surfaces</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Unmatched Manufacturing Scale</h4>
                  <p className="text-sm text-muted-foreground">As India's largest <strong>outdoor tiles manufacturer</strong>, we offer unparalleled production capacity, ensuring timely delivery of large-scale projects without compromising quality.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Competitive Wholesale Pricing</h4>
                  <p className="text-sm text-muted-foreground">Our position as a leading <strong>wholesale outdoor tiles India</strong> supplier enables us to offer highly competitive pricing while maintaining premium quality standards.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Global Export Expertise</h4>
                  <p className="text-sm text-muted-foreground">With extensive experience as an <strong>outdoor tiles exporter India</strong> to USA, Europe, and other international markets, we understand global quality requirements and delivery logistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange/10 to-orange/5 rounded-3xl p-12 text-center">
            <h2 className="section-title mb-6">Transform Your Outdoor Spaces</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Whether you're planning a luxury poolside area, designing a commercial terrace, or creating a beautiful garden pathway, Vegnar Surfaces has the perfect outdoor tiles solution for you. Our expertise in manufacturing <strong>outdoor poolside tiles</strong>, <strong>garden tiles</strong>, and <strong>terrace tiles</strong> ensures that your outdoor spaces are not just beautiful but also safe and durable.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              As India's most trusted <strong>luxury outdoor tile company</strong>, we invite you to explore our extensive collection and experience the Vegnar difference. Contact our expert team today to discuss your outdoor tiles requirements and discover why leading architects, contractors, and homeowners worldwide choose Vegnar Surfaces for their premium outdoor flooring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
                  Explore Our Collection
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-orange text-orange hover:bg-orange/10">
                  Get Wholesale Pricing
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <strong>Ready to transform your outdoor spaces with India's finest outdoor tiles? Contact Vegnar Surfaces today for wholesale pricing and expert consultation.</strong>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}