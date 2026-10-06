import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { nonDiscriminationPolicy } from '../config/nonDiscriminationPolicy';

export const NonDiscriminationPolicy = () => {
  return (
    <CanvasView>
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
          variant="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          {nonDiscriminationPolicy.noticeTitle}
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
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginTop: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
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
          }}
        >
          {nonDiscriminationPolicy.shortStatement}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
