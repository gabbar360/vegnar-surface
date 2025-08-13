"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Factory, Droplets, Award, Globe, Settings, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Manufacturing() {
  const highlights = [
    {
      title: "Cutting-Edge Technology",
      description: "Equipped with world-class kilns, precision polishing lines, and advanced digital printing systems for unparalleled detail and consistency.",
      icon: Factory,
      image: "/assets/Cutting-Edge-Technology.jpg"
    },
    {
      title: "Sustainable Practices",
      description: "Water recycling, energy optimisation, and raw material sourcing to minimise environmental impact.",
      icon: Droplets,
      image: "/assets/Sustainable-Practices.jpg"
    },
    {
      title: "Rigorous Quality Control",
      description: "Every tile undergoes multiple checks for dimensions, strength, finish, and colour accuracy before packing.",
      icon: CheckCircle,
      image: "/assets/Rigorous-Quality-Control.jpg"
    },
    {
      title: "Global Compliance",
      description: "Our products meet ISO, CE, and ASTM standards, ensuring suitability for markets worldwide.",
      icon: Globe,
      image: "/assets/Global-Compliance.jpg"
    },
    {
      title: "Customisation Capability",
      description: " Flexible production lines that cater to diverse sizes, finishes, and design requirements.",
      icon: Settings,
      image: "/assets/customize.jpg"
    },
     {
      title: "Packaging",
      description: "Advanced packaging solutions that ensure each product is securely protected, preserving quality and appearance while accommodating a wide range of sizes, finishes, and designs.",
      icon: Settings,
      image: "/assets/package.jpg"
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Manufacturing Facility
            </h1>
            <p className="text-xl max-w-4xl mx-auto opacity-90 leading-relaxed">
              At Vegnar Surfaces, excellence begins at the source, our state-of-the-art manufacturing facility in Morbi, India, the heart of the global ceramic industry.
            </p>
          </div>
        </div>
      </section>
      {/* Key Highlights */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Key Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                {/* Image Section */}
                <div className="relative aspect-[16/9] bg-white overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-conrain"
                    sizes="(min-width:1024px) 50vw, 100vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange/10 p-3 rounded-xl flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-orange group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}