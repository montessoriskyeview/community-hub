import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SponsorDirectory from '../components/family-business-partners/SponsorDirectory';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { SPONSOR_FORM_URL } from '../config/sponsorProgram';
import { hasSponsors } from '../data/sponsors';
import { familyBusinessPartnersPageContent as content } from '../i18n/pages/familyBusinessPartners';

const cardStyle = {
  textAlign: 'left' as const,
  background: 'var(--white)',
  border: '3px solid var(--primary-green)',
  boxShadow: 'var(--shadow-lg)',
};

const sponsorCtaButtonSx = {
  alignSelf: 'center',
  minHeight: 44,
  px: 4,
  py: 2,
  fontSize: 'var(--text-base)',
};

const SponsorCtaButton = ({
  color = 'primary',
}: {
  color?: 'primary' | 'success';
}) => (
  <Button
    href={SPONSOR_FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    variant="contained"
    color={color}
    sx={sponsorCtaButtonSx}
  >
    {content.hero.cta}
  </Button>
);

const FamilyBusinessPartners = () => {
  const showSponsors = hasSponsors();

  return (
    <CanvasView>
      <ContentContainer
        variant="hero"
        spacing="lg"
        style={{ textAlign: 'center' }}
      >
        <Typography variant="h1" component="h1" color="white">
          {content.hero.title}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={{ fontSize: 'var(--text-2xl)', fontWeight: 500 }}
        >
          {content.hero.subTitle}
        </Typography>
        {!showSponsors && <SponsorCtaButton color="success" />}
      </ContentContainer>

      {showSponsors && (
        <ContentContainer
          variant="card"
          spacing="lg"
          style={{ ...cardStyle, borderColor: 'var(--secondary-purple)' }}
        >
          <Typography variant="h2" component="h2">
            {content.directory.title}
          </Typography>
          <Typography variant="body1">{content.directory.intro}</Typography>
          <SponsorDirectory
            showDetails={false}
            includeEmptyTiers={false}
            headingIdPrefix="sponsor-listing"
          />
        </ContentContainer>
      )}

      {showSponsors && (
        <ContentContainer
          variant="card"
          spacing="lg"
          style={{
            ...cardStyle,
            textAlign: 'center',
            borderColor: 'var(--primary-blue)',
          }}
        >
          <SponsorCtaButton color="success" />
        </ContentContainer>
      )}

      <ContentContainer variant="card" spacing="lg" style={cardStyle}>
        <Typography variant="h2" component="h2">
          {content.mission.title}
        </Typography>
        <Typography variant="body1">{content.mission.statement}</Typography>
        <Typography variant="body1">{content.mission.overview}</Typography>
        <Typography
          variant="h3"
          component="p"
          sx={{
            mb: 0,
            p: 3,
            color: 'var(--primary-green)',
            backgroundColor: 'var(--light-gray)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--text-xl)',
          }}
        >
          {content.recognitionMessage}
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{ ...cardStyle, borderColor: 'var(--primary-blue)' }}
      >
        <Typography variant="h2" component="h2">
          {content.whyParticipate.title}
        </Typography>
        <Grid container spacing={4}>
          {content.whyParticipate.groups.map(group => (
            <Grid item xs={12} md={4} key={group.title}>
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontSize: 'var(--text-2xl)' }}
              >
                {group.title}
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 3,
                  m: 0,
                  '& li': { mb: 2, lineHeight: 'var(--leading-normal)' },
                }}
              >
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>

      <ContentContainer variant="card" spacing="lg" style={cardStyle}>
        <Typography variant="h2" component="h2">
          {content.levels.title}
        </Typography>
        <Typography variant="body1">{content.levels.intro}</Typography>
        {!showSponsors && (
          <Typography variant="body1">{content.directory.intro}</Typography>
        )}
        <SponsorDirectory
          headingIdPrefix="participation-level"
          showPopulatedListings={!showSponsors}
        />
      </ContentContainer>

      <ContentContainer variant="card" spacing="lg" style={cardStyle}>
        <Typography variant="h2" component="h2">
          {content.process.title}
        </Typography>
        <Box
          component="ol"
          sx={{
            pl: 3,
            m: 0,
            '& li': {
              mb: 2,
              pl: 1,
              lineHeight: 'var(--leading-normal)',
            },
          }}
        >
          {content.process.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </Box>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{ ...cardStyle, borderColor: 'var(--secondary-purple)' }}
      >
        <Typography variant="h2" component="h2">
          {content.faq.title}
        </Typography>
        <div>
          {content.faq.items.map((item, index) => (
            <Accordion
              key={item.question}
              disableGutters
              sx={{
                '&:before': { display: 'none' },
                borderBottom:
                  index === content.faq.items.length - 1
                    ? 'none'
                    : '1px solid var(--medium-gray)',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon aria-hidden="true" />}
                aria-controls={`partner-faq-panel-${index}`}
                id={`partner-faq-heading-${index}`}
                sx={{ minHeight: 56 }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ mb: 0, fontSize: 'var(--text-xl)' }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails id={`partner-faq-panel-${index}`}>
                <Typography variant="body1" sx={{ mb: 0 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          ...cardStyle,
          textAlign: 'center',
          borderColor: 'var(--primary-blue)',
        }}
      >
        <Typography variant="h2" component="h2">
          {content.finalCta.title}
        </Typography>
        <Typography variant="body1">{content.finalCta.text}</Typography>
        <Button
          href={content.finalCta.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={sponsorCtaButtonSx}
        >
          {content.finalCta.label}
        </Button>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{ ...cardStyle, borderColor: 'var(--primary-blue)' }}
      >
        <Typography variant="h2" component="h2">
          {content.acknowledgement.title}
        </Typography>
        <Typography variant="body1">
          {content.acknowledgement.intro}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3">
              {content.acknowledgement.allowedTitle}
            </Typography>
            <Box
              component="ul"
              sx={{
                pl: 3,
                '& li': { mb: 2, lineHeight: 'var(--leading-normal)' },
              }}
            >
              {content.acknowledgement.allowed.map(item => (
                <li key={item}>{item}</li>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3">
              {content.acknowledgement.excludedTitle}
            </Typography>
            <Box
              component="ul"
              sx={{
                pl: 3,
                '& li': { mb: 2, lineHeight: 'var(--leading-normal)' },
              }}
            >
              {content.acknowledgement.excluded.map(item => (
                <li key={item}>{item}</li>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{
            mb: 0,
            p: 3,
            backgroundColor: 'var(--light-gray)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          {content.acknowledgement.disclaimer}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

export default FamilyBusinessPartners;
