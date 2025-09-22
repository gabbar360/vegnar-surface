"use client";
import { MapPin, ExternalLink, Home, Building, Package, FileText, Phone, Users } from "lucide-react";
import Link from "next/link";

const SitemapPage = () => {
  const siteLinks = [
    {
      category: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Welcome to Vegnar Surfaces" },
        { name: "About Us", path: "/about", description: "Learn about our company" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
      ]
    },
    {
      category: "Company",
      icon: Building,
      links: [
        { name: "Manufacturing Facility", path: "/manufacturing", description: "Our production capabilities" },
        { name: "Export Services", path: "/export", description: "Global export solutions" },
        { name: "Become a Partner", path: "/partner", description: "Partnership opportunities" },
      ]
    },
    {
      category: "Products & Services",
      icon: Package,
      links: [
        { name: "Products", path: "/products", description: "Our tile collections" },
        { name: "E-Catalogue", path: "/catalog", description: "Browse our digital catalog" },
        { name: "Get Sample", path: "/sample", description: "Request product samples" },
        { name: "Inspiration", path: "/inspiration", description: "Design inspiration gallery" },
      ]
    },
    {
      category: "Resources",
      icon: FileText,
      links: [
        { name: "Blog", path: "/blog", description: "Latest news and insights" },
        { name: "Utilities", path: "/utilities", description: "Helpful tools and resources" },
      ]
    }
  ];

  const officeInfo = {
    name: "Vegnar Surfaces",
    address: "Plot No. 123, Industrial Area, Morbi, Gujarat, India - 363641",
    phone: "+91 98765 43210",
    email: "info@vegnarsurfaces.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Site Map</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all pages of our website and find our office location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Website Links */}
          <div>
            <div className="flex items-center mb-8">
              <ExternalLink className="w-6 h-6 text-orange mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Website Pages</h2>
            </div>

            <div className="space-y-8">
              {siteLinks.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="w-5 h-5 text-orange mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">{section.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.path}
                        className="block p-3 rounded-lg border border-gray-100 hover:border-orange hover:bg-orange/5 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-orange transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Location */}
          <div>
            <div className="flex items-center mb-8">
              <MapPin className="w-6 h-6 text-orange mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Office Location</h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{officeInfo.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{officeInfo.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange mr-3 flex-shrink-0" />
                    <a href={`tel:${officeInfo.phone}`} className="text-gray-700 hover:text-orange transition-colors">
                      {officeInfo.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-orange mr-3 flex-shrink-0" />
                    <a href={`mailto:${officeInfo.email}`} className="text-gray-700 hover:text-orange transition-colors">
                      {officeInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.8167!3d22.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ5JzAwLjEiTiA3MMKwNDknMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=22.8167,70.8167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                  
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=22.8167,70.8167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;