import React from 'react';
import { Header } from './components/Header';
import { UploadReceiversForm } from './components/UploadReceiversForm';

const UploadReceivers: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <UploadReceiversForm />
    </div>
  );
};

export default UploadReceivers;
