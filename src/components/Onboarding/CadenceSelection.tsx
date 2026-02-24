import React from 'react';
import {
  makeStyles,
  Title2,
  Body1,
  Card,
  CardHeader,
  Button,
} from '@fluentui/react-components';
import { Language, Cadence } from '../../types';
import { t } from '../../i18n';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '48px 24px',
    background: '#f5f8fc',
  },
  title: {
    color: '#1a4971',
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
      borderColor: '#c9953e',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
  },
  cardSelected: {
    cursor: 'pointer',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#c9953e' as unknown as undefined,
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: 'rgba(201, 149, 62, 0.05)',
    boxShadow: '0 2px 12px rgba(201, 149, 62, 0.2)',
  },
  cardIcon: {
    fontSize: '28px',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 600,
    color: '#1a4971',
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
    backgroundColor: '#1a4971',
    color: '#ffffff',
    fontWeight: 600,
    borderRadius: '24px',
    padding: '10px 36px',
    border: 'none',
    ':hover': {
      backgroundColor: '#2d6da4',
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
    backgroundColor: '#c9953e',
  },
  dotActive: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#c9953e',
  },
});

interface CadenceSelectionProps {
  language: Language;
  selectedCadence: Cadence;
  onSelect: (cadence: Cadence) => void;
  onNext: () => void;
  onBack: () => void;
}

const cadenceOptions: { id: Cadence; icon: string; nameKey: 'cadenceDaily' | 'cadenceTwiceWeekly' | 'cadenceWeekly'; descKey: 'cadenceDailyDesc' | 'cadenceTwiceWeeklyDesc' | 'cadenceWeeklyDesc' }[] = [
  { id: 'daily', icon: '🌅', nameKey: 'cadenceDaily', descKey: 'cadenceDailyDesc' },
  { id: 'twice_weekly', icon: '📅', nameKey: 'cadenceTwiceWeekly', descKey: 'cadenceTwiceWeeklyDesc' },
  { id: 'weekly', icon: '🌙', nameKey: 'cadenceWeekly', descKey: 'cadenceWeeklyDesc' },
];

export const CadenceSelection: React.FC<CadenceSelectionProps> = ({
  language,
  selectedCadence,
  onSelect,
  onNext,
  onBack,
}) => {
  const classes = useStyles();

  const handleSelect = (cadenceId: Cadence) => {
    onSelect(cadenceId);
    setTimeout(() => onNext(), 350);
  };

  return (
    <div className={classes.container} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={classes.stepIndicator}>
        <div className={classes.dotActive} />
        <div className={classes.dotActive} />
        <div className={classes.dotActive} />
      </div>
      <Title2 className={classes.title}>{t('selectCadence', language)}</Title2>
      <Body1 className={classes.description}>{t('selectCadenceDesc', language)}</Body1>

      <div className={classes.grid} role="radiogroup" aria-label={t('selectCadence', language)}>
        {cadenceOptions.map(option => (
          <Card
            key={option.id}
            className={selectedCadence === option.id ? classes.cardSelected : classes.card}
            onClick={() => handleSelect(option.id)}
            role="radio"
            aria-checked={selectedCadence === option.id}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(option.id);
              }
            }}
          >
            <CardHeader
              image={<span className={classes.cardIcon}>{option.icon}</span>}
              header={<span className={classes.cardTitle}>{t(option.nameKey, language)}</span>}
              description={<span className={classes.cardDesc}>{t(option.descKey, language)}</span>}
            />
          </Card>
        ))}
      </div>

      <div className={classes.actions}>
        <Button className={classes.backButton} appearance="subtle" onClick={onBack}>
          {t('back', language)}
        </Button>
        <Button className={classes.nextButton} onClick={onNext}>
          {t('getStarted', language)}
        </Button>
      </div>
    </div>
  );
};
