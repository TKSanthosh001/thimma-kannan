import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/business';
import { 
  FileText, 
  Send, 
  CheckCircle, 
  Flame, 
  Home, 
  Sparkles, 
  Upload, 
  Search, 
  Download, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const homamListsData = [
  {
    id: 'ganapathi-homam',
    title: {
      ta: 'கணபதி ஹோம பொருட்கள் பட்டியல்',
      en: 'Ganapathi Homam Samagri List'
    },
    subtitle: {
      ta: 'தொடக்க விழா, பிறந்தநாள் & சுபகாரியங்களுக்கான கணபதி ஹோம பொருட்கள் பட்டியல்',
      en: 'Standard items list prescribed by Tamil Iyers & Vedic Priests for Ganapathi Homam'
    },
    badge: 'Popular / அதிக பயன்பாடு',
    icon: Flame,
    items: [
      { name: { ta: 'ஹோம விறகுகள் (சமித்து - அரசு, ஆல, மா, கருங்காலி)', en: 'Homam Wood / Samithu Sticks (Banyan, Mango, Peepal)' }, qty: '1 Set' },
      { name: { ta: 'சுத்தமான பசு நெய் (Pure Cow Ghee)', en: 'Pure Cow Ghee (நாட்டுப்பசு நெய்)' }, qty: '1 kg / 500g' },
      { name: { ta: 'நவதானியம் (9 Grains Set)', en: 'Navadhanyam (9 Sacred Grains Package)' }, qty: '1 Set' },
      { name: { ta: 'தேங்காய் (Coconut)', en: 'Fresh Coconuts' }, qty: '5 Nos' },
      { name: { ta: 'வெற்றிலை & சீவல் பாக்கு (Betel Leaves & Nuts)', en: 'Betel Leaves & Betel Nuts' }, qty: '50 Leaves + 100g' },
      { name: { ta: 'மஞ்சள் தூள், குங்குமம், சந்தனம்', en: 'Turmeric Powder, Kumkum & Sandalwood Paste' }, qty: '1 Pack Set' },
      { name: { ta: 'கற்பூரம், சாம்பிராணி, ஊதுபத்தி', en: 'Camphor, Natural Sambrani & Incense Sticks' }, qty: '1 Box Set' },
      { name: { ta: 'அவல், பொரி, நெற்பொரி (Puffed Rice & Pori)', en: 'Puffed Rice (Aval & Pori)' }, qty: '500g Each' },
      { name: { ta: 'மோதகம் / கொழுக்கட்டை நெய் நைவேத்திய பொருட்கள்', en: 'Modhak & Prasadam Essentials' }, qty: '1 Kit' },
      { name: { ta: 'உலர் திராட்சை, முந்திரி, ஏலக்காய், கிராம்பு, தேன்', en: 'Dry Fruits, Cardamom, Clove & Pure Honey' }, qty: '1 Kit' },
      { name: { ta: 'ஹோம குண்டம் சாம்பிராணி திரவியம் (Purna Ahuti Set)', en: 'Purna Ahuti Silk Cloth & Herbal Mix' }, qty: '1 Kit' },
      { name: { ta: 'அரிசி, பருப்பு, கதம்ப பூ மாலை', en: 'Raw Rice, Toor Dal & Fresh Flower Garlands' }, qty: 'As Per List' }
    ]
  },
  {
    id: 'grahapravesam-homam',
    title: {
      ta: 'கிரகப்பிரவேச & வாஸ்து ஹோம பட்டியல்',
      en: 'Gruhapravesam & Vastu Homam List'
    },
    subtitle: {
      ta: 'புதுமனை புகுவிழா, வாஸ்து சாந்தி & லக்ஷ்மி ஹோமத்திற்கான முழு பட்டியல்',
      en: 'Complete material checklist for Housewarming, Vastu Shanthi & Lakshmi Pooja'
    },
    badge: 'Housewarming Special',
    icon: Home,
    items: [
      { name: { ta: 'பூஜா கலசம் செம்பு / பித்தளை & மாவிலை தோரணம்', en: 'Pooja Kalasam Brass Vessel & Fresh Mango Leaves Garland' }, qty: '1 Set' },
      { name: { ta: 'பால் காய்ச்சும் புது பித்தளை பாத்திரம் & மங்கல சாமான்கள்', en: 'New Brass Milk Boiling Pot & Ceremony Trays' }, qty: '1 Set' },
      { name: { ta: 'வாஸ்து ஹோம சமித்து & நவ சமித்து கட்', en: 'Vastu Homam Wooden Samithu Set' }, qty: '1 Pack' },
      { name: { ta: 'நவரத்தினங்கள் & பஞ்ச உலோகம் கலச வைப்பு பொருட்கள்', en: 'Navarathinam Stones & Five Metals Set for Kalasam' }, qty: '1 Box' },
      { name: { ta: 'பசு மாடு கோமாதா பூஜை அகர்பத்தி & நெய் தீபம்', en: 'Gho Pooja Essentials Set' }, qty: '1 Pack' },
      { name: { ta: 'தீப எண்ணெய், பருத்தி திரி & அகல் விளக்குகள்', en: 'Pooja Lamp Oil, Cotton Wicks & Clay Lamps' }, qty: '2 Litres + 12 Lamps' },
      { name: { ta: 'கணபதி, லக்ஷ்மி & நவக்கிரக ஹோம மூலிகை திரவியங்கள்', en: 'Herbal Homam Powders ( மூலிகை ஹோம திரவியம் )' }, qty: '1 kg Pack' },
      { name: { ta: 'தாம்பூல பைகள் & பிரசாத பைகள்', en: 'Return Gift Tamboolam Bags' }, qty: 'Custom Qty' }
    ]
  },
  {
    id: 'navagraha-sudarshana',
    title: {
      ta: 'நவக்கிரக & சுதர்சன ஹோம பொருட்கள்',
      en: 'Navagraha & Sudarshana Homam List'
    },
    subtitle: {
      ta: 'ஆயுள் விருத்தி, தோஷ நிவர்த்தி & சுதர்சன ஹோம சாமான்கள்',
      en: 'Material list for Dosha Nivarana, Ayush Homam & Sudarshana Fire Rituals'
    },
    badge: 'Vedic Rituals',
    icon: Sparkles,
    items: [
      { name: { ta: '9 கிரகங்களுக்கான 9 வண்ண வஸ்திரங்கள் (Navagraha Cloths)', en: '9 Color Silk Cloth Pieces for Navagrahas' }, qty: '9 Pieces' },
      { name: { ta: '9 கிரக தானியங்கள் தனித்தனியாக (Individual Grain Packs)', en: '9 Grains Packed Separately with Labels' }, qty: '9 Packs' },
      { name: { ta: 'சுதர்சன ஹோம நரசிம்மர் மூலிகை சமித்து கட்', en: 'Sudarshana Homam Herbal Sticks Set' }, qty: '1 Kit' },
      { name: { ta: 'வெள்ளை எள், கடுகு, கருப்பு எள், நெய்', en: 'White & Black Sesame, Mustard Seeds & Ghee' }, qty: '500g Set' },
      { name: { ta: 'பட்டு பூர்ணாஹுதி வஸ்திரம் & பச்சோலை', en: 'Silk Purna Ahuti Cloth & Sacred Leaves' }, qty: '1 Set' }
    ]
  }
];

export const IyerHomamListResolver = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('ganapathi-homam');
  const [searchQuery, setSearchQuery] = useState('');
  const [customText, setCustomText] = useState('');

  const currentList = homamListsData.find(l => l.id === activeTab) || homamListsData[0];

  const filteredItems = currentList.items.filter(item => 
    item.name.en.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.name.ta.includes(searchQuery)
  );

  const handleSendListWhatsApp = (listObj) => {
    const titleText = listObj.title[lang];
    const itemsText = listObj.items.map((it, idx) => `${idx + 1}. ${it.name[lang]} (${it.qty})`).join('%0A');
    const msg = `வணக்கம் திம்மா கண்ணன்! நான் உங்கள் தளத்தில் உள்ள "${titleText}" தேவை என விரும்புகிறேன்:%0A%0A${itemsText}%0A%0Aதயவுசெய்து இதன் விலை மற்றும் விநியோக விபரங்களை கூறவும்.`;
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${msg}`, '_blank');
  };

  const handleSendCustomListWhatsApp = () => {
    if (!customText.trim()) {
      alert(lang === 'ta' ? 'தயவுசெய்து உங்கள் வாத்தியார் பட்டியலை டைப் செய்யவும் அல்லது ஒட்டவும்.' : 'Please enter or paste your list text.');
      return;
    }
    const msg = `வணக்கம் திம்மா கண்ணன்! என்னிடம் ஐயர் / வாத்தியார் கொடுத்த பட்டியல் உள்ளது:%0A%0A${encodeURIComponent(customText)}%0A%0Aஇதற்கான அனைத்து பொருட்களையும் பேக் செய்து தரவும்.`;
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="iyer-homam-list" className="py-16 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-white relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>{lang === 'ta' ? 'வாத்தியார் / ஐயர் பட்டியல் சிறப்புச் சேவை' : 'Authentic Iyer List & Homam Samagri Hub'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {lang === 'ta' ? (
              <>ஹோம & பூஜா பொருட்கள் <span className="text-amber-600 underline decoration-amber-300 underline-offset-8">முழுமையான பட்டியல்</span></>
            ) : (
              <>Complete <span className="text-amber-600 underline decoration-amber-300 underline-offset-8">Iyer & Homam Samagri</span> Lists</>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'ta' 
              ? 'உங்கள் ஐயர் அல்லது வாத்தியார் கொடுத்த பட்டியலை 그대로 எடுத்து வாருங்கள். அல்லது கீழே உள்ள எங்களின் சரிபார்க்கப்பட்ட ஹோம பட்டியலிலிருந்து ஒரே கிளிக்கில் WhatsApp-ல் ஆர்டர் செய்யுங்கள்!'
              : 'View verified standard checklists for all Tamil homams or simply send your handwritten Iyer list photo/text via WhatsApp for 100% accurate packing.'}
          </p>
        </div>

        {/* Upload Custom List Hero Box */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
                <Upload className="w-3.5 h-3.5" />
                {lang === 'ta' ? 'நேரடி பட்டியல் அனுப்புதல்' : 'Custom List Order'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                {lang === 'ta' ? 'உங்களிடம் ஐயர் கொடுத்த பட்டியல் உள்ளதா?' : 'Have a handwritten list from your Purohit/Iyer?'}
              </h3>
              <p className="text-amber-100 text-sm sm:text-base leading-relaxed mb-4">
                {lang === 'ta'
                  ? 'பட்டியலை போட்டோ எடுத்து அல்லது கீழே டைப் செய்து எங்களுக்கு WhatsApp செய்யுங்கள். ஒவ்வொரு பொருளையும் சரியான அளவில், பெயர் சீட்டுடன் பேக் செய்து தருவோம்!'
                  : 'Simply snap a picture or type the item names below. We match every single item, label them individually, and deliver to your doorstep.'}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-amber-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'ta' ? '100% தூய்மையான பொருட்கள்' : '100% Pure Organic Materials'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'ta' ? 'தனித்தனி லேபிள் பேக்கிங்' : 'Itemized Labeled Packing'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <label className="block text-xs font-semibold text-amber-100 mb-2">
                {lang === 'ta' ? 'பட்டியல் வரிகளை கீழே டைப்/ஒட்டவும்:' : 'Paste your list text here:'}
              </label>
              <textarea
                rows={3}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={lang === 'ta' ? 'எ.கா: சமித்து - 1 செட், பசு நெய் - 1 கிலோ, நவதானியம்...' : 'e.g. Samithu 1 set, Ghee 1kg, Navadhanyam 1 pack...'}
                className="w-full text-slate-900 bg-white rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400 resize-none shadow-inner"
              />
              <button
                onClick={handleSendCustomListWhatsApp}
                className="w-full mt-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'ta' ? 'WhatsApp-ல் பட்டியல் அனுப்பு' : 'Send List on WhatsApp Now'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Standard Homam Lists */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {homamListsData.map(list => {
            const Icon = list.icon;
            const isActive = activeTab === list.id;
            return (
              <button
                key={list.id}
                onClick={() => setActiveTab(list.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-102'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                <span>{list.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Homam List Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
          
          {/* Top Bar inside Card */}
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-6 border-b border-amber-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full mb-1">
                {currentList.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentList.title[lang]}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                {currentList.subtitle[lang]}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'ta' ? 'பொருளைத் தேடுங்கள்...' : 'Search items...'}
                  className="pl-9 pr-3 py-1.5 bg-white text-slate-800 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 w-40 sm:w-56"
                />
              </div>

              {/* Order Full List Button */}
              <button
                onClick={() => handleSendListWhatsApp(currentList)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'ta' ? 'இந்த பட்டியலை ஆர்டர் செய்க' : 'Order This List'}</span>
              </button>
            </div>
          </div>

          {/* Items Table / Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-amber-50/40 hover:bg-amber-100/50 border border-amber-100/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">
                        {item.name[lang]}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {lang === 'ta' ? item.name.en : item.name.ta}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-amber-800 bg-amber-100/90 px-2 py-1 rounded-md shrink-0">
                    {item.qty}
                  </span>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-8 text-slate-500 text-sm">
                {lang === 'ta' ? 'தேடலுக்குரிய பொருட்கள் எதுவும் கிடைக்கவில்லை.' : 'No matching items found.'}
              </div>
            )}
          </div>

          {/* Bottom Card Footer Banner */}
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>
                {lang === 'ta' 
                  ? 'அனைத்து பொருட்களும் சுத்தம் செய்யப்பட்டு, சுப தினத்தில் புரோகிதர் அறிவுரைப்படி பேக் செய்யப்படும்.'
                  : 'All homam items are cleaned and packed strictly as prescribed by Vedic Purohits.'}
              </span>
            </div>
            <a 
              href={`https://wa.me/${businessConfig.whatsapp}?text=வணக்கம், எனக்கு ${currentList.title.ta} PDF பட்டியல் அனுப்பவும்.`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-amber-700 hover:text-amber-800 underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'ta' ? 'WhatsApp-ல் PDF பட்டியலை பெறுக' : 'Get PDF List on WhatsApp'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
