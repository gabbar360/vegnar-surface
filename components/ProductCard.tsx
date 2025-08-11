import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductInquiry from "./ProductInquiry";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  size: string;
  image: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard = ({ id, name, category, size, image, href, className, style }: ProductCardProps) => {
  return (
    <div className={cn("group relative card-product overflow-hidden", className)} style={style}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-marble">
        <img
          src={image}
          alt={`${name} - ${size}`}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        
        {/* Overlay on Hover - Enhanced animation */}
        <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center backdrop-blur-sm">
          <div className="flex space-x-4">
            <Button size="sm" variant="luxury" asChild>
              <Link href={href}>
                <Eye className="w-4 h-4" />
                View Details
              </Link>
            </Button>
            <Button size="sm" variant="outline-orange">
              Quick Quote
            </Button>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-orange transition-colors duration-200">
            {name}
          </h3>
          <p className="text-muted-foreground font-medium mb-4">
            {size}
          </p>
          
          <ProductInquiry productName={name} productCategory={category} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <span className="text-sm text-muted-foreground">
              Available in Multiple Finishes
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

      {/* Quick Info on Hover */}
      <div className="absolute -bottom-2 left-4 right-4 bg-background border border-border/20 rounded-lg p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-elegant">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <span>Available Now</span>
          </div>
          <Button size="sm" variant="outline" className="text-xs h-6 px-2">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;