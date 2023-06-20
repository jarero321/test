import { Button, Typography } from '@/components';
import React from 'react';

const UserNotRegister: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-white justify-center items-center">
      <div className="py-[48px] px-[48px] bg-[#fafafa] border rounded-[20px] border-[2px] min-h-[300px] max-w-[500px] text-left mt-[54px] flex flex-col items-center">
        <Typography className=" text-center" colors="primary-color" size="base">
          Oppps...
        </Typography>
        <div>
          <Typography className="mt-[32px] text-center" size="lg">
            No puedes utilizar nuestra plataforma si no cuentas con tu RFC ante
            el SAT.
          </Typography>
        </div>
        <div className="w-full pt-[24px]">
          <Button text="Ir a Landing Page" type="button" width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default UserNotRegister;
