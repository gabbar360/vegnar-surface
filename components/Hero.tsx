"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/assets/large-formate-tiles.png",
      title: "Large Format",
      subtitle: "Porcelain Slabs",
      description: "Large format porcelain slab tiles characterized by their large size and thin profile for seamless installations.",
      category: "large-format-slabs"
    },
    {
      id: 3,
      image: "/assets/20mm-outdoor-tiles.png",
      title: "Outdoor Porcelain",
      subtitle: "Pavers 2cm",
      description: "Weather-resistant outdoor porcelain pavers designed for terraces and commercial spaces.",
      category: "porcelain-pavers"
    },
    {
      id: 4,
      image: "/assets/subway-tiles.png",
      title: "Subway Collection",
      subtitle: "Classic Design",
      description: "Timeless subway tiles bringing elegance and versatility to modern interiors.",
      category: "subway-tiles"
    },
    {
      id: 5,
      image: "/assets/Mosaics-tiles.jpg",
      title: "Mosaic Collection",
      subtitle: "Artistic Tiles",
      description: "Beautiful mosaic tiles perfect for creating stunning feature walls and decorative elements.",
      category: "mosaic-tiles"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, mounted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden with-marble-overlay">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-1000 ease-out",
                  index === currentSlide
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                )}
              >
                {index === currentSlide && (
                  <>
                    <div className="mb-6">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-none">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
                        {slide.subtitle}
                      </h2>
                    </div>
                    
                    <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex justify-start">
                      {mounted && (
                        <Link href={`/products?category=${slide.category}`}>
                          <Button variant="luxury" size="xl" className="group rounded-full">
                            View Collection
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-charcoal w-8"
                    : "bg-white/40 hover:bg-white/60"
                )}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm tracking-widest vertical-text">SCROLL</span>
          <div className="w-px h-12 bg-white/30 relative">
            <div className="absolute top-0 w-px h-6 bg-charcoal animate-pulse" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;