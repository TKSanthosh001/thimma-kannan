export const generateLocalBusinessSchema = (lang = 'ta') => {
  const siteUrl = 'https://thimmakannanshop.netlify.app/';

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    "name": "Thimma Kannan",
    "alternateName": "திம்மா கண்ணன்",
    "url": siteUrl,
    "logo": `${siteUrl}images/hero_pooja_banner.jpg`,
    "image": `${siteUrl}images/hero_pooja_banner.jpg`,
    "description": lang === 'ta'
      ? "மதுரையில் பூஜை, ஹோமம், கிரகப்பிரவேசம், திருமணம் மற்றும் பாரம்பரிய சடங்குகள், இறுதி சடங்குகளுக்குத் தேவையான பொருட்களை உங்கள் பட்டியலின்படி ஏற்பாடு செய்யும் நிறுவனம்."
      : "Traditional ritual and pooja material sourcing service in South Gate, Madurai.",
    "telephone": "+91 90434 61987",
    "email": "tksanthosh494@gmail.com",
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
      siteUrl
    ]
  };
};
