import React from 'react';
import { MovementsTable } from './MovementsTable';
import { Typography } from '@/components';

const Movements: React.FC = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Typography className="font-semibold mb-[20px]" size="lg">
        Movimientos
      </Typography>
      <MovementsTable />
    </div>
  );
};

export default Movements;
