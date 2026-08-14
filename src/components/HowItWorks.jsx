import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, FileText, Send, CheckCircle2, Package, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const { lang, t } = useLanguage();

  const stepIcons = [
    <FileText className="w-7 h-7 text-saffron" />,
    <Send className="w-7 h-7 text-maroon dark:text-gold" />,
    <CheckCircle2 className="w-7 h-7 text-saffron" />,
    <Package className="w-7 h-7 text-maroon dark:text-gold" />
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-br from-amber-500/10 via-main to-amber-500/5 transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'செயல்முறை' : 'Process Workflow'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
            {t.workflow.title}
          </h2>
          <p className="text-base md:text-lg text-secondary">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Horizontal Visual Timeline Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.workflow.steps.map((step, idx) => (
            <div key={idx} className="bg-card border border-color rounded-2xl p-8 space-y-4 shadow-sm relative group hover:border-saffron transition-all">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-tertiary flex items-center justify-center border border-color group-hover:scale-110 transition-transform">
                  {stepIcons[idx]}
                </div>
                <span className="text-4xl font-extrabold font-heading text-saffron/20">
                  0{step.num}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-primary pt-2">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-secondary leading-relaxed">
                {step.desc}
              </p>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-saffron/60">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Major Full-Width Maroon & Gold Conversion Banner */}
        <div className="bg-gradient-to-r from-maroon to-red-950 text-white rounded-3xl p-10 md:p-14 text-center max-w-5xl mx-auto space-y-6 shadow-2xl border-2 border-saffron/40">
          <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-amber-200 leading-tight">
            {t.workflow.ctaTitle}
          </h3>
          <p className="text-base md:text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            {t.workflow.ctaDesc}
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-lg md:text-xl py-4 px-10 rounded-full shadow-2xl inline-flex items-center gap-3 font-extrabold hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-7 h-7" />
              <span>{t.buttons.sendListWhatsApp}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
