import type { Industry, Service } from '@/lib/data';
import { getIndustryBySlug, getServiceBySlug } from '@/lib/data';
import type { IndustrySeoContent, ServiceSeoContent } from '@/lib/seo-content';
import type { SeoFaq } from '@/lib/seo-rich';

function joinList(items: string[]) {
  if (items.length <= 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}

function topFeatureSummary(features: string[], limit = 3) {
  return joinList(features.slice(0, limit));
}

export function getServiceFaqs(service: Service, seoContent?: ServiceSeoContent): SeoFaq[] {
  const relatedIndustries = (seoContent?.relatedIndustrySlugs ?? [])
    .map((slug) => getIndustryBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name))
    .slice(0, 4);

  return [
    {
      question: `What is ${service.shortName} and who is it best for?`,
      answer: `${service.description} It is usually a strong fit for businesses that need ${service.tagline.toLowerCase()} while keeping deployment simpler than a legacy telecom stack.`,
    },
    {
      question: `What should buyers compare when choosing ${service.shortName}?`,
      answer: `Start with the features that affect daily operations most: ${topFeatureSummary(service.features)}. Buyers should also compare onboarding, support responsiveness, and how well the platform fits remote users, routing needs, and existing workflows.`,
    },
    {
      question: `How quickly can MyVoIP deploy ${service.shortName}?`,
      answer: `Most MyVoIP projects are scoped around the business's current call flow, user count, and any number porting needs. That makes it easier to roll out ${service.shortName.toLowerCase()} without forcing a long telecom project or a disruptive rip-and-replace.`,
    },
    {
      question: `What types of businesses use ${service.shortName} most often?`,
      answer:
        relatedIndustries.length > 0
          ? `${service.shortName} is commonly deployed in industries such as ${joinList(relatedIndustries)} where fast response times, cleaner routing, and better caller visibility matter.`
          : `${service.shortName} is usually chosen by businesses that need better responsiveness, simpler administration, and more flexibility than a traditional office phone setup can provide.`,
    },
  ];
}

export function getIndustryFaqs(industry: Industry, seoContent?: IndustrySeoContent): SeoFaq[] {
  const relatedServices = (seoContent?.relatedServiceSlugs ?? [])
    .map((slug) => getServiceBySlug(slug)?.shortName)
    .filter((name): name is string => Boolean(name))
    .slice(0, 4);

  return [
    {
      question: `What phone system features matter most for ${industry.name}?`,
      answer: `${industry.name} teams usually care most about ${topFeatureSummary(industry.features)} because those features directly affect response times, internal coordination, and how consistently customer or patient calls get handled.`,
    },
    {
      question: `Why do ${industry.name.toLowerCase()} businesses switch to cloud VoIP?`,
      answer: `${industry.description} In practice, many teams move to cloud VoIP when they need to reduce missed calls, simplify multi-user routing, and support staff across offices, mobile devices, or changing schedules.`,
    },
    {
      question: `Can MyVoIP support multi-location or remote workflows for ${industry.name}?`,
      answer: `Yes. MyVoIP is designed to support distributed teams, remote users, and location-based routing rules without forcing every site to manage a separate phone system. That is especially useful when ${industry.name.toLowerCase()} workflows depend on shared coverage and fast handoffs.`,
    },
    {
      question: `Which MyVoIP services are most relevant for ${industry.name}?`,
      answer:
        relatedServices.length > 0
          ? `The strongest fit usually starts with ${joinList(relatedServices)} depending on call volume, compliance needs, after-hours coverage, and how much automation the organization wants in front of live staff.`
          : `The right stack depends on call volume, compliance needs, after-hours coverage, and how much automation the organization wants in front of live staff, but most ${industry.name.toLowerCase()} teams start with business VoIP and then layer in routing, messaging, or AI support where it helps operations most.`,
    },
  ];
}
