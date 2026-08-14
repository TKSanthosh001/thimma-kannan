import { businessConfig } from '../config/business';

export const generateLocalBusinessSchema = (lang = 'ta') => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessConfig.siteUrl}/#organization`,
    "name": "Thimma Kannan",
    "alternateName": "திம்மா கண்ணன்",
    "url": businessConfig.siteUrl,
    "logo": `${businessConfig.siteUrl}/images/hero_pooja_banner.jpg`,
    "image": `${businessConfig.siteUrl}/images/hero_pooja_banner.jpg`,
    "description": lang === 'ta'
      ? "மதுரையில் பூஜை, ஹோமம், கிரகப்பிரவேசம், திருமணம் மற்றும் சடங்குகளுக்குத் தேவையான பொருட்களை உங்கள் பட்டியலின்படி ஏற்பாடு செய்யும் பாரம்பரிய நிறுவனம்."
      : "Traditional ritual and pooja material sourcing service in South Gate, Madurai.",
    "telephone": businessConfig.phoneRaw,
    "email": businessConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48B, Chinna Kadai Street, South Gate",
      "addressLocality": "Madurai",
      "addressRegion": "TN",
      "postalCode": "625001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9149497,
      "longitude": 78.1187483
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      businessConfig.siteUrl
    ]
  };
};
