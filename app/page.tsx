"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Shield, Bug, Flame, Wrench, Sparkles, ArrowRight, CheckCircle2, Star, Quote, Award, Users, TrendingUp, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";



const FEATURES = [
  { icon: Droplets, title: "100% Waterproof", desc: "Perfect for kitchens, bathrooms, and high-moisture areas" },
  { icon: Shield, title: "Scratch & Dent Resistant", desc: "Ultra-durable wear layer protects against daily wear" },
  { icon: Bug, title: "Termite Proof", desc: "Stone-based core prevents termite damage" },
  { icon: Flame, title: "Fire Resistant", desc: "Class A fire rating for enhanced safety" },
  { icon: Wrench, title: "Easy Click-Lock Installation", desc: "DIY-friendly installation, no glue required" },
  { icon: Sparkles, title: "Low Maintenance", desc: "Simple cleaning, no waxing or polishing needed" }
];

const STATS = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "500+", label: "Projects Completed" },
  { number: "15-20", label: "Years Warranty" },
  { number: "100%", label: "Waterproof Guarantee" }
];

const APPLICATIONS = [
  { name: "Living Room", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600" },
  { name: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600" },
  { name: "Kitchen", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" },
  { name: "Bathroom", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600" },
  { name: "Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" },
  { name: "Retail Spaces", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" }
];

const COLLECTIONS = [
  { name: "Natural Wood Finish", size: "1220x180mm", thickness: "4mm", img: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600" },
  { name: "Oak Series", size: "1220x180mm", thickness: "5mm", img: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600" },
  { name: "Stone & Marble Finish", size: "600x600mm", thickness: "5mm", img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=600" },
  // { name: "Herringbone Pattern", size: "600x150mm", thickness: "4mm", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600" },
  // { name: "Dark Walnut Collection", size: "1220x180mm", thickness: "5mm", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600" }
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Homeowner, Mumbai", text: "Installed Vegnar SPC in my kitchen 2 years ago. Still looks brand new! Completely waterproof and so easy to clean.", rating: 5 },
  { name: "Arjun Mehta", role: "Architect, Delhi", text: "I recommend Vegnar SPC to all my clients. Premium quality, stunning designs, and unmatched durability. A game-changer in flooring.", rating: 5 },
  { name: "Rajesh Kumar", role: "Builder, Bangalore", text: "Used Vegnar SPC in 50+ apartments. Zero complaints. Fast installation, great finish, and clients love it.", rating: 5 }
];

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920",
    title: "Premium SPC Flooring",
    subtitle: "100% Waterproof. Built to Last.",
    description: "Transform your spaces with durable, elegant, and modern Stone Polymer Composite flooring."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1920",
    title: "Natural Wood Finish",
    subtitle: "Elegance Meets Durability",
    description: "Experience the warmth of wood with the strength of stone polymer composite technology."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920",
    title: "Luxury Living Spaces",
    subtitle: "Redefine Your Home",
    description: "Create stunning interiors with our premium collection of scratch-resistant SPC flooring."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1920",
    title: "Easy Installation",
    subtitle: "Click-Lock System",
    description: "DIY-friendly installation with no glue required. Professional results in hours, not days."
  }
];

const SLIDE_DURATION = 6000;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    let rafId: number;
    let start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(((elapsed % SLIDE_DURATION) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [mounted, currentSlide]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-transform",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
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
              {SLIDES.map((slide, index) => (
                <div
                  key={`content-${slide.id}`}
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
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/catalog">
                          <Button size="lg" className="bg-orange hover:bg-orange/90 text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all group">
                            Explore Collection
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-10 py-7">
                            Get Free Quote
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center space-x-3">
            {SLIDES.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "relative h-2 w-12 rounded-full overflow-hidden transition-all",
                    isActive ? "bg-white/30" : "bg-white/20 hover:bg-white/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                >
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
      </section>

      

      {/* About SPC Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">ABOUT SPC FLOORING</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 md:mb-6">What is SPC Flooring?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">SPC (Stone Polymer Composite) flooring is an advanced engineered flooring solution made from limestone powder, PVC, and stabilizers. It offers a rigid core structure that is 100% waterproof, highly durable, and resistant to scratches and wear.</p>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-charcoal mb-3 md:mb-4 flex items-center text-sm md:text-base"><Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange mr-2" /> SPC Flooring Structure:</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center"><div className="w-2 h-2 md:w-3 md:h-3 bg-orange rounded-full mr-2 md:mr-3 flex-shrink-0"></div>UV Coating - Protection Layer</li>
                  <li className="flex items-center"><div className="w-2 h-2 md:w-3 md:h-3 bg-orange rounded-full mr-2 md:mr-3 flex-shrink-0"></div>Wear Layer - Scratch Resistant</li>
                  <li className="flex items-center"><div className="w-2 h-2 md:w-3 md:h-3 bg-orange rounded-full mr-2 md:mr-3 flex-shrink-0"></div>Decorative Film - Design Layer</li>
                  <li className="flex items-center"><div className="w-2 h-2 md:w-3 md:h-3 bg-orange rounded-full mr-2 md:mr-3 flex-shrink-0"></div>SPC Core - Rigid & Waterproof</li>
                  <li className="flex items-center"><div className="w-2 h-2 md:w-3 md:h-3 bg-orange rounded-full mr-2 md:mr-3 flex-shrink-0"></div>IXPE Underlayment - Sound Absorption</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800" alt="SPC Flooring Layers" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-orange text-white p-4 md:p-6 rounded-xl shadow-xl">
                <p className="text-2xl md:text-4xl font-bold">100%</p>
                <p className="text-xs md:text-sm">Waterproof</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vegnar SPC */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">WHY CHOOSE US</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">Why Choose Vegnar SPC?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">Engineered for excellence, designed for life</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {FEATURES.map((f, i) => (
              <Card key={i} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-white">
                <CardContent className="p-5 md:p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                    <f.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">{f.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">APPLICATIONS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">Perfect for Every Space</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Versatile flooring for residential and commercial projects</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {APPLICATIONS.map((app, i) => (
              <div key={i} className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                <img src={app.img} alt={app.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-4 md:p-6 w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{app.name}</h3>
                    <div className="flex items-center text-orange opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs md:text-sm font-semibold">View Gallery</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Collections */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">OUR COLLECTIONS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">Design Collections</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Explore our curated range of premium SPC designs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {COLLECTIONS.map((col, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none">
                <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-orange text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold">Premium</div>
                </div>
                <CardContent className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">{col.name}</h3>
                  <div className="space-y-1 text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    <p className="flex items-center"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange rounded-full mr-2 flex-shrink-0"></span>Size: {col.size}</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange rounded-full mr-2 flex-shrink-0"></span>Thickness: {col.thickness}</p>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-orange group-hover:text-white group-hover:border-orange transition-all text-sm md:text-base">
                    View Details <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link href="/catalog"><Button size="lg" className="bg-charcoal hover:bg-charcoal/90 text-white px-6 md:px-8 text-sm md:text-base">View All Collections <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">COMPARISON</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">Why SPC Wins</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Compare and see the difference</p>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[600px]">
              <thead className="bg-gradient-to-r from-charcoal to-charcoal/90 text-white">
                <tr>
                  <th className="p-3 md:p-4 lg:p-6 text-left text-sm md:text-base lg:text-lg">Feature</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">SPC</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Wooden</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Tiles</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Laminate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Waterproof</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                </tr>
                <tr className="border-b bg-orange/5 hover:bg-orange/10 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Durability</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center font-bold text-orange text-base md:text-lg">High</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Medium</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">High</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Low</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Maintenance</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center font-bold text-orange text-base md:text-lg">Low</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">High</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Medium</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Medium</td>
                </tr>
                <tr className="bg-orange/5 hover:bg-orange/10 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Cost Effective</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation & Warranty */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800" alt="Installation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-4 md:p-6 rounded-xl shadow-xl border-2 md:border-4 border-orange">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal">15-20</p>
                <p className="text-xs md:text-sm text-gray-600">Years Warranty</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">INSTALLATION</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 md:mb-6">Easy Installation & Warranty</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Professional installation or DIY - the choice is yours. Our click-lock system makes it simple.</p>
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex items-start bg-gray-50 p-4 md:p-5 rounded-xl hover:bg-orange/5 transition-colors">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal mb-1 text-sm md:text-base">Easy Click Lock System</p>
                    <p className="text-gray-600 text-xs md:text-sm">No professional help needed - DIY friendly</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 md:p-5 rounded-xl hover:bg-orange/5 transition-colors">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal mb-1 text-sm md:text-base">No Glue Required</p>
                    <p className="text-gray-600 text-xs md:text-sm">Clean and fast installation process</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 md:p-5 rounded-xl hover:bg-orange/5 transition-colors">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal mb-1 text-sm md:text-base">15-20 Years Warranty</p>
                    <p className="text-gray-600 text-xs md:text-sm">Long-lasting peace of mind guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 md:p-5 rounded-xl hover:bg-orange/5 transition-colors">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-orange mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal mb-1 text-sm md:text-base">Quick Installation</p>
                    <p className="text-gray-600 text-xs md:text-sm">Complete room in hours, not days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">TESTIMONIALS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">What Our Clients Say</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Trusted by thousands across India</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none">
                <CardContent className="p-5 md:p-6 lg:p-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-orange" />
                  </div>
                  <div className="flex mb-3 md:mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-orange text-orange" />)}</div>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">&quot;{t.text}&quot;</p>
                  <div className="border-t pt-3 md:pt-4">
                    <p className="font-bold text-charcoal text-base md:text-lg">{t.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-24 bg-gradient-to-r from-charcoal via-charcoal to-charcoal/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">Experience the perfect blend of luxury, durability, and affordability with Vegnar SPC Flooring</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/sample"><Button size="lg" className="bg-orange hover:bg-orange/90 text-white text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all">Request Free Sample <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-charcoal text-lg px-10 py-7"><Phone className="mr-2 w-5 h-5" /> Contact Us</Button></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange" /> Free Consultation</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange" /> Free Sample</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange" /> Pan India Delivery</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange" /> Expert Installation</div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
