import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';
import { LocationSection } from '../components/LocationSection';

export const ContactPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-main transition-colors">
      <SEOHead
        title={t.contact.title}
        description={t.contact.subtitle}
        path="/contact"
      />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'தொடர்பு கொள்ளவும்' : 'Get In Touch'}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.contact.title}
          </h1>
          <p className="text-base text-secondary">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <ContactForm />
        </div>

        <LocationSection />
      </div>
    </div>
  );
};
