export type BusinessPhoneSystemFaq = {
  question: string;
  answer: string;
};

export type BusinessPhoneSystemPage = {
  slug: string;
  title: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  verticalName: string;
  workflowName: string;
  photo: string;
  overview: string[];
  priorities: string[];
  playbook: {
    title: string;
    description: string;
  }[];
  recommendedServiceSlugs: string[];
  relatedSlugs: string[];
  faqs: BusinessPhoneSystemFaq[];
};

type Vertical = {
  slug: string;
  name: string;
  audience: string;
  operatingReality: string;
  callTypes: string[];
  risk: string;
  industrySlug: string;
  photo: string;
};

type Workflow = {
  slug: string;
  name: string;
  intent: string;
  outcome: string;
  serviceSlugs: string[];
  priorities: string[];
};

const verticals: Vertical[] = [
  {
    slug: 'medical-offices',
    name: 'Medical Offices',
    audience: 'front desk teams, schedulers, nurse lines, and practice managers',
    operatingReality:
      'patients call about appointments, prescription questions, referrals, billing, and urgent concerns, often during the same busy morning window',
    callTypes: ['appointment scheduling', 'patient callbacks', 'referral coordination', 'after-hours triage'],
    risk: 'missed calls can create patient frustration, delayed scheduling, and avoidable administrative work',
    industrySlug: 'healthcare',
    photo: '/site-photos/team-consultation.jpg',
  },
  {
    slug: 'law-firms',
    name: 'Law Firms',
    audience: 'partners, intake coordinators, paralegals, receptionists, and remote attorneys',
    operatingReality:
      'new client inquiries, active case calls, court deadlines, and confidential follow-up all compete for attention',
    callTypes: ['new client intake', 'case status calls', 'attorney transfers', 'document follow-up'],
    risk: 'slow response can cost a signed matter or make existing clients feel ignored',
    industrySlug: 'law-firms',
    photo: '/site-photos/team-office.jpg',
  },
  {
    slug: 'real-estate-brokerages',
    name: 'Real Estate Brokerages',
    audience: 'brokers, agents, transaction coordinators, leasing teams, and showing staff',
    operatingReality:
      'leads arrive from listings, signs, portals, referrals, and open houses while agents are away from a desk',
    callTypes: ['listing inquiries', 'showing requests', 'buyer callbacks', 'transaction coordination'],
    risk: 'a delayed response often means the buyer, seller, or renter contacts a competing brokerage',
    industrySlug: 'real-estate',
    photo: '/site-photos/business-mobile.jpg',
  },
  {
    slug: 'insurance-agencies',
    name: 'Insurance Agencies',
    audience: 'producers, account managers, claims support staff, and agency owners',
    operatingReality:
      'quote requests, policy changes, renewals, claims questions, and carrier follow-up all depend on clean call handling',
    callTypes: ['new quote calls', 'claims questions', 'renewal reminders', 'policy service requests'],
    risk: 'poor call visibility can weaken retention and slow speed to quote',
    industrySlug: 'insurance',
    photo: '/site-photos/team-on-phone.jpg',
  },
  {
    slug: 'dental-practices',
    name: 'Dental Practices',
    audience: 'receptionists, treatment coordinators, office managers, and providers',
    operatingReality:
      'patient scheduling, insurance questions, reminders, urgent pain calls, and cancellations hit the front desk throughout the day',
    callTypes: ['new patient calls', 'appointment reminders', 'insurance questions', 'urgent dental requests'],
    risk: 'weak phone workflows create open chair time and reduce treatment acceptance',
    industrySlug: 'dental',
    photo: '/site-photos/team-consultation.jpg',
  },
  {
    slug: 'property-management',
    name: 'Property Management Companies',
    audience: 'property managers, leasing staff, maintenance coordinators, and portfolio operators',
    operatingReality:
      'tenant calls, owner questions, vendor coordination, leasing inquiries, and maintenance emergencies all need different paths',
    callTypes: ['maintenance requests', 'leasing inquiries', 'owner calls', 'vendor coordination'],
    risk: 'unclear routing can delay repairs, frustrate tenants, and bury valuable leasing inquiries',
    industrySlug: 'property-management',
    photo: '/site-photos/omnichannel.jpg',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    audience: 'owners, managers, hosts, catering coordinators, and multi-unit operators',
    operatingReality:
      'reservation calls, catering requests, delivery questions, private event inquiries, and staffing calls arrive during service rushes',
    callTypes: ['reservations', 'catering inquiries', 'private event calls', 'customer service questions'],
    risk: 'calls missed during lunch or dinner can turn directly into lost orders and bookings',
    industrySlug: 'restaurants',
    photo: '/site-photos/team-conversation.jpg',
  },
  {
    slug: 'construction-companies',
    name: 'Construction Companies',
    audience: 'estimators, project managers, dispatchers, field supervisors, and office administrators',
    operatingReality:
      'bid calls, client updates, supplier questions, field coordination, and emergency site issues rarely happen from one desk',
    callTypes: ['estimate requests', 'project updates', 'supplier calls', 'field coordination'],
    risk: 'communication gaps slow estimates, weaken client confidence, and create jobsite confusion',
    industrySlug: 'construction',
    photo: '/site-photos/team-meeting.jpg',
  },
  {
    slug: 'financial-advisors',
    name: 'Financial Advisors',
    audience: 'advisors, client service associates, operations teams, and branch managers',
    operatingReality:
      'clients expect prompt, professional response for account questions, meeting scheduling, service requests, and urgent market concerns',
    callTypes: ['client service calls', 'meeting scheduling', 'account questions', 'advisor callbacks'],
    risk: 'poor phone discipline can damage trust in a relationship-driven practice',
    industrySlug: 'financial-services',
    photo: '/site-photos/laptop-typing.jpg',
  },
  {
    slug: 'auto-repair-shops',
    name: 'Auto Repair Shops',
    audience: 'service advisors, managers, technicians, parts staff, and shop owners',
    operatingReality:
      'appointment requests, estimate approvals, parts updates, status questions, and tow-in calls compete with counter traffic',
    callTypes: ['repair appointments', 'estimate approvals', 'vehicle status calls', 'parts coordination'],
    risk: 'missed or poorly documented calls slow approvals and leave bays underused',
    industrySlug: 'automotive',
    photo: '/site-photos/voip-phone.jpg',
  },
];

const workflows: Workflow[] = [
  {
    slug: 'missed-call-recovery',
    name: 'Missed Call Recovery',
    intent: 'recover more revenue from calls that would otherwise go unanswered',
    outcome: 'missed-call alerts, voicemail transcription, queues, callbacks, and reporting make follow-up more consistent',
    serviceSlugs: ['business-voip', 'mobile-voip-sms', 'ai-voice-agents', 'contact-centers'],
    priorities: [
      'Missed-call notifications that reach the right person quickly',
      'Voicemail transcription for faster triage',
      'Queue and overflow rules during peak call periods',
      'Callback workflows that keep ownership clear',
      'Reporting that shows where calls are being lost',
    ],
  },
  {
    slug: 'after-hours-answering',
    name: 'After-Hours Answering',
    intent: 'give callers a professional path when live staff are unavailable',
    outcome: 'time-based routing, on-call escalation, AI voice coverage, and voicemail handling keep urgent calls from sitting untouched',
    serviceSlugs: ['ai-voice-agents', 'business-voip', 'mobile-voip-sms', 'contact-centers'],
    priorities: [
      'Separate daytime and after-hours call flows',
      'Escalation for urgent calls and routine capture for everything else',
      'On-call routing to approved users or teams',
      'Transcripts and summaries for the next business day',
      'Clear greetings that set expectations for callers',
    ],
  },
  {
    slug: 'mobile-team-calling',
    name: 'Mobile Team Calling',
    intent: 'keep staff reachable from the business number wherever work happens',
    outcome: 'mobile apps, softphones, business SMS, and transfer rules keep conversations tied to the company instead of personal devices',
    serviceSlugs: ['mobile-voip-sms', 'business-voip', 'voip-integration', 'ai-voice-agents'],
    priorities: [
      'Business-number calling from mobile devices',
      'SMS workflows for quick customer follow-up',
      'Internal transfers between office and field users',
      'User controls that protect personal numbers',
      'Consistent caller ID across distributed staff',
    ],
  },
  {
    slug: 'multi-location-phone-system',
    name: 'Multi-Location Phone Systems',
    intent: 'standardize call handling across several offices, branches, or service areas',
    outcome: 'shared administration, local numbers, department routing, and centralized reporting reduce location-by-location phone chaos',
    serviceSlugs: ['business-voip', 'sip-trunks', 'contact-centers', 'voip-integration'],
    priorities: [
      'Central administration for users and numbers',
      'Local call flows for each branch or service area',
      'Shared reporting across all locations',
      'Failover options when one office has an issue',
      'Consistent greetings and transfer behavior',
    ],
  },
  {
    slug: 'crm-call-reporting',
    name: 'CRM Call Reporting',
    intent: 'connect phone activity to the systems that manage customers and revenue',
    outcome: 'call logs, click-to-call, screen pops, recordings, and workflow integrations help staff work with better context',
    serviceSlugs: ['voip-integration', 'business-voip', 'contact-centers', 'mobile-voip-sms'],
    priorities: [
      'Automatic call logging where teams already work',
      'Click-to-call for faster outbound follow-up',
      'Screen pop or call notes for caller context',
      'Reports that separate leads, service calls, and missed calls',
      'Integration paths that can grow with the operation',
    ],
  },
];

function titleCase(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildRelatedSlugs(vertical: Vertical, workflow: Workflow) {
  const otherWorkflows = workflows
    .filter((item) => item.slug !== workflow.slug)
    .slice(0, 2)
    .map((item) => `${vertical.slug}-${item.slug}`);
  const otherVerticals = verticals
    .filter((item) => item.slug !== vertical.slug)
    .slice(0, 2)
    .map((item) => `${item.slug}-${workflow.slug}`);

  return [...otherWorkflows, ...otherVerticals];
}

export const businessPhoneSystemPages: BusinessPhoneSystemPage[] = verticals.flatMap((vertical) =>
  workflows.map((workflow) => {
    const verticalLabel = titleCase(vertical.slug);
    const workflowLabel = titleCase(workflow.slug);

    return {
      slug: `${vertical.slug}-${workflow.slug}`,
      title: `${workflow.name} for ${vertical.name}`,
      description: `${workflow.name} strategy for ${vertical.name.toLowerCase()} that need ${workflow.intent} with MyVoIP cloud calling, routing, reporting, and support.`,
      heroEyebrow: `${vertical.name} Phone System Guide`,
      heroTitle: `${workflow.name} for ${vertical.name}`,
      heroDescription: `A practical MyVoIP guide for ${vertical.audience} who need to ${workflow.intent} without adding phone-system complexity.`,
      verticalName: vertical.name,
      workflowName: workflow.name,
      photo: vertical.photo,
      overview: [
        `${vertical.name} have a specific communication pattern: ${vertical.operatingReality}. A generic phone line can technically ring, but it usually does not provide the routing, visibility, and follow-up discipline needed when ${vertical.risk}.`,
        `This page focuses on ${workflow.name.toLowerCase()} because the goal is not just to replace a handset. The goal is to create a phone workflow where ${workflow.outcome}. For ${vertical.name.toLowerCase()}, that usually means shaping call paths around ${vertical.callTypes.join(', ')}, and the handoff between people who answer, decide, and follow up.`,
        `MyVoIP works well here because the same platform can combine cloud PBX features, business texting, mobile access, voicemail transcription, AI voice agents, and reporting. The result is a cleaner operating model for ${verticalLabel.toLowerCase()} teams comparing ${workflowLabel.toLowerCase()} options.`,
      ],
      priorities: workflow.priorities,
      playbook: [
        {
          title: 'Map the calls that matter most',
          description: `Start by separating ${vertical.callTypes.slice(0, 3).join(', ')} instead of forcing every caller through the same path.`,
        },
        {
          title: 'Route by urgency and ownership',
          description: `Give ${vertical.audience} clear routing rules so important calls reach the correct person, queue, mobile user, or AI handoff.`,
        },
        {
          title: 'Close the follow-up loop',
          description: `Use transcripts, call logs, SMS, and reports so the team can see what was answered, what was missed, and what still needs action.`,
        },
      ],
      recommendedServiceSlugs: workflow.serviceSlugs,
      relatedSlugs: buildRelatedSlugs(vertical, workflow),
      faqs: [
        {
          question: `Is MyVoIP a fit for ${vertical.name.toLowerCase()} that need ${workflow.name.toLowerCase()}?`,
          answer: `Yes. MyVoIP can be configured around the way ${vertical.name.toLowerCase()} handle ${vertical.callTypes.slice(0, 3).join(', ')}, with routing, mobile access, voicemail transcription, and reporting based on the workflow.`,
        },
        {
          question: `Can ${vertical.name.toLowerCase()} keep existing numbers?`,
          answer:
            'In most cases, yes. MyVoIP supports number porting so customers can keep calling the numbers they already know while the business moves to a more flexible cloud phone system.',
        },
        {
          question: `What services usually support ${workflow.name.toLowerCase()}?`,
          answer: `The most common mix is ${workflow.serviceSlugs.map((slug) => titleCase(slug)).join(', ')}, adjusted to the team size, call volume, and routing requirements.`,
        },
      ],
    };
  })
);

export function getBusinessPhoneSystemPageBySlug(slug: string) {
  return businessPhoneSystemPages.find((page) => page.slug === slug);
}
