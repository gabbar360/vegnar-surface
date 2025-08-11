"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "123 Ceramic Street, Industrial Area",
        "Morbi, Gujarat 363642, India"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 12345 67890",
        "+91 98765 43210"
      ]
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: [
        "info@sunwinceramica.com",
        "sales@sunwinceramica.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-80 bg-charcoal flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-charcoal-light/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch for inquiries and quotes</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="section-title mb-6">Get In Touch</h2>
                <p className="section-subtitle">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange/10 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="bg-marble rounded-xl p-8 text-center">
                  <MapPin className="w-12 h-12 text-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Find Us on Map</h3>
                  <p className="text-muted-foreground">
                    Interactive map would be embedded here
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-luxury">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-orange focus:border-orange resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Information */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">Export Inquiries</h2>
            <p className="section-subtitle">
              We export to 22+ countries worldwide. Contact us for international business opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-luxury text-center">
              <div className="text-3xl font-bold text-orange mb-2">22+</div>
              <div className="text-muted-foreground">Countries Exported</div>
            </div>
            <div className="card-luxury text-center">
              <div className="text-3xl font-bold text-orange mb-2">50M+</div>
              <div className="text-muted-foreground">Tiles Delivered</div>
            </div>
            <div className="card-luxury text-center">
              <div className="text-3xl font-bold text-orange mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}