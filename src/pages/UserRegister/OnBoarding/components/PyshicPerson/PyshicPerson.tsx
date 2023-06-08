import { useParams } from 'react-router-dom';
import AddressForm from './components/Form/AdressForm/AdressForm';
import { OtherPersonDataForm } from './components/Form/OtherPersonDataForm';
import PersonalDataForm from './components/Form/PersonalDataForm/PersonalDataForm';
import { TransactionalPerfil } from './components/Form/TransactionalPerfil';
import { Layout } from '@/components';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import React, { useEffect, useState } from 'react';
import { PhysicPersonStepper } from '@/pages/OnBoarding/PhysicPersonStepper';

const PyshicPerson: React.FC = () => {
  const { step } = useParams();
  const [steps, setStep] = useState(step ?? 'personalStepper');

  const handleSetStep = (currentStep: string) => {
    setStep(currentStep);
  };

  useEffect(() => {
    handleSetStep(step ?? 'personalStepper');
  }, [step]);
  return (
    <div className="w-full bg-primary-gray">
      <PhysicPersonStepper />
      <Layout isAContainer width="380px">
        <div className="w-full h-full flex">
          <SwitchedComponent active={steps as string} target="id">
            <div className="w-full" id="datos-personales">
              <PersonalDataForm />
            </div>
            <div className="w-full" id="domicilio">
              <AddressForm />
            </div>
            <div className="w-full" id="perfil-transaccional">
              <TransactionalPerfil />
            </div>
            <div className="w-full" id="documentacion">
              <OtherPersonDataForm />
            </div>
          </SwitchedComponent>
        </div>
      </Layout>
    </div>
  );
};

export default PyshicPerson;
