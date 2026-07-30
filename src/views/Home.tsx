import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { InfoText } from '../components/shared/InfoText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { Box } from '../components/shared/Box';

export const Home = () => {
  return (
    <CanvasView>
      {/* Main H1 - Primary keyword focus */}
      <InfoText
        title="Skye View Community Hub"
        subTitle="Homeschool Coop · Farm Animal Time · Community Giveaway"
        subTitleVariant="h2"
        text="A Las Vegas community hub whose first program is a homeschool parent cooperative for Pre-K through 5th grade — where families are REQUIRED to actively participate — alongside Farm Animal Time drop-in visits and a resident giveaway swap."
        titleVariant="h1"
        spacing="lg"
        containerVariant="hero"
      />

      {/* H2 Section - Hub programs */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          Explore Hub Programs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          Beyond the homeschool coop, visit Farm Animal Time drop-in hours or
          the Community Giveaway for Las Vegas residents.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <MuiLink
            component={RouterLink}
            to="/schedule"
            sx={{
              color: 'var(--primary-blue)',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              textDecoration: 'underline',
              minHeight: 44,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Coop Programs
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/farm-animal-time"
            sx={{
              color: 'var(--primary-blue)',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              textDecoration: 'underline',
              minHeight: 44,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Farm Animal Time
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/giveaway"
            sx={{
              color: 'var(--primary-blue)',
              fontWeight: 700,
              fontSize: 'var(--text-lg)',
              textDecoration: 'underline',
              minHeight: 44,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Community Giveaway
          </MuiLink>
        </Box>
      </ContentContainer>
    </CanvasView>
  );
};
