import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/data';
import { filmProductionHub, filmProductionPages } from '@/lib/film-production-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildItemListSchema, buildServiceSchema } from '@/lib/seo-rich';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = buildPageMetadata({
  title: filmProductionHub.title,
  description: filmProductionHub.description,
  path: '/industries/film-production',
  openGraphDescription:
    'Short-term VoIP, leased phones, and production-office communication for movie sets and production companies, with heavy focus on New York City and Atlanta.',
  twitterDescription:
    'Short-term VoIP, leased phones, and production-office communication for movie sets and production companies, with heavy focus on New York City and Atlanta.',
});

const featuredServices = ['business-voip', 'mobile-voip-sms', 'sip-trunks', 'voip-integration']
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function FilmProductionIndustryPage() {
  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Industries', url: 'https://my-voip.com/#industries' },
      { name: 'Film Production', url: 'https://my-voip.com/industries/film-production' },
    ]),
    buildServiceSchema({
      name: 'Short-Term VoIP for Film Productions',
      description: filmProductionHub.description,
      serviceType: 'Film production VoIP and temporary set communications',
      url: 'https://my-voip.com/industries/film-production',
    }),
    buildItemListSchema(
      'Film production VoIP pages',
      filmProductionPages.map((page) => ({
        name: page.title,
        url: `https://my-voip.com/industries/film-production/${page.slug}`,
      }))
    ),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full bg-violet-600/10 blur-3xl sm:h-[32rem] sm:w-[32rem] lg:h-[38rem] lg:w-[46rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-600/8 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#industries" className="hover:text-slate-300 transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-slate-300">Film Production</span>
          </nav>

          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-xs sm:text-sm font-medium">{filmProductionHub.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">
            {filmProductionHub.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl mb-5">
            {filmProductionHub.heroDescription}
          </p>
          <div className="max-w-4xl space-y-4 mb-10">
            {filmProductionHub.intro.map((paragraph) => (
              <p key={paragraph} className="text-slate-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
              Get a Production Quote
            </Link>
            <a href="tel:+18336986471" className="border border-slate-600 text-slate-200 hover:border-violet-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center">
              Call (833) 698-6471
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {filmProductionHub.highlights.map((highlight) => (
            <div key={highlight.title} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
              <h2 className="text-xl font-semibold text-white mb-3">{highlight.title}</h2>
              <p className="text-slate-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Indexable film-production pages
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              This cluster is built as a focused SEO group around short-term leased phones, temporary VoIP lines, production-office setups, and the highest-priority film markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filmProductionPages.map((page) => (
              <Link
                key={page.slug}
                href={`/industries/film-production/${page.slug}`}
                className="group rounded-2xl border border-slate-700 bg-slate-800/50 p-6 hover:border-violet-500/50 hover:bg-slate-800 transition-all"
              >
                <div className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-2">
                  {page.heroEyebrow}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {page.heroTitle}
                </h3>
                <p className="text-slate-400 leading-relaxed">{page.heroDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Core MyVoIP services behind the film-production pages
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              These are the service pages that support the production cluster: cloud phones, mobility, temporary line delivery, and routing that can keep changing with the show.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-700 bg-slate-800/40 p-6 hover:border-violet-500/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                  {service.shortName}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need leased phones for a movie set or production office?"
        subheading="Tell us the market, the office timeline, and how many phones or lines you need. We will map the right short-term setup for the production."
      />
    </>
  );
}
