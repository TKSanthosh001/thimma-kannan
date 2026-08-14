import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Quote, 
  Award, 
  Sparkles, 
  HeartHandshake,
  Star
} from 'lucide-react';

export const AuthenticityGuaranteeSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="trust-authenticity" className="py-16 bg-gradient-to-b from-white via-amber-50/40 to-orange-50/30 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span>{lang === 'ta' ? '100% பாரம்பரிய தூய்மை உத்தரவாதம்' : '100% Authentic Devotional Guarantee'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'ta' ? (
              <>ஏன் மதுரை குடும்பங்கள் எங்களை <span className="text-amber-600 underline decoration-amber-300 underline-offset-8">100% நம்புகிறார்கள்?</span></>
            ) : (
              <>Why Madurai Families Trust <span className="text-amber-600 underline decoration-amber-300 underline-offset-8">Thimma Kannan</span> 100%</>
            )}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === 'ta'
              ? 'மதுரையில் கடை கடையாக அலைந்து டென்ஷன் ஆக வேண்டிய அவசியமில்லை. சந்தை விலைக்கு ஏற்ற நியாயமான விலையில், ஹோம நேரத்திற்கு முன்பே துல்லியமான விநியோகம்!'
              : 'No more running between multiple shops in Madurai! We deliver 100% accurate, priest-approved homam materials on time at fair, affordable market rates.'}
          </p>
        </div>

        {/* 4 Purity Guarantees Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: '01',
              title: { ta: 'துல்லியமான நேரத்திற்கு விநியோகம்', en: 'On-Time Delivery Guarantee' },
              desc: { 
                ta: 'பூஜை அல்லது ஹோமம் தொடங்கும் நேரத்திற்கு முன்பே மதுரை முழுவதும் உங்கள் முகவரிக்கு வந்து சேரும்.',
                en: 'Punctual delivery across Madurai well before your ceremony start time.' 
              }
            },
            {
              step: '02',
              title: { ta: 'நியாயமான சந்தை விலை', en: 'Reasonable Market Prices' },
              desc: { 
                ta: 'சந்தை விலைக்கு ஏற்ற நியாயமான, வெளிப்படையான கட்டணம். அதிகப்படியான தொகைகள் எதுவுமில்லை.',
                en: 'Fair, transparent pricing matched to everyday market rates without hidden costs.' 
              }
            },
            {
              step: '03',
              title: { ta: 'அலைச்சல் இல்லை, டென்ஷன் இல்லை', en: 'Zero Hassle & No Stress' },
              desc: { 
                ta: 'வெயிலில் கடை கடையாக அலைய வேண்டாம். வாத்தியார் பட்டியலை WhatsApp செய்யுங்கள், மீதியை நாங்கள் பார்த்துக்கொள்கிறோம்.',
                en: 'No running around shops in the heat. Just WhatsApp your priest list—we handle the rest.' 
              }
            },
            {
              step: '04',
              title: { ta: 'மதுரை தெற்கு வாசல் நேரில் சரிபார்ப்பு', en: 'South Gate Madurai Store Inspection' },
              desc: { 
                ta: 'எங்கள் தெற்கு வாசல் கடையில் நேரில் வந்தும் சரிபார்க்கலாம் அல்லது வீட்டிற்லேயே சரிபார்த்த பின் கட்டணம் செலுத்தலாம்.',
                en: 'Inspect items directly at our South Gate Madurai store or verify at doorstep before payment.' 
              }
            }
          ].map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/80 hover:shadow-xl transition-all relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="text-4xl font-black text-amber-100 group-hover:text-amber-200 transition-colors absolute top-4 right-4 pointer-events-none">
                {card.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {card.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Priest & Customer Endorsement Box */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-amber-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Quote */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ta' ? 'மதுரை தெற்கு வாசல் பாரம்பரிய சேவை' : 'South Gate Madurai Traditional Service'}</span>
              </div>

              <Quote className="w-10 h-10 text-amber-400/30" />

              <blockquote className="text-base sm:text-xl font-medium italic text-amber-100 leading-relaxed">
                {lang === 'ta'
                  ? '“மதுரை தெற்கு வாசல் திம்மா கண்ணன் கடையில் நான் கொடுக்கும் ஹோமப் பட்டியலின் ஒவ்வொரு பொருளும் மிகத் தூய்மையாகவும், நேரத்திற்கு முன்பே நியாயமான சந்தை விலையில் பேக் செய்யப்படுகிறது. அலைச்சல் இன்றி மதுரை மக்களுக்கு ஏற்ற சிறந்த சேவை!”'
                  : '“Every homam material list I prescribe is matched line-by-line with absolute purity, fair market pricing, and punctual delivery by Thimma Kannan at South Gate, Madurai. Zero hassle for families!”'}
              </blockquote>

              <div>
                <div className="font-bold text-amber-300 text-sm sm:text-base">
                  {lang === 'ta' ? 'சுப்ரமண்ய சாஸ்திரிகள் (வேத வாத்தியார்)' : 'Subramanya Sastrigal (Vedic Purohit)'}
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'ta' ? 'தெற்கு வாசல், மதுரை' : 'South Gate, Madurai'}
                </div>
              </div>
            </div>

            {/* Right: Store Verification Badge */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3 border border-emerald-400/40">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-white text-base mb-1">
                {lang === 'ta' ? 'நேரடி ஸ்டோர் முகவரி' : 'Visit Our Physical Store'}
              </h4>
              <p className="text-xs text-amber-100 mb-4 leading-relaxed">
                {businessConfig.address[lang]}
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href={businessConfig.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lang === 'ta' ? 'Google Maps-ல் பார்க்க' : 'Open in Google Maps'}</span>
                </a>
                <a 
                  href={`tel:${businessConfig.phone}`}
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{businessConfig.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
