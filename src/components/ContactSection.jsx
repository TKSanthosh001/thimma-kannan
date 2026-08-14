import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { getWhatsAppUrl, getFormWhatsAppMessage, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Phone, MapPin, Clock, Send, Navigation, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    functionType: '',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = getFormWhatsAppMessage(formData, lang);
    const waUrl = getWhatsAppUrl(whatsappMsg);
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <section id="contact" className="py-16 bg-secondary transition-colors border-t border-color">
      <div className="container mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'தொடர்பு கொள்ளுங்கள்' : 'Get In Touch'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold">
            {t.contact.title}
          </h2>
          <p className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-sm py-3 px-6 shadow-md font-bold"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.buttons.sendListWhatsApp}</span>
            </a>
            <a
              href={`tel:${businessConfig.phone}`}
              className="btn btn-outline text-sm py-3 px-6"
            >
              <Phone className="w-5 h-5" />
              <span>{t.buttons.callNow}: {businessConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Grid: Form & Contact Info with Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-6 card p-6 md:p-8 border-2 border-saffron/30 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-maroon dark:text-gold mb-1">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-secondary">
                {t.contact.formSub}
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>
                  {lang === 'ta'
                    ? 'உங்கள் பட்டியல் தகவல் தயாராகிவிட்டது. WhatsApp திறக்கிறது...'
                    : 'List message generated! Opening WhatsApp...'}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    {t.contact.fields.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.name}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    {t.contact.fields.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.phone}
                    className="form-input text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    {t.contact.fields.functionType}
                  </label>
                  <input
                    type="text"
                    name="functionType"
                    value={formData.functionType}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.functionType}
                    className="form-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    {t.contact.fields.preferredDate}
                  </label>
                  <input
                    type="text"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.preferredDate}
                    className="form-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  {t.contact.fields.message}
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.message}
                  className="form-input text-xs resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-whatsapp w-full text-sm py-3.5 font-bold shadow-md hover:scale-[1.01] transition-transform"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Shop Details & Google Map */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="card p-6 border border-color space-y-4 shadow-sm">
              <h3 className="text-xl font-bold font-heading text-primary border-b border-color pb-2">
                {t.contact.shopInfo}
              </h3>

              <div className="space-y-3.5 text-sm text-secondary">
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
                    <p className="font-semibold text-primary">{lang === 'ta' ? 'தொலைபேசி & WhatsApp:' : 'Phone & WhatsApp:'}</p>
                    <a href={`tel:${businessConfig.phone}`} className="hover:text-saffron font-medium">
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

              <div className="pt-2">
                <a
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs py-2.5 px-4 inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{lang === 'ta' ? 'கூகுள் மேப் வழித்தடம்' : 'Google Maps Directions'}</span>
                </a>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="h-64 rounded-xl overflow-hidden border border-color shadow-md relative">
              <iframe
                title="Thimma Kannan Madurai Location Map"
                src={businessConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
