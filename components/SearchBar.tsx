"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  name: string;
  category: string; // Product | Blog | Catalog
  href: string;
}

interface SearchBarProps {
  className?: string;
  isHomePage?: boolean;
  isScrolled?: boolean;
}

const SearchBar = ({ className, isHomePage, isScrolled }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [suggestions, setSuggestions] = useState<{products: string[], blogs: string[], catalogs: string[]}>({ products: [], blogs: [], catalogs: [] });
  const searchRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);

  // Fetch dynamic suggestions from your website
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await fetch('/api/suggestions');
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
        }
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
      }
    };
    fetchSuggestions();
  }, []);

  // Create cycling placeholders from your content
  const placeholders = [
    ...suggestions.products,
    ...suggestions.blogs, 
    ...suggestions.catalogs
  ].filter(Boolean);

  // Cycling animation
  useEffect(() => {
    if (placeholders.length === 0) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  // Debounced dynamic search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const handler = setTimeout(async () => {
      // Cancel previous request
      if (controllerRef.current) controllerRef.current.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}` , {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: SearchResult[] = await res.json();
        setResults(data);
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          setResults([]);
        }
      } finally {
        setLoading(false);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className={cn(
          "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-300",
          isAnimating ? "scale-110 rotate-12" : "scale-100 rotate-0",
          isHomePage
            ? isScrolled
              ? "text-gray-500"
              : "text-white/70"
            : "text-gray-500"
        )} />
        <input
          type="text"
          placeholder={placeholders.length > 0 ? placeholders[currentPlaceholder] : "Search products, blogs, catalogs..."}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className={cn(
            "w-full pl-10 pr-10 py-2 text-sm rounded-full border transition-all duration-300 focus:outline-none focus:ring-2",
            "min-w-0",
            isHomePage
              ? isScrolled
                ? "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange/50"
                : "bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:ring-white/30 focus:bg-white/20"
              : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange/50"
          )}
          style={{
            transition: 'all 0.3s ease'
          }}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className={cn(
              "absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors hover:scale-110",
              isHomePage
                ? isScrolled
                  ? "text-gray-500 hover:text-gray-700"
                  : "text-white/70 hover:text-white"
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (searchTerm.length > 0 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
          {loading ? (
            <div className="px-4 py-3 text-sm text-gray-500">Searching...</div>
          ) : results.length > 0 ? (
            <>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.href}
                  onClick={() => {
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <div className="font-medium text-gray-900 text-sm">{result.name}</div>
                  <div className="text-xs text-gray-500">{result.category}</div>
                </Link>
              ))}
              <Link
                href={`/products?search=${encodeURIComponent(searchTerm)}`}
                onClick={() => {
                  setIsOpen(false);
                  setSearchTerm("");
                }}
                className="block px-4 py-3 text-center text-orange hover:bg-orange/10 font-medium text-sm transition-colors"
              >
                View all results for "{searchTerm}"
              </Link>
            </>
          ) : searchTerm.length > 0 ? (
            <div className="px-4 py-6 text-center text-gray-500 text-sm">
              No results for "{searchTerm}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;