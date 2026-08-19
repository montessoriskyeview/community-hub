export type NavigationItemKey =
  | 'home'
  | 'parentsResources'
  | 'registration'
  | 'parentInvolvement'
  | 'schedule'
  | 'farmAnimalTime'
  | 'giveaway'
  | 'familyBusinessPartners'
  | 'location'
  | 'enrollments'
  | 'teachers'
  | 'faq'
  | 'philosophy'
  | 'accessibility'
  | 'blog'
  | 'contact';

export interface NavigationItemContent {
  key: NavigationItemKey;
  text: string;
  path: string;
  isInCollapseMenu?: boolean;
}

export const PRIMARY_NAVIGATION_ITEMS: NavigationItemContent[] = [
  {
    key: 'home',
    text: 'Home',
    path: '/',
  },
  {
    key: 'schedule',
    text: 'Coop Programs',
    path: '/schedule',
  },
  {
    key: 'farmAnimalTime',
    text: 'Farm Animal Time',
    path: '/farm-animal-time',
  },
  {
    key: 'giveaway',
    text: 'Community Giveaway',
    path: '/giveaway',
  },
  {
    key: 'registration',
    text: 'Coop Registration',
    path: '/registration',
  },
  {
    key: 'faq',
    text: 'FAQ',
    path: '/faq',
  },
];

export const FOOTER_SECONDARY_NAVIGATION_ITEMS: NavigationItemContent[] = [
  {
    key: 'familyBusinessPartners',
    text: 'Family Business Partners',
    path: '/family-business-partners',
  },
  {
    key: 'parentInvolvement',
    text: 'Parent Involvement',
    path: '/parent-involvement',
  },
  {
    key: 'parentsResources',
    text: 'Parents Resources',
    path: '/parents',
  },
  {
    key: 'enrollments',
    text: 'Coop Membership',
    path: '/enrollments',
  },
  {
    key: 'teachers',
    text: 'Teachers',
    path: '/teachers',
  },
  {
    key: 'philosophy',
    text: 'Philosophy',
    path: '/philosophy',
  },
  {
    key: 'accessibility',
    text: 'Accessibility',
    path: '/accessibility',
  },
  {
    key: 'blog',
    text: 'Blog',
    path: '/blog',
  },
  {
    key: 'contact',
    text: 'Contact',
    path: '/contact',
  },
];

export const NAVIGATION_ITEMS: NavigationItemContent[] = [
  ...PRIMARY_NAVIGATION_ITEMS,
  ...FOOTER_SECONDARY_NAVIGATION_ITEMS.map(item => ({
    ...item,
    isInCollapseMenu: true,
  })),
];
