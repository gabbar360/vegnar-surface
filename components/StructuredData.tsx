export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vegnar Surfaces",
    "alternateName": "Vegnar Surface",
    "description": "India's leading premium tiles manufacturer specializing in marble, ceramic, granite, porcelain, and mosaic tiles with 20+ years of experience.",
    "url": "https://vegnarsurfaces.com",
    "logo": "https://vegnarsurfaces.com/assets/logo.png",
    "image": "https://vegnarsurfaces.com/assets/hero-marble-bg.jpg",
    "foundingDate": "2000",
    "founder": {
      "@type": "Person",
      "name": "Vegnar Surfaces Founder"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/vegnarsurfaces",
      "https://www.instagram.com/vegnarsurfaces",
      "https://www.linkedin.com/company/vegnarsurfaces",
      "https://twitter.com/vegnarsurfaces"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tiles and Surfaces",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Marble Tiles",
            "category": "Building Materials"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Ceramic Tiles",
            "category": "Building Materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Granite Tiles",
            "category": "Building Materials"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vegnar Surfaces",
    "url": "https://vegnarsurfaces.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vegnarsurfaces.com/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vegnarsurfaces.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}