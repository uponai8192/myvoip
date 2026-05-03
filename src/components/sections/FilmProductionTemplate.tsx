import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import {
  type FilmProductionPage,
  getFilmProductionPageBySlug,
} from '@/lib/film-production-pages';
import CTASection from '@/components/sections/CTASection';

type FilmPhoto = {
  src: string;
  alt: string;
  sourceUrl: string;
  sourceLabel: string;
  artist: string;
  license: string;
};

const photoBySlug: Record<string, FilmPhoto> = {
  'new-york-city': {
    src: '/film-production/film-crew-ny-night.jpg',
    alt: 'Film crew working at night in a dense urban environment.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_Crew_(26864340399).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Billie Grace Ward',
    license: 'CC BY 2.0',
  },
  'manhattan-production-offices': {
    src: '/film-production/staff-meeting-3.jpg',
    alt: 'Production-style office meeting around a conference table.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Staff_meeting_(3).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Bill Branson',
    license: 'Public domain',
  },
  'brooklyn-crew-phones': {
    src: '/film-production/filmcrew-brooklyn.jpg',
    alt: 'Film crew setup on a Brooklyn street during production.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Filmcrew.jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Beleg Langbogen',
    license: 'CC BY-SA 3.0',
  },
  'queens-studio-productions': {
    src: '/film-production/film-crew-granville.jpg',
    alt: 'Film crew working together on set with camera gear.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_crew_(4378144907).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Atomic Taco',
    license: 'CC BY-SA 2.0',
  },
  'atlanta-film-production': {
    src: '/film-production/film-crew-utah.jpg',
    alt: 'Film crew shooting outdoors with support gear in place.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_Crew_(48522227037).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'David Brossard',
    license: 'CC BY-SA 2.0',
  },
  'fayetteville-trilith-productions': {
    src: '/film-production/film-crew-filming.jpg',
    alt: 'Small film crew filming outdoors during a temporary production setup.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_crew_filming.jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Tess McBride, U.S. Fish and Wildlife Service',
    license: 'Public domain',
  },
  'movie-set-phone-rental': {
    src: '/film-production/movie-set-canada.jpg',
    alt: 'Movie set environment with a visible production footprint.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Movie_Set_(8928173003).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'rhdouglas',
    license: 'CC BY 2.0',
  },
  'production-office-voip': {
    src: '/film-production/staff-meeting-2.jpg',
    alt: 'Small office team meeting that fits a temporary production office workflow.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Staff_meeting_(2).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Bill Branson',
    license: 'Public domain',
  },
  'temporary-voip-lines': {
    src: '/film-production/film-crew-filming.jpg',
    alt: 'Film crew actively filming during a temporary production setup.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_crew_filming.jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'Tess McBride, U.S. Fish and Wildlife Service',
    license: 'Public domain',
  },
};

export default function FilmProductionTemplate({
  page,
}: {
  page: FilmProductionPage;
}) {
  const photo = photoBySlug[page.slug] ?? {
    src: '/film-production/film-crew-utah.jpg',
    alt: 'Film crew preparing a production setup.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Film_Crew_(48522227037).jpg',
    sourceLabel: 'Wikimedia Commons',
    artist: 'David Brossard',
    license: 'CC BY-SA 2.0',
  };
  const featuredServices = page.featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));
  const relatedPages = page.relatedPageSlugs
    .map((slug) => getFilmProductionPageBySlug(slug))
    .filter((relatedPage): relatedPage is FilmProductionPage => Boolean(relatedPage));

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full bg-violet-600/10 blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[40rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-600/8 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries/film-production" className="hover:text-slate-300 transition-colors">
                Film Production
              </Link>
              <span>/</span>
              <span className="text-slate-300">{page.heroTitle}</span>
            </nav>

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-violet-300 text-xs sm:text-sm font-medium">{page.heroEyebrow}</span>
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
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Get a Production Quote
              </Link>
              <a
                href="tel:+18336986471"
                className="border border-slate-600 text-slate-200 hover:border-violet-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center"
              >
                Call (833) 698-6471
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-violet-500/10 blur-2xl opacity-60" />
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
              <div className="grid grid-cols-2 gap-3 border-t border-slate-700/60 bg-slate-900/95 p-4">
                {page.deploymentSignals.slice(0, 2).map((signal, index) => (
                  <div key={signal.title} className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2">
                    <div className={`text-sm font-black ${index === 0 ? 'text-violet-400' : 'text-blue-400'}`}>
                      {signal.title}
                    </div>
                    <div className="text-slate-300 text-[11px]">{signal.description}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-700/60 bg-slate-950/90 px-4 py-3 text-[11px] text-slate-400">
                Photo by {photo.artist} via{' '}
                <a
                  href={photo.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-300 hover:text-violet-200 transition-colors"
                >
                  {photo.sourceLabel}
                </a>
                {' '}licensed {photo.license}.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_0.8fr] gap-8 items-start">
          <div>
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-wider">
              Production Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Built for productions that need phones fast and only for the time they need them
            </h2>
            <div className="space-y-4">
              {page.overview.map((paragraph) => (
                <p key={paragraph} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {page.deploymentSignals.map((signal) => (
              <div key={signal.title} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{signal.title}</h3>
                <p className="text-slate-400 leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-5">{page.deliveryChecklistTitle}</h2>
            <div className="space-y-3">
              {page.deliveryChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-violet-950/30 p-8">
            <h2 className="text-2xl font-bold text-white mb-5">Related MyVoIP services for productions</h2>
            <div className="grid grid-cols-1 gap-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 hover:border-violet-500/50 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{service.tagline}</p>
                  <span className="text-violet-400 text-sm font-medium group-hover:text-violet-300">
                    View service page →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related film-production pages
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              These pages stay tightly focused on short-term leased phones, temporary VoIP lines, and production-office communications for active shoots.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage.slug}
                href={`/industries/film-production/${relatedPage.slug}`}
                className="group rounded-2xl border border-slate-700 bg-slate-800/50 p-6 hover:border-violet-500/50 hover:bg-slate-800 transition-all"
              >
                <div className="text-white font-semibold mb-2 group-hover:text-violet-300 transition-colors">
                  {relatedPage.heroTitle}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{relatedPage.heroDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Film production VoIP FAQ
            </h2>
            <p className="text-slate-400 text-lg">
              Common questions from production companies, line producers, and office coordinators.
            </p>
          </div>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need temporary phones for a production?"
        subheading="Get short-term leased phones, temporary VoIP lines, and a production-office setup built around your shoot schedule."
      />
    </>
  );
}
