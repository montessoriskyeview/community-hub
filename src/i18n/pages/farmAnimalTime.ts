import { donationPolicy } from '../../config/donationPolicy';

const { dropIn } = donationPolicy.farmAnimalTime;

export const farmAnimalTimePageContent = {
  heroTitle: 'Farm Animal Time',
  heroSubtitle: 'Drop-in hours for kids to spend time with farm animals',
  heroDescription:
    'Families are welcome during published drop-in hours. Suggested donations are per child only. At least one adult must supervise, and that adult must sign a responsibility document before attending.',
  whatToExpectTitle: 'What to expect',
  whatToExpectItems: [
    'Open drop-in hours — no booked slots for this first season',
    'Hands-on time with farm animals in a supervised setting',
    'Comfortable clothes and closed-toe shoes recommended',
    'Outside animal food is not allowed unless staff provide it',
  ],
  donationsTitle: 'Suggested donations',
  donationsIntro:
    'Pricing is per child only. Supervising adults are required and are not charged.',
  donationItems: [
    `${dropIn.suggestedDonationPerChild} per child (${dropIn.childAgeThresholdLabel})`,
    `Under 2: ${dropIn.underTwoSuggestedDonation}`,
    dropIn.adultsSuggestedDonation,
  ],
  supervisionTitle: 'Supervision & responsibility',
  supervisionItems: [
    `At least ${dropIn.minSupervisingAdults} supervising adult must accompany every child or group of children`,
    'The supervising adult must sign a responsibility document assuming liability for any issue before attending',
    'Disclosure consent and the required per-child suggested donation are completed through the signup link',
  ],
  signupTitle: 'Sign up before you visit',
  signupDescription:
    'Complete the signup form to consent to disclosure, sign the responsibility document, and confirm your per-child suggested donation.',
  signupCtaLabel: 'Open signup form',
  signupUnavailableLabel:
    'Signup link coming soon — contact us to join the waitlist',
  contactFallbackPath: '/contact',
};
