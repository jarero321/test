import { Button, Options } from '@/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TableReceivers } from '../../Receivers/components/TableReceivers';

function Beneficiaries() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-end items-end my-[20px]">
        <div className="flex gap-[20px]">
          <Button
            onClick={() => navigate('/dashboard/alta-nuevo-beneficiario')}
            text="Agregar Nuevo Beneficiario +"
            type="button"
            variant="secondary"
            width="w-[250px]"
          />
        </div>
      </div>
      <div>
        <TableReceivers />
      </div>
    </>
  );
}

export default Beneficiaries;
