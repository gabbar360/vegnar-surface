"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users, Factory, Calendar, Heart, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Globe, value: 30, suffix: "+", label: "Countries Exported" },
    { icon: Calendar, value: 18, suffix: "+", label: "Years Experience" },
    { icon: Heart, value: 25000, suffix: "+", label: "Happy Customers" },
    { icon: Package, value: 100, suffix: "M+", label: "Tiles Delivered" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(start);
          return newValues;
        });
      }, 16);
    });
  };

  return (
  <section className="py-24 marble-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-charcoal font-semibold tracking-wider uppercase text-sm">
                Let's Know About Vegnar
              </span>
              <h2 className="section-title mt-4 mb-6">
                Dedication towards
                <span className="block text-charcoal">the customers.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Since <strong className="text-charcoal">2007</strong> Built for the World, Vegnar Surfaces is a new-generation global brand that brings together world-class porcelain surfaces with exceptional design versatility.
From sleek subway tiles and timeless mosaics to large-format slabs and durable outdoor pavers, we deliver collections that inspire architects, designers, and builders worldwide.
              </p>
              
              <p>
                Our journey began in Morbi, India, the heart of the global ceramic industry, with a vision to create surfaces that transcend trends and borders. Backed by cutting-edge technology, meticulous craftsmanship, and a passion for design, every Vegnar Surfaces creation combines innovation, durability, and aesthetic perfection.
              </p>
              <p>
                We understand that every project tells a story. That’s why our collections are crafted to perform beautifully in residential, commercial, and outdoor applications across diverse climates and cultures. Whether it’s the refined beauty of porcelain slabs, the timeless charm of mosaic and subway tiles, or the enduring strength of 20 mm outdoor pavers, our collections bring global design inspirations to life, crafted to perform and endure in every space.

              </p>
            </div>

            <div className="mt-10">
              <Button variant="luxury" size="lg" className="group" asChild>
                <Link href="/about">
                  Explore More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={"/assets/about-tiles-main.jpg"}
                alt="Premium ceramic tiles by Vegnar"
                className="w-full rounded-2xl shadow-elegant"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-background border border-border/20 rounded-xl p-6 shadow-elegant hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-charcoal/10 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">100M+</div>
                    <div className="text-sm text-muted-foreground">Tiles Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-background border border-border/20 rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="bg-charcoal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-charcoal/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-charcoal" />
                </div>
                <div className="text-3xl font-bold text-charcoal mb-2">
                  {animatedValues[index] === stat.value ? (
                    stat.value === 25000 ? `${(animatedValues[index] / 1000).toFixed(0)}K` : animatedValues[index]
                  ) : (
                    stat.value === 25000 ? `${(animatedValues[index] / 1000).toFixed(0)}K` : animatedValues[index]
                  )}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;