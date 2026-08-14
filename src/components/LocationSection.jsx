import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { MapPin, Phone, MessageSquare, Clock, Navigation } from 'lucide-react';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';

export const LocationSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-12 bg-card rounded-2xl border border-color my-12 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-maroon dark:text-gold mb-2">
              {t.contact.shopInfo}
            </h3>
            <p className="text-sm text-secondary">
              {businessConfig.businessName[lang]}
            </p>
          </div>

          <div className="space-y-4 text-sm text-secondary">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">{lang === 'ta' ? 'கடை முகவரி:' : 'Shop Address:'}</p>
                <p>{businessConfig.address[lang]}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">{lang === 'ta' ? 'தொலைபேசி:' : 'Phone:'}</p>
                <a href={`tel:${businessConfig.phone}`} className="hover:text-saffron">
                  {businessConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">{lang === 'ta' ? 'கடை நேரம்:' : 'Opening Hours:'}</p>
                <p>{businessConfig.businessHours[lang]}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-1.5"
            >
              <Navigation className="w-4 h-4" />
              <span>{lang === 'ta' ? 'கூகுள் மேப் வழித்தடம்' : 'Google Maps Directions'}</span>
            </a>

            <a
              href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-xs py-2.5 px-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Google Maps Embed Frame */}
        <div className="lg:col-span-7 min-h-[300px] rounded-xl overflow-hidden border border-color shadow-inner relative">
          <iframe
            title="Thimma Kannan Location Map"
            src={businessConfig.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};
