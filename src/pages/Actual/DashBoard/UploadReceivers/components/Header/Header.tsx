import { Button, Typography } from '@/components';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center my-[20px]">
      <Typography className="xl:!text-[20px] font-semibold" size="lg">
        Alta Nuevo Destinatario
      </Typography>
      <div className="flex gap-[20px]">
        <Button text="Regresar" type="button" width="!w-[100px]" />
      </div>
    </div>
  );
};

export default Header;
