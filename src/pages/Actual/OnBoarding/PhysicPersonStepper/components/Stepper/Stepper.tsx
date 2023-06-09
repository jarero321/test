import React from 'react';
import { Steps } from '../Steps';
import { useParams } from 'react-router-dom';

const Stepper: React.FC = () => {
  const { step } = useParams();
  return (
    <div className="mt-[20px] w-full px-[220px]">
      <div className="w-full py-[10px] px-[40px] bg-[#F0F0F5] rounded-[10px] flex items-center justify-between">
        <Steps
          active={step === 'datos-personales'}
          step={1}
          stepName="Datos personales"
          url="/onBoarding/persona-fisica/datos-personales"
        />
        <Steps
          active={step === 'domicilio'}
          step={2}
          stepName="Domicilio"
          url="/onBoarding/persona-fisica/domicilio"
        />
        <Steps
          active={step === 'perfil-transaccional'}
          step={3}
          stepName="Perfil transaccional"
          url="/onBoarding/persona-fisica/perfil-transaccional"
        />
        <Steps
          active={step === 'documentacion'}
          step={4}
          stepName="Documentación"
          url="/onBoarding/persona-fisica/documentacion"
        />
      </div>
    </div>
  );
};

export default Stepper;
