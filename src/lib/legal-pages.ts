export type LegalSignal = {
  title: string;
  description: string;
};

export type LegalFaq = {
  question: string;
  answer: string;
};

export type LegalIndustryPage = {
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
  deploymentSignals: LegalSignal[];
  featuredServiceSlugs: string[];
  relatedPageSlugs: string[];
  faqs: LegalFaq[];
};

export const legalIndustryPages: LegalIndustryPage[] = [
  {
    slug: 'new-york-city-law-firms',
    title: 'VoIP for New York City Law Firms',
    description:
      'Cloud phone systems, legal intake routing, direct attorney lines, and multi-office call coverage for New York City law firms.',
    heroEyebrow: 'NYC Legal Communications',
    heroTitle: 'VoIP and Client Intake Routing for New York City Law Firms',
    heroDescription:
      'Support Manhattan, Brooklyn, Queens, and remote legal staff with direct attorney lines, professional intake routing, and after-hours call coverage that does not feel like a generic answering setup.',
    marketFocus:
      'New York firms often balance partner schedules, intake pressure, and multi-office coordination, so the phone system has to protect responsiveness and professionalism at the same time.',
    overview: [
      'New York City law firms do not just need dial tone. They need a front door that can route prospective clients correctly, protect high-value intake opportunities, and make the firm look organized from the first call.',
      'That is especially true when attorneys split time between offices, court, home, and mobile devices. A weak phone setup creates missed calls, confused handoffs, and too much dependence on one receptionist or one attorney assistant to catch every opportunity.',
    ],
    operationalFocusTitle: 'What NYC legal buyers usually need from the phone system',
    operationalFocus: [
      'Direct numbers for partners, associates, and practice groups',
      'Professional intake routing for new matters and existing clients',
      'After-hours coverage that can escalate urgent legal calls appropriately',
      'Mobile and desktop access for attorneys working between court, office, and home',
      'One communication layer across multiple offices or shared staff',
    ],
    deploymentSignals: [
      {
        title: 'Better intake protection',
        description:
          'Make sure first-contact legal inquiries reach the right team instead of dropping into a shared voicemail box.',
      },
      {
        title: 'Attorney mobility without chaos',
        description:
          'Let attorneys answer from approved devices while keeping the firm number and firm call history intact.',
      },
      {
        title: 'Cleaner multi-office operations',
        description:
          'Connect Manhattan, Brooklyn, Queens, and remote staff with one routing strategy instead of separate phone silos.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'hosted-fax', 'mobile-voip-sms', 'web-video-conferencing'],
    relatedPageSlugs: ['legal-client-intake', 'attorney-direct-lines', 'multi-office-law-firms'],
    faqs: [
      {
        question: 'Can New York law firms route new client calls by practice area?',
        answer:
          'Yes. MyVoIP can create intake paths for litigation, family law, personal injury, estate planning, criminal defense, and other practice-specific workflows so new calls reach the right team faster.',
      },
      {
        question: 'Can attorneys answer firm calls from mobile devices without exposing personal numbers?',
        answer:
          'Yes. Mobile and softphone access let approved users answer from the firm number while keeping personal phone numbers private.',
      },
      {
        question: 'Is this a fit for firms with more than one NYC office?',
        answer:
          'Yes. The system can unify offices and remote staff under one routing structure so intake and existing client calls do not get trapped inside one physical location.',
      },
    ],
  },
  {
    slug: 'atlanta-law-firms',
    title: 'VoIP for Atlanta Law Firms and Intake Teams',
    description:
      'Business VoIP, legal intake routing, after-hours call coverage, and direct attorney lines for Atlanta-area law firms.',
    heroEyebrow: 'Atlanta Legal Market',
    heroTitle: 'Phone Systems for Atlanta Law Firms That Need Faster Client Response',
    heroDescription:
      'Help Atlanta firms respond to new matters faster with intake routing, direct extensions, after-hours coverage, and multi-user communication that works across office and remote schedules.',
    marketFocus:
      'Atlanta legal buyers usually care about speed to intake, polished first-call handling, and keeping attorneys reachable without creating a messy patchwork of cell numbers and callbacks.',
    overview: [
      'For many Atlanta firms, the phone system is tied directly to growth. If new prospective clients are not answered quickly or are routed poorly, the cost shows up as lost consultations and lost matters.',
      'The right setup makes intake easier to manage, gives attorneys and staff cleaner direct accessibility, and helps the firm keep a more professional first impression across both business hours and after-hours coverage.',
    ],
    operationalFocusTitle: 'Common Atlanta law firm phone priorities',
    operationalFocus: [
      'New client intake routing that feels professional from the first call',
      'Attorney direct lines and extension groups by team or practice area',
      'After-hours escalation for urgent or time-sensitive matters',
      'Call coverage for hybrid staff and attorneys outside the office',
      'Voicemail transcription and simpler follow-up workflows',
    ],
    deploymentSignals: [
      {
        title: 'Stronger speed to consultation',
        description:
          'Reduce delay between first call and first qualified response so intake teams can move faster.',
      },
      {
        title: 'Professional front-door experience',
        description:
          'Use cleaner routing and greetings than a cell-only or receptionist-only setup can support consistently.',
      },
      {
        title: 'Flexible for growing firms',
        description:
          'Add users, direct numbers, and routing changes without rebuilding the whole phone environment.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'voip-integration', 'hosted-fax'],
    relatedPageSlugs: ['legal-answering-service', 'legal-client-intake', 'law-office-phone-system'],
    faqs: [
      {
        question: 'Can Atlanta firms use VoIP for both intake and existing client calls?',
        answer:
          'Yes. The system can separate new matter intake from existing client support so each call type reaches the right queue, receptionist, or legal staff member.',
      },
      {
        question: 'Can the phone system support attorneys who work remotely or travel?',
        answer:
          'Yes. MyVoIP supports mobile and desktop calling so attorneys can stay reachable from the firm number without being tied to one desk phone.',
      },
      {
        question: 'Can a growing Atlanta firm start small and expand later?',
        answer:
          'Yes. The routing and user setup can scale over time as the firm adds assistants, intake staff, practice groups, or additional offices.',
      },
    ],
  },
  {
    slug: 'legal-client-intake',
    title: 'Legal Client Intake Phone Systems',
    description:
      'Protect new client opportunities with legal intake routing, recorded receptionist workflows, voicemail transcription, and practice-area call paths for law firms.',
    heroEyebrow: 'Legal Intake',
    heroTitle: 'Phone Systems Built Around Legal Client Intake',
    heroDescription:
      'Make it easier for prospective clients to reach the right legal team, leave useful information, and move toward a consultation instead of getting lost in generic office routing.',
    marketFocus:
      'Legal intake is often where firms feel the phone system most. If intake breaks, marketing spend and referral volume get wasted immediately.',
    overview: [
      'Many law firms do not lose opportunities because the lawyers are weak. They lose them because intake is slow, confusing, or too dependent on one overloaded receptionist. A legal-focused phone setup should protect the first call better than that.',
      'The goal is not just to answer. It is to route new matters intelligently, capture the right details, and create a call path that feels credible and responsive from the first interaction.',
    ],
    operationalFocusTitle: 'Intake-focused communication improvements',
    operationalFocus: [
      'Separate new client calls from existing client support',
      'Route by practice area or urgency level',
      'Use voicemail transcription so missed calls still produce usable detail',
      'Escalate time-sensitive calls after hours when needed',
      'Create cleaner visibility into who is answering and who is missing opportunities',
    ],
    deploymentSignals: [
      {
        title: 'Protects first-contact opportunities',
        description:
          'Better routing and transcription reduce the chances that a qualified prospect gets ignored or delayed.',
      },
      {
        title: 'Fits practice-area workflows',
        description:
          'Route calls differently for personal injury, family law, criminal defense, estate planning, or other matter types.',
      },
      {
        title: 'Supports staff and attorneys together',
        description:
          'Intake staff, reception, and attorneys can all work inside the same communication flow instead of improvising with separate tools.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'voip-integration', 'mobile-voip-sms', 'ai-voice-agents'],
    relatedPageSlugs: ['legal-answering-service', 'attorney-direct-lines', 'new-york-city-law-firms'],
    faqs: [
      {
        question: 'Can legal intake calls be routed to different practice areas?',
        answer:
          'Yes. Intake call flows can be separated by practice area, urgency, office, or staff availability so the right team gets the right calls first.',
      },
      {
        question: 'Does voicemail transcription help legal intake?',
        answer:
          'Yes. It gives staff immediate visibility into missed-call details so they can prioritize callbacks instead of working blind from a generic voicemail notification.',
      },
      {
        question: 'Can the phone system support after-hours intake?',
        answer:
          'Yes. Firms can route after-hours calls to on-call users, voicemail transcription, or other coverage paths depending on the urgency of the practice area.',
      },
    ],
  },
  {
    slug: 'attorney-direct-lines',
    title: 'Direct Attorney Lines and Extensions for Law Firms',
    description:
      'Set up direct attorney numbers, assistant routing, practice-group extensions, and professional call flow for law firms that need faster internal and client access.',
    heroEyebrow: 'Attorney Accessibility',
    heroTitle: 'Direct Attorney Lines Without Losing Firm-Level Call Control',
    heroDescription:
      'Give partners, associates, assistants, and practice groups cleaner direct accessibility while keeping the firm in control of routing, coverage, and call history.',
    marketFocus:
      'Law firms often need attorneys reachable, but not at the cost of turning client communication into an unmanaged web of personal numbers and informal call forwarding.',
    overview: [
      'Direct attorney lines matter because clients want clarity, not a maze. But firms still need receptionist control, assistant coverage, and a record of who is handling communication.',
      'A strong legal phone setup lets attorneys have direct accessibility while keeping the firm in charge of extensions, assistant routing, overflow rules, and how the front door of the practice actually works.',
    ],
    operationalFocusTitle: 'Where direct-line strategy helps most',
    operationalFocus: [
      'Partners and associates who need direct client access',
      'Assistants covering calls when attorneys are unavailable',
      'Practice-group direct numbers for cleaner routing',
      'Remote and hybrid attorneys answering from firm-managed lines',
      'Unified visibility into extension-based communication',
    ],
    deploymentSignals: [
      {
        title: 'Cleaner client access',
        description:
          'Clients can reach the right attorney or team faster without guessing which receptionist path to use.',
      },
      {
        title: 'Better assistant coverage',
        description:
          'Calls can overflow from attorneys to assistants or support staff in a predictable, professional way.',
      },
      {
        title: 'Firm-level control stays intact',
        description:
          'The firm keeps ownership of the numbers, extensions, and routing logic instead of pushing everything to personal devices.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'web-video-conferencing'],
    relatedPageSlugs: ['law-office-phone-system', 'multi-office-law-firms', 'new-york-city-law-firms'],
    faqs: [
      {
        question: 'Can attorneys have direct numbers and still be covered by assistants?',
        answer:
          'Yes. Direct lines can ring the attorney first, then overflow to an assistant, receptionist, or shared practice-group coverage path when needed.',
      },
      {
        question: 'Can firms reassign direct lines if staffing changes?',
        answer:
          'Yes. Cloud-managed direct numbers and extensions are much easier to reassign than a rigid legacy desk-phone setup.',
      },
      {
        question: 'Can attorneys answer direct-line calls away from the office?',
        answer:
          'Yes. Approved mobile and softphone access lets users answer from the firm line while preserving the firm identity on the call.',
      },
    ],
  },
  {
    slug: 'law-office-phone-system',
    title: 'Business Phone Systems for Law Offices',
    description:
      'Professional law office phone systems with receptionist routing, attorney direct lines, conferencing, voicemail transcription, and multi-user legal call handling.',
    heroEyebrow: 'Law Office Operations',
    heroTitle: 'Law Office Phone Systems That Support Daily Legal Workflows',
    heroDescription:
      'Run a more professional law office with clearer receptionist routing, practice-group accessibility, conferencing, and simpler communication across attorneys and staff.',
    marketFocus:
      'This is the baseline legal buyer page: not just intake, not just mobile attorneys, but the full office communication layer that holds the firm together every day.',
    overview: [
      'A law office phone system has to do more than ring. It has to support intake, existing client communication, internal coordination, conference calls, and a front-desk experience that reflects well on the firm.',
      'That is why legal buyers tend to care about direct lines, voicemail transcription, assistant coverage, conference features, and after-hours handling more than generic feature lists.',
    ],
    operationalFocusTitle: 'Core law office communication goals',
    operationalFocus: [
      'Professional front-desk routing',
      'Direct extensions for attorneys and assistants',
      'Conference calling for client reviews and case coordination',
      'Voicemail transcription and faster callback discipline',
      'Cleaner communication across office, remote, and mobile users',
    ],
    deploymentSignals: [
      {
        title: 'Improves the firm’s first impression',
        description:
          'A stronger receptionist and extension setup makes the office feel organized from the first call.',
      },
      {
        title: 'Supports everyday legal coordination',
        description:
          'Conference tools, direct routing, and better voicemail handling help attorneys and staff move faster.',
      },
      {
        title: 'Modernizes without a telecom project',
        description:
          'Firms can shift away from a rigid old PBX without losing the professional call flow they need to preserve.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'hosted-fax', 'web-video-conferencing', 'voip-integration'],
    relatedPageSlugs: ['attorney-direct-lines', 'legal-client-intake', 'multi-office-law-firms'],
    faqs: [
      {
        question: 'What features matter most in a law office phone system?',
        answer:
          'Most firms care most about receptionist routing, direct attorney lines, voicemail transcription, conferencing, and call handling that feels organized and professional to both new and existing clients.',
      },
      {
        question: 'Can firms keep a professional receptionist flow and still support remote staff?',
        answer:
          'Yes. A cloud phone system can keep the front-door experience consistent while allowing approved users to answer from desktop or mobile devices.',
      },
      {
        question: 'Is this only for large firms?',
        answer:
          'No. Solo and small firms benefit from the same structure, especially when they need to look polished and avoid missing valuable calls.',
      },
    ],
  },
  {
    slug: 'legal-answering-service',
    title: 'After-Hours Legal Answering and Call Coverage',
    description:
      'After-hours legal call coverage, voicemail transcription, escalation paths, and professional answering workflows for firms that need better responsiveness outside office hours.',
    heroEyebrow: 'After-Hours Legal Coverage',
    heroTitle: 'After-Hours Legal Answering That Protects Urgent Calls',
    heroDescription:
      'Keep urgent and time-sensitive legal calls from dying in voicemail with better after-hours routing, escalation rules, and professional coverage options.',
    marketFocus:
      'Many firms do not need a full live answering staff around the clock, but they do need a smarter after-hours path than a generic voicemail greeting.',
    overview: [
      'After-hours legal communication is usually where a weak phone system shows itself. Prospective clients call after work. Existing clients call when something urgent happens. And if the only answer is voicemail with no clear path, the firm loses responsiveness quickly.',
      'A better setup gives the firm options: after-hours routing, escalation for urgent calls, voicemail transcription for morning follow-up, and a more deliberate way to decide what deserves immediate attention.',
    ],
    operationalFocusTitle: 'What after-hours legal coverage should improve',
    operationalFocus: [
      'Urgent call escalation rules',
      'Clearer separation between emergency and routine after-hours calls',
      'Voicemail transcription for faster follow-up the next day',
      'Practice-area-specific greetings or call paths',
      'Reduced dependence on one person listening to every voicemail manually',
    ],
    deploymentSignals: [
      {
        title: 'Protects off-hours lead flow',
        description:
          'Prospective clients can still reach a structured intake path instead of disappearing overnight.',
      },
      {
        title: 'Helps urgent calls reach the right person',
        description:
          'Escalation logic can move time-sensitive matters differently from routine inquiries.',
      },
      {
        title: 'Makes morning follow-up easier',
        description:
          'Transcribed messages and cleaner routing reduce the scramble at the start of the business day.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'ai-voice-agents', 'mobile-voip-sms'],
    relatedPageSlugs: ['legal-client-intake', 'atlanta-law-firms', 'law-office-phone-system'],
    faqs: [
      {
        question: 'Can after-hours legal calls be routed differently based on urgency?',
        answer:
          'Yes. Firms can create escalation rules for urgent matters while keeping routine inquiries in a more standard next-business-day follow-up path.',
      },
      {
        question: 'Does voicemail transcription help after-hours legal coverage?',
        answer:
          'Yes. It lets staff review call details quickly without listening through every message one by one the next morning.',
      },
      {
        question: 'Can the after-hours setup stay professional instead of sounding generic?',
        answer:
          'Yes. Greetings, routing, and escalation paths can be configured to reflect the firm’s tone and how it wants clients handled outside normal office hours.',
      },
    ],
  },
  {
    slug: 'multi-office-law-firms',
    title: 'VoIP for Multi-Office Law Firms',
    description:
      'Unify phone routing, attorney extensions, intake coverage, and office coordination for law firms with more than one location.',
    heroEyebrow: 'Multi-Office Legal Firms',
    heroTitle: 'One Phone System for Law Firms With Multiple Offices',
    heroDescription:
      'Keep intake, receptionist workflows, attorney accessibility, and office-to-office coordination inside one cloud phone environment instead of fragmented location-based setups.',
    marketFocus:
      'Multi-office firms usually need the same professional front door everywhere, even when attorneys and staff are spread across offices, practice groups, and remote schedules.',
    overview: [
      'When a firm grows into more than one office, the phone system often becomes harder to manage than it should be. Different locations start using different habits, direct numbers get hard to track, and intake quality becomes inconsistent.',
      'A unified cloud setup fixes that by giving the firm one routing layer, one user environment, and one way to manage receptionist behavior, extensions, call coverage, and cross-office transfers.',
    ],
    operationalFocusTitle: 'Where multi-office legal firms benefit most',
    operationalFocus: [
      'Consistent intake and receptionist handling across offices',
      'Shared attorney and staff directory access',
      'Better transfer paths between offices and practice groups',
      'Centralized number management and call routing changes',
      'Support for hybrid staff who are not in one location every day',
    ],
    deploymentSignals: [
      {
        title: 'One front door for the firm',
        description:
          'Clients get a more consistent experience no matter which office they call first.',
      },
      {
        title: 'Simpler administration',
        description:
          'Firm leadership can manage users, numbers, and routing centrally instead of office by office.',
      },
      {
        title: 'Better office-to-office coordination',
        description:
          'Transfers, extension dialing, and shared coverage work better when every office is on the same system.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'voip-integration', 'mobile-voip-sms', 'web-video-conferencing'],
    relatedPageSlugs: ['new-york-city-law-firms', 'attorney-direct-lines', 'law-office-phone-system'],
    faqs: [
      {
        question: 'Can a multi-office law firm keep one main number and still route by office?',
        answer:
          'Yes. One main number can route callers by office, practice area, or staff group while still preserving a unified firm identity.',
      },
      {
        question: 'Can attorneys transfer calls between offices easily?',
        answer:
          'Yes. Shared extensions, transfer paths, and cloud-managed directories make it easier to move calls across locations.',
      },
      {
        question: 'Is this useful for firms with remote staff as well as physical offices?',
        answer:
          'Yes. Cloud VoIP works well when the firm has a mix of physical offices, home offices, and mobile attorneys who still need one shared communication system.',
      },
    ],
  },
];

export function getLegalIndustryPageBySlug(slug: string): LegalIndustryPage | undefined {
  return legalIndustryPages.find((page) => page.slug === slug);
}
