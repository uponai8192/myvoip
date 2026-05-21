import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AiSolutionTemplate from '@/components/sections/AiSolutionTemplate';
import { aiSentimentPages, getAiSentimentPageBySlug } from '@/lib/ai-sentiment-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return aiSentimentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAiSentimentPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/services/ai-voice-agents/sentiment-analysis/${slug}`,
    keywords: [
      'call sentiment analysis',
      'customer sentiment analysis',
      'AI call analytics',
      'post-call sentiment scoring',
      page.title,
    ],
    openGraphDescription: page.heroDescription,
    twitterDescription: page.heroDescription,
  });
}

export default async function AiSentimentAnalysisPage({ params }: Props) {
  const { slug } = await params;
  const page = getAiSentimentPageBySlug(slug);
  if (!page) notFound();

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'AI Voice Agents', url: 'https://my-voip.com/services/ai-voice-agents' },
      {
        name: page.heroTitle,
        url: `https://my-voip.com/services/ai-voice-agents/sentiment-analysis/${slug}`,
      },
    ]),
    buildServiceSchema({
      name: page.title,
      description: page.description,
      serviceType: 'Call sentiment analysis and post-call AI reporting',
      url: `https://my-voip.com/services/ai-voice-agents/sentiment-analysis/${slug}`,
    }),
    buildFaqSchema(page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <AiSolutionTemplate page={page} pages={aiSentimentPages} kind="sentiment" />
    </>
  );
}
