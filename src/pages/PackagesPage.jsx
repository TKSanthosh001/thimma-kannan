import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PackageCard } from '../components/PackageCard';
import { packagesData } from '../config/packages';

export const PackagesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 bg-main transition-colors">
      <SEOHead
        title={lang === 'ta' ? 'பூஜை & சுப நிகழ்ச்சி பேக்கேஜ்கள்' : 'Ceremony Material Packages'}
        description={lang === 'ta' ? 'அனைத்து வகை சடங்குகளுக்கும் தயார் நிலையில் உள்ள மங்கள பூஜா பேக்கேஜ்கள்.' : 'Pre-assembled ceremonial ritual packages for traditional functions.'}
        path="/packages"
      />

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'சிறப்பு தொகுப்புகள்' : 'Ceremony Bundles'}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'பூரண பூஜா பேக்கேஜ்கள்' : 'Ceremony Material Packages'}
          </h1>
          <p className="text-base text-secondary">
            {lang === 'ta'
              ? 'உங்கள் வீட்டு விசேஷம் மற்றும் சடங்குகளுக்கு தேவையான பொருட்கள் அனைத்தும் ஒரே பேக்கில் தயார் செய்யப்பட்டுள்ளது.'
              : 'Carefully curated material bundles designed for hassle-free ceremony execution.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};
