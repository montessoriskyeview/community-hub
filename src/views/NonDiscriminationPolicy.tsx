import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { nonDiscriminationPolicy } from '../config/nonDiscriminationPolicy';

export const NonDiscriminationPolicy = () => {
  return (
    <CanvasView>
      <ContentContainer
        component="section"
        aria-labelledby="nondiscrimination-policy-title"
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'left',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          id="nondiscrimination-policy-title"
          variant="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
            textAlign: 'center',
          }}
        >
          {nonDiscriminationPolicy.noticeTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          The statement below is Montessori Skye View Learning Center&apos;s
          nondiscriminatory policy as to students.
        </Typography>
        {nonDiscriminationPolicy.fullStatement.map(statement => (
          <Typography
            key={statement}
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-loose)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            {statement}
          </Typography>
        ))}
        <ContentContainer
          component="section"
          aria-label="Short reference statement"
          variant="default"
          spacing="sm"
          style={{
            margin: 0,
            padding: 'var(--spacing-lg)',
            border: '2px solid var(--medium-gray)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--cloud-white)',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'var(--text-dark)',
              marginBottom: 'var(--spacing-sm)',
              fontWeight: 700,
            }}
          >
            Short Reference Statement
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-loose)',
              marginBottom: 0,
            }}
          >
            {nonDiscriminationPolicy.shortStatement}
          </Typography>
        </ContentContainer>
      </ContentContainer>
    </CanvasView>
  );
};
