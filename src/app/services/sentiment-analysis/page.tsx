import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import { buildPageMetadata } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/seo-rich';

export const metadata: Metadata = buildPageMetadata({
  title: 'VoIP Sentiment Analysis for Customer Calls',
  description:
    'Real-time VoIP sentiment analysis for customer calls using AI voice analytics, speech recognition, NLP transcription, agent alerts, automated QA, and trend reporting.',
  path: '/services/sentiment-analysis',
  openGraphDescription:
    'AI-powered call sentiment scoring that helps agents respond faster, managers coach smarter, and teams spot customer experience trends.',
  twitterDescription:
    'AI-powered call sentiment scoring for live agent assistance, automated QA, and customer experience trend reporting.',
});

const stats = [
  { value: 'Real-Time', label: 'Sentiment scoring while calls are active' },
  { value: '3 Signals', label: 'Voice tone, transcript context, and keyword intent' },
  { value: 'Auto QA', label: 'Negative calls flagged for review automatically' },
  { value: 'Trend Data', label: 'Recurring pain points grouped by topic' },
];

const signalCards = [
  {
    title: 'Voice Analytics',
    description:
      'Tracks acoustic cues like speaking pace, pitch movement, volume changes, silence, interruptions, and pauses to detect frustration, uncertainty, urgency, or satisfaction.',
  },
  {
    title: 'NLP and Transcription',
    description:
      'Converts speech into searchable text, then evaluates keyword clusters, intent, escalation language, product references, and policy-related phrases for better context.',
  },
  {
    title: 'Sentiment Scoring',
    description:
      'Assigns positive, neutral, or negative labels with numerical or color-coded scores so agents and managers can see where the call is heading.',
  },
];

const benefits = [
  {
    title: 'Live Agent Assistance',
    description:
      'Agents can see sentiment movement on their dashboard and adjust in the moment. If a caller shifts negative, the agent can slow down, clarify, change scripts, or escalate before the call breaks down.',
  },
  {
    title: 'Automated QA',
    description:
      'Managers do not have to hunt through every recording. AI can flag negative calls, identify coachable moments, track average sentiment, and prioritize the interactions that need human review.',
  },
  {
    title: 'Trend Identification',
    description:
      'Sentiment data becomes more valuable at scale. Teams can see repeated frustration around billing, refunds, scheduling, delivery delays, product changes, or support policies.',
  },
  {
    title: 'Better Coaching Conversations',
    description:
      'Supervisors can coach from evidence instead of anecdotes: transcript excerpts, sentiment changes, call outcomes, silence patterns, and recurring objections.',
  },
  {
    title: 'Customer Experience Visibility',
    description:
      'Leadership can track whether customers are becoming more satisfied, more confused, or more frustrated across departments, locations, campaigns, and service lines.',
  },
  {
    title: 'Faster Follow-Up',
    description:
      'Negative or high-risk calls can trigger callback tasks, manager review, CRM notes, or customer recovery workflows before a complaint becomes churn.',
  },
];

const useCases = [
  {
    team: 'Contact Centers',
    detail:
      'Measure customer mood across high-volume support queues, sales teams, retention desks, and overflow groups.',
  },
  {
    team: 'Healthcare Scheduling',
    detail:
      'Spot frustration around appointment availability, billing questions, hold times, referrals, and follow-up instructions.',
  },
  {
    team: 'Insurance Agencies',
    detail:
      'Track caller sentiment around claims, policy changes, renewals, quote delays, and service requests.',
  },
  {
    team: 'Property Management',
    detail:
      'Identify frustration patterns around repairs, leasing questions, maintenance timelines, and tenant communication.',
  },
  {
    team: 'Sales Teams',
    detail:
      'See which objections create negative shifts and which scripts, offers, or handoffs improve call outcomes.',
  },
  {
    team: 'Multi-Location Businesses',
    detail:
      'Compare sentiment by branch, department, region, manager, campaign, or service line without manually sampling recordings.',
  },
];

const workflow = [
  {
    step: '1',
    title: 'Capture the call',
    description:
      'Calls flow through MyVoIP, where audio, routing data, caller details, and call outcome signals can be tied together.',
  },
  {
    step: '2',
    title: 'Transcribe and analyze',
    description:
      'Speech recognition creates the transcript while NLP and voice analytics evaluate tone, pace, pitch, silence, keywords, and conversation context.',
  },
  {
    step: '3',
    title: 'Score and alert',
    description:
      'The system labels sentiment as positive, neutral, or negative and can alert agents, supervisors, or QA workflows when a call needs attention.',
  },
  {
    step: '4',
    title: 'Report the trends',
    description:
      'Managers review score trends, topic clusters, flagged calls, coaching opportunities, and customer experience changes over time.',
  },
];

const faqs = [
  {
    question: 'What is VoIP sentiment analysis?',
    answer:
      'VoIP sentiment analysis uses AI, speech recognition, natural language processing, and voice analytics to evaluate customer calls. It looks at what was said and how it was said, then classifies the interaction as positive, neutral, or negative.',
  },
  {
    question: 'Can sentiment analysis work during a live call?',
    answer:
      'Yes. Real-time scoring can help agents recognize when a call is becoming tense, confused, or highly positive while there is still time to adjust the conversation.',
  },
  {
    question: 'Does this replace call recordings and QA reviews?',
    answer:
      'No. It makes QA faster and more focused. Instead of randomly sampling calls, managers can review the calls most likely to contain churn risk, coaching moments, escalation issues, or strong examples of successful handling.',
  },
  {
    question: 'What does the system analyze?',
    answer:
      'It can evaluate transcript language, keyword clusters, speaking pace, pitch, volume, silence, pauses, interruptions, and other conversation patterns that help estimate caller mood and call quality.',
  },
];

export default function SentimentAnalysisPage() {
  const schemaJson = JSON.stringify([
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://my-voip.com/' },
      { name: 'Services', url: 'https://my-voip.com/services/business-voip' },
      { name: 'Sentiment Analysis', url: 'https://my-voip.com/services/sentiment-analysis' },
    ]),
    buildServiceSchema({
      name: 'VoIP Sentiment Analysis',
      description:
        'Real-time AI call sentiment scoring, voice analytics, NLP transcription, automated QA, agent alerts, and trend reporting for customer calls.',
      serviceType: 'VoIP sentiment analysis and AI voice analytics',
      url: 'https://my-voip.com/services/sentiment-analysis',
    }),
    buildFaqSchema(faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />

      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-[26rem] w-[26rem] rounded-full bg-cyan-600/10 blur-3xl sm:h-[34rem] sm:w-[34rem] lg:h-[40rem] lg:w-[48rem]" />
          <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-violet-700/10 blur-3xl sm:h-[26rem] sm:w-[26rem] lg:h-[32rem] lg:w-[32rem]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/services/business-voip" className="hover:text-white">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">Sentiment Analysis</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-600/10 px-4 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-xs sm:text-sm font-medium">AI Voice Analytics for Customer Calls</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                VoIP Sentiment Analysis That Shows{' '}
                <span className="text-cyan-300">How Every Call Feels</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-5">
                MyVoIP sentiment analysis uses AI, speech recognition, NLP, and voice analytics to evaluate customer calls in real time. It analyzes tone, pitch, pace, pauses, word choice, and conversation context to classify interactions as positive, neutral, or negative.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Agents get a faster signal when a caller is becoming frustrated. Managers get automated QA and coaching data. Leadership gets trend visibility into what customers are feeling across products, policies, teams, and locations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                  Get a Sentiment Analysis Demo
                </Link>
                <a href="tel:+18336986471" className="border border-slate-600 text-slate-200 hover:border-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg text-center">
                  Call (833) 698-6471
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 bg-cyan-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-slate-700/60">
                <Image
                  src="/site-photos/ai-neural.jpeg"
                  alt="AI voice analytics visualization for call sentiment analysis"
                  width={760}
                  height={540}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
                <div className="grid grid-cols-3 gap-3 border-t border-slate-700/60 bg-slate-900/95 p-4">
                  {['Positive', 'Neutral', 'Negative'].map((label, index) => (
                    <div key={label} className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-center">
                      <div className={index === 0 ? 'text-emerald-300 text-lg font-black' : index === 1 ? 'text-amber-300 text-lg font-black' : 'text-rose-300 text-lg font-black'}>
                        {index === 0 ? '82' : index === 1 ? '54' : '21'}
                      </div>
                      <div className="text-slate-300 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-slate-800/40 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-5">
              <div className="text-2xl font-black text-cyan-300 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Sentiment analysis listens for more than keywords
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              A customer can say the right words while sounding irritated, rushed, confused, or ready to leave. That is why MyVoIP sentiment analysis combines transcript intelligence with acoustic voice signals.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The system evaluates what the caller said, how the caller sounded, how the conversation changed, and whether specific topics repeatedly trigger negative sentiment. That gives teams a clearer picture than call duration or disposition codes alone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {signalCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Customer Experience Intelligence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              What teams can do with call sentiment data
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Sentiment analysis is useful because it turns call quality into operational data that agents, managers, and executives can act on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-violet-500/10 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/60">
              <Image
                src="/ai-photos/post-call-analysis.png"
                alt="Post-call analysis dashboard showing AI call review data"
                width={900}
                height={560}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Automated QA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Stop guessing which calls need review
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Traditional QA depends on small samples. Managers listen to a few calls, write notes, and hope the sample represents the real customer experience. Sentiment analysis changes the starting point.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Negative calls, long silences, repeated interruptions, escalation keywords, and sharp sentiment drops can be flagged automatically. Supervisors can then review the highest-impact calls first and coach from real evidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Flag churn-risk calls', 'Find coaching moments', 'Review transcript context', 'Measure team trends'].map((item) => (
                <div key={item} className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-slate-300 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Deployment Workflow</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              From live call to coaching insight
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 font-black flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">Best-Fit Teams</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight">
              Built for teams where tone changes outcomes
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Sentiment analysis is most valuable where every call carries business risk: lost sales, churn, complaints, missed appointments, unresolved support issues, or damaged customer trust.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <Image
                src="/site-photos/omnichannel.jpg"
                alt="Contact center team using omnichannel customer communication tools"
                width={760}
                height={500}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.map((useCase) => (
              <div key={useCase.team} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.team}</h3>
                <p className="text-slate-400 leading-relaxed">{useCase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What gets measured</h2>
            <div className="space-y-3">
              {[
                'Caller sentiment at the start, middle, and end of the call',
                'Negative topic clusters such as billing, refunds, delays, or policy changes',
                'Agent interruptions, long pauses, and repeated clarification loops',
                'Sentiment by team, department, campaign, location, or call queue',
                'Calls that need supervisor review, callback, or customer recovery',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How it helps managers</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              A single bad call can be useful, but a pattern is where sentiment analysis becomes strategic. Managers can see what types of calls turn negative, which teams need support, and whether process changes are improving customer experience.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              For example, if calls about a new refund policy repeatedly move from neutral to negative, leadership can revise the policy explanation, retrain agents, update scripts, or create a better escalation path.
            </p>
            <p className="text-slate-400 leading-relaxed">
              That is the real value: not just knowing that a call went poorly, but understanding why it happened and what to change next.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">VoIP Sentiment Analysis FAQ</h2>
            <p className="text-slate-400 text-lg">
              Practical answers for teams comparing AI voice analytics and call sentiment scoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to see what your customer calls are really telling you?"
        subheading="Tell us how your calls are routed today. We will map a sentiment analysis workflow for live agent assistance, automated QA, and customer experience reporting."
      />
    </>
  );
}
