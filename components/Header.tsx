"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "HOME", path: "/" },
    { 
      name: "COMPANY", 
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Export", path: "/export" },
      ]
    },
    { 
      name: "COLLECTION", 
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Porcelain Pavers (2 cm)", path: "/products?category=porcelain-pavers" },
        { name: "Subway Tiles", path: "/products?category=subway-tiles" },
        { name: "Mosaic Tiles", path: "/products?category=mosaic-tiles" },
        { name: "Porcelain Tiles", path: "/products?category=porcelain-tiles" },
        { name: "Large Format Porcelain Slabs", path: "/products?category=large-format-slabs" },
        { name: "Flexible Tiles", path: "/products?category=flexible-tiles" },
      ]
    },
    { name: "E-CATALOGUE", path: "/catalog" },
    { name: "UTILITIES", path: "/utilities" },
    { name: "BLOG", path: "/blog" },
    { name: "BECOME A PARTNER", path: "/partner", isButton: true },
    { name: "CONTACT", path: "/contact", isButton: true },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png" 
              alt="Vegnar Surfaces Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      setIsCompanyOpen(false);
                      setIsCollectionOpen(false);
                      if (item.name === "COMPANY") setIsCompanyOpen(true);
                      if (item.name === "COLLECTION") setIsCollectionOpen(true);
                    }}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setIsCompanyOpen(false);
                        setIsCollectionOpen(false);
                      }, 100);
                    }}
                  >
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200",
                        isActive(item.path)
                          ? "text-charcoal"
                          : "text-charcoal hover:text-charcoal-light"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {((item.name === "COMPANY" && isCompanyOpen) || (item.name === "COLLECTION" && isCollectionOpen)) && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-4 animate-fade-in z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-6 py-3 text-sm text-charcoal hover:text-white hover:bg-charcoal transition-colors duration-200"
                            onClick={() => {
                              setIsCompanyOpen(false);
                              setIsCollectionOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isButton ? (
                  <Link
                    href={item.path}
                    className="bg-charcoal text-white px-4 xl:px-8 py-2 xl:py-3 rounded-full text-xs xl:text-sm font-medium tracking-wide hover:bg-charcoal-light transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap",
                      isActive(item.path)
                        ? "text-charcoal"
                        : "text-charcoal hover:text-charcoal-light"
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
            className="lg:hidden p-2 text-charcoal hover:text-charcoal-light transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-background border-b border-border/20 shadow-elegant animate-slide-down">
            <nav className="py-6 px-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path}
                    className={cn(
                      "block py-3 text-base font-medium transition-colors duration-200",
                      isActive(item.path)
                        ? "text-charcoal"
                        : "text-charcoal hover:text-charcoal-light"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-charcoal transition-colors duration-200"
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
      </div>
    </header>
  );
};

export default Header;