"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
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

export default function BlogDetail() {
  const params = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copyDone, setCopyDone] = useState(false);
  const [progress, setProgress] = useState(0);

  const articleRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await api.getBlogs();
        setAllBlogs(blogs);
        const found = blogs.find(
          (b: BlogPost) => b.slug === (params as any).slug || b.id.toString() === (params as any).slug
        );
        setBlog(found || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if ((params as any).slug) fetchBlog();
  }, [params]);

  // Reading progress + subtle parallax
  useEffect(() => {
    const onScroll = () => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect();
        const total = Math.max(1, rect.height - window.innerHeight);
        const seen = Math.min(total, Math.max(0, window.innerHeight - rect.top));
        setProgress(Math.round((seen / total) * 100));
      }
      if (heroImgRef.current) {
        const y = window.scrollY;
        heroImgRef.current.style.transform = `translateY(${Math.min(40, y * 0.15)}px) scale(1.02)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const related = useMemo(() => {
    if (!blog) return [] as BlogPost[];
    return allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);
  }, [allBlogs, blog]);

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
          <h1 className="text-4xl font-bold text-charcoal mb-4">Blog Not Found</h1>
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

  const shareLink = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="min-h-screen marble-pattern">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-[60]">
        <div
          className="h-full bg-orange transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Header />

      {/* Hero with parallax and overlay */}
      <section className="relative h-[50vh] min-h-[320px] with-marble-overlay overflow-hidden">
        {blog.image && (
          <img
            ref={heroImgRef}
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://10.165.67.219"}${blog.image.url}`}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-contain bg-black/50 will-change-transform"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 h-full container mx-auto px-4 flex items-end pb-10">
          <div className="text-white max-w-4xl">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/90 mb-3">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {new Date(blog.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> Admin
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
              {blog.title}
            </h1>
            {blog.meta_description && (
              <p className="mt-3 text-white/90 line-clamp-2 md:line-clamp-3">
                {blog.meta_description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Article card */}
      <section className="relative -mt-10">
        <div className="container mx-auto px-4">
          <div
            ref={articleRef}
            className="relative z-[1] bg-white/95 backdrop-blur rounded-2xl shadow-elegant border border-border/20 max-w-4xl mx-auto p-6 md:p-10"
          >
            {/* Back + Share */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/blog">
                <Button variant="ghost" className="text-charcoal hover:bg-orange/10 hover:text-orange">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={handleCopy} className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> {copyDone ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </div>

            {/* Content blocks */}
            <article className="prose prose-lg max-w-none text-gray-800">
              {blog.content?.map((block: any, index: number) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 60}ms` }}>
                  {block.type === "paragraph" && (
                    <p className="mb-6 leading-relaxed">
                      {block.children?.map((child: any, childIndex: number) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </article>

            {/* Meta info card */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-charcoal/5 rounded-xl p-4">
              <div>
                <strong>Meta Title:</strong> {blog.meta_title}
              </div>
              <div>
                <strong>Created:</strong> {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div>
                <strong>Updated:</strong> {new Date(blog.updatedAt).toLocaleDateString()}
              </div>
              <div>
                <strong>Published:</strong> {new Date(blog.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 marble-pattern">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">You may also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug || p.id}`}>
                  <div className="group cursor-pointer bg-white/90 backdrop-blur rounded-xl overflow-hidden border border-border/20 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
                    {p.image && (
                      <div className="relative overflow-hidden">
                        <img
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://10.165.67.219"}${p.image.url}`}
                          alt={p.title}
                          className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                      </div>
                    )}
                    <div className="p-5">
                      <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {new Date(p.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="text-charcoal font-semibold line-clamp-2 group-hover:text-orange transition-colors">
                        {p.title}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {p.meta_description}
                      </div>
                      <div className="mt-4 inline-flex items-center text-orange text-sm">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}