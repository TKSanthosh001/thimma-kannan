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

        {/* Horizontal Visual Timeline Journey with Connecting Line */}
        <div className="relative py-4">
          
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-saffron via-maroon to-saffron -translate-y-1/2 z-0 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {t.workflow.steps.map((step, idx) => (
              <div key={idx} className="bg-card border-2 border-saffron/30 rounded-3xl p-8 space-y-4 shadow-md relative group hover:border-saffron transition-all">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary flex items-center justify-center border border-color shadow-sm group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-4xl font-extrabold font-heading text-saffron">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold font-heading text-primary pt-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-main p-1.5 rounded-full border border-saffron text-saffron shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center pt-4">
          <a
            href={getWhatsAppUrl(getGeneralWhatsAppMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-base md:text-lg py-4 px-9 font-extrabold shadow-xl inline-flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <MessageSquare className="w-6 h-6" />
            <span>{t.buttons.sendListWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
