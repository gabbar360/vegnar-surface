import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Shape returned to the client
interface SearchResultItem {
  id: string;
  name: string;
  category: string; // Product | Blog | Catalog
  href: string;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const qRaw = searchParams.get('q') || '';
  const q = qRaw.trim();

  if (!q) return NextResponse.json([]);

  try {
    // Fetch products and blogs from Strapi with case-insensitive contains filter
    const [productsRes, blogsRes] = await Promise.all([
      fetch(
        `${API_URL}/api/products?filters[$or][0][product_name][$containsi]=${encodeURIComponent(
          q
        )}&filters[$or][1][description][$containsi]=${encodeURIComponent(
          q
        )}&populate=product_category&pagination[limit]=5`,
        { headers: { 'Content-Type': 'application/json' }, cache: 'no-store' }
      ),
      fetch(
        `${API_URL}/api/blogs?filters[$or][0][title][$containsi]=${encodeURIComponent(
          q
        )}&filters[$or][1][meta_description][$containsi]=${encodeURIComponent(
          q
        )}&pagination[limit]=5`,
        { headers: { 'Content-Type': 'application/json' }, cache: 'no-store' }
      ),
    ]);

    const [productsJson, blogsJson] = await Promise.all([
      productsRes.ok ? productsRes.json() : Promise.resolve({ data: [] }),
      blogsRes.ok ? blogsRes.json() : Promise.resolve({ data: [] }),
    ]);

    const productItems: SearchResultItem[] = (productsJson.data || []).map((p: any) => ({
      id: String(p.id),
      name: p.product_name || p.name || 'Product',
      category: 'Product',
      href: `/product/${p.name || p.slug || p.id}`,
    }));

    const blogItems: SearchResultItem[] = (blogsJson.data || []).map((b: any) => ({
      id: String(b.id),
      name: b.title || 'Blog',
      category: 'Blog',
      href: `/blog/${b.slug || b.id}`,
    }));

    // Catalogs: scan public/catalogs PDFs and match filename/title
    const catalogsDir = path.join(process.cwd(), 'public', 'catalogs');
    let catalogItems: SearchResultItem[] = [];
    try {
      // Recursively walk two levels to find PDFs
      const entriesLvl1 = fs.existsSync(catalogsDir) ? fs.readdirSync(catalogsDir) : [];
      for (const entry of entriesLvl1) {
        const p1 = path.join(catalogsDir, entry);
        const stat = fs.statSync(p1);
        if (stat.isFile() && entry.toLowerCase().endsWith('.pdf')) {
          if (entry.toLowerCase().includes(q.toLowerCase())) {
            catalogItems.push({
              id: `cat-${entry}`,
              name: entry.replace(/\.pdf$/i, ''),
              category: 'Catalog',
              href: `/catalogs/${encodeURIComponent(entry)}`,
            });
          }
        } else if (stat.isDirectory()) {
          const entriesLvl2 = fs.readdirSync(p1);
          for (const e2 of entriesLvl2) {
            const p2 = path.join(p1, e2);
            if (fs.statSync(p2).isFile() && e2.toLowerCase().endsWith('.pdf')) {
              if (e2.toLowerCase().includes(q.toLowerCase()) || entry.toLowerCase().includes(q.toLowerCase())) {
                catalogItems.push({
                  id: `cat-${entry}-${e2}`,
                  name: e2.replace(/\.pdf$/i, ''),
                  category: 'Catalog',
                  href: `/catalogs/${encodeURIComponent(entry)}/${encodeURIComponent(e2)}`,
                });
              }
            }
            if (catalogItems.length >= 5) break;
          }
        }
        if (catalogItems.length >= 5) break;
      }
    } catch (e) {
      // ignore fs errors; just skip catalogs
    }

    const results: SearchResultItem[] = [
      ...productItems.slice(0, 5),
      ...blogItems.slice(0, 5),
      ...catalogItems.slice(0, 5),
    ].slice(0, 10);

    return NextResponse.json(results);
  } catch (err) {
    console.error('Search route error:', err);
    return NextResponse.json([], { status: 200 });
  }
}