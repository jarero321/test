import React from 'react';
import { Header } from './components/Header';
import { TableReceivers } from './components/TableReceivers';

const Receivers: React.FC = () => {
  return (
    <section>
      <Header />
      <TableReceivers />
    </section>
  );
};

export default Receivers;
