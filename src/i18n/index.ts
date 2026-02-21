import { Language } from '../types';

type TranslationKeys = {
  // App
  appName: string;
  appTagline: string;

  // Onboarding
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeStart: string;
  selectPillar: string;
  selectPillarDesc: string;
  selectCadence: string;
  selectCadenceDesc: string;
  cadenceDaily: string;
  cadenceDailyDesc: string;
  cadenceTwiceWeekly: string;
  cadenceTwiceWeeklyDesc: string;
  cadenceWeekly: string;
  cadenceWeeklyDesc: string;
  next: string;
  back: string;
  getStarted: string;
  setupComplete: string;
  setupCompleteDesc: string;

  // Home
  todaysInspiration: string;
  hadith: string;
  aya: string;
  reference: string;
  explanation: string;
  tafsir: string;
  context: string;
  shareContent: string;
  nextContent: string;
  noContentYet: string;

  // Settings
  settings: string;
  yourPillar: string;
  yourCadence: string;
  language: string;
  save: string;
  saved: string;
  resetApp: string;
  resetConfirm: string;

  // General
  loading: string;
};

const en: TranslationKeys = {
  appName: 'Noor',
  appTagline: 'Daily Islamic Inspiration',

  welcomeTitle: 'Assalamu Alaikum',
  welcomeSubtitle: 'Receive daily wisdom from the Qur\'an and Hadith, tailored to what matters most to you.',
  welcomeStart: 'Get Started',
  selectPillar: 'Choose Your Path',
  selectPillarDesc: 'Select the area you\'d like to grow in. You can change this anytime.',
  selectCadence: 'Set Your Rhythm',
  selectCadenceDesc: 'How often would you like to receive new content?',
  cadenceDaily: 'Daily',
  cadenceDailyDesc: 'New inspiration every day',
  cadenceTwiceWeekly: 'Twice a Week',
  cadenceTwiceWeeklyDesc: 'New content on Mondays & Thursdays',
  cadenceWeekly: 'Weekly',
  cadenceWeeklyDesc: 'New content every Friday',
  next: 'Next',
  back: 'Back',
  getStarted: 'Begin My Journey',
  setupComplete: 'You\'re All Set!',
  setupCompleteDesc: 'Your personalized Islamic inspiration awaits.',

  todaysInspiration: 'Today\'s Inspiration',
  hadith: 'Hadith',
  aya: 'Qur\'anic Verse',
  reference: 'Reference',
  explanation: 'Explanation',
  tafsir: 'Tafsir',
  context: 'Context',
  shareContent: 'Share',
  nextContent: 'Next Inspiration',
  noContentYet: 'Your next inspiration is coming soon...',

  settings: 'Settings',
  yourPillar: 'Your Pillar',
  yourCadence: 'Frequency',
  language: 'Language',
  save: 'Save Changes',
  saved: 'Saved!',
  resetApp: 'Reset App',
  resetConfirm: 'This will reset all your preferences. Are you sure?',

  loading: 'Loading...',
};

const ar: TranslationKeys = {
  appName: 'نور',
  appTagline: 'إلهام إسلامي يومي',

  welcomeTitle: 'السلام عليكم',
  welcomeSubtitle: 'استقبل حكمة يومية من القرآن الكريم والحديث الشريف، مصممة حسب اهتماماتك.',
  welcomeStart: 'ابدأ الآن',
  selectPillar: 'اختر مسارك',
  selectPillarDesc: 'اختر المجال الذي تريد التعمق فيه. يمكنك تغييره في أي وقت.',
  selectCadence: 'حدد إيقاعك',
  selectCadenceDesc: 'كم مرة تريد تلقي محتوى جديد؟',
  cadenceDaily: 'يومياً',
  cadenceDailyDesc: 'إلهام جديد كل يوم',
  cadenceTwiceWeekly: 'مرتين في الأسبوع',
  cadenceTwiceWeeklyDesc: 'محتوى جديد أيام الاثنين والخميس',
  cadenceWeekly: 'أسبوعياً',
  cadenceWeeklyDesc: 'محتوى جديد كل يوم جمعة',
  next: 'التالي',
  back: 'رجوع',
  getStarted: 'ابدأ رحلتي',
  setupComplete: 'أنت مستعد!',
  setupCompleteDesc: 'إلهامك الإسلامي المخصص في انتظارك.',

  todaysInspiration: 'إلهام اليوم',
  hadith: 'حديث',
  aya: 'آية قرآنية',
  reference: 'المرجع',
  explanation: 'الشرح',
  tafsir: 'التفسير',
  context: 'السياق',
  shareContent: 'مشاركة',
  nextContent: 'الإلهام التالي',
  noContentYet: 'إلهامك القادم قريباً...',

  settings: 'الإعدادات',
  yourPillar: 'مسارك',
  yourCadence: 'التكرار',
  language: 'اللغة',
  save: 'حفظ التغييرات',
  saved: 'تم الحفظ!',
  resetApp: 'إعادة تعيين التطبيق',
  resetConfirm: 'سيتم إعادة تعيين جميع تفضيلاتك. هل أنت متأكد؟',

  loading: 'جاري التحميل...',
};

const fr: TranslationKeys = {
  appName: 'Noor',
  appTagline: 'Inspiration Islamique Quotidienne',

  welcomeTitle: 'Assalamu Alaikum',
  welcomeSubtitle: 'Recevez une sagesse quotidienne du Coran et des Hadiths, adaptée à ce qui compte le plus pour vous.',
  welcomeStart: 'Commencer',
  selectPillar: 'Choisissez Votre Voie',
  selectPillarDesc: 'Sélectionnez le domaine dans lequel vous souhaitez progresser. Vous pouvez le changer à tout moment.',
  selectCadence: 'Définissez Votre Rythme',
  selectCadenceDesc: 'À quelle fréquence souhaitez-vous recevoir du nouveau contenu ?',
  cadenceDaily: 'Quotidien',
  cadenceDailyDesc: 'Nouvelle inspiration chaque jour',
  cadenceTwiceWeekly: 'Deux fois par semaine',
  cadenceTwiceWeeklyDesc: 'Nouveau contenu les lundis et jeudis',
  cadenceWeekly: 'Hebdomadaire',
  cadenceWeeklyDesc: 'Nouveau contenu chaque vendredi',
  next: 'Suivant',
  back: 'Retour',
  getStarted: 'Commencer Mon Voyage',
  setupComplete: 'Vous Êtes Prêt !',
  setupCompleteDesc: 'Votre inspiration islamique personnalisée vous attend.',

  todaysInspiration: 'Inspiration du Jour',
  hadith: 'Hadith',
  aya: 'Verset Coranique',
  reference: 'Référence',
  explanation: 'Explication',
  tafsir: 'Tafsir',
  context: 'Contexte',
  shareContent: 'Partager',
  nextContent: 'Prochaine Inspiration',
  noContentYet: 'Votre prochaine inspiration arrive bientôt...',

  settings: 'Paramètres',
  yourPillar: 'Votre Pilier',
  yourCadence: 'Fréquence',
  language: 'Langue',
  save: 'Enregistrer',
  saved: 'Enregistré !',
  resetApp: 'Réinitialiser',
  resetConfirm: 'Toutes vos préférences seront réinitialisées. Êtes-vous sûr ?',

  loading: 'Chargement...',
};

const translations: Record<Language, TranslationKeys> = { en, ar, fr };

export function t(key: keyof TranslationKeys, lang: Language): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export type { TranslationKeys };
