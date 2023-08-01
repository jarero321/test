import { Button } from '../Button';
import React from 'react';
import Typography from '../Texts/Typography/Typography';

const ModalLogout: React.FC = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[20] flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="bg-white px-[50px] py-[50px] rounded-[8px]">
        <Typography className=" font-bold" type="headlines">
          ¿Estás seguro que deseas cerrar sesión?
        </Typography>
        <div className="w-full flex mt-[50px] gap-[30px] ">
          <Button
            height="h-[55px] w-[50%]"
            text="No, permanecer en DyP"
            type="button"
            variant="link"
          />
          <Button
            height="h-[55px] w-[50%]"
            text="Sí, salir"
            type="button"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
