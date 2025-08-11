import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users, Factory } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const stats = [
    { icon: Globe, value: "22+", label: "Countries Exported" },
    { icon: Factory, value: "10+", label: "Years Experience" },
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Award, value: "50M+", label: "Tiles Delivered" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-gold font-semibold tracking-wider uppercase text-sm">
                Let's Know About Vegnar
              </span>
              <h2 className="section-title mt-4 mb-6">
                Dedication towards
                <span className="block text-gold">the customers.</span>
              </h2>
            </div>
            
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
                of homeowners and architects. We manufacture and provide the high-quality, best 
                selection of <strong className="text-charcoal">Outdoor Porcelain Tiles, Subway tiles, 
                Porcelain Floor Tiles, and Porcelain Slab Tiles</strong> with unique patterns.
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
                src={"/assets/about-tiles.jpg"}
                alt="Premium ceramic tiles by Vegnar"
                className="w-full rounded-2xl shadow-elegant"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-background border border-border/20 rounded-xl p-6 shadow-elegant hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">50M+</div>
                    <div className="text-sm text-muted-foreground">Tiles Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-background border border-border/20 rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-charcoal mb-2">{stat.value}</div>
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