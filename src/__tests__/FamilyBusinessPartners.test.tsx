import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import SponsorCard from '../components/family-business-partners/SponsorCard';
import { SPONSOR_FORM_URL, SPONSOR_TIERS } from '../config/sponsorProgram';
import exampleSponsorRecords from '../data/sponsors.example.json';
import sponsorSchema from '../data/sponsors.schema.json';
import { SPONSORS, getSponsorsByTier } from '../data/sponsors';
import { FOOTER_SECONDARY_NAVIGATION_ITEMS } from '../i18n/site/navigation';
import { ISponsor } from '../types/sponsor';
import { render } from '../utils/testUtils';
import FamilyBusinessPartners from '../views/FamilyBusinessPartners';

const renderWithRouter = (element: React.ReactElement) =>
  render(<MemoryRouter>{element}</MemoryRouter>);

describe('Montessori Family Business Partners', () => {
  test('renders the complete page and all empty-tier form links', () => {
    renderWithRouter(<FamilyBusinessPartners />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /support the families who support our montessori community/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /we are proud to recognize family-owned businesses within our montessori community/i
      )
    ).toBeInTheDocument();

    SPONSOR_TIERS.forEach(tier => {
      const emptyTierLink = screen.getByRole('link', {
        name: `Become our first ${tier.name} sponsor!`,
      });
      expect(emptyTierLink).toHaveAttribute('href', SPONSOR_FORM_URL);
    });

    screen
      .getAllByRole('link', { name: /become a sponsor/i })
      .forEach(link => expect(link).toHaveAttribute('href', SPONSOR_FORM_URL));
  });

  test('keeps production sponsor data empty until approved records are added', () => {
    expect(SPONSORS).toEqual([]);
    SPONSOR_TIERS.forEach(tier => {
      expect(getSponsorsByTier(tier.id)).toEqual([]);
    });
  });

  test('keeps schema tiers aligned with program tiers', () => {
    const schemaTiers = sponsorSchema.$defs.sponsor.properties.tier.enum;
    expect(schemaTiers).toEqual(
      expect.arrayContaining(SPONSOR_TIERS.map(tier => tier.id))
    );
    expect(schemaTiers).toHaveLength(SPONSOR_TIERS.length);
  });

  test('renders the non-production example through the reusable card', () => {
    const exampleSponsor = exampleSponsorRecords[0] as ISponsor;

    renderWithRouter(
      <SponsorCard sponsor={exampleSponsor} tierName="Community Partner" />
    );

    expect(
      screen.getByRole('heading', { name: exampleSponsor.businessName })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: `${exampleSponsor.businessName} website (opens in a new tab)`,
      })
    ).toHaveAttribute('href', exampleSponsor.websiteUrl);
    expect(
      screen.getByRole('img', {
        name: `${exampleSponsor.businessName} logo`,
      })
    ).toBeInTheDocument();
  });

  test('registers the permanent footer navigation entry', () => {
    expect(FOOTER_SECONDARY_NAVIGATION_ITEMS).toContainEqual(
      expect.objectContaining({
        text: 'Family Business Partners',
        path: '/family-business-partners',
      })
    );
  });
});
