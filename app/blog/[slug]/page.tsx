import { Metadata } from "next";
import { api } from "@/lib/api";
import { getImageUrl } from "@/lib/imageHelper";
import BlogDetailClient from "./BlogDetailClient";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blog = await api.getBlogBySlug(slug);

    if (!blog) {
      return {
        title: "Blog Not Found | Vegnar Surfaces",
        description: "The requested blog post could not be found.",
      };
    }

    const seoResponse = await fetch(`http://cms.vegnarsurfaces.com/wp-json/custom/v1/seo/${blog.id}`);
    const seoData = seoResponse.ok ? await seoResponse.json() : null;

    return {
      title: seoData?.seo_title || blog.meta_title || blog.title,
      description: seoData?.seo_description || blog.meta_description,
      keywords: seoData?.seo_keywords,
      openGraph: {
        title: seoData?.seo_title || blog.title,
        description: seoData?.seo_description || blog.meta_description,
        images: blog.image ? [getImageUrl(blog.image.url)] : [],
        type: "article",
        publishedTime: blog.publishedAt,
      },
      twitter: {
        card: "summary_large_image",
        title: seoData?.seo_title || blog.title,
        description: seoData?.seo_description || blog.meta_description,
        images: blog.image ? [getImageUrl(blog.image.url)] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog | Vegnar Surfaces",
      description: "Read our latest blog posts about tiles and surfaces.",
    };
  }
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
