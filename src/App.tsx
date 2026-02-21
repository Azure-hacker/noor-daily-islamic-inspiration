import React, { useState } from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { usePreferences } from './hooks/usePreferences';
import { OnboardingFlow } from './components/Onboarding/OnboardingFlow';
import { DailyContent } from './components/Home/DailyContent';
import { Settings } from './components/Settings/Settings';

type Screen = 'home' | 'settings';

const App: React.FC = () => {
  const {
    preferences,
    setPillar,
    setCadence,
    setLanguage,
    completeOnboarding,
    resetAll,
    markContentViewed,
  } = usePreferences();

  const [screen, setScreen] = useState<Screen>('home');

  // Show onboarding if not complete
  if (!preferences.onboardingComplete) {
    return (
      <FluentProvider theme={webLightTheme}>
        <OnboardingFlow
          language={preferences.language}
          pillar={preferences.pillar}
          cadence={preferences.cadence}
          onSetPillar={setPillar}
          onSetCadence={setCadence}
          onSetLanguage={setLanguage}
          onComplete={completeOnboarding}
        />
      </FluentProvider>
    );
  }

  // Main app
  return (
    <FluentProvider theme={webLightTheme}>
      {screen === 'settings' ? (
        <Settings
          language={preferences.language}
          pillar={preferences.pillar!}
          cadence={preferences.cadence}
          onSetPillar={setPillar}
          onSetCadence={setCadence}
          onSetLanguage={setLanguage}
          onBack={() => setScreen('home')}
          onReset={resetAll}
        />
      ) : (
        <DailyContent
          language={preferences.language}
          pillar={preferences.pillar!}
          cadence={preferences.cadence}
          lastContentDate={preferences.lastContentDate}
          lastContentIndex={preferences.lastContentIndex}
          onMarkViewed={markContentViewed}
          onOpenSettings={() => setScreen('settings')}
        />
      )}
    </FluentProvider>
  );
};

export default App;
