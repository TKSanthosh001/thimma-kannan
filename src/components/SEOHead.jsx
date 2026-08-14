import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getLocalBusinessSchema, getWebSiteSchema } from '../seo/schemaGenerator';

export const SEOHead = () => {
  const { lang } = useLanguage();

  const siteTitle = lang === 'ta'
    ? `${businessConfig.businessName.ta} | ${businessConfig.tagline.ta}`
    : `${businessConfig.businessName.en} | ${businessConfig.tagline.en}`;

  const metaDescription = businessConfig.subTagline[lang];
  const pageUrl = `${businessConfig.siteUrl}/`;
  const ogImage = `${businessConfig.siteUrl}/images/hero_pooja_banner.jpg`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = siteTitle;

    // Helper function to set or update meta element
    const setMetaTag = (selector, attr, attrName, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrName);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);

    // 3. Open Graph Metadata
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', siteTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', lang === 'ta' ? 'ta_IN' : 'en_IN');

    // 4. Twitter Card Metadata
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', siteTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // 6. JSON-LD Schema Insertion
    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [getLocalBusinessSchema(), getWebSiteSchema()];
    scriptTag.textContent = JSON.stringify(schemas);

  }, [siteTitle, metaDescription, pageUrl, ogImage, lang]);

  return null;
};
