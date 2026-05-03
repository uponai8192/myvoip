import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalIndustryTemplate from '@/components/sections/LegalIndustryTemplate';
import {
  legalIndustryPages,
  getLegalIndustryPageBySlug,
} from '@/lib/legal-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return legalIndustryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalIndustryPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/industries/law-firms/${slug}`,
    openGraphDescription: page.heroDescription,
    twitterDescription: page.heroDescription,
  });
}

export default async function LawFirmSubpage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalIndustryPageBySlug(slug);
  if (!page) notFound();

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Law Firms', url: 'https://my-voip.com/industries/law-firms' },
      { name: page.heroTitle, url: `https://my-voip.com/industries/law-firms/${slug}` },
    ]),
    buildServiceSchema({
      name: page.title,
      description: page.description,
      serviceType: 'Legal VoIP and law firm communications',
      url: `https://my-voip.com/industries/law-firms/${slug}`,
    }),
    buildFaqSchema(page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <LegalIndustryTemplate page={page} />
    </>
  );
}
