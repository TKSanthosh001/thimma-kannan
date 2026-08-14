import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { Phone, MessageSquare, Mail, MapPin, Clock, Flame } from 'lucide-react';

export const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-tertiary border-t border-color pt-12 pb-6 mt-16 transition-colors">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 to-red-800 flex items-center justify-center text-amber-100 shadow-md">
                <Flame className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-heading text-maroon dark:text-gold">
                {businessConfig.businessName[lang]}
              </h2>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs py-2 px-3 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.buttons.enquireWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold font-heading text-primary mb-4 border-b border-color pb-2">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-secondary hover:text-saffron transition-colors">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary hover:text-saffron transition-colors">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary hover:text-saffron transition-colors">{t.nav.services}</Link>
              </li>
              <li>
                <Link to="/packages" className="text-secondary hover:text-saffron transition-colors">{t.nav.packages}</Link>
              </li>
              <li>
                <Link to="/materials" className="text-secondary hover:text-saffron transition-colors">{t.nav.materials}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-saffron transition-colors">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold font-heading text-primary mb-4 border-b border-color pb-2">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-saffron mt-1 flex-shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="hover:text-saffron transition-colors">
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <a
                  href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  +{businessConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-saffron mt-1 flex-shrink-0" />
                <span>{businessConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-saffron mt-1 flex-shrink-0" />
                <span>{businessConfig.businessHours[lang]}</span>
              </li>
            </ul>
          </div>

          {/* Location & Address */}
          <div>
            <h3 className="text-base font-bold font-heading text-primary mb-4 border-b border-color pb-2">
              {t.contact.locationTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-secondary mb-3">
              <MapPin className="w-4 h-4 text-maroon dark:text-gold mt-1 flex-shrink-0" />
              <span>{businessConfig.address[lang]}</span>
            </div>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-saffron hover:underline font-semibold"
            >
              {lang === 'ta' ? 'கூகுள் மேப்பில் வழியைக் காண்க →' : 'View Directions on Google Maps →'}
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-color pt-6 text-center text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 {businessConfig.businessName[lang]}. {t.footer.rights}</p>
          <p className="text-xs italic">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
