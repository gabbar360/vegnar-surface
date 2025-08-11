import { Clock, Package, Award, Truck, Shield, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We are the top manufacturer because of our on-time and secure deliveries. You can be certain that when you work with us, your cargo will arrive on schedule, undamaged, and in the best possible shape.",
      image:
        "https://sfycdn.speedsize.com/a513b203-c893-45cc-878b-3b5f4ffe1ea9/https://www.hyperiontiles.co.uk/cdn/shop/articles/how_to_choose_tiles-_a_simple_guide_for_stylish_homes_bhlws6oDE0LZ3_Bn-Qngh_1624beb1-9ad2-4276-90bc-568556606b18.png?v=1744738179",
    },
    {
      icon: Package,
      title: "Extensive Product Line",
      description:
        "Vegnar Ceramic is aware everybody has different tastes. To satisfy the various needs of our customers, we provide a varied and distinctive range of tiles and sanitaryware products.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600",
    },
    {
      icon: Award,
      title: "Excellent Quality",
      description:
        "We utilize cutting-edge technologies and maintain international standards throughout the whole manufacturing and testing process to guarantee that our goods are of the highest quality.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "CE Marking", description: "European Conformity" },
    { name: "ISI Mark", description: "Indian Standards" },
    { name: "Export Excellence", description: "Government Recognition" },
  ];

  return (
    <section className="py-24 bg-marble">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Why Choose Us</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We distinguish ourselves from other tile manufacturers through our
            commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gold/10 p-4 rounded-xl">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {feature.description}
                </p>

                {/* Stats for this feature */}
                <div className="grid grid-cols-2 gap-6">
                  {index === 0 && (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          99.5%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          On-Time Rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          22+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Countries
                        </div>
                      </div>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          500+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Product Variants
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          15+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Size Options
                        </div>
                      </div>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          4+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Certifications
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gold mb-2">
                          100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Quality Tested
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-2xl shadow-elegant group-hover:shadow-gold transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">
              Certified Excellence
            </h3>
            <p className="text-muted-foreground">
              Our commitment to quality is recognized by international standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-background border border-border/20 rounded-xl p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
