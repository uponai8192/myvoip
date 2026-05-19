import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

const APP_STORE_URL = 'https://apps.apple.com/us/app/my-voip/id1577418525';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.my.voip.softphone.android';

export const metadata: Metadata = buildPageMetadata({
  title: 'Mobile VoIP and Business SMS App for iOS and Android',
  description:
    'Use the MyVoIP mobile app to make business calls, send SMS, check voicemail, manage presence, and keep your business number active from iOS, Android, desktop, and field devices.',
  path: '/services/mobile-voip-sms',
  openGraphDescription:
    'Business calling and SMS from your company number on iOS, Android, desktop, and field devices.',
  twitterDescription:
    'Business calling and SMS from your company number on iOS, Android, desktop, and field devices.',
});

function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full sm:w-auto items-center gap-3 bg-black hover:bg-slate-900 text-white font-semibold px-5 py-3 rounded-xl transition-colors border border-slate-700"
      >
        <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span>
          <span className="block text-xs font-normal leading-none opacity-75">Download on the</span>
          <span className="block text-base font-bold leading-tight">App Store</span>
        </span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full sm:w-auto items-center gap-3 bg-black hover:bg-slate-900 text-white font-semibold px-5 py-3 rounded-xl transition-colors border border-slate-700"
      >
        <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M3.18 23.5c.3.17.64.17.93 0l11.55-6.67-2.54-2.54L3.18 23.5z" fill="#EA4335" />
          <path d="M22.45 10.11 19.1 8.2l-2.86 2.86 2.86 2.86 3.38-1.95a1.3 1.3 0 0 0 0-1.86z" fill="#FBBC04" />
          <path d="M3.18.5C2.88.67 2.7 1 2.7 1.38v21.24c0 .38.18.71.48.88l10.94-11.5L3.18.5z" fill="#4285F4" />
          <path d="M4.11.5l11.55 6.67-2.54 2.54L3.18.5z" fill="#34A853" />
        </svg>
        <span>
          <span className="block text-xs font-normal leading-none opacity-75">Get it on</span>
          <span className="block text-base font-bold leading-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}

const capabilities = [
  'Call from the company number on iOS, Android, desktop, or laptop',
  'Send and receive business SMS without exposing personal cell numbers',
  'Check voicemail, missed calls, and call history away from the office',
  'Transfer calls between desk users, mobile users, and ring groups',
  'Keep caller ID, extensions, presence, and routing tied to the business',
  'Support field teams, hybrid staff, sales reps, managers, and dispatch users',
];

const workflows = [
  {
    label: 'Sales and Service Teams',
    text: 'Answer lead calls from the business number, send fast SMS follow-ups, and keep call history inside the company workflow instead of scattered across personal phones.',
  },
  {
    label: 'Field and Dispatch Operations',
    text: 'Give technicians, estimators, drivers, and supervisors managed mobile access while dispatch keeps control of routing, transfers, and business-hours behavior.',
  },
  {
    label: 'Hybrid Offices',
    text: 'Let office staff, remote users, and mobile managers work from the same phone system without forwarding chains, one-off cell numbers, or separate communication apps.',
  },
];

const comparison = [
  ['Personal cell phones', 'Customers see personal numbers, call history is fragmented, and managers lose visibility.'],
  ['Basic call forwarding', 'Calls can reach someone, but transfers, SMS, presence, reporting, and caller ID are limited.'],
  ['MyVoIP mobile app', 'Users work from the company number with calling, SMS, voicemail, transfers, and business identity in one system.'],
];

const faqs = [
  {
    question: 'Can users make outbound calls from the business number?',
    answer:
      'Yes. Approved users can place calls from the MyVoIP app while presenting the company number or assigned business caller ID instead of a personal mobile number.',
  },
  {
    question: 'Does the mobile app support business SMS?',
    answer:
      'Yes. Business SMS can be used for supported numbers and plans, giving teams a cleaner way to text customers from the business identity.',
  },
  {
    question: 'Can mobile users still transfer calls to office staff?',
    answer:
      'Yes. Mobile users can stay connected to the broader phone system, including extensions, transfers, ring groups, and routing rules depending on the setup.',
  },
  {
    question: 'Is this only for people who never use desk phones?',
    answer:
      'No. Many teams use a mix of desk phones, browser calling, desktop softphones, and mobile apps. The goal is to keep everyone on one business communication layer.',
  },
];

export default function MobileVoipSmsPage() {
  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Services', url: 'https://my-voip.com/services/business-voip' },
      { name: 'Mobile VoIP & SMS', url: 'https://my-voip.com/services/mobile-voip-sms' },
    ]),
    buildServiceSchema({
      name: 'Mobile VoIP and Business SMS',
      description:
        'Business calling, SMS, voicemail, presence, and mobile app access for iOS, Android, desktop, and field teams.',
      serviceType: 'Mobile VoIP and business SMS app',
      url: 'https://my-voip.com/services/mobile-voip-sms',
    }),
    buildFaqSchema(faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(20,184,166,0.12),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/services/business-voip" className="hover:text-white">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">Mobile VoIP & SMS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] gap-14 items-center">
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-600/10 px-4 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-cyan-300 text-xs sm:text-sm font-medium">Business calling and SMS from anywhere</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Put Your Business Number on Every Approved Device
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-5">
                The MyVoIP mobile app gives employees business calling, SMS, voicemail, call history, and transfers from iOS and Android without turning personal cell phones into the company phone system.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                It is built for teams that move: field service, sales, real estate, property management, legal, construction, healthcare scheduling, and hybrid offices that need the same professional number everywhere work happens.
              </p>
              <div className="mb-8">
                <AppStoreButtons />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                  Build a Mobile Plan
                </Link>
                <a href="tel:+18336986471" className="border border-slate-600 text-slate-200 hover:border-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                  Call (833) 698-6471
                </a>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute inset-x-8 top-8 bottom-8 rounded-[3rem] bg-cyan-500/10 blur-3xl" />
              <div className="absolute left-0 top-10 w-[58%] overflow-hidden rounded-3xl border border-slate-700 shadow-2xl shadow-black/60">
                <Image
                  src="/site-photos/business-mobile.jpg"
                  alt="Business mobile calling from a smartphone"
                  width={520}
                  height={700}
                  className="h-[520px] w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute right-0 top-0 w-[64%] rounded-[2.25rem] border border-slate-700 bg-slate-950 p-3 shadow-2xl shadow-black/70">
                <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                    <div>
                      <div className="text-white font-semibold">MyVoIP</div>
                      <div className="text-cyan-300 text-xs">Business line active</div>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2h-1C9.8 20 4 14.2 4 7V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      ['Incoming call', 'Main business number', 'Answer'],
                      ['SMS thread', 'Customer follow-up ready', 'Reply'],
                      ['Voicemail', 'Transcript available', 'Review'],
                      ['Transfer', 'Send to dispatch queue', 'Route'],
                    ].map(([title, detail, action]) => (
                      <div key={title} className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 last:border-b-0 last:pb-0">
                        <div>
                          <div className="text-white text-sm font-semibold">{title}</div>
                          <div className="text-slate-400 text-xs">{detail}</div>
                        </div>
                        <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-300 text-xs font-semibold">
                          {action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/60 px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            ['One business identity', 'Calls and texts stay tied to the company, not personal numbers.'],
            ['One system for every user', 'Desk phones, mobile apps, browser calling, and desktop users work together.'],
            ['One place to manage routing', 'Business hours, ring groups, queues, and transfers stay controlled centrally.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="text-white font-semibold mb-2">{title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">What It Replaces</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Stop running business calls through personal phones
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Personal cell phones feel easy until the business starts depending on them. Customers save employee numbers, text threads disappear when someone leaves, managers cannot see missed calls, and the business number loses control of the relationship.
            </p>
            <p className="text-slate-400 leading-relaxed">
              MyVoIP keeps the convenience of mobile work while preserving the business identity, call flow, and visibility your team needs.
            </p>
          </div>
          <div className="divide-y divide-slate-800 border-y border-slate-800">
            {comparison.map(([label, text]) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 py-5">
                <div className="text-white font-semibold">{label}</div>
                <div className="text-slate-400 leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 shadow-2xl shadow-black/60">
            <Image
              src="/site-photos/team-conversation.jpg"
              alt="Team coordinating customer communication from office and mobile devices"
              width={760}
              height={520}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Daily Workflows</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-8 leading-tight">
              Built around how mobile teams actually communicate
            </h2>
            <div className="space-y-8">
              {workflows.map((workflow) => (
                <div key={workflow.label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 border-b border-slate-800 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-white font-semibold">{workflow.label}</h3>
                  <p className="text-slate-400 leading-relaxed">{workflow.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Included Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Everything the mobile worker needs, without losing control
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              The goal is not just putting calls on a phone. It is keeping mobile communication tied to the same business system your office already uses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {capabilities.map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-slate-800 pb-5">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Download the App</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Give your team the app from the first deployment day
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Add the app store links directly to onboarding emails, internal setup docs, and field-team instructions. MyVoIP can help map who should use mobile only, who needs a desk phone, and who should have both.
            </p>
            <AppStoreButtons />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 shadow-2xl shadow-black/60">
            <Image
              src="/site-photos/business-mobile.jpg"
              alt="MyVoIP mobile app for business calling and SMS"
              width={760}
              height={520}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Mobile VoIP & SMS FAQ</h2>
            <p className="text-slate-400 text-lg">
              Straight answers for teams comparing business mobile calling, SMS, and softphone access.
            </p>
          </div>
          <div className="divide-y divide-slate-800 border-y border-slate-800">
            {faqs.map((faq) => (
              <div key={faq.question} className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-4 py-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need business calling and SMS for mobile users?"
        subheading="Tell us how your office, field, and remote users communicate today. We will map the right mix of mobile apps, desk phones, routing, SMS, and support."
      />
    </>
  );
}
