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
  { icon: Droplets, title: "100% Waterproof", desc: "Tested for 72+ hours underwater submersion. Perfect for Indian monsoons, kitchens, bathrooms, and basements. No swelling, no warping, no water damage. IPX7 waterproof rating certified." },
  { icon: Shield, title: "Scratch & Dent Resistant", desc: "0.5mm commercial-grade wear layer with AC4-AC5 rating. Withstands heavy furniture, pet claws, high heels, and daily wear. Tested for 10,000+ rotations without visible damage." },
  { icon: Bug, title: "Termite Proof", desc: "80% limestone composite core - completely inorganic. Zero wood content means absolute termite immunity. No chemical treatment needed. Perfect for Indian climate conditions." },
  { icon: Flame, title: "Fire Resistant", desc: "B1-Bfl-s1 European fire classification. Self-extinguishing within 30 seconds. Doesn't support combustion. Safe for homes, offices, and commercial spaces. Certified by international labs." },
  { icon: Wrench, title: "Easy Click-Lock Installation", desc: "Patented Unilin or Valinge click-lock system. Install 100 sq.ft in 2-3 hours. No glue, no nails, no mess. Can be installed over existing tiles, marble, or concrete. DIY-friendly with video tutorials." },
  { icon: Sparkles, title: "Low Maintenance", desc: "Just sweep and mop with water. No waxing, no polishing, no special cleaners needed. Stain-resistant surface. Saves ₹5,000-10,000 annually on maintenance compared to wood or marble." }
];

const STATS = [
  { number: "25,000+", label: "Happy Customers Across India", subtext: "Residential & Commercial" },
  { number: "1,200+", label: "Projects Completed", subtext: "Pan India Presence" },
  { number: "20 Years", label: "Warranty Coverage", subtext: "Residential Use" },
  { number: "100%", label: "Waterproof Guarantee", subtext: "Certified & Tested" }
];

const APPLICATIONS = [
  { name: "Living Room", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600", desc: "Elegant wood-look finish. Warm underfoot. Handles 500+ daily footfalls. Perfect for Indian joint families." },
  { name: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600", desc: "19dB sound reduction. Comfortable barefoot walking. Hypoallergenic surface. Ideal for kids' rooms." },
  { name: "Kitchen", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600", desc: "Oil & grease resistant. Withstands hot water spills. Easy to clean masala stains. Anti-bacterial coating." },
  { name: "Bathroom", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600", desc: "R10 anti-slip rating. 100% waterproof. No grout lines. Prevents mold & mildew growth." },
  { name: "Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", desc: "AC5 commercial rating. Rolling chair compatible. Professional aesthetics. 10-year commercial warranty." },
  { name: "Retail Spaces", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600", desc: "Handles 2000+ daily footfalls. Easy to replace damaged planks. Cost-effective for large areas." }
];

const COLLECTIONS = [
  { name: "Natural Wood Finish", size: "1220x180mm", thickness: "4mm", wear: "0.3mm", img: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600", desc: "12 realistic wood textures. EIR (Embossed in Register) technology. Feels like real wood. Price: ₹45-65/sq.ft" },
  { name: "Oak Series Premium", size: "1220x180mm", thickness: "5.5mm", wear: "0.5mm", img: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600", desc: "European Oak patterns. AC5 commercial grade. 20-year warranty. Price: ₹75-95/sq.ft" },
  { name: "Stone & Marble Finish", size: "600x600mm", thickness: "5mm", wear: "0.5mm", img: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=600", desc: "Italian marble look. Warm to touch. No cold feeling. Price: ₹65-85/sq.ft" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Homeowner, Andheri Mumbai", text: "Installed 1,800 sq.ft Vegnar SPC in my 3BHK in 2022. Survived 2 monsoons perfectly! My kids spilled juice, oil, even nail polish - everything cleaned easily. The wood texture looks so real, guests think it's actual hardwood. Cost me ₹1.2L total vs ₹3.5L quote for Italian marble. Best investment!", rating: 5, project: "3BHK Apartment - 1,800 sq.ft", year: "2022" },
  { name: "Arjun Mehta", role: "Principal Architect, Design Studio Delhi", text: "Specified Vegnar SPC for 15+ luxury villa projects in Gurgaon. Clients love the premium look at 60% cost of hardwood. Installation is 3x faster than tiles. Zero callbacks for water damage or scratches. My go-to flooring for ₹2-5 Cr projects. Quality matches European brands.", rating: 5, project: "Luxury Villas - 45,000 sq.ft", year: "2021-2024" },
  { name: "Rajesh Kumar", role: "Director, Kumar Constructions Bangalore", text: "Used Vegnar SPC in 120 apartments across 3 projects (total 2.5 lakh sq.ft). Saved ₹85 lakhs vs vitrified tiles. Installation time reduced from 45 days to 12 days per building. Zero customer complaints in 2 years. Repeat order for next 5 projects confirmed.", rating: 5, project: "Residential Complex - 2,50,000 sq.ft", year: "2022-2023" },
  { name: "Sneha Patel", role: "Interior Designer, Koregaon Park Pune", text: "Designed 25+ homes with Vegnar SPC. The Oak Premium series is my favorite - looks exactly like ₹800/sq.ft imported wood at ₹85/sq.ft. Clients in Kalyani Nagar, Viman Nagar love it. Perfect for Pune's humidity. The herringbone pattern installation is stunning!", rating: 5, project: "Luxury Homes - 30+ Projects", year: "2020-2024" },
  { name: "Vikram Singh Rathore", role: "Owner, The Spice Route Restaurant, Cyber Hub Gurgaon", text: "3,500 sq.ft restaurant flooring. Handles 400+ customers daily. Survived kitchen spills, heavy foot traffic for 3 years. Looks brand new after professional cleaning. Cost ₹2.8L vs ₹8L for imported tiles. AC5 rating is real - no wear visible. Recommended to 5 other restaurant owners.", rating: 5, project: "Fine Dining Restaurant - 3,500 sq.ft", year: "2021" },
  { name: "Meera Reddy", role: "Homeowner, Jubilee Hills Hyderabad", text: "Installed in all 4 bathrooms and kitchen (800 sq.ft) in 2020. Hyderabad heat and humidity - no issues! The anti-slip surface saved my mom from falling twice. Cleaned with regular Lizol. No special maintenance. My marble floors needed ₹15K annual polishing - this needs nothing!", rating: 5, project: "Bathrooms & Kitchen - 800 sq.ft", year: "2020" }
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
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/catalog" className="w-full sm:w-auto">
                          <Button size="sm" className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-7  transition-all group">
                            Explore Collection
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button size="sm" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-charcoal text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-7">
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
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
                    <p className="text-sm text-white/80 mb-2">{app.desc}</p>
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
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
                  <p className="text-xs md:text-sm text-gray-600 mb-3">{col.desc}</p>
                  <div className="space-y-1 text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    <p className="flex items-center"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange rounded-full mr-2 flex-shrink-0"></span>Size: {col.size}</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange rounded-full mr-2 flex-shrink-0"></span>Thickness: {col.thickness}</p>
                    <p className="flex items-center"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange rounded-full mr-2 flex-shrink-0"></span>Wear Layer: {col.wear}</p>
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <span className="inline-block bg-orange/10 text-orange font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">COMPARISON</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 md:mb-4">Why SPC Wins</h2>
            <p className="text-base md:text-lg text-gray-600 px-4">Compare and see the difference</p>
          </div>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[700px]">
              <thead className="bg-gradient-to-r from-charcoal to-charcoal/90 text-white">
                <tr>
                  <th className="p-3 md:p-4 lg:p-6 text-left text-sm md:text-base lg:text-lg font-bold">Feature</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg font-bold bg-orange/20">SPC Flooring</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Wooden</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Tiles</th>
                  <th className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base lg:text-lg">Laminate</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">100% Waterproof</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Scratch Resistant</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Excellent</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Poor</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Good</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Fair</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Durability (Years)</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">15-20+</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">10-15</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">15-20</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">5-10</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Termite Proof</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Fire Resistant</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Class A</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">No</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Yes</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">No</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Installation</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Easy DIY</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Professional</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Professional</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Maintenance</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Very Low</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">High</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Medium</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Medium</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Underfloor Heating</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Limited</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Comfort (Warmth)</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Warm</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Warm</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Cold</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Sound Absorption</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50 font-bold text-orange text-base md:text-lg">Excellent</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Good</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Poor</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Good</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Eco-Friendly</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 md:p-4 lg:p-6 font-semibold text-sm md:text-base">Cost Effective</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center bg-green-50"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-red-500 text-xl md:text-2xl">✗</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center text-sm md:text-base">Moderate</td>
                  <td className="p-3 md:p-4 lg:p-6 text-center"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Key Advantages Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 max-w-6xl mx-auto">
            <Card className="border-2 border-orange/20 hover:border-orange hover:shadow-xl transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="w-6 h-6 md:w-7 md:h-7 text-orange" />
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-sm md:text-base">100% Waterproof</h3>
                <p className="text-xs md:text-sm text-gray-600">Perfect for all areas including bathrooms & kitchens</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange/20 hover:border-orange hover:shadow-xl transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-orange" />
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-sm md:text-base">Ultra Durable</h3>
                <p className="text-xs md:text-sm text-gray-600">15-20 years warranty with superior wear resistance</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange/20 hover:border-orange hover:shadow-xl transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wrench className="w-6 h-6 md:w-7 md:h-7 text-orange" />
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-sm md:text-base">Easy Installation</h3>
                <p className="text-xs md:text-sm text-gray-600">DIY-friendly click-lock system, no glue needed</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange/20 hover:border-orange hover:shadow-xl transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-orange" />
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-sm md:text-base">Low Maintenance</h3>
                <p className="text-xs md:text-sm text-gray-600">Simple cleaning, no waxing or polishing required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation & Warranty */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
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
                    <p className="text-xs text-orange mt-1 font-semibold">{t.project}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Installed: {t.year}</p>
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
