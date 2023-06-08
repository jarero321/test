import { MoralPerson } from './components/MoralPerson';
import { PersonalStepper } from './components/PersonalStepper';
import { PyshicPerson } from './components/PyshicPerson';
import SwitchedComponent from '@/components/UI/SwitchedComponent/SwitchedComponent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OnBoarding: React.FC = () => {
  const { person } = useParams();
  const [step, setStep] = useState(person ?? 'personalStepper');

  const handleSetStep = (currentStep: string) => {
    setStep(currentStep);
  };

  useEffect(() => {
    handleSetStep(person ?? 'personalStepper');
  }, [person]);

  return (
    <div className="w-full">
      <SwitchedComponent active={step} target="id">
        <div className="w-full" id="personalStepper">
          <PersonalStepper />
        </div>
        <div className="w-full" id="physic-person">
          <PyshicPerson />
        </div>
        <div className="w-full" id="moral-person">
          <MoralPerson />
        </div>
      </SwitchedComponent>
    </div>
  );
};

export default OnBoarding;
