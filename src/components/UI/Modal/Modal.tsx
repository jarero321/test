import { Button } from '../Button';
import React from 'react';
import Typography from '../Texts/Typography/Typography';

const Modal: React.FC = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[20] flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="bg-white px-[50px] py-[50px] rounded-[8px]">
        <Typography className=" font-bold" type="headlines">
          Estamos revisando tu documentación
        </Typography>
        <Typography className="pt-[30px] text-center" size="lg">
          Pronto te daremos respuesta
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

export default Modal;
