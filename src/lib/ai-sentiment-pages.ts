export type AiSentimentPage = {
  slug: string;
  title: string;
  description: string;
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
  photo: {
    src: string;
    alt: string;
  };
};

export const aiSentimentPages: AiSentimentPage[] = [
  {
    slug: 'healthcare-patient-call-sentiment',
    title: 'Healthcare Patient Call Sentiment Analysis',
    description:
      'Track patient frustration, urgency, and satisfaction across appointment, triage, and front-desk calls with AI sentiment analysis for healthcare teams.',
    heroEyebrow: 'Healthcare Sentiment AI',
    heroTitle: 'Patient Call Sentiment Analysis for Healthcare and Medical Offices',
    heroDescription:
      'Use AI sentiment analysis to detect stressed callers, flag poor patient experiences faster, and give healthcare teams cleaner visibility into phone performance.',
    marketFocus:
      'Healthcare operators usually want to know where patient friction is building before it turns into lower satisfaction, missed appointments, or heavier front-desk burnout.',
    overview: [
      'Phone conversations carry early warning signs that patient surveys miss. Tone changes, repeated confusion, and signs of distress often appear on calls long before a complaint reaches management.',
      'A sentiment layer on top of call transcripts helps medical teams review patient emotion at scale, separate routine interactions from high-friction experiences, and route follow-up faster.',
    ],
    operationalFocusTitle: 'Where healthcare sentiment analysis adds immediate value',
    operationalFocus: [
      'Front-desk patient experience monitoring',
      'Appointment and scheduling frustration detection',
      'After-hours escalation review',
      'Supervisor visibility into recurring call stress points',
    ],
    deploymentSignals: [
      {
        title: 'Flags patient frustration sooner',
        description:
          'Supervisors can spot repeat confusion or negative tone patterns before they become larger service issues.',
      },
      {
        title: 'Improves coaching for staff',
        description:
          'Managers can review emotional patterns across calls instead of relying on a few random recordings.',
      },
      {
        title: 'Supports better patient follow-up',
        description:
          'High-risk or negative calls can be surfaced automatically for callbacks and service recovery.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'contact-centers', 'hosted-fax', 'voip-integration'],
    faqs: [
      {
        question: 'Can healthcare teams detect patient frustration on calls automatically?',
        answer:
          'Yes. Sentiment analysis can score calls for negative, neutral, or positive emotional patterns and highlight the ones that need review.',
      },
      {
        question: 'Is this useful beyond appointment calls?',
        answer:
          'Yes. It is also useful for billing, referrals, after-hours coverage, and general front-desk interactions.',
      },
      {
        question: 'Can the results feed another system?',
        answer:
          'Yes. Sentiment outcomes can be pushed into dashboards, CRMs, or follow-up workflows through integrations.',
      },
    ],
    photo: {
      src: '/site-photos/team-on-phone.jpg',
      alt: 'Healthcare office staff managing patient phone conversations and sentiment review.',
    },
  },
  {
    slug: 'dental-patient-sentiment-analysis',
    title: 'Dental Patient Sentiment Analysis',
    description:
      'Monitor tone and satisfaction across dental scheduling, insurance, and reminder calls with AI sentiment analysis for dental practices.',
    heroEyebrow: 'Dental Sentiment AI',
    heroTitle: 'Dental Patient Sentiment Analysis for Scheduling and Front-Desk Calls',
    heroDescription:
      'Use AI sentiment scoring to catch stressed patients, identify friction in scheduling calls, and improve dental front-desk performance with better call visibility.',
    marketFocus:
      'Dental practices usually care about appointment friction, insurance confusion, and whether repetitive phone pressure is hurting patient experience.',
    overview: [
      'Dental teams field a heavy mix of appointment changes, insurance questions, and reminder callbacks. Those conversations sound simple, but they often contain the first signs of dissatisfaction or confusion.',
      'AI sentiment analysis helps practice managers review the emotional quality of those calls in a structured way so they can coach the desk, improve scripts, and follow up on poor patient experiences.',
    ],
    operationalFocusTitle: 'What dental teams usually monitor first',
    operationalFocus: [
      'Scheduling and reschedule call sentiment',
      'Insurance and billing frustration signals',
      'Reminder call response quality',
      'Practice-level service recovery opportunities',
    ],
    deploymentSignals: [
      {
        title: 'Surfaces unhappy patient calls',
        description:
          'Practice managers can review negative call outcomes without listening to every recording manually.',
      },
      {
        title: 'Supports front-desk consistency',
        description:
          'The same office can compare call sentiment trends across staff, days, and call reasons.',
      },
      {
        title: 'Finds script problems faster',
        description:
          'Repeated negative reactions often show where wording or process is creating friction.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'business-voip', 'mobile-voip-sms', 'hosted-fax'],
    faqs: [
      {
        question: 'Can dental offices score patient call sentiment automatically?',
        answer:
          'Yes. AI can analyze call transcripts and conversation patterns to identify positive or negative patient tone.',
      },
      {
        question: 'Does this help with scheduling-heavy practices?',
        answer:
          'Yes. Scheduling and rescheduling calls are one of the clearest dental sentiment-analysis use cases.',
      },
      {
        question: 'Can the team use this for coaching?',
        answer:
          'Yes. Sentiment trends make it easier to coach on empathy, clarity, and call control.',
      },
    ],
    photo: {
      src: '/site-photos/voip-phone.jpg',
      alt: 'Dental office phone and patient scheduling workflow used for sentiment analysis.',
    },
  },
  {
    slug: 'urgent-care-call-sentiment-analysis',
    title: 'Urgent Care Call Sentiment Analysis',
    description:
      'Measure urgency, stress, and patient sentiment across urgent care phone traffic to improve escalation and service recovery.',
    heroEyebrow: 'Urgent Care Sentiment AI',
    heroTitle: 'Urgent Care Call Sentiment Analysis for High-Volume Patient Calls',
    heroDescription:
      'Track emotional intensity across urgent care calls so supervisors can spot breakdowns in access, routing, and patient guidance faster.',
    marketFocus:
      'Urgent care buyers usually care about volume spikes, emotional callers, and whether patients are leaving calls more confused than when they started.',
    overview: [
      'Urgent care phone traffic is fast, emotional, and inconsistent. Some calls are simple location questions while others carry urgency, anxiety, or frustration that needs faster attention.',
      'Sentiment analysis gives operators a scalable way to detect emotionally difficult calls, review where guidance is failing, and improve phone workflows without sampling blindly.',
    ],
    operationalFocusTitle: 'Where urgent care call sentiment data helps most',
    operationalFocus: [
      'Negative-tone call detection during spikes',
      'After-hours patient guidance review',
      'Supervisor auditing of escalated conversations',
      'Queue and abandonment root-cause analysis',
    ],
    deploymentSignals: [
      {
        title: 'Highlights high-stress conversations',
        description:
          'Calls with strong urgency or agitation can be routed into review queues automatically.',
      },
      {
        title: 'Improves overflow management',
        description:
          'Teams can see whether heavy-volume windows correlate with worse emotional outcomes.',
      },
      {
        title: 'Strengthens patient access operations',
        description:
          'Managers can tie call sentiment to staffing, scripting, and routing decisions.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'ai-voice-agents', 'business-voip', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can urgent care centers detect stressed callers with AI?',
        answer:
          'Yes. Sentiment models can flag calls that show stronger negative tone or urgency for human review.',
      },
      {
        question: 'Does this help during high call-volume periods?',
        answer:
          'Yes. It is especially useful when supervisors cannot manually review call quality during spikes.',
      },
      {
        question: 'Can it support escalation workflows?',
        answer:
          'Yes. Negative or high-risk calls can trigger follow-up or operational review workflows automatically.',
      },
    ],
    photo: {
      src: '/site-photos/omnichannel.jpg',
      alt: 'Urgent care communication dashboard reviewing patient call sentiment and volume.',
    },
  },
  {
    slug: 'law-firm-intake-sentiment-analysis',
    title: 'Law Firm Intake Sentiment Analysis',
    description:
      'Analyze tone and emotional urgency across legal intake calls to improve qualification, empathy, and intake-team coaching.',
    heroEyebrow: 'Legal Sentiment AI',
    heroTitle: 'Law Firm Intake Sentiment Analysis for New Client Calls',
    heroDescription:
      'Use AI sentiment analysis to understand caller stress, improve legal intake performance, and identify breakdowns in first-contact client experience.',
    marketFocus:
      'Law firms usually care about protecting intake opportunities while making sure anxious callers still receive a credible and empathetic first interaction.',
    overview: [
      'Legal intake calls often arrive with urgency, uncertainty, and emotion. The quality of that first conversation shapes whether the caller trusts the firm enough to continue.',
      'Sentiment analysis helps legal operators review how callers felt during intake, where staff conversations turn cold or confusing, and which calls deserve faster partner or manager attention.',
    ],
    operationalFocusTitle: 'What legal teams usually monitor with sentiment analysis',
    operationalFocus: [
      'Emotion-heavy intake call review',
      'Practice-area routing quality',
      'After-hours intake experience tracking',
      'Coaching for empathy and clarity during first contact',
    ],
    deploymentSignals: [
      {
        title: 'Protects high-value intake',
        description:
          'The firm can identify negative first-touch experiences before they become lost matters.',
      },
      {
        title: 'Improves intake-team coaching',
        description:
          'Managers can compare call sentiment against call outcomes and staff behavior.',
      },
      {
        title: 'Surfaces urgent callers faster',
        description:
          'Emotionally intense calls can be escalated for review instead of disappearing into recordings.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'business-voip', 'voip-integration', 'contact-centers'],
    faqs: [
      {
        question: 'Can law firms analyze how stressed or frustrated callers sound?',
        answer:
          'Yes. Sentiment analysis can help classify the emotional tone of legal intake calls for review and coaching.',
      },
      {
        question: 'Is this useful for after-hours intake too?',
        answer:
          'Yes. It helps firms understand whether after-hours calls are being handled in a way that supports conversion.',
      },
      {
        question: 'Can it improve intake quality over time?',
        answer:
          'Yes. Teams can coach against recurring negative-tone patterns and improve scripts or routing logic.',
      },
    ],
    photo: {
      src: '/site-photos/team-consultation.jpg',
      alt: 'Law firm intake team reviewing client-call sentiment and first-contact performance.',
    },
  },
  {
    slug: 'insurance-quote-call-sentiment-analysis',
    title: 'Insurance Quote Call Sentiment Analysis',
    description:
      'Measure sentiment across insurance quote and service calls to improve producer handoff, lead response, and customer retention.',
    heroEyebrow: 'Insurance Sentiment AI',
    heroTitle: 'Insurance Quote Call Sentiment Analysis for Agencies and Brokerages',
    heroDescription:
      'Use AI sentiment analysis to identify friction in quote calls, improve producer follow-up, and monitor service-team performance across insurance conversations.',
    marketFocus:
      'Insurance teams usually care about lead speed, quote-call conversion, and whether service conversations are creating frustration that hurts retention.',
    overview: [
      'Insurance agencies handle emotionally different call types in the same environment: new quote requests, billing concerns, service questions, and claims-related conversations.',
      'Sentiment analysis helps agencies separate those emotional patterns, identify where callers are losing confidence, and improve both producer and service-team response quality.',
    ],
    operationalFocusTitle: 'Where insurance sentiment scoring pays off',
    operationalFocus: [
      'Quote-call conversion monitoring',
      'Service-call frustration detection',
      'Producer handoff quality review',
      'Retention-risk call identification',
    ],
    deploymentSignals: [
      {
        title: 'Improves producer visibility',
        description:
          'Quote opportunities arrive with emotional context instead of just a missed call or short note.',
      },
      {
        title: 'Strengthens service retention',
        description:
          'Negative calls can trigger callbacks before dissatisfaction turns into churn.',
      },
      {
        title: 'Supports team-level coaching',
        description:
          'Leaders can review sentiment trends by line of business or representative.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'ai-voice-agents', 'voip-integration', 'business-voip'],
    faqs: [
      {
        question: 'Can insurance agencies score quote-call sentiment?',
        answer:
          'Yes. Sentiment analysis can be applied to quote and service calls to classify emotional tone and follow-up risk.',
      },
      {
        question: 'Does this help retention workflows?',
        answer:
          'Yes. It helps agencies identify service calls that may need faster management attention.',
      },
      {
        question: 'Can teams compare sentiment by product line?',
        answer:
          'Yes. The analysis can be grouped by product, team, producer, or workflow.',
      },
    ],
    photo: {
      src: '/site-photos/digital-cx.png',
      alt: 'Insurance agency analytics view tracking quote-call sentiment and follow-up risk.',
    },
  },
  {
    slug: 'mortgage-lead-sentiment-analysis',
    title: 'Mortgage Lead Sentiment Analysis',
    description:
      'Score borrower sentiment on mortgage inquiry calls to improve lead prioritization, loan-officer coaching, and response quality.',
    heroEyebrow: 'Mortgage Sentiment AI',
    heroTitle: 'Mortgage Lead Sentiment Analysis for Borrower Inquiry Calls',
    heroDescription:
      'Use AI sentiment analysis to understand borrower tone, identify fragile leads faster, and improve how mortgage teams handle first-contact calls.',
    marketFocus:
      'Mortgage teams usually want cleaner lead triage, better borrower experience, and more visibility into how loan officers handle emotionally sensitive conversations.',
    overview: [
      'Mortgage inquiries often blend urgency, confusion, and caution. Borrowers may be rate shopping, trying to qualify, or navigating deadlines that make tone matter as much as the content.',
      'Sentiment analysis helps mortgage teams see which calls are warm, skeptical, frustrated, or at risk so follow-up and coaching are based on real conversation quality rather than guesswork.',
    ],
    operationalFocusTitle: 'What mortgage teams usually monitor with sentiment scoring',
    operationalFocus: [
      'Borrower tone on first-contact calls',
      'Loan-officer conversation quality',
      'Lead prioritization by emotional readiness',
      'Referral and partner experience review',
    ],
    deploymentSignals: [
      {
        title: 'Prioritizes fragile leads faster',
        description:
          'Borrowers showing concern or hesitation can be escalated before they disengage.',
      },
      {
        title: 'Improves officer coaching',
        description:
          'Managers can review how tone shifts across qualification and pricing conversations.',
      },
      {
        title: 'Adds context to CRM handoff',
        description:
          'The team sees not only what the borrower asked, but how the call felt.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'business-voip', 'mobile-voip-sms', 'voip-integration'],
    faqs: [
      {
        question: 'Can mortgage teams use sentiment analysis on lead calls?',
        answer:
          'Yes. It helps classify borrower tone and identify which calls need quicker or more careful follow-up.',
      },
      {
        question: 'Is this useful for coaching loan officers?',
        answer:
          'Yes. It gives managers a more scalable way to review emotional quality across calls.',
      },
      {
        question: 'Can results be pushed into a CRM?',
        answer:
          'Yes. Sentiment fields can be mapped into follow-up systems and dashboards through integrations.',
      },
    ],
    photo: {
      src: '/site-photos/laptop-typing.jpg',
      alt: 'Mortgage operations team reviewing borrower-call sentiment and lead follow-up data.',
    },
  },
  {
    slug: 'real-estate-inquiry-sentiment-analysis',
    title: 'Real Estate Inquiry Sentiment Analysis',
    description:
      'Track buyer and renter sentiment across listing and leasing calls to improve lead response, agent handoff, and conversion.',
    heroEyebrow: 'Real Estate Sentiment AI',
    heroTitle: 'Real Estate Inquiry Sentiment Analysis for Buyer, Seller, and Rental Calls',
    heroDescription:
      'Use AI sentiment analysis to understand how property leads feel on the first call and improve follow-up across listings, rentals, and brokerage teams.',
    marketFocus:
      'Real estate teams usually care about speed to lead and whether poor phone experiences are quietly killing conversion on high-intent inquiries.',
    overview: [
      'Property inquiries cool off fast. A missed emotional signal on the first call can mean the difference between a tour, a listing appointment, or a dead lead.',
      'Sentiment analysis helps brokerages see which calls felt urgent, skeptical, excited, or frustrated so agents can prioritize follow-up and managers can improve call handling.',
    ],
    operationalFocusTitle: 'Where real estate sentiment data becomes useful',
    operationalFocus: [
      'Listing inquiry call-quality review',
      'Rental and leasing lead triage',
      'Agent handoff and ISA coaching',
      'Open-house and after-hours follow-up prioritization',
    ],
    deploymentSignals: [
      {
        title: 'Improves speed-to-lead decisions',
        description:
          'Emotionally warm or at-risk callers can be prioritized differently from routine inquiries.',
      },
      {
        title: 'Supports stronger agent coaching',
        description:
          'Brokerages can review how staff tone and clarity affect inquiry outcomes.',
      },
      {
        title: 'Helps protect lead spend',
        description:
          'Paid and organic lead sources become easier to evaluate when conversation quality is visible.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'mobile-voip-sms', 'business-voip', 'ai-chatbots'],
    faqs: [
      {
        question: 'Can brokerages score listing-call sentiment?',
        answer:
          'Yes. Sentiment analysis can help identify buyer, seller, or renter tone across first-contact calls.',
      },
      {
        question: 'Does this help with lead prioritization?',
        answer:
          'Yes. It adds emotional context that helps teams decide which leads need immediate attention.',
      },
      {
        question: 'Can this be used for rental teams too?',
        answer:
          'Yes. Rental and leasing inquiries are a strong fit because the first call is time-sensitive.',
      },
    ],
    photo: {
      src: '/site-photos/team-conversation.jpg',
      alt: 'Real estate team discussing buyer and renter call sentiment before follow-up.',
    },
  },
  {
    slug: 'property-management-tenant-sentiment-analysis',
    title: 'Property Management Tenant Sentiment Analysis',
    description:
      'Analyze tenant-call sentiment across maintenance, leasing, and resident support conversations to improve response quality and retention.',
    heroEyebrow: 'Property Sentiment AI',
    heroTitle: 'Property Management Tenant Sentiment Analysis for Maintenance and Leasing Calls',
    heroDescription:
      'Use AI sentiment analysis to detect resident frustration, review maintenance-call quality, and improve tenant communication across your portfolio.',
    marketFocus:
      'Property operators usually care about tenant frustration, maintenance-response perception, and whether one overloaded office line is damaging resident experience.',
    overview: [
      'Tenant calls often reveal dissatisfaction before surveys or renewal conversations ever do. Maintenance delays, leasing confusion, and after-hours issues all show up first on the phone.',
      'Sentiment analysis gives property teams a way to rank those conversations by emotional severity, review where response quality is slipping, and improve both office and after-hours handling.',
    ],
    operationalFocusTitle: 'What property teams track with sentiment analysis',
    operationalFocus: [
      'Maintenance-call frustration detection',
      'Resident support quality review',
      'Leasing and prospect-call sentiment tracking',
      'After-hours emergency communication analysis',
    ],
    deploymentSignals: [
      {
        title: 'Flags upset residents quickly',
        description:
          'Negative-tone maintenance and support calls can be surfaced for faster follow-up.',
      },
      {
        title: 'Improves portfolio oversight',
        description:
          'Regional teams can compare sentiment trends across sites, teams, and workflows.',
      },
      {
        title: 'Supports service recovery',
        description:
          'The most negative tenant interactions become easier to identify and resolve.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'ai-voice-agents', 'mobile-voip-sms', 'business-voip'],
    faqs: [
      {
        question: 'Can property managers score tenant-call sentiment?',
        answer:
          'Yes. Sentiment analysis can highlight resident frustration across maintenance, leasing, and support calls.',
      },
      {
        question: 'Does this help with maintenance workflows?',
        answer:
          'Yes. Maintenance calls are one of the strongest use cases because tone often signals urgency and dissatisfaction clearly.',
      },
      {
        question: 'Can teams compare buildings or sites?',
        answer:
          'Yes. Sentiment data can be grouped by property, team, or issue category.',
      },
    ],
    photo: {
      src: '/site-photos/team-office.jpg',
      alt: 'Property management office reviewing tenant-call sentiment across maintenance requests.',
    },
  },
  {
    slug: 'home-services-dispatch-sentiment-analysis',
    title: 'Home Services Dispatch Sentiment Analysis',
    description:
      'Track customer sentiment across dispatch and service-booking calls to improve response quality and booked-job conversion.',
    heroEyebrow: 'Dispatch Sentiment AI',
    heroTitle: 'Home Services Dispatch Sentiment Analysis for Service and Booking Calls',
    heroDescription:
      'Use AI sentiment analysis to see where dispatch conversations create trust, confusion, or frustration across home services call flows.',
    marketFocus:
      'Home service operators usually care about booked jobs, after-hours conversion, and whether dispatch conversations are costing the business revenue.',
    overview: [
      'Dispatch and booking calls are often the first real experience a customer has with a home-service brand. Tone, confidence, and clarity during that conversation affect whether the job gets booked.',
      'Sentiment analysis helps owners and managers review those call outcomes at scale, identify friction in dispatch scripts, and improve the emotional quality of first-touch service calls.',
    ],
    operationalFocusTitle: 'Where dispatch sentiment analysis helps first',
    operationalFocus: [
      'Booking-call sentiment review',
      'Dispatch-script and call-control coaching',
      'After-hours emergency call analysis',
      'Cancellation and complaint root-cause review',
    ],
    deploymentSignals: [
      {
        title: 'Protects booked-job conversion',
        description:
          'Managers can see which conversations are leaving callers uncertain or dissatisfied before they disappear.',
      },
      {
        title: 'Improves dispatch consistency',
        description:
          'Teams can coach against recurring emotional failures instead of only reviewing obvious complaints.',
      },
      {
        title: 'Clarifies after-hours quality',
        description:
          'Evening and weekend calls can be measured instead of treated as a blind spot.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'contact-centers', 'mobile-voip-sms', 'business-voip'],
    faqs: [
      {
        question: 'Can home-service businesses analyze customer tone on dispatch calls?',
        answer:
          'Yes. Sentiment analysis can score call emotion and help identify where dispatch quality is hurting conversion.',
      },
      {
        question: 'Is this useful for after-hours service calls?',
        answer:
          'Yes. After-hours calls are often high-value and emotionally charged, which makes sentiment review especially useful.',
      },
      {
        question: 'Can this help dispatch coaching?',
        answer:
          'Yes. It provides structured call-quality data that supports better coaching and script refinement.',
      },
    ],
    photo: {
      src: '/site-photos/business-mobile.jpg',
      alt: 'Home services dispatch workflow on mobile with customer sentiment analysis.',
    },
  },
  {
    slug: 'hvac-service-call-sentiment-analysis',
    title: 'HVAC Service Call Sentiment Analysis',
    description:
      'Score HVAC customer sentiment across emergency, maintenance, and install calls to improve dispatch and service experience.',
    heroEyebrow: 'HVAC Sentiment AI',
    heroTitle: 'HVAC Service Call Sentiment Analysis for Dispatch and Maintenance Teams',
    heroDescription:
      'Use AI sentiment analysis to identify urgency and customer frustration across HVAC booking, repair, and maintenance phone calls.',
    marketFocus:
      'HVAC operators usually care about response speed, emergency-call quality, and whether the dispatcher experience is helping or hurting close rates.',
    overview: [
      'HVAC calls often arrive when the customer is already stressed by heat, cold, or equipment failure. That makes tone analysis especially useful for operational follow-up.',
      'Sentiment analysis lets HVAC teams see which calls were calm, urgent, skeptical, or upset, then connect those outcomes back to scripts, staffing, and booked-job performance.',
    ],
    operationalFocusTitle: 'What HVAC teams usually evaluate first',
    operationalFocus: [
      'Emergency service-call urgency detection',
      'Dispatch conversation quality',
      'Maintenance-plan inquiry sentiment',
      'Install and replacement lead follow-up prioritization',
    ],
    deploymentSignals: [
      {
        title: 'Improves emergency-call handling',
        description:
          'High-stress conversations become easier to flag and review immediately.',
      },
      {
        title: 'Supports dispatcher coaching',
        description:
          'Managers can review whether HVAC calls are being handled with enough clarity and confidence.',
      },
      {
        title: 'Adds insight to lead outcomes',
        description:
          'Sentiment can be paired with booked jobs, no-sales, and callbacks for stronger reporting.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'mobile-voip-sms', 'business-voip', 'contact-centers'],
    faqs: [
      {
        question: 'Can HVAC companies detect urgency and frustration on service calls?',
        answer:
          'Yes. Sentiment analysis can help classify emotional tone and highlight stressful calls for review.',
      },
      {
        question: 'Does this help dispatch quality?',
        answer:
          'Yes. It shows whether customers are leaving calls more confident or more frustrated.',
      },
      {
        question: 'Can results be tied to booked jobs?',
        answer:
          'Yes. Teams often use sentiment data alongside conversion and callback outcomes.',
      },
    ],
    photo: {
      src: '/ai-photos/test-call.png',
      alt: 'HVAC operations screen reviewing live call testing and sentiment-analysis workflow.',
    },
  },
  {
    slug: 'plumbing-customer-sentiment-analysis',
    title: 'Plumbing Customer Sentiment Analysis',
    description:
      'Measure plumbing customer sentiment across leak, emergency, and scheduling calls to improve booking and dispatch performance.',
    heroEyebrow: 'Plumbing Sentiment AI',
    heroTitle: 'Plumbing Customer Sentiment Analysis for Service and Emergency Calls',
    heroDescription:
      'Use AI sentiment analysis to review emergency plumbing calls, booking conversations, and customer frustration patterns before they cost jobs.',
    marketFocus:
      'Plumbing businesses usually care about fast emergency-call handling and avoiding poor first-touch conversations when the caller is already stressed.',
    overview: [
      'Plumbing calls often happen at the worst possible time for the customer. Leaks, backups, and water damage create conversations where urgency and trust matter immediately.',
      'Sentiment analysis helps plumbing teams evaluate whether dispatch calls are calming the customer, confusing them, or causing the job to slip away.',
    ],
    operationalFocusTitle: 'Where plumbing call sentiment data is most useful',
    operationalFocus: [
      'Emergency-call emotional intensity scoring',
      'Booking-call quality review',
      'Dispatch-team coaching and script tuning',
      'Service-recovery follow-up on poor experiences',
    ],
    deploymentSignals: [
      {
        title: 'Flags high-stress calls',
        description:
          'Emergency conversations can be surfaced automatically for priority review and callback decisions.',
      },
      {
        title: 'Improves booking consistency',
        description:
          'Teams can see where call handling is helping or hurting booked-job performance.',
      },
      {
        title: 'Supports owner oversight',
        description:
          'Even smaller plumbing shops gain a clearer view into how the phone experience feels to customers.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'ai-voice-agents', 'contact-centers'],
    faqs: [
      {
        question: 'Can plumbing businesses score emergency-call sentiment?',
        answer:
          'Yes. It is a strong fit because plumbing calls often include stress, urgency, and fast booking decisions.',
      },
      {
        question: 'Does this help smaller dispatch teams?',
        answer:
          'Yes. Smaller teams often lack time for manual QA and benefit from automated call scoring.',
      },
      {
        question: 'Can negative calls trigger follow-up?',
        answer:
          'Yes. Sentiment results can be used to flag calls for callbacks or service recovery.',
      },
    ],
    photo: {
      src: '/ai-photos/extension-routing.png',
      alt: 'Plumbing service call-routing and sentiment-review dashboard for dispatch teams.',
    },
  },
  {
    slug: 'electrical-service-sentiment-analysis',
    title: 'Electrical Service Sentiment Analysis',
    description:
      'Analyze customer sentiment across electrical service, outage, and scheduling calls to improve dispatch and customer confidence.',
    heroEyebrow: 'Electrical Sentiment AI',
    heroTitle: 'Electrical Service Sentiment Analysis for Dispatch and Booking Calls',
    heroDescription:
      'Use AI sentiment analysis to review electrical-service calls, identify stressed customers, and improve how your dispatch team handles high-concern conversations.',
    marketFocus:
      'Electrical contractors usually care about trust, urgency, and whether the first phone conversation is helping the customer feel informed and safe.',
    overview: [
      'Electrical calls often involve uncertainty or safety concerns. That makes the emotional quality of the dispatcher conversation part of the service itself.',
      'Sentiment analysis helps electrical service teams measure those calls consistently, spot negative patterns, and improve both urgency handling and customer reassurance.',
    ],
    operationalFocusTitle: 'What electrical teams usually track first',
    operationalFocus: [
      'Outage and urgent-service call tone',
      'Scheduling-call quality review',
      'Dispatcher confidence and empathy coaching',
      'Complaint and cancellation root-cause analysis',
    ],
    deploymentSignals: [
      {
        title: 'Builds more trust on the phone',
        description:
          'Managers can review whether electrical-service callers are leaving conversations reassured or frustrated.',
      },
      {
        title: 'Surfaces risky interactions',
        description:
          'Negative or emotionally intense calls can be escalated into QA and callback workflows.',
      },
      {
        title: 'Improves service scripting',
        description:
          'Recurring sentiment dips often point directly to process or communication problems.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'contact-centers', 'business-voip', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can electrical-service businesses use AI to score call sentiment?',
        answer:
          'Yes. It can help classify customer tone and identify calls that need review or follow-up.',
      },
      {
        question: 'Does it help with urgent-service calls?',
        answer:
          'Yes. Urgent electrical calls are a strong fit because emotional tone often signals risk and trust issues.',
      },
      {
        question: 'Can sentiment data improve dispatch training?',
        answer:
          'Yes. Teams can use it to coach how dispatchers explain timing, pricing, and next steps.',
      },
    ],
    photo: {
      src: '/ai-photos/sip-registration.png',
      alt: 'Electrical service operations panel using AI call review and sentiment scoring.',
    },
  },
  {
    slug: 'restaurant-guest-sentiment-analysis',
    title: 'Restaurant Guest Sentiment Analysis',
    description:
      'Track guest sentiment across reservation, catering, and phone-order calls to improve response quality and retention.',
    heroEyebrow: 'Restaurant Sentiment AI',
    heroTitle: 'Restaurant Guest Sentiment Analysis for Reservation and Order Calls',
    heroDescription:
      'Use AI sentiment analysis to review how guests feel on reservation, takeout, and event calls so your team can fix service issues faster.',
    marketFocus:
      'Restaurants usually care about missed reservations, rush-hour phone pressure, and whether the call experience is quietly hurting guest loyalty.',
    overview: [
      'Restaurant phone calls happen when staff are busiest and guests want answers immediately. That is exactly when emotional quality often slips.',
      'Sentiment analysis gives owners and managers a way to measure reservation-call experience, review negative interactions, and improve guest communication without listening to every call.',
    ],
    operationalFocusTitle: 'Where restaurant sentiment analysis is most useful',
    operationalFocus: [
      'Reservation-call quality review',
      'Rush-period guest frustration detection',
      'Private-event inquiry sentiment tracking',
      'Repeat service issue identification',
    ],
    deploymentSignals: [
      {
        title: 'Protects reservation revenue',
        description:
          'Teams can identify call experiences that may be pushing guests to book elsewhere.',
      },
      {
        title: 'Improves rush-hour phone handling',
        description:
          'Managers can review whether busy periods are producing worse guest outcomes.',
      },
      {
        title: 'Supports practical coaching',
        description:
          'Sentiment trends show where tone, speed, or clarity need attention.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'ai-voice-agents', 'mobile-voip-sms', 'contact-centers'],
    faqs: [
      {
        question: 'Can restaurants analyze guest sentiment from phone calls?',
        answer:
          'Yes. Reservation, catering, and routine guest calls are all strong use cases for sentiment analysis.',
      },
      {
        question: 'Does this help during busy service windows?',
        answer:
          'Yes. It helps owners understand whether rush periods are creating poor phone experiences.',
      },
      {
        question: 'Can negative calls be flagged for recovery?',
        answer:
          'Yes. Teams can use the analysis to prioritize guest follow-up when needed.',
      },
    ],
    photo: {
      src: '/site-photos/team-meeting.jpg',
      alt: 'Restaurant team reviewing guest phone sentiment and reservation-call performance.',
    },
  },
  {
    slug: 'auto-repair-customer-sentiment-analysis',
    title: 'Auto Repair Customer Sentiment Analysis',
    description:
      'Measure customer sentiment across auto-repair estimate, status, and service calls to improve trust and service communication.',
    heroEyebrow: 'Auto Repair Sentiment AI',
    heroTitle: 'Auto Repair Customer Sentiment Analysis for Service and Estimate Calls',
    heroDescription:
      'Use AI sentiment analysis to understand frustration, trust, and confidence across auto-repair phone calls and improve how advisors handle customers.',
    marketFocus:
      'Auto repair shops usually care about trust, estimate conversations, and whether service calls are building confidence or making customers more skeptical.',
    overview: [
      'Auto repair conversations often involve cost sensitivity, urgency, and uncertainty. The emotional quality of those calls directly affects approval rates and customer loyalty.',
      'Sentiment analysis helps shop owners and managers understand how callers are reacting during estimate updates, service scheduling, and repair-status conversations.',
    ],
    operationalFocusTitle: 'What auto-repair teams usually monitor',
    operationalFocus: [
      'Estimate and approval-call sentiment',
      'Advisor communication quality review',
      'Status-update frustration detection',
      'Customer trust and retention-risk analysis',
    ],
    deploymentSignals: [
      {
        title: 'Improves estimate conversations',
        description:
          'Managers can see where cost explanations are creating confusion or pushback.',
      },
      {
        title: 'Supports service-advisor coaching',
        description:
          'Sentiment patterns help identify weak points in clarity, tone, and expectation setting.',
      },
      {
        title: 'Protects repeat business',
        description:
          'Negative interactions can be reviewed before they turn into lost customers or poor reviews.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'contact-centers', 'voip-integration'],
    faqs: [
      {
        question: 'Can auto-repair shops use AI to analyze customer tone?',
        answer:
          'Yes. Estimate, status, and scheduling calls are strong fits for sentiment scoring and QA.',
      },
      {
        question: 'Does it help with approval-rate conversations?',
        answer:
          'Yes. It helps teams review whether estimate calls are increasing confidence or creating resistance.',
      },
      {
        question: 'Can it support shop coaching?',
        answer:
          'Yes. Managers can use sentiment trends to coach advisors more consistently.',
      },
    ],
    photo: {
      src: '/ai-photos/knowledge-bases.png',
      alt: 'Service-team analytics screen used for auto-repair call sentiment review.',
    },
  },
  {
    slug: 'ecommerce-support-sentiment-analysis',
    title: 'Ecommerce Support Sentiment Analysis',
    description:
      'Track customer sentiment across ecommerce support and order calls to improve retention, escalations, and service coaching.',
    heroEyebrow: 'Ecommerce Sentiment AI',
    heroTitle: 'Ecommerce Support Sentiment Analysis for Order and Service Calls',
    heroDescription:
      'Use AI sentiment analysis to spot frustrated ecommerce customers faster and improve how your team handles shipping, refund, and support conversations.',
    marketFocus:
      'Ecommerce operators usually care about retention, refund pressure, and whether support calls are turning operational issues into customer churn.',
    overview: [
      'Ecommerce support calls often happen after another channel has already failed. By the time a customer calls, the emotional tone matters as much as the issue itself.',
      'Sentiment analysis helps support leaders review those moments at scale, prioritize escalations, and coach agents on how to de-escalate shipping, refund, and order-status problems.',
    ],
    operationalFocusTitle: 'Where ecommerce sentiment analysis helps operations',
    operationalFocus: [
      'Refund and shipping complaint detection',
      'Agent de-escalation coaching',
      'Retention-risk call review',
      'Product or fulfillment issue pattern analysis',
    ],
    deploymentSignals: [
      {
        title: 'Flags churn-risk interactions',
        description:
          'Strong negative-tone support calls can be surfaced for retention follow-up automatically.',
      },
      {
        title: 'Improves support QA',
        description:
          'Leaders can coach against real emotional patterns instead of only average handle time.',
      },
      {
        title: 'Connects service quality to operations',
        description:
          'Recurring negative calls often expose shipping, inventory, or policy breakdowns.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'ai-chatbots', 'business-voip', 'voip-integration'],
    faqs: [
      {
        question: 'Can ecommerce support teams score customer sentiment automatically?',
        answer:
          'Yes. AI can analyze support calls and flag the most negative interactions for review or follow-up.',
      },
      {
        question: 'Does this help with refund-heavy conversations?',
        answer:
          'Yes. Refund and shipping calls are a strong fit because emotional tone often drives retention risk.',
      },
      {
        question: 'Can teams tie sentiment back to operational issues?',
        answer:
          'Yes. Sentiment can be grouped by issue type to identify recurring operational problems.',
      },
    ],
    photo: {
      src: '/site-photos/ai-chatbot.jpeg',
      alt: 'Ecommerce support workflow combining conversation AI and customer sentiment analysis.',
    },
  },
  {
    slug: 'saas-support-sentiment-analysis',
    title: 'SaaS Support Sentiment Analysis',
    description:
      'Score customer sentiment across SaaS support and onboarding calls to improve retention, escalation, and team coaching.',
    heroEyebrow: 'SaaS Sentiment AI',
    heroTitle: 'SaaS Support Sentiment Analysis for Customer Success and Technical Calls',
    heroDescription:
      'Use AI sentiment analysis to identify at-risk SaaS accounts, review difficult support calls, and improve technical and customer-success conversations.',
    marketFocus:
      'SaaS teams usually care about churn risk, onboarding friction, and whether support conversations are building confidence or eroding trust.',
    overview: [
      'SaaS support and success calls often reveal account risk before usage metrics catch it. Frustration, hesitation, and confidence loss show up clearly in conversation tone.',
      'Sentiment analysis helps teams surface those signals faster, route risky accounts for follow-up, and coach support or CS staff with more precision.',
    ],
    operationalFocusTitle: 'Where SaaS call sentiment becomes actionable',
    operationalFocus: [
      'Onboarding and implementation call review',
      'Technical-support frustration detection',
      'Expansion and retention-risk analysis',
      'Customer-success coaching and escalation workflows',
    ],
    deploymentSignals: [
      {
        title: 'Identifies account risk earlier',
        description:
          'Negative-call sentiment often shows up before churn becomes obvious in the data.',
      },
      {
        title: 'Supports stronger handoffs',
        description:
          'Support, success, and account teams can share emotional context alongside the issue summary.',
      },
      {
        title: 'Improves QA for technical teams',
        description:
          'Leaders can review emotional outcomes, not just resolution metrics.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'voip-integration', 'ai-chatbots', 'business-voip'],
    faqs: [
      {
        question: 'Can SaaS companies detect account-risk tone on calls?',
        answer:
          'Yes. Sentiment analysis can highlight negative or uncertain customer conversations that deserve follow-up.',
      },
      {
        question: 'Is this useful for onboarding calls too?',
        answer:
          'Yes. Onboarding and implementation calls are strong use cases because early frustration predicts later churn.',
      },
      {
        question: 'Can this support customer-success teams?',
        answer:
          'Yes. Success teams can use sentiment data to prioritize outreach and coaching.',
      },
    ],
    photo: {
      src: '/site-photos/ai-concept.jpeg',
      alt: 'SaaS customer-support environment using AI sentiment analysis for call quality review.',
    },
  },
  {
    slug: 'education-enrollment-sentiment-analysis',
    title: 'Education Enrollment Sentiment Analysis',
    description:
      'Analyze student and parent sentiment on enrollment calls to improve admissions response, follow-up, and inquiry conversion.',
    heroEyebrow: 'Education Sentiment AI',
    heroTitle: 'Education Enrollment Sentiment Analysis for Admissions and Inquiry Calls',
    heroDescription:
      'Use AI sentiment analysis to understand prospective-student and parent tone across admissions calls and improve enrollment workflows.',
    marketFocus:
      'Education teams usually care about inquiry conversion, after-hours response, and whether admissions conversations are helping families feel informed and confident.',
    overview: [
      'Enrollment and admissions calls often carry uncertainty around tuition, schedule, fit, and process. Those emotional cues matter because they influence whether an inquiry keeps moving.',
      'Sentiment analysis helps schools and programs review how families are reacting on calls, identify where the process feels confusing, and improve admissions coaching and follow-up.',
    ],
    operationalFocusTitle: 'Where education sentiment analysis helps first',
    operationalFocus: [
      'Admissions call-confidence review',
      'Parent and student concern detection',
      'Program-inquiry coaching',
      'After-hours inquiry follow-up prioritization',
    ],
    deploymentSignals: [
      {
        title: 'Improves admissions visibility',
        description:
          'Teams gain a clearer picture of how interested or uncertain inquiries feel on the phone.',
      },
      {
        title: 'Supports better follow-up',
        description:
          'Emotionally fragile inquiries can be prioritized before they drop out of the funnel.',
      },
      {
        title: 'Finds process friction faster',
        description:
          'Recurring negative tone often points to unclear admissions steps or poor expectation setting.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'web-video-conferencing', 'ai-chatbots', 'ai-voice-agents'],
    faqs: [
      {
        question: 'Can schools analyze sentiment on admissions calls?',
        answer:
          'Yes. It can help identify whether prospective students and parents feel confident, uncertain, or frustrated.',
      },
      {
        question: 'Does this improve inquiry follow-up?',
        answer:
          'Yes. Sentiment adds useful context when deciding which inquiries need faster outreach.',
      },
      {
        question: 'Can it help with coaching admissions staff?',
        answer:
          'Yes. Teams can review where tone, clarity, or process explanations are hurting conversion.',
      },
    ],
    photo: {
      src: '/site-photos/laptop-typing.jpg',
      alt: 'Education admissions team reviewing inquiry-call sentiment and enrollment follow-up.',
    },
  },
  {
    slug: 'financial-services-client-sentiment-analysis',
    title: 'Financial Services Client Sentiment Analysis',
    description:
      'Track sentiment across banking, advisory, and financial-support calls to improve service quality and retention.',
    heroEyebrow: 'Financial Sentiment AI',
    heroTitle: 'Financial Services Client Sentiment Analysis for Support and Advisory Calls',
    heroDescription:
      'Use AI sentiment analysis to identify frustrated or at-risk clients faster across financial-service phone conversations.',
    marketFocus:
      'Financial-service teams usually care about trust, service retention, and whether client conversations are reinforcing confidence or creating risk.',
    overview: [
      'Financial calls often involve money stress, urgency, and a high expectation of clarity. Small communication failures can quickly damage trust.',
      'Sentiment analysis helps banks, advisors, and financial-service teams review that emotional quality at scale so they can improve coaching, client follow-up, and service design.',
    ],
    operationalFocusTitle: 'What financial teams usually measure first',
    operationalFocus: [
      'Client-service call sentiment',
      'Escalation and complaint detection',
      'Advisor and support-team coaching',
      'Retention-risk and trust analysis',
    ],
    deploymentSignals: [
      {
        title: 'Protects client confidence',
        description:
          'Negative calls can be flagged quickly before dissatisfaction spreads or assets move.',
      },
      {
        title: 'Improves service-team oversight',
        description:
          'Leaders can compare emotional outcomes across teams, branches, and workflows.',
      },
      {
        title: 'Adds context to compliance reviews',
        description:
          'Teams can pair emotional patterns with call logs, issues, and outcomes for stronger supervision.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'business-voip', 'voip-integration', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can financial-service firms score client call sentiment?',
        answer:
          'Yes. AI can help classify tone across support, advisory, and service conversations.',
      },
      {
        question: 'Does this help retention and service recovery?',
        answer:
          'Yes. It helps teams identify high-friction calls that may need management follow-up.',
      },
      {
        question: 'Can teams review sentiment by branch or advisor?',
        answer:
          'Yes. Sentiment can be grouped by location, team, representative, or call type.',
      },
    ],
    photo: {
      src: '/site-photos/ai-neural.jpeg',
      alt: 'Financial-services analytics environment using AI to review client-call sentiment.',
    },
  },
  {
    slug: 'credit-union-member-sentiment-analysis',
    title: 'Credit Union Member Sentiment Analysis',
    description:
      'Monitor member sentiment across support and account-service calls to improve retention, empathy, and service quality.',
    heroEyebrow: 'Credit Union Sentiment AI',
    heroTitle: 'Credit Union Member Sentiment Analysis for Service and Support Calls',
    heroDescription:
      'Use AI sentiment analysis to understand member tone on phone calls and improve how credit-union teams handle support and account conversations.',
    marketFocus:
      'Credit unions usually care about member trust, service quality, and whether support interactions reflect the relationship-driven brand they promise.',
    overview: [
      'Member service calls often involve account access, loan questions, payment concerns, or branch support. The emotional quality of those conversations shapes retention.',
      'Sentiment analysis helps credit unions monitor that service experience, flag negative interactions, and improve coaching without manually reviewing every recording.',
    ],
    operationalFocusTitle: 'Where credit unions use sentiment analysis most',
    operationalFocus: [
      'Member-service call review',
      'Negative-tone support detection',
      'Branch and contact-center coaching',
      'Retention-risk callback prioritization',
    ],
    deploymentSignals: [
      {
        title: 'Improves member experience tracking',
        description:
          'Teams can monitor emotional outcomes across everyday service conversations at scale.',
      },
      {
        title: 'Supports branch and queue QA',
        description:
          'Call sentiment trends show where support quality differs by location or team.',
      },
      {
        title: 'Strengthens follow-up workflows',
        description:
          'The most negative calls can be routed into member-recovery processes automatically.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'business-voip', 'voip-integration', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can credit unions analyze member-call sentiment automatically?',
        answer:
          'Yes. AI can help score emotional tone and flag calls that need additional review or follow-up.',
      },
      {
        question: 'Does this help with service coaching?',
        answer:
          'Yes. Teams can use sentiment data to coach empathy, clarity, and resolution quality.',
      },
      {
        question: 'Can it be used across branches?',
        answer:
          'Yes. Credit unions can compare sentiment trends by location, queue, or team.',
      },
    ],
    photo: {
      src: '/site-photos/digital-cx.png',
      alt: 'Credit union support analytics tracking member-call sentiment and service outcomes.',
    },
  },
  {
    slug: 'collections-call-sentiment-analysis',
    title: 'Collections Call Sentiment Analysis',
    description:
      'Measure sentiment on collections and payment calls to improve compliance-minded coaching, de-escalation, and recovery workflows.',
    heroEyebrow: 'Collections Sentiment AI',
    heroTitle: 'Collections Call Sentiment Analysis for Payment and Recovery Teams',
    heroDescription:
      'Use AI sentiment analysis to review collections calls, identify escalation risk, and improve agent handling of difficult payment conversations.',
    marketFocus:
      'Collections teams usually care about de-escalation, consistency, and understanding which conversations carry higher emotional risk.',
    overview: [
      'Collections calls are emotionally charged by default. Without structured review, it is hard to know which agents are de-escalating well and which calls are trending toward conflict.',
      'Sentiment analysis helps recovery teams score emotional intensity, compare performance patterns, and focus coaching on the conversations that matter most.',
    ],
    operationalFocusTitle: 'What collections teams usually monitor',
    operationalFocus: [
      'High-friction payment-call detection',
      'Agent de-escalation coaching',
      'Supervisor review of emotionally intense calls',
      'Workflow tuning for disputed or distressed accounts',
    ],
    deploymentSignals: [
      {
        title: 'Flags difficult calls faster',
        description:
          'Supervisors can surface the most emotionally intense conversations for review without manual listening.',
      },
      {
        title: 'Supports controlled coaching',
        description:
          'Managers can coach against tone patterns while keeping review focused on real risk.',
      },
      {
        title: 'Improves operational visibility',
        description:
          'Teams can compare sentiment by queue, collector, campaign, or account type.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'voip-integration', 'business-voip', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can collections teams score the emotional intensity of payment calls?',
        answer:
          'Yes. Sentiment analysis can help identify negative or escalated conversations for coaching and supervision.',
      },
      {
        question: 'Does this help with agent coaching?',
        answer:
          'Yes. It gives managers a faster way to find calls where de-escalation skills matter most.',
      },
      {
        question: 'Can it be segmented by queue or campaign?',
        answer:
          'Yes. The data can be organized by campaign, collector, account type, or issue category.',
      },
    ],
    photo: {
      src: '/site-photos/omnichannel.jpg',
      alt: 'Collections call-center workflow reviewing emotionally intense payment-call sentiment.',
    },
  },
  {
    slug: 'appointment-booking-sentiment-analysis',
    title: 'Appointment Booking Sentiment Analysis',
    description:
      'Track customer and patient sentiment on appointment-booking calls to improve conversion, scheduling clarity, and service recovery.',
    heroEyebrow: 'Booking Sentiment AI',
    heroTitle: 'Appointment Booking Sentiment Analysis for Scheduling and Front-Desk Calls',
    heroDescription:
      'Use AI sentiment analysis to understand how callers feel during appointment-booking conversations and improve conversion across scheduling workflows.',
    marketFocus:
      'Teams that depend on appointments usually care about call conversion, first-touch responsiveness, and whether scheduling friction is quietly damaging revenue.',
    overview: [
      'Appointment calls seem routine, but they often contain the earliest signs of confusion, impatience, or trust loss. That matters because scheduling is the front door for many businesses.',
      'Sentiment analysis helps operators review booking quality at scale, compare staff performance, and identify where scripts or scheduling policies are creating avoidable friction.',
    ],
    operationalFocusTitle: 'Where scheduling teams use sentiment analysis first',
    operationalFocus: [
      'Booking-call conversion review',
      'Reschedule and cancellation frustration detection',
      'Front-desk coaching and script tuning',
      'Service-recovery callbacks after poor experiences',
    ],
    deploymentSignals: [
      {
        title: 'Improves booking visibility',
        description:
          'Supervisors can see which calls felt smooth and which ones created resistance or confusion.',
      },
      {
        title: 'Supports better scheduling scripts',
        description:
          'Recurring sentiment drops help teams pinpoint exactly where the process feels difficult.',
      },
      {
        title: 'Protects conversion opportunities',
        description:
          'Negative booking calls can be surfaced before the caller disappears for good.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'business-voip', 'mobile-voip-sms', 'voip-integration'],
    faqs: [
      {
        question: 'Can appointment-heavy businesses score scheduling-call sentiment?',
        answer:
          'Yes. Booking and reschedule calls are one of the clearest sentiment-analysis use cases.',
      },
      {
        question: 'Does this help improve conversion?',
        answer:
          'Yes. It helps teams identify which booking calls are losing trust or creating friction before appointments are lost.',
      },
      {
        question: 'Can it support coaching for schedulers?',
        answer:
          'Yes. Sentiment data makes scheduling coaching more specific and scalable.',
      },
    ],
    photo: {
      src: '/ai-photos/add-phone-number.png',
      alt: 'Appointment-booking workflow integrated with AI call review and sentiment analysis.',
    },
  },
  {
    slug: 'after-hours-call-sentiment-analysis',
    title: 'After-Hours Call Sentiment Analysis',
    description:
      'Measure sentiment on after-hours calls to understand whether overnight and weekend coverage is helping or hurting customer experience.',
    heroEyebrow: 'After-Hours Sentiment AI',
    heroTitle: 'After-Hours Call Sentiment Analysis for Nights, Weekends, and Overflow',
    heroDescription:
      'Use AI sentiment analysis to review overnight, weekend, and overflow calls so you can measure after-hours service quality instead of guessing.',
    marketFocus:
      'Operations leaders usually care about what happens when live staffing is thin, because after-hours communication can either protect revenue or quietly damage it.',
    overview: [
      'After-hours calls are easy to ignore operationally because they happen outside normal supervision. That is also where poor experiences often hide.',
      'Sentiment analysis gives teams a way to measure those conversations systematically, compare them against daytime performance, and decide where staffing, AI, or workflow changes are needed.',
    ],
    operationalFocusTitle: 'What after-hours sentiment analysis usually reveals',
    operationalFocus: [
      'Night and weekend call-quality review',
      'Overflow and voicemail-replacement performance',
      'Emergency-call emotional outcomes',
      'Coverage-gap detection across schedules and teams',
    ],
    deploymentSignals: [
      {
        title: 'Creates visibility after hours',
        description:
          'Managers can review the emotional quality of calls that would otherwise stay hidden.',
      },
      {
        title: 'Supports staffing decisions',
        description:
          'Teams can compare whether certain time windows consistently produce worse sentiment.',
      },
      {
        title: 'Helps validate AI or overflow setups',
        description:
          'After-hours sentiment trends show whether automation and routing are actually working for callers.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'contact-centers', 'business-voip', 'mobile-voip-sms'],
    faqs: [
      {
        question: 'Can businesses score after-hours call sentiment separately?',
        answer:
          'Yes. Sentiment can be analyzed by time of day, queue, or coverage model.',
      },
      {
        question: 'Does this help compare daytime and overnight experience?',
        answer:
          'Yes. It helps teams see whether after-hours coverage is creating worse emotional outcomes.',
      },
      {
        question: 'Can this validate AI answering setups?',
        answer:
          'Yes. It is useful for measuring whether after-hours automation is reducing frustration or making it worse.',
      },
    ],
    photo: {
      src: '/site-photos/business-mobile.jpg',
      alt: 'After-hours mobile support and AI sentiment review for nighttime call coverage.',
    },
  },
  {
    slug: 'multilingual-call-sentiment-analysis',
    title: 'Multilingual Call Sentiment Analysis',
    description:
      'Analyze sentiment across multilingual business calls to improve service quality, escalation, and coaching across languages.',
    heroEyebrow: 'Multilingual Sentiment AI',
    heroTitle: 'Multilingual Call Sentiment Analysis for English, Spanish, and More',
    heroDescription:
      'Use AI sentiment analysis on multilingual calls to measure tone consistently across languages and improve service quality for a broader customer base.',
    marketFocus:
      'Teams serving multilingual callers usually care about consistency, fairness, and making sure emotional quality does not disappear when calls happen outside English.',
    overview: [
      'Multilingual call environments create a QA blind spot when teams cannot review every language with the same speed and consistency.',
      'Sentiment analysis helps close that gap by scoring emotional patterns across supported languages, giving supervisors better visibility into escalations, confusion, and service quality.',
    ],
    operationalFocusTitle: 'Where multilingual sentiment scoring helps most',
    operationalFocus: [
      'Cross-language service-quality review',
      'Escalation detection on Spanish and English calls',
      'Supervisor visibility into translation or clarity issues',
      'Balanced coaching across multilingual teams',
    ],
    deploymentSignals: [
      {
        title: 'Expands QA coverage across languages',
        description:
          'Teams get faster insight into calls they might otherwise review much later or not at all.',
      },
      {
        title: 'Improves multilingual coaching',
        description:
          'Sentiment trends help pinpoint where clarity and confidence differ by language.',
      },
      {
        title: 'Supports more consistent service',
        description:
          'Leaders can compare emotional outcomes across language groups instead of relying on assumptions.',
      },
    ],
    featuredServiceSlugs: ['ai-voice-agents', 'contact-centers', 'business-voip', 'voip-integration'],
    faqs: [
      {
        question: 'Can sentiment analysis work on multilingual calls?',
        answer:
          'Yes. It can be used across supported languages to classify emotional tone and review call quality more consistently.',
      },
      {
        question: 'Does this help bilingual service teams?',
        answer:
          'Yes. It helps leaders compare outcomes across languages and identify training needs more clearly.',
      },
      {
        question: 'Can it flag negative calls regardless of language?',
        answer:
          'Yes. That is one of the main operational benefits of multilingual sentiment analysis.',
      },
    ],
    photo: {
      src: '/ai-photos/voice-selection.png',
      alt: 'Multilingual voice-selection and sentiment-analysis workflow for business phone calls.',
    },
  },
  {
    slug: 'qa-coaching-sentiment-analysis',
    title: 'QA Coaching Sentiment Analysis',
    description:
      'Use sentiment analysis to strengthen QA and coaching by surfacing emotionally difficult calls and measurable call-quality trends.',
    heroEyebrow: 'QA Sentiment AI',
    heroTitle: 'QA Coaching Sentiment Analysis for Contact Centers and Service Teams',
    heroDescription:
      'Use AI sentiment analysis to find the calls that matter most for coaching and improve QA programs with better emotional signal, not just random sampling.',
    marketFocus:
      'QA leaders usually care about coaching efficiency, review prioritization, and making sure the loudest or longest calls are not the only ones being audited.',
    overview: [
      'Traditional QA samples a tiny fraction of conversations and often misses the emotionally important ones. That limits how much coaching actually changes behavior.',
      'Sentiment analysis helps teams surface high-friction calls automatically, prioritize review queues, and tie emotional outcomes directly to QA and coaching programs.',
    ],
    operationalFocusTitle: 'How QA teams usually use sentiment analysis',
    operationalFocus: [
      'Priority-based call review queues',
      'Emotion-driven coaching selection',
      'Supervisor visibility into repeat performance issues',
      'Call-quality trend analysis by rep, team, or queue',
    ],
    deploymentSignals: [
      {
        title: 'Makes QA review more targeted',
        description:
          'Supervisors can focus on calls that show stronger emotional outcomes instead of random samples alone.',
      },
      {
        title: 'Improves coaching efficiency',
        description:
          'Agents get feedback from conversations that actually reflect customer experience risk.',
      },
      {
        title: 'Creates measurable trend data',
        description:
          'Leaders can track whether coaching changes are improving call sentiment over time.',
      },
    ],
    featuredServiceSlugs: ['contact-centers', 'voip-integration', 'business-voip', 'ai-voice-agents'],
    faqs: [
      {
        question: 'Can sentiment analysis improve QA programs?',
        answer:
          'Yes. It helps supervisors prioritize which calls deserve review and coaching first.',
      },
      {
        question: 'Is this useful outside large contact centers?',
        answer:
          'Yes. Smaller service teams often benefit because they have even less time for manual QA.',
      },
      {
        question: 'Can coaching impact be measured over time?',
        answer:
          'Yes. Teams can track sentiment trends before and after process or coaching changes.',
      },
    ],
    photo: {
      src: '/ai-photos/post-call-analysis.png',
      alt: 'Post-call analytics screen showing QA coaching and sentiment-analysis data.',
    },
  },
];

export function getAiSentimentPageBySlug(slug: string): AiSentimentPage | undefined {
  return aiSentimentPages.find((page) => page.slug === slug);
}
