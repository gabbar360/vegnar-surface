"use client";
import { Clock, Package, Award, Truck, Shield, Globe, CheckCircle, MapPin, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const [animatedValues, setAnimatedValues] = useState([
    [0, 0], // On-Time Delivery stats
    [0, 0], // Extensive Product Line stats  
    [0, 0]  // Excellent Quality stats
  ]);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const statsData = [
    [{ value: 99.5, suffix: "%", label: "On-Time Rate" }, { value: 30, suffix: "+", label: "Countries" }],
    [{ value: 500, suffix: "+", label: "Product Variants" }, { value: 15, suffix: "+", label: "Size Options" }],
    [{ value: 4, suffix: "+", label: "Certifications" }, { value: 100, suffix: "%", label: "Quality Tested" }]
  ];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible[index]) {
            setIsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            animateCounters(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [isVisible]);

  const animateCounters = (sectionIndex:any) => {
    statsData[sectionIndex].forEach((stat, statIndex) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[sectionIndex][statIndex] = start;
          return newValues;
        });
      }, 16);
    });
  };
  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We are the top manufacturer because of our on-time and secure deliveries. You can be certain that when you work with us, your cargo will arrive on schedule, undamaged, and in the best possible shape.",
      image:
        "/assets/about1.jpg"
    },
    {
      icon: Package,
      title: "Extensive Product Line",
      description:
        "Vegnar Ceramic is aware everybody has different tastes. To satisfy the various needs of our customers, we provide a varied and distinctive range of tiles and sanitaryware products.",
      image: "/assets/about2.jpg",
    },
    {
      icon: Award,
      title: "Excellent Quality",
      description:
        "We utilize cutting-edge technologies and maintain international standards throughout the whole manufacturing and testing process to guarantee that our goods are of the highest quality.",
      image:
        "/assets/about3.jpg",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management", icon: Award },
    { name: "CE Marking", description: "European Conformity", icon: CheckCircle },
    { name: "ISI Mark", description: "Indian Standards", icon: MapPin },
    { name: "Export Excellence", description: "Government Recognition", icon: Star },
  ];

  return (
  <section className="py-24 marble-pattern">
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
                  <div className="bg-charcoal/10 p-4 rounded-xl">
                    <feature.icon className="w-8 h-8 text-charcoal" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {feature.description}
                </p>

                {/* Stats for this feature */}
                <div ref={sectionRefs[index]} className="grid grid-cols-2 gap-6">
                  {statsData[index].map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-3xl font-bold text-charcoal mb-2">
                        {stat.suffix === "%" ? 
                          animatedValues[index][statIndex].toFixed(1) : 
                          Math.floor(animatedValues[index][statIndex])
                        }
                        {stat.suffix}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-2xl shadow-elegant group-hover:shadow-charcoal transition-all duration-500"
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
                <div className="bg-charcoal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-charcoal" />
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
