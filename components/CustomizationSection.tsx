"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Palette, Package, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const CustomizationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Palette,
      title: "Your Logo",
      description: "Add your company's logo to packaging for a stronger brand identity and professional appearance."
    },
    {
      icon: CheckCircle,
      title: "Your Story",
      description: "Share your unique mission – we'll help tell your story on every product and connect with customers."
    },
    {
      icon: Package,
      title: "Our Product",
      description: "Combine our high-quality eco-products with your branding and vision for perfect market fit."
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-charcoal/5 text-charcoal px-6 py-2 rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Customization
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Do You Need Customization?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We bring your vision to life – tailored branding, packaging, and storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`text-center hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? `animate-fade-in` : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="bg-charcoal/5 text-charcoal w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <Button 
            size="lg" 
            className="bg-charcoal text-white hover:bg-charcoal-light px-12 py-4 text-lg"
            asChild
          >
            <Link href="/contact">
              <Globe className="w-5 h-5 mr-2" />
              Start Customization
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CustomizationSection;