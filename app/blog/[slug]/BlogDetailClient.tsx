"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Menu, X, ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { api } from "@/lib/api";
import Link from "next/link";
import { getImageUrl } from "@/lib/imageHelper";
import "../blog.css";

// Function to decode HTML entities
const decodeHtmlEntities = (text: string) => {
  if (typeof window === "undefined") return text;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text.replace(/&amp;/g, "&");
  return textarea.value;
};

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function generateTableOfContents(content: string): TocItem[] {
  if (typeof window === "undefined") return [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  return Array.from(headings).map((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id; // Add ID to the heading element
    return {
      id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    };
  });
}

function addIdsToContent(content: string): string {
  if (typeof window === "undefined") return content;
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  headings.forEach((heading, index) => {
    heading.id = `heading-${index}`;
  });
  
  // Remove any existing table of contents from content
  const tocElements = doc.querySelectorAll('[class*="toc"], [id*="toc"], [class*="table-of-contents"], [id*="table-of-contents"]');
  tocElements.forEach(el => el.remove());
  
  // Remove common TOC patterns
  const tocPatterns = doc.querySelectorAll('ul li a[href^="#"], ol li a[href^="#"]');
  tocPatterns.forEach(pattern => {
    const parent = pattern.closest('ul, ol');
    if (parent && parent.children.length > 2) {
      parent.remove();
    }
  });
  
  return doc.body.innerHTML;
}

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
  categories?: string[];
  image?: {
    id: number;
    name: string;
    url: string;
  } | null;
}

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copyDone, setCopyDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const articleRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const [blogData, allBlogsResponse] = await Promise.all([
          api.getBlogBySlug(slug),
          api.getBlogs(1, 100), // Get more blogs for related posts
        ]);
        setBlog(blogData);
        setAllBlogs(allBlogsResponse.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  // Generate TOC when blog content is loaded
  useEffect(() => {
    if (blog?.content?.[0]?.children?.[0]?.text) {
      const content = decodeHtmlEntities(blog.content[0].children[0].text);
      const toc = generateTableOfContents(content);
      setTocItems(toc);
    }
  }, [blog]);

  // Reading progress + subtle parallax + active heading tracking
  useEffect(() => {
    const onScroll = () => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        const total = Math.max(1, rect.height - window.innerHeight);
        const seen = Math.min(
          total,
          Math.max(0, window.innerHeight - rect.top)
        );
        setProgress(Math.round((seen / total) * 100));
        
        // Track active heading
        const headings = articleRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let currentActive = '';
        
        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            currentActive = heading.id;
          }
        });
        
        if (currentActive !== activeHeading) {
          setActiveHeading(currentActive);
        }
      }
      if (heroImgRef.current) {
        const y = window.scrollY;
        heroImgRef.current.style.transform = `translateY(${
          Math.min(40, y * 0.15)
        }px) scale(1.02)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeHeading]);

  const related = useMemo(() => {
    if (!blog) return [] as BlogPost[];
    return allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);
  }, [allBlogs, blog]);

  const handleCopy = async () => {
    try {
      const shareLink = typeof window !== "undefined" ? window.location.href : "";
      await navigator.clipboard.writeText(shareLink);
      setCopyDone(true);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setSidebarOpen(false);
    }
  };

  // Add IDs to headings in content after render
  useEffect(() => {
    if (articleRef.current && tocItems.length > 0) {
      const headings = articleRef.current?.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings?.forEach((heading, index) => {
        if (tocItems[index]) {
          heading.id = tocItems[index].id;
        }
      });
    }
  }, [tocItems]);

  if (loading) {
    return (
      <div className="min-h-screen marble-pattern">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen marble-pattern">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Blog Not Found
          </h1>
          <Link href="/blog">
            <Button className="bg-orange hover:bg-orange/90 text-white transition-colors duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen marble-pattern overflow-x-hidden">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Header />

      {/* Mobile TOC Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-24 right-4 z-40 xl:hidden bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 hover:bg-white transition-colors"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Table of Contents Sidebar */}
      <div className={`fixed top-0 right-0 w-80 bg-white/95 backdrop-blur-md shadow-2xl border-l border-gray-200 z-30 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} xl:translate-x-0`} style={{ height: '100vh', paddingTop: '80px' }}>
        <div className="p-6 h-full flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 flex-shrink-0">
            <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
            Table of Contents
          </h3>
          <nav className="space-y-1 flex-1 overflow-y-auto pr-2">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-orange-50 ${
                  activeHeading === item.id 
                    ? 'bg-orange-100 text-orange-700 border-l-2 border-orange-500' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
              >
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 opacity-50" />
                  <span className="line-clamp-2">{item.text}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Fixed Social Media Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <a href="https://www.facebook.com/vegnarsurfaces" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/vegnarsurfaces/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://in.pinterest.com/latavegnarsurfaces/_created/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <FaPinterest className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/company/vegnar-surfaces/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 xl:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden xl:mr-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImgRef}
            src={getImageUrl(blog.image?.url || "/assets/tiles-bg.jpg")}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-30">
          <Link href="/blog">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white hover:bg-white/25 transition-all duration-300 border border-white/20">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </div>
          </Link>
        </div>

        {/* Content Card */}
        <div className="absolute inset-0 flex items-end justify-center px-4 pb-12 z-20">
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-white/20">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-orange-500/90 text-white text-sm font-semibold rounded-full uppercase tracking-wide backdrop-blur-sm">
                  {(() => {
                    if (!blog.categories || blog.categories.length === 0) return 'Blog';
                    
                    // Filter out subcategories and show main categories
                    const mainCategories = blog.categories.filter(cat => 
                      !cat.toLowerCase().includes('customer stories') && 
                      !cat.toLowerCase().includes('case studies')
                    );
                    
                    return mainCategories.length > 0 ? mainCategories[0] : blog.categories[0];
                  })()}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                {blog.title}
              </h1>

              {/* Author & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white drop-shadow">
                      Vegnar Surfaces
                    </div>
                    <div className="text-sm text-white/90 drop-shadow">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      • 4 min read
                    </div>
                  </div>
                </div>
                
                {/* Share Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 rounded-full border border-white/30"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">{copyDone ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 xl:mr-80 marble-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Content */}
          <article
            ref={articleRef}
            className="blog-content prose prose-lg prose-gray max-w-none"
            style={{
              '--tw-prose-headings': '#1f2937',
              '--tw-prose-body': '#374151',
              '--tw-prose-links': '#ea580c',
              '--tw-prose-bold': '#1f2937',
              '--tw-prose-counters': '#6b7280',
              '--tw-prose-bullets': '#d1d5db',
              '--tw-prose-hr': '#e5e7eb',
              '--tw-prose-quotes': '#1f2937',
              '--tw-prose-quote-borders': '#e5e7eb',
              '--tw-prose-captions': '#6b7280',
              '--tw-prose-code': '#1f2937',
              '--tw-prose-pre-code': '#e5e7eb',
              '--tw-prose-pre-bg': '#1f2937',
              '--tw-prose-th-borders': '#d1d5db',
              '--tw-prose-td-borders': '#e5e7eb',
            } as React.CSSProperties}
          >
            <div
              className="content-without-toc"
              dangerouslySetInnerHTML={{
                __html: addIdsToContent(decodeHtmlEntities(
                  blog.content?.[0]?.children?.[0]?.text || ""
                )),
              }}
            />
            <style jsx>{`
              .content-without-toc ul:has(li a[href^="#"]):first-child,
              .content-without-toc ol:has(li a[href^="#"]):first-child,
              .content-without-toc [class*="toc"],
              .content-without-toc [id*="toc"],
              .content-without-toc [class*="table-of-contents"],
              .content-without-toc [id*="table-of-contents"] {
                display: none !important;
              }
            `}</style>
          </article>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Articles
                </Button>
              </Link>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Scroll progress: {progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 xl:mr-80 marble-pattern relative">
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Related Articles
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={getImageUrl(
                          post.image?.url || "/assets/tiles-bg.jpg"
                        )}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="text-sm text-gray-500 font-medium">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric"
                            }
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 line-clamp-2 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                        {post.meta_description}
                      </p>
                      <div className="mt-4 flex items-center text-orange-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="relative z-50 bg-white">
        <Footer />
      </div>
    </div>
  );
}