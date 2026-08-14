import { businessConfig } from '../config/business';

export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${businessConfig.siteUrl}/#store`,
    'name': `${businessConfig.businessName.ta} | ${businessConfig.businessName.en} - Traditional Pooja & Homam Samagri Store`,
    'alternateName': ['Thimma Kannan Iyer List Samagri', 'Thimma Kannan Pooja Store'],
    'description': 'Full custom Iyer list and Homam samagri packing service. Send your Vadhyar/Purohit list on WhatsApp. Complete items for Ganapathi Homam, Navagraha Homam, Grahapravesam, Wedding & Apara Karyam.',
    'url': businessConfig.siteUrl,
    'telephone': businessConfig.phone,
    'email': businessConfig.email,
    'priceRange': '₹₹',
    'image': `${businessConfig.siteUrl}/images/hero_pooja_banner.jpg`,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessConfig.address.en,
      'addressLocality': 'Madurai',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '625001',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 9.914,
      'longitude': 78.118
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        'opens': '06:00',
        'closes': '21:00'
      }
    ],
    'areaServed': [
      { '@type': 'City', 'name': 'Madurai' },
      { '@type': 'City', 'name': 'Chennai' },
      { '@type': 'State', 'name': 'Tamil Nadu' }
    ],
    'knowsAbout': [
      'Iyer List Packing',
      'Homam Samagri List',
      'Ganapathi Homam List',
      'Navagraha Homam List',
      'Grahapravesam Homam Materials',
      'Vadhyar List Pooja Kit',
      'Pooja Items List'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Iyer & Homam Pooja Samagri Bundles',
      'itemListElement': [
        {
          '@type': 'OfferCatalog',
          'name': 'Ganapathi Homam Complete Kit (கணபதி ஹோம பொருட்கள் பட்டியல்)',
          'description': 'All 25+ essential samagri items for Ganapathi Homam as prescribed by Iyers & Purohits.'
        },
        {
          '@type': 'OfferCatalog',
          'name': 'Grahapravesam Homam Kit (கிரகப்பிரவேசம் ஹோம பொருட்கள்)',
          'description': 'Complete housewarming ritual items including Vastu Shanthi and Milk Boiling set.'
        },
        {
          '@type': 'OfferCatalog',
          'name': 'Navagraha & Sudarshana Homam List',
          'description': 'Navadhanyam, Vastra, Samithu, and Ghee sets for major Vedic Homams.'
        }
      ]
    }
  };
};

export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${businessConfig.siteUrl}/#website`,
    'name': `${businessConfig.businessName.en} - Iyer & Homam List Pooja Store`,
    'alternateName': `${businessConfig.businessName.ta} - ஹோம பொருட்கள் பட்டியல்`,
    'url': businessConfig.siteUrl,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${businessConfig.siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

export const getFaqSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I submit my Iyer list or Vadhyar list for pooja item packing?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can take a photo of your handwritten Iyer/Vadhyar list or paste the text list and send it to us via WhatsApp at +91 90434 61987. We check every item line-by-line, pack them individually with Tamil/English labels, and deliver them directly to your home.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What items are included in a standard Ganapathi Homam list?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A standard Ganapathi Homam list includes Homam wood (Samithu), pure cow ghee, Navadhanyam, coconut, betel leaves & nuts, turmeric, kumkum, camphor, sambrani, puffed rice (aval & pori), modhak ritual kits, dry fruits, honey, and prasadam offerings.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you provide homam lists for Grahapravesam and Apara Karyam ceremonies?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! We maintain pre-compiled standard checklists verified by authentic Tamil Vedic Purohits for Grahapravesam, Ganapathi Homam, Navagraha Homam, Sudarshana Homam, Lakshmi Homam, Subha Karyam, and Apara Karyam rituals.'
        }
      }
    ]
  };
};

