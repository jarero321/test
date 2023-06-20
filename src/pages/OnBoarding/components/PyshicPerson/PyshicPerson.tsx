import PhysicPersonSideBar from '../SideBar/PhysicPerson/PysicPersonSideBar';
import AddressForm from './components/Form/AdressForm/AdressForm';
import { OtherPersonDataForm } from './components/Form/OtherPersonDataForm';
import PersonalDataForm from './components/Form/PersonalDataForm/PersonalDataForm';
import { TransactionalPerfil } from './components/Form/TransactionalPerfil';
import { Layout } from '@/components';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import React from 'react';

const PyshicPerson: React.FC = () => {
  return (
    <Layout
      isAContainer
      sideBar={<PhysicPersonSideBar display titleSideBar="Persona Física" />}
      width="380px"
    >
      <div className="w-full h-full flex">
        <SwitchedComponent active="transactionalPerfil" target="id">
          <div className="w-full" id="personalData">
            <PersonalDataForm />
          </div>
          <div className="w-full" id="address">
            <AddressForm />
          </div>
          <div className="w-full" id="otherPersonalData">
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

export default PyshicPerson;
