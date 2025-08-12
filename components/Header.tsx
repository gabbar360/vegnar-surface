"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "HOME", path: "/" },
    {
      name: "COMPANY",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Export", path: "/export" },
      ],
    },
    {
      name: "COLLECTION",
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Porcelain Pavers (2 cm)",
          path: "/products?category=porcelain-pavers",
        },
        { name: "Subway Tiles", path: "/products?category=subway-tiles" },
        { name: "Mosaic Tiles", path: "/products?category=mosaic-tiles" },
        { name: "Porcelain Tiles", path: "/products?category=porcelain-tiles" },
        {
          name: "Large Format Porcelain Slabs",
          path: "/products?category=large-format-slabs",
        },
        { name: "Flexible Tiles", path: "/products?category=flexible-tiles" },
      ],
    },
    { name: "E-CATALOGUE", path: "/catalog" },
    { name: "UTILITIES", path: "/utilities" },
    { name: "BLOG", path: "/blog" },
    { name: "BECOME A PARTNER", path: "/partner", isButton: true },
    { name: "CONTACT", path: "/contact", isButton: true },
  ];

  const isActive = (path: string) => pathname === path;
  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-700 ease-out",
      isHomePage
        ? isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl" 
          : "bg-transparent border-b border-transparent"
        : "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png"
              alt="Vegnar Surfaces Logo"
              className={cn(
                "h-12 w-auto object-contain transition-all duration-300",
                isHomePage && !isScrolled ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <span
                        className={cn(
                          "text-xs xl:text-sm font-semibold tracking-wide transition-all duration-300",
                          isHomePage
                            ? isScrolled
                              ? isActive(item.path)
                                ? "text-orange"
                                : "text-gray-800 hover:text-orange"
                              : "text-white drop-shadow-lg hover:text-orange/90"
                            : isActive(item.path)
                              ? "text-orange"
                              : "text-gray-800 hover:text-orange"
                        )}
                      >
                        {item.name}
                      </span>
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </div>

                    {/* CSS Hover Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-2xl shadow-2xl py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block px-6 py-3 text-sm text-gray-700 hover:text-white hover:bg-orange transition-all duration-300 rounded-lg mx-2"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.isButton ? (
                  <Link
                    href={item.path}
                    className="bg-gradient-to-r from-orange to-orange/90 text-white px-4 xl:px-8 py-2 xl:py-3 rounded-full text-xs xl:text-sm font-semibold tracking-wide hover:from-orange/90 hover:to-orange/80 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-orange/50 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "text-xs xl:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap",
                      isHomePage
                        ? isScrolled
                          ? isActive(item.path)
                            ? "text-orange"
                            : "text-gray-800 hover:text-orange"
                          : "text-white drop-shadow-lg hover:text-orange/90"
                        : isActive(item.path)
                          ? "text-orange"
                          : "text-gray-800 hover:text-orange"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-all duration-300 hover:scale-110 rounded-lg",
              isHomePage
                ? isScrolled
                  ? "text-gray-800 hover:text-orange hover:bg-orange/10"
                  : "text-white hover:text-orange/90 hover:bg-white/20"
                : "text-gray-800 hover:text-orange hover:bg-orange/10"
            )}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 backdrop-blur-2xl shadow-2xl z-40 overflow-y-auto border-t border-gray-200/50">
          <nav className="py-4 px-4 space-y-2 pb-20 min-h-screen">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.isButton ? (
                  <Link
                    href={item.path}
                    className="block w-full bg-charcoal bg-gray-800 text-white px-4 py-3 rounded-lg text-sm font-medium text-center hover:bg-charcoal-light hover:bg-gray-600 transition-colors duration-200 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "block py-3 text-sm font-medium transition-colors duration-200 border-b border-gray-100",
                      isActive(item.path)
                        ? "text-charcoal text-gray-800 font-semibold"
                        : "text-charcoal text-gray-800 hover:text-charcoal-light hover:text-gray-600"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.hasDropdown && (
                  <div className="ml-4 mt-1 mb-2 space-y-1 bg-gray-50 rounded-lg p-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className="block py-2 px-2 text-xs text-gray-600 hover:text-charcoal hover:text-gray-800 hover:bg-white rounded transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
