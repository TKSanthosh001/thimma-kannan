import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../config/services';

export const ServicesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-main transition-colors">
      <SEOHead
        title={lang === 'ta' ? 'பூஜை & சுப நிகழ்ச்சி சேவைகள்' : 'Pooja & Ceremony Services'}
        description={t.servicesSection.subtitle}
        path="/services"
      />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'அனைத்து சேவைகள்' : 'All Ritual Services'}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.servicesSection.title}
          </h1>
          <p className="text-base text-secondary">
            {t.servicesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};
