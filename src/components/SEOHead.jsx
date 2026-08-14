import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { generateLocalBusinessSchema } from '../seo/schemaGenerator';

export const SEOHead = () => {
  const { lang } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title
    document.title = lang === 'ta'
      ? 'திம்மா கண்ணன் மதுரை | பூஜை, ஹோமம் & சடங்கு பொருட்கள்'
      : 'Thimma Kannan Madurai | Pooja, Homam & Ritual Materials';

    // 2. Dynamic Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        lang === 'ta'
          ? 'மதுரையில் பூஜை, ஹோமம், கிரகப்பிரவேசம், திருமணம் மற்றும் பாரம்பரிய சடங்குகள், இறுதி சடங்குகளுக்குத் தேவையான பொருட்களை உங்கள் பட்டியலின்படி ஏற்பாடு செய்து வழங்குகிறோம். தெற்கு வாசல், மதுரை.'
          : 'Thimma Kannan Madurai provides hassle-free sourcing for all pooja, homam, housewarming, wedding, traditional family rituals, and final rite material lists. South Gate, Madurai.'
      );
    }

    // 3. Inject Structured Data JSON-LD
    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(generateLocalBusinessSchema(lang));

  }, [lang]);

  return null;
};
