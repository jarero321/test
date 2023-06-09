import { useParams } from 'react-router-dom';
import { OtherPersonDataForm } from '../PyshicPerson/components/Form/OtherPersonDataForm';
import { TransactionalPerfil } from '../PyshicPerson/components/Form/TransactionalPerfil';
import { AddressCompanyForm } from './components/Forms/AddressCompanyForm';
import { CompanyDataForm } from './components/Forms/CompanyDataForm';
import { LegalDataForm } from './components/Forms/LegalDataForm';
import { Layout } from '@/components';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import React, { useEffect, useState } from 'react';
import { MoralPersonStepper } from '@/pages/Actual/OnBoarding/MoralPersonStepper';

const MoralPerson: React.FC = () => {
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
      <MoralPersonStepper />
      <Layout isAContainer width="380px">
        <div className="w-full h-full flex">
          <SwitchedComponent active={steps} target="id">
            <div className="w-full" id="datos-de-la-empresa">
              <CompanyDataForm />
            </div>
            <div className="w-full" id="datos-del-representante-legal">
              <LegalDataForm />
            </div>
            <div className="w-full" id="domicilio-fiscal">
              <AddressCompanyForm />
            </div>
            <div className="w-full" id="datos-del-propietario-real">
              <OtherPersonDataForm />
            </div>
            <div className="w-full" id="perfil-transaccional">
              <TransactionalPerfil />
            </div>
          </SwitchedComponent>
        </div>
      </Layout>
    </div>
  );
};

export default MoralPerson;
