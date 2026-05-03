import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, industries, getCityBySlug, getServiceBySlug } from '@/lib/data';
import { getTopMetroPageByCitySlug, topMetroPages } from '@/lib/metro-seo';
import { getServiceSeoContent } from '@/lib/seo-content';
import { getServiceFaqs } from '@/lib/seo-faqs';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';
import FeaturesBento from '@/components/sections/FeaturesBento';

const servicePhotos: Record<string, string> = {
  'business-voip': '/site-photos/voip-phone.jpg',
  'contact-centers': '/site-photos/omnichannel.jpg',
  'sip-trunks': '/site-photos/digital-cx.png',
  'hosted-fax': '/site-photos/laptop-typing.jpg',
  'mobile-voip-sms': '/site-photos/business-mobile.jpg',
  'web-video-conferencing': '/site-photos/team-consultation.jpg',
  'voip-integration': '/site-photos/digital-cx.png',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const seoContent = getServiceSeoContent(slug);
  return buildPageMetadata({
    title: seoContent?.title ?? service.name,
    description:
      seoContent?.description ??
      `${service.description} Get started with MyVoIP ${service.shortName} — starting at $9.99/month with 24/7 US-based support.`,
    path: `/services/${slug}`,
    openGraphDescription: service.tagline,
    twitterDescription: service.tagline,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const seoContent = getServiceSeoContent(slug);
  const serviceFaqs = getServiceFaqs(service, seoContent);

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);
  const relatedIndustries = ((seoContent?.relatedIndustrySlugs?.length
    ? seoContent.relatedIndustrySlugs
    : industries.slice(0, 4).map((industry) => industry.slug))
  )
    .map((industrySlug) => industries.find((industry) => industry.slug === industrySlug))
    .filter((industry): industry is (typeof industries)[number] => Boolean(industry));
  const relatedMetros = ((seoContent?.relatedMetroSlugs?.length
    ? seoContent.relatedMetroSlugs
    : topMetroPages.slice(0, 6).map((metro) => metro.citySlug))
  )
    .map((citySlug) => {
      const city = getCityBySlug(citySlug);
      const metroPage = getTopMetroPageByCitySlug(citySlug);
      if (!city || !metroPage) return null;
      return { city, metroPage };
    })
    .filter((metro): metro is { city: NonNullable<ReturnType<typeof getCityBySlug>>; metroPage: NonNullable<ReturnType<typeof getTopMetroPageByCitySlug>> } => Boolean(metro));

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Services', url: 'https://my-voip.com/#services' },
      { name: service.shortName, url: `https://my-voip.com/services/${slug}` },
    ]),
    buildServiceSchema({
      name: service.name,
      description: service.description,
      serviceType: service.shortName,
      url: `https://my-voip.com/services/${slug}`,
    }),
    buildFaqSchema(serviceFaqs),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[22rem] w-[22rem] rounded-full bg-blue-600/10 blur-3xl sm:h-[26rem] sm:w-[26rem] lg:h-[25rem] lg:w-[37.5rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <div>
            <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Services</span>
              <span className="text-slate-600">/</span>
              <span className="text-white">{service.shortName}</span>
            </nav>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-xs sm:text-sm font-medium">Cloud VoIP Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {service.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-300 font-medium mb-5">{service.tagline}</p>
            <p className="text-slate-300 leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:+18336986471" className="border border-slate-600 text-slate-200 hover:border-blue-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                Call (833) 698-6471
              </a>
            </div>
          </div>

          {/* Photo */}
          {servicePhotos[slug] && (
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50">
                <Image
                  src={servicePhotos[slug]}
                  alt={`${service.name} — MyVoIP`}
                  width={700}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <FeaturesBento
            features={service.features}
            title={`What's Included with MyVoIP ${service.shortName}`}
            subtitle="Every plan ships with these features — no add-on fees, no surprises."
          />
        </div>
      </section>

      {seoContent && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_0.8fr] gap-8 items-start">
            <div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                {seoContent.introEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
                {seoContent.introHeading}
              </h2>
              <div className="space-y-4">
                {seoContent.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {seoContent.buyerSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{signal.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why MyVoIP */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-blue-950/30 p-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Why Businesses Choose MyVoIP</h2>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: '$9.99', label: 'Starting / month', sub: 'No long-term contracts', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { stat: '99.99%', label: 'Uptime SLA', sub: 'Enterprise-grade reliability', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { stat: '24/7', label: 'US-Based Support', sub: 'Real humans, not bots', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map((item) => (
                <div key={item.stat} className={`${item.bg} ${item.border} border rounded-2xl p-7 text-center group hover:scale-[1.02] transition-transform duration-200`}>
                  <div className={`w-12 h-12 ${item.bg} ${item.border} border rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-6 h-6 ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div className={`text-4xl font-black ${item.color} mb-2`}>{item.stat}</div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-slate-400 text-sm">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related industries + metros */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related Industries and Metro Pages for {service.shortName}
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Use these pages to see where this service fits best and which metro markets we&apos;re actively building out with stronger local SEO coverage.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
              <h3 className="text-xl font-bold text-white mb-2">Industry Use Cases</h3>
              <p className="text-slate-400 mb-6">
                These industries are strong fits for {service.shortName.toLowerCase()} based on call volume, response-time pressure, and workflow complexity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-blue-500/50 transition-colors"
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{industry.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
              <h3 className="text-xl font-bold text-white mb-2">Top Metro Pages</h3>
              <p className="text-slate-400 mb-6">
                These metro pages are indexable local hubs where MyVoIP is already investing in stronger market-specific content.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedMetros.map(({ city, metroPage }) => (
                  <Link
                    key={city.slug}
                    href={`/location/${city.slug}`}
                    className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                      {city.name}, {city.stateAbbr}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{metroPage.heroDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              {service.shortName} FAQ
            </h2>
            <p className="text-slate-400 text-lg">
              Common buyer questions about deployment, fit, and what to compare before choosing a provider.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {serviceFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other MyVoIP Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-300">{s.shortName}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      <CTASection />
    </>
  );
}
