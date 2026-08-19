import { donationPolicy } from './donationPolicy';

export const SPONSOR_FORM_URL =
  'https://forms.gle/FoAWDtSS12kFHWGN7';

export const SPONSOR_TIER_ORDER = [
  'founding-partner',
  'family-partner',
  'community-partner',
  'community-recognition-member',
] as const;

export type SponsorTier = (typeof SPONSOR_TIER_ORDER)[number];

export interface ISponsorTierConfig {
  id: SponsorTier;
  name: string;
  bracket: 'FREE' | 'BRONZE' | 'SILVER' | 'GOLD';
  suggestedAnnualContribution: string;
  eligibility: string;
  acknowledgements: string[];
  complianceExplanation: string;
}

export const SPONSOR_TIERS: ISponsorTierConfig[] = [
  {
    id: 'community-recognition-member',
    name: 'Community Recognition Member',
    bracket: 'FREE',
    suggestedAnnualContribution:
      donationPolicy.familyBusinessPartners.communityRecognitionMember
        .suggestedAnnualContribution,
    eligibility:
      'Parents or guardians of enrolled children who actively participate in the cooperative.',
    acknowledgements: [
      'Business listing on the partner page',
      'Business name, logo, website, category, and neutral description',
    ],
    complianceExplanation:
      'No contribution is required at this level. The listing still follows the same identification-only standard used for paid acknowledgements.',
  },
  {
    id: 'community-partner',
    name: 'Community Partner',
    bracket: 'BRONZE',
    suggestedAnnualContribution:
      donationPolicy.familyBusinessPartners.communityPartner
        .suggestedAnnualContribution,
    eligibility:
      'Family-owned businesses and businesses in the wider community.',
    acknowledgements: [
      'Enhanced partner-page listing',
      'Logo acknowledgement section',
      'Annual acknowledgement',
    ],
    complianceExplanation:
      'Recognition is limited to identifying information and does not promise traffic, referrals, exclusivity, or a promotional message.',
  },
  {
    id: 'family-partner',
    name: 'Family Partner',
    bracket: 'SILVER',
    suggestedAnnualContribution:
      donationPolicy.familyBusinessPartners.familyPartner
        .suggestedAnnualContribution,
    eligibility:
      'Family-owned businesses and businesses in the wider community.',
    acknowledgements: [
      'Featured partner-page placement',
      'Event acknowledgement',
    ],
    complianceExplanation:
      'Placement and event recognition remain value-neutral, and the contribution is not tied to attendance or another measure of exposure.',
  },
  {
    id: 'founding-partner',
    name: 'Founding Partner',
    bracket: 'GOLD',
    suggestedAnnualContribution:
      donationPolicy.familyBusinessPartners.foundingPartner
        .suggestedAnnualContribution,
    eligibility:
      'Family-owned businesses and businesses in the wider community.',
    acknowledgements: [
      'Highest partner-page acknowledgement level',
      'Featured placement',
      'Event acknowledgements',
    ],
    complianceExplanation:
      'Prominence and frequency change, but the content remains identification-only and provides no exclusive-provider rights or sales message.',
  },
];

export const SPONSOR_ACKNOWLEDGEMENT_RULES = {
  allowed: [
    'Business name and brand names',
    'Logo or value-neutral slogan',
    'Website, address, telephone number, and social links',
    'Neutral description of products or services',
    'Product or service listings',
  ],
  excluded: [
    'Calls to purchase or use a sponsor product or service',
    'Comparative or qualitative claims',
    'Endorsements',
    'Discounts, coupons, or savings claims',
    'Contribution terms based on attendance, views, or exposure',
  ],
} as const;
