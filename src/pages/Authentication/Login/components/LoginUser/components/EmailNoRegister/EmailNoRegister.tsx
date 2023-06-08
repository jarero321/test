import { Typography } from '@/components';
import React from 'react';
import { Link } from 'react-router-dom';

const EmailNoRegister: React.FC = () => {
  return (
    <div className=" w-full justify-between flex mt-[10px]">
      <Typography className="xl:!text-[14px] " size="xs">
        Este correo no esta registrado.
      </Typography>
      <Link to="/register">
        <Typography className="xl:!text-[14px] " colors="secondary" size="xs">
          ¿Quieres registrarte?
        </Typography>
      </Link>
    </div>
  );
};

export default EmailNoRegister;
