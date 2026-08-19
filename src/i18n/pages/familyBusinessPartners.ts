import {
  SPONSOR_ACKNOWLEDGEMENT_RULES,
  SPONSOR_FORM_URL,
} from '../../config/sponsorProgram';

export const familyBusinessPartnersPageContent = {
  hero: {
    title: 'Support the Families Who Support Our Montessori Community',
    subTitle:
      'Recognition of family-owned businesses and community partners who help strengthen our cooperative.',
    cta: 'Become a Sponsor',
  },
  mission: {
    title: 'Our Mission',
    statement:
      "Montessori Family Business Partners strengthens our cooperative by recognizing family-owned businesses, welcoming community supporters, and inviting modest annual contributions that support Montessori learning while preserving our intentionally small community.",
    overview:
      'This Phase 1 program centers relationships and responsible acknowledgement. It is designed for a cooperative serving approximately 20 children, not for aggressive enrollment or revenue growth.',
  },
  recognitionMessage:
    'We are proud to recognize family-owned businesses within our Montessori community.',
  whyParticipate: {
    title: 'Why Participate',
    groups: [
      {
        title: 'For Our Cooperative',
        items: [
          'Build lasting relationships with families and nearby businesses.',
          'Provide modest support for learning materials, operations, and community activities.',
          'Maintain one clear and consistent acknowledgement process.',
        ],
      },
      {
        title: 'For Families',
        items: [
          'Recognize the work and skills of active cooperative families.',
          'Make community-connected businesses easier to identify.',
          'Create another way to strengthen our shared Montessori community.',
        ],
      },
      {
        title: 'For Participating Businesses',
        items: [
          'Be identified as a supporter of the cooperative.',
          'Receive accurate, value-neutral acknowledgement.',
          'Use a predictable annual review and renewal process.',
        ],
      },
    ],
  },
  levels: {
    title: 'Participation Levels and Partner Directory',
    intro:
      'Choose the recognition level that fits your relationship with the cooperative. Suggested contributions support the program; sponsor messages remain neutral at every level.',
  },
  directory: {
    title: 'Meet Our Family Business Partners',
    intro:
      'Listings identify participating businesses and their services. Skye View does not endorse a listed business, product, or service.',
  },
  acknowledgement: {
    title: 'Acknowledgement, Not Advertising',
    intro:
      'Our recognition is designed to identify supporters in line with IRS qualified sponsorship guidance. Sponsor-provided content is reviewed before publication.',
    allowedTitle: 'Acknowledgements may include',
    excludedTitle: 'Acknowledgements do not include',
    allowed: SPONSOR_ACKNOWLEDGEMENT_RULES.allowed,
    excluded: SPONSOR_ACKNOWLEDGEMENT_RULES.excluded,
    disclaimer:
      "Participation does not imply endorsement by Skye View. Contribution acknowledgements reflect the cooperative's legal status when issued; the program does not promise that a contribution is tax-deductible.",
  },
  process: {
    title: 'How It Works',
    steps: [
      'Submit the sponsor form and choose a participation level.',
      'Provide your business name, logo, links, category, and a short neutral description.',
      'Our coordinator confirms eligibility and reviews the acknowledgement content.',
      'Approved listings are published for the annual acknowledgement term.',
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Who can join the free recognition level?',
        answer:
          'A parent or guardian of an enrolled child who actively participates in the cooperative may join as a Community Recognition Member.',
      },
      {
        question: 'Who can join a contribution level?',
        answer:
          'Family-owned businesses and businesses in the wider community may apply for Community Partner, Family Partner, or Founding Partner acknowledgement.',
      },
      {
        question: 'Can a listing include a special offer or sales message?',
        answer:
          'No. Listings are limited to business identification and neutral descriptions. Discounts, calls to purchase, endorsements, comparative claims, and promotional messages are not published.',
      },
      {
        question: 'Does Skye View endorse listed businesses?',
        answer:
          'No. A listing acknowledges participation in the program and does not represent an endorsement of a business, product, or service.',
      },
      {
        question: 'How long does acknowledgement last?',
        answer:
          'Listings use an annual acknowledgement term and are reviewed before renewal. Free listings also renew annually to confirm eligibility.',
      },
      {
        question: 'Are contributions tax-deductible?',
        answer:
          "Tax treatment depends on the cooperative's legal status and each contributor's circumstances. Consult a qualified tax professional; Skye View does not provide tax advice.",
      },
    ],
  },
  finalCta: {
    title: 'Strengthen Our Cooperative Community',
    text:
      'Share your business information and preferred participation level through our sponsor form.',
    label: 'Become a Sponsor',
    url: SPONSOR_FORM_URL,
  },
} as const;
