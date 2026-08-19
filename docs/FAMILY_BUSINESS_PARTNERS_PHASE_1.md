# Montessori Family Business Partners — Phase 1

## Purpose

### Mission

Montessori Family Business Partners strengthens the cooperative by recognizing
family-owned businesses, welcoming community supporters, and inviting modest
annual contributions that support Montessori learning without changing the
cooperative's intentionally small size.

### Program overview

The program serves a cooperative of approximately 20 children. It is designed
for relationship-building and transparent acknowledgement, not aggressive
enrollment or revenue growth.

The free Community Recognition Member level is a community benefit for parents
or guardians of enrolled children who actively participate in the cooperative.
Paid Community Partner, Family Partner, and Founding Partner levels are open to
eligible family-owned and outside community businesses.

### Benefits

For the cooperative:

- Builds relationships with families and nearby businesses.
- Offers modest unrestricted support for learning materials, operations, and
  community activities.
- Creates a consistent, reviewable acknowledgement process.

For families:

- Makes it easier to identify businesses connected to the cooperative.
- Recognizes the skills and work of active cooperative families.
- Creates additional ways for families to strengthen the community.

For participating businesses:

- Identifies the business as a supporter of the cooperative.
- Provides accurate, value-neutral acknowledgement on the website.
- Offers a predictable annual review and renewal cycle.

Acknowledgement is not an endorsement by Skye View.

## Participation levels

### Community Recognition Member — FREE

Eligibility is limited to a parent or guardian of an enrolled child who is an
active cooperative participant. No contribution is required.

Acknowledgements:

- Business name, logo, website, category, and short neutral description.
- Listing in the Community Recognition Member section.

Compliance review: because no contribution is made, this level is not a
qualified sponsorship payment. The same neutral content rules are applied to
protect the cooperative's credibility and keep recognition informational.

### Community Partner — BRONZE

Suggested annual contribution: $250–$500.

Acknowledgements:

- Enhanced listing on the partner page.
- Inclusion in the Community Partner logo section.
- One annual acknowledgement.

Compliance review: the benefits identify the contributor by name, logo, link,
and neutral business information. They do not promise audience size, sales,
exclusivity, or a message that promotes the sponsor.

### Family Partner — SILVER

Suggested annual contribution: $1,000.

Acknowledgements:

- Featured placement in the Family Partner section.
- Value-neutral acknowledgement at a cooperative event.

Compliance review: placement and event recognition remain acknowledgements
when the content is limited to identification. The contribution is not
contingent on attendance, views, or another measure of exposure.

### Founding Partner — GOLD

Suggested annual contribution: $2,500.

Acknowledgements:

- Highest acknowledgement placement in the Founding Partner section.
- Featured placement on the partner page.
- Value-neutral acknowledgements at cooperative events.

Compliance review: prominence and frequency do not convert identification into
advertising by themselves. Every message must still use only the approved
neutral fields, and no exclusive-provider arrangement is offered.

## Sponsor content standard

Allowed acknowledgement fields:

- Business and brand names.
- Logo or a brand slogan that contains no qualitative or comparative claim.
- Website, address, telephone number, and social links.
- Value-neutral description of products or services.
- Product or service listings.

Do not publish:

- A call to purchase, book, visit, contact, or use the sponsor.
- Comparative or qualitative claims.
- Endorsements or testimonials from the cooperative.
- Discounts, coupons, prices, or savings claims.
- Sales messages or promises of results.
- Claims such as “best,” “top rated,” “award winning,” “premier,” or
  “industry leading.”
- Benefits tied to attendance, website traffic, enrollment, or public exposure.
- Exclusive-provider rights or use of the cooperative's intellectual property.

A single message containing both acknowledgement and advertising is treated as
advertising. Remove the promotional portion before publication.

## Website directory design

### Sample layout

The public page presents one section for each participation level in this order:

1. Community Recognition Member.
2. Community Partner.
3. Family Partner.
4. Founding Partner.

Each section contains its bracket, suggested annual contribution, eligibility,
acknowledgements, compliance explanation, and sponsor cards. When a section has
no records, it displays a “Become our first [level] sponsor!” form link.

Each sponsor card displays the business name, logo when supplied, category,
website, neutral description, and acknowledgement level. Approved address,
telephone, and social links may also appear. Featured records sort before other
records within the same level; `sortOrder` then controls the remaining order.

### Accessibility recommendations

- Maintain one page heading followed by logical section and card headings.
- Give every logo meaningful alternative text; use text initials when no logo
  is supplied.
- Label external links with the business name and warn screen-reader users when
  a link opens a new tab.
- Keep links and buttons at least 44 by 44 pixels with visible keyboard focus.
- Never use color alone to identify a participation level; show the level name
  and bracket as text.
- Preserve at least WCAG 2.1 AA contrast and support 200% zoom.

### Mobile layout recommendations

- Use one sponsor-card column on narrow screens and two columns when space
  permits.
- Allow long business names, descriptions, and form links to wrap.
- Keep 24 pixels or more of card padding and spacing between interactive
  elements.
- Let the Call, Email, and Become a Sponsor controls wrap without shrinking
  below the minimum touch target.
- Test at 360, 375, and 390 pixel widths and with mobile screen readers.

## JSON-driven sponsor template

`src/data/sponsors.schema.json` is the complete JSON Schema and
`src/data/sponsors.example.json` is a non-production example record.
`src/data/sponsors.json` is the only production list.

The rendering flow is:

1. `src/data/sponsors.ts` imports the JSON and exposes typed tier and featured
   queries.
2. `SponsorDirectory.tsx` iterates through the configured participation levels.
3. `SponsorTierSection.tsx` requests records for its level and renders either a
   card grid or the first-sponsor form link.
4. `SponsorCard.tsx` renders only approved identification fields.
5. `FamilyBusinessPartners.tsx` and the homepage consume the same directory
   components, so one JSON update changes both locations.

To add a sponsor, copy the object shape from the example, replace every value
with reviewed information, use a unique kebab-case `id`, place the approved
logo in `public/images/sponsors/`, and add the object to the production array.
Do not add a field that is absent from the schema.

## Onboarding process

1. The business submits the Google Form and chooses a participation level.
2. A program coordinator verifies eligibility for the free family level.
3. The coordinator confirms the contribution level, if applicable, without
   promising traffic, attendance, referrals, or sales.
4. The business provides only the fields supported by `sponsors.schema.json`.
5. The coordinator reviews the name, slogan, description, logo, and linked
   labels against the sponsor content standard.
6. The coordinator requests a factual rewrite if any claim is promotional.
7. The coordinator records approval, acknowledgement start date, end date, and
   the source of the logo.
8. The approved record is added to `src/data/sponsors.json`; the website is
   reviewed on mobile and desktop before publication.
9. The cooperative retains the form response, approval notes, contribution
   record, and final acknowledgement for its records.

Suggested service standard: acknowledge an application within five business
days and publish an approved record within ten business days.

## Annual renewal process

Use one annual cycle, recommended as September 1 through August 31.

1. Send a factual renewal notice 45 days before the end date.
2. Ask the business to confirm its legal name, logo, links, category, neutral
   description, participation level, and eligibility where applicable.
3. Run the full compliance review again; prior approval does not carry forward
   automatically.
4. Record the new contribution and acknowledgement dates.
5. Remove or archive a listing within 10 business days after expiration if it
   is not renewed.
6. Keep expired records outside the production JSON so they cannot render.
7. Review the entire directory annually for broken links, outdated logos, and
   accidental promotional language.

The free family level is also renewed annually to confirm enrollment and active
cooperative participation.

## Phase 1 administration

Assign one coordinator and one backup reviewer. Use a two-person review for
Founding Partner records and any proposed slogan. Keep a simple annual log of:

- Business and contact name.
- Selected level and eligibility decision.
- Contribution date and amount, if applicable.
- Approved acknowledgement text and logo.
- Start, renewal, and end dates.
- Reviewer names and any requested revisions.

Do not guarantee placement duration beyond the recorded acknowledgement term.
Do not make contributions contingent on enrollment, event attendance, website
traffic, or social reach.

## Revenue estimates

These scenarios are planning assumptions, not targets or guarantees.

### Conservative

- Two Community Partners at $250.
- Estimated annual contributions: $500.

### Working plan

- Three Community Partners averaging $375.
- One Family Partner at $1,000.
- Estimated annual contributions: $2,125.

### Stretch

- Four Community Partners at $500.
- One Family Partner at $1,000.
- One Founding Partner at $2,500.
- Estimated annual contributions: $5,500.

The free level may include several family businesses but contributes $0. The
cooperative should evaluate success through participation, relationships, and
administrative sustainability as well as contribution totals.

## IRS qualified sponsorship review

This design follows the identification-versus-promotion distinction described
in IRC section 513(i), Treasury Regulation 1.513-4, and the IRS resource
“Advertising or qualified sponsorship payments?”

Why the design supports acknowledgement treatment:

- The approved fields identify the sponsor and its product or service lines.
- Sponsor links are labeled with the business name, not an inducement.
- Tier differences concern placement and frequency, while message content
  remains neutral.
- No contribution is contingent on attendance, ratings, traffic, enrollment,
  or another exposure measure.
- No exclusive-provider arrangement, discount, coupon, endorsement, or
  promotional claim is included.
- Event acknowledgement is connected to cooperative activities and does not
  include a sales message.

Operational cautions:

- A sponsor's external website may contain marketing; the cooperative controls
  only its own acknowledgement and link label.
- If a sponsor receives goods, services, privileges, intellectual-property
  rights, or another substantial return benefit, the cooperative must determine
  fair market value and obtain professional advice before treating the full
  contribution as a qualified sponsorship payment.
- Regularly scheduled periodicals, conventions, and trade-show activities have
  separate rules and are outside Phase 1.
- Contribution acknowledgements and tax statements must reflect the
  cooperative's actual legal status on the date issued. Do not represent a
  contribution as tax-deductible merely because the organization is
  transitioning toward 501(c)(3) status.

Reference:
https://www.irs.gov/charities-non-profits/advertising-or-qualified-sponsorship-payments

This guide is an operational framework, not legal or tax advice. The board
should have qualified counsel or a tax professional review sponsor agreements,
receipts, substantial return benefits, and the organization's exemption status
before launch and whenever program benefits change.

## Website data maintenance

- Production records: `src/data/sponsors.json`
- Schema: `src/data/sponsors.schema.json`
- Non-production example: `src/data/sponsors.example.json`
- Logo location: `public/images/sponsors/`
- Monetary source of truth: `src/config/donationPolicy.ts`

Never copy the example record into production unless it is replaced with
verified business information and approved through the onboarding process.
