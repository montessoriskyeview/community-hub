import { Button, Box as MuiBox } from '@mui/material';
import { Box } from '../components/shared/Box';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { SchoolList } from '../components/shared/ListText';
import { giveawayPageContent } from '../i18n/pages/giveaway';

/** Flip to true to restore published pickup tiers and storage-fee tables. */
const SHOW_COMPLEX_PRICING = false;

const tableSx = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  textAlign: 'left' as const,
  fontSize: 'var(--text-base)',
  lineHeight: 'var(--leading-relaxed)',
  '& th, & td': {
    padding: '12px 16px',
    borderBottom: '1px solid var(--light-gray)',
    verticalAlign: 'top',
  },
  '& th': {
    fontWeight: 700,
    background: 'var(--off-white)',
    color: 'var(--text-dark)',
  },
  '& tbody th': {
    background: 'transparent',
    fontWeight: 600,
  },
  '& tbody tr:last-child th, & tbody tr:last-child td': {
    borderBottom: 'none',
  },
};

const tableWrapSx = {
  mb: 4,
  overflowX: 'auto',
  border: '1px solid var(--light-gray)',
  borderRadius: 1,
  background: 'var(--white)',
};

export const Giveaway = () => {
  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
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
          {giveawayPageContent.heroTitle}
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
          {giveawayPageContent.heroSubtitle}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          <Button
            component="a"
            href={giveawayPageContent.donateGoodsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{ minHeight: 48, px: 4 }}
          >
            {giveawayPageContent.donateGoodsCtaLabel}
          </Button>
          <Button
            component="a"
            href={giveawayPageContent.donationReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            sx={{ minHeight: 48, px: 4 }}
          >
            {giveawayPageContent.donationReviewCtaLabel}
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {giveawayPageContent.heroDescription}
        </Typography>
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
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-2xl)',
          }}
        >
          {giveawayPageContent.eligibilityTitle}
        </Typography>
        <SchoolList items={giveawayPageContent.eligibilityItems} />
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          border: '2px solid var(--primary-green)',
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
          {giveawayPageContent.pickupTitle}
        </Typography>
        {SHOW_COMPLEX_PRICING ? (
          <>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 'var(--spacing-xl)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              {giveawayPageContent.pickupIntro}
            </Typography>
            <MuiBox
              component="div"
              sx={{
                display: 'grid',
                gap: 'var(--spacing-lg)',
              }}
            >
              {giveawayPageContent.pickupOffers.map(offer => (
                <MuiBox
                  key={offer.label}
                  component="article"
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: offer.isRecommended
                      ? '3px solid var(--primary-blue)'
                      : '1px solid var(--light-gray)',
                    background: offer.isRecommended
                      ? 'var(--off-white)'
                      : 'var(--white)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: 'var(--text-xl)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    {offer.label}
                    {offer.isRecommended ? ' (recommended)' : ''}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      fontSize: 'var(--text-lg)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    {offer.suggestedDonation} per visit
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 'var(--text-base)',
                      lineHeight: 'var(--leading-relaxed)',
                    }}
                  >
                    {offer.description}
                  </Typography>
                </MuiBox>
              ))}
            </MuiBox>
          </>
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Suggested family contributions are arranged case by case based on
            what you plan to take from the giveaway zone. Ask on site or contact
            us and we will tailor a visit that fits your household.
          </Typography>
        )}
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
            marginBottom: 'var(--spacing-md)',
            fontWeight: 700,
            fontSize: 'var(--text-2xl)',
          }}
        >
          {giveawayPageContent.storageTitle}
        </Typography>
        {SHOW_COMPLEX_PRICING ? (
          <>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 'var(--spacing-md)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                fontWeight: 600,
              }}
            >
              {giveawayPageContent.storageIntro}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 'var(--spacing-xl)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              {giveawayPageContent.comboRule}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                marginBottom: 'var(--spacing-lg)',
                fontWeight: 700,
                fontSize: 'var(--text-xl)',
              }}
            >
              {giveawayPageContent.storageFeesTitle}
            </Typography>
            <MuiBox
              component="div"
              sx={tableWrapSx}
              role="region"
              aria-label="Storage-fee contributions by size and category"
            >
              <MuiBox component="table" sx={tableSx}>
                <MuiBox component="thead">
                  <MuiBox component="tr">
                    <MuiBox component="th" scope="col">
                      Size
                    </MuiBox>
                    <MuiBox component="th" scope="col">
                      Toys
                    </MuiBox>
                    <MuiBox component="th" scope="col">
                      Clothing
                    </MuiBox>
                    <MuiBox component="th" scope="col">
                      Furniture
                    </MuiBox>
                  </MuiBox>
                </MuiBox>
                <MuiBox component="tbody">
                  {giveawayPageContent.sizeRows.map(row => (
                    <MuiBox component="tr" key={row.size}>
                      <MuiBox component="th" scope="row">
                        {row.size}
                      </MuiBox>
                      <MuiBox component="td">{row.toysFee}</MuiBox>
                      <MuiBox component="td">{row.clothingFee}</MuiBox>
                      <MuiBox component="td">{row.furnitureFee}</MuiBox>
                    </MuiBox>
                  ))}
                </MuiBox>
              </MuiBox>
            </MuiBox>
          </>
        ) : (
          <Typography
            variant="body1"
            sx={{
              marginBottom: 'var(--spacing-xl)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Storage-shelf items are tagged by size. Suggested contributions for
            those items are also set case by case — ask staff when you visit.
            You may combine giveaway-zone takes and storage-shelf items in one
            trip.
          </Typography>
        )}

        <Typography
          variant="h3"
          sx={{
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-xl)',
          }}
        >
          {giveawayPageContent.sizeGuideTitle}
        </Typography>
        <MuiBox
          component="div"
          sx={{ ...tableWrapSx, mb: 0 }}
          role="region"
          aria-label="Size tagging guide for toys, clothing, and furniture"
        >
          <MuiBox component="table" sx={tableSx}>
            <MuiBox component="thead">
              <MuiBox component="tr">
                <MuiBox component="th" scope="col">
                  Size
                </MuiBox>
                <MuiBox component="th" scope="col">
                  Footprint
                </MuiBox>
                <MuiBox component="th" scope="col">
                  Toys
                </MuiBox>
                <MuiBox component="th" scope="col">
                  Clothing
                </MuiBox>
                <MuiBox component="th" scope="col">
                  Furniture
                </MuiBox>
              </MuiBox>
            </MuiBox>
            <MuiBox component="tbody">
              {giveawayPageContent.sizeRows.map(row => (
                <MuiBox component="tr" key={`guide-${row.size}`}>
                  <MuiBox component="th" scope="row">
                    {row.size}
                  </MuiBox>
                  <MuiBox component="td">{row.footprintRule}</MuiBox>
                  <MuiBox component="td">{row.toys}</MuiBox>
                  <MuiBox component="td">{row.clothing}</MuiBox>
                  <MuiBox component="td">{row.furniture}</MuiBox>
                </MuiBox>
              ))}
            </MuiBox>
          </MuiBox>
        </MuiBox>
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
          {giveawayPageContent.donateTitle}
        </Typography>
        <SchoolList items={giveawayPageContent.donateItems} />
        <Typography
          variant="body1"
          sx={{
            marginTop: 'var(--spacing-xl)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-relaxed)',
            fontStyle: 'italic',
          }}
        >
          {giveawayPageContent.hoursNote}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
