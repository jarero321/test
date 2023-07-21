import React from 'react';
import { Form } from 'react-router-dom';
import { Header } from '../../components/Header';
import { UploadBeneficiariesForm } from '../../Beneficiaries/UploadBeneficiaries/components/UploadBeneficiariesForm.tsx';
import { EditAddressForm } from './components';

const EditAddress: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <EditAddressForm />
    </div>
  );
};

export default EditAddress;
