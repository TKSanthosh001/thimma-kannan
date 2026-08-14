import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl, getGeneralWhatsAppMessage } from '../utils/whatsapp';
import { MessageSquare, FileText, Send, CheckCircle, Package, ArrowRight } from 'lucide-react';

export const WorkflowSection = () => {
  const { lang, t } = useLanguage();

  const stepIcons = [
    <FileText className="w-6 h-6 text-saffron" />,
    <Send className="w-6 h-6 text-maroon dark:text-gold" />,
    <CheckCircle className="w-6 h-6 text-saffron" />,
    <Package className="w-6 h-6 text-maroon dark:text-gold" />
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-500/10 via-background to-amber-500/5 transition-colors border-y border-color">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron">
            {lang === 'ta' ? 'சுலபமான 4 படிகள்' : 'Simple 4-Step Process'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold leading-tight">
            "{t.workflow.title}"
          </h2>
          <p className="text-secondary text-base md:text-lg">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.workflow.steps.map((step, idx) => (
            <div key={idx} className="card relative flex flex-col justify-between hover:border-saffron group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-tertiary flex items-center justify-center border border-color group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-extrabold font-heading text-amber-500/30">
                    0{step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-primary pt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-amber-400">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Big Action Box */}
        <div className="bg-card border-2 border-saffron rounded-2xl p-8 max-w-3xl mx-auto text-center space-y-4 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-primary">
            {t.workflow.ctaTitle}
          </h3>
          <p className="text-sm text-secondary max-w-xl mx-auto">
            {t.workflow.ctaDesc}
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-base py-3.5 px-8 shadow-xl inline-flex items-center gap-2 hover:scale-105 transition-transform font-bold"
            >
              <MessageSquare className="w-6 h-6" />
              <span>{t.buttons.sendListWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
