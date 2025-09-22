"use client";

const StructuredData = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vegnar Surfaces",
    "alternateName": "Vegnar Surface",
    "url": "https://www.vegnarsurfaces.com",
    "logo": "https://www.vegnarsurfaces.com/lovable-uploads/2b3bfeb0-ccc4-4eda-87c4-d2bb408e3dec.png",
    "description": "Premium ceramic tiles, porcelain pavers, and luxury surfaces manufacturer and exporter from India",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-623 RK Iconic, Shital Park",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.3039,
      "longitude": 70.8022
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90333-31005",
      "contactType": "customer service",
      "email": "connect@vegnar.com"
    },
    "sameAs": [
      "https://www.facebook.com/vegnarsurfaces",
      "https://www.instagram.com/vegnarsurfaces/",
      "https://www.linkedin.com/company/vegnar-surfaces/",
      "https://in.pinterest.com/latavegnarsurfaces/"
    ],
    "foundingDate": "2006",
    "numberOfEmployees": "50-100",
    "industry": "Ceramic and Porcelain Tile Manufacturing",
    "keywords": "ceramic tiles, porcelain pavers, luxury surfaces, tile manufacturer, export tiles"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default StructuredData;