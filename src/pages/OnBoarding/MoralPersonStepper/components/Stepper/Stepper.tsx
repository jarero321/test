import React from 'react';
import { Steps } from '../Steps';
import { useParams } from 'react-router-dom';

const Stepper: React.FC = () => {
  const { step } = useParams();
  return (
    <div className="mt-[20px] w-full px-[220px]">
      <div className="w-full py-[10px] px-[40px] bg-[#F0F0F5] rounded-[10px] flex items-center justify-between">
        <Steps
          active={step === 'datos-de-la-empresa'}
          step={1}
          stepName="Datos de la Empresa"
          url="/onBoarding/persona-moral/datos-de-la-empresa"
        />
        <Steps
          active={step === 'domicilio-fiscal'}
          step={2}
          stepName="Domicilio Fiscal"
          url="/onBoarding/persona-moral/domicilio-fiscal"
        />
        <Steps
          active={step === 'datos-del-representante-legal'}
          step={3}
          stepName="Datos del Representante Legal"
          url="/onBoarding/persona-moral/datos-del-representante-legal"
        />
        <Steps
          active={step === 'perfil-transaccional'}
          step={4}
          stepName="Perfil Transaccional"
          url="/onBoarding/persona-moral/perfil-transaccional"
        />
        <Steps
          active={step === 'documentacion'}
          step={5}
          stepName="Documentación"
          url="/onBoarding/persona-moral/documentacion"
        />
        <Steps
          active={step === 'datos-del-propietario-real'}
          step={6}
          stepName="Datos del Propietario Real"
          url="/onBoarding/persona-moral/datos-del-propietario-real"
        />
      </div>
    </div>
  );
};

export default Stepper;
