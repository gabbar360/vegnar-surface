"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";

interface ContentChild {
  text: string;
}

interface ContentBlock {
  type: string;
  children?: ContentChild[];
}

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  content: ContentBlock[];
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await api.getBlogs();
        console.log('All blogs:', blogs);
        console.log('Looking for slug:', params.slug);
        const foundBlog = blogs.find((b: BlogPost) => b.slug === params.slug || b.id.toString() === params.slug);
        console.log('Found blog:', foundBlog);
        setBlog(foundBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Blog Not Found</h1>
          <Link href="/blog">
            <Button className="bg-orange hover:bg-orange/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {blog.image && (
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.image.url}`}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="mb-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blog.publishedAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Admin
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {blog.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {blog.meta_description}
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          {blog.content?.map((block, index) => (
            <div key={index}>
              {block.type === 'paragraph' && (
                <p className="mb-4 text-gray-700 leading-relaxed">
                  {block.children?.map((child: ContentChild, childIndex: number) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Blog Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Meta Title:</strong> {blog.meta_title}</div>
            <div><strong>Created:</strong> {new Date(blog.createdAt).toLocaleDateString()}</div>
            <div><strong>Updated:</strong> {new Date(blog.updatedAt).toLocaleDateString()}</div>
            <div><strong>Published:</strong> {new Date(blog.publishedAt).toLocaleDateString()}</div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}