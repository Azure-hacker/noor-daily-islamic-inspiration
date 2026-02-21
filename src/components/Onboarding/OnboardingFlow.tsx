import React, { useState } from 'react';
import { Language, Pillar, Cadence } from '../../types';
import { Welcome } from './Welcome';
import { PillarSelection } from './PillarSelection';
import { CadenceSelection } from './CadenceSelection';
import { LanguageSelection } from './LanguageSelection';

interface OnboardingFlowProps {
  language: Language;
  pillar: Pillar | null;
  cadence: Cadence;
  onSetPillar: (pillar: Pillar) => void;
  onSetCadence: (cadence: Cadence) => void;
  onSetLanguage: (lang: Language) => void;
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  language,
  pillar,
  cadence,
  onSetPillar,
  onSetCadence,
  onSetLanguage,
  onComplete,
}) => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return <Welcome language={language} onStart={() => setStep(1)} />;
    case 1:
      return (
        <PillarSelection
          language={language}
          selectedPillar={pillar}
          onSelect={onSetPillar}
          onNext={() => setStep(2)}
          onBack={() => setStep(0)}
        />
      );
    case 2:
      return (
        <CadenceSelection
          language={language}
          selectedCadence={cadence}
          onSelect={onSetCadence}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      );
    case 3:
      return (
        <LanguageSelection
          language={language}
          selectedLanguage={language}
          onSelect={onSetLanguage}
          onFinish={onComplete}
          onBack={() => setStep(2)}
        />
      );
    default:
      return null;
  }
};
