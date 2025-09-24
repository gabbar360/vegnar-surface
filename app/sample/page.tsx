"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { api } from "@/lib/api";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Sample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    pin_code: "",
    country: "",
    address: "",
    productType: "",
    message: "",
    quantity: 1,
    pricePerSample: 1000,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCancelMessage, setShowCancelMessage] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await api.createSampleOrder({
        full_name: formData.name,
        email: formData.email,
        shipping_address: formData.address,
        amount: formData.quantity * formData.pricePerSample,
        phone_number: formData.phone,
        pin_code: formData.pin_code,
        country: formData.country,
        company: formData.company,
        number_of_samples: formData.quantity,
        currency: "INR",
      });

      if (result.success) {
        initializePayment(result, {
          full_name: formData.name,
          email: formData.email,
        });
      } else {
        throw new Error(result.error || "Order creation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Order creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const initializePayment = (orderResponse: any, customerData: any) => {
    const options = {
      key: orderResponse.key,
      amount: orderResponse.amount,
      currency: orderResponse.currency,
      name: "Vegnar Surfaces",
      description: "Sample Request",
      order_id: orderResponse.order_id,
      handler: (response: any) => verifyPayment(response),
      prefill: {
        name: customerData.full_name,
        email: customerData.email,
        contact: formData.phone,
      },
      theme: { color: "#f97316" },
      modal: {
        ondismiss: () => setShowCancelMessage(true),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (paymentResponse: any) => {
    try {
      const result = await api.verifyPayment({
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_signature: paymentResponse.razorpay_signature,
      });

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = "/sample/success";
        }, 1500);
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Verification error:", error);
      alert("Payment verification failed!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 with-marble-overlay">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
            Get Your Sample
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the quality and craftsmanship of our premium tiles before
            making your decision. Request your sample today.
          </p>
        </div>
      </section>

      {/* Payment Cancel Message */}
      {showCancelMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2">
              Payment Cancelled
            </h3>
            <p className="text-gray-600 mb-6">
              Your payment was cancelled. You can try again or contact us for
              assistance.
            </p>
            <Button
              onClick={() => setShowCancelMessage(false)}
              className="bg-orange hover:bg-orange/90 text-white px-8 py-2 rounded-full"
            >
              OK
            </Button>
          </div>
        </div>
      )}

      {/* Sample Request Form */}
      <section className="py-16 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-elegant p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Request Sample
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            // sirf digits allow honge
                            handleChange(e);
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="+91 9963587456"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Pin Code *
                      </label>
                      <input
                        type="text"
                        name="pin_code"
                        required
                        value={formData.pin_code}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            // sirf digits allow honge
                            handleChange(e);
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="Your pin code"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={(e) => {
                          handleChange(e);
                          setFormData((prev) => ({
                            ...prev,
                            countryInput: e.target.value,
                          }));
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                      >
                        <option value="" disabled>
                          Select your country
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Norway">Norway</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Thailand">Thailand</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Shipping Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                      placeholder="Complete shipping address"
                    />
                  </div>
                  {/*  */}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Number of Samples *
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="1"
                        min="1"
                        max="10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Total Amount ($)
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-charcoal font-medium">
                        ${formData.quantity * formData.pricePerSample}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange/90 text-white py-3"
                    disabled={submitted || loading}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Payment Successful!
                      </>
                    ) : loading ? (
                      "Processing..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Pay ${formData.quantity *
                          formData.pricePerSample} for {formData.quantity}{" "}
                        Sample{formData.quantity > 1 ? "s" : ""}
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Sample Kit Image */}
              <div className="flex justify-center">
                <Image
                  src="/assets/samplekit.png"
                  alt="Sample Kit"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
