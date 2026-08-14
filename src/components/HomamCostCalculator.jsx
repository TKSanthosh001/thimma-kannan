import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { Calculator, Check, Plus, Send, Sparkles, ShieldCheck, ShoppingBag } from 'lucide-react';

const RITUAL_TYPES = [
  {
    id: 'ganapathi',
    title: { ta: 'கணபதி ஹோமம்', en: 'Ganapathi Homam' },
    basePrice: { essential: 1499, standard: 2499, grand: 3999 },
    itemsCount: { essential: '20+ Items', standard: '30+ Items', grand: '45+ Items' }
  },
  {
    id: 'gruhapravesam',
    title: { ta: 'கிரகப்பிரவேசம் & வாஸ்து', en: 'Gruhapravesam & Vastu' },
    basePrice: { essential: 2499, standard: 3999, grand: 5999 },
    itemsCount: { essential: '30+ Items', standard: '45+ Items', grand: '60+ Items' }
  },
  {
    id: 'navagraha',
    title: { ta: 'நவக்கிரக & சுதர்சன ஹோமம்', en: 'Navagraha & Sudarshana' },
    basePrice: { essential: 1999, standard: 3299, grand: 4999 },
    itemsCount: { essential: '25+ Items', standard: '35+ Items', grand: '50+ Items' }
  },
  {
    id: 'wedding',
    title: { ta: 'திருமண மங்கள சடங்குகள்', en: 'Wedding Ceremony Set' },
    basePrice: { essential: 2999, standard: 4999, grand: 7999 },
    itemsCount: { essential: '35+ Items', standard: '55+ Items', grand: '80+ Items' }
  },
  {
    id: 'apara',
    title: { ta: 'அபர காரியங்கள் (Rituals)', en: 'Apara Karyam Rituals' },
    basePrice: { essential: 1799, standard: 2799, grand: 4299 },
    itemsCount: { essential: '20+ Items', standard: '30+ Items', grand: '40+ Items' }
  }
];

const ADDONS = [
  {
    id: 'milk_pot',
    title: { ta: 'புது பித்தளை பால் காய்ச்சும் பாத்திரம்', en: 'New Brass Milk Boiling Vessel' },
    price: 650
  },
  {
    id: 'tamboolam_bags',
    title: { ta: 'தாம்பூல பைகள் (25 எண்கள்)', en: 'Tamboolam Return Gift Bags (25 Pcs)' },
    price: 750
  },
  {
    id: 'flower_garland',
    title: { ta: 'சுத்தமான கதம்ப பூ மாலை செட்', en: 'Fresh Flower Garlands Set' },
    price: 500
  },
  {
    id: 'extra_ghee',
    title: { ta: 'கூடுதல் 1 கிலோ சுத்தமான பசு நெய்', en: 'Extra 1kg Pure Cow Ghee' },
    price: 650
  }
];

export const HomamCostCalculator = () => {
  const { lang } = useLanguage();
  const [selectedRitual, setSelectedRitual] = useState('ganapathi');
  const [tier, setTier] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['milk_pot']);

  const currentRitual = RITUAL_TYPES.find(r => r.id === selectedRitual) || RITUAL_TYPES[0];
  const baseCost = currentRitual.basePrice[tier];

  const addonsCost = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalEstimate = baseCost + addonsCost;

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const handleSendEstimateWhatsApp = () => {
    const ritualName = currentRitual.title[lang];
    const tierName = tier === 'essential' ? 'Essential (அடிப்படை)' : tier === 'standard' ? 'Standard (பிரதான)' : 'Grand (நிறைவு)';
    const addonNames = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.title[lang])
      .filter(Boolean)
      .join(', ');

    const msg = `வணக்கம் திம்மா கண்ணன்! நான் உங்கள் தளத்தில் ஹோம செலவு கணக்கீடு செய்துள்ளேன்:%0A%0A• நிகழ்வு: ${ritualName}%0A• தொகுப்பு: ${tierName}%0A• கூடுதல் பொருட்கள்: ${addonNames || 'எதுவுமில்லை'}%0A• தோராய மதிப்பீடு: ₹${totalEstimate.toLocaleString('en-IN')}%0A%0Aதயவுசெய்து இந்த ஆர்டரை உறுதி செய்து தருமாறு கேட்டுக்கொள்கிறேன்.`;
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="cost-calculator" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ta' ? 'உடனடி செலவு கணக்கீடு' : 'Instant Homam Budget Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {lang === 'ta' ? (
              <>உங்கள் ஹோம பொருட்களுக்கான <span className="text-amber-400">தோராய மதிப்பீடு</span></>
            ) : (
              <>Calculate Your <span className="text-amber-400">Homam Material Budget</span></>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ta'
              ? 'தேவையான நிகழ்வு, தொகுப்பு வகை மற்றும் கூடுதல் பொருட்களைத் தேர்ந்தெடுத்து ஒரே வினாடியில் பட்ஜெட் அறிந்து கொள்ளுங்கள்!'
              : 'Select your ceremony type, bundle tier, and optional add-ons to get a real-time instant estimate with WhatsApp ordering.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Ritual Selection */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">1</span>
                <span>{lang === 'ta' ? 'நிகழ்வைத் தேர்ந்தெடுக்கவும் (Select Ceremony)' : 'Select Ceremony Type'}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {RITUAL_TYPES.map(r => {
                  const isSelected = selectedRitual === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRitual(r.id)}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 font-bold'
                          : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                      }`}
                    >
                      {r.title[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Package Tier */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">2</span>
                <span>{lang === 'ta' ? 'தொகுப்பு அளவைத் தேர்ந்தெடுக்கவும் (Package Tier)' : 'Choose Package Tier'}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { key: 'essential', label: { ta: 'அடிப்படை (Essential)', en: 'Essential' } },
                  { key: 'standard', label: { ta: 'பிரதான (Standard)', en: 'Standard' } },
                  { key: 'grand', label: { ta: 'நிறைவு (Grand)', en: 'Grand Full Set' } }
                ].map(t => {
                  const isSelected = tier === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => setTier(t.key)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-300 font-bold shadow-md'
                          : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wider font-semibold opacity-90">{t.label[lang]}</div>
                      <div className="text-base font-extrabold mt-1">₹{currentRitual.basePrice[t.key].toLocaleString('en-IN')}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">{currentRitual.itemsCount[t.key]}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-lg">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">3</span>
                <span>{lang === 'ta' ? 'கூடுதல் விருப்பப் பொருட்கள் (Optional Add-ons)' : 'Select Optional Add-ons'}</span>
              </label>
              <div className="space-y-2.5">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-amber-500/15 border-amber-500 text-white'
                          : 'bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-amber-500 border-amber-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{addon.title[lang]}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                        +₹{addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Price Summary Box */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white border border-amber-400/30">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-amber-200 uppercase tracking-widest block">
                    {lang === 'ta' ? 'தோராய செலவு பட்டியல்' : 'Budget Breakdown'}
                  </span>
                  <h3 className="text-xl font-extrabold mt-0.5">{currentRitual.title[lang]}</h3>
                </div>
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>

              <div className="space-y-3 text-sm border-b border-white/20 pb-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-100">{lang === 'ta' ? 'அடிப்படை ஹோம பொருட்கள்' : 'Base Ceremony Kit'}:</span>
                  <span className="font-bold">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-100">{lang === 'ta' ? 'கூடுதல் பொருட்கள் (' + selectedAddons.length + ')' : 'Add-ons (' + selectedAddons.length + ')'}:</span>
                  <span className="font-bold">+₹{addonsCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-amber-200 pt-1">
                  <span>{lang === 'ta' ? 'பேக்கிங் & சரிபார்ப்பு கட்டணம்' : 'Itemized Labeled Packing'}:</span>
                  <span className="font-semibold text-emerald-300">FREE / இலவசம்</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs uppercase font-semibold text-amber-200 tracking-wider mb-1">
                  {lang === 'ta' ? 'மொத்த தோராய தொகை (Est. Total)' : 'Estimated Total Cost'}
                </div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-baseline gap-1">
                  <span>₹{totalEstimate.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-normal text-amber-200">* (Approx)</span>
                </div>
              </div>

              <button
                onClick={handleSendEstimateWhatsApp}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-base cursor-pointer hover:scale-102 active:scale-98"
              >
                <Send className="w-5 h-5" />
                <span>{lang === 'ta' ? 'இந்த கணக்கீட்டை WhatsApp-ல் அனுப்பு' : 'Send Estimate on WhatsApp'}</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-100 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>{lang === 'ta' ? '100% பொருட்கள் உத்தரவாதம் | உடனடி விநியோகம்' : '100% Guaranteed Items & Fast Delivery'}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
