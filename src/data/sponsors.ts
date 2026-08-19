import sponsorRecords from './sponsors.json';
import { SponsorTier } from '../config/sponsorProgram';
import { ISponsor } from '../types/sponsor';

export const SPONSORS = sponsorRecords as ISponsor[];

const byDisplayOrder = (first: ISponsor, second: ISponsor) => {
  if (first.featured !== second.featured) {
    return first.featured ? -1 : 1;
  }

  if (first.sortOrder !== second.sortOrder) {
    return first.sortOrder - second.sortOrder;
  }

  return first.businessName.localeCompare(second.businessName);
};

export const getSponsorsByTier = (tier: SponsorTier): ISponsor[] =>
  SPONSORS.filter(sponsor => sponsor.tier === tier).sort(byDisplayOrder);

export const getFeaturedSponsors = (): ISponsor[] =>
  SPONSORS.filter(sponsor => sponsor.featured).sort(byDisplayOrder);
