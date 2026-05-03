export type HomeServicesSignal = {
  title: string;
  description: string;
};

export type HomeServicesFaq = {
  question: string;
  answer: string;
};

export type HomeServicesPage = {
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
  deploymentSignals: HomeServicesSignal[];
  featuredServiceSlugs: string[];
  relatedPageSlugs: string[];
  faqs: HomeServicesFaq[];
};

export const homeServicesPages: HomeServicesPage[] = [
  {
    slug: 'new-york-city-home-services',
    title: 'VoIP for New York City Home Services Companies',
    description:
      'Business VoIP, dispatch routing, after-hours call coverage, and technician mobile calling for NYC HVAC, plumbing, electrical, and field service teams.',
    heroEyebrow: 'NYC Home Services',
    heroTitle: 'Phone Systems for New York City HVAC, Plumbing, and Field Service Teams',
    heroDescription:
      'Help New York City home service companies answer faster, dispatch cleaner, and keep office and field teams connected under one business phone system.',
    marketFocus:
      'New York home service buyers usually care about missed-call protection, dispatch responsiveness, and keeping technicians reachable without handing out personal cell numbers.',
    overview: [
      'Home service companies in New York City often run into the same bottleneck: the phone system is treated like a front-desk utility when it should really operate like part of dispatch. When calls stack up, technicians are hard to reach, or after-hours coverage is weak, the cost shows up immediately in lost jobs and slower response.',
      'The right setup gives office staff, dispatchers, and field technicians one communication layer. That means business-number mobility, cleaner queues, faster handoff between office and field, and less dependence on one person to catch every call.',
    ],
    operationalFocusTitle: 'What NYC home service buyers usually need first',
    operationalFocus: [
      'Cleaner dispatch handoff between office staff and technicians',
      'Business-number mobile calling for field users',
      'After-hours call coverage for urgent service requests',
      'Better first-call handling during peak inbound periods',
      'Simple routing by service line, borough, or on-call schedule',
    ],
    deploymentSignals: [
      {
        title: 'Protects missed revenue calls',
        description:
          'Queues, transcription, and overflow rules help stop hot inbound calls from dying in voicemail.',
      },
      {
        title: 'Keeps technicians reachable',
        description:
          'Mobile business calling keeps field staff connected without relying on personal numbers.',
      },
      {
        title: 'Fits fast-changing dispatch traffic',
        description:
          'Routing can shift by service line, on-call rotation, or office coverage without rebuilding the system.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'ai-voice-agents', 'contact-centers'],
    relatedPageSlugs: ['plumbing-after-hours-answering', 'multi-technician-dispatch-lines', 'home-services-missed-call-recovery'],
    faqs: [
      {
        question: 'Can a New York City home service company route calls by borough or service line?',
        answer:
          'Yes. MyVoIP can route by department, borough, service category, business hours, or on-call coverage so the right team gets the right calls faster.',
      },
      {
        question: 'Can technicians answer from the company number on mobile devices?',
        answer:
          'Yes. Approved users can place and receive calls from the business number instead of exposing their personal cell number.',
      },
      {
        question: 'Does this help with after-hours emergency calls?',
        answer:
          'Yes. After-hours calls can route to on-call users, voicemail transcription, or AI-assisted answering depending on the urgency and workflow.',
      },
    ],
  },
  {
    slug: 'atlanta-home-services',
    title: 'VoIP for Atlanta Home Services and Dispatch Teams',
    description:
      'Cloud phone systems for Atlanta HVAC, plumbing, electrical, and service businesses that need better dispatch, better call handling, and mobile technician access.',
    heroEyebrow: 'Atlanta Dispatch Operations',
    heroTitle: 'VoIP and Dispatch Routing for Atlanta Home Service Companies',
    heroDescription:
      'Support Atlanta home service teams with business VoIP, after-hours routing, mobile business calling, and cleaner call handling during peak dispatch periods.',
    marketFocus:
      'Atlanta service companies usually care about speed to response, dispatch coordination, and making sure no one loses jobs because the phones were overloaded at the wrong time.',
    overview: [
      'For many Atlanta home service operators, every marketing dollar points back to one operational reality: someone still has to answer the phone correctly. If lead calls, existing customers, and emergency requests all hit the same weak front line, revenue gets lost before dispatch ever starts.',
      'A better cloud phone setup supports dispatch and sales at the same time. It gives office staff clearer routing, gives technicians a managed business line on mobile, and makes after-hours coverage less dependent on one exhausted person carrying the whole load.',
    ],
    operationalFocusTitle: 'Common Atlanta home service communication priorities',
    operationalFocus: [
      'Faster first-call handling for booked jobs and urgent requests',
      'Better dispatch-to-technician communication during the day',
      'Business texting and mobile accessibility for field staff',
      'More professional after-hours coverage for emergencies',
      'Cleaner visibility into missed calls and callback gaps',
    ],
    deploymentSignals: [
      {
        title: 'Improves speed to booked job',
        description:
          'Cleaner call routing and better field accessibility reduce lag between inbound lead and scheduled work.',
      },
      {
        title: 'Supports office and field together',
        description:
          'Dispatchers and technicians can stay inside one communication system instead of bouncing between separate tools.',
      },
      {
        title: 'Scales for growing service teams',
        description:
          'Routing, users, and mobile lines are easier to expand as trucks, technicians, and service areas grow.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'contact-centers', 'ai-voice-agents'],
    relatedPageSlugs: ['hvac-dispatch-phone-system', 'electrician-call-routing', 'multi-technician-dispatch-lines'],
    faqs: [
      {
        question: 'Can Atlanta service companies use one system for lead calls and dispatch calls?',
        answer:
          'Yes. Different call types can route to different users or queues while still staying on one business phone platform.',
      },
      {
        question: 'Can MyVoIP support technicians who work entirely from the field?',
        answer:
          'Yes. Mobile business-number access is a core use case for home service and dispatch-heavy teams.',
      },
      {
        question: 'Can after-hours calls be handled differently from daytime calls?',
        answer:
          'Yes. Time-based routing, overflow, voicemail transcription, and on-call call paths can all be configured separately.',
      },
    ],
  },
  {
    slug: 'hvac-dispatch-phone-system',
    title: 'HVAC Dispatch Phone Systems',
    description:
      'Business VoIP for HVAC companies that need faster dispatch handoff, mobile technician communication, and better inbound call handling during peak seasons.',
    heroEyebrow: 'HVAC Dispatch',
    heroTitle: 'Phone Systems Built Around HVAC Dispatch and Technician Coordination',
    heroDescription:
      'Support HVAC dispatch, office scheduling, and field technicians with cleaner call routing, mobile business numbers, and better after-hours coverage.',
    marketFocus:
      'HVAC companies often feel communication pain first during weather spikes, when the dispatch board fills up and missed calls turn directly into lost service revenue.',
    overview: [
      'HVAC phone traffic is not static. It surges around seasons, emergencies, and install windows, and the dispatch workflow has to absorb that volume without turning into chaos. A cloud phone system helps by separating call types, protecting the front line, and keeping technicians reachable inside the business number environment.',
      'That matters because HVAC teams often need three things at once: better lead handling, better scheduling coordination, and better after-hours coverage when service calls do not stop at the end of the workday.',
    ],
    operationalFocusTitle: 'Where HVAC operators usually need the most improvement',
    operationalFocus: [
      'Queueing for high-volume inbound periods',
      'Technician accessibility without personal number sprawl',
      'After-hours routing for emergency calls',
      'Cleaner scheduling and dispatch communication',
      'Less missed-call leakage during weather-driven surges',
    ],
    deploymentSignals: [
      {
        title: 'Handles seasonal surge better',
        description:
          'Queues, overflow rules, and AI coverage help absorb call spikes without collapsing the front desk.',
      },
      {
        title: 'Better technician coordination',
        description:
          'Dispatch can reach field users through the managed business system instead of unmanaged personal phones.',
      },
      {
        title: 'Supports emergency response workflows',
        description:
          'Urgent calls can route differently from routine service and install traffic.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'ai-voice-agents', 'contact-centers'],
    relatedPageSlugs: ['atlanta-home-services', 'multi-technician-dispatch-lines', 'home-services-missed-call-recovery'],
    faqs: [
      {
        question: 'Can HVAC companies route emergency calls differently from regular service calls?',
        answer:
          'Yes. Routing can be separated by urgency, business hours, service type, or on-call schedule.',
      },
      {
        question: 'Can dispatchers and technicians stay on the same system?',
        answer:
          'Yes. That is one of the biggest advantages of a cloud phone setup for HVAC businesses.',
      },
      {
        question: 'Does this help during seasonal spikes?',
        answer:
          'Yes. Queueing, overflow, voicemail transcription, and AI coverage are especially useful when call volume surges suddenly.',
      },
    ],
  },
  {
    slug: 'plumbing-after-hours-answering',
    title: 'After-Hours Plumbing Call Answering and Routing',
    description:
      'VoIP for plumbing companies that need after-hours call handling, emergency routing, and cleaner handoff between office staff and on-call technicians.',
    heroEyebrow: 'Plumbing Emergencies',
    heroTitle: 'After-Hours Phone Coverage for Plumbing Companies',
    heroDescription:
      'Protect emergency plumbing calls with better after-hours routing, on-call technician handoff, and voicemail transcription that keeps urgent jobs moving.',
    marketFocus:
      'Plumbing buyers often care most about nights, weekends, and overflow periods because that is when missed calls are most likely to become lost emergency work.',
    overview: [
      'Plumbing companies cannot treat after-hours calling like a minor edge case. A burst pipe at 10 p.m. is not just another voicemail, and a weak phone setup creates exactly the wrong kind of delay when the customer is most ready to hire.',
      'A better system separates emergency and non-emergency traffic, makes on-call escalation easier, and keeps office staff from manually patching together forwarding rules every time the schedule changes.',
    ],
    operationalFocusTitle: 'After-hours plumbing phone priorities',
    operationalFocus: [
      'Emergency-vs-routine call separation',
      'On-call rotation routing',
      'Voicemail transcription for missed urgent calls',
      'Cleaner fallback when a first technician does not answer',
      'More professional customer handling at night and on weekends',
    ],
    deploymentSignals: [
      {
        title: 'Improves emergency responsiveness',
        description:
          'Urgent service calls can route to the right on-call path faster than a generic main line.',
      },
      {
        title: 'Reduces manual forwarding chaos',
        description:
          'On-call schedules can be built into the call flow instead of improvised each night.',
      },
      {
        title: 'Protects high-value after-hours jobs',
        description:
          'Better coverage means fewer emergency opportunities get trapped in voicemail.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'ai-voice-agents', 'mobile-voip-sms'],
    relatedPageSlugs: ['new-york-city-home-services', 'home-services-missed-call-recovery', 'multi-technician-dispatch-lines'],
    faqs: [
      {
        question: 'Can after-hours plumbing calls route to an on-call technician automatically?',
        answer:
          'Yes. MyVoIP can route by time of day and on-call workflow so urgent calls do not rely on a manual handoff.',
      },
      {
        question: 'What happens if the first technician does not answer?',
        answer:
          'Fallback rules can send the call to another user, voicemail transcription, or another escalation path.',
      },
      {
        question: 'Can non-emergency calls be treated differently after hours?',
        answer:
          'Yes. Emergency and routine calls can follow different call flows based on business rules.',
      },
    ],
  },
  {
    slug: 'electrician-call-routing',
    title: 'Phone Systems and Call Routing for Electrical Contractors',
    description:
      'VoIP for electrical contractors that need better office-to-field communication, project call routing, and business-number mobility for technicians and estimators.',
    heroEyebrow: 'Electrical Contractors',
    heroTitle: 'VoIP for Electrical Contractors That Need Better Office and Field Coordination',
    heroDescription:
      'Keep estimators, project managers, office staff, and electricians connected with cleaner routing, business mobile calling, and better response visibility.',
    marketFocus:
      'Electrical contractors often need a phone system that can support both project-based work and service-call responsiveness without making every person operate from a separate cell phone workflow.',
    overview: [
      'Electrical companies usually balance two different communication patterns: project work that requires coordination with builders and site managers, and service work that demands faster inbound response. A single business phone system needs to support both without turning into a confusing call tree.',
      'The strongest fit is a cloud system that gives office teams better routing, gives estimators and electricians a managed business line on mobile, and makes it easier to see which calls got answered, transferred, or lost.',
    ],
    operationalFocusTitle: 'Where electrical contractors usually feel communication friction',
    operationalFocus: [
      'Project-specific call routing and direct accessibility',
      'Mobile calling for field users and estimators',
      'Cleaner office-to-field communication',
      'Missed-call visibility and callback discipline',
      'Flexible routing for service work versus project work',
    ],
    deploymentSignals: [
      {
        title: 'Supports project and service traffic',
        description:
          'Different workflows can route differently without forcing separate phone systems.',
      },
      {
        title: 'Makes field accessibility easier',
        description:
          'Business-number mobile access helps electricians and estimators stay reachable cleanly.',
      },
      {
        title: 'Improves call ownership',
        description:
          'Logs, routing, and direct lines make it easier to see who should have handled what.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'voip-integration'],
    relatedPageSlugs: ['atlanta-home-services', 'multi-technician-dispatch-lines', 'home-services-missed-call-recovery'],
    faqs: [
      {
        question: 'Can electrical contractors separate project calls from service calls?',
        answer:
          'Yes. MyVoIP can route by department, service type, project team, or business hours so different call types go to the right place.',
      },
      {
        question: 'Can estimators and field users call out from the company number?',
        answer:
          'Yes. Mobile business calling keeps external communication under the company identity.',
      },
      {
        question: 'Does this help with callback discipline?',
        answer:
          'Yes. Call logs, routing history, and voicemail transcription make missed-call follow-up easier to manage.',
      },
    ],
  },
  {
    slug: 'home-services-missed-call-recovery',
    title: 'Missed Call Recovery for Home Services Companies',
    description:
      'VoIP workflows for HVAC, plumbing, electrical, and field service businesses that want to reduce missed-call leakage and recover more booked jobs.',
    heroEyebrow: 'Missed Call Recovery',
    heroTitle: 'Reduce Missed-Call Leakage for Home Service Companies',
    heroDescription:
      'Use better routing, voicemail transcription, mobile accessibility, and AI-assisted coverage to recover more calls before they turn into lost jobs.',
    marketFocus:
      'For many home service companies, missed calls are not just an annoyance. They are the cleanest measurement of money the business is leaving on the table.',
    overview: [
      'Most home service companies do not lose work because demand disappears. They lose work because inbound calls hit a weak moment: lunch, after-hours, weather spikes, dispatch overload, or one team member being out. That is where a better phone workflow creates direct ROI.',
      'Missed-call recovery is about more than voicemail. It means building call flows, mobile access, transcription, and overflow paths that make it harder for valuable service inquiries to vanish before anyone can act on them.',
    ],
    operationalFocusTitle: 'What usually improves missed-call recovery fastest',
    operationalFocus: [
      'Voicemail transcription for faster callback triage',
      'Mobile accessibility for field and on-call users',
      'Overflow rules when the front desk is overloaded',
      'AI or after-hours coverage during peak periods',
      'Cleaner reporting on where missed calls are happening',
    ],
    deploymentSignals: [
      {
        title: 'Recovers more revenue calls',
        description:
          'The system creates more chances for a valuable inbound call to reach a human or leave useful information.',
      },
      {
        title: 'Shows where breakdowns happen',
        description:
          'Routing visibility helps owners see where the front line is leaking opportunity.',
      },
      {
        title: 'Works across office and field teams',
        description:
          'Field accessibility and better overflow matter just as much as front-desk process.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'ai-voice-agents', 'contact-centers'],
    relatedPageSlugs: ['hvac-dispatch-phone-system', 'plumbing-after-hours-answering', 'electrician-call-routing'],
    faqs: [
      {
        question: 'Can MyVoIP help a home service company see where missed calls are happening?',
        answer:
          'Yes. Logs, routing data, queue behavior, and voicemail transcription make missed-call patterns easier to see and fix.',
      },
      {
        question: 'Is voicemail transcription enough by itself?',
        answer:
          'Usually no. The strongest results come from combining transcription with better routing, mobile accessibility, and overflow or AI coverage.',
      },
      {
        question: 'Does missed-call recovery matter for smaller service companies too?',
        answer:
          'Yes. Smaller teams often feel missed-call leakage even more sharply because a handful of lost jobs can materially affect weekly revenue.',
      },
    ],
  },
  {
    slug: 'multi-technician-dispatch-lines',
    title: 'Multi-Technician Dispatch Lines for Service Businesses',
    description:
      'Cloud phone routing for service businesses that need dispatch lines, technician group calling, and cleaner communication between office staff and field teams.',
    heroEyebrow: 'Dispatch Coordination',
    heroTitle: 'Dispatch Lines for Service Teams with Multiple Technicians in the Field',
    heroDescription:
      'Create clearer communication between office staff, dispatchers, and multiple field technicians with call groups, direct lines, and mobile business calling.',
    marketFocus:
      'Once a service business has several technicians in the field at the same time, the communication problem becomes less about one phone line and more about coordination discipline.',
    overview: [
      'Multi-technician operations break down fast when dispatch and field communication depend on ad hoc cell phone habits. Calls get repeated, ownership gets blurry, and customers feel the lag when the office cannot quickly tell who is available or who missed what.',
      'A cloud dispatch line setup helps by giving the business clear group calling, direct technician accessibility where appropriate, and a cleaner way to move information between office and field without losing the company number in the process.',
    ],
    operationalFocusTitle: 'What dispatch-heavy service teams usually need',
    operationalFocus: [
      'Group lines or queues for dispatch',
      'Technician accessibility through managed business numbers',
      'Clearer transfer paths between office and field',
      'Better handling for overlap and overflow periods',
      'Call ownership visibility when several people are involved',
    ],
    deploymentSignals: [
      {
        title: 'Supports larger dispatch teams',
        description:
          'Group routing and direct accessibility work better once several technicians are in the field at the same time.',
      },
      {
        title: 'Improves field communication control',
        description:
          'The business can keep calls inside one managed system instead of dozens of separate cell workflows.',
      },
      {
        title: 'Reduces office confusion',
        description:
          'Clear transfer paths and call ownership help dispatchers move faster with fewer handoff errors.',
      },
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'contact-centers', 'voip-integration'],
    relatedPageSlugs: ['new-york-city-home-services', 'atlanta-home-services', 'hvac-dispatch-phone-system'],
    faqs: [
      {
        question: 'Can several technicians share one dispatch line workflow?',
        answer:
          'Yes. Queueing, ring groups, and transfer logic can all support multi-technician dispatch operations.',
      },
      {
        question: 'Can field users stay on the company number instead of separate personal lines?',
        answer:
          'Yes. That is one of the most practical benefits of a modern cloud phone platform for service businesses.',
      },
      {
        question: 'Does this help dispatchers move calls faster?',
        answer:
          'Yes. Cleaner routing and better visibility into user availability make dispatch coordination easier.',
      },
    ],
  },
];

export function getHomeServicesPageBySlug(slug: string) {
  return homeServicesPages.find((page) => page.slug === slug);
}
