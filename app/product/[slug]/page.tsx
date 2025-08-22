"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Heart,
  Download,
  Shield,
  Truck,
  Star,
  Check,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function ProductDetail() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState("");
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/products/${params.slug}?populate=*`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data.data);
          if (data.data?.finishes?.length > 0) {
            setSelectedFinish(data.data.finishes[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchProduct();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">
            Product Not Found
          </h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = product.image
    ? [`${API_URL}${product.image.url}`]
    : ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="py-6 bg-cream border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-orange">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/products"
              className="text-muted-foreground hover:text-orange"
            >
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-charcoal font-medium">
              {product.product_name}
            </span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-marble rounded-2xl overflow-hidden group">
                <img
                  src={productImages[selectedImage]}
                  alt={product.product_name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-orange shadow-lg scale-105"
                          : "border-transparent hover:border-orange/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.product_name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-orange/10 text-orange text-sm font-semibold rounded-full">
                    {product.product_category?.category_name || "Product"}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-charcoal mb-2">
                  {product.product_name}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {product.description ||
                    "Premium quality tiles perfect for modern spaces."}
                </p>
              </div>

              {/* Size & Specifications */}
              <div className="grid grid-cols-2 gap-6 p-6 bg-cream rounded-2xl">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Sizes Available
                  </div>
                  <div className="text-xl font-semibold text-charcoal">
                    {product.sizes?.map((s: any) => s.size_name).join(", ") ||
                      "Multiple Sizes"}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Colors
                  </div>
                  <div className="text-xl font-semibold text-charcoal">
                    {product.colors?.length || 0} Available
                  </div>
                </div>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-4">
                    Available Colors
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color: any, index: number) => (
                      <div key={color.id || index} className="text-center">
                        <div
                          className="w-12 h-12 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: color.color_code || "#ccc",
                          }}
                          title={color.color_name}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {color.color_name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href="/contact" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-orange hover:bg-orange/90"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us for Inquiry
                  </Button>
                </Link>
              </div>

              {/* Product Features */}
              {product.features && (
                <div className="p-6 bg-gradient-to-r from-orange/5 to-orange/10 rounded-2xl">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">
                    Product Features
                  </h3>
                  <div className="text-sm text-gray-600">
                    {product.features}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto"></div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our product specialists are ready to help you with detailed specifications and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="luxury">
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Experts
              </Button>
            </Link>

          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
