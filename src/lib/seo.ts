import type { Metadata } from 'next';

export const SITE_NAME = 'MyVoIP';
export const SITE_URL = 'https://my-voip.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: Metadata['keywords'];
  robots?: Metadata['robots'];
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

function trimTitleSegment(title: string) {
  return title
    .replace(/\s+\|\s+MyVoIP$/i, '')
    .replace(/\s+\|\s+MyVoIP\s+[x×]\s+UponAI$/i, ' × UponAI')
    .trim();
}

function brandTitle(title: string) {
  const clean = trimTitleSegment(title);
  return clean === SITE_NAME ? SITE_NAME : `${clean} | ${SITE_NAME}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
}: PageMetadataInput): Metadata {
  const cleanTitle = trimTitleSegment(title);
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: cleanTitle,
    description,
    keywords,
    alternates: { canonical },
    robots,
    openGraph: {
      title: brandTitle(openGraphTitle ?? cleanTitle),
      description: openGraphDescription ?? description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandTitle(twitterTitle ?? cleanTitle),
      description: twitterDescription ?? openGraphDescription ?? description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
