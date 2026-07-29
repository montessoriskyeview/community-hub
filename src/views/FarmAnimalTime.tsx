import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { SchoolList } from '../components/shared/ListText';
import { donationPolicy } from '../config/donationPolicy';
import { farmAnimalTimePageContent } from '../i18n/pages/farmAnimalTime';

export const FarmAnimalTime = () => {
  const signupUrl = donationPolicy.farmAnimalTime.dropIn.signupUrl;
  const hasSignupUrl = Boolean(signupUrl);

  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-md)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-3xl)', md: 'var(--text-4xl)' },
          }}
        >
          {farmAnimalTimePageContent.heroTitle}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 600,
            fontSize: { xs: 'var(--text-xl)', md: 'var(--text-2xl)' },
          }}
        >
          {farmAnimalTimePageContent.heroSubtitle}
        </Typography>
        {hasSignupUrl ? (
          <Button
            component="a"
            href={signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              minHeight: 48,
              px: 4,
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {farmAnimalTimePageContent.signupCtaLabel}
          </Button>
        ) : (
          <Button
            component={RouterLink}
            to={farmAnimalTimePageContent.contactFallbackPath}
            variant="contained"
            size="large"
            sx={{
              minHeight: 48,
              px: 4,
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {farmAnimalTimePageContent.signupUnavailableLabel}
          </Button>
        )}
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
          }}
        >
          {farmAnimalTimePageContent.heroDescription}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {farmAnimalTimePageContent.signupDescription}
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--off-white)',
          border: '2px solid var(--primary-blue)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-2xl)',
          }}
        >
          {farmAnimalTimePageContent.whatToExpectTitle}
        </Typography>
        <SchoolList items={farmAnimalTimePageContent.whatToExpectItems} />
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--primary-yellow)',
          border: '3px solid var(--primary-blue)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 'var(--spacing-md)',
            fontWeight: 700,
            fontSize: 'var(--text-2xl)',
          }}
        >
          {farmAnimalTimePageContent.donationsTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 'var(--spacing-lg)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-relaxed)',
            fontWeight: 500,
          }}
        >
          {farmAnimalTimePageContent.donationsIntro}
        </Typography>
        <SchoolList items={farmAnimalTimePageContent.donationItems} />
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          border: '3px solid var(--primary-green)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-2xl)',
          }}
        >
          {farmAnimalTimePageContent.supervisionTitle}
        </Typography>
        <SchoolList items={farmAnimalTimePageContent.supervisionItems} />
      </ContentContainer>
    </CanvasView>
  );
};
