import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import exampleSponsorRecords from '../data/sponsors.example.json';
import { ISponsor } from '../types/sponsor';
import { render } from '../utils/testUtils';

const exampleSponsor = exampleSponsorRecords[0] as ISponsor;

jest.mock('../data/sponsors', () => {
  const records = require('../data/sponsors.example.json');
  const example = records[0];

  return {
    SPONSORS: records,
    hasSponsors: () => true,
    getFeaturedSponsors: () =>
      records.filter((sponsor: { featured: boolean }) => sponsor.featured),
    getSponsorsByTier: (tier: string) =>
      records.filter((sponsor: { tier: string }) => sponsor.tier === tier),
  };
});

import SponsorDirectory from '../components/family-business-partners/SponsorDirectory';
import { Home } from '../views/Home';
import FamilyBusinessPartners from '../views/FamilyBusinessPartners';

const renderWithRouter = (element: React.ReactElement) =>
  render(<MemoryRouter>{element}</MemoryRouter>);

describe('Family Business Partners layout with listings', () => {
  test('places sponsor listings above the page CTA', () => {
    renderWithRouter(<FamilyBusinessPartners />);

    const listing = screen.getByRole('heading', {
      name: exampleSponsor.businessName,
    });
    const cta = screen.getAllByRole('link', { name: /become a sponsor/i })[0];

    expect(
      listing.compareDocumentPosition(cta) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  test('places homepage listings above the featured partner CTA', () => {
    renderWithRouter(<Home />);

    const listing = screen.getByRole('heading', {
      name: exampleSponsor.businessName,
    });
    const cta = screen.getByRole('link', {
      name: /learn about family business partners/i,
    });

    expect(
      listing.compareDocumentPosition(cta) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  test('keeps empty-tier CTAs after listings in the reusable directory', () => {
    renderWithRouter(
      <>
        <SponsorDirectory
          showDetails={false}
          includeEmptyTiers={false}
          headingIdPrefix="populated"
        />
        <SponsorDirectory
          showDetails={false}
          includePopulatedTiers={false}
          headingIdPrefix="empty"
        />
      </>
    );

    const listing = screen.getByRole('heading', {
      name: exampleSponsor.businessName,
    });
    const emptyCta = screen.getByRole('link', {
      name: /become our first founding partner sponsor/i,
    });

    expect(
      listing.compareDocumentPosition(emptyCta) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
