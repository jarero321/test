import React from 'react';
import { BalanceMoney } from './components/BalanceMoney';
import { Movements } from './components/Movements';
import { Typography } from '@/components';
import { ModalContainer } from '@/components/UI/Modal/ModalContainer';

const Home: React.FC = () => {
  return (
    <>
      <Typography className="px-[20px] xl:!text-[20px] font-semibold mt-[20px]">
        Inicio
      </Typography>
      <div className="flex w-full px-[20px] gap-[20px] py-[20px] ">
        <div className="w-full h-full flex flex-col gap-[20px]">
          <BalanceMoney />
          <Movements />
        </div>
      </div>
      <ModalContainer title="hare aguachhile" />
    </>
  );
};

export default Home;
