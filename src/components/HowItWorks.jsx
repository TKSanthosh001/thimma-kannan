import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Send, CheckCircle2, Package, ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const { lang } = useLanguage();

  const steps = [
    {
      num: '01',
      title: lang === 'ta' ? 'பட்டியலைப் பெறுங்கள்' : 'Get Your List',
      desc: lang === 'ta'
        ? 'Iyer / Priest கொடுத்த பொருட்கள் பட்டியலைத் தயாராக வைத்திருங்கள்.'
        : 'Keep the material list provided by your Iyer or priest ready.',
      icon: <FileText className="w-6 h-6 text-saffron" />
    },
    {
      num: '02',
      title: lang === 'ta' ? 'WhatsApp-ல் அனுப்புங்கள்' : 'Send It to Us',
      desc: lang === 'ta'
        ? 'உங்கள் பட்டியலை எங்களுக்கு WhatsApp மூலம் அனுப்புங்கள்.'
        : 'Send your list to us via WhatsApp.',
      icon: <Send className="w-6 h-6 text-maroon dark:text-gold" />
    },
    {
      num: '03',
      title: lang === 'ta' ? 'நாங்கள் ஏற்பாடு செய்கிறோம்' : 'We Arrange the Materials',
      desc: lang === 'ta'
        ? 'பட்டியலில் உள்ள தேவையான பொருட்களை நாங்கள் ஏற்பாடு செய்து தொகுக்கிறோம்.'
        : 'We source/arrange the required materials from your list and pack them together.',
      icon: <CheckCircle2 className="w-6 h-6 text-saffron" />
    },
    {
      num: '04',
      title: lang === 'ta' ? 'பெற்றுக்கொள்ளுங்கள்' : 'Receive or Collect',
      desc: lang === 'ta'
        ? 'Delivery மூலம் பெற்றுக்கொள்ளலாம் அல்லது கடையில் வந்து பெற்றுக்கொள்ளலாம்.'
        : 'Get the prepared materials delivered or collect them from the shop.',
      icon: <Package className="w-6 h-6 text-maroon dark:text-gold" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-secondary transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'செயல்முறை' : 'Simple Steps'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'எப்படி செயல்படுகிறது?' : 'How It Works'}
          </h2>
          <p className="text-sm md:text-base text-secondary">
            {lang === 'ta'
              ? 'உங்கள் பட்டியலை எங்களுக்கு அனுப்புங்கள். மற்றவை எங்கள் பொறுப்பு.'
              : 'Send us your list. We take care of sourcing, packing, and delivery.'}
          </p>
        </div>

        {/* Timeline with Desktop Connecting Line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-saffron/40 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card border border-color rounded-2xl p-6 space-y-3 shadow-sm relative group hover:border-saffron transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-tertiary flex items-center justify-center border border-color">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-heading text-saffron">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-primary leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-secondary leading-relaxed">
                  {step.desc}
                </p>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 bg-main p-1 rounded-full border border-saffron text-saffron">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
