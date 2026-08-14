import { businessConfig } from '../config/business';

export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    'name': businessConfig.businessName.ta + ' | ' + businessConfig.businessName.en,
    'description': businessConfig.subTagline.ta,
    'url': businessConfig.siteUrl,
    'telephone': businessConfig.phone,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessConfig.address.en,
      'addressLocality': 'Mylapore',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '600004',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 13.0335,
      'longitude': 80.2678
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '06:00',
        'closes': '21:00'
      }
    ],
    'priceRange': '₹₹'
  };
};

export const getWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': businessConfig.businessName.en,
    'alternateName': businessConfig.businessName.ta,
    'url': businessConfig.siteUrl
  };
};

export const getServiceSchema = (serviceName, serviceDesc) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'provider': {
      '@type': 'LocalBusiness',
      'name': businessConfig.businessName.en
    },
    'description': serviceDesc,
    'areaServed': {
      '@type': 'State',
      'name': 'Tamil Nadu'
    }
  };
};
