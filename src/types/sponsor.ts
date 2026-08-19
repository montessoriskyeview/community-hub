import { SponsorTier } from '../config/sponsorProgram';

export interface ISponsorSocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface ISponsor {
  id: string;
  businessName: string;
  tier: SponsorTier;
  category: string;
  description: string;
  websiteUrl?: string;
  logoUrl?: string;
  address?: string;
  phone?: string;
  socialLinks?: ISponsorSocialLinks;
  featured: boolean;
  sortOrder: number;
  acknowledgementStartDate?: string;
  acknowledgementEndDate?: string;
}
