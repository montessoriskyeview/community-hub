import { Stack } from '@mui/material';

import { SPONSOR_TIERS } from '../../config/sponsorProgram';
import { getSponsorsByTier } from '../../data/sponsors';
import SponsorTierSection from './SponsorTierSection';

interface ISponsorDirectoryProps {
  showDetails?: boolean;
  headingIdPrefix?: string;
}

const SponsorDirectory = ({
  showDetails = true,
  headingIdPrefix,
}: ISponsorDirectoryProps) => (
  <Stack spacing={4}>
    {SPONSOR_TIERS.map(tier => (
      <SponsorTierSection
        key={tier.id}
        tier={tier}
        sponsors={getSponsorsByTier(tier.id)}
        showDetails={showDetails}
        headingIdPrefix={headingIdPrefix}
      />
    ))}
  </Stack>
);

export default SponsorDirectory;
