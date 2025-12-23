import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Vegnar Surfaces',
  description: 'Terms and Conditions for Vegnar Surfaces - Premium tiles and surfaces manufacturer',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative min-h-96 bg-charcoal flex items-center pt-32 pb-8">
        <div className="absolute inset-0">
          <img 
            src="/assets/about-section.jpg" 
            alt="Terms and Conditions - Vegnar Surfaces" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg md:text-xl opacity-90">Legal terms and conditions for using Vegnar Surfaces services</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-background marble-pattern">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-orange font-semibold tracking-wider uppercase text-sm">
              Legal Information
            </span>
            <h2 className="section-title mt-4 mb-6">
              Terms and Conditions
            </h2>
            <p className="section-subtitle">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 border border-orange/10">
            <div className="border-b border-orange/20 pb-4 lg:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p><strong>Last updated:</strong> January 2025</p>
                </div>
                <div className="bg-gradient-to-r from-orange/20 to-orange/10 px-3 py-1.5 rounded-full border border-orange/30">
                  <span className="text-orange text-xs font-bold uppercase tracking-wider">Legal Document</span>
                </div>
              </div>
            </div>

                <div className="space-y-4 lg:space-y-6">
                  <section className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-cream/30 border border-orange/10 hover:border-orange/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange via-orange/90 to-orange/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-xl">
                        1
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">
                          Acceptance of Terms
                        </h3>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                          By accessing and using the Vegnar Surfaces website (www.vegnarsurfaces.com), you accept and agree to be bound by the terms and provision of this agreement. These Terms and Conditions apply to all visitors, users, and others who access or use the service.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-marble/30 border border-orange/10 hover:border-orange/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange via-orange/90 to-orange/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-xl">
                        2
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">
                          Use License
                        </h3>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                          Permission is granted to temporarily download one copy of the materials on Vegnar Surfaces' website for personal, non-commercial transitory viewing only. Under this license you may not:
                        </p>
                        <div className="bg-gradient-to-r from-orange/5 to-orange/10 p-3 lg:p-4 rounded-xl border border-orange/20">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">modify or copy materials</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">use for commercial purposes</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">reverse engineer software</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">remove copyright notices</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-cream/30 border border-orange/10 hover:border-orange/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange via-orange/90 to-orange/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-xl">
                        3
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">
                          Product Information
                        </h3>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                          Vegnar Surfaces strives to provide accurate product information, including specifications, colors, and dimensions. However, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-marble/30 border border-orange/10 hover:border-orange/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange via-orange/90 to-orange/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-xl">
                        4
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">
                          Orders & Pricing
                        </h3>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                          All orders are subject to acceptance and availability. Prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason. Payment terms will be communicated at order confirmation.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white to-cream/30 border border-orange/10 hover:border-orange/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange via-orange/90 to-orange/80 rounded-2xl flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-xl">
                        5
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors duration-300">
                          Contact Information
                        </h3>
                        <div className="text-muted-foreground leading-relaxed">
                          <p className="text-sm lg:text-base mb-4">Questions about these Terms? Contact us:</p>
                          <div className="bg-gradient-to-br from-orange/5 via-cream/50 to-marble/30 p-4 lg:p-6 rounded-2xl border border-orange/20 shadow-inner">
                            <div className="flex items-center mb-4">
                              <div className="w-3 h-3 bg-orange rounded-full mr-3 animate-pulse"></div>
                              <h4 className="font-bold text-charcoal text-base lg:text-lg">Vegnar Surfaces</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                              <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-orange/60 rounded-full mt-2 flex-shrink-0"></div>
                                  <div>
                                    <p className="font-semibold text-charcoal text-xs lg:text-sm">Email:</p>
                                    <p className="text-xs lg:text-sm break-all">info@vegnarsurfaces.com</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-orange/60 rounded-full mt-2 flex-shrink-0"></div>
                                  <div>
                                    <p className="font-semibold text-charcoal text-xs lg:text-sm">Phone:</p>
                                    <p className="text-xs lg:text-sm">+91 99980 40370</p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-orange/60 rounded-full mt-2 flex-shrink-0"></div>
                                  <div>
                                    <p className="font-semibold text-charcoal text-xs lg:text-sm">India Office:</p>
                                    <p className="text-xs lg:text-sm">Gujarat, India</p>
                                  </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-orange/60 rounded-full mt-2 flex-shrink-0"></div>
                                  <div>
                                    <p className="font-semibold text-charcoal text-xs lg:text-sm">USA Office:</p>
                                    <p className="text-xs lg:text-sm">30 N Gould St Ste R, Sheridan, WY 82801-6317, US</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}