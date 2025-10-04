"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
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

export default function BlogDetailClient({ slug }: { slug: string }) {
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
        const [blogData, allBlogsData] = await Promise.all([
          api.getBlogBySlug(slug),
          api.getBlogs(),
        ]);
        setBlog(blogData);
        setAllBlogs(allBlogsData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  // Reading progress + subtle parallax
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
      }
      if (heroImgRef.current) {
        const y = window.scrollY;
        heroImgRef.current.style.transform = `translateY(${Math.min(
          40,
          y * 0.15
        )}px) scale(1.02)`;
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
      {/* <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-orange-600 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div> */}

      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImgRef}
            src={getImageUrl(blog.image?.url || "/assets/tiles-bg.jpg")}
            alt={blog.title}
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-30">
          <Link href="/blog">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </div>
          </Link>
        </div>

        {/* Content Card */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
          <div className="w-full max-w-5xl mx-auto">
            <div className="bg-white/45 backdrop-blur-md rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl w-full max-w-4xl mx-auto border border-white/30">
              {/* Category */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full uppercase tracking-wide">
                  Outdoor Tiles
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
                {blog.title}
              </h1>

              {/* Author & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Author: Vegnar Surfaces
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      • Reading time: 4 min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {copyDone ? "Copied!" : "Share"}
            </button>
          </div>

          {/* Content */}
          <article
            ref={articleRef}
            className="blog-content prose prose-lg prose-gray max-w-none"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(
                  blog.content?.[0]?.children?.[0]?.text || ""
                ),
              }}
            />
          </article>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-charcoal hover:bg-charcoal-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getImageUrl(
                          post.image?.url || "/assets/tiles-bg.jpg"
                        )}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2 mt-2">
                        {post.meta_description}
                      </p>
                    </div>
                  </article>
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
