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
  viewMode?: "grid" | "list";
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
  viewMode = "grid",
}: ProductCardProps) => {
  if (viewMode === "list") {
    return (
      <Link href={href} className="block">
        <div
          className={cn(
            "group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer overflow-hidden",
            className
          )}
          style={style}
        >
          <div className="flex">
            {/* Image Container */}
            <div className="w-48 h-32 flex-shrink-0 overflow-hidden bg-marble">
              <img
                src={image}
                alt={`${name} - ${sizes.map((s) => s.size_name).join(", ")}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-charcoal mb-1 group-hover:text-orange transition-colors duration-200">
                    {name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category}
                  </p>

                  {sizes && sizes.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {sizes.map((s, idx) => (
                        <span
                          key={s.id || idx}
                          className="px-3 py-1 bg-orange/10 text-orange text-xs font-semibold rounded-full border border-orange/20 shadow-sm"
                        >
                          {s.size_name}
                        </span>
                      ))}
                    </div>
                  )}

                  {surfaceTypes && surfaceTypes.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-2">
                      Surface:{" "}
                      {surfaceTypes.map((s) => s.surface_name).join(", ")}
                    </p>
                  )}

                  {/* Colors */}
                  {colors && colors.length > 0 && (
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-muted-foreground">
                        Colors:
                      </span>
                      {colors.slice(0, 6).map((color) => (
                        <div
                          key={color.id}
                          className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                          style={{
                            backgroundColor: color.color_code || "#ccc",
                          }}
                          title={color.color_name}
                        ></div>
                      ))}
                      {colors.length > 6 && (
                        <span className="text-xs text-muted-foreground">
                          +{colors.length - 6}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-orange transition-colors duration-200 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="block">
      <div
        className={cn(
          "group relative card-product overflow-hidden cursor-pointer bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow",
          className
        )}
        style={style}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-marble">
          <img
            src={image}
            alt={`${name} - ${sizes.map((s) => s.size_name).join(", ")}`}
            className="w-full h-full object-cover"
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
              <div className="flex flex-wrap gap-2 mb-2">
                {sizes.map((s, idx) => (
                  <span
                    key={s.id || idx}
                    className="px-3 py-1 bg-orange/10 text-orange text-xs font-semibold rounded-full border border-orange/20 shadow-sm"
                  >
                    {s.size_name}
                  </span>
                ))}
              </div>
            )}
            {surfaceTypes && surfaceTypes.length > 0 && (
              <p className="text-muted-foreground text-sm mb-4">
                Surface: {surfaceTypes.map((s) => s.surface_name).join(", ")}
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

            <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-orange transition-colors duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
