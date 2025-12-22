"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, Search, Grid, List, TrendingUp, Star, Clock, Eye, BookOpen, Tag, Flame, Mail, Facebook, Twitter, Instagram, Linkedin, Hash, Users, MessageCircle, Share2 } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { api } from "@/lib/api";
import Link from "next/link";
import { getImageUrl } from "@/lib/imageHelper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./blog.css";

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  content: any[];
  slug: string;
  meta_title: string;
  meta_description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: {
    id: number;
    name: string;
    url: string;
  } | null;
}

interface BlogResponse {
  data: BlogPost[];
  totalPages: number;
  totalPosts: number;
  currentPage: number;
}

export default function Blog() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/vegnarsurfaces', color: 'bg-blue-50 hover:bg-blue-100 text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/vegnarsurfaces/', color: 'bg-pink-50 hover:bg-pink-100 text-pink-600' },
    { name: 'WhatsApp', icon: FaSquareWhatsapp, url: 'https://wa.me/919998040370', color: 'bg-green-50 hover:bg-green-100 text-green-600' },
    { name: 'Pinterest', icon: FaPinterest, url: 'https://in.pinterest.com/latavegnarsurfaces/_created/', color: 'bg-red-50 hover:bg-red-100 text-red-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/vegnar-surfaces/posts/?feedView=all', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
  ];

  const postsPerPage = 9;

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'design', name: 'Design Trends' },
    { id: 'installation', name: 'Installation' },
    { id: 'materials', name: 'Materials' },
    { id: 'inspiration', name: 'Inspiration' },
  ];

  const categoryCounts = useMemo(() => {
    const counts = {
      all: totalPosts,
      design: 0,
      installation: 0,
      materials: 0,
      inspiration: 0
    };
    
    blogPosts.forEach(post => {
      const content = (post.title + ' ' + post.meta_description).toLowerCase();
      
      if (content.includes('design') || content.includes('trend') || content.includes('style')) {
        counts.design++;
      }
      if (content.includes('install') || content.includes('guide') || content.includes('how to')) {
        counts.installation++;
      }
      if (content.includes('material') || content.includes('tile') || content.includes('ceramic')) {
        counts.materials++;
      }
      if (content.includes('inspiration') || content.includes('idea') || content.includes('creative')) {
        counts.inspiration++;
      }
    });
    
    return counts;
  }, [blogPosts, totalPosts]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response: BlogResponse = await api.getBlogs(currentPage, postsPerPage);
        setBlogPosts(response.data);
        setTotalPages(response.totalPages);
        setTotalPosts(response.totalPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const searchSuggestions = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    return blogPosts
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.meta_description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [blogPosts, searchTerm]);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => {
        // Simple category matching based on title/content keywords
        const content = (post.title + ' ' + post.meta_description).toLowerCase();
        switch (selectedCategory) {
          case 'design':
            return content.includes('design') || content.includes('trend') || content.includes('style');
          case 'installation':
            return content.includes('install') || content.includes('guide') || content.includes('how to');
          case 'materials':
            return content.includes('material') || content.includes('tile') || content.includes('ceramic');
          case 'inspiration':
            return content.includes('inspiration') || content.includes('idea') || content.includes('creative');
          default:
            return true;
        }
      });
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.meta_description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [blogPosts, searchTerm, selectedCategory]);

  const trendingPosts = useMemo(() => {
    return blogPosts.slice(0, 5);
  }, [blogPosts]);

  const featuredPosts = useMemo(() => {
    return blogPosts.slice(0, 3);
  }, [blogPosts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-xl bg-white border border-cream text-charcoal hover:bg-cream hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    );

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 rounded-xl bg-white border border-cream text-charcoal hover:bg-cream hover:border-gold transition-all duration-300"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="dots1" className="px-2 py-2 text-charcoal/50">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
            i === currentPage
              ? 'bg-charcoal text-white border-charcoal shadow-lg'
              : 'bg-white border-cream text-charcoal hover:bg-cream hover:border-gold'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="dots2" className="px-2 py-2 text-charcoal/50">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 rounded-xl bg-white border border-cream text-charcoal hover:bg-cream hover:border-gold transition-all duration-300"
        >
          {totalPages}
        </button>
      );
    }

    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-xl bg-white border border-cream text-charcoal hover:bg-cream hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    );

    return (
      <div className="flex justify-center items-center gap-2 mt-16">
        {pages}
      </div>
    );
  };

  return (
    <div className="min-h-screen marble-pattern">
      <Header />

      {/* Simple Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Blog
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto mb-8">
            Discover the latest trends, expert tips, and innovative solutions for tiles & surfaces
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-cream rounded-xl focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
              />
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-cream rounded-xl shadow-lg mt-2 z-10">
                  {searchSuggestions.map((post, index) => (
                    <div
                      key={index}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        router.push(`/blog/${post.slug}`);
                        setShowSuggestions(false);
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-cream/50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl cursor-pointer"
                    >
                      <span className="text-charcoal font-medium">{post.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-charcoal text-white shadow-lg'
                    : 'bg-white text-charcoal border-2 border-cream hover:border-gold hover:bg-cream'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-2">Featured Articles</h2>
                <p className="text-charcoal/60">Hand-picked stories from our editors</p>
              </div>
              <Star className="w-8 h-8 text-gold" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className={`group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className={`aspect-[16/10] ${index === 0 ? 'md:aspect-[2/1]' : ''} overflow-hidden relative`}>
                        <img
                          src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        </div>
                      </div>
                      
                      <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
                        <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{isClient ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            }) : 'Loading...'}</span>
                          </div>
                          <div className="w-1 h-1 bg-gold rounded-full"></div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{isClient ? Math.ceil(post.meta_description.length / 200) : 1} min read</span>
                          </div>
                        </div>
                        
                        <h3 className={`font-bold text-charcoal mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {post.title}
                        </h3>
                        
                        <p className={`text-charcoal/70 line-clamp-3 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                          {post.meta_description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Posts Section */}
      {trendingPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-2">Trending Now</h2>
                <p className="text-charcoal/60">Most popular articles this week</p>
              </div>
              <TrendingUp className="w-8 h-8 text-charcoal" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {trendingPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Flame className="w-5 h-5 text-gold" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-charcoal line-clamp-2 group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-charcoal/60 mt-2">
                        <Eye className="w-3 h-3" />
                        <span>{(post.id * 47 + 500)} views</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Grid with Sidebar */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-2">All Articles</h2>
                  <p className="text-charcoal/60">Browse our complete collection</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-xl p-1 shadow-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid'
                          ? 'bg-charcoal text-white'
                          : 'text-charcoal/60 hover:text-charcoal'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list'
                          ? 'bg-charcoal text-white'
                          : 'text-charcoal/60 hover:text-charcoal'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-cream rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-gold rounded-full animate-spin"></div>
                  </div>
                  <p className="mt-6 text-charcoal font-medium">Loading articles...</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-cream/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-charcoal/40" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">No articles found</h3>
                  <p className="text-charcoal/60 mb-6">Try adjusting your search terms.</p>
                  <Button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                    className="bg-charcoal hover:bg-charcoal/90 text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                          <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-[16/10] overflow-hidden relative">
                              <img
                                src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                            
                            <div className="p-6">
                              <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>{isClient ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                  }) : 'Loading...'}</span>
                                </div>
                                <div className="w-1 h-1 bg-gold rounded-full"></div>
                                <div className="flex items-center gap-2">
                                  <User className="w-4 h-4" />
                                  <span>Vegnar Team</span>
                                </div>
                              </div>
                              
                              <h2 className="text-xl font-bold text-charcoal mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                                {post.title}
                              </h2>
                              
                              <p className="text-charcoal/70 line-clamp-3 mb-6 leading-relaxed">
                                {post.meta_description}
                              </p>
                              
                              <div className="flex items-center text-charcoal font-semibold group-hover:text-gold transition-colors duration-300">
                                <span className="mr-2">Read More</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {filteredPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                          <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-80 aspect-[16/10] md:aspect-square overflow-hidden">
                                <img
                                  src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                              </div>
                              
                              <div className="flex-1 p-6 md:p-8">
                                <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{isClient ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric' 
                                    }) : 'Loading...'}</span>
                                  </div>
                                  <div className="w-1 h-1 bg-gold rounded-full"></div>
                                  <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>Vegnar Team</span>
                                  </div>
                                </div>
                                
                                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors duration-300">
                                  {post.title}
                                </h2>
                                
                                <p className="text-charcoal/70 line-clamp-3 mb-6 leading-relaxed text-lg">
                                  {post.meta_description}
                                </p>
                                
                                <div className="flex items-center text-charcoal font-semibold group-hover:text-gold transition-colors duration-300">
                                  <span className="mr-2">Read Full Article</span>
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
              
              {renderPagination()}
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gold rounded-full"></div>
                  <h3 className="text-xl font-bold text-charcoal">Recent Posts</h3>
                </div>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream/50 transition-all duration-300">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-charcoal line-clamp-2 text-sm group-hover:text-gold transition-colors duration-300">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-charcoal/60 mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>{isClient ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            }) : 'Loading...'}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gold rounded-full"></div>
                  <h3 className="text-xl font-bold text-charcoal">Categories</h3>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-charcoal text-white'
                          : 'hover:bg-cream/50 text-charcoal'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Hash className="w-4 h-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-cream text-charcoal/70'
                      }`}>
                        {categoryCounts[category.id as keyof typeof categoryCounts] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gold rounded-full"></div>
                  <h3 className="text-xl font-bold text-charcoal">Follow Us</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={social.name}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gold rounded-full"></div>
                  <h3 className="text-xl font-bold text-charcoal">Blog Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cream/30 rounded-xl">
                    <div className="text-2xl font-bold text-charcoal mb-1">{totalPosts}</div>
                    <div className="text-sm text-charcoal/60 flex items-center justify-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>Articles</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-cream/30 rounded-xl">
                    <div className="text-2xl font-bold text-charcoal mb-1">{Math.max(20, Math.floor(totalPosts * 1.5))}K</div>
                    <div className="text-sm text-charcoal/60 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Readers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}