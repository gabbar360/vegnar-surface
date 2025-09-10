"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Clock, ArrowLeft, Download, Mail, X, Check } from "lucide-react";
import Link from "next/link";
import Confetti from "react-confetti";

export default function SampleSuccess() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showConfirmationOverlay, setShowConfirmationOverlay] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimension({ width, height });
    
    // Show confetti animation and confirmation overlay
    setShowConfetti(true);
    setShowConfirmationOverlay(true);

    // Hide confetti and overlay after 4 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
      setShowConfirmationOverlay(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Order Confirmation Overlay */}
      {showConfirmationOverlay && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          {showConfetti && (
            <Confetti
              width={windowDimension.width}
              height={windowDimension.height}
              recycle={false}
              numberOfPieces={2000}
              gravity={0.3}
            />
          )}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform animate-pulse">
            {/* Close button */}
            <button
              onClick={() => {
                setShowConfirmationOverlay(false);
                setShowConfetti(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Icon with Animation */}
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10 text-green-600" />
                {/* Pulse ring animation */}
                <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
              </div>

              {/* Main heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Payment Confirmed!
              </h2>

              {/* Subheading */}
              <p className="text-gray-600 mb-4">
                Your sample order has been successfully confirmed
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Order Type:</span>
                <span className="font-semibold text-gray-900">Sample Request</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Status:</span>
                <span className="font-semibold text-gray-900">Processing</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Delivery:</span>
                <span className="font-bold text-green-600">5-7 Days</span>
              </div>
            </div>

            {/* Success message */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                Payment Confirmed
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-50 animate-pulse delay-700"></div>
          </div>
        </div>
      )}
      
      {/* <section className="py-24 marble-pattern relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="animate-bounce">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 animate-fade-in">
                🎉 Payment Successful!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Thank you for your order! Your premium tile samples are being prepared with care and will be shipped to you soon.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-2">Order Confirmed</h3>
                  <p className="text-sm text-muted-foreground">Payment processed successfully</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <Package className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">1-2 business days</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-charcoal mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground">5-7 business days</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-orange mr-3" />
                  <h3 className="text-lg font-semibold text-charcoal">What's Next?</h3>
                </div>
                <ul className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Confirmation email sent to your inbox
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Tracking details will be shared
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Premium samples carefully packaged
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sample">
                  <Button variant="outline" className="w-full sm:w-auto border-2 hover:bg-gray-50">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Request More Samples
                  </Button>
                </Link>
                
                <Link href="/catalog">
                  <Button className="w-full sm:w-auto bg-orange hover:bg-orange/90 shadow-lg">
                    <Download className="w-4 h-4 mr-2" />
                    Browse Full Catalog
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-orange text-orange hover:bg-orange/10">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}