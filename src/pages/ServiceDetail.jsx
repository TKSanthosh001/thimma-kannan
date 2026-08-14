import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { servicesData } from '../config/services';
import { packagesData } from '../config/packages';
import { PackageCard } from '../components/PackageCard';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, CheckCircle, ArrowLeft, Info, FileText } from 'lucide-react';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold font-heading text-primary">
          {lang === 'ta' ? 'சேவை காணப்படவில்லை' : 'Service Not Found'}
        </h2>
        <Link to="/services" className="btn btn-primary text-sm">
          {lang === 'ta' ? 'அனைத்து சேவைகளுக்கும் திரும்புக' : 'Back to Services'}
        </Link>
      </div>
    );
  }

  const title = service.title[lang];
  const fullDesc = service.fullDesc[lang];
  const includes = service.includes[lang];
  const isFuneral = service.id === 'funeral-rituals';

  const relatedPackages = packagesData.filter((pkg) => pkg.category === service.id);

  return (
    <div className="py-12 bg-main transition-colors">
      <SEOHead
        title={title}
        description={service.shortDesc[lang]}
        path={`/services/${slug}`}
        image={service.image}
        serviceData={{ name: title, desc: fullDesc }}
      />

      <div className="container mx-auto">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-saffron hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ta' ? 'அனைத்து சேவைகளும்' : 'Back to All Services'}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-color">
                <img
                  src={service.image}
                  alt={title}
                  className={`w-full h-64 sm:h-96 object-cover ${isFuneral ? 'grayscale-[30%]' : ''}`}
                />
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-maroon text-white font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                    {service.badge[lang]}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
                {title}
              </h1>

              <p className="text-base text-secondary leading-relaxed bg-card p-5 rounded-xl border border-color">
                {fullDesc}
              </p>
            </div>

            {/* Included Items Checklist */}
            <div className="bg-card p-6 rounded-xl border border-color space-y-4 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary border-b border-color pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-saffron" />
                <span>{lang === 'ta' ? 'பட்டியலின்படி திரட்டப்படும் முக்கிய பொருட்கள்:' : 'Key Materials Arranged Per List:'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Priest List Notice */}
            <div className="bg-tertiary p-6 rounded-xl border-2 border-saffron/40 space-y-3">
              <div className="flex items-center gap-2 text-saffron font-bold font-heading text-lg">
                <Info className="w-5 h-5" />
                <span>{lang === 'ta' ? 'உங்கள் பூஜை பொருட்கள் பட்டியல் தயாரா?' : 'Have Your Priest List Ready?'}</span>
              </div>
              <p className="text-xs md:text-sm text-secondary leading-relaxed">
                {lang === 'ta'
                  ? 'Iyer / Priest கொடுத்த பட்டியலை WhatsApp-ல் அனுப்புங்கள். தேவையான பொருட்கள் அனைத்தையும் ஒரே தொகுப்பாக ஏற்பாடு செய்து தருகிறோம்.'
                  : 'Simply send us the pooja or ceremony material list given by your Iyer or priest. We arrange the required items and pack everything together.'}
              </p>
            </div>

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold font-heading text-primary">
                  {lang === 'ta' ? 'இச்சேவைக்கான தயார் தொகுப்புகள்' : 'Prepared Ceremony Packages'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="card p-6 sticky top-24 border-2 border-saffron text-center space-y-4 shadow-xl">
              <h3 className="text-xl font-bold font-heading text-primary">
                {lang === 'ta' ? 'பட்டியலை WhatsApp-ல் அனுப்புங்கள்' : 'Send Your List on WhatsApp'}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                {lang === 'ta'
                  ? 'உங்கள் ஐயர் கொடுத்த பட்டியலின் புகைப்படத்தை அனுப்பி தேவையான பொருட்களை உடனடி ஏற்பாடு செய்யுங்கள்.'
                  : 'Send a photo of your priest list on WhatsApp to arrange your ceremony materials effortlessly.'}
              </p>

              <a
                href={getWhatsAppUrl(service.whatsappMessage[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-3.5 w-full font-bold shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.buttons.sendListWhatsApp}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
