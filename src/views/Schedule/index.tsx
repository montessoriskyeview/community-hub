import { InfoText } from '../../components/shared/InfoText';
import { CanvasView } from '../../components/shared/Canvas/CanvasView';
import { ListText } from '../../components/shared/ListText';
import {
  DailyScheduleProps,
  YearlyScheduleProps,
  YEARLY_SCHEDULE_ITEMS,
  FULL_TIME_SCHEDULE_ITEMS,
  PART_TIME_SCHEDULE_ITEMS,
} from './items';
import { NestedListItem } from '../../components/shared/NestedListItem';
import { CollapseContainer } from '../../components/shared/CollapseContainer';
import { ContentContainer } from '../../components/shared/ContentContainer';
import { Typography } from '../../components/shared/Typography';
import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { EnrollmentButtons } from '../../components/shared/EnrollmentButtons';
import { schedulePageContent } from '../../i18n/pages/schedule';
import IMG_6887 from '../../resources/images/location/IMG_6887.webp';

export const Schedule = () => {
  return (
    <CanvasView>
      <InfoText
        title={schedulePageContent.title}
        text={schedulePageContent.intro}
      />

      {/* IMPORTANT: Active Participation Requirements */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--primary-yellow)',
          color: 'var(--text-dark)',
          border: '4px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-xl)',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          ⚠️ IMPORTANT: This is an Active Participation Program
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          This is a homeschool cooperative where parent participation options are flexible, but mandatory.
        </Typography>
        <div
          style={{
            display: 'grid',
            gap: 'var(--spacing-md)',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST contribute monthly</strong> - time, resources,
            or other support
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST participate</strong> in classroom activities,
            maintenance, or administration
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST homeschool</strong> - your child is legally
            homeschooled in Nevada
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            <strong>
              We offer drop-off options with stipulations, but this is NOT a
              traditional drop-off program
            </strong>{' '}
            — families must still meet co-op participation requirements.
            Contact us for clarification.
          </Typography>
        </div>
      </ContentContainer>

      {/* Featured Image Section - Outdoor Learning in Action */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          🌿 Community Learning in Action
        </Typography>

        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: 'var(--spacing-lg)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={IMG_6887}
            alt="Children learning outdoors at Montessori Skye View Community Hub with teacher on sunny day - beautiful outdoor learning environment in Las Vegas"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="eager"
          />
        </div>

        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            fontStyle: 'italic',
          }}
        >
          "Nature is the best playground. It is the source of all learning, the
          foundation of all growth." - Dr. Maria Montessori
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginTop: 'var(--spacing-md)',
          }}
        >
          Our Montessori Skye View homeschool coop offers the lowest
          learner-to-guide ratio and the best outdoor landscape in the Las
          Vegas valley, with active parent involvement creating an exceptional
          learning community in our beautiful suburban campus!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginTop: 'var(--spacing-md)',
          }}
        >
          Our children thrive in our beautiful outdoor learning environment,
          where parents, educators, and children work together as nature becomes
          the classroom and every day brings new discoveries through
          collaborative learning.
        </Typography>
      </ContentContainer>

      {/* H2 Section - Secondary keywords */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          🌟 Where Learning Comes Alive! 🌟
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-xl)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          Nurturing curious minds and joyful hearts in grades Pre-K through 5th
        </Typography>
      </ContentContainer>

      {/* H2 Section - About Montessori education */}
      <InfoText
        title="About Our Homeschool Parent Cooperative"
        text="Montessori Skye View Community Hub hosts a homeschool parent cooperative where families are REQUIRED to be active partners in their child's education. We offer drop-off options with stipulations, but this is not a traditional drop-off school — parents must still participate monthly in classroom activities, maintenance, administration, or other contributions. Contact us for clarification. We combine the Montessori Method with mandatory family involvement, where parents work alongside educators to create an exceptional learning environment. As a cooperative, families share responsibility for education, governance, and daily operations. Your child is legally homeschooled in Nevada, and we provide guidance for state requirements. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus also supports community programs like Farm Animal Time and the Community Giveaway."
        spacing="lg"
        titleVariant="h2"
      />

      {/* H3 Section - Our approach */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'center',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-xl)', md: 'var(--text-3xl)' },
          }}
        >
          🌱 Our Cooperative Montessori Approach
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          We create a collaborative environment where children, parents, and
          educators work together to foster safety, value, and inspiration. Our
          experienced teachers partner with engaged families to guide each
          child's unique learning journey, helping them develop confidence,
          independence, and a lifelong love of learning through community
          involvement.
        </Typography>
      </ContentContainer>

      {/* H3 Section - What makes us special */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-pink)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-xl)', md: 'var(--text-3xl)' },
          }}
        >
          🎨 What Makes Our Parent Cooperative Special
        </Typography>
        <div
          role="list"
          style={{
            display: 'grid',
            gap: 'var(--spacing-md)',
            textAlign: 'left',
          }}
        >
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              🎯
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
                fontWeight: 500,
              }}
            >
              Individualized learning plans for every child
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              🤝
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
                fontWeight: 500,
              }}
            >
              Parent involvement in daily learning activities
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              🌿
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
                fontWeight: 500,
              }}
            >
              Beautiful outdoor learning spaces
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              💝
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
                fontWeight: 500,
              }}
            >
              Collaborative community that celebrates every family
            </Typography>
          </div>
        </div>
      </ContentContainer>

      {/* Parent Involvement Benefits */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-yellow)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          🤝 Why Choose a Parent Cooperative?
        </Typography>
        <div
          role="list"
          style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              👨‍👩‍👧‍👦
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Active Family Involvement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Parents participate directly in their child's education through
                classroom assistance, special projects, and community events,
                creating stronger family-school connections.
              </Typography>
            </div>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              💰
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Community-Supported Quality Education
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Cooperative membership can lower suggested donation
                requirements while maintaining high-quality Montessori education
                through shared responsibilities and community investment.
              </Typography>
            </div>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              🌱
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Stronger Learning Community
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Children benefit from seeing their parents actively engaged in
                their learning environment, while families build lasting
                friendships and support networks.
              </Typography>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* Program Options Cards */}
      <Box component="div" sx={{ marginBottom: 'var(--spacing-3xl)' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-dark)',
          }}
        >
          {schedulePageContent.chooseProgramTitle}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-blue)',
                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                transition:
                  'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(37, 99, 235, 0.2)',
                },
              }}
            >
              <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                <AccessTimeIcon
                  sx={{
                    fontSize: 64,
                    color: 'var(--primary-blue)',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--primary-blue)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramHours}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramDescription}
                </Typography>

                {/* Full-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title={schedulePageContent.fullTimeProgramScheduleTitle}
                    testId="full-time-daily-schedule"
                    content={
                      <>
                        <DailySchedule items={FULL_TIME_SCHEDULE_ITEMS} />
                        <Typography
                          sx={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            marginTop: 'var(--spacing-md)',
                          }}
                        >
                          {schedulePageContent.fullTimeProgramScheduleFooter}
                        </Typography>
                      </>
                    }
                  />
                </Box>

                <Button
                  component={Link}
                  to="/schedule/full-time"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'var(--primary-blue)',
                    color: 'white',
                    fontSize: 'var(--text-lg)',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#1D4ED8',
                      transform: 'translateY(-2px)',
                    },
                    minHeight: 56,
                    minWidth: 200,
                  }}
                >
                  {schedulePageContent.learnMoreLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                transition:
                  'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(5, 150, 105, 0.2)',
                },
              }}
            >
              <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                <FamilyRestroomIcon
                  sx={{
                    fontSize: 64,
                    color: 'var(--primary-green)',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--primary-green)',
                  }}
                >
                  {schedulePageContent.partTimeProgramTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  {schedulePageContent.partTimeProgramHours}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {schedulePageContent.partTimeProgramDescription}
                </Typography>

                {/* Part-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title={schedulePageContent.partTimeProgramScheduleTitle}
                    testId="part-time-daily-schedule"
                    content={
                      <>
                        <DailySchedule items={PART_TIME_SCHEDULE_ITEMS} />
                        <Typography
                          sx={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            marginTop: 'var(--spacing-md)',
                          }}
                        >
                          {schedulePageContent.partTimeProgramScheduleFooter}
                        </Typography>
                      </>
                    }
                  />
                </Box>

                <Button
                  component={Link}
                  to="/schedule/part-time"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'var(--primary-green)',
                    color: 'white',
                    fontSize: 'var(--text-lg)',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#059669',
                      transform: 'translateY(-2px)',
                    },
                    minHeight: 56,
                    minWidth: 200,
                  }}
                >
                  {schedulePageContent.learnMoreLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="div"
        sx={{
          marginBottom: 'var(--spacing-3xl)',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2">{schedulePageContent.enrollTitle}</Typography>
        <EnrollmentButtons variant="dark" />
      </Box>

      {/* H2 Section - Call to action */}
      <InfoText
        title="Ready to Commit to Active Participation?"
        text="We invite families who are ready to be ACTIVE PARTNERS in their child's education to explore our cooperative. This is perfect for families who want to be involved, can commit their time or materials on a monthly basis, and are comfortable with homeschooling requirements. We offer drop-off options with stipulations, but if you want a full traditional drop-off experience with no parent involvement, this program is not the right fit. Contact us for clarification on drop-off options, or to schedule a visit, meet our community, and learn about the participation requirements for joining our cooperative learning family!"
        spacing="lg"
        titleVariant="h2"
      />

      <CollapseContainer
        title={schedulePageContent.yearlyScheduleTitle}
        testId="yearly-schedule"
        content={<YearlySchedule items={YEARLY_SCHEDULE_ITEMS} />}
      />

      <ListText
        title={schedulePageContent.weeklyScheduleTitle}
        items={schedulePageContent.weeklyScheduleItems}
      />
    </CanvasView>
  );
};

const DailySchedule = ({ items }: DailyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.title}
          title={`${i.startTime} - ${i.endTime}`}
          description={[i.title, i.detail]}
        />
      ))}
    </>
  );
};

const YearlySchedule = ({ items }: YearlyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.startDate + i.endDate}
          title={`${i.startDate}${i.endDate ? ` - ${i.endDate}` : ''}`}
          description={[i.detail]}
        />
      ))}
    </>
  );
};

export { FullTimeLanding } from './FullTimeLanding';
export { PartTimeLanding } from './PartTimeLanding';
