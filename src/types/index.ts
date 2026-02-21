export type Pillar =
  | 'faith_spirituality'
  | 'islamic_finance'
  | 'family_relationships'
  | 'daily_empowerment'
  | 'social_justice';

export type Cadence = 'daily' | 'twice_weekly' | 'weekly';

export type Language = 'en' | 'ar' | 'fr';

export type ContentType = 'hadith' | 'aya';

export interface ContentItem {
  id: string;
  type: ContentType;
  pillar: Pillar;
  arabic: string;
  reference: {
    en: string;
    ar: string;
    fr: string;
  };
  translation: {
    en: string;
    ar: string;
    fr: string;
  };
  explanation: {
    en: string;
    ar: string;
    fr: string;
  };
}

export interface UserPreferences {
  pillar: Pillar | null;
  cadence: Cadence;
  language: Language;
  onboardingComplete: boolean;
  lastContentDate: string | null;
  lastContentIndex: number;
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  pillar: null,
  cadence: 'daily',
  language: 'en',
  onboardingComplete: false,
  lastContentDate: null,
  lastContentIndex: 0,
};

export interface PillarInfo {
  id: Pillar;
  icon: string;
  name: { en: string; ar: string; fr: string };
  description: { en: string; ar: string; fr: string };
}

export const PILLARS: PillarInfo[] = [
  {
    id: 'faith_spirituality',
    icon: '🕌',
    name: {
      en: 'Faith & Spirituality',
      ar: 'الإيمان والروحانية',
      fr: 'Foi & Spiritualité',
    },
    description: {
      en: 'Strengthen your connection with Allah through worship, prayer, and inner peace',
      ar: 'عزّز علاقتك بالله من خلال العبادة والصلاة والسكينة الداخلية',
      fr: 'Renforcez votre lien avec Allah à travers l\'adoration, la prière et la paix intérieure',
    },
  },
  {
    id: 'islamic_finance',
    icon: '⚖️',
    name: {
      en: 'Islamic Finance & Ethics',
      ar: 'المالية الإسلامية والأخلاق',
      fr: 'Finance Islamique & Éthique',
    },
    description: {
      en: 'Learn about halal earnings, charity, honest trade, and ethical financial dealings',
      ar: 'تعلّم عن الكسب الحلال والصدقة والتجارة الأمينة والمعاملات المالية الأخلاقية',
      fr: 'Découvrez les revenus halal, la charité, le commerce honnête et les transactions financières éthiques',
    },
  },
  {
    id: 'family_relationships',
    icon: '👨‍👩‍👧‍👦',
    name: {
      en: 'Family & Relationships',
      ar: 'الأسرة والعلاقات',
      fr: 'Famille & Relations',
    },
    description: {
      en: 'Guidance on marriage, parenthood, kinship ties, and building strong family bonds',
      ar: 'إرشادات حول الزواج والأبوة وصلة الرحم وبناء روابط أسرية قوية',
      fr: 'Conseils sur le mariage, la parentalité, les liens de parenté et la construction de liens familiaux solides',
    },
  },
  {
    id: 'daily_empowerment',
    icon: '💪',
    name: {
      en: 'Daily Empowerment',
      ar: 'التمكين اليومي',
      fr: 'Autonomisation Quotidienne',
    },
    description: {
      en: 'Motivation, patience, gratitude, and personal growth from an Islamic perspective',
      ar: 'التحفيز والصبر والامتنان والنمو الشخصي من منظور إسلامي',
      fr: 'Motivation, patience, gratitude et croissance personnelle d\'une perspective islamique',
    },
  },
  {
    id: 'social_justice',
    icon: '🤝',
    name: {
      en: 'Social Justice & Community',
      ar: 'العدالة الاجتماعية والمجتمع',
      fr: 'Justice Sociale & Communauté',
    },
    description: {
      en: 'Rights of others, community service, justice, compassion, and neighborly conduct',
      ar: 'حقوق الآخرين وخدمة المجتمع والعدل والرحمة وحسن الجوار',
      fr: 'Droits d\'autrui, service communautaire, justice, compassion et bon voisinage',
    },
  },
];
