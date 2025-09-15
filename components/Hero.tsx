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
      id: 3,
      image: "/assets/20mm-outdoor-tiles.png",
      title: "Outdoor Porcelain",
      subtitle: "Pavers 2cm",
      description: "Weather-resistant outdoor porcelain pavers designed for terraces and commercial spaces.",
      category: "porcelain-pavers"
    },
    {
      id: 1,
      image: "/assets/large-formate-tiles.png",
      title: "Large Format",
      subtitle: "Porcelain Slabs",
      description: "Large format porcelain slab tiles characterized by their large size and thin profile for seamless installations.",
      category: "large-format-slabs"
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
  }, [slides.length, mounted, currentSlide]);

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    if (!mounted) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mounted, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Progress bar state synced to slide duration (6s)
  const SLIDE_DURATION = 6000;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mounted) return;

    let rafId: number;
    let start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      // progress from 0 to 100 within SLIDE_DURATION
      const pct = Math.min(((elapsed % SLIDE_DURATION) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [mounted, currentSlide]);

  return (
    <section className="relative h-screen overflow-hidden with-marble-overlay">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={index === 0 ? 90 : 75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
                  "transition-all duration-1000 ease-in-out will-change-transform",
                  index === currentSlide
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
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
                    
                    {/* <div className="flex flex-col sm:flex-row gap-4">
                      {mounted && (
                        <>
                          <Link href={`/products?category=${slide.category}`}>
                            <Button variant="luxury" size="xl" className="group rounded-full">
                              View Collection
                              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </>
                      )}
                    </div> */}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls (arrows removed, progress capsules added) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-3">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => {
                  // Smoothly jump and reset progress animation baseline
                  setCurrentSlide(index);
                }}
                className={cn(
                  "relative h-2 w-12 rounded-full overflow-hidden transition-all",
                  isActive ? "bg-white/30" : "bg-white/20 hover:bg-white/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Progress fill inside capsule */}
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full bg-charcoal transition-[width]",
                    isActive ? "" : "w-0"
                  )}
                  style={{ width: isActive ? `${progress}%` : "0%" }}
                />
              </button>
            );
          })}
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