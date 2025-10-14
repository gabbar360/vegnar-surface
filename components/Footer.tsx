import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Download,
  ArrowRight,
  MessageCircleHeart,
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Contact", href: "/contact" },
    { name: "Export", href: "/export" },
    { name: "Blog", href: "/blog" },
    { name: "Utilities", href: "/utilities" }
    // { name: "Sitemap", href: "/sitemap-page" },
  ];

  const productCategories = [
    {
      name: "Porcelain Pavers (2 cm)",
      href: "/products?category=porcelain-pavers",
    },
    { name: "Subway Tiles", href: "/products?category=subway-tiles" },
    { name: "Mosaic Tiles", href: "/products?category=mosaic-tiles" },
    // { name: "Porcelain Tiles", href: "/products?category=porcelain-tiles" },
    {
      name: "Large Format Porcelain Slabs",
      href: "/products?category=large-format-slabs",
    },
    // { name: "Flexible Tiles", href: "/products?category=flexible-tiles" },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png"
                alt="Vegnar Surfaces Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:bg-white p-2 rounded-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0 group-hover:text-black transition-all duration-300" />
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-black transition-colors duration-300 mb-1">
                    Head Quarter
                  </p>
                  <p className="text-sm text-primary-foreground/80 group-hover:text-black transition-colors duration-300">
                    B-623 RK Iconic, Shital Park
                    <br />
                    Rajkot, Gujarat 360006, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group hover:bg-white p-2 rounded-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <Phone className="w-5 h-5 text-white flex-shrink-0 group-hover:text-black transition-all duration-300" />
                <a href="tel:+91-+91 90333 31005" className="text-sm text-primary-foreground/80 group-hover:text-black transition-all duration-300">
                  +91 90333 31005
                </a>
              </div>
              


              <div className="flex items-center space-x-3 group hover:bg-white p-2 rounded-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-5 h-5 text-white flex-shrink-0 group-hover:text-black transition-all duration-300" />
                <a
                  href="mailto:connect@vegnar.com"
                  className="text-sm text-primary-foreground/80 group-hover:text-black transition-all duration-300"
                >connect@vegnar.com
                </a>
              </div>
            </div>

            {/* Certification Icons */}
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white ">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80  hover:text-gray-300 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Collection
            </h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-primary-foreground/80  hover:text-gray-300 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Global Presence */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Global Presence
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group hover:bg-white p-2 rounded-lg transition-colors duration-300">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0 group-hover:text-black transition-colors duration-300" />
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-black transition-colors duration-300 mb-1">
                    Germany Office
                  </p>
                  <p className="text-sm text-primary-foreground/80 group-hover:text-black transition-colors duration-300">
                    Rheinstraße 10, D-35764 Sinn,
                    <br />
                    Germany
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-white p-2 rounded-lg transition-colors duration-300">
                <Mail className="w-5 h-5 text-white flex-shrink-0 group-hover:text-black transition-colors duration-300" />
                <a href="mailto:germany@vegnar.com" 
                  className="text-sm text-primary-foreground/80 group-hover:text-black transition-colors duration-300"
                >
                  germany@vegnar.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3 group hover:bg-white p-2 rounded-lg transition-colors duration-300">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0 group-hover:text-black transition-colors duration-300" />
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-black transition-colors duration-300 mb-1">
                    USA Office
                  </p>
                  <p className="text-sm text-primary-foreground/80 group-hover:text-black transition-colors duration-300">
                    30 N Gould St Ste R
                    <br />
                    Sheridan, WY 82801-6317
                    <br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group hover:bg-white p-2 rounded-lg transition-colors duration-300">
                <Mail className="w-5 h-5 text-white flex-shrink-0 group-hover:text-black transition-colors duration-300" />
                <a href="mailto:usa@vegnar.com" 
                  className="text-sm text-primary-foreground/80 group-hover:text-black transition-colors duration-300"
                >
                  usa@vegnar.com
                </a>
              </div>
            </div>
          </div>

          {/* Download & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/vegnarsurfaces"
                className="p-2 bg-primary-foreground/10 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/vegnarsurfaces/"
                className="p-2 bg-primary-foreground/10 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919998040370"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
              >
                <FaSquareWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://in.pinterest.com/latavegnarsurfaces/_created/"
                className="p-2 bg-primary-foreground/10 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
              >
                <FaPinterest className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vegnar-surfaces/posts/?feedView=all"
                className="p-2 bg-primary-foreground/10 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* <div className="mt-8">
              <Button className="w-full bg-white text-charcoal hover:bg-white hover:text-black hover:scale-105 hover:-translate-y-1 transition-all duration-300 group">
                <Download className="w-4 h-4 mr-2 transition-all duration-300" />
                Download PDF
              </Button>
            </div> */}
             <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                Certifications
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 p-1 rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DRTwvdGV4dD4KPHRleHQgeD0iMjAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BUktJTkc8L3RleHQ+Cjwvc3ZnPgo="
                    alt="CE Marking"
                    className="w-full h-6 object-contain"
                  />
                </div>
                <div className="bg-white/10 p-1 rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BS0UgSU48L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSIyNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklORElBPC90ZXh0Pgo8L3N2Zz4K"
                    alt="Make in India"
                    className="w-full h-6 object-contain"
                  />
                </div>
                <div className="bg-white/10 p-1 rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklTTzwvdGV4dD4KPHRleHQgeD0iMjAiIHk9IjI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MDAxPC90ZXh0Pgo8L3N2Zz4K"
                    alt="ISO 9001"
                    className="w-full h-6 object-contain"
                  />
                </div>
                <div className="bg-white/10 p-1 rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GSUVPPC90ZXh0Pgo8dGV4dCB4PSIyMCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RVhQT1JUPC90ZXh0Pgo8L3N2Zz4K"
                    alt="FIEO Export"
                    className="w-full h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Vegnar Surfaces. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 text-sm text-center">
              <span className="text-primary-foreground/60">
                Exporting to 30+ Countries
              </span>
              <span className="text-primary-foreground/60 hidden sm:inline">
                •
              </span>
              <span className="text-primary-foreground/60">
                18+ Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;