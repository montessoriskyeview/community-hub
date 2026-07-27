import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { SchoolList } from '../components/shared/ListText';
import { giveawayPageContent } from '../i18n/pages/giveaway';

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
        <Box
          component="div"
          sx={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
          }}
        >
          {giveawayPageContent.pickupOffers.map(offer => (
            <Box
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
            </Box>
          ))}
        </Box>
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
        <TableContainer
          component={Paper}
          sx={{ mb: 4, overflowX: 'auto' }}
          aria-label="Storage-fee contributions by size and category"
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell scope="col">Size</TableCell>
                <TableCell scope="col">Toys</TableCell>
                <TableCell scope="col">Clothing</TableCell>
                <TableCell scope="col">Furniture</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {giveawayPageContent.sizeRows.map(row => (
                <TableRow key={row.size}>
                  <TableCell component="th" scope="row">
                    {row.size}
                  </TableCell>
                  <TableCell>{row.toysFee}</TableCell>
                  <TableCell>{row.clothingFee}</TableCell>
                  <TableCell>{row.furnitureFee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
        <TableContainer
          component={Paper}
          sx={{ overflowX: 'auto' }}
          aria-label="Size tagging guide for toys, clothing, and furniture"
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell scope="col">Size</TableCell>
                <TableCell scope="col">Footprint</TableCell>
                <TableCell scope="col">Toys</TableCell>
                <TableCell scope="col">Clothing</TableCell>
                <TableCell scope="col">Furniture</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {giveawayPageContent.sizeRows.map(row => (
                <TableRow key={`guide-${row.size}`}>
                  <TableCell component="th" scope="row">
                    {row.size}
                  </TableCell>
                  <TableCell>{row.footprintRule}</TableCell>
                  <TableCell>{row.toys}</TableCell>
                  <TableCell>{row.clothing}</TableCell>
                  <TableCell>{row.furniture}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
