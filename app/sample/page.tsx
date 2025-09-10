"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE = 'http://localhost:1337/api';

export default function Sample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    productType: "",
    message: "",
    quantity: 1,
    pricePerSample: 500
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createOrder({
        full_name: formData.name,
        email: formData.email,
        shipping_address: formData.address,
        amount: formData.quantity * formData.pricePerSample,
        phone_number: formData.phone,
        company: formData.company,
        additional_message: formData.message,
        number_of_samples: formData.quantity,
        currency: 'INR'
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Order creation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (orderData: any) => {
    const response = await fetch(`${API_BASE}/orders/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      initializePayment(result, orderData);
    } else {
      throw new Error(result.error || 'Order creation failed');
    }
  };

  const initializePayment = (orderResponse: any, customerData: any) => {
    const options = {
      key: orderResponse.key,
      amount: orderResponse.amount,
      currency: orderResponse.currency,
      name: 'Vegnar Surfaces',
      description: 'Sample Request',
      order_id: orderResponse.order_id,
      handler: (response: any) => verifyPayment(response),
      prefill: {
        name: customerData.full_name,
        email: customerData.email,
        contact: formData.phone
      },
      theme: { color: '#f97316' },
      modal: {
        ondismiss: () => alert('Payment cancelled')
      }
    };
    
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (paymentResponse: any) => {
    try {
      const response = await fetch(`${API_BASE}/orders/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_signature: paymentResponse.razorpay_signature
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          window.location.href = '/sample/success';
        }, 1500);
      } else {
        alert('Payment verification failed!');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Payment verification failed!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 with-marble-overlay">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6">
            Get Your  Sample
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the quality and craftsmanship of our premium tiles before making your decision. 
            Request your  sample today.
          </p>
        </div>
      </section>

      {/* Sample Request Form */}
      <section className="py-16 marble-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-elegant p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Request Sample</h2>
                
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                        placeholder="+1 (555) 000-0000"
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

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange"
                      placeholder="Tell us about your project or specific requirements..."
                    />
                  </div>

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
                        Total Amount (₹)
                      </label>
                      <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-charcoal font-medium">
                        ₹{formData.quantity * formData.pricePerSample}
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
                      'Processing...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Pay ₹{formData.quantity * formData.pricePerSample} for {formData.quantity} Sample{formData.quantity > 1 ? 's' : ''}
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Why Request a Sample?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 mr-3 flex-shrink-0" />
                      Feel the texture and quality of our premium materials
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 mr-3 flex-shrink-0" />
                      See how colors look in your actual lighting conditions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 mr-3 flex-shrink-0" />
                      Test durability and performance characteristics
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange mt-0.5 mr-3 flex-shrink-0" />
                      Make confident decisions for your project
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-card p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-orange mr-3" />
                      <span className="text-muted-foreground">+91 90333 31005</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-orange mr-3" />
                      <div className="flex flex-col">
                        <span className="text-muted-foreground">connect@vegnar.com</span>
                        <span className="text-muted-foreground">germany@vegnar.com</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-orange mr-3 mt-0.5" />
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-charcoal">India Office</p>
                          <span className="text-muted-foreground">
                            B-623 RK Iconic, Shital Park<br />
                            Rajkot, Gujarat 360006, India
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-charcoal">Germany Office</p>
                          <span className="text-muted-foreground">
                            Rheinstraße 10, D-35764 Sinn<br />
                            Germany
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Sample Policy</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Sample fee: ₹500 (refundable on bulk order)</li>
                    <li>• Up to 3 pieces per request</li>
                    <li>• Delivery within 5-7 business days</li>
                    <li>• Secure payment via Razorpay</li>
                    <li>• Samples are for evaluation purposes only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}