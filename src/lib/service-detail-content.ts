export type ServiceDetailContent = {
  strategyEyebrow: string;
  strategyHeading: string;
  strategyParagraphs: string[];
  bestFitTitle: string;
  bestFitPoints: string[];
  rolloutTitle: string;
  rolloutPoints: string[];
  checklistTitle: string;
  checklistPoints: string[];
};

export const serviceDetailContentBySlug: Record<string, ServiceDetailContent> = {
  'business-voip': {
    strategyEyebrow: 'Operational Fit',
    strategyHeading: 'Business VoIP works best when the company wants one system for every user and every location',
    strategyParagraphs: [
      'Business VoIP usually becomes the right answer when the company is tired of piecing together desk phones, forwarding rules, personal cell numbers, and one-off office hardware. Buyers at that point are usually trying to simplify administration while making the business easier to reach.',
      'The strongest fit is not just any business with phones. It is a business that wants one communication layer across front desk, leadership, remote staff, sales, field users, and customer support without carrying the operational burden of a legacy PBX.',
    ],
    bestFitTitle: 'Where business VoIP usually creates the clearest return',
    bestFitPoints: [
      'Companies replacing an aging PBX or several disconnected local office systems',
      'Teams with a mix of office, hybrid, and remote users who all need the same business number environment',
      'Organizations that want queues, direct extensions, voicemail transcription, and mobile access without enterprise telecom complexity',
      'Multi-location businesses that need one admin layer instead of office-by-office phone management',
    ],
    rolloutTitle: 'What smart buyers usually lock down before rollout',
    rolloutPoints: [
      'Main-number routing and auto-attendant structure',
      'Which users need desk phones, softphones, or mobile-first access',
      'Number porting order and fallback coverage during cutover',
      'How after-hours calls should be handled for revenue, support, and emergency traffic',
    ],
    checklistTitle: 'What to compare before choosing a provider',
    checklistPoints: [
      'Actual support quality after deployment, not just activation promises',
      'How easy it is to add users, numbers, and routing changes later',
      'Whether voicemail, mobile access, and texting are native or bolted on',
      'What the system looks like when one office internet circuit or handset fails',
    ],
  },
  'contact-centers': {
    strategyEyebrow: 'High-Volume Operations',
    strategyHeading: 'Contact center buyers usually need control, visibility, and cleaner channel ownership',
    strategyParagraphs: [
      'A contact center platform matters when inbound demand is too heavy or too operationally important for a front-desk phone system to manage well. At that stage, the real problem is not just ringing calls. It is queue ownership, agent accountability, supervisor visibility, and keeping channels from turning into chaos.',
      'That makes this a strong fit for sales teams, support teams, intake teams, and service organizations where answer speed, transfer discipline, and reporting quality all affect revenue or customer retention.',
    ],
    bestFitTitle: 'Best-fit contact center environments',
    bestFitPoints: [
      'Inbound sales teams that need faster queue response and cleaner lead distribution',
      'Customer support teams managing voice, SMS, chat, and escalation in one place',
      'Operations teams that need recordings, dashboards, and QA workflows for supervisors',
      'Businesses where overflow and staffing swings make static routing unreliable',
    ],
    rolloutTitle: 'What usually matters most before go-live',
    rolloutPoints: [
      'Queue design by call type, priority, and skill group',
      'Supervisor visibility into live activity, recordings, and service levels',
      'Escalation paths for overflow, abandoned calls, and urgent contact types',
      'How voice will connect to CRM, ticketing, and follow-up systems',
    ],
    checklistTitle: 'What serious buyers compare',
    checklistPoints: [
      'How reporting actually looks for supervisors, not just executives',
      'Whether routing logic can change quickly when staffing changes',
      'If voice, SMS, and chat really live in one tool or are separate modules',
      'How fast QA and coaching workflows can happen after problematic calls',
    ],
  },
  'sip-trunks': {
    strategyEyebrow: 'Phased Modernization',
    strategyHeading: 'SIP trunking is strongest when leadership wants change without ripping out everything at once',
    strategyParagraphs: [
      'SIP trunking is not just a cost play. It is usually a transition strategy for companies that want cloud connectivity, better scaling, and cleaner carrier economics while protecting PBX investments that still have useful life.',
      'That makes it particularly relevant for technical teams, larger offices, and multi-site environments where replacing the full phone stack in one project would create unnecessary disruption.',
    ],
    bestFitTitle: 'Where SIP trunks usually make the most sense',
    bestFitPoints: [
      'Organizations with functioning PBX equipment that leadership does not want to replace immediately',
      'Technical teams that want more carrier flexibility and simpler failover options',
      'Multi-site businesses consolidating voice paths and reducing legacy line costs',
      'Companies planning a staged move from on-premise telephony into cloud-managed workflows',
    ],
    rolloutTitle: 'What needs to be mapped before implementation',
    rolloutPoints: [
      'PBX compatibility, codec support, and session requirements',
      'Concurrent call planning, failover behavior, and office internet resilience',
      'Number migration order and inbound routing during transition',
      'Which locations or departments stay on PBX first versus migrate later',
    ],
    checklistTitle: 'What to compare from providers',
    checklistPoints: [
      'Porting support and technical onboarding quality',
      'How failover is handled when a site or carrier path has issues',
      'Whether the provider can support phased migration instead of forcing a full cutover',
      'How pricing behaves as call volume and office count grow',
    ],
  },
  'hosted-fax': {
    strategyEyebrow: 'Document Workflows',
    strategyHeading: 'Hosted fax fits best when the workflow still matters but the hardware no longer should',
    strategyParagraphs: [
      'Fax is still operationally real in healthcare, dental, legal, insurance, and document-heavy administrative teams. The problem is not that the workflow exists. The problem is tying it to local office machines, separate analog lines, and paper-driven handling that breaks every time the office structure changes.',
      'Hosted fax is strongest when the business wants to preserve those workflows while making them easier to manage across offices, staff roles, and remote access patterns.',
    ],
    bestFitTitle: 'Teams that usually benefit most from hosted fax',
    bestFitPoints: [
      'Healthcare and dental offices moving away from office-specific fax machines',
      'Legal and insurance teams that still exchange signed or formal documents regularly',
      'Multi-location organizations that want shared visibility into fax workflows',
      'Remote and hybrid teams that cannot rely on paper-based handoff inside one office',
    ],
    rolloutTitle: 'What should be planned before migration',
    rolloutPoints: [
      'Which fax numbers need to port and which users need access',
      'How inbound fax routing should map to departments, inboxes, or records workflows',
      'Which compliance-sensitive document paths need extra review',
      'How the hosted fax workflow will replace local machine habits in each office',
    ],
    checklistTitle: 'What to compare between hosted fax options',
    checklistPoints: [
      'Ease of user access for office and remote staff',
      'How inbound and outbound documents are tracked and stored',
      'Porting quality for existing fax numbers',
      'Whether hosted fax is integrated into the broader communication environment or sold as a silo',
    ],
  },
  'mobile-voip-sms': {
    strategyEyebrow: 'Mobility and Follow-Up',
    strategyHeading: 'This service is strongest when speed and mobility matter more than a physical desk phone',
    strategyParagraphs: [
      'Mobile VoIP and business SMS usually become a priority when the business is losing control of communication through personal cell numbers, inconsistent callback behavior, or field users who cannot stay tied to a desk phone.',
      'The best-fit buyer is usually trying to move faster on leads, appointments, service requests, or property inquiries while keeping the business number and conversation history inside one managed system.',
    ],
    bestFitTitle: 'Where mobile VoIP and SMS create the most value',
    bestFitPoints: [
      'Field-service teams, agents, producers, and mobile sellers who work away from the office',
      'Businesses that depend on quick call-and-text follow-up after inbound inquiries',
      'Organizations replacing personal-number sprawl with a business-owned communication layer',
      'Teams that need browser, laptop, and mobile flexibility under one phone identity',
    ],
    rolloutTitle: 'What usually matters during setup',
    rolloutPoints: [
      'Who needs SMS, calling, or both and from which business numbers',
      'How availability, voicemail, and missed-call follow-up should behave across devices',
      'Which departments need shared messaging visibility instead of one-user ownership',
      'How mobile users should transfer, escalate, and collaborate without losing context',
    ],
    checklistTitle: 'What buyers should look for',
    checklistPoints: [
      'Whether texting is actually integrated with calling and voicemail',
      'How easy it is to keep personal numbers private for staff',
      'How well the mobile experience holds up under real business use',
      'Whether managers still get visibility into missed calls and follow-up behavior',
    ],
  },
  'web-video-conferencing': {
    strategyEyebrow: 'Meetings and Collaboration',
    strategyHeading: 'Video conferencing matters most when voice, meetings, and collaboration should feel like one environment',
    strategyParagraphs: [
      'Video meetings become more valuable when they are not one more disconnected subscription that users have to manage separately. Buyers usually care about how quickly staff can move from phone call to screen share to formal meeting without platform friction.',
      'That makes this strongest for client-facing teams, professional services, education, and internal training environments where meetings are frequent and communication handoff matters.',
    ],
    bestFitTitle: 'Best-fit use cases for conferencing',
    bestFitPoints: [
      'Professional services teams running external client meetings and internal coordination in the same day',
      'Education and training groups that need reliable presentation, recording, and collaboration tools',
      'Distributed teams replacing app sprawl with a tighter communication stack',
      'Organizations that want calls, meetings, and collaboration to feel operationally connected',
    ],
    rolloutTitle: 'What to decide before launching it broadly',
    rolloutPoints: [
      'Meeting size expectations, recording needs, and webinar use cases',
      'How calendar and scheduling behavior should interact with the phone system',
      'Which users need meeting hosting versus standard participation access',
      'What internal and client-facing meeting standards should look like across teams',
    ],
    checklistTitle: 'What to compare',
    checklistPoints: [
      'How well conferencing ties into calling and user presence',
      'Whether recordings, screen sharing, and large meetings work without extra friction',
      'How much admin overhead is required to keep users organized',
      'Whether it reduces software sprawl or quietly adds another silo',
    ],
  },
  'voip-integration': {
    strategyEyebrow: 'Systems and Workflow',
    strategyHeading: 'Integration buyers are really trying to reduce manual work and improve call context',
    strategyParagraphs: [
      'VoIP integration matters most when calls should not live by themselves. The buyer usually wants customer records, sales context, help-desk workflows, or internal operations tools to reflect communication activity automatically.',
      'That means the right fit is often operationally mature businesses that care about call logging, screen pops, click-to-call, API events, and turning conversations into usable workflow data instead of manual notes.',
    ],
    bestFitTitle: 'Where integration-focused calling is strongest',
    bestFitPoints: [
      'Sales and service teams that need faster context on every inbound call',
      'Organizations with CRM, scheduling, or help-desk systems already central to operations',
      'Technical teams that want API and webhook access for custom workflows',
      'Businesses trying to reduce manual entry and improve accountability after conversations',
    ],
    rolloutTitle: 'What should be planned before connecting systems',
    rolloutPoints: [
      'Which systems own the customer record and which should receive call data',
      'What events should trigger screen pops, logging, tasks, or routing changes',
      'Which teams need standard integrations versus custom development',
      'How admins will manage changes as workflows evolve over time',
    ],
    checklistTitle: 'What to compare before committing',
    checklistPoints: [
      'Whether the integrations are native, supported, and realistic for your actual tools',
      'How flexible the API and webhook layer really is',
      'How clean the user experience is for staff who need context during calls',
      'Whether call data becomes more actionable or just more complex',
    ],
  },
};

export function getServiceDetailContent(slug: string): ServiceDetailContent | undefined {
  return serviceDetailContentBySlug[slug];
}
