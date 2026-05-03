import type { MetadataRoute } from 'next';
import { services, industries } from '@/lib/data';
import { filmProductionPages } from '@/lib/film-production-pages';
import { homeServicesPages } from '@/lib/home-services-pages';
import { legalIndustryPages } from '@/lib/legal-pages';
import { topMetroPages } from '@/lib/metro-seo';

const BASE_URL = 'https://my-voip.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/cloud-telephony`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/virtual-reality`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const metroPages: MetadataRoute.Sitemap = topMetroPages.map((page) => ({
    url: `${BASE_URL}/location/${page.citySlug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const filmClusterPages: MetadataRoute.Sitemap = filmProductionPages.map((page) => ({
      url: `${BASE_URL}/industries/film-production/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  const legalClusterPages: MetadataRoute.Sitemap = legalIndustryPages.map((page) => ({
    url: `${BASE_URL}/industries/law-firms/${page.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const homeServicesClusterPages: MetadataRoute.Sitemap = homeServicesPages.map((page) => ({
    url: `${BASE_URL}/industries/home-services/${page.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...metroPages,
    ...filmClusterPages,
    ...legalClusterPages,
    ...homeServicesClusterPages,
  ];
}
