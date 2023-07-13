import { Button, Typography } from '@/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center my-[20px]">
      <Typography className="font-semibold" size="lg">
        Destinatarios
      </Typography>
      <div className="flex gap-[20px]">
        <Button
          className="px-[5px]"
          onClick={() => navigate('/dashboard/alta-nuevo-destinatario')}
          text="Agregar Nuevo Destinatario +"
          type="button"
          variant="secondary"
          width="w-[270px]"
        />
        <Button text="Regresar" type="button" width="w-[100px]" />
      </div>
    </div>
  );
};

export default Header;
