import { donationPolicy } from '../../config/donationPolicy';
import { coopLinks } from '../../components/shared/resourceUtils';

const { eligibility, pickupVisit, sizeCategories, storageFees, messaging } =
  donationPolicy.giveaway;

const sizeKeys = Object.keys(sizeCategories) as Array<
  keyof typeof sizeCategories
>;

export const giveawayPageContent = {
  heroTitle: 'Community Giveaway',
  heroSubtitle: 'Donation pickup and giveaway swapping for Las Vegas residents',
  heroDescription:
    'Gently used goods stay on site until claimed. Community members may pick up from the giveaway zone or take storage-fee shelf items. A valid ID with a Las Vegas address is required at every visit.',
  donateGoodsCtaLabel: 'Donate goods form',
  donationReviewCtaLabel: 'Donation review form',
  donateGoodsUrl: coopLinks.donationForm,
  donationReviewUrl: coopLinks.donationReviewForm,
  eligibilityTitle: 'Who can pick up',
  eligibilityItems: [
    `Present a ${eligibility.idTypesLabel}`,
    eligibility.addressRequirementLabel,
  ],
  pickupTitle: 'Giveaway pickup visits',
  pickupIntro:
    'Pay a per-visit contribution, then take freely from the giveaway zone within the haul described for your visit type. We lead with Household Pickup.',
  pickupOffers: [
    {
      ...pickupVisit.recommended,
      isRecommended: true,
    },
    {
      ...pickupVisit.light,
      isRecommended: false,
    },
    {
      ...pickupVisit.heavy,
      isRecommended: false,
    },
  ],
  storageTitle: 'Storage-fee shelf',
  storageIntro: messaging.storageFeeHeading,
  comboRule: messaging.comboRule,
  sizeGuideTitle: 'Size guide for tagging',
  sizeRows: sizeKeys.map(size => ({
    size,
    footprintRule: sizeCategories[size].footprintRule,
    toys: sizeCategories[size].examples.toys,
    clothing: sizeCategories[size].examples.clothing,
    furniture: sizeCategories[size].examples.furniture,
    toysFee: storageFees.toys[size],
    clothingFee: storageFees.clothing[size],
    furnitureFee: storageFees.furniture[size],
  })),
  storageFeesTitle: 'Storage-fee contributions',
  donateTitle: 'Donate goods to the hub',
  donateItems: [
    'Toys, clothing, and furniture in clean, usable condition are welcome',
    'Items stay on site until claimed by an eligible Las Vegas resident',
    'Large (XL) furniture is accepted only when floor space allows',
    'Staff or volunteers tag storage-fee shelf items by size category',
  ],
  hoursNote:
    'Open hours are posted on site and shared when you inquire. Walk-ins are welcome during published hours with ID ready.',
};
