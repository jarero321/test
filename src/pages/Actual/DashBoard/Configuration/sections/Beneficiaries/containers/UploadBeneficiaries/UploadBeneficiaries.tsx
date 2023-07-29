import React from 'react';
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
