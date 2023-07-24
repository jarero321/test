import { MoralPerson } from './components/MoralPerson';

import { PyshicPerson } from './components/PyshicPerson';
import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import useStep from '@/hooks/useStep';
import { PersonalStepper } from '@/pages/Actual/OnBoarding/PersonalStepper';
import React from 'react';

const OnBoarding: React.FC = () => {
  const { step } = useStep('person');
  return (
    <div className="w-full">
      <SwitchedComponent active={step ?? ''} target="id">
        <div className="w-full" id="seleccion-tipo-de-persona">
          <PersonalStepper />
        </div>
        <div className="w-full" id="persona-fisica">
          <PyshicPerson />
        </div>
        <div className="w-full" id="persona-moral">
          <MoralPerson />
        </div>
      </SwitchedComponent>
    </div>
  );
};

export default OnBoarding;
