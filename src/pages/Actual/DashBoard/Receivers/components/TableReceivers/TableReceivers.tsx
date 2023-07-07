import { Form, InputForm } from '@/components';
import React from 'react';
import { TableGridV2 } from './components/TableGridV2';

const TableReceivers: React.FC = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form onSubmit={() => null}>
        <div className="w-[220px] pb-[10px] ">
          <InputForm
            className="!pt-[10px] !pb-[10px]"
            name="search"
            placeholder="Buscar"
          />
        </div>
      </Form>
      <TableGridV2 />
    </div>
  );
};

export default TableReceivers;
