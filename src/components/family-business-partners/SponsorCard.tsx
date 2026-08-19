import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Link,
  Stack,
} from '@mui/material';

import { ISponsor } from '../../types/sponsor';
import { Typography } from '../shared/Typography';

interface ISponsorCardProps {
  sponsor: ISponsor;
  tierName: string;
}

const getWebsiteLabel = (websiteUrl: string) => {
  try {
    return new URL(websiteUrl).hostname.replace(/^www\./, '');
  } catch {
    return websiteUrl;
  }
};

const socialLabels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
} as const;

const SponsorCard = ({ sponsor, tierName }: ISponsorCardProps) => {
  const initials = sponsor.businessName
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Card
      component="article"
      sx={{
        border: '2px solid var(--medium-gray)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: sponsor.featured ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          '&:last-child': { pb: { xs: 3, md: 4 } },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          textAlign: 'left',
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            src={sponsor.logoUrl}
            alt={sponsor.logoUrl ? `${sponsor.businessName} logo` : ''}
            aria-hidden={sponsor.logoUrl ? undefined : true}
            variant="rounded"
            sx={{
              width: 88,
              height: 88,
              bgcolor: 'var(--primary-blue)',
              color: 'var(--white)',
              fontFamily: 'var(--font-primary)',
              fontWeight: 700,
              fontSize: 'var(--text-xl)',
              '& img': { objectFit: 'contain' },
            }}
          >
            {initials}
          </Avatar>
          <Stack spacing={1} alignItems="flex-start">
            <Typography variant="h4" component="h4" sx={{ mb: 0 }}>
              {sponsor.businessName}
            </Typography>
            <Chip
              label={sponsor.category}
              size="small"
              sx={{ fontSize: 'var(--text-sm)' }}
            />
          </Stack>
        </Stack>

        <Typography variant="body1" sx={{ mb: 0, flexGrow: 1 }}>
          {sponsor.description}
        </Typography>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="body2" sx={{ mb: 0, fontWeight: 700 }}>
            Acknowledgement level: {tierName}
          </Typography>

          {sponsor.websiteUrl && (
            <Link
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${sponsor.businessName} website (opens in a new tab)`}
              sx={{
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                width: 'fit-content',
              }}
            >
              Website: {getWebsiteLabel(sponsor.websiteUrl)}
            </Link>
          )}

          {sponsor.address && (
            <Typography variant="body2" sx={{ mb: 0 }}>
              Address: {sponsor.address}
            </Typography>
          )}

          {sponsor.phone && (
            <Typography variant="body2" sx={{ mb: 0 }}>
              Phone: {sponsor.phone}
            </Typography>
          )}

          {sponsor.socialLinks && (
            <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
              {Object.entries(sponsor.socialLinks).map(([network, url]) => (
                <Link
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sponsor.businessName} ${
                    socialLabels[network as keyof typeof socialLabels]
                  } (opens in a new tab)`}
                  sx={{
                    minHeight: 44,
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  {socialLabels[network as keyof typeof socialLabels]}
                </Link>
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SponsorCard;
