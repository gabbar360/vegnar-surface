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
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Contact", href: "/contact" },
    { name: "Export", href: "/export" },
    { name: "Blog", href: "/blog" },
    { name: "Utilities", href: "/utilities" },
  ];

  const productCategories = [
    {
      name: "Porcelain Pavers (2 cm)",
      href: "/products?category=porcelain-pavers",
    },
    { name: "Subway Tiles", href: "/products?category=subway-tiles" },
    { name: "Mosaic Tiles", href: "/products?category=mosaic-tiles" },
    { name: "Porcelain Tiles", href: "/products?category=porcelain-tiles" },
    {
      name: "Large Format Porcelain Slabs",
      href: "/products?category=large-format-slabs",
    },
    { name: "Flexible Tiles", href: "/products?category=flexible-tiles" },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png"
                alt="Vegnar Surfaces Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Social Media Icons */}
            {/* <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    B-623 RK Iconic, Shital Park
                    <br />
                    Rajkot, Gujarat 360001, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+91-12345-67890"
                  className="text-sm text-primary-foreground/80  hover:text-gray-300 transition-colors"
                >
                  +91 9998040370
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:info@vegnar.com"
                  className="text-sm text-primary-foreground/80  hover:text-gray-300 transition-colors"
                >
                  info@vegnarsurfacesgmail.com
                </a>
              </div>
            </div>
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

          {/* Download & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vegnarsurfaces"
                className="p-3 bg-primary-foreground/10 hover:bg-white hover:text-charcoal rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/vegnarsurfaces/"
                className="p-3 bg-primary-foreground/10 hover:bg-white hover:text-charcoal rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary-foreground/10 hover:bg-white hover:text-charcoal rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/vegnar-surfaces/posts/?feedView=all"
                className="p-3 bg-primary-foreground/10 hover:bg-white hover:text-charcoal rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8">
              <Button className="w-full bg-white text-charcoal hover:bg-gray-100">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
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

            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/60">
                Exporting to 22+ Countries
              </span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/60">
                10+ Years of Excellence
              </span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-white font-semibold">Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
