import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, industries } from '@/lib/data';
import { buildPageMetadata } from '@/lib/seo';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

const appDownloadLinks = {
  ios: 'https://apps.apple.com/app/id1577418525',
  android: 'https://play.google.com/store/apps/details?id=com.my.voip.softphone.android',
  windows: 'https://github.com/uponai8192/myvoip/releases/latest/download/MY-VOIP-2.2.0.0~8113622174d-x64.exe',
  macIntel: 'https://github.com/uponai8192/myvoip/releases/latest/download/MY-VOIP_2.2_component_x86_signed%20%281%29.pkg',
  macAppleSilicon: 'https://github.com/uponai8192/myvoip/releases/latest/download/MY-VOIP_2.2_component_arm64_signed.pkg',
};

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Business VoIP Phone Service Starting at $9.99/Month',
    description:
      'MyVoIP is the premier provider of cloud communications — business VoIP, SIP trunking, contact centers, and hosted fax starting at $9.99/month. 24/7 US-based support.',
    path: '/',
    openGraphDescription:
      'Business VoIP, SIP trunking, contact centers, hosted fax, and AI-powered communications backed by 24/7 US-based support.',
  }),
  title: 'MyVoIP | Business VoIP Phone Service Starting at $9.99/Month',
};

const serviceIcons: Record<string, React.ReactNode> = {
  'business-voip': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  'contact-centers': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'sip-trunks': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  'hosted-fax': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  ),
  'mobile-voip-sms': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'web-video-conferencing': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  'voip-integration': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  'ai-voice-agents': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  'ai-chatbots': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  'sentiment-analysis': (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h3l2-6 4 12 3-8 2 2h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10M12 18v3" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/10 blur-3xl sm:h-[34rem] sm:w-[34rem] lg:h-[38rem] lg:w-[44rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-blue-800/5 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[25rem] lg:w-[31rem]" />
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium">Starting at just $9.99/month</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Feature-Packed,{' '}
              <span className="text-blue-400">Cost-Effective</span>{' '}
              Hosted VoIP Solution For Your Business
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl mb-8 leading-relaxed">
              MyVoIP is the premier provider of cloud communications. Connect with your customers through all the features you need — backed by 24/7 US-based support specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:+18336986471" className="border border-slate-600 text-slate-200 hover:border-blue-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                Call (833) 698-6471
              </a>
            </div>
            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-400 text-sm">
              {['No Long-Term Contracts', '24/7 US-Based Support', 'HD Voice Quality', 'Setup in 24 Hours', '99.99% Uptime SLA'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: product visual */}
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50">
              <Image
                src="/site-photos/digital-cx.png"
                alt="MyVoIP cloud communications and customer experience platform"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
              <div className="hidden sm:block absolute bottom-5 left-5 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-black text-blue-400">99.99%</div>
                <div className="text-slate-300 text-xs font-medium">Uptime SLA Guaranteed</div>
              </div>
              <div className="hidden sm:block absolute top-5 right-5 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-black text-green-400">24/7</div>
                <div className="text-slate-300 text-xs font-medium">US-Based Support</div>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-slate-700/60 bg-slate-900/95 p-4 sm:hidden">
                <div className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2">
                  <div className="text-xl font-black text-blue-400">99.99%</div>
                  <div className="text-slate-300 text-[11px] font-medium">Uptime SLA Guaranteed</div>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2">
                  <div className="text-xl font-black text-green-400">24/7</div>
                  <div className="text-slate-300 text-[11px] font-medium">US-Based Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-8 px-4 bg-slate-800/40 border-y border-slate-700/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-300 text-lg">
            Get a Professional-Quality Business VoIP Phone System Starting at Just{' '}
            <span className="text-white font-bold text-2xl">$9.99</span>{' '}
            <span className="text-slate-400">/ month</span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stand Out From Your Competitors
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              By implementing these industry-leading VoIP services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all">
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600/30 transition-colors">
                  {serviceIcons[s.slug]}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{s.shortName}</h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{s.description}</p>
                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />

      {/* Why MyVoIP — photo section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photos collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700/50 sm:row-span-2">
              <Image
                src="/site-photos/team-meeting.jpg"
                alt="MyVoIP team in a client meeting"
                width={400}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700/50">
              <Image
                src="/site-photos/team-office.jpg"
                alt="MyVoIP office team"
                width={400}
                height={280}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700/50">
              <Image
                src="/site-photos/team-conversation.jpg"
                alt="MyVoIP team discussing solutions"
                width={400}
                height={280}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Why MyVoIP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-5 leading-tight">
              A Team That Actually Picks Up the Phone
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              We&apos;ve been building business phone systems since 2000. Unlike the big carriers, every support call connects you to a real person on our US-based team — no overseas call centers, no ticket queues, no holding music.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              MyVoIP pairs enterprise-grade VoIP technology with the personal attention that small and mid-size businesses deserve. One call, one team, one bill.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { value: '20+', label: 'Years in Business' },
                { value: '5,000+', label: 'Businesses Served' },
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '$9.99', label: 'Starting Price/mo' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
                  <div className="text-2xl font-black text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/quote" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">VoIP Solutions by Industry</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Tailored communications for your specific business needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 hover:bg-slate-800 transition-all">
                <p className="text-slate-200 font-medium text-sm group-hover:text-white transition-colors">{ind.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mobile App CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-800/60 border border-slate-700 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Photo */}
              <div className="relative h-64 md:h-full min-h-[320px]">
                <Image
                  src="/site-photos/business-mobile.jpg"
                  alt="MyVoIP mobile app on any device"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/60 md:block hidden" />
              </div>
              {/* Copy */}
              <div className="p-10 md:p-14">
                <div className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Mobile App
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Take Your Business Number Anywhere
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  MyVoIP extends VoIP functionality beyond the desk. Make calls, send SMS, check voicemail, and stay connected from any device — iOS or Android.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                  <a
                    href={appDownloadLinks.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center gap-2.5 bg-black hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl transition-colors border border-slate-700"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>
                      <span className="block text-xs font-normal leading-none opacity-75">Download on the</span>
                      <span className="block text-base font-bold leading-tight">App Store</span>
                    </span>
                  </a>
                  <a
                    href={appDownloadLinks.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center gap-2.5 bg-black hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl transition-colors border border-slate-700"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3.18 23.5c.3.17.64.17.93 0l11.55-6.67-2.54-2.54L3.18 23.5z" fill="#EA4335"/>
                      <path d="M22.45 10.11 19.1 8.2l-2.86 2.86 2.86 2.86 3.38-1.95a1.3 1.3 0 0 0 0-1.86z" fill="#FBBC04"/>
                      <path d="M3.18.5C2.88.67 2.7 1 2.7 1.38v21.24c0 .38.18.71.48.88l10.94-11.5L3.18.5z" fill="#4285F4"/>
                      <path d="M4.11.5l11.55 6.67-2.54 2.54L3.18.5z" fill="#34A853"/>
                    </svg>
                    <span>
                      <span className="block text-xs font-normal leading-none opacity-75">Get it on</span>
                      <span className="block text-base font-bold leading-tight">Google Play</span>
                    </span>
                  </a>
                </div>
                <div className="mb-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
                  <div className="mb-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-blue-300">Desktop App Downloads</div>
                    <div className="text-white font-semibold mt-1">Use MyVoIP on Windows or Mac</div>
                    <div className="text-sm text-slate-400 mt-1">Choose the correct desktop installer for your computer.</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={appDownloadLinks.windows}
                    className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Desktop App</div>
                    <div className="text-base font-semibold text-white mb-2">Windows</div>
                    <div className="text-sm text-slate-400">Direct download for Windows.</div>
                  </a>
                  <a
                    href={appDownloadLinks.macIntel}
                    className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Desktop App</div>
                    <div className="text-base font-semibold text-white mb-2">Mac Intel</div>
                    <div className="text-sm text-slate-400">Direct download for Intel-based Macs.</div>
                  </a>
                  <a
                    href={appDownloadLinks.macAppleSilicon}
                    className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Desktop App</div>
                    <div className="text-base font-semibold text-white mb-2">Mac Apple Silicon</div>
                    <div className="text-sm text-slate-400">Direct download for M-series Macs.</div>
                  </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-slate-700/50 rounded-xl">
                  <div className="text-center sm:text-left">
                    <div className="text-2xl font-black text-blue-400">20%</div>
                    <div className="text-slate-400 text-xs">Off Today</div>
                  </div>
                  <div className="h-px w-full bg-slate-600 sm:h-10 sm:w-px" />
                  <div className="flex-1 text-slate-300 text-sm">All packages from <strong className="text-white">$9.99/mo</strong></div>
                  <Link href="/quote" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
