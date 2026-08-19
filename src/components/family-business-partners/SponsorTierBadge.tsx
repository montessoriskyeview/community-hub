import { ISponsorTierConfig } from '../../config/sponsorProgram';

import './sponsor-tier-badge.css';

interface ISponsorTierBadgeProps {
  name: ISponsorTierConfig['name'];
  bracket: ISponsorTierConfig['bracket'];
}

const BRACKET_CLASS: Record<ISponsorTierConfig['bracket'], string> = {
  GOLD: 'sponsor-tier-badge--gold',
  SILVER: 'sponsor-tier-badge--silver',
  BRONZE: 'sponsor-tier-badge--bronze',
  FREE: 'sponsor-tier-badge--free',
};

const SponsorTierBadge = ({ name, bracket }: ISponsorTierBadgeProps) => (
  <span
    className={`sponsor-tier-badge ${BRACKET_CLASS[bracket]}`}
    aria-label={`${name} ${bracket} acknowledgement level`}
  >
    <span className="sponsor-tier-badge__label">{bracket}</span>
  </span>
);

export default SponsorTierBadge;
