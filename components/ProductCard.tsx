import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductInquiry from "./ProductInquiry";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  sizes?: any[];
  image: string;
  href: string;
  colors?: any[];
  surfaceTypes?: any[];
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({
  id,
  name,
  category,
  sizes = [],
  image,
  href,
  colors = [],
  surfaceTypes = [],
  className,
  style,
}: ProductCardProps) => {
  return (
    <div
      className={cn("group relative card-product overflow-hidden", className)}
      style={style}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-marble">
        <img
          src={image}
          alt={`${name} - ${sizes.map(s => s.size_name).join(', ')}`}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-orange transition-colors duration-200">
            {name}
          </h3>
          {sizes && sizes.length > 0 && (
            <p className="text-muted-foreground font-medium mb-2">
              {sizes.map(s => s.size_name).join(', ')}
            </p>
          )}
          {surfaceTypes && surfaceTypes.length > 0 && (
            <p className="text-muted-foreground text-sm mb-4">
              Surface: {surfaceTypes.map(s => s.surface_name).join(', ')}
            </p>
          )}
        </div>

        {/* Colors */}
        {colors && colors.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">
              Available Colors:
            </p>
            <div className="flex items-center space-x-2">
              {colors.slice(0, 4).map((color) => (
                <div
                  key={color.id}
                  className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                  style={{ backgroundColor: color.color_code || "#ccc" }}
                  title={color.color_name}
                ></div>
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{colors.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              {colors && colors.length > 0
                ? `${colors.length} Colors Available`
                : "Available in Multiple Finishes"}
            </span>
          </div>

          <Link
            href={href}
            className="text-charcoal hover:text-orange transition-colors duration-200 group/link"
          >
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
