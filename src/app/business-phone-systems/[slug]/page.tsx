import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/lib/data';
import {
  businessPhoneSystemPages,
  getBusinessPhoneSystemPageBySlug,
  type BusinessPhoneSystemPage,
} from '@/lib/business-phone-system-pages';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return businessPhoneSystemPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBusinessPhoneSystemPageBySlug(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/business-phone-systems/${slug}`,
    openGraphDescription: page.heroDescription,
    twitterDescription: page.heroDescription,
  });
}

function getPage(slug: string) {
  const page = getBusinessPhoneSystemPageBySlug(slug);
  if (!page) notFound();
  return page;
}

function ServiceLinks({ page }: { page: BusinessPhoneSystemPage }) {
  const pageServices = page.recommendedServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {pageServices.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition-colors hover:border-cyan-500/50"
        >
          <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
            {service.shortName}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{service.tagline}</p>
        </Link>
      ))}
    </div>
  );
}

function RelatedLinks({ page }: { page: BusinessPhoneSystemPage }) {
  const relatedPages = page.relatedSlugs
    .map((slug) => getBusinessPhoneSystemPageBySlug(slug))
    .filter((relatedPage): relatedPage is BusinessPhoneSystemPage => Boolean(relatedPage));

  return (
    <div className="grid grid-cols-1 gap-4">
      {relatedPages.map((relatedPage) => (
        <Link
          key={relatedPage.slug}
          href={`/business-phone-systems/${relatedPage.slug}`}
          className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition-colors hover:border-cyan-500/50"
        >
          <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
            {relatedPage.heroTitle}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{relatedPage.heroDescription}</p>
        </Link>
      ))}
    </div>
  );
}

export default async function BusinessPhoneSystemSubpage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);

  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: page.heroTitle, url: `https://my-voip.com/business-phone-systems/${slug}` },
    ]),
    buildServiceSchema({
      name: page.title,
      description: page.description,
      serviceType: `${page.workflowName} business phone system`,
      url: `https://my-voip.com/business-phone-systems/${slug}`,
    }),
    buildFaqSchema(page.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full bg-cyan-600/10 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[40rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-600/8 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-400">Business Phone Systems</span>
              <span>/</span>
              <span className="text-slate-300">{page.heroTitle}</span>
            </nav>

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-600/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-cyan-300 text-xs sm:text-sm font-medium">{page.heroEyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {page.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {page.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Get a Phone System Quote
              </Link>
              <a
                href="tel:+18336986471"
                className="border border-slate-600 text-slate-200 hover:border-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Call (833) 698-6471
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-cyan-500/10 blur-2xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-slate-700/60">
              <Image
                src={page.photo}
                alt={`${page.workflowName} for ${page.verticalName}`}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-700/60 bg-slate-900/95 p-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3">
                  <div className="text-sm font-black text-cyan-300">Industry</div>
                  <div className="text-slate-300 text-sm">{page.verticalName}</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3">
                  <div className="text-sm font-black text-cyan-300">Workflow</div>
                  <div className="text-slate-300 text-sm">{page.workflowName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_0.8fr] gap-8 items-start">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Strategy Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              How to think about {page.workflowName.toLowerCase()} for {page.verticalName.toLowerCase()}
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
            <h2 className="text-xl font-bold text-white mb-4">What the phone system should handle</h2>
            <div className="space-y-3">
              {page.priorities.map((priority) => (
                <div key={priority} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm leading-relaxed">{priority}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Deployment Playbook</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              A better call flow starts with the operating reality
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              These pages are built for buyers who want practical phone-system guidance, not a generic feature list.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {page.playbook.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Recommended MyVoIP Services</h2>
            <p className="text-slate-400 mb-6">
              These services are the usual building blocks for this type of phone-system workflow.
            </p>
            <ServiceLinks page={page} />
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Related Phone System Guides</h2>
            <p className="text-slate-400 mb-6">
              Continue through closely related buyer guides for similar industries and operating problems.
            </p>
            <RelatedLinks page={page} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">{page.workflowName} FAQ</h2>
            <p className="text-slate-400 text-lg">
              Focused answers for {page.verticalName.toLowerCase()} comparing MyVoIP phone-system options.
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
        heading={`Need ${page.workflowName.toLowerCase()} for ${page.verticalName.toLowerCase()}?`}
        subheading="Tell us how calls move through your business today. We will map a MyVoIP setup around your users, numbers, call paths, and follow-up requirements."
      />
    </>
  );
}
