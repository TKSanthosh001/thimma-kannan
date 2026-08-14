import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getFormWhatsAppMessage } from '../utils/whatsapp';
import { Phone, MessageSquare, MapPin, Send, Clock } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-20 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form */}
          <div className="lg:col-span-6 bg-card rounded-3xl p-8 border border-color shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-primary">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs text-secondary mt-1">
                {t.contact.formSub}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">
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
                  <label className="block text-xs font-bold text-secondary mb-1">
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
                  <label className="block text-xs font-bold text-secondary mb-1">
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
                <label className="block text-xs font-bold text-secondary mb-1">
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
                className="btn btn-whatsapp w-full py-3.5 text-sm font-extrabold shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

          {/* Right Shop Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-card rounded-3xl p-8 border border-color shadow-sm space-y-4">
              <h3 className="text-2xl font-bold font-heading text-maroon dark:text-gold">
                {t.contact.shopInfo}
              </h3>

              <div className="space-y-3.5 text-xs md:text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-primary block">{businessConfig.businessName[lang]}</span>
                    <span>{businessConfig.address[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-saffron flex-shrink-0" />
                  <a href={`tel:${businessConfig.phone}`} className="font-bold text-primary hover:underline">
                    {businessConfig.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <a
                    href={getWhatsAppUrl(getFormWhatsAppMessage(formData, lang))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-600 hover:underline"
                  >
                    +{businessConfig.whatsapp}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-saffron flex-shrink-0" />
                  <span>{businessConfig.businessHours[lang]}</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-color shadow-sm h-56 bg-tertiary">
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
