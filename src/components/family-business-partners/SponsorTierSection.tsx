import { Box, Button, Grid, Stack } from '@mui/material';

import {
  ISponsorTierConfig,
  SPONSOR_FORM_URL,
} from '../../config/sponsorProgram';
import { ISponsor } from '../../types/sponsor';
import { Typography } from '../shared/Typography';
import SponsorCard from './SponsorCard';
import SponsorTierBadge from './SponsorTierBadge';

interface ISponsorTierSectionProps {
  tier: ISponsorTierConfig;
  sponsors: ISponsor[];
  showDetails?: boolean;
  showListings?: boolean;
  showPopulatedListings?: boolean;
  headingIdPrefix?: string;
}

const SponsorTierSection = ({
  tier,
  sponsors,
  showDetails = true,
  showListings = true,
  showPopulatedListings = true,
  headingIdPrefix = 'partner-directory',
}: ISponsorTierSectionProps) => {
  const headingId = `${headingIdPrefix}-${tier.id}`;
  const shouldShowListings =
    showListings && (sponsors.length === 0 || showPopulatedListings);

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        p: { xs: 3, md: 4 },
        border: '2px solid var(--medium-gray)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--white)',
        textAlign: 'left',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
      >
        <Typography id={headingId} variant="h3" component="h3" sx={{ mb: 0 }}>
          {tier.name}
        </Typography>
        <SponsorTierBadge name={tier.name} bracket={tier.bracket} />
      </Stack>

      {showDetails && (
        <>
          <Typography
            variant="body1"
            sx={{ mt: 3, mb: 2, fontWeight: 700 }}
          >
            Suggested annual contribution: {tier.suggestedAnnualContribution}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Eligibility: {tier.eligibility}
          </Typography>
          <Box
            component="ul"
            sx={{
              mt: 0,
              mb: 3,
              pl: 3,
              '& li': { mb: 1, lineHeight: 'var(--leading-normal)' },
            }}
          >
            {tier.acknowledgements.map(acknowledgement => (
              <li key={acknowledgement}>{acknowledgement}</li>
            ))}
          </Box>
        </>
      )}

      {shouldShowListings &&
        (sponsors.length > 0 ? (
          <Grid container spacing={3} sx={{ mt: showDetails ? 0 : 2 }}>
            {sponsors.map(sponsor => (
              <Grid item xs={12} md={6} key={sponsor.id}>
                <SponsorCard sponsor={sponsor} tierName={tier.name} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Button
            href={SPONSOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              mt: showDetails ? 0 : 3,
              minHeight: 44,
              whiteSpace: 'normal',
            }}
          >
            Become our first {tier.name} sponsor!
          </Button>
        ))}
    </Box>
  );
};

export default SponsorTierSection;
