import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FilmProductionTemplate from '@/components/sections/FilmProductionTemplate';
import {
  filmProductionPages,
  getFilmProductionPageBySlug,
} from '@/lib/film-production-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return filmProductionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFilmProductionPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/industries/film-production/${slug}`,
    openGraphDescription: page.heroDescription,
    twitterDescription: page.heroDescription,
  });
}

export default async function FilmProductionSubpage({ params }: Props) {
  const { slug } = await params;
  const page = getFilmProductionPageBySlug(slug);
  if (!page) notFound();

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Film Production', url: 'https://my-voip.com/industries/film-production' },
      { name: page.heroTitle, url: `https://my-voip.com/industries/film-production/${slug}` },
    ]),
    buildServiceSchema({
      name: page.title,
      description: page.description,
      serviceType: 'Film production VoIP and temporary communications',
      url: `https://my-voip.com/industries/film-production/${slug}`,
    }),
    buildFaqSchema(page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <FilmProductionTemplate page={page} />
    </>
  );
}
