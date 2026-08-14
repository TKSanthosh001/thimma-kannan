import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { materialCategories, materialsData } from '../config/materials';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Search, MessageSquare, Tag, CheckCircle2, Eye } from 'lucide-react';

export const MaterialsSection = ({ onSelectMaterial }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredMaterials = useMemo(() => {
    return materialsData.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const nameText = item.name[lang].toLowerCase();
      const descText = item.desc[lang].toLowerCase();
      const queryText = searchQuery.toLowerCase().trim();
      const matchQuery = !queryText || nameText.includes(queryText) || descText.includes(queryText);
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery, lang]);

  const displayedMaterials = showAll ? filteredMaterials : filteredMaterials.slice(0, 6);

  return (
    <section id="materials" className="py-20 md:py-28 bg-main transition-colors border-b border-color">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron block">
            {lang === 'ta' ? 'பொருட்கள் பட்டியல்' : 'Catalogue & Sourcing'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-primary">
            {t.catalog.title}
          </h2>
          <p className="text-base text-secondary">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {materialCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-maroon text-gold shadow-md'
                    : 'bg-card border border-color text-secondary hover:border-saffron'
                }`}
              >
                {cat.name[lang]}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(true);
              }}
              placeholder={t.buttons.searchPlaceholder}
              className="form-input pl-10 text-xs py-3"
            />
          </div>
        </div>

        {/* Material Items Grid */}
        {displayedMaterials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMaterials.map((item) => {
              const name = item.name[lang];
              const desc = item.desc[lang];

              return (
                <div 
                  key={item.id} 
                  className="bg-card rounded-2xl p-5 flex flex-col justify-between border border-color hover:border-saffron shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-saffron bg-amber-500/10 px-2.5 py-0.5 rounded-full inline-block">
                      {lang === 'ta' ? 'பூஜை சாமான்கள்' : 'Pooja Essential'}
                    </span>

                    <h3 className="text-lg font-bold font-heading text-primary">
                      {name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed line-clamp-2">
                      {desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-color">
                    <a
                      href={getWhatsAppUrl(item.whatsappMessage[lang])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-xs transition-all w-full justify-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{lang === 'ta' ? 'WhatsApp-ல் வினவ' : 'Enquire on WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-2xl border border-color">
            <p className="text-secondary text-base">{t.catalog.noResults}</p>
          </div>
        )}

        {/* Expand / View All Button */}
        {!showAll && filteredMaterials.length > 6 && (
          <div className="text-center pt-6">
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-primary text-sm py-3.5 px-8 font-bold"
            >
              <span>{lang === 'ta' ? 'மேலும் பொருட்கள் பார்க்க →' : 'View More Materials →'}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
