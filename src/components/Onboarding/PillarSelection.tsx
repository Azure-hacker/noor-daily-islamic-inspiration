import React from 'react';
import {
  makeStyles,
  Title2,
  Body1,
  Card,
  CardHeader,
  Button,
} from '@fluentui/react-components';
import { Language, Pillar, PILLARS } from '../../types';
import { t } from '../../i18n';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '48px 24px',
    background: '#faf9f7',
  },
  title: {
    color: '#0f4c3a',
    marginBottom: '8px',
    fontWeight: 700,
  },
  description: {
    color: '#5a5a5a',
    marginBottom: '32px',
    textAlign: 'center',
    maxWidth: '400px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%',
    maxWidth: '480px',
  },
  card: {
    cursor: 'pointer',
    border: '2px solid transparent',
    borderRadius: '12px',
    padding: '16px',
    transition: 'all 0.2s ease',
    ':hover': {
      borderColor: '#d4af37',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
  },
  cardSelected: {
    cursor: 'pointer',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#d4af37' as unknown as undefined,
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
    boxShadow: '0 2px 12px rgba(212, 175, 55, 0.2)',
  },
  cardIcon: {
    fontSize: '28px',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 600,
    color: '#0f4c3a',
  },
  cardDesc: {
    color: '#666',
    fontSize: '13px',
    marginTop: '4px',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '32px',
    width: '100%',
    maxWidth: '480px',
    justifyContent: 'space-between',
  },
  backButton: {
    color: '#666',
  },
  nextButton: {
    backgroundColor: '#0f4c3a',
    color: '#ffffff',
    fontWeight: 600,
    borderRadius: '24px',
    padding: '10px 36px',
    border: 'none',
    ':hover': {
      backgroundColor: '#1a6b4f',
    },
    ':disabled': {
      backgroundColor: '#ccc',
      color: '#999',
    },
  },
  stepIndicator: {
    display: 'flex',
    gap: '8px',
    marginBottom: '32px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ddd',
  },
  dotActive: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#d4af37',
  },
});

interface PillarSelectionProps {
  language: Language;
  selectedPillar: Pillar | null;
  onSelect: (pillar: Pillar) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PillarSelection: React.FC<PillarSelectionProps> = ({
  language,
  selectedPillar,
  onSelect,
  onNext,
  onBack,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={classes.stepIndicator}>
        <div className={classes.dotActive} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </div>
      <Title2 className={classes.title}>{t('selectPillar', language)}</Title2>
      <Body1 className={classes.description}>{t('selectPillarDesc', language)}</Body1>

      <div className={classes.grid} role="radiogroup" aria-label={t('selectPillar', language)}>
        {PILLARS.map(pillar => (
          <Card
            key={pillar.id}
            className={selectedPillar === pillar.id ? classes.cardSelected : classes.card}
            onClick={() => onSelect(pillar.id)}
            role="radio"
            aria-checked={selectedPillar === pillar.id}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelect(pillar.id);
              }
            }}
          >
            <CardHeader
              image={<span className={classes.cardIcon}>{pillar.icon}</span>}
              header={<span className={classes.cardTitle}>{pillar.name[language]}</span>}
              description={<span className={classes.cardDesc}>{pillar.description[language]}</span>}
            />
          </Card>
        ))}
      </div>

      <div className={classes.actions}>
        <Button className={classes.backButton} appearance="subtle" onClick={onBack}>
          {t('back', language)}
        </Button>
        <Button
          className={classes.nextButton}
          disabled={!selectedPillar}
          onClick={onNext}
        >
          {t('next', language)}
        </Button>
      </div>
    </div>
  );
};
