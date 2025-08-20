"use client";

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

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Tile Pattern Trends for 2025",
      excerpt:
        "Discover the latest tile pattern trends for 2025 including herringbone, chevron, basketweave, and more. Get stylish, durable design ideas for walls, floors, and backsplashes from Sunwin Ceramica.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      author: "Design Team",
      date: "April 22, 2025",
      category: "Design Trends",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Types of Wash Basins with Ideal Application Areas",
      excerpt:
        "Discover the best wash basin types for your home, hotel, or commercial space. Explore expert tips on materials, installation, and maintenance with Sunwin Ceramica.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
      author: "Product Team",
      date: "April 22, 2025",
      category: "Sanitaryware",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Porcelain Tiles in India: Quality, Trends and Innovation",
      excerpt:
        "Explore quality, trends, and innovation in porcelain tiles. Find stylish, durable solutions from porcelain tiles manufacturer in India - Sunwin Ceramica.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      author: "Industry Expert",
      date: "April 14, 2025",
      category: "Industry Insights",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Complete Guide to Large Format Porcelain Tiles",
      excerpt:
        "Everything you need to know about large format porcelain tiles - benefits, installation tips, and design ideas for modern spaces.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      author: "Technical Team",
      date: "April 10, 2025",
      category: "Installation",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Outdoor Porcelain Tiles: Weather Resistance & Durability",
      excerpt:
        "Learn about 20mm outdoor porcelain tiles and their superior weather resistance, making them perfect for terraces, patios, and commercial outdoor spaces.",
      image:
        "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400",
      author: "Technical Team",
      date: "April 8, 2025",
      category: "Outdoor Solutions",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Subway Tiles: Timeless Design for Modern Homes",
      excerpt:
        "Explore the versatility of subway tiles in contemporary design. From classic white to bold colors, discover endless possibilities.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      author: "Design Team",
      date: "April 5, 2025",
      category: "Design Ideas",
      readTime: "4 min read",
    },
  ];

  const categories = [
    "All",
    "Design Trends",
    "Installation",
    "Industry Insights",
    "Sanitaryware",
    "Outdoor Solutions",
    "Design Ideas",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cream to-marble">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive into the Latest on Our Blog - Expert insights, trends, and
              tips for your tile projects
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-orange text-orange hover:bg-orange hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-orange text-white px-3 py-1 rounded-full text-xs">
                      Featured
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="bg-orange hover:bg-orange/90 text-white">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange text-white px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-charcoal line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      className="text-orange hover:text-orange hover:bg-orange/10"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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