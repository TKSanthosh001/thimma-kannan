import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getFormWhatsAppMessage, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
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
    
    // Open WhatsApp after brief moment
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <div className="card p-6 md:p-8 border-2 border-amber-500/20">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold font-heading text-maroon dark:text-gold mb-1">
          {t.contact.formTitle}
        </h3>
        <p className="text-xs text-secondary">
          {t.contact.formSub}
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>
            {lang === 'ta'
              ? 'உங்கள் தகவல் தயாராகிவிட்டது. WhatsApp திறக்கிறது...'
              : 'Message generated successfully! Opening WhatsApp...'}
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
          className="btn btn-whatsapp w-full text-sm py-3 font-bold shadow-md hover:scale-[1.01] transition-transform"
        >
          <Send className="w-4 h-4" />
          <span>{t.contact.submitBtn}</span>
        </button>

        <div className="text-center pt-2">
          <span className="text-xs text-muted block mb-1">
            {lang === 'ta' ? 'அல்லது நேரடியாக WhatsApp-ல் தொடங்கவும்' : 'Or start a direct chat'}
          </span>
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-saffron hover:underline font-semibold inline-flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.buttons.enquireWhatsApp}</span>
          </a>
        </div>
      </form>
    </div>
  );
};
