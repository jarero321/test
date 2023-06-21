import { Typography } from '@/components';
import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="flex gap-[10px] mt-[20px]">
      <Typography className="font-semibold" size="lg">
        Apertura de Cuenta
      </Typography>
      <Typography size="lg">|</Typography>
      <Typography className="font-semibold" colors="secondary-color" size="lg">
        Persona Moral
      </Typography>
    </div>
  );
};

export default Title;
