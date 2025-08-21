"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  Globe,
  Shield,
  Package,
  Truck,
  Mail,
  Phone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Partner() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: benefitsRef, isVisible: benefitsVisible } =
    useScrollAnimation();
  const { elementRef: processRef, isVisible: processVisible } =
    useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: CheckCircle,
      title: "Uncompromising Quality",
      description:
        "Every product is manufactured to international standards, with rigorous quality checks at every stage.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "Serving over 30+ countries, we understand the diverse needs of our markets and ensure smooth, reliable logistics for our partners.",
    },
    {
      icon: Shield,
      title: "Certified Excellence",
      description:
        "ISO certified manufacturing and comprehensive product warranties for complete peace of mind.",
    },
    {
      icon: Package,
      title: "Custom Branding Solutions",
      description:
        "OEM and white-label options with tailored packaging and branding to strengthen your local market presence.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Connect",
      description:
        "Reach out via our partnership form or schedule a call with our team.",
    },
    {
      step: "2",
      title: "Evaluate",
      description:
        "We assess your market potential and prepare a customised partnership proposal.",
    },
    {
      step: "3",
      title: "Agreement",
      description:
        "Define partnership terms: territory, product range, and pricing structure.",
    },
    {
      step: "4",
      title: "Launch",
      description:
        "Start operations with dedicated account management, marketing materials, and training support.",
    },
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Japan",
    "South Korea",
    "China",
    "India",
    "Brazil",
    "Mexico",
    "Argentina",
    "South Africa",
    "Nigeria",
    "Egypt",
    "UAE",
    "Saudi Arabia",
    "Turkey",
    "Russia",
    "Poland",
    "Netherlands",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-24 bg-gradient-to-r from-charcoal to-charcoal-light text-white transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Become a Partner
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Join our global network of trusted distributors, retailers, and project partners delivering premium porcelain surfaces to the world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@vegnarsurfaces.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+919998040370</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className={`py-24 bg-background transition-all duration-1000 delay-200 ${
          benefitsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Why Partner With Vegnar Surfaces?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partnering with Vegnar Surfaces means more than access to exceptional products — it’s about building a profitable, long-term relationship backed by world-class service and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 ${
                  benefitsVisible ? `animate-fade-in` : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="bg-charcoal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-charcoal">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className={`py-24 bg-grey-light transition-all duration-1000 delay-400 ${
          processVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              How to Become a Vegnar Partner
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures a smooth and professional onboarding experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  processVisible ? `animate-fade-in` : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-charcoal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section
        ref={formRef}
        className={`py-24 bg-background transition-all duration-1000 delay-600 ${
          formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Start Your Partnership Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our partnership team will contact
                you within 24 hours
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">
                  Partnership Application
                </CardTitle>
                <CardDescription>
                  Tell us about your business and partnership interests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country}
                            value={country.toLowerCase()}
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="contractor">Contractor</SelectItem>
                        <SelectItem value="architect">
                          Architect/Designer
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Business Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your experience in tiles/construction industry..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Partnership Interests</Label>
                  <Textarea
                    id="interests"
                    placeholder="Which product categories are you interested in? What are your market plans?"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    size="lg"
                    className="bg-charcoal text-white hover:bg-charcoal-light px-12"
                  >
                    Submit Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-charcoal-light text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What to Expect as Our Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dedicated Account Manager
              </h3>
              <p className="text-white/80">
                Personal support throughout your partnership journey
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Samples</h3>
              <p className="text-white/80">
                Comprehensive product catalogs and sample collections
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pricing
              </h3>
              <p className="text-white/80">
                Attractive wholesale pricing with volume incentives
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
              <p className="text-white/80">
                Marketing materials and promotional support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
