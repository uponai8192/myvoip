import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import {
  type LegalIndustryPage,
  getLegalIndustryPageBySlug,
} from '@/lib/legal-pages';
import CTASection from '@/components/sections/CTASection';

type LegalPhoto = {
  src: string;
  alt: string;
};

const photoBySlug: Record<string, LegalPhoto> = {
  'new-york-city-law-firms': {
    src: '/site-photos/team-office.jpg',
    alt: 'Law-office style team collaborating in a professional office.',
  },
  'atlanta-law-firms': {
    src: '/site-photos/team-conversation.jpg',
    alt: 'Two professionals in conversation in a modern office setting.',
  },
  'legal-client-intake': {
    src: '/site-photos/team-on-phone.jpg',
    alt: 'Professional handling an intake-style call at a desk.',
  },
  'attorney-direct-lines': {
    src: '/site-photos/team-consultation.jpg',
    alt: 'Professional consultation in an office environment.',
  },
  'law-office-phone-system': {
    src: '/site-photos/voip-phone.jpg',
    alt: 'Modern office desk phone for business communications.',
  },
  'legal-answering-service': {
    src: '/site-photos/laptop-typing.jpg',
    alt: 'Professional after-hours style office workflow at a laptop.',
  },
  'multi-office-law-firms': {
    src: '/site-photos/team-meeting.jpg',
    alt: 'Team meeting that fits a multi-office legal workflow.',
  },
};

export default function LegalIndustryTemplate({
  page,
}: {
  page: LegalIndustryPage;
}) {
  const photo = photoBySlug[page.slug] ?? {
    src: '/site-photos/team-office.jpg',
    alt: 'Professional legal-office style team in a business setting.',
  };

  const featuredServices = page.featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  const relatedPages = page.relatedPageSlugs
    .map((slug) => getLegalIndustryPageBySlug(slug))
    .filter((relatedPage): relatedPage is LegalIndustryPage => Boolean(relatedPage));

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full bg-slate-500/10 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[40rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-600/8 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries/law-firms" className="hover:text-slate-300 transition-colors">
                Law Firms
              </Link>
              <span>/</span>
              <span className="text-slate-300">{page.heroTitle}</span>
            </nav>

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-500/30 bg-slate-700/30 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium">{page.heroEyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {page.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-4">
              {page.heroDescription}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">
              {page.marketFocus}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Get a Legal VoIP Quote
              </Link>
              <a
                href="tel:+18336986471"
                className="border border-slate-600 text-slate-200 hover:border-blue-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Call (833) 698-6471
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-slate-500/10 blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-slate-700/60">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-700/60 bg-slate-900/95 p-4">
                {page.deploymentSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2">
                    <div className="text-sm font-black text-blue-300">{signal.title}</div>
                    <div className="text-slate-300 text-[11px]">{signal.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_0.8fr] gap-8 items-start">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Legal Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Built for firms that depend on intake quality and better attorney accessibility
            </h2>
            <div className="space-y-4">
              {page.overview.map((paragraph) => (
                <p key={paragraph} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-6">
            <h3 className="text-xl font-bold text-white mb-4">{page.operationalFocusTitle}</h3>
            <div className="space-y-3">
              {page.operationalFocus.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Recommended Services for This Legal Use Case</h2>
            <p className="text-slate-400 mb-6">
              These services usually support the routing, responsiveness, and professional call handling this page is targeting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Related Legal SEO Pages</h2>
            <p className="text-slate-400 mb-6">
              Use these connected pages to strengthen topical coverage around law firm communications and legal intake.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/industries/law-firms/${relatedPage.slug}`}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-blue-500/50 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {relatedPage.heroTitle}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{relatedPage.heroDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Legal Communications FAQ</h2>
            <p className="text-slate-400 text-lg">
              Focused answers for firms comparing client intake, attorney access, and law-office phone workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
