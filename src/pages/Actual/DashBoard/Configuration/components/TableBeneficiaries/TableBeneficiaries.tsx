import { Form, InputForm } from '@/components';
import React from 'react';
import { TableGrid } from './components/TableGrid';

const TableBeneficiaries: React.FC = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <TableGrid />
    </div>
  );
};

export default TableBeneficiaries;
