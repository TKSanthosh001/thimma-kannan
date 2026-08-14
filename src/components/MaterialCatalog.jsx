import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { materialCategories, materialsData } from '../config/materials';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Search, MessageSquare, Tag, CheckCircle2 } from 'lucide-react';

export const MaterialCatalog = ({ limit }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const displayedList = limit ? filteredMaterials.slice(0, limit) : filteredMaterials;

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {materialCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-maroon dark:bg-gold text-white dark:text-gray-900 shadow-md'
                  : 'bg-card border border-color text-secondary hover:border-saffron'
              }`}
            >
              {cat.name[lang]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.buttons.searchPlaceholder}
            className="form-input pl-9 text-xs"
          />
        </div>
      </div>

      {/* Material Grid */}
      {displayedList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedList.map((item) => {
            const name = item.name[lang];
            const desc = item.desc[lang];
            const priceText = item.price ? `₹${item.price}` : t.buttons.contactUsPrice;

            return (
              <div key={item.id} className="card flex flex-col justify-between hover:border-saffron">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      {lang === 'ta' ? 'இருப்பில் உள்ளது' : 'In Stock'}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Tag className="w-3 h-3 text-saffron" />
                      {priceText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-primary mb-2 line-clamp-1">
                    {name}
                  </h3>
                  
                  <p className="text-xs text-secondary mb-4 leading-relaxed line-clamp-2">
                    {desc}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(item.whatsappMessage[lang])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp text-xs py-2 w-full text-center mt-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.buttons.enquireWhatsApp}</span>
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-xl border border-color">
          <p className="text-secondary text-sm">{t.catalog.noResults}</p>
        </div>
      )}
    </div>
  );
};
