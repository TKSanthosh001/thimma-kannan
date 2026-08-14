import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServiceCard } from '../components/ServiceCard';
import { PackageCard } from '../components/PackageCard';
import { WorkflowSection } from '../components/WorkflowSection';
import { MaterialCatalog } from '../components/MaterialCatalog';
import { FaqSection } from '../components/FaqSection';
import { LocationSection } from '../components/LocationSection';
import { servicesData } from '../config/services';
import { packagesData } from '../config/packages';
import { ArrowRight, Award, ShieldCheck, Sparkles, Clock, HeartHandshake } from 'lucide-react';

export const Home = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <SEOHead
        title={lang === 'ta' ? 'பாரம்பரிய பூஜா பொருட்கள் & சடங்கு தொகுப்புகள்' : 'Traditional Pooja & Ceremony Packages'}
        description={t.heroSubtext}
        path="/"
      />

      {/* Hero Banner Section */}
      <Hero />

      {/* About Business Section */}
      <AboutSection />

      {/* Main Services Section */}
      <section className="py-16 bg-main transition-colors">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-saffron mb-1 block">
                {lang === 'ta' ? 'எங்களின் சேவைகள்' : 'Our Offerings'}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-primary">
                {t.servicesSection.title}
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-saffron hover:underline inline-flex items-center gap-1 mt-3 md:mt-0"
            >
              <span>{t.servicesSection.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* "Give Us the List. We'll Take Care of the Rest." Workflow */}
      <WorkflowSection />

      {/* Featured Ceremony Packages */}
      <section className="py-16 bg-secondary transition-colors">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron mb-1 block">
              {lang === 'ta' ? 'பிரபலமான தொகுப்புகள்' : 'Ceremony Bundles'}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
              {lang === 'ta' ? 'சிறப்பு பூஜா பேக்கேஜ்கள்' : 'Popular Ceremony Material Packages'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Materials Catalogue Preview */}
      <section className="py-16 bg-main transition-colors">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-saffron mb-1 block">
                {lang === 'ta' ? 'பொருட்கள் பட்டியல்' : 'Catalogue Preview'}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary">
                {t.catalog.title}
              </h2>
            </div>
            <Link
              to="/materials"
              className="text-sm font-semibold text-saffron hover:underline inline-flex items-center gap-1 mt-2 md:mt-0"
            >
              <span>{lang === 'ta' ? 'அனைத்துப் பொருட்களையும் பார்க்க →' : 'View All Materials →'}</span>
            </Link>
          </div>

          <MaterialCatalog limit={4} />
        </div>
      </section>

      {/* Why Choose Thimma Kannan */}
      <section className="py-16 bg-tertiary transition-colors border-y border-color">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary">
              {t.whyChoose.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyChoose.reasons.map((reason, idx) => (
              <div key={idx} className="card p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 text-saffron mx-auto flex items-center justify-center">
                  {idx === 0 && <Award className="w-6 h-6" />}
                  {idx === 1 && <Clock className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-bold font-heading text-primary">
                  {reason.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="container mx-auto">
        <FaqSection />
      </div>

      {/* Location & Directions Section */}
      <div className="container mx-auto px-4">
        <LocationSection />
      </div>
    </>
  );
};
