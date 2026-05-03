export type FilmSignal = {
  title: string;
  description: string;
};

export type FilmFaq = {
  question: string;
  answer: string;
};

export type FilmProductionPage = {
  slug: string;
  title: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  marketFocus: string;
  overview: string[];
  deploymentSignals: FilmSignal[];
  deliveryChecklistTitle: string;
  deliveryChecklist: string[];
  featuredServiceSlugs: string[];
  relatedPageSlugs: string[];
  faqs: FilmFaq[];
};

export const filmProductionHub = {
  title: 'VoIP for Film Industry, Movie Sets, and Production Offices',
  description:
    'Short-term VoIP leases, movie-set phones, production-office setups, and temporary lines for film productions with a heavy focus on New York City and Atlanta.',
  eyebrow: 'Film Industry Communications',
  heroTitle: 'Short-Term VoIP for Movie Sets and Production Companies',
  heroDescription:
    'MyVoIP supplies short-term VoIP lines, leased phones, production-office installs, and rapid on-set communication setups for film, television, commercial, and streaming productions. We focus heavily on New York City and the Atlanta production corridor.',
  intro: [
    'Film productions do not behave like ordinary offices. You might need a production office live tomorrow, a bank of desk phones for a temporary space, a handful of cordless handsets on a stage, and direct numbers for accounting, locations, transportation, and production in the same week.',
    'That is why this page cluster is built around short-term VoIP leasing and rapid deployment, not generic office telecom. The goal is to make it easy for production companies, line producers, unit production managers, and office coordinators to find a practical vendor that can deliver phones, lines, routing, and support without locking the show into a long commitment.',
  ],
  highlights: [
    {
      title: 'Short-term handset and line leasing',
      description:
        'Lease desk phones, cordless handsets, and VoIP lines for the duration of prep, principal photography, or post without pretending the production is a permanent office.',
    },
    {
      title: 'Rapid setup for production offices',
      description:
        'Get extensions, ring groups, direct inward dial numbers, and department call flow in place quickly for temporary offices and pop-up workspaces.',
    },
    {
      title: 'Built for departments that move fast',
      description:
        'Route calls for production, accounting, payroll, locations, transportation, art department, construction, and vendor coordination without relying on personal cell numbers for everything.',
    },
    {
      title: 'Strong NYC and Atlanta focus',
      description:
        'The first wave of pages targets New York City and the Atlanta production market because that is where short-term production telecom demand is especially concentrated.',
    },
  ],
};

export const filmProductionPages: FilmProductionPage[] = [
  {
    slug: 'new-york-city',
    title: 'VoIP for Film Production in New York City',
    description:
      'Short-term VoIP, leased phones, and production-office communication for NYC movie sets, studio builds, and production companies working across the five boroughs.',
    heroEyebrow: 'NYC Film Production',
    heroTitle: 'Movie Set Phones and Production Office VoIP in New York City',
    heroDescription:
      'We help New York City productions lease phones, activate temporary VoIP lines, and stand up production-office communications quickly for prep, shooting, and wrap.',
    marketFocus: 'New York productions often juggle office space, stages, location units, and vendors across boroughs, which makes flexible, short-term telecom more useful than traditional office contracts.',
    overview: [
      'New York productions usually need a communications setup that can move as quickly as the show. One week the need is a production office in Manhattan, the next week it is a location team operating out of Brooklyn, and then the priority shifts to vendors, accounting, and transportation needing clean direct lines and transfers.',
      'A standard business phone sale is not the right fit for that. What production teams actually need is short-term leased phones, temporary VoIP lines, clean department routing, and a provider that understands the office may wrap as fast as it launched.',
    ],
    deploymentSignals: [
      {
        title: 'Short-term leases that fit production timelines',
        description:
          'Lease phones and lines for the active production window instead of buying permanent hardware for a temporary office.',
      },
      {
        title: 'Department call flow for busy offices',
        description:
          'Create direct numbers and hunt groups for production, accounting, payroll, locations, transportation, and the AD team.',
      },
      {
        title: 'Reliable communication across boroughs',
        description:
          'Keep office staff, field producers, and remote coordinators connected even when the show is spread across multiple units.',
      },
    ],
    deliveryChecklistTitle: 'What we typically deliver for NYC productions',
    deliveryChecklist: [
      'Temporary VoIP line activation for production offices and active units',
      'Leased desk phones, cordless handsets, and softphone access',
      'DID numbers for departments, production staff, and vendor-facing roles',
      'Ring groups and forwarding for main office, locations, and transportation',
      'Teardown planning when the production office wraps',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'voip-integration', 'sip-trunks'],
    relatedPageSlugs: ['manhattan-production-offices', 'brooklyn-crew-phones', 'queens-studio-productions', 'movie-set-phone-rental'],
    faqs: [
      {
        question: 'Can you lease phones for a temporary NYC production office?',
        answer:
          'Yes. We can provide short-term phone and line leasing for production offices, prep spaces, and temporary workspaces tied to a show schedule.',
      },
      {
        question: 'Can NYC productions keep separate numbers for different departments?',
        answer:
          'Yes. We can provision direct numbers for accounting, payroll, locations, transportation, production, and vendor-facing teams.',
      },
      {
        question: 'Do you support productions that move between boroughs?',
        answer:
          'Yes. Cloud-based routing and softphone access make it easier to keep the communication layer consistent while the work moves between locations.',
      },
    ],
  },
  {
    slug: 'manhattan-production-offices',
    title: 'Production Office Phones in Manhattan',
    description:
      'Short-term phone leasing and VoIP setup for Manhattan production offices that need quick installs, department routing, and clean vendor communication.',
    heroEyebrow: 'Manhattan Production Offices',
    heroTitle: 'Temporary Production Office Phones for Manhattan Shoots',
    heroDescription:
      'Set up a Manhattan production office with leased phones, main lines, extensions, and routing built for prep, principal photography, and wrap.',
    marketFocus: 'Manhattan production offices often need polished, vendor-ready communications fast, especially when space is temporary and the office lifecycle is short.',
    overview: [
      'Production offices in Manhattan often act like the operational backbone of the show even though they may only exist for a limited window. That means accounting, payroll, production, locations, and vendors all need a communication setup that feels professional on day one.',
      'Our approach is built around fast deployment: activate the main office number, provision department extensions, lease the phones for the production term, and keep teardown straightforward when the office closes.',
    ],
    deploymentSignals: [
      {
        title: 'Fast office activation',
        description:
          'Bring a temporary office live quickly without committing to a long telecom contract.',
      },
      {
        title: 'Vendor and crew-facing professionalism',
        description:
          'Use a clean main number, auto-attendant, and department routing instead of relying on one cell phone or a patchwork of personal lines.',
      },
      {
        title: 'Easy wrap and teardown',
        description:
          'Because the office is temporary, the phone strategy needs to be easy to unwind once the production wraps.',
      },
    ],
    deliveryChecklistTitle: 'Typical Manhattan office setup',
    deliveryChecklist: [
      'Main production office line and receptionist routing',
      'Desk phones or cordless handsets leased for temporary office use',
      'Extensions for accounting, payroll, production, and office coordinators',
      'Call forwarding rules for off-hours and remote staff',
      'Simple teardown at wrap',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'voip-integration'],
    relatedPageSlugs: ['new-york-city', 'production-office-voip', 'temporary-voip-lines', 'movie-set-phone-rental'],
    faqs: [
      {
        question: 'Do Manhattan production offices need to buy the phones?',
        answer:
          'No. Short-term leasing is usually the better fit because the office itself is often temporary.',
      },
      {
        question: 'Can you set up department extensions for payroll and accounting?',
        answer:
          'Yes. We can build direct numbers and ring groups for the departments that interact most with crew, vendors, and outside partners.',
      },
      {
        question: 'Can remote coordinators answer the production office number?',
        answer:
          'Yes. Softphone and forwarding options make it easy for approved users to answer from laptops or mobile devices.',
      },
    ],
  },
  {
    slug: 'brooklyn-crew-phones',
    title: 'VoIP and Crew Phones for Brooklyn Film Productions',
    description:
      'Leased phones, temporary VoIP lines, and production communication setups for Brooklyn stages, studios, offices, and location-based film crews.',
    heroEyebrow: 'Brooklyn Productions',
    heroTitle: 'Leased Crew Phones and VoIP for Brooklyn Productions',
    heroDescription:
      'Support Brooklyn-based productions with short-term VoIP lines, leased handsets, and call flow that keeps the office, locations, and crew departments connected.',
    marketFocus: 'Brooklyn productions often mix office work, stages, builds, and field coordination, which rewards a phone system that can flex with the production footprint.',
    overview: [
      'Brooklyn productions often operate in a hybrid pattern: office staff in one location, builds or studio work in another, and field coordinators moving constantly. The communications layer has to support that movement without turning everything into unmanaged cell-phone traffic.',
      'We use short-term VoIP to keep departments reachable, make vendor communication cleaner, and give production teams a way to lease phones only for the time they actually need them.',
    ],
    deploymentSignals: [
      {
        title: 'Works for office plus field coordination',
        description:
          'Keep office coordinators, locations staff, and department heads inside one phone environment.',
      },
      {
        title: 'Supports temporary stages and workspaces',
        description:
          'Leased phones and cloud routing are easier to adapt to short-term production footprints than permanent hardware purchases.',
      },
      {
        title: 'Cleaner crew and vendor contact paths',
        description:
          'Create department-level numbers so outside partners are not guessing which cell phone to call.',
      },
    ],
    deliveryChecklistTitle: 'Useful Brooklyn production deliverables',
    deliveryChecklist: [
      'Temporary main lines and department DIDs',
      'Leased desk phones and cordless handsets',
      'Forwarding to field producers and remote coordinators',
      'Call groups for production office and locations',
      'Short-term billing aligned to the production window',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'contact-centers'],
    relatedPageSlugs: ['new-york-city', 'queens-studio-productions', 'movie-set-phone-rental', 'temporary-voip-lines'],
    faqs: [
      {
        question: 'Can Brooklyn productions use leased phones for only one show?',
        answer:
          'Yes. That is one of the main use cases. The phones and lines can be tied to the active production period rather than a long office term.',
      },
      {
        question: 'Can locations and office staff share the same system?',
        answer:
          'Yes. Cloud routing and mobile access make it practical to keep office and field users on one communication platform.',
      },
      {
        question: 'Is this useful for studio work and location work together?',
        answer:
          'Yes. The same system can support a fixed office presence and rotating field workflows.',
      },
    ],
  },
  {
    slug: 'queens-studio-productions',
    title: 'Studio and Stage Phones for Queens Film Productions',
    description:
      'Temporary studio and stage phone systems for Queens productions with leased handsets, VoIP lines, and routing for production offices and support departments.',
    heroEyebrow: 'Queens Studios and Stages',
    heroTitle: 'Temporary Stage and Studio Phones for Queens Productions',
    heroDescription:
      'Deploy phones and VoIP lines for Queens-based productions that need stage communication, support-office routing, and leased handsets for temporary setups.',
    marketFocus: 'Queens productions often combine studio or stage work with nearby support offices, so the phone system has to support both fixed spaces and rotating departments.',
    overview: [
      'Stage-based productions still need the same administrative clarity as any office-heavy show: direct numbers, ring groups, and dependable internal reachability. The difference is that the timeline is shorter and the team may expand or contract quickly as the show changes phases.',
      'We build Queens-focused production telecom around those realities by making the phones leasable, the numbers easy to provision, and the routing simple to adapt.',
    ],
    deploymentSignals: [
      {
        title: 'Good fit for stage-heavy workflows',
        description:
          'Support production operations that need a communications layer around a temporary studio footprint.',
      },
      {
        title: 'Scales with active departments',
        description:
          'Add or remove users and numbers as the production office shifts from prep into active shooting and wrap.',
      },
      {
        title: 'Preserves professional inbound call handling',
        description:
          'Keep vendors, crew, and partners calling proper production numbers instead of chasing individual phones.',
      },
    ],
    deliveryChecklistTitle: 'Queens stage and studio setup options',
    deliveryChecklist: [
      'Leased phones for stage office and support staff',
      'Temporary VoIP numbers for production departments',
      'Forwarding and mobile app access for moving crews',
      'Department hunt groups and after-hours routing',
      'Fast reconfiguration as departments scale up or down',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'sip-trunks'],
    relatedPageSlugs: ['new-york-city', 'brooklyn-crew-phones', 'movie-set-phone-rental', 'temporary-voip-lines'],
    faqs: [
      {
        question: 'Can you support a temporary stage-office setup in Queens?',
        answer:
          'Yes. That is exactly the type of environment short-term leased phones and cloud VoIP are built for.',
      },
      {
        question: 'Can the setup change as the production changes phases?',
        answer:
          'Yes. We can adjust users, forwarding, and numbers as the show moves through prep, shooting, and wrap.',
      },
      {
        question: 'Do you only support full production offices?',
        answer:
          'No. We can also support smaller department-focused or stage-adjacent setups where the need is temporary but still operationally important.',
      },
    ],
  },
  {
    slug: 'atlanta-film-production',
    title: 'VoIP for Film Production in Atlanta',
    description:
      'Short-term VoIP, leased phones, and production-office communication for Atlanta movie sets, studios, and production companies working across metro Atlanta.',
    heroEyebrow: 'Atlanta Film Market',
    heroTitle: 'Short-Term VoIP and Leased Phones for Atlanta Productions',
    heroDescription:
      'MyVoIP supports Atlanta-area productions with temporary VoIP lines, leased phones, and production-office setups that can move as the show moves.',
    marketFocus: 'Atlanta productions often combine studio work, support offices, and travel between units, which makes flexible phone leasing and cloud routing especially practical.',
    overview: [
      'Atlanta is one of the strongest film and television production markets in the country, and the communications needs reflect that scale. Productions need to bring offices online fast, support departments that may only exist for a limited term, and avoid locking a temporary show into a permanent office telecom model.',
      'We focus on fast deployment, short-term leasing, and call flow that supports the real production structure: production office, accounting, payroll, locations, transportation, vendors, and the people coordinating them.',
    ],
    deploymentSignals: [
      {
        title: 'Designed for temporary production timelines',
        description:
          'Lease phones and lines for the actual production period instead of owning hardware that outlives the show.',
      },
      {
        title: 'Good fit for studio plus office coordination',
        description:
          'Keep fixed office staff and mobile coordinators connected with one call-routing layer.',
      },
      {
        title: 'Supports vendor-heavy production traffic',
        description:
          'Use department numbers and ring groups so outside partners are routed cleanly to the right team.',
      },
    ],
    deliveryChecklistTitle: 'What Atlanta productions usually need',
    deliveryChecklist: [
      'Temporary production office numbers and desk phones',
      'Department routing for production, payroll, accounting, and locations',
      'Mobile app access for field and remote staff',
      'Leased handsets sized to the current phase of production',
      'Wrap-friendly teardown and billing',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'contact-centers', 'voip-integration'],
    relatedPageSlugs: ['fayetteville-trilith-productions', 'movie-set-phone-rental', 'production-office-voip', 'temporary-voip-lines'],
    faqs: [
      {
        question: 'Do you support short-term phone leasing for Atlanta productions?',
        answer:
          'Yes. Short-term leasing for offices, sets, and temporary production teams is one of the main use cases.',
      },
      {
        question: 'Can Atlanta productions set up department-specific numbers?',
        answer:
          'Yes. We can provision direct numbers and ring groups for production office departments and support teams.',
      },
      {
        question: 'Can field staff answer the system away from the office?',
        answer:
          'Yes. Mobile and softphone options let approved users answer the business number from wherever the production day takes them.',
      },
    ],
  },
  {
    slug: 'fayetteville-trilith-productions',
    title: 'Phones and VoIP for Fayetteville and Trilith Productions',
    description:
      'Temporary phones, leased handsets, and production-office VoIP for Fayetteville and Trilith-area film and television productions.',
    heroEyebrow: 'Fayetteville / Trilith Area',
    heroTitle: 'Production Phones for Fayetteville and Trilith-Area Shoots',
    heroDescription:
      'Support Fayetteville-area productions with leased phones, temporary VoIP lines, and office routing designed for short-term studio and support-office use.',
    marketFocus: 'The Fayetteville and Trilith area is uniquely production-focused, which makes short-term office and stage communications especially relevant.',
    overview: [
      'Production teams working around Fayetteville and Trilith often need a setup that feels stable and professional, even though the office and support footprint is temporary. That means phones, numbers, and department routing have to be available quickly and easy to scale.',
      'Our approach is designed for that rhythm: stand up the numbers, lease the phones for the active production term, give coordinators and departments clean internal reachability, and make sure wrap does not become a telecom problem.',
    ],
    deploymentSignals: [
      {
        title: 'Built for production-heavy local demand',
        description:
          'This is a market where temporary offices and support teams are common, so the phone strategy should reflect that.',
      },
      {
        title: 'Supports active studio-adjacent offices',
        description:
          'Keep the office, coordinators, and vendors inside one organized communications setup.',
      },
      {
        title: 'Avoids unnecessary long-term overhead',
        description:
          'Leasing keeps production communications aligned with the show schedule instead of a permanent contract.',
      },
    ],
    deliveryChecklistTitle: 'Typical Fayetteville / Trilith setups',
    deliveryChecklist: [
      'Temporary office phones and extensions',
      'Production department direct numbers',
      'Forwarding and mobile access for coordinators',
      'Leased handsets for the full production term',
      'Teardown when the office wraps or relocates',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'voip-integration'],
    relatedPageSlugs: ['atlanta-film-production', 'movie-set-phone-rental', 'temporary-voip-lines', 'production-office-voip'],
    faqs: [
      {
        question: 'Can you set up phones for a temporary office near Trilith?',
        answer:
          'Yes. We can deploy short-term office phones, numbers, and routing for a production support office tied to an active show.',
      },
      {
        question: 'Is leasing better than buying for this kind of production?',
        answer:
          'Usually yes, because the office itself is tied to a finite production term.',
      },
      {
        question: 'Can the phone setup cover both office staff and mobile coordinators?',
        answer:
          'Yes. Cloud VoIP and mobile access make it practical to support both without building separate systems.',
      },
    ],
  },
  {
    slug: 'movie-set-phone-rental',
    title: 'Movie Set Phone Rental and Short-Term VoIP Leasing',
    description:
      'Lease phones and temporary VoIP lines for movie sets, active shoots, and production offices without committing to long-term telecom contracts.',
    heroEyebrow: 'Short-Term Rental',
    heroTitle: 'Movie Set Phone Rental for Productions That Move Fast',
    heroDescription:
      'Lease phones and VoIP lines for the exact production window you need, with routing built for production offices, locations teams, and vendor communication.',
    marketFocus: 'The core value here is short-term flexibility: production teams can rent the communications setup they need without buying permanent office infrastructure for a temporary project.',
    overview: [
      'Movie set phone rental is not just about delivering hardware. It is about giving the production a temporary communications layer that works from day one: main numbers, department extensions, direct inward dial numbers, forwarding, and leased phones sized to the actual crew and office need.',
      'That is especially valuable when a show needs a production office live quickly, wants proper department numbers instead of personal cells, and knows the whole setup will eventually be wrapped and removed.',
    ],
    deploymentSignals: [
      {
        title: 'Lease only what the show needs',
        description:
          'Scale the number of phones and lines to the active phase of production instead of overbuilding a permanent office system.',
      },
      {
        title: 'Get routing with the rental',
        description:
          'Provision ring groups, extensions, and direct numbers alongside the leased handsets so the setup is operational, not just physical.',
      },
      {
        title: 'Wrap-friendly and production-aware',
        description:
          'Because the deployment is temporary, teardown and turnover are part of the planning from the start.',
      },
    ],
    deliveryChecklistTitle: 'Rental-focused deliverables',
    deliveryChecklist: [
      'Short-term desk phone and cordless handset leasing',
      'VoIP line activation for active productions',
      'Department extension and forwarding setup',
      'Temporary numbers for production-facing communication',
      'Removal or reconfiguration at wrap',
    ],
    featuredServiceSlugs: ['business-voip', 'mobile-voip-sms', 'sip-trunks'],
    relatedPageSlugs: ['production-office-voip', 'temporary-voip-lines', 'new-york-city', 'atlanta-film-production'],
    faqs: [
      {
        question: 'Do you rent the phones or require a purchase?',
        answer:
          'For productions, short-term leasing is usually the main fit, because the office and set communication need is temporary.',
      },
      {
        question: 'Can the rental include active VoIP lines and routing?',
        answer:
          'Yes. The value is not just the phones. It is the working communication environment behind them.',
      },
      {
        question: 'Can the number of phones change during the run of the show?',
        answer:
          'Yes. We can adjust the setup as the production scales departments up or down.',
      },
    ],
  },
  {
    slug: 'production-office-voip',
    title: 'Production Office VoIP for Film and Television Teams',
    description:
      'Temporary VoIP systems for production offices with leased phones, direct department lines, call routing, and support for accounting, payroll, production, and locations teams.',
    heroEyebrow: 'Production Office Setup',
    heroTitle: 'VoIP for Temporary Production Offices',
    heroDescription:
      'Stand up a production office quickly with leased phones, temporary numbers, and routing built around how film and television teams actually work.',
    marketFocus: 'Production offices are operational hubs, not generic offices. They need department reachability, vendor-facing professionalism, and a short-term lease model that matches the production schedule.',
    overview: [
      'A production office usually needs more structure than a handful of cell phones but less permanence than a conventional office telecom purchase. The right answer is temporary VoIP with leased handsets, direct department numbers, and routing that matches the production hierarchy.',
      'We build that around the departments that actually matter during production: production, accounting, payroll, transportation, locations, art department, and vendor coordination. The result is a professional office setup without the burden of long-term ownership.',
    ],
    deploymentSignals: [
      {
        title: 'Works for prep through wrap',
        description:
          'Start with the office needs during prep and adapt the setup as production expands, shoots, and eventually winds down.',
      },
      {
        title: 'Department-first routing',
        description:
          'Give crew and vendors a clean path to the office department they actually need.',
      },
      {
        title: 'Short-term leasing aligned to office lifespan',
        description:
          'The phones and lines can match the production office timeline instead of a generic annual contract.',
      },
    ],
    deliveryChecklistTitle: 'Production office priorities we cover',
    deliveryChecklist: [
      'Main office number with receptionist or auto-attendant flow',
      'Leased phones for office coordinators and departments',
      'Department DIDs for accounting, payroll, locations, and transportation',
      'Softphones for remote or mobile staff',
      'Teardown and rollover planning for wrap',
    ],
    featuredServiceSlugs: ['business-voip', 'voip-integration', 'mobile-voip-sms'],
    relatedPageSlugs: ['movie-set-phone-rental', 'temporary-voip-lines', 'manhattan-production-offices', 'atlanta-film-production'],
    faqs: [
      {
        question: 'Can one production office have separate lines for accounting and production?',
        answer:
          'Yes. Separate direct numbers and ring groups are common and usually make the office easier for crew and vendors to navigate.',
      },
      {
        question: 'Can remote coordinators still answer office lines?',
        answer:
          'Yes. Approved users can answer through softphone and mobile options without being physically at the office desk.',
      },
      {
        question: 'Is this designed for temporary office leases?',
        answer:
          'Yes. The entire model is built around temporary production-office timelines rather than permanent office ownership.',
      },
    ],
  },
  {
    slug: 'temporary-voip-lines',
    title: 'Temporary VoIP Lines for Film Productions and Short-Term Shoots',
    description:
      'Activate temporary VoIP lines for film productions, production offices, and short-term shoots with leased phones, direct numbers, and flexible routing.',
    heroEyebrow: 'Temporary Line Activation',
    heroTitle: 'Temporary VoIP Lines for Productions That Need to Move Quickly',
    heroDescription:
      'Provision temporary VoIP lines for production offices, departments, and active units without treating the show like a permanent office tenant.',
    marketFocus: 'Temporary line activation is often the fastest way to give a production a real communications backbone without forcing it into traditional telecom procurement.',
    overview: [
      'Temporary VoIP lines are often the core requirement for film productions. Once the numbers exist, the office can route calls properly, departments can have direct inward dial numbers, and field users can stay connected without depending entirely on personal phones.',
      'For productions, the key is flexibility: spin lines up fast, assign them to the right teams, and keep the whole environment easy to reconfigure as the show changes shape.',
    ],
    deploymentSignals: [
      {
        title: 'Fast activation',
        description:
          'Get production numbers live quickly for active prep or shooting schedules.',
      },
      {
        title: 'Easy department assignment',
        description:
          'Tie lines to departments, coordinators, or shared call groups depending on how the show is organized.',
      },
      {
        title: 'No need for permanent office infrastructure',
        description:
          'The lines can exist for the duration of the production need, then be adjusted or removed at wrap.',
      },
    ],
    deliveryChecklistTitle: 'Temporary-line use cases we support',
    deliveryChecklist: [
      'Main office and overflow lines',
      'Department direct numbers',
      'Forwarding to mobile staff and remote coordinators',
      'Leased handsets or softphone-only deployments',
      'Flexible scale-up and scale-down as the production evolves',
    ],
    featuredServiceSlugs: ['business-voip', 'sip-trunks', 'mobile-voip-sms'],
    relatedPageSlugs: ['movie-set-phone-rental', 'production-office-voip', 'new-york-city', 'atlanta-film-production'],
    faqs: [
      {
        question: 'Can temporary VoIP lines be used without buying desk phones?',
        answer:
          'Yes. Productions can use leased phones, softphones, mobile apps, or a mix depending on how the team operates.',
      },
      {
        question: 'Can the lines forward to field staff?',
        answer:
          'Yes. Forwarding, ring groups, and mobile access are common parts of a production setup.',
      },
      {
        question: 'Can the line count change during the show?',
        answer:
          'Yes. Temporary lines are useful precisely because they can be adjusted as the office and departments change.',
      },
    ],
  },
];

export const filmProductionPageBySlug = new Map(
  filmProductionPages.map((page) => [page.slug, page])
);

export function getFilmProductionPageBySlug(slug: string): FilmProductionPage | undefined {
  return filmProductionPageBySlug.get(slug);
}
