"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form Data:", formData);

    try {
      const result = await api.submitContact(formData);
      console.log("Submit result:", result);
      toast.success("Thank you for your inquiry."); //! We'll get back to you soon
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        company_name: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.error?.message ||
        error.message ||
        "Unknown error";
      toast.error(`Sorry, there was an error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Quarter - India",
      details: [
        "B-623 RK Iconic, Shital Park",
        "Rajkot, Gujarat 360006, India",
      ],
      link: "https://maps.google.com/?q=B-623+RK+Iconic+Shital+Park+Rajkot+Gujarat+360006+India",
    },
    {
      icon: MapPin,
      title: "Germany Office",
      details: ["Rheinstraße 10, D-35764 Sinn,", "Germany"],
      link: "https://maps.google.com/?q=Rheinstraße+10+D-35764+Sinn+Germany",
    },
    {
      icon: MapPin,
      title: "USA Office",
      details: [
        "30 N Gould St Ste R",
        "Sheridan, WY 82801-6317",
        "United States",
      ],
      link: "https://maps.google.com/?q=30+N+Gould+St+Ste+R+Sheridan+WY+82801-6317+United+States",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 90333 31005", "+91 90333 31031"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["connect@vegnar.com", "germany@vegnar.com", "usa@vegnar.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "India: Mon-Sat 10:00 AM - 7:00 PM",
        "Germany: Mon-Fri 9:00 AM - 6:00 PM",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section
        className="relative h-80 bg-charcoal flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-charcoal-light/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch for inquiries and quotes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="section-title mb-6">Get In Touch</h2>
                <p className="section-subtitle">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-4 p-4 rounded-xl border border-border/20 hover:border-orange/30 hover:bg-orange/5 transition-all duration-300 hover:shadow-md cursor-pointer"
                      >
                        <div className="bg-orange/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                          <info.icon className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-charcoal mb-2 group-hover:text-orange transition-colors duration-300">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p
                              key={i}
                              className="text-muted-foreground group-hover:text-charcoal transition-colors duration-300"
                            >
                              {detail}
                            </p>
                          ))}
                          <p className="text-xs text-orange mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to view on map
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/20 hover:border-orange/30 hover:bg-orange/5 transition-all duration-300">
                        <div className="bg-orange/10 p-3 rounded-lg flex-shrink-0">
                          <info.icon className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-charcoal mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) =>
                            info.title === "Email Us" ? (
                              <a
                                key={i}
                                href={`mailto:${detail}`}
                                className="block text-muted-foreground hover:text-orange transition-colors duration-200 mb-1"
                              >
                                {detail}
                              </a>
                            ) : info.title === "Call Us" ? (
                              <a
                                key={i}
                                href={`tel:${detail.split(" ")[0]}`}
                                className="block text-muted-foreground hover:text-orange transition-colors duration-200 mb-1"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p key={i} className="text-muted-foreground mb-1">
                                {detail}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-luxury">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
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
                        name="phone_number"
                        value={formData.phone_number}
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
                        name="company_name"
                        value={formData.company_name}
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

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Map
      <section className="relative"> 
        <div className="relative h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.234!2d70.7512!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0x200eef734f1e2b7c!2sShital%20Park%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RK Iconic, B623, 150 Feet Ring Rd, Sheetal Park, Puneet Nagar, Bajrang Wadi, Rajkot, Gujarat 360007"
          ></iframe>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
