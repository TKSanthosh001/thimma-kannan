import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getFormWhatsAppMessage } from '../utils/whatsapp';
import { Phone, MessageSquare, MapPin, Send, Clock, Mail } from 'lucide-react';

export const ContactSection = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    functionType: '',
    preferredDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = getWhatsAppUrl(getFormWhatsAppMessage(formData, lang));
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'தொடர்புகொள்ள' : 'Get in Touch'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.contact.title}
          </h2>
          <p className="text-sm md:text-base text-secondary font-medium">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form */}
          <div className="lg:col-span-6 bg-card rounded-2xl p-6 md:p-8 border border-color shadow-sm space-y-5">
            <div>
              <h3 className="text-xl font-bold font-heading text-primary">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs md:text-sm text-secondary mt-1">
                {t.contact.formSub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-bold text-secondary mb-1">
                  {t.contact.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.name}
                  className="form-input"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-secondary mb-1">
                    {t.contact.fields.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.phone}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-secondary mb-1">
                    {t.contact.fields.functionType}
                  </label>
                  <input
                    type="text"
                    name="functionType"
                    value={formData.functionType}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.functionType}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-bold text-secondary mb-1">
                  {t.contact.fields.message}
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.message}
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp w-full py-3 text-sm font-extrabold shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

          {/* Right Shop Details & Map */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-color shadow-sm space-y-5">
              <h3 className="text-xl font-bold font-heading text-maroon dark:text-gold">
                {t.contact.shopInfo}
              </h3>

              <div className="space-y-3.5 text-sm md:text-base text-secondary font-medium">
                {/* Brand & Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-primary block mb-0.5">
                      {businessConfig.businessName[lang]}
                    </span>
                    <span className="leading-relaxed block text-secondary">
                      {businessConfig.address[lang]}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-saffron flex-shrink-0" />
                  <a href={`tel:${businessConfig.phone}`} className="font-extrabold text-primary hover:text-saffron transition-colors">
                    {businessConfig.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <a
                    href={getWhatsAppUrl(getFormWhatsAppMessage(formData, lang))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    +{businessConfig.whatsapp}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-saffron flex-shrink-0" />
                  <span className="font-semibold text-primary">{businessConfig.email}</span>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-saffron flex-shrink-0" />
                  <span className="font-semibold text-primary">{businessConfig.businessHours[lang]}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-color">
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-bold text-saffron hover:underline inline-flex items-center gap-1"
                >
                  <span>{lang === 'ta' ? 'கூகுள் மேப்பில் வழியைக் காண்க →' : 'View Directions on Google Maps →'}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-color shadow-sm h-56 bg-tertiary">
              <iframe
                title="Thimma Kannan Shop Location"
                src={businessConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
