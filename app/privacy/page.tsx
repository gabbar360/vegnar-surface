import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vegnar Surfaces',
  description: 'Privacy Policy for Vegnar Surfaces - How we collect, use, and protect your personal information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative min-h-96 bg-charcoal flex items-center pt-32 pb-8">
        <div className="absolute inset-0">
          <img 
            src="/assets/about-section.jpg" 
            alt="Privacy Policy - Vegnar Surfaces" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg md:text-xl opacity-90">How we collect, use, and protect your personal information</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-background marble-pattern">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-orange font-semibold tracking-wider uppercase text-sm">
              Data Protection
            </span>
            <h2 className="section-title mt-4 mb-6">
              Privacy Policy
            </h2>
            <p className="section-subtitle">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8 border border-orange/10">
            <div className="border-b border-orange/20 pb-4 lg:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p><strong>Last updated:</strong> January 2025</p>
                </div>
                <div className="bg-gradient-to-r from-orange/20 to-orange/10 px-3 py-1.5 rounded-full border border-orange/30">
                  <span className="text-orange text-xs font-bold uppercase tracking-wider">Privacy Document</span>
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
                          Information We Collect
                        </h3>
                        <div className="space-y-3 lg:space-y-4">
                          <div className="bg-gradient-to-r from-orange/5 to-orange/10 p-3 lg:p-4 rounded-xl border border-orange/20">
                            <p className="font-semibold text-charcoal mb-2 text-sm lg:text-base">Personal Information:</p>
                            <p className="text-muted-foreground text-xs lg:text-sm mb-3">We collect personal information when you:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Fill contact forms</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Request samples</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Subscribe newsletter</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Create account</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-marble/20 to-cream/20 p-3 lg:p-4 rounded-xl border border-orange/10">
                            <p className="font-semibold text-charcoal mb-2 text-sm lg:text-base">Non-Personal Info:</p>
                            <p className="text-muted-foreground text-xs lg:text-sm">Device data, IP address, browser type, and page views.</p>
                          </div>
                        </div>
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
                          How We Use Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                          <div className="flex items-start space-x-2 p-2 lg:p-3 bg-gradient-to-r from-cream/20 to-marble/20 rounded-lg">
                            <div className="w-2 h-2 bg-orange rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs lg:text-sm text-muted-foreground">Respond to inquiries</span>
                          </div>
                          <div className="flex items-start space-x-2 p-2 lg:p-3 bg-gradient-to-r from-marble/20 to-cream/20 rounded-lg">
                            <div className="w-2 h-2 bg-orange rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs lg:text-sm text-muted-foreground">Process requests</span>
                          </div>
                          <div className="flex items-start space-x-2 p-2 lg:p-3 bg-gradient-to-r from-cream/20 to-marble/20 rounded-lg">
                            <div className="w-2 h-2 bg-orange rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs lg:text-sm text-muted-foreground">Send communications</span>
                          </div>
                          <div className="flex items-start space-x-2 p-2 lg:p-3 bg-gradient-to-r from-marble/20 to-cream/20 rounded-lg">
                            <div className="w-2 h-2 bg-orange rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs lg:text-sm text-muted-foreground">Improve services</span>
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
                          Google Services
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                          <div className="p-3 lg:p-4 bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl border border-orange/20">
                            <h4 className="font-bold text-charcoal mb-2 flex items-center text-sm lg:text-base">
                              <div className="w-2 h-2 bg-orange rounded-full mr-2"></div>
                              Analytics & Ads
                            </h4>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-orange/60 rounded-full"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Google Analytics</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-orange/60 rounded-full"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Google Ads</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 lg:p-4 bg-gradient-to-br from-marble/20 to-cream/20 rounded-xl border border-orange/10">
                            <h4 className="font-bold text-charcoal mb-2 flex items-center text-sm lg:text-base">
                              <div className="w-2 h-2 bg-orange rounded-full mr-2"></div>
                              Services
                            </h4>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-orange/60 rounded-full"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">Google Maps</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-orange/60 rounded-full"></div>
                                <span className="text-xs lg:text-sm text-muted-foreground">reCAPTCHA</span>
                              </div>
                            </div>
                          </div>
                        </div>
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
                          Your Rights
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-cream/20 to-marble/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Access information</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-marble/20 to-cream/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Correct data</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-cream/20 to-marble/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Delete information</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-marble/20 to-cream/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Data portability</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-cream/20 to-marble/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Object processing</span>
                            </div>
                            <div className="flex items-center space-x-2 p-2 lg:p-3 bg-gradient-to-r from-marble/20 to-cream/20 rounded-lg">
                              <div className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></div>
                              <span className="text-xs lg:text-sm text-muted-foreground">Withdraw consent</span>
                            </div>
                          </div>
                        </div>
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
                          Contact Us
                        </h3>
                        <div className="text-muted-foreground leading-relaxed">
                          <p className="text-sm lg:text-base mb-4">Questions about privacy? Contact us:</p>
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
                                    <p className="font-semibold text-charcoal text-xs lg:text-sm">Privacy Email:</p>
                                    <p className="text-xs lg:text-sm break-all">privacy@vegnarsurfaces.com</p>
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