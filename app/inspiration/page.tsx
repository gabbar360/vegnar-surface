"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function Inspiration() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const inspirationGallery = [
    // Residential Category
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      description: "Large format porcelain tiles creating seamless flooring"
    },
    {
      id: 2,
      title: "Contemporary Bedroom",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      description: "Warm wood-look tiles for cozy interiors"
    },
    {
      id: 3,
      title: "Open Plan Living",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400",
      description: "Seamless flow with large format tiles"
    },
    {
      id: 4,
      title: "Minimalist Home",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=400",
      description: "Clean lines with marble-effect tiles"
    },
    {
      id: 5,
      title: "Family Living Space",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400",
      description: "Durable and stylish tiles for family homes"
    },
    {
      id: 6,
      title: "Luxury Villa Interior",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400",
      description: "Premium natural stone effect tiles"
    },

    // Commercial Category
    {
      id: 7,
      title: "Corporate Office",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      description: "Durable porcelain tiles for high-traffic areas"
    },
    {
      id: 8,
      title: "Retail Showroom",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
      description: "Polished tiles creating sophisticated retail space"
    },
    {
      id: 9,
      title: "Modern Restaurant",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      description: "Easy-clean tiles perfect for food service"
    },
    {
      id: 10,
      title: "Shopping Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400",
      description: "Slip-resistant tiles for public spaces"
    },
    {
      id: 11,
      title: "Medical Facility",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400",
      description: "Hygienic and antimicrobial tile surfaces"
    },
    {
      id: 12,
      title: "Airport Terminal",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
      description: "Heavy-duty tiles for extreme traffic"
    },

    // Bathroom Category
    {
      id: 13,
      title: "Luxury Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      description: "Subway tiles with modern fixtures"
    },
    {
      id: 14,
      title: "Spa-Style Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400",
      description: "Natural stone tiles for relaxing ambiance"
    },
    {
      id: 15,
      title: "Modern Ensuite",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1572721546624-05bf65ad9c2a?w=400",
      description: "Large format tiles minimizing grout lines"
    },
    {
      id: 16,
      title: "Family Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400",
      description: "Durable and safe slip-resistant tiles"
    },
    {
      id: 17,
      title: "Guest Powder Room",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=400",
      description: "Statement tiles for small spaces"
    },
    {
      id: 18,
      title: "Wet Room Design",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400",
      description: "Waterproof tiles for seamless wet areas"
    },

    // Kitchen Category
    {
      id: 19,
      title: "Kitchen Backsplash",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      description: "Elegant subway tiles for kitchen walls"
    },
    {
      id: 20,
      title: "Modern Kitchen Island",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556909195-f4e1d1bf66c8?w=400",
      description: "Large format tiles on kitchen islands"
    },
    {
      id: 21,
      title: "Farmhouse Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556909195-4b7b2e39ef0b?w=400",
      description: "Rustic tiles with modern functionality"
    },
    {
      id: 22,
      title: "Contemporary Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556909215-4b1f8b1e7b92?w=400",
      description: "Sleek tiles for modern cooking spaces"
    },
    {
      id: 23,
      title: "Open Kitchen Design",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
      description: "Continuous flooring from kitchen to living"
    },
    {
      id: 24,
      title: "Professional Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556228394-b8fb73c8b8c7?w=400",
      description: "Commercial-grade tiles for home chefs"
    },

    // Outdoor Category
    {
      id: 25,
      title: "Outdoor Terrace",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      description: "20mm outdoor porcelain tiles"
    },
    {
      id: 26,
      title: "Pool Deck",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400",
      description: "Non-slip tiles perfect for poolside areas"
    },
    {
      id: 27,
      title: "Garden Pathway",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      description: "Weather-resistant tiles for outdoor paths"
    },
    {
      id: 28,
      title: "Rooftop Terrace",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400",
      description: "Lightweight tiles for elevated outdoor spaces"
    },
    {
      id: 29,
      title: "Patio Design",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
      description: "Durable outdoor tiles for entertainment areas"
    },
    {
      id: 30,
      title: "Commercial Courtyard",
      category: "Outdoor",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
      description: "Heavy-duty outdoor tiles for public spaces"
    },

    // Hospitality Category
    {
      id: 31,
      title: "Hotel Lobby",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
      description: "Large format slab tiles creating grandeur"
    },
    {
      id: 32,
      title: "Restaurant Interior",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
      description: "Easy-maintenance tiles for dining establishments"
    },
    {
      id: 33,
      title: "Hotel Suite Bathroom",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      description: "Luxury tiles for premium hospitality"
    },
    {
      id: 34,
      title: "Spa Reception",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      description: "Calming natural stone effect tiles"
    },
    {
      id: 35,
      title: "Resort Pool Area",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
      description: "Water-resistant tiles for resort facilities"
    },
    {
      id: 36,
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
      description: "Designer tiles creating unique atmospheres"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Bathroom", "Kitchen", "Outdoor", "Hospitality"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
  <section className="relative py-24 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Design Inspiration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover endless possibilities with our tile collections
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
  <section className="py-8 marble-pattern border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-charcoal text-white hover:bg-charcoal-light" 
                  : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
  <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspirationGallery
              .filter(item => selectedCategory === "All" || item.category === selectedCategory)
              .map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="bg-white text-charcoal hover:bg-charcoal hover:text-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white text-charcoal hover:bg-charcoal hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-charcoal font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold text-charcoal mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 marble-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Need Custom Design Ideas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our design team can help you visualize your space with our tiles. 
            Contact us for personalized design consultation.
          </p>
          <Button size="lg" className="bg-charcoal hover:bg-charcoal-light text-white">
            <Camera className="w-5 h-5 mr-2" />
            Get Design Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}