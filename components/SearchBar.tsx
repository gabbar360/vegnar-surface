"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: string;
  name: string;
  category: string;
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
  const searchRef = useRef<HTMLDivElement>(null);

  const tiles = [
    { id: "1", name: "Subway Tiles 100x200mm", category: "Subway Tiles", href: "/product/subway-tile-100x200mm" },
    { id: "2", name: "Subway Tiles 75x150mm", category: "Subway Tiles", href: "/product/subway-tile-75x150mm" },
    { id: "3", name: "Beveled Subway 100x300mm", category: "Subway Tiles", href: "/product/beveled-subway-100x300mm" },
    { id: "11", name: "Outdoor Porcelain 600x600mm", category: "Outdoor Tiles", href: "/product/outdoor-porcelain-tiles-600x600" },
    { id: "12", name: "Outdoor Porcelain 600x900mm", category: "Outdoor Tiles", href: "/product/outdoor-porcelain-tiles-600x900" },
    { id: "21", name: "Porcelain Floor 800x800mm", category: "Porcelain Floor", href: "/product/porcelain-tiles-800x800mm" },
    { id: "31", name: "Large Format Slab 1200x2400mm", category: "Slab Tiles", href: "/product/large-format-slab-1200x2400mm" },
    { id: "41", name: "Fullbody Porcelain 600x600mm", category: "Fullbody Tiles", href: "/product/fullbody-porcelain-600x600mm" },
    { id: "51", name: "Table Top Basin", category: "Sanitaryware", href: "/product/table-top-basin" },
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = tiles.filter(tile =>
        tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tile.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [searchTerm]);

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
          "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors",
          isHomePage
            ? isScrolled
              ? "text-gray-500"
              : "text-white/70"
            : "text-gray-500"
        )} />
        <input
          type="text"
          placeholder="Search tiles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className={cn(
            "w-full pl-10 pr-10 py-2 text-sm rounded-full border transition-all duration-300 focus:outline-none focus:ring-2",
            "min-w-0", // Prevent input from growing too large
            isHomePage
              ? isScrolled
                ? "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange/50"
                : "bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:ring-white/30 focus:bg-white/20"
              : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange/50"
          )}
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
          {results.length > 0 ? (
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
              No tiles found for "{searchTerm}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;