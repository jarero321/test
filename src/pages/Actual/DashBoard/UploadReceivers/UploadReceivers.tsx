import React from 'react';
import { Header } from './components/Header';
import { UploadReceiversForm } from './components/UploadReceiversForm';

const UploadReceivers: React.FC = () => {
  return (
    <div>
      <Header />
      <UploadReceiversForm />
    </div>
  );
};

export default UploadReceivers;
