import { Stack } from '@mui/material';

import { SPONSOR_TIERS } from '../../config/sponsorProgram';
import { getSponsorsByTier } from '../../data/sponsors';
import SponsorTierSection from './SponsorTierSection';

interface ISponsorDirectoryProps {
  showDetails?: boolean;
  showListings?: boolean;
  showPopulatedListings?: boolean;
  includePopulatedTiers?: boolean;
  includeEmptyTiers?: boolean;
  headingIdPrefix?: string;
}

const SponsorDirectory = ({
  showDetails = true,
  showListings = true,
  showPopulatedListings = true,
  includePopulatedTiers = true,
  includeEmptyTiers = true,
  headingIdPrefix,
}: ISponsorDirectoryProps) => {
  const visibleTiers = SPONSOR_TIERS.filter(tier => {
    const hasListings = getSponsorsByTier(tier.id).length > 0;
    return hasListings ? includePopulatedTiers : includeEmptyTiers;
  });

  if (visibleTiers.length === 0) {
    return null;
  }

  return (
    <Stack spacing={4}>
      {visibleTiers.map(tier => (
        <SponsorTierSection
          key={tier.id}
          tier={tier}
          sponsors={getSponsorsByTier(tier.id)}
          showDetails={showDetails}
          showListings={showListings}
          showPopulatedListings={showPopulatedListings}
          headingIdPrefix={headingIdPrefix}
        />
      ))}
    </Stack>
  );
};

export default SponsorDirectory;
