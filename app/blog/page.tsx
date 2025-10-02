"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";
import { getImageUrl } from "@/lib/imageHelper";
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

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Design Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Latest trends, installation guides, and expert tips for tiles & surfaces
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Featured Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getImageUrl(post.image?.url || '/assets/tiles-bg.jpg')}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Admin
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-charcoal transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        {post.meta_description}
                      </p>
                      
                      {/* Read More */}
                      <div className="flex items-center text-charcoal font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}