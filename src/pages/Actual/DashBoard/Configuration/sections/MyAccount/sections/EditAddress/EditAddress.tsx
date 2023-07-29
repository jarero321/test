import React from 'react';
import { Form } from 'react-router-dom';
import { EditAddressForm } from './components';
import { Header } from '../../../../components/Header';

const EditAddress: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <EditAddressForm />
    </div>
  );
};

export default EditAddress;
