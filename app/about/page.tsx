"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Building, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function About() {
  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started our journey in ceramic tile manufacturing" },
    { year: "2016", title: "First Export", description: "Expanded to international markets" },
    { year: "2018", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification" },
    { year: "2020", title: "20+ Countries", description: "Reached export milestone of 20+ countries" },
    { year: "2024", title: "50M+ Tiles", description: "Delivered over 50 million tiles worldwide" },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else."
    },
    {
      icon: Building,
      title: "Quality Excellence",
      description: "Committed to delivering the highest quality products through innovation."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expanding our presence across 22+ countries with premium products."
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      description: "Investing in R&D to create cutting-edge ceramic solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-charcoal flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/assets/about-tiles.jpg" 
            alt="About Vegnar" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Vegnar</h1>
            <p className="text-xl opacity-90">Dedicated to excellence in ceramic manufacturing since 2014</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="section-title mt-4 mb-6">
                Dedication towards the customers.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Since <strong className="text-charcoal">2014</strong>, We have been bringing architectural 
                  concepts, projects, and innovations to reality. Vegnar Ceramic is a leading 
                  tile and sanitarywares manufacturing company. We are a sophisticated worldwide 
                  company that combines manufacturing, sales, and service.
                </p>
                <p>
                  The company has a great capacity to create high-quality tiles and sanitarywares 
                  products in a variety of finishes, forms, and sizes to meet the diverse demands 
                  of homeowners and architects.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/assets/slab-installation.jpg" 
                alt="Sunwin Ceramica manufacturing" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-luxury text-center">
              <div className="bg-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-orange" />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class ceramic tiles and sanitaryware products that exceed 
                customer expectations through innovation, quality, and service excellence.
              </p>
            </div>
            
            <div className="card-luxury text-center">
              <div className="bg-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-orange" />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in ceramic solutions, known for our commitment to 
                sustainability, innovation, and customer satisfaction worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Journey</h2>
            <p className="section-subtitle">Key milestones in our growth story</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Premium Animated Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 md:w-2">
              <div className="w-full h-full bg-gradient-to-b from-orange/30 via-orange/60 to-orange/30 rounded-full shadow-lg animate-pulse"></div>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-start md:items-center cursor-pointer group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start w-full">
                    {/* Premium Mobile Timeline Dot */}
                    <div className="relative z-20 flex-shrink-0 mt-3 mr-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange to-orange/80 rounded-full shadow-2xl border-4 border-white group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute inset-0 bg-orange/20 rounded-full animate-pulse scale-150"></div>
                    </div>
                    
                    {/* Premium Mobile Content */}
                    <div className="flex-1 min-w-0">
                      <div className="relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 group-hover:shadow-orange/20 group-hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="text-2xl font-black text-transparent bg-gradient-to-r from-orange to-orange/80 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">{milestone.year}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange transition-all duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex items-center w-full ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 group-hover:shadow-orange/20 group-hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange to-orange/80 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">{milestone.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange transition-all duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Desktop Timeline Dot */}
                    <div className="relative z-20 flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange/80 rounded-full shadow-2xl border-4 border-white group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute inset-0 bg-orange/20 rounded-full animate-pulse scale-150"></div>
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-marble">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card-luxury text-center group"
              >
                <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange/20 transition-colors">
                  <value.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover our premium collection of ceramic tiles and sanitaryware products 
            designed to elevate your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg">
              View Our Products
            </Button>
            <Button variant="outline" size="lg">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}