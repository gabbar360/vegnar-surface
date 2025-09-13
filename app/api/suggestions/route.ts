import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function GET() {
  try {
    // Fetch products and blogs from Strapi
    const [productsRes, blogsRes] = await Promise.all([
      fetch(`${API_URL}/api/products?pagination[limit]=10&sort=createdAt:desc`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
      }),
      fetch(`${API_URL}/api/blogs?pagination[limit]=10&sort=createdAt:desc`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store'
      })
    ]);

    const [productsJson, blogsJson] = await Promise.all([
      productsRes.ok ? productsRes.json() : Promise.resolve({ data: [] }),
      blogsRes.ok ? blogsRes.json() : Promise.resolve({ data: [] })
    ]);

    // Extract product names
    const products = (productsJson.data || [])
      .map((p: any) => p.product_name || p.name)
      .filter(Boolean)
      .slice(0, 6);

    // Extract blog titles
    const blogs = (blogsJson.data || [])
      .map((b: any) => b.title)
      .filter(Boolean)
      .slice(0, 6);

    // Get catalog names from filesystem
    const catalogsDir = path.join(process.cwd(), 'public', 'catalogs');
    let catalogs: string[] = [];
    
    try {
      const entries = fs.existsSync(catalogsDir) ? fs.readdirSync(catalogsDir) : [];
      for (const entry of entries) {
        const entryPath = path.join(catalogsDir, entry);
        const stat = fs.statSync(entryPath);
        
        if (stat.isDirectory()) {
          // Use folder name as catalog category
          catalogs.push(entry.replace(' Collection', ''));
        } else if (entry.toLowerCase().endsWith('.pdf')) {
          // Use PDF name
          catalogs.push(entry.replace(/\.pdf$/i, '').replace('Vegnar Surfaces - ', ''));
        }
      }
    } catch (e) {
      // Fallback catalog names
      catalogs = ['Premium Collection', 'Luxury Series', 'Designer Range'];
    }

    return NextResponse.json({
      products: products.length > 0 ? products : ['Marble Tiles', 'Ceramic Collection', 'Granite Flooring', 'Porcelain Tiles', 'Mosaic Patterns', 'Stone Veneer'],
      blogs: blogs.length > 0 ? blogs : ['Design Trends', 'Installation Tips', 'Maintenance Guide', 'Color Ideas', 'Room Inspiration', 'Style Guide'],
      catalogs: catalogs.length > 0 ? catalogs.slice(0, 6) : ['Premium Catalog', 'New Arrivals', 'Best Sellers', 'Luxury Collection', 'Budget Options', 'Outdoor Series']
    });
  } catch (error) {
    console.error('Suggestions API error:', error);
    
    // Return fallback data
    return NextResponse.json({
      products: ['Marble Tiles', 'Ceramic Collection', 'Granite Flooring', 'Porcelain Tiles', 'Mosaic Patterns', 'Stone Veneer'],
      blogs: ['Design Trends', 'Installation Tips', 'Maintenance Guide', 'Color Ideas', 'Room Inspiration', 'Style Guide'],
      catalogs: ['Premium Catalog', 'New Arrivals', 'Best Sellers', 'Luxury Collection', 'Budget Options', 'Outdoor Series']
    });
  }
}