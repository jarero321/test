import { Button } from '../Button';
import React from 'react';
import Typography from '../Texts/Typography/Typography';

const ModalError: React.FC = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[20] flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="bg-white px-[50px] py-[50px] rounded-[8px]">
        <Typography className=" font-bold text-center" type="headlines">
          Hubo un problema
        </Typography>
        <Typography className="pt-[30px] text-center" size="lg">
          El depósito no se pudo realizar debido a fondos insuficientes
        </Typography>
        <div className="flex mt-[30px] gap-[40px]">
          <Button
            height="h-[55px]"
            text="Aceptar"
            type="button"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalError;
