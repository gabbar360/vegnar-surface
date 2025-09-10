"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SampleSuccess() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-24 marble-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-elegant p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              
              <h1 className="text-3xl font-bold text-charcoal mb-4">
                Payment Successful!
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Your sample request has been confirmed. We'll process your order and ship your samples soon.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center p-4 bg-orange/10 rounded-lg">
                  <Package className="w-6 h-6 text-orange mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-charcoal">Processing</p>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-4 bg-orange/10 rounded-lg">
                  <Clock className="w-6 h-6 text-orange mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-charcoal">Delivery</p>
                    <p className="text-sm text-muted-foreground">5-7 business days</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                You will receive a confirmation email with tracking details shortly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sample">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Request Another Sample
                  </Button>
                </Link>
                
                <Link href="/catalog">
                  <Button className="w-full sm:w-auto bg-orange hover:bg-orange/90">
                    Browse Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}