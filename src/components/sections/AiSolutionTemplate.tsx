import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/lib/data';

type TemplatePage = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  marketFocus: string;
  overview: string[];
  operationalFocusTitle: string;
  operationalFocus: string[];
  deploymentSignals: {
    title: string;
    description: string;
  }[];
  featuredServiceSlugs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  photo?: {
    src: string;
    alt: string;
  };
};

type Props = {
  page: TemplatePage;
  pages: TemplatePage[];
  kind: 'voice' | 'chatbot' | 'sentiment';
};

const photoBySlug: Record<string, { src: string; alt: string }> = {
  'healthcare-call-answering': { src: '/site-photos/team-on-phone.jpg', alt: 'Healthcare staff answering patient calls.' },
  'legal-intake-and-call-routing': { src: '/site-photos/team-consultation.jpg', alt: 'Legal intake and consultation workflow.' },
  'home-services-after-hours-answering': { src: '/site-photos/business-mobile.jpg', alt: 'After-hours service communication on mobile devices.' },
  'real-estate-lead-response': { src: '/site-photos/team-conversation.jpg', alt: 'Real estate lead follow-up workflow.' },
  'insurance-lead-qualification': { src: '/site-photos/digital-cx.png', alt: 'Insurance lead qualification workflow.' },
  'restaurant-phone-ordering-and-reservations': { src: '/site-photos/team-meeting.jpg', alt: 'Restaurant team managing customer communication.' },
  'dental-scheduling-and-reminders': { src: '/site-photos/voip-phone.jpg', alt: 'Dental office scheduling communication workflow.' },
  'urgent-care-call-overflow': { src: '/site-photos/omnichannel.jpg', alt: 'Urgent care communication flow during high-volume periods.' },
  'property-management-maintenance-calls': { src: '/site-photos/team-office.jpg', alt: 'Property management support team handling inbound requests.' },
  'film-production-office-lines': { src: '/film-production/staff-meeting-2.jpg', alt: 'Production office team coordinating phone coverage.' },
  'hvac-dispatch-voice-ai': { src: '/site-photos/business-mobile.jpg', alt: 'Dispatch-ready mobile communication workflow.' },
  'multi-location-ai-receptionist': { src: '/site-photos/team-office.jpg', alt: 'Multi-location business communication coordination.' },
  'website-lead-capture': { src: '/site-photos/ai-chatbot.jpeg', alt: 'Website chatbot engaging a business visitor.' },
  'healthcare-patient-chat': { src: '/site-photos/team-on-phone.jpg', alt: 'Healthcare patient-engagement workflow.' },
  'legal-consultation-chat-intake': { src: '/site-photos/team-consultation.jpg', alt: 'Legal consultation intake chat workflow.' },
  'real-estate-listing-chat': { src: '/site-photos/team-conversation.jpg', alt: 'Real estate chatbot capturing listing interest.' },
  'insurance-quote-chatbot': { src: '/site-photos/digital-cx.png', alt: 'Insurance quote chatbot workflow.' },
  'saas-support-chat-automation': { src: '/site-photos/ai-concept.jpeg', alt: 'SaaS support chat automation workflow.' },
  'home-services-booking-chat': { src: '/site-photos/ai-chatbot.jpeg', alt: 'Home services website chatbot flow.' },
  'dental-new-patient-chat': { src: '/site-photos/voip-phone.jpg', alt: 'Dental office chatbot workflow.' },
  'mortgage-lead-prequalification': { src: '/site-photos/digital-cx.png', alt: 'Mortgage lead qualification chat workflow.' },
  'property-management-leasing-chat': { src: '/site-photos/team-office.jpg', alt: 'Property-management leasing chat flow.' },
  'restaurant-reservation-chat': { src: '/site-photos/team-meeting.jpg', alt: 'Restaurant guest chat workflow.' },
  'education-enrollment-chat': { src: '/site-photos/laptop-typing.jpg', alt: 'Education enrollment chat experience.' },
};

export default function AiSolutionTemplate({ page, pages, kind }: Props) {
  const accent = kind === 'voice'
    ? {
        border: 'border-violet-500/30',
        bg: 'bg-violet-600/10',
        text: 'text-violet-300',
        btn: 'bg-violet-600 hover:bg-violet-500',
        hover: 'hover:border-violet-500/50',
      }
    : kind === 'sentiment'
    ? {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-600/10',
        text: 'text-cyan-300',
        btn: 'bg-cyan-600 hover:bg-cyan-500',
        hover: 'hover:border-cyan-500/50',
      }
    : {
        border: 'border-fuchsia-500/30',
        bg: 'bg-fuchsia-600/10',
        text: 'text-fuchsia-300',
        btn: 'bg-fuchsia-600 hover:bg-fuchsia-500',
        hover: 'hover:border-fuchsia-500/50',
      };

  const photo = page.photo ?? photoBySlug[page.slug] ?? {
    src: '/site-photos/team-office.jpg',
    alt: 'AI-driven business communication workflow.',
  };

  const featuredServices = page.featuredServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  const relatedPages = pages.filter((candidate) => candidate.slug !== page.slug).slice(0, 4);
  const basePath = kind === 'voice'
    ? '/services/ai-voice-agents/solutions'
    : kind === 'sentiment'
    ? '/services/ai-voice-agents/sentiment-analysis'
    : '/services/ai-chatbots/solutions';
  const servicePath = kind === 'chatbot' ? '/services/ai-chatbots' : '/services/ai-voice-agents';
  const serviceLabel = kind === 'chatbot'
    ? 'AI Chatbots'
    : kind === 'sentiment'
    ? 'AI Voice Agents'
    : 'AI Voice Agents';
  const quoteLabel = kind === 'voice'
    ? 'Get an AI Voice Demo'
    : kind === 'sentiment'
    ? 'Get a Sentiment Analysis Demo'
    : 'Get an AI Chatbot Demo';
  const faqLabel = kind === 'voice'
    ? 'AI Voice Agent FAQ'
    : kind === 'sentiment'
    ? 'Conversation Sentiment Analysis FAQ'
    : 'AI Chatbot FAQ';

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 h-[24rem] w-[24rem] rounded-full ${accent.bg} blur-3xl sm:h-[30rem] sm:w-[30rem] lg:h-[32rem] lg:w-[40rem]`} />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href={servicePath} className="hover:text-slate-300 transition-colors">
                {serviceLabel}
              </Link>
              <span>/</span>
              <span className="text-slate-300">{page.heroTitle}</span>
            </nav>

            <div className={`inline-flex max-w-full items-center gap-2 rounded-full ${accent.bg} ${accent.border} border px-4 py-1.5 mb-6`}>
              <span
                className={`h-2 w-2 rounded-full ${
                  kind === 'voice'
                    ? 'bg-violet-400'
                    : kind === 'sentiment'
                    ? 'bg-cyan-400'
                    : 'bg-fuchsia-400'
                } animate-pulse`}
              />
              <span className={`${accent.text} text-xs sm:text-sm font-medium`}>{page.heroEyebrow}</span>
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
              <Link href="/quote" className={`${accent.btn} text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center`}>
                {quoteLabel}
              </Link>
              <a
                href="tel:+18336986471"
                className={`border border-slate-600 text-slate-200 ${accent.hover} hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center`}
              >
                Call (833) 698-6471
              </a>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute -inset-3 rounded-3xl ${accent.bg} blur-2xl opacity-60`} />
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
                    <div className={`text-sm font-black ${accent.text}`}>{signal.title}</div>
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
            <span className={`${accent.text} text-sm font-semibold uppercase tracking-wider`}>
              AI Workflow Fit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Built around real buyer intent, not generic AI hype
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
                  <svg className={`w-5 h-5 ${accent.text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-2xl font-bold text-white mb-3">Related MyVoIP Services</h2>
            <p className="text-slate-400 mb-6">
              These supporting services are usually part of the same deployment conversation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 ${accent.hover} transition-colors`}
                >
                  <h3
                    className={`text-white font-semibold mb-2 ${
                      kind === 'voice'
                        ? 'group-hover:text-violet-300'
                        : kind === 'sentiment'
                        ? 'group-hover:text-cyan-300'
                        : 'group-hover:text-fuchsia-300'
                    } transition-colors`}
                  >
                    {service.shortName}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/40 p-8">
            <h2 className="text-2xl font-bold text-white mb-3">More AI Solution Pages</h2>
            <p className="text-slate-400 mb-6">
              These pages deepen the cluster with adjacent AI use cases and stronger internal linking.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`${basePath}/${relatedPage.slug}`}
                  className={`group rounded-2xl border border-slate-700 bg-slate-900/50 p-5 ${accent.hover} transition-colors`}
                >
                  <h3
                    className={`text-white font-semibold mb-2 ${
                      kind === 'voice'
                        ? 'group-hover:text-violet-300'
                        : kind === 'sentiment'
                        ? 'group-hover:text-cyan-300'
                        : 'group-hover:text-fuchsia-300'
                    } transition-colors`}
                  >
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
            <h2 className="text-3xl font-bold text-white mb-4">{faqLabel}</h2>
            <p className="text-slate-400 text-lg">
              Buyer questions that usually come up when teams compare AI automation, routing, and live-team handoff.
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
        heading={kind === 'voice'
          ? 'Ready to deploy AI on your phone lines?'
          : kind === 'sentiment'
          ? 'Ready to turn call sentiment into operating data?'
          : 'Ready to turn more website visitors into conversations?'}
        subheading={kind === 'voice'
          ? 'We can map the right AI voice workflow for your team, your call volume, and your existing MyVoIP setup.'
          : kind === 'sentiment'
          ? 'We can map the right post-call analysis workflow for your teams, your call types, and the systems where sentiment data needs to land.'
          : 'We can map the right chatbot workflow for your website, your lead flow, and your handoff process.'}
      />
    </>
  );
}
