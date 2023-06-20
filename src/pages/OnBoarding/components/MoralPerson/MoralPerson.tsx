import { OtherPersonDataForm } from '../PyshicPerson/components/Form/OtherPersonDataForm';
import { TransactionalPerfil } from '../PyshicPerson/components/Form/TransactionalPerfil';
import MoralPersonSideBar from '../SideBar/MoralPerson/MoralPersonSideBar';
import { AddressCompanyForm } from './components/Forms/AddressCompanyForm';
import { CompanyDataForm } from './components/Forms/CompanyDataForm';
import { ConstitutiveForm } from './components/Forms/ConstitutiveForm';
import { LegalDataForm } from './components/Forms/LegalDataForm';
import { Layout } from '@/components';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import React from 'react';

const MoralPerson: React.FC = () => {
  return (
    <Layout
      isAContainer
      sideBar={<MoralPersonSideBar display titleSideBar="Persona moral" />}
      width="380px"
    >
      <div className="w-full h-full flex">
        <SwitchedComponent active="legalData" target="id">
          <div className="w-full" id="companyDataForm">
            <CompanyDataForm />
          </div>
          <div className="w-full" id="constitutiveData">
            <ConstitutiveForm />
          </div>
          <div className="w-full" id="legalData">
            <LegalDataForm />
          </div>
          <div className="w-full" id="addressData">
            <AddressCompanyForm />
          </div>
          <div className="w-full" id="otherData">
            <OtherPersonDataForm />
          </div>
          <div className="w-full" id="transactionalPerfil">
            <TransactionalPerfil />
          </div>
        </SwitchedComponent>
      </div>
    </Layout>
  );
};

export default MoralPerson;
