"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Heart, 
  Download, 
  Shield, 
  Truck,
  Star,
  Check,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState("Glossy");

  const product = {
    id: "1",
    name: "Premium Subway Tiles",
    category: "Subway Tiles",
    size: "100x200 MM",
    thickness: "8 MM",
    finish: ["Glossy", "Matte", "Satin"],
    colors: ["White", "Cream", "Light Grey", "Dark Grey"],
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800"
    ],
    description: "Premium quality subway tiles perfect for modern kitchens and bathrooms. Made with high-grade ceramic material ensuring durability and water resistance.",
    features: [
      "Water Absorption: <0.5%",
      "Frost Resistant",
      "Stain Resistant",
      "Easy to Clean",
      "Rectified Edges",
      "Digital Print Technology"
    ],
    applications: [
      "Kitchen Backsplash",
      "Bathroom Walls",
      "Commercial Spaces",
      "Shower Areas",
      "Feature Walls"
    ],
    specifications: {
      "Material": "Ceramic",
      "Water Absorption": "<0.5%",
      "Breaking Strength": ">1300 N",
      "Thermal Shock": "Resistant",
      "Chemical Resistance": "Class A",
      "Slip Resistance": "R9"
    },
    certifications: ["ISO 9001:2015", "CE Marking", "Green Building"],
    packaging: "1.44 sq.m per box (36 pieces)",
    warranty: "10 Years Manufacturing Defect"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-cream border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-orange">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-orange">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-charcoal font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-marble rounded-2xl overflow-hidden group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-orange shadow-lg scale-105' 
                        : 'border-transparent hover:border-orange/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-orange/10 text-orange text-sm font-semibold rounded-full">
                    {product.category}
                  </span>

                </div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              {/* Size & Specifications */}
              <div className="grid grid-cols-2 gap-6 p-6 bg-cream rounded-2xl">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Size</div>
                  <div className="text-xl font-semibold text-charcoal">{product.size}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Thickness</div>
                  <div className="text-xl font-semibold text-charcoal">{product.thickness}</div>
                </div>
              </div>

              {/* Finish Selection */}
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">Available Finishes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.finish.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedFinish === finish
                          ? 'border-orange bg-orange text-white'
                          : 'border-border hover:border-orange/50'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-4">Available Colors</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <div key={color} className="text-center">
                      <div 
                        className={`w-12 h-12 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform ${
                          index === 0 ? 'bg-white' : 
                          index === 1 ? 'bg-amber-50' :
                          index === 2 ? 'bg-gray-300' : 'bg-gray-600'
                        }`}
                      ></div>
                      <span className="text-xs text-muted-foreground mt-1 block">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full bg-orange hover:bg-orange/90">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us for Inquiry
                  </Button>
                </Link>

              </div>

              {/* Certifications */}
              <div className="p-6 bg-gradient-to-r from-orange/5 to-orange/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Certifications & Standards</h3>
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-charcoal text-sm font-medium rounded-full border border-orange/20">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Ideal Applications</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.applications.map((application, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-orange" />
                    </div>
                    <span className="text-charcoal font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our product specialists are ready to help you with detailed specifications and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="luxury">
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Experts
              </Button>
            </Link>

          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}