export const donationPolicy = {
  legalStatus:
    'Montessori Skye View is transitioning to a 501(c)(3) nonprofit model.',
  familyParticipation: {
    hoursPerSemester: 20,
    hoursPerYear: 40,
    inLieuDonationPerHour: 25,
  },
  programs: {
    fullTime: {
      annualSuggestedDonation: '$9,900',
      monthlySuggestedDonationSchoolYear: '$1,100',
      monthlySuggestedDonationYearRound: '$850',
      schoolYearMonthsLabel: 'September through May',
      yearRoundMonthsLabel: 'September through August',
    },
    partTime: {
      annualSuggestedDonation: '$6,750',
      monthlySuggestedDonationSchoolYear: '$750',
      monthlySuggestedDonationYearRound: '$587.50',
      schoolYearMonthsLabel: 'September through May',
      yearRoundMonthsLabel: 'September through August',
    },
  },
  enrollment: {
    earlyDonation: '$400',
    standardDonation: '$500',
    earlyDeadlineLabel: 'Before August 31st',
    standardDeadlineLabel: 'After August 31st',
  },
  meals: {
    suggestedDonationPerDay: '$3',
  },
  farmAnimalTime: {
    model: 'drop-in' as const,
    dropIn: {
      suggestedDonationPerChild: '$8',
      childAgeThresholdLabel: 'Age 2 and older',
      underTwoSuggestedDonation: 'Free',
      minSupervisingAdults: 1,
      adultsSuggestedDonation: 'No donation — supervising adults are not charged',
      responsibilityDocumentRequired: true,
      signupUrl: '',
    },
  },
  giveaway: {
    eligibility: {
      idTypesLabel: 'Valid driver license or passport',
      addressRequirementLabel: 'Las Vegas address on the ID',
      outOfScopeLabel: 'North Las Vegas and Henderson addresses are not accepted at this time',
    },
    pickupVisit: {
      recommended: {
        label: 'Household Pickup',
        suggestedDonation: '$10',
        description:
          'One household visit during open hours; take from the giveaway zone up to 1 kitchen-size trash bag of soft goods plus 1 carryable hard good (or equivalent volume)',
      },
      light: {
        label: 'Light Access',
        suggestedDonation: '$5',
        description: 'Soft goods only, up to 1 grocery bag',
      },
      heavy: {
        label: 'Heavy Haul',
        suggestedDonation: '$20',
        description:
          'Soft goods bag plus 1 furniture piece from the giveaway zone (if available)',
      },
    },
    sizeCategories: {
      XS: {
        footprintRule: 'Fits in two hands / about a shoebox or smaller',
        examples: {
          toys: 'Small figures, cars, card games, small plush',
          clothing: 'Accessories, infant socks/bibs, single folded tee',
          furniture: 'Small décor, lamps under ~12", wall art ≤16"',
        },
      },
      S: {
        footprintRule: 'About 1 grocery bag or nightstand footprint',
        examples: {
          toys: 'Medium plush, board games, small bin of blocks',
          clothing:
            'Single adult/kids garment, shoes (pair), outfit set ≤3 pieces',
          furniture: 'Stool, side table, folding chair, small shelf',
        },
      },
      M: {
        footprintRule: 'About a kitchen trash bag or chair footprint',
        examples: {
          toys: 'Ride-on toddler toys, dollhouses, tote of mixed toys',
          clothing: 'Jacket/coat, bulk 5–10 garments, bedding set (twin)',
          furniture:
            'Dining chair, coffee table, bookcase ≤4\', twin headboard',
        },
      },
      L: {
        footprintRule: 'Needs two people or a cart; closet-shelf volume',
        examples: {
          toys: 'Large outdoor toys, play kitchen, multi-bin lots',
          clothing: 'Full trash bag of clothes, comforter/queen bedding',
          furniture:
            'Dresser, twin/full mattress or frame, loveseat, desk',
        },
      },
      XL: {
        footprintRule:
          'Vehicle / truck space; floor space at least half a sofa',
        examples: {
          toys: 'Playsets, trampoline parts, large multi-piece lots',
          clothing: 'Moving-box+ of textiles',
          furniture:
            'Sofa, queen/king bed set, dining table, large appliances (if accepted)',
        },
      },
    },
    storageFees: {
      toys: { XS: '$1', S: '$2', M: '$5', L: '$10', XL: '$20' },
      clothing: { XS: '$1', S: '$2', M: '$4', L: '$8', XL: '$15' },
      furniture: { XS: '$2', S: '$5', M: '$12', L: '$25', XL: '$40' },
    },
    messaging: {
      storageFeeHeading: 'Storage-fee contribution — covers on-site holding only',
      comboRule:
        'Storage-fee shelf items do not require a separate giveaway visit contribution. Giveaway-zone takes require a pickup visit contribution. You may do both in one trip.',
    },
  },
  messaging: {
    sectionHeading: 'Suggested Family Donation Options',
    registrationHeading: 'Coop Membership Donation Guidelines',
  },
} as const;
