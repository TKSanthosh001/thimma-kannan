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
    <section id="contact" className="py-16 md:py-24 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-extrabold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'தொடர்புகொள்ள' : 'Get in Touch'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.contact.title}
          </h2>
          <p className="text-base md:text-lg text-secondary font-medium">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form */}
          <div className="lg:col-span-6 bg-card rounded-3xl p-8 md:p-10 border border-color shadow-sm space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm md:text-base text-secondary mt-1 font-medium">
                {t.contact.formSub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-secondary mb-1.5">
                  {t.contact.fields.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.name}
                  className="form-input text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-secondary mb-1.5">
                    {t.contact.fields.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.phone}
                    className="form-input text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-secondary mb-1.5">
                    {t.contact.fields.functionType}
                  </label>
                  <input
                    type="text"
                    name="functionType"
                    value={formData.functionType}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.functionType}
                    className="form-input text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-secondary mb-1.5">
                  {t.contact.fields.message}
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.message}
                  className="form-input text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp w-full py-4 text-base font-extrabold shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

          {/* Right Shop Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-color shadow-sm space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-maroon dark:text-gold">
                {t.contact.shopInfo}
              </h3>

              <div className="space-y-4 text-base md:text-lg text-secondary font-medium">
                {/* Brand & Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-saffron flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-lg md:text-xl font-bold text-primary block mb-1">
                      {businessConfig.businessName[lang]}
                    </span>
                    <span className="leading-relaxed block text-primary">
                      {businessConfig.address[lang]}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 pt-1">
                  <Phone className="w-6 h-6 text-saffron flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted uppercase block">{lang === 'ta' ? 'தொலைபேசி எண்' : 'Phone Number'}</span>
                    <a href={`tel:${businessConfig.phone}`} className="text-lg md:text-xl font-extrabold text-primary hover:text-saffron transition-colors">
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted uppercase block">WhatsApp</span>
                    <a
                      href={getWhatsAppUrl(getFormWhatsAppMessage(formData, lang))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      +{businessConfig.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-saffron flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted uppercase block">{lang === 'ta' ? 'மின்னஞ்சல்' : 'Email Address'}</span>
                    <span className="text-base md:text-lg font-semibold text-primary">{businessConfig.email}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-saffron flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-muted uppercase block">{lang === 'ta' ? 'கடை இயங்கும் நேரம்' : 'Business Hours'}</span>
                    <span className="text-base md:text-lg font-semibold text-primary">{businessConfig.businessHours[lang]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-color">
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-saffron hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{lang === 'ta' ? 'கூகுள் மேப்பில் வழியைக் காண்க →' : 'View Directions on Google Maps →'}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-color shadow-sm h-64 bg-tertiary">
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
