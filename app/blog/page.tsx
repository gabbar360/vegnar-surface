"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await api.getBlogs();
        setBlogPosts(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cream to-marble">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
              Our Blogs
            </h1>
          </div>
        </div>
      </section>



      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading blogs...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No blogs available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    {post.image && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.image.url}`}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}

                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Admin
                      </span>
                    </div>
                    <CardTitle className="text-xl text-charcoal line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {post.meta_description && post.meta_description.split(' ').length > 5 
                        ? (
                          <>
                            {post.meta_description.split(' ').slice(0, 5).join(' ')}
                            <Link href={`/blog/${post.slug || post.id}`}>
                              <button className="text-orange-500 hover:underline ml-1">Read More...</button>
                            </Link>
                          </>
                        ) 
                        : post.meta_description}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        5 min read
                      </span>
                      <Link href={`/blog/${post.slug || post.id}`}>
                        <Button
                          variant="ghost"
                          className="text-orange hover:text-orange hover:bg-orange/10"
                          onClick={() => console.log('Blog post:', post)}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tile trends, tips, and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
            />
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}