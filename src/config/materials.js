// Material Catalogue Data
export const materialCategories = [
  { id: 'all', name: { ta: 'அனைத்தும்', en: 'All Items' } },
  { id: 'pooja', name: { ta: 'பூஜை பொருட்கள்', en: 'Pooja Materials' } },
  { id: 'homam', name: { ta: 'ஹோம விறகு & சமித்து', en: 'Homam Wood & Samithu' } },
  { id: 'kalasam', name: { ta: 'கலசம் & பித்தளை', en: 'Kalasam & Brass' } },
  { id: 'flowers', name: { ta: 'மலர் தேவைகள்', en: 'Flowers & Garlands' } },
  { id: 'dhoop-oils', name: { ta: 'எண்ணெய் & தூபம்', en: 'Oils & Dhoop' } },
  { id: 'spices-herbs', name: { ta: 'மூலிகை & வாசனை', en: 'Herbs & Spices' } }
];

export const materialsData = [
  {
    id: 'mat-samithu-set',
    category: 'homam',
    name: {
      ta: 'அரசு & ஆல் சமித்து விறகு கட்டு',
      en: 'Peepal & Banyan Samithu Wood Sticks Set'
    },
    desc: {
      ta: 'ஹோமத்திற்கு உகந்த தூய்மையாக உலர்த்தப்பட்ட அரசு, ஆல், அத்தி சமித்து கட்டுகள்.',
      en: 'Dried sacred wood sticks bundle specially selected for traditional homams.'
    },
    availability: true,
    price: null, // Shows "Contact us for price" per requirement
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், அரசு & ஆல் சமித்து விறகு கட்டு விலை / இருப்பை அறிய விரும்புகிறேன்.',
      en: 'Hello Thimma Kannan, I would like to enquire about Peepal & Banyan Samithu Wood Sticks.'
    }
  },
  {
    id: 'mat-kalasam-brass',
    category: 'kalasam',
    name: {
      ta: 'பித்தளை பூஜா கலச சொம்பு',
      en: 'Traditional Brass Kalasam Pot'
    },
    desc: {
      ta: 'கிரகப்பிரவேசம் மற்றும் திருவிழா பூஜைகளுக்குப் பயன்படும் உயர்தர கெட்டிப் பித்தளை கலசம்.',
      en: 'Heavy-duty brass Kalasam pot for Gruhapravesam and festival rituals.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், பித்தளை பூஜா கலச சொம்பு பற்றி விசாரிக்க விரும்புகிறேன்.',
      en: 'Hello Thimma Kannan, I want to enquire about the Brass Kalasam Pot.'
    }
  },
  {
    id: 'mat-navadhanyam-kit',
    category: 'pooja',
    name: {
      ta: '9 வகை நவதானிய பூஜா பேக்',
      en: '9 Grains Navadhanyam Pooja Kit'
    },
    desc: {
      ta: 'நவக்கிரக சாந்தி மற்றும் ஹோமத்திற்குத் தேவையான 9 தூய்மையான தானியங்களின் கலவை.',
      en: 'Clean, sorted set of 9 auspicious grains for Navagraha Homam and poojas.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், நவதானிய பூஜா பேக் தேவையாக உள்ளது.',
      en: 'Hello Thimma Kannan, I would like to order Navadhanyam Pooja Kit.'
    }
  },
  {
    id: 'mat-pure-cow-ghee',
    category: 'homam',
    name: {
      ta: 'சுத்தமான பசு நெய் (ஹோமத்திற்கு)',
      en: 'Pure Cow Ghee for Sacred Homam'
    },
    desc: {
      ta: 'ஹோம குண்டத்தில் அக்னி பகவானுக்கு அர்ப்பணிக்க உகந்த தூய்மையான மாட்டு நெய்.',
      en: 'Pure cow ghee prepared specifically for homam offerings and lamp lighting.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், ஹோமத்திற்கான சுத்தமான பசு நெய் பற்றி விசாரிக்கிறேன்.',
      en: 'Hello Thimma Kannan, enquiring about Pure Cow Ghee for Homam.'
    }
  },
  {
    id: 'mat-dharba-til',
    category: 'pooja',
    name: {
      ta: 'தர்பை புல் & கருப்பு எள் செட்',
      en: 'Dharba Grass & Black Sesame Seeds Set'
    },
    desc: {
      ta: 'பித்ரு தர்ப்பணம் மற்றும் அபர காரியங்களுக்குத் தேவையான சுத்தமான தர்பை & எள்.',
      en: 'Purified Dharba grass and black sesame seeds for ancestor rites and thithi.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், தர்பை புல் & கருப்பு எள் செட் தேவைப்படுகிறது.',
      en: 'Hello Thimma Kannan, I need Dharba Grass & Black Sesame Seeds Set.'
    }
  },
  {
    id: 'mat-sambrani-camphor',
    category: 'dhoop-oils',
    name: {
      ta: 'இயற்கை மூலிகை சாம்பிராணி & பச்சை கற்பூரம்',
      en: 'Natural Herbal Sambrani & Edible Camphor'
    },
    desc: {
      ta: 'தெய்வீக வாசனை கமழும் இயற்கை கம்ப்யூட்டர் சாம்பிராணி, கட்டி சாம்பிராணி & பச்சை கற்பூரம்.',
      en: 'Aromatic natural Sambrani dhoop and pure Pachi Karpooram for devotional fragrance.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், இயற்கை சாம்பிராணி & பச்சை கற்பூரம் கிடைக்கிறதா?',
      en: 'Hello Thimma Kannan, enquiring about Natural Sambrani & Camphor availability.'
    }
  },
  {
    id: 'mat-turmeric-kumkum',
    category: 'spices-herbs',
    name: {
      ta: 'தாழம்பூ குங்குமம் & விரலி மஞ்சள் செட்',
      en: 'Thazhampoo Kumkum & Whole Turmeric Roots'
    },
    desc: {
      ta: 'பாரம்பரிய முறைப்படி தயாரிக்கப்பட்ட வாசனை மிகுந்த குங்குமம் மற்றும் விரலி மஞ்சள்.',
      en: 'Aromatic traditional Kumkum and high-quality dried whole turmeric roots.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், தாழம்பூ குங்குமம் & விரலி மஞ்சள் செட் தேவை.',
      en: 'Hello Thimma Kannan, I would like to buy Thazhampoo Kumkum & Turmeric Roots.'
    }
  },
  {
    id: 'mat-brass-diya-set',
    category: 'kalasam',
    name: {
      ta: 'குத்துவிளக்கு & காமாட்சி அம்மன் விளக்கு செட்',
      en: 'Kuthu Vilakku & Kamatchi Amman Diya Set'
    },
    desc: {
      ta: 'தென்னிந்திய கோவில் மாடலில் வடிக்கப்பட்ட பாரம்பரிய பித்தளை விளக்குகள்.',
      en: 'South Indian temple style brass standing oil lamps and Kamatchi Amman lamps.'
    },
    availability: true,
    price: null,
    whatsappMessage: {
      ta: 'வணக்கம் திம்மா கண்ணன், பித்தளை விளக்கு செட் பற்றிய விபரம் கோருகிறேன்.',
      en: 'Hello Thimma Kannan, please share details for Brass Diya set.'
    }
  }
];
