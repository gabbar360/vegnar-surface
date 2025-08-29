"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";

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
  };
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleIds, setVisibleIds] = useState<Record<number, boolean>>({});
  const rowRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await api.getBlogs();
        setBlogPosts(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filtered posts based on search
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return blogPosts;
    const q = searchQuery.toLowerCase();
    return blogPosts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.meta_description?.toLowerCase().includes(q)
    );
  }, [blogPosts, searchQuery]);

  const featured = filtered[0];
  const others = filtered.slice(1);

  // Reveal on scroll animations for rows
  useEffect(() => {
    if (!others.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idAttr = entry.target.getAttribute("data-id");
          if (!idAttr) return;
          const id = Number(idAttr);
          if (entry.isIntersecting) {
            setVisibleIds((prev) => ({ ...prev, [id]: true }));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    others.forEach((p) => {
      const el = rowRefs.current[p.id!];
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [others]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-24 with-marble-overlay overflow-hidden">
        <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-orange/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-charcoal/10 blur-3xl animate-pulse" />

        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-charcoal via-orange to-charcoal">
              Insights & Inspiration
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest trends, guides, and stories from the world of premium porcelain surfaces.
            </p> */}

            {/* Search */}
            {/* <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border/60 bg-white/90 backdrop-blur focus:ring-2 focus:ring-orange focus:border-orange outline-none"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {loading ? null : featured ? (
        <section className="py-10 marble-pattern">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featured.slug || featured.id}`}>
              <div className="group relative rounded-2xl overflow-hidden shadow-elegant cursor-pointer">
                {featured.image && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://10.165.67.219"}${featured.image.url}`}
                    alt={featured.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                  <div className="flex items-center gap-4 text-sm text-white/90 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featured.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> Admin
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="max-w-3xl text-white/90 line-clamp-2 md:line-clamp-3">
                    {featured.meta_description}
                  </p>
                  <Button className="mt-5 bg-orange hover:bg-orange/90 text-white">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* Alternating list (image/text, then text/image) */}
      <section className="py-16 marble-pattern">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading blogs...</p>
            </div>
          ) : others.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">{filtered.length === 0 ? "No results found." : "No more blogs available."}</p>
            </div>
          ) : (
            <div className="space-y-14">
              {others.map((post, idx) => {
                const rightImage = idx % 2 === 1; // odd index -> image on right
                return (
                  <div
                    key={post.id}
                    ref={(el) => { rowRefs.current[post.id] = el; }}
                    data-id={post.id}
                    className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ease-out ${
                      visibleIds[post.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    {/* Image */}
                    <div className={`${rightImage ? "md:order-2" : "md:order-1"}`}>
                      {post.image && (
                        <Link href={`/blog/${post.slug || post.id}`}>
                          <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer">
                            <img
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://10.165.67.219"}${post.image.url}`}
                              alt={post.title}
                              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </Link>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`${rightImage ? "md:order-1" : "md:order-2"}`}>
                      <div className="text-sm text-muted-foreground mb-3 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" /> Admin
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {post.meta_description}
                      </p>
                      <Link href={`/blog/${post.slug || post.id}`}>
                        <Button variant="ghost" className="text-orange hover:text-orange hover:bg-orange/10">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 with-marble-overlay">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tile trends, tips, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
            />
            <Button className="bg-orange hover:bg-orange/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}