interface RouteSEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const ROUTE_SEO_CONFIGS: Record<string, RouteSEOConfig> = {
  home: {
    title:
      'Montessori Skye View Community Hub | Homeschool Coop Las Vegas',
    description:
      'A Las Vegas community hub offering a Montessori homeschool parent cooperative, Farm Animal Time drop-in visits, and a resident giveaway swap for families.',
    keywords:
      'community hub Las Vegas, Montessori parent cooperative, homeschool coop Las Vegas, Farm Animal Time, community giveaway Las Vegas, Skye View',
    url: '/',
  },
  location: {
    title: 'Location | Montessori Skye View Community Hub Las Vegas',
    description:
      'Learn how our Las Vegas community hub and parent cooperative coordinate learning locations and on-site community programs.',
    keywords:
      'community hub location Las Vegas, Skye Canyon cooperative, Montessori coop location, Las Vegas community programs',
    url: '/location',
  },
  donations: {
    title:
      'Family Donation Support | Montessori Skye View Community Hub Las Vegas',
    description:
      'Transparent suggested donation levels and family contribution options for our Montessori parent cooperative.',
    keywords:
      'Montessori family donations Las Vegas, nonprofit community hub support, parent cooperative contributions, Montessori donation options',
    url: '/donations',
  },
  schedule: {
    title: 'Coop Programs & Schedule | Montessori Skye View Community Hub',
    description:
      'Explore full-time and part-time Montessori coop program tracks for Pre-K through 5th grade homeschool families in Las Vegas.',
    keywords:
      'Montessori coop schedule, homeschool cooperative programs, Pre-K coop Las Vegas, flexible learning schedules',
    url: '/schedule',
  },
  registration: {
    title: 'Coop Membership & Registration | Montessori Skye View Community Hub',
    description:
      "Join our Montessori homeschool parent cooperative. Simple coop membership registration for Pre-K through 5th grade families.",
    keywords:
      'Montessori coop registration Las Vegas, parent cooperative membership, homeschool coop enrollment, Las Vegas Montessori coop',
    url: '/registration',
  },
  philosophy: {
    title: 'Our Cooperative Philosophy | Child-Centered Learning Approach',
    description:
      'Discover our Montessori cooperative philosophy combining traditional principles with outdoor learning and family participation.',
    keywords:
      'Montessori cooperative philosophy, child-centered learning, outdoor education philosophy, parent cooperative method',
    url: '/philosophy',
  },
  contact: {
    title: 'Contact Us | Montessori Skye View Community Hub Las Vegas',
    description:
      'Get in touch with our Las Vegas community hub. Ask about the homeschool coop, Farm Animal Time, or the community giveaway.',
    keywords:
      'contact community hub Las Vegas, Montessori coop contact, Farm Animal Time Las Vegas, giveaway pickup Las Vegas',
    url: '/contact',
  },
  faq: {
    title: 'Frequently Asked Questions | Montessori Skye View Community Hub',
    description:
      'Find answers about our community hub, Montessori parent cooperative, suggested donations, and participation requirements.',
    keywords:
      'community hub FAQ, parent cooperative questions, Montessori coop FAQ, Las Vegas homeschool coop FAQ',
    url: '/faq',
  },
  accessibility: {
    title: 'Accessibility Statement | Montessori Skye View Community Hub',
    description:
      'Our commitment to accessibility and inclusive design. Learn about our efforts to make our website accessible to all users.',
    keywords:
      'accessibility, inclusive design, WCAG compliance, community hub accessibility, Las Vegas Montessori accessibility',
    url: '/accessibility',
  },
  review: {
    title: 'Share Your Experience | Montessori Skye View Community Hub',
    description:
      'Share your experience with our community hub and parent cooperative. Your feedback helps other Las Vegas families.',
    keywords:
      'community hub reviews Las Vegas, Montessori Skye View feedback, parent cooperative testimonials',
    url: '/review',
  },
  parents: {
    title: 'Parent Resources | Montessori Skye View Community Hub',
    description:
      'Access important documents, forms, and resources for coop member families. Handbooks, agreements, and communication guidelines.',
    keywords:
      'parent resources, Montessori coop documents, membership forms, parent handbook, Las Vegas cooperative resources',
    url: '/parents',
  },
  staffResources: {
    title: 'Staff Resources | Montessori Skye View Community Hub',
    description:
      'Confidential staff resources and materials. Access to curriculum guidelines, assessment forms, and professional development materials.',
    keywords:
      'staff resources, Montessori staff materials, curriculum guidelines, assessment forms, professional development',
    url: '/staff-resources',
  },
  fullTimeLanding: {
    title:
      'Full-Time Coop Program | 8AM-4PM Daily | Montessori Skye View Community Hub',
    description:
      'Give your child the complete Montessori coop experience with our full-time program. Extended hours 8AM-4PM with enriched curriculum and outdoor learning.',
    keywords:
      'full-time Montessori coop Las Vegas, 8AM-4PM cooperative program, working parents Montessori coop',
    url: '/schedule/full-time',
  },
  partTimeLanding: {
    title:
      'Part-Time Coop Program | 9AM-1PM Daily | Montessori Skye View Community Hub',
    description:
      'Join our part-time Montessori coop program. Core learning hours 9AM-1PM with focused academics, outdoor activities, and family balance.',
    keywords:
      'part-time Montessori coop Las Vegas, 9AM-1PM cooperative program, flexible homeschool coop schedule',
    url: '/schedule/part-time',
  },
  farmAnimalTime: {
    title: 'Farm Animal Time | Drop-In Visits | Montessori Skye View Community Hub',
    description:
      'Drop-in Farm Animal Time for kids in Las Vegas. Suggested donation per child; supervising adults sign a responsibility document and are not charged.',
    keywords:
      'Farm Animal Time Las Vegas, farm animals kids drop-in, community hub animals, suggested donation per child',
    url: '/farm-animal-time',
  },
  giveaway: {
    title:
      'Community Giveaway & Donation Pickup | Montessori Skye View Community Hub',
    description:
      'Las Vegas residents can pick up donated goods on site. Present a DL or passport with a Las Vegas address. Household pickup and storage-fee shelf options available.',
    keywords:
      'community giveaway Las Vegas, donation pickup Las Vegas, storage-fee thrift, resident giveaway swap',
    url: '/giveaway',
  },
  familyBusinessPartners: {
    title:
      'Montessori Family Business Partners | Skye View Community Hub',
    description:
      'Meet family-owned businesses and community partners acknowledged for supporting the Skye View Montessori cooperative in Las Vegas.',
    keywords:
      'Montessori family businesses Las Vegas, community partners, cooperative sponsors, Skye View supporters',
    url: '/family-business-partners',
  },
};
