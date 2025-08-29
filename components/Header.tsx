"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchBar from "@/components/SearchBar";
import { api } from "@/lib/api";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await api.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const navigationItems = [
    { name: "HOME", path: "/" },
    {
      name: "COMPANY",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Manufacturing Facility", path: "/manufacturing" },
        { name: "Export", path: "/export" },
      ],
    },
    {
      name: "COLLECTION",
      path: "/products",
      // hasDropdown: true,
      // dropdownItems: categories.map(cat => ({
      //   name: cat.category_name,
      //   path: `/products?category=${cat.category_name.toLowerCase().replace(/\s+/g, '-')}`
      // })),
    },
    { name: "E-CATALOGUE", path: "/catalog" },
    // { name: "UTILITIES", path: "/utilities" },
    { name: "BLOG", path: "/blog" },
    { name: "BECOME A PARTNER", path: "/partner", isButton: true },
    { name: "CONTACT", path: "/contact", isButton: true },
  ];

  const isActive = (path: string) => pathname === path;
  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "fixed top-0 w-full z-40 transition-all duration-700 ease-out",
      isHomePage
        ? isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl marble-pattern" 
          : "bg-transparent border-b border-transparent"
        : "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl marble-pattern"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png"
              alt="Vegnar Surfaces Logo"
              className={cn(
                "h-8 w-auto object-contain transition-all duration-300",
                isHomePage && !isScrolled ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden sm:block flex-1 max-w-xs lg:max-w-sm mx-2 sm:mx-4 lg:mx-8">
            <SearchBar 
              isHomePage={isHomePage} 
              isScrolled={isScrolled}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
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
                                ? "text-charcoal"
                                : "text-gray-800 hover:text-charcoal"
                              : "text-white drop-shadow-lg hover:text-charcoal/90"
                            : isActive(item.path)
                              ? "text-charcoal"
                              : "text-gray-800 hover:text-charcoal"
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
                          className="block px-6 py-3 text-sm text-gray-700 hover:text-white hover:bg-charcoal transition-all duration-300 rounded-lg mx-2"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.isButton ? (
                  <Link
                    href={item.path}
                    className="bg-gradient-to-r from-charcoal to-charcoal/90 text-white px-2 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs font-semibold tracking-wide hover:from-charcoal/90 hover:to-charcoal/80 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-charcoal/50 whitespace-nowrap"
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
                            ? "text-charcoal"
                            : "text-gray-800 hover:text-charcoal"
                          : "text-white drop-shadow-lg hover:text-charcoal/90"
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
                  ? "text-gray-800 hover:text-charcoal hover:bg-charcoal/10"
                  : "text-white hover:text-charcoal/90 hover:bg-white/20"
                : "text-gray-800 hover:text-charcoal hover:bg-charcoal/10"
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
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white shadow-2xl z-50 max-h-screen overflow-y-auto border-t border-gray-200/50">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-100">
            <SearchBar />
          </div>
          
          <nav className="py-4 px-4 space-y-2 pb-20 min-h-screen">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.isButton ? (
                  <Link
                    href={item.path}
                    className="block w-full bg-gray-800 text-white px-4 py-3 rounded-lg text-sm font-medium text-center hover:bg-gray-600 transition-colors duration-200 mb-2"
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
                        ? "text-gray-800 font-semibold"
                        : "text-gray-800 hover:text-gray-600"
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
                        className="block py-2 px-2 text-xs text-gray-600 hover:text-gray-800 hover:bg-white rounded transition-colors duration-200"
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
