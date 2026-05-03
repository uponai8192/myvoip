export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type SeoFaq = {
  question: string;
  answer: string;
};

type LocalBusinessSchemaInput = {
  name: string;
  description: string;
  url: string;
  areaServed: {
    city: string;
    state?: string;
  };
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(faqs: SeoFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildLocalBusinessSchema({
  name,
  description,
  url,
  areaServed,
}: LocalBusinessSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone: '+18336986471',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '281 US-46 West',
      addressLocality: 'Elmwood Park',
      addressRegion: 'NJ',
      postalCode: '07407',
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: {
      '@type': 'City',
      name: areaServed.city,
      ...(areaServed.state
        ? {
            containedInPlace: {
              '@type': 'State',
              name: areaServed.state,
            },
          }
        : {}),
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
}: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: serviceType ?? name,
    provider: {
      '@type': 'Organization',
      name: 'MyVoIP',
      url: 'https://my-voip.com',
      telephone: '+18336986471',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url,
  };
}

export function buildItemListSchema(
  name: string,
  urls: {
    name: string;
    url: string;
  }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: urls.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
