import React from 'react';
import {
  makeStyles,
  Title2,
  Body1,
  Card,
  CardHeader,
  Button,
} from '@fluentui/react-components';
import { Language } from '../../types';
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

interface LanguageSelectionProps {
  language: Language;
  selectedLanguage: Language;
  onSelect: (lang: Language) => void;
  onFinish: () => void;
  onBack: () => void;
}

const languageOptions: { id: Language; icon: string; label: string }[] = [
  { id: 'en', icon: '🇬🇧', label: 'English' },
  { id: 'ar', icon: '🇸🇦', label: 'العربية' },
  { id: 'fr', icon: '🇫🇷', label: 'Français' },
];

export const LanguageSelection: React.FC<LanguageSelectionProps> = ({
  language,
  selectedLanguage,
  onSelect,
  onFinish,
  onBack,
}) => {
  const classes = useStyles();

  const handleSelect = (langId: Language) => {
    onSelect(langId);
    setTimeout(() => onFinish(), 350);
  };

  return (
    <div className={classes.container} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className={classes.stepIndicator}>
        <div className={classes.dotActive} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </div>
      <Title2 className={classes.title}>{t('language', language)}</Title2>
      <Body1 className={classes.description}>
        {language === 'ar' ? 'اختر لغة التطبيق' : language === 'fr' ? 'Choisissez la langue de l\'application' : 'Choose your preferred language'}
      </Body1>

      <div className={classes.grid} role="radiogroup" aria-label={t('language', language)}>
        {languageOptions.map(option => (
          <Card
            key={option.id}
            className={selectedLanguage === option.id ? classes.cardSelected : classes.card}
            onClick={() => handleSelect(option.id)}
            role="radio"
            aria-checked={selectedLanguage === option.id}
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
              header={<span className={classes.cardTitle}>{option.label}</span>}
            />
          </Card>
        ))}
      </div>

      <div className={classes.actions}>
        <Button className={classes.backButton} appearance="subtle" onClick={onBack}>
          {t('back', language)}
        </Button>
        <Button className={classes.nextButton} onClick={onFinish}>
          {t('next', language)}
        </Button>
      </div>
    </div>
  );
};
