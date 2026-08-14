import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { Phone, MessageSquare, Mail, MapPin, Clock, Flame } from 'lucide-react';

export const Footer = () => {
  const { lang, t } = useLanguage();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-tertiary border-t border-color pt-12 pb-6 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-maroon flex items-center justify-center text-gold shadow-md">
                <Flame className="w-5 h-5 text-amber-300" />
              </div>
              <h2 className="text-xl font-bold font-heading text-maroon dark:text-gold">
                {businessConfig.businessName[lang]}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-secondary leading-relaxed font-medium">
              {t.footer.desc}
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs py-2 px-3.5 inline-flex items-center gap-1.5 font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.buttons.sendListWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm md:text-base font-bold font-heading text-primary mb-3 border-b border-color pb-2">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm font-semibold">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-secondary hover:text-saffron transition-colors">{t.nav.home}</a>
              </li>
              <li>
                <a href="#what-we-do" onClick={(e) => scrollToSection(e, 'what-we-do')} className="text-secondary hover:text-saffron transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-secondary hover:text-saffron transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-secondary hover:text-saffron transition-colors">{t.nav.workflow}</a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => scrollToSection(e, 'materials')} className="text-secondary hover:text-saffron transition-colors">{t.nav.materials}</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-secondary hover:text-saffron transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm md:text-base font-bold font-heading text-primary mb-3 border-b border-color pb-2">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-secondary font-medium">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-saffron mt-0.5 flex-shrink-0" />
                <a href={`tel:${businessConfig.phone}`} className="hover:text-saffron transition-colors font-bold text-primary">
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors font-bold text-emerald-600 dark:text-emerald-400"
                >
                  +{businessConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-saffron mt-0.5 flex-shrink-0" />
                <span>{businessConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-saffron mt-0.5 flex-shrink-0" />
                <span>{businessConfig.businessHours[lang]}</span>
              </li>
            </ul>
          </div>

          {/* Address & Map Link */}
          <div>
            <h3 className="text-sm md:text-base font-bold font-heading text-primary mb-3 border-b border-color pb-2">
              {t.contact.locationTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-xs md:text-sm text-secondary mb-3 leading-relaxed font-medium">
              <MapPin className="w-4 h-4 text-maroon dark:text-gold mt-0.5 flex-shrink-0" />
              <span>{businessConfig.address[lang]}</span>
            </div>
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-saffron hover:underline font-bold"
            >
              {lang === 'ta' ? 'கூகுள் மேப்பில் வழியைக் காண்க →' : 'View Directions on Google Maps →'}
            </a>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-color pt-6 text-center text-xs text-muted flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 {businessConfig.businessName[lang]}. {t.footer.rights}</p>
          <p className="text-xs italic">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};
