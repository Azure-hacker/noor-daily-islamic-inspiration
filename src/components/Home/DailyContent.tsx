import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Title2,
  Body1,
  Button,
  Divider,
  Badge,
} from '@fluentui/react-components';
import { ContentItem, Language, Pillar, Cadence, PILLARS } from '../../types';
import { t } from '../../i18n';
import { getTodaysContent, getNextContent } from '../../hooks/useContent';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#f5f8fc',
  },
  header: {
    background: 'linear-gradient(135deg, #1a4971 0%, #2d6da4 100%)',
    padding: '24px 24px 32px',
    color: '#ffffff',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  appTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#c9953e',
    letterSpacing: '2px',
  },
  settingsBtn: {
    color: 'rgba(255,255,255,0.8)',
    minWidth: 'auto',
    ':hover': {
      color: '#ffffff',
    },
  },
  greeting: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '4px',
  },
  todayTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#ffffff',
  },
  pillarBadge: {
    marginTop: '8px',
  },
  content: {
    padding: '24px',
    flex: 1,
  },
  arabicText: {
    fontFamily: '"Amiri", "Traditional Arabic", "Scheherazade New", serif',
    fontSize: '26px',
    lineHeight: '2',
    textAlign: 'center',
    color: '#1a4971',
    direction: 'rtl' as const,
    padding: '24px 16px',
    background: 'linear-gradient(135deg, rgba(201, 149, 62, 0.05) 0%, rgba(26, 73, 113, 0.03) 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(201, 149, 62, 0.15)',
    marginBottom: '24px',
  },
  typeBadge: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  hadithBadge: {
    backgroundColor: '#1a4971',
    color: '#ffffff',
    padding: '4px 16px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },
  ayaBadge: {
    backgroundColor: '#c9953e',
    color: '#ffffff',
    padding: '4px 16px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionLabel: {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
    color: '#c9953e',
    marginBottom: '8px',
  },
  translationText: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: '#2c2c2c',
    fontStyle: 'italic',
  },
  referenceText: {
    fontSize: '14px',
    color: '#888',
    textAlign: 'center',
    marginBottom: '24px',
  },
  explanationText: {
    fontSize: '15px',
    lineHeight: '1.8',
    color: '#444',
  },
  divider: {
    margin: '20px 0',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    padding: '24px',
    paddingBottom: '40px',
  },
  shareButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#1a4971' as unknown as undefined,
    color: '#1a4971',
    borderRadius: '24px',
    padding: '10px 24px',
    fontWeight: 600,
  },
  nextButton: {
    backgroundColor: '#1a4971',
    color: '#ffffff',
    borderRadius: '24px',
    padding: '10px 24px',
    fontWeight: 600,
    border: 'none',
    ':hover': {
      backgroundColor: '#2d6da4',
    },
  },
  ornament: {
    textAlign: 'center',
    color: '#c9953e',
    fontSize: '18px',
    opacity: 0.5,
    margin: '8px 0',
  },
});

interface DailyContentProps {
  language: Language;
  pillar: Pillar;
  cadence: Cadence;
  lastContentDate: string | null;
  lastContentIndex: number;
  onMarkViewed: (index: number) => void;
  onOpenSettings: () => void;
}

export const DailyContent: React.FC<DailyContentProps> = ({
  language,
  pillar,
  cadence,
  lastContentDate,
  lastContentIndex,
  onMarkViewed,
  onOpenSettings,
}) => {
  const classes = useStyles();
  const isRtl = language === 'ar';

  const [currentContent, setCurrentContent] = useState<ContentItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(lastContentIndex);

  useEffect(() => {
    const { content, index } = getTodaysContent(pillar, cadence, lastContentDate, lastContentIndex);
    setCurrentContent(content);
    setCurrentIndex(index);
    onMarkViewed(index);
  }, [pillar]);

  const handleNext = () => {
    const { content, index } = getNextContent(pillar, currentIndex);
    setCurrentContent(content);
    setCurrentIndex(index);
    onMarkViewed(index);
  };

  const handleShare = async () => {
    if (!currentContent) return;
    const text = `${currentContent.arabic}\n\n${currentContent.translation[language]}\n\n— ${currentContent.reference[language]}\n\nShared via Noor App`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        // User cancelled or not supported
      }
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const pillarInfo = PILLARS.find(p => p.id === pillar);

  if (!currentContent) return null;

  const isAya = currentContent.type === 'aya';

  return (
    <div className={classes.container} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className={classes.header}>
        <div className={classes.headerTop}>
          <span className={classes.appTitle}>{t('appName', language)}</span>
          <Button
            className={classes.settingsBtn}
            appearance="subtle"
            onClick={onOpenSettings}
            aria-label={t('settings', language)}
          >
            ⚙
          </Button>
        </div>
        <div className={classes.greeting}>
          {isRtl ? 'بسم الله الرحمن الرحيم' : 'Bismillah ir-Rahman ir-Rahim'}
        </div>
        <div className={classes.todayTitle}>{t('todaysInspiration', language)}</div>
        {pillarInfo && (
          <div className={classes.pillarBadge}>
            <Badge appearance="outline" color="subtle" style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.3)' }}>
              {pillarInfo.icon} {pillarInfo.name[language]}
            </Badge>
          </div>
        )}
      </div>

      <div className={classes.content}>
        <div className={classes.typeBadge}>
          <span className={isAya ? classes.ayaBadge : classes.hadithBadge}>
            {isAya ? t('aya', language) : t('hadith', language)}
          </span>
        </div>

        <div className={classes.arabicText} lang="ar">
          {currentContent.arabic}
        </div>

        <div className={classes.referenceText}>
          {currentContent.reference[language]}
        </div>

        <div className={classes.ornament}>❊</div>

        <div className={classes.section}>
          <div className={classes.sectionLabel}>
            {t('reference', language)}
          </div>
          <div className={classes.translationText}>
            "{currentContent.translation[language]}"
          </div>
        </div>

        <Divider className={classes.divider} />

        <div className={classes.section}>
          <div className={classes.sectionLabel}>
            {isAya ? t('tafsir', language) : t('context', language)}
          </div>
          <div className={classes.explanationText}>
            {currentContent.explanation[language]}
          </div>
        </div>
      </div>

      <div className={classes.actions}>
        <Button
          className={classes.shareButton}
          appearance="outline"
          onClick={handleShare}
        >
          {t('shareContent', language)}
        </Button>
        <Button className={classes.nextButton} onClick={handleNext}>
          {t('nextContent', language)}
        </Button>
      </div>
    </div>
  );
};
