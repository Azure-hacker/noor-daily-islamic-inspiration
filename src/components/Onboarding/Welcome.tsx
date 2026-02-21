import React from 'react';
import {
  makeStyles,
  tokens,
  Title1,
  Body1,
  Button,
} from '@fluentui/react-components';
import { Language } from '../../types';
import { t } from '../../i18n';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '40px 24px',
    textAlign: 'center',
    background: `linear-gradient(180deg, #0f4c3a 0%, #1a6b4f 50%, #0f4c3a 100%)`,
  },
  bismillah: {
    fontSize: '28px',
    color: '#d4af37',
    fontFamily: '"Amiri", "Traditional Arabic", serif',
    marginBottom: '32px',
    direction: 'rtl' as const,
  },
  logo: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  title: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '8px',
  },
  appName: {
    color: '#d4af37',
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '3px',
    textTransform: 'uppercase' as const,
    marginBottom: '24px',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '400px',
    lineHeight: '1.6',
    fontSize: '16px',
    marginBottom: '48px',
  },
  button: {
    backgroundColor: '#d4af37',
    color: '#0f4c3a',
    fontWeight: 600,
    fontSize: '16px',
    padding: '12px 48px',
    borderRadius: '28px',
    border: 'none',
    minHeight: '48px',
    ':hover': {
      backgroundColor: '#c4a030',
    },
  },
  ornament: {
    color: '#d4af37',
    fontSize: '24px',
    marginTop: '48px',
    opacity: 0.6,
  },
});

interface WelcomeProps {
  language: Language;
  onStart: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ language, onStart }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.bismillah}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
      <div className={classes.logo}>☪</div>
      <Title1 className={classes.title}>{t('welcomeTitle', language)}</Title1>
      <div className={classes.appName}>{t('appName', language)}</div>
      <Body1 className={classes.subtitle}>{t('welcomeSubtitle', language)}</Body1>
      <Button
        className={classes.button}
        size="large"
        onClick={onStart}
        aria-label={t('welcomeStart', language)}
      >
        {t('welcomeStart', language)}
      </Button>
      <div className={classes.ornament}>✦ ✦ ✦</div>
    </div>
  );
};
