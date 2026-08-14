import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Tag, Award, Truck, CheckCircle2 } from 'lucide-react';

export const TrustBadgesBar = () => {
  const { lang } = useLanguage();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: { ta: '100% தூய்மையான பொருட்கள்', en: '100% Pure Organic Quality' },
      desc: { ta: 'சுத்தமான பசு நெய் & இயற்கை மூலிகைகள்', en: 'Pure cow ghee & natural herbal woods' }
    },
    {
      icon: Tag,
      title: { ta: 'தனித்தனி பெயர் சீட்டு லேபிள்', en: 'Itemized Labeled Packing' },
      desc: { ta: 'தமிழ் & ஆங்கிலத்தில் தெளிவான பெயர்கள்', en: 'Clear Tamil & English labels on every pack' }
    },
    {
      icon: Award,
      title: { ta: 'வேத விற்பன்னர்கள் சான்றளித்தது', en: 'Prescribed by Vedic Priests' },
      desc: { ta: 'வாத்தியார் பட்டியல் படி 100% துல்லியம்', en: 'Strictly aligned with authentic Purohit lists' }
    },
    {
      icon: Truck,
      title: { ta: 'பொருட்களை பார்த்து பணம்', en: 'Pay After Inspection' },
      desc: { ta: 'சரிபார்த்த பின் செலுத்துங்கள் / கடையில் பெறலாம்', en: 'Verify every item before payment' }
    }
  ];

  return (
    <section className="bg-gradient-to-r from-amber-900 via-slate-900 to-amber-950 text-white py-6 border-y border-amber-500/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 border border-amber-500/30">
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-200 flex items-center gap-1.5">
                    <span>{item.title[lang]}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
