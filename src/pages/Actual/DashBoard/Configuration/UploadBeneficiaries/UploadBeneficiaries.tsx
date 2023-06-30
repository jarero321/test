import React from 'react';
import { UploadReceiversForm } from '../../UploadReceivers/components/UploadReceiversForm';
import { Header } from './components/Header';
import { UploadBeneficiariesForm } from './components/UploadBeneficiariesForm.tsx';

const UploadBeneficiaries: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <UploadBeneficiariesForm />
    </div>
  );
};

export default UploadBeneficiaries;
