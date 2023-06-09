import { Button, Typography } from '@/components';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center my-[20px]">
      <Typography className="font-semibold" size="lg">
        Destinatarios
      </Typography>
      <div className="flex gap-[20px]">
        <Button
          text="Agregar Nuevo Destinatario"
          type="button"
          variant="secondary"
          width="w-[250px]"
        />
        <Button text="Regresar" type="button" width="w-[100px]" />
      </div>
    </div>
  );
};

export default Header;
