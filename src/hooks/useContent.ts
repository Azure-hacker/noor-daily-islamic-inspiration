import { ContentItem, Pillar, Cadence } from '../types';
import { contentDatabase } from '../data/content';

/**
 * Get content items for a given pillar
 */
export function getContentForPillar(pillar: Pillar): ContentItem[] {
  return contentDatabase.filter(item => item.pillar === pillar);
}

/**
 * Determine whether new content should be shown based on cadence
 */
export function shouldShowNewContent(
  cadence: Cadence,
  lastContentDate: string | null
): boolean {
  if (!lastContentDate) return true;

  const today = new Date();
  const last = new Date(lastContentDate);
  const daysDiff = Math.floor(
    (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
  );

  switch (cadence) {
    case 'daily':
      return daysDiff >= 1;
    case 'twice_weekly':
      // Monday (1) and Thursday (4)
      if (daysDiff < 1) return false;
      return today.getDay() === 1 || today.getDay() === 4 || daysDiff >= 3;
    case 'weekly':
      return daysDiff >= 7 || (today.getDay() === 5 && daysDiff >= 1); // Friday
    default:
      return daysDiff >= 1;
  }
}

/**
 * Get today's content item based on preferences
 */
export function getTodaysContent(
  pillar: Pillar,
  cadence: Cadence,
  lastContentDate: string | null,
  lastContentIndex: number
): { content: ContentItem; index: number } {
  const pillarContent = getContentForPillar(pillar);
  if (pillarContent.length === 0) {
    return { content: contentDatabase[0], index: 0 };
  }

  const showNew = shouldShowNewContent(cadence, lastContentDate);

  if (showNew) {
    const nextIndex = (lastContentIndex + 1) % pillarContent.length;
    return { content: pillarContent[nextIndex], index: nextIndex };
  }

  // Return the same content as last time
  const currentIndex = lastContentIndex % pillarContent.length;
  return { content: pillarContent[currentIndex], index: currentIndex };
}

/**
 * Get the next content item (for manual "next" navigation)
 */
export function getNextContent(
  pillar: Pillar,
  currentIndex: number
): { content: ContentItem; index: number } {
  const pillarContent = getContentForPillar(pillar);
  const nextIndex = (currentIndex + 1) % pillarContent.length;
  return { content: pillarContent[nextIndex], index: nextIndex };
}
