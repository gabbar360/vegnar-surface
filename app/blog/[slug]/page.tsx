"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { api } from "@/lib/api";
import Link from "next/link";
import { getImageUrl } from "@/lib/imageHelper";

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

      {/* Hero redesigned */}
      <section className="relative h-[65vh] min-h-[380px] overflow-hidden">
        {blog.image && (
          <img
            ref={heroImgRef}
            src={getImageUrl(blog.image.url)}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="relative z-10 h-full container mx-auto px-4 flex items-end pb-10">
          <div className="max-w-5xl text-white">
            <div className="mb-3 inline-flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/80">
              <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur">Blog</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {new Date(blog.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> Admin
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
              {blog.title}
            </h1>
            {blog.meta_description && (
              <p className="mt-4 text-white/90 max-w-3xl text-base md:text-lg">
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
                          src={getImageUrl(p.image.url)}
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

// // "use client";
// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Calendar, User, ArrowLeft, ArrowRight, Share2, Copy, Sun, Moon } from "lucide-react";
// import { api } from "@/lib/api";
// import { getImageUrl } from "@/lib/imageHelper";

// /**
//  * Pro-level Blog Detail (full redesign)
//  *
//  * - Keep `api.getBlogs()` / `getImageUrl()` dynamic (no static mock data)
//  * - Immersive split hero, glass article card, sticky action bar, TOC, related posts
//  * - Dark-mode ready, Tailwind + prose recommended
//  *
//  * Integration hints:
//  * - Requires Tailwind + @tailwindcss/typography for .prose.
//  * - Optional: framer-motion for advanced motion (not required).
//  * - If '@/lib/*' doesn't resolve in your environment, attach runtime overrides:
//  *   window.__VEGNAR_API__ = { getBlogs: async () => [...] }
//  *   window.__GET_IMAGE_URL__ = (p) => p
//  */

// /* ---------------- Types ---------------- */
// interface BlogPost {
//   id: number;
//   documentId?: string;
//   title: string;
//   content: any[]; // blocks array
//   slug: string;
//   meta_title?: string;
//   meta_description?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   publishedAt?: string;
//   image?: { id: number; name?: string; url: string };
//   author?: { name?: string; avatarUrl?: string; role?: string };
// }

// /* ---------------- Component ---------------- */
// export default function BlogDetail() {
//   const params = useParams();
//   const slugParam = (params as any)?.slug ?? null;

//   const [blog, setBlog] = useState<BlogPost | null>(null);
//   const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [dark, setDark] = useState(false);

//   const articleRef = useRef<HTMLDivElement | null>(null);
//   const heroRef = useRef<HTMLDivElement | null>(null);

//   /* Fetch blogs dynamically (keeps your original api.getBlogs usage) */
//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         // prefer api from import; if project uses runtime override, set on window before mount
//         const blogs = (await api.getBlogs()) || [];
//         if (!mounted) return;
//         setAllBlogs(blogs);
//         const found = blogs.find((b: BlogPost) => b && (b.slug === slugParam || String(b.id) === slugParam));
//         // friendly fallback: first article if not found (change to 404 if preferred)
//         setBlog(found || (blogs && blogs.length ? blogs[0] : null));
//       } catch (err) {
//         console.error("Error fetching blog data:", err);
//         setBlog(null);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [slugParam]);

//   /* Reading progress + subtle hero parallax */
//   useEffect(() => {
//     const onScroll = () => {
//       try {
//         if (articleRef.current) {
//           const rect = articleRef.current.getBoundingClientRect();
//           const total = Math.max(1, rect.height - window.innerHeight);
//           const seen = Math.min(total, Math.max(0, window.innerHeight - rect.top));
//           setProgress(Math.round((seen / total) * 100));
//         } else {
//           setProgress(0);
//         }

//         if (heroRef.current) {
//           const y = window.scrollY || 0;
//           heroRef.current.style.transform = `translateY(${Math.min(40, y * 0.12)}px) scale(1.02)`;
//         }
//       } catch {
//         // ignore DOM read errors in constrained environments
//       }
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const related = useMemo(() => {
//     if (!blog) return [] as BlogPost[];
//     return allBlogs.filter((b) => b && b.id !== blog.id).slice(0, 4);
//   }, [allBlogs, blog]);

//   // Table of contents (headings)
//   const toc = useMemo(() => {
//     if (!blog || !Array.isArray(blog.content)) return [];
//     const items: { id: string; text: string; level: number }[] = [];
//     blog.content.forEach((block: any) => {
//       if (block?.type === "heading") {
//         const text = (block.children || []).map((c: any) => c.text || "").join("");
//         const id = text
//           .toLowerCase()
//           .replace(/[^a-z0-9\s-]/g, "")
//           .trim()
//           .replace(/\s+/g, "-");
//         items.push({ id, text, level: block.level || 2 });
//       }
//     });
//     return items;
//   }, [blog]);

//   const shareUrl = typeof window !== "undefined" ? window.location.href : "";

//   const copyLink = async () => {
//     try {
//       if (navigator?.clipboard?.writeText) {
//         await navigator.clipboard.writeText(shareUrl);
//       } else {
//         const ta = document.createElement("textarea");
//         ta.value = shareUrl;
//         ta.setAttribute("readonly", "");
//         ta.style.position = "absolute";
//         ta.style.left = "-9999px";
//         document.body.appendChild(ta);
//         ta.select();
//         document.execCommand("copy");
//         document.body.removeChild(ta);
//       }
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1400);
//     } catch (e) {
//       console.error("Copy failed", e);
//     }
//   };

//   const nativeShare = async () => {
//     try {
//       if ((navigator as any)?.share) await (navigator as any).share({ title: blog?.title || "", url: shareUrl });
//       else await copyLink();
//     } catch {
//       // ignore user cancel or errors
//     }
//   };

//   // Render content blocks (pro styles)
//   const renderBlock = (block: any, idx: number) => {
//     if (!block) return null;
//     switch (block.type) {
//       case "heading": {
//         const text = (block.children || []).map((c: any) => c.text || "").join("");
//         const id = text
//           .toLowerCase()
//           .replace(/[^a-z0-9\s-]/g, "")
//           .trim()
//           .replace(/\s+/g, "-");
//         return (
//           <h2 id={id} key={idx} className="mt-12 mb-4 text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 scroll-mt-24">
//             {text}
//           </h2>
//         );
//       }

//       case "paragraph":
//         return (
//           <p key={idx} className="mb-6 leading-relaxed text-lg text-neutral-700 dark:text-neutral-300">
//             {(block.children || []).map((c: any, i: number) => <span key={i}>{c.text}</span>)}
//           </p>
//         );

//       case "image":
//         return (
//           <figure key={idx} className="my-8 rounded-lg overflow-hidden shadow-lg">
//             <img src={getImageUrl(block.url)} alt={block.alt || blog?.title || ""} className="w-full object-cover" />
//             {block.caption && <figcaption className="mt-2 text-sm text-muted-foreground">{block.caption}</figcaption>}
//           </figure>
//         );

//       case "blockquote":
//         return (
//           <blockquote key={idx} className="my-8 border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 p-4 italic rounded">
//             {(block.children || []).map((c: any, i: number) => <div key={i}>{c.text}</div>)}
//           </blockquote>
//         );

//       case "code":
//         return (
//           <pre key={idx} className="my-6 rounded-lg overflow-auto p-4 bg-gray-900 text-white text-sm">
//             <code>{block.code}</code>
//           </pre>
//         );

//       default:
//         return (
//           <div key={idx} className="mb-4">
//             {(block.children || []).map((c: any, i: number) => <p key={i}>{c.text}</p>)}
//           </div>
//         );
//     }
//   };

//   // Circular progress for floating action
//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   /* ---------- Render states ---------- */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white dark:bg-gray-900">
//         <Header />
//         <main className="container mx-auto px-6 py-32 text-center">
//           <div className="inline-block w-12 h-12 rounded-full border-4 border-orange-400 animate-spin" />
//           <p className="mt-4 text-neutral-600 dark:text-neutral-300">Loading article...</p>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-white dark:bg-gray-900">
//         <Header />
//         <main className="container mx-auto px-6 py-32 text-center">
//           <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">Article not found</h1>
//           <p className="mt-4 text-neutral-600 dark:text-neutral-300">We couldn't find that article.</p>
//           <div className="mt-6">
//             <Link href="/blog">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white">Back to blog</Button>
//             </Link>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   /* ---------- Main page ---------- */
//   return (
//     <div className={dark ? "dark" : ""}>
//       <div className="min-h-screen bg-white dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
//         {/* Progress thin bar (subtle) */}
//         <div className="fixed left-0 right-0 top-0 h-1 z-50 bg-black/5">
//           <div style={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all" />
//         </div>

//         <Header />

//         {/* HERO */}
//         <header className="relative overflow-hidden">
//           <div className="container mx-auto px-6 py-12 lg:py-20">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//               {/* Left content */}
//               <div className="lg:col-span-7">
//                 <div className="max-w-3xl">
//                   <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
//                     <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded font-semibold">Featured</span>
//                     <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ""}</span>
//                     <span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> {blog.author?.name || "Admin"}</span>
//                   </div>

//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">{blog.title}</h1>

//                   {blog.meta_description && (
//                     <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300">{blog.meta_description}</p>
//                   )}

//                   <div className="mt-8 flex items-center gap-4">
//                     <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
//                       {blog.author?.avatarUrl ? (
//                         <img src={getImageUrl(blog.author.avatarUrl)} alt={blog.author.name} className="w-full h-full object-cover" />
//                       ) : (
//                         <User className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
//                       )}
//                     </div>
//                     <div>
//                       <div className="text-sm font-medium">{blog.author?.name || "Admin"}</div>
//                       <div className="text-xs text-neutral-600 dark:text-neutral-300">{blog.author?.role || "Content Team"}</div>
//                     </div>
//                   </div>

//                   <div className="mt-8 flex gap-3 items-center">
//                     <Link href="/blog">
//                       <Button variant={"ghost" as any} className="border border-neutral-200">Back to posts</Button>
//                     </Link>
//                     <button onClick={nativeShare} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white">
//                       <Share2 className="w-4 h-4" /> Share
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right image */}
//               <div className="lg:col-span-5">
//                 <div
//                   ref={heroRef}
//                   className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-2xl bg-center bg-cover transition-transform duration-700"
//                   style={{ backgroundImage: blog.image ? `url(${getImageUrl(blog.image.url)})` : undefined }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* subtle overlay bottom */}
//           <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-white/80 dark:from-gray-900/80 pointer-events-none" />
//         </header>

//         {/* Floating quick actions (right) */}
//         <div className="fixed right-6 bottom-12 z-50 hidden md:flex items-center gap-4">
//           <div className="relative">
//             <svg width="52" height="52" viewBox="0 0 52 52" className="transform -rotate-90">
//               <circle cx="26" cy="26" r={radius} stroke="rgba(0,0,0,0.06)" strokeWidth="3" fill="none" />
//               <circle
//                 cx="26"
//                 cy="26"
//                 r={radius}
//                 stroke="#fb923c"
//                 strokeWidth="3"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={offset}
//                 strokeLinecap="round"
//                 fill="none"
//               />
//             </svg>
//             <button
//               onClick={nativeShare}
//               title="Share"
//               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
//             >
//               <Share2 className="w-4 h-4" />
//             </button>
//           </div>

//           <button
//             onClick={copyLink}
//             title={copied ? "Copied" : "Copy link"}
//             className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:scale-105 transform transition"
//           >
//             <Copy className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
//           </button>

//           <Link href="/blog">
//             <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:scale-105 transform transition">
//               <ArrowLeft className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
//             </div>
//           </Link>
//         </div>

//         {/* Article + sidebar */}
//         <main className="container mx-auto px-6 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Article column */}
//             <div className="lg:col-span-8">
//               <article ref={articleRef} className="prose prose-lg max-w-none dark:prose-invert">
//                 {/* render content blocks with pro spacing and styles */}
//                 {blog.content?.map((block, i) => (
//                   <div key={i}>
//                     {renderBlock(block, i)}
//                   </div>
//                 ))}
//               </article>

//               <div className="mt-12 p-6 rounded-xl bg-neutral-50 dark:bg-gray-800 border border-neutral-100 dark:border-gray-700">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                   <div><strong>Meta title:</strong> {blog.meta_title}</div>
//                   <div><strong>Published:</strong> {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ""}</div>
//                   <div><strong>Created:</strong> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}</div>
//                   <div><strong>Updated:</strong> {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : ""}</div>
//                 </div>
//               </div>

//               {/* Related posts (grid) */}
//               {related.length > 0 && (
//                 <section className="mt-12">
//                   <h3 className="text-2xl font-semibold mb-6">More stories</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {related.map((r) => (
//                       <Link key={r.id} href={`/blog/${r.slug || r.id}`} className="group block rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow hover:shadow-lg transform hover:-translate-y-1 transition">
//                         {r.image && <img src={getImageUrl(r.image.url)} alt={r.title} className="w-full h-44 object-cover" />}
//                         <div className="p-4">
//                           <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> {r.publishedAt ? new Date(r.publishedAt).toLocaleDateString() : ""}</div>
//                           <div className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{r.title}</div>
//                           <div className="text-sm text-neutral-600 dark:text-neutral-300">{r.meta_description}</div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </section>
//               )}
//             </div>

//             {/* Sidebar */}
//             <aside className="lg:col-span-4 hidden lg:block">
//               <div className="sticky top-28 space-y-6">
//                 <div className="p-4 rounded-xl bg-neutral-50 dark:bg-gray-800 border border-neutral-100 dark:border-gray-700">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="text-sm font-semibold">On this page</div>
//                     <button className="text-xs text-muted-foreground">Toggle</button>
//                   </div>
//                   <nav className="text-sm">
//                     {toc.length === 0 ? <div className="text-neutral-600 dark:text-neutral-300">No headings</div> : toc.map((t) => (
//                       <a key={t.id} href={`#${t.id}`} className={`block py-1 ${t.level > 2 ? "pl-4" : ""} hover:text-orange-500`}>{t.text}</a>
//                     ))}
//                   </nav>
//                 </div>

//                 <div className="p-4 rounded-xl bg-neutral-50 dark:bg-gray-800 border border-neutral-100 dark:border-gray-700">
//                   <div className="flex items-center gap-2 mb-3">
//                     <Share2 className="w-4 h-4" /> <div className="font-semibold">Share</div>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <button onClick={nativeShare} className="px-3 py-2 rounded-md border">Share…</button>
//                     <button onClick={copyLink} className="px-3 py-2 rounded-md border">Copy link</button>
//                   </div>
//                 </div>

//                 {related.length > 0 && (
//                   <div className="p-4 rounded-xl bg-neutral-50 dark:bg-gray-800 border border-neutral-100 dark:border-gray-700">
//                     <div className="text-sm font-semibold mb-2">Related</div>
//                     <div className="space-y-2">
//                       {related.map((r) => <Link key={r.id} href={`/blog/${r.slug || r.id}`} className="block text-sm text-neutral-600 dark:text-neutral-300">{r.title}</Link>)}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// }

