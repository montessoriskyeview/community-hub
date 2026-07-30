import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../utils/testUtils';
import { MobileHeroCTA } from '../components/shared/MobileHeroCTA';

// Mock the contact components
jest.mock('../components/shared/EmailContact', () => ({
  EmailContact: ({ children, ...props }: any) => (
    <a
      href="mailto:test@example.com"
      aria-label="Email skye view"
      {...props}
    >
      {children}
    </a>
  ),
}));

jest.mock('../components/shared/PhoneContact', () => ({
  PhoneContact: ({ children, ...props }: any) => (
    <a href="tel:+1234567890" aria-label="Call skye view" {...props}>
      {children}
    </a>
  ),
}));

describe('MobileHeroCTA', () => {
  beforeEach(() => {
    // Reset any viewport modifications
    Object.defineProperty(window, 'innerWidth', {
      value: 375,
      configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 667,
      configurable: true,
    });
  });

  describe('Rendering', () => {
    test('renders the expandable header with correct text', () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });
      expect(header).toBeInTheDocument();
      expect(screen.getByText(/ready to join the coop/i)).toBeInTheDocument();
    });

    test('renders expand/collapse icon correctly', () => {
      render(<MobileHeroCTA />);

      // Check for expand/collapse icon using data-testid
      expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    test('expands and collapses on click', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });

      // Initially collapsed
      expect(header).toHaveAttribute('aria-expanded', 'false');

      // Click to expand
      fireEvent.click(header);
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
      });

      // Click to collapse
      fireEvent.click(header);
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });
    });

    test('expands and collapses on keyboard interaction', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });

      // Test Enter key
      fireEvent.keyDown(header, { key: 'Enter' });
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
      });

      // Test Space key
      fireEvent.keyDown(header, { key: ' ' });
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });
    });

    test('shows membership and contact buttons when expanded', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        expect(screen.getByRole('link', { name: /call/i })).toBeInTheDocument();
      });

      expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });

      expect(header).toHaveAttribute('aria-expanded');
      expect(header).toHaveAttribute('aria-label');
      expect(header).toHaveAttribute('tabIndex', '0');
    });

    test('updates aria-label when expanded/collapsed', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });

      // Initial state
      expect(header).toHaveAttribute('aria-label', 'Expand membership options');

      // Expanded state
      fireEvent.click(header);
      await waitFor(() => {
        expect(header).toHaveAttribute(
          'aria-label',
          'Collapse membership options'
        );
      });
    });

    test('contact buttons have proper ARIA labels', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        expect(screen.getByRole('link', { name: /call/i })).toBeInTheDocument();
      });

      const callButton = screen.getByRole('link', { name: /call/i });
      const emailButton = screen.getByRole('link', { name: /email/i });

      expect(callButton).toHaveAttribute(
        'aria-label',
        'Call skye view'
      );
      expect(emailButton).toHaveAttribute(
        'aria-label',
        'Email skye view'
      );
    });
  });

  describe('Contact Links', () => {
    test('contact buttons have correct href attributes', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand membership options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        expect(screen.getByRole('link', { name: /call/i })).toBeInTheDocument();
      });

      const callButton = screen.getByRole('link', { name: /call/i });
      const emailButton = screen.getByRole('link', { name: /email/i });

      expect(callButton).toHaveAttribute('href', 'tel:+1234567890');
      expect(emailButton).toHaveAttribute('href', 'mailto:test@example.com');
    });
  });
});
