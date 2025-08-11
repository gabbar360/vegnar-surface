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
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-orange/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center cursor-pointer group ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card-luxury group-hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-1">
                      <div className="text-2xl font-bold text-orange mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-charcoal-light transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-orange rounded-full border-4 border-background shadow-orange group-hover:scale-110 transition-transform"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
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