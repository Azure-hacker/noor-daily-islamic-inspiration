import React, { useState } from 'react';
import {
  makeStyles,
  Title2,
  Body1,
  Button,
  Card,
  CardHeader,
  Divider,
} from '@fluentui/react-components';
import { Language, Pillar, Cadence, PILLARS } from '../../types';
import { t } from '../../i18n';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#faf9f7',
  },
  header: {
    background: 'linear-gradient(135deg, #0f4c3a 0%, #1a6b4f 100%)',
    padding: '24px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  backBtn: {
    color: '#ffffff',
    minWidth: 'auto',
    fontSize: '18px',
    ':hover': {
      color: '#d4af37',
    },
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#ffffff',
  },
  content: {
    padding: '24px',
    flex: 1,
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
    color: '#d4af37',
    marginBottom: '12px',
    marginTop: '24px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  card: {
    cursor: 'pointer',
    border: '2px solid transparent',
    borderRadius: '12px',
    padding: '12px',
    transition: 'all 0.2s ease',
    ':hover': {
      borderColor: '#d4af37',
    },
  },
  cardSelected: {
    cursor: 'pointer',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#d4af37' as unknown as undefined,
    borderRadius: '12px',
    padding: '12px',
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
  },
  cardIcon: {
    fontSize: '24px',
    marginRight: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 600,
    color: '#0f4c3a',
    fontSize: '14px',
  },
  cardDesc: {
    color: '#666',
    fontSize: '12px',
    marginTop: '2px',
  },
  saveButton: {
    backgroundColor: '#0f4c3a',
    color: '#ffffff',
    fontWeight: 600,
    borderRadius: '24px',
    padding: '12px 36px',
    border: 'none',
    width: '100%',
    maxWidth: '480px',
    margin: '24px auto',
    display: 'block',
    ':hover': {
      backgroundColor: '#1a6b4f',
    },
  },
  resetButton: {
    color: '#cc3333',
    fontWeight: 500,
    margin: '8px auto',
    display: 'block',
  },
  savedMessage: {
    textAlign: 'center',
    color: '#0f4c3a',
    fontWeight: 600,
    marginTop: '16px',
  },
  divider: {
    margin: '16px 0',
  },
});

interface SettingsProps {
  language: Language;
  pillar: Pillar;
  cadence: Cadence;
  onSetPillar: (pillar: Pillar) => void;
  onSetCadence: (cadence: Cadence) => void;
  onSetLanguage: (lang: Language) => void;
  onBack: () => void;
  onReset: () => void;
}

const cadenceOptions: { id: Cadence; icon: string; nameKey: 'cadenceDaily' | 'cadenceTwiceWeekly' | 'cadenceWeekly'; descKey: 'cadenceDailyDesc' | 'cadenceTwiceWeeklyDesc' | 'cadenceWeeklyDesc' }[] = [
  { id: 'daily', icon: '🌅', nameKey: 'cadenceDaily', descKey: 'cadenceDailyDesc' },
  { id: 'twice_weekly', icon: '📅', nameKey: 'cadenceTwiceWeekly', descKey: 'cadenceTwiceWeeklyDesc' },
  { id: 'weekly', icon: '🌙', nameKey: 'cadenceWeekly', descKey: 'cadenceWeeklyDesc' },
];

const languageOptions: { id: Language; icon: string; label: string }[] = [
  { id: 'en', icon: '🇬🇧', label: 'English' },
  { id: 'ar', icon: '🇸🇦', label: 'العربية' },
  { id: 'fr', icon: '🇫🇷', label: 'Français' },
];

export const Settings: React.FC<SettingsProps> = ({
  language,
  pillar,
  cadence,
  onSetPillar,
  onSetCadence,
  onSetLanguage,
  onBack,
  onReset,
}) => {
  const classes = useStyles();
  const [showSaved, setShowSaved] = useState(false);
  const isRtl = language === 'ar';

  const handleSave = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm(t('resetConfirm', language))) {
      onReset();
    }
  };

  return (
    <div className={classes.container} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className={classes.header}>
        <Button className={classes.backBtn} appearance="subtle" onClick={onBack}>
          {isRtl ? '→' : '←'}
        </Button>
        <span className={classes.headerTitle}>{t('settings', language)}</span>
      </div>

      <div className={classes.content}>
        {/* Pillar Selection */}
        <div className={classes.sectionTitle}>{t('yourPillar', language)}</div>
        <div className={classes.grid}>
          {PILLARS.map(p => (
            <Card
              key={p.id}
              className={pillar === p.id ? classes.cardSelected : classes.card}
              onClick={() => onSetPillar(p.id)}
            >
              <CardHeader
                image={<span className={classes.cardIcon}>{p.icon}</span>}
                header={<span className={classes.cardTitle}>{p.name[language]}</span>}
              />
            </Card>
          ))}
        </div>

        <Divider className={classes.divider} />

        {/* Cadence Selection */}
        <div className={classes.sectionTitle}>{t('yourCadence', language)}</div>
        <div className={classes.grid}>
          {cadenceOptions.map(option => (
            <Card
              key={option.id}
              className={cadence === option.id ? classes.cardSelected : classes.card}
              onClick={() => onSetCadence(option.id)}
            >
              <CardHeader
                image={<span className={classes.cardIcon}>{option.icon}</span>}
                header={<span className={classes.cardTitle}>{t(option.nameKey, language)}</span>}
                description={<span className={classes.cardDesc}>{t(option.descKey, language)}</span>}
              />
            </Card>
          ))}
        </div>

        <Divider className={classes.divider} />

        {/* Language Selection */}
        <div className={classes.sectionTitle}>{t('language', language)}</div>
        <div className={classes.grid}>
          {languageOptions.map(option => (
            <Card
              key={option.id}
              className={language === option.id ? classes.cardSelected : classes.card}
              onClick={() => onSetLanguage(option.id)}
            >
              <CardHeader
                image={<span className={classes.cardIcon}>{option.icon}</span>}
                header={<span className={classes.cardTitle}>{option.label}</span>}
              />
            </Card>
          ))}
        </div>

        <Button className={classes.saveButton} onClick={handleSave}>
          {t('save', language)}
        </Button>

        {showSaved && (
          <div className={classes.savedMessage}>✓ {t('saved', language)}</div>
        )}

        <Button className={classes.resetButton} appearance="subtle" onClick={handleReset}>
          {t('resetApp', language)}
        </Button>
      </div>
    </div>
  );
};
