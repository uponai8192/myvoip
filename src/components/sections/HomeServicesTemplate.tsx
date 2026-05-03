import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import {
  type HomeServicesPage,
  getHomeServicesPageBySlug,
} from '@/lib/home-services-pages';
import CTASection from '@/components/sections/CTASection';

type HomeServicesPhoto = {
  src: string;
  alt: string;
};

const photoBySlug: Record<string, HomeServicesPhoto> = {
  'new-york-city-home-services': {
    src: '/site-photos/team-on-phone.jpg',
    alt: 'Home services office staff answering business calls.',
  },
  'atlanta-home-services': {
    src: '/site-photos/team-conversation.jpg',
    alt: 'Dispatch-style team discussing customer service workflow.',
  },
  'hvac-dispatch-phone-system': {
    src: '/site-photos/business-mobile.jpg',
    alt: 'Mobile business communication suited for HVAC dispatch teams.',
  },
  'plumbing-after-hours-answering': {
    src: '/site-photos/laptop-typing.jpg',
    alt: 'After-hours business workflow for urgent service calls.',
  },
  'electrician-call-routing': {
    src: '/site-photos/team-consultation.jpg',
    alt: 'Office and field coordination in a professional service setting.',
  },
  'home-services-missed-call-recovery': {
    src: '/site-photos/voip-phone.jpg',
    alt: 'Business desk phone representing missed-call recovery workflows.',
  },
  'multi-technician-dispatch-lines': {
    src: '/site-photos/team-meeting.jpg',
    alt: 'Team coordination for multi-technician dispatch operations.',
  },
};

export default function HomeServicesTemplate({
  page,
}: {
  page: HomeServicesPage;
}) {
  const photo = photoBySlug[page.slug] ?? {
    src: '/site-photos/team-office.jpg',
    alt: 'Professional home services business communication setup.',
  };

  const featuredServices = page.featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  const relatedPages = page.relatedPageSlugs
    .map((slug) => getHomeServicesPageBySlug(slug))
    .filter((relatedPage): relatedPage is HomeServicesPage => Boolean(relatedPage));

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full bg-emerald-600/10 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[40rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-600/8 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries/home-services" className="hover:text-slate-300 transition-colors">
                Home Services
              </Link>
              <span>/</span>
              <span className="text-slate-300">{page.heroTitle}</span>
            </nav>

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-600/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-xs sm:text-sm font-medium">{page.heroEyebrow}</span>
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
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Get a Home Services Quote
              </Link>
              <a
                href="tel:+18336986471"
                className="border border-slate-600 text-slate-200 hover:border-emerald-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Call (833) 698-6471
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-emerald-500/10 blur-2xl opacity-60" />
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
                    <div className="text-sm font-black text-emerald-300">{signal.title}</div>
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
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Service Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Built for dispatch, after-hours coverage, and office-to-field communication
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
            <h2 className="text-xl font-bold text-white mb-4">{page.operationalFocusTitle}</h2>
            <div className="space-y-3">
              {page.operationalFocus.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-2xl font-bold text-white mb-3">Recommended Services for This Workflow</h2>
            <p className="text-slate-400 mb-6">
              These services usually matter most for home service dispatch, mobile communication, and after-hours call handling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-emerald-500/50 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-300 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Related Home Services SEO Pages</h2>
            <p className="text-slate-400 mb-6">
              These pages deepen the cluster around dispatch, missed-call recovery, technician accessibility, and market-specific service workflows.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/industries/home-services/${relatedPage.slug}`}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-emerald-500/50 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-300 transition-colors">
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
            <h2 className="text-3xl font-bold text-white mb-4">Home Services VoIP FAQ</h2>
            <p className="text-slate-400 text-lg">
              Focused answers for dispatch-heavy service businesses comparing routing, mobility, and after-hours coverage.
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

      <CTASection
        heading="Need a phone system that works like part of dispatch?"
        subheading="Tell us how your office, after-hours, and field communication works today. We will map the right business VoIP setup for your service team."
      />
    </>
  );
}
