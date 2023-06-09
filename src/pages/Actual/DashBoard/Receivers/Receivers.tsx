import React from 'react';
import { Header } from './components/Header';
import { TableReceivers } from './components/TableReceivers';

const Receivers: React.FC = () => {
  return (
    <div className="px-[40px]">
      <Header />
      <TableReceivers />
    </div>
  );
};

export default Receivers;
