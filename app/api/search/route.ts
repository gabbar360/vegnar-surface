import { NextRequest, NextResponse } from 'next/server';

const tiles = [
  { id: "1", name: "Subway Tiles 100x200mm", category: "Subway Tiles", href: "/product/subway-tile-100x200mm" },
  { id: "2", name: "Subway Tiles 75x150mm", category: "Subway Tiles", href: "/product/subway-tile-75x150mm" },
  { id: "3", name: "Beveled Subway 100x300mm", category: "Subway Tiles", href: "/product/beveled-subway-100x300mm" },
  { id: "11", name: "Outdoor Porcelain 600x600mm", category: "Outdoor Tiles", href: "/product/outdoor-porcelain-tiles-600x600" },
  { id: "12", name: "Outdoor Porcelain 600x900mm", category: "Outdoor Tiles", href: "/product/outdoor-porcelain-tiles-600x900" },
  { id: "21", name: "Porcelain Floor 800x800mm", category: "Porcelain Floor", href: "/product/porcelain-tiles-800x800mm" },
  { id: "31", name: "Large Format Slab 1200x2400mm", category: "Slab Tiles", href: "/product/large-format-slab-1200x2400mm" },
  { id: "41", name: "Fullbody Porcelain 600x600mm", category: "Fullbody Tiles", href: "/product/fullbody-porcelain-600x600mm" },
  { id: "51", name: "Table Top Basin", category: "Sanitaryware", href: "/product/table-top-basin" },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  
  if (!query) {
    return NextResponse.json([]);
  }

  const results = tiles.filter(tile =>
    tile.name.toLowerCase().includes(query) ||
    tile.category.toLowerCase().includes(query)
  ).slice(0, 10);

  return NextResponse.json(results);
}