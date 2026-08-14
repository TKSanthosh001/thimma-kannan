import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: {
        ta: 'எந்த வகையான நிகழ்ச்சிகளுக்கான பொருட்களை ஏற்பாடு செய்து தருகிறீர்கள்?',
        en: 'What types of ceremony material lists do you fulfill?'
      },
      a: {
        ta: 'பூஜை, ஹோமம், கிரகப்பிரவேசம், திருமணம், நிச்சயதார்த்தம் போன்ற சுப நிகழ்ச்சிகளுக்கான பொருட்களுடன், பாரம்பரிய குடும்பச் சடங்குகள் மற்றும் இறுதி சடங்குகளுக்குத் தேவையான பொருட்களையும் உங்கள் பட்டியலின்படி ஏற்பாடு செய்து தருகிறோம்.',
        en: 'We arrange material lists for auspicious functions such as Pooja, Homam, Gruhapravesam, Wedding, and Engagement, as well as traditional family rituals and final rites per your priest list.'
      }
    },
    {
      q: {
        ta: 'Iyer / Priest கொடுத்த பட்டியலை WhatsApp-ல் அனுப்பலாமா?',
        en: 'Can I send the handwritten list given by my Iyer or priest on WhatsApp?'
      },
      a: {
        ta: 'ஆம்! உங்கள் Iyer அல்லது சாஸ்திரிகள் கொடுத்த காகித பட்டியலை போட்டோ எடுத்து எங்கள் WhatsApp எண்ணிற்கு (90434 61987) அனுப்பலாம். நாங்கள் அதை சரிபார்த்து உங்களுக்கு விபரங்களை தெரிவிக்கிறோம்.',
        en: 'Yes! Simply take a photo of the handwritten material list given by your priest and send it to our WhatsApp number (+91 90434 61987). We will check the list and guide you.'
      }
    },
    {
      q: {
        ta: 'பட்டியலில் உள்ள அனைத்து பொருட்களையும் நீங்கள் ஏற்பாடு செய்து தருவீர்களா?',
        en: 'Will you source and arrange all items listed by our priest?'
      },
      a: {
        ta: 'ஆம். உங்கள் பட்டியலின்படி தேவையான அனைத்து பூஜை, ஹோமம் மற்றும் சடங்கு பொருட்களையும் தரமாக ஏற்பாடு செய்து, ஒரே தொகுப்பாக தயார் செய்து தருவோம்.',
        en: 'Yes. We arrange all required pooja, homam, and ceremony items strictly according to your priest list, pack everything neatly together, and have it ready.'
      }
    },
    {
      q: {
        ta: 'Delivery வசதி உள்ளதா அல்லது கடையில் வந்து பெற்றுக்கொள்ளலாமா?',
        en: 'Do you offer delivery or store pickup?'
      },
      a: {
        ta: 'இரண்டு வசதிகளும் உண்டு! உங்கள் தேவைக்கேற்ப பொருட்களை Delivery மூலம் பெற்றுக் கொள்ளலாம் அல்லது மதுரையில் உள்ள எங்கள் கடைக்கு நேரடியாக வந்து பெற்றுக்கொள்ளலாம்.',
        en: 'Both options are available! You can choose to have your prepared ceremony materials delivered to your location or pick them up directly from our store in South Gate, Madurai.'
      }
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-main transition-colors border-b border-color">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-maroon dark:text-gold">
            {lang === 'ta' ? 'சந்தேகங்களும் விளக்கங்களும்' : 'Questions & Answers'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const question = faq.q[lang];
            const answer = faq.a[lang];

            return (
              <div
                key={idx}
                className="bg-card border border-color rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-primary hover:text-maroon dark:hover:text-gold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-saffron shrink-0" />
                    <span>{question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-saffron' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-0 text-sm md:text-base text-secondary leading-relaxed font-medium border-t border-color/50 animate-fadeIn">
                    <div className="pt-4">
                      {answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
