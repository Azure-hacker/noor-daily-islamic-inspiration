import { useState, useEffect, useCallback } from 'react';
import { UserPreferences, DEFAULT_PREFERENCES, Pillar, Cadence, Language } from '../types';

const STORAGE_KEY = 'noor-preferences';

function loadPreferences(): UserPreferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_PREFERENCES };
}

function savePreferences(prefs: UserPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function usePreferences() {
  const [preferences, setPreferencesState] = useState<UserPreferences>(loadPreferences);

  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  const updatePreferences = useCallback((updates: Partial<UserPreferences>) => {
    setPreferencesState(prev => ({ ...prev, ...updates }));
  }, []);

  const setPillar = useCallback((pillar: Pillar) => {
    updatePreferences({ pillar });
  }, [updatePreferences]);

  const setCadence = useCallback((cadence: Cadence) => {
    updatePreferences({ cadence });
  }, [updatePreferences]);

  const setLanguage = useCallback((language: Language) => {
    updatePreferences({ language });
  }, [updatePreferences]);

  const completeOnboarding = useCallback(() => {
    updatePreferences({ onboardingComplete: true });
  }, [updatePreferences]);

  const resetAll = useCallback(() => {
    setPreferencesState({ ...DEFAULT_PREFERENCES });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const markContentViewed = useCallback((index: number) => {
    updatePreferences({
      lastContentDate: new Date().toISOString().split('T')[0],
      lastContentIndex: index,
    });
  }, [updatePreferences]);

  return {
    preferences,
    updatePreferences,
    setPillar,
    setCadence,
    setLanguage,
    completeOnboarding,
    resetAll,
    markContentViewed,
  };
}
