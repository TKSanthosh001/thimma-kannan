import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { MaterialCatalog } from '../components/MaterialCatalog';

export const MaterialsPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-main transition-colors">
      <SEOHead
        title={lang === 'ta' ? 'பூஜை பொருட்கள் பட்டியல்' : 'Material Catalogue'}
        description={t.catalog.subtitle}
        path="/materials"
      />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'பொருட்கள் பட்டியல்' : 'Product Catalogue'}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.catalog.title}
          </h1>
          <p className="text-base text-secondary">
            {t.catalog.subtitle}
          </p>
        </div>

        <MaterialCatalog />
      </div>
    </div>
  );
};
