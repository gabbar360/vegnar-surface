"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, Palette, Ruler, Package, Truck } from "lucide-react";

export default function Utilities() {
  const utilities = [
    {
      icon: Calculator,
      title: "Tile Calculator",
      description: "Calculate the exact amount of tiles needed for your project",
      action: "Calculate Now"
    },
    {
      icon: Palette,
      title: "Color Matcher",
      description: "Find the perfect tile color combinations for your space",
      action: "Match Colors"
    },
    {
      icon: Ruler,
      title: "Size Guide",
      description: "Comprehensive guide to tile sizes and their applications",
      action: "View Guide"
    },
    {
      icon: Package,
      title: "Packing Calculator",
      description: "Calculate packaging requirements and shipping costs",
      action: "Calculate Packing"
    },
    {
      icon: Download,
      title: "Technical Specs",
      description: "Download detailed technical specifications and installation guides",
      action: "Download Specs"
    },
    {
      icon: Truck,
      title: "Delivery Estimator",
      description: "Estimate delivery time and costs for your location",
      action: "Estimate Delivery"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative py-24 bg-gradient-to-r from-cream to-marble">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Project Utilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tools and resources to help you plan your perfect tile project
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {utilities.map((utility, index) => {
              const Icon = utility.icon;
              return (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="bg-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-charcoal">{utility.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {utility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className="bg-orange hover:bg-orange/90 text-white">
                      {utility.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}