import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeServicesTemplate from '@/components/sections/HomeServicesTemplate';
import {
  homeServicesPages,
  getHomeServicesPageBySlug,
} from '@/lib/home-services-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return homeServicesPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getHomeServicesPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/industries/home-services/${slug}`,
    openGraphDescription: page.heroDescription,
    twitterDescription: page.heroDescription,
  });
}

export default async function HomeServicesSubpage({ params }: Props) {
  const { slug } = await params;
  const page = getHomeServicesPageBySlug(slug);
  if (!page) notFound();

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Home Services', url: 'https://my-voip.com/industries/home-services' },
      { name: page.heroTitle, url: `https://my-voip.com/industries/home-services/${slug}` },
    ]),
    buildServiceSchema({
      name: page.title,
      description: page.description,
      serviceType: 'Home services VoIP and dispatch communications',
      url: `https://my-voip.com/industries/home-services/${slug}`,
    }),
    buildFaqSchema(page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <HomeServicesTemplate page={page} />
    </>
  );
}
