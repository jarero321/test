import React from 'react';
import LogoDyP from '@/resources/img/logo/logo.png';
import Title from './components/Title/Title';
import { Stepper } from './components/Stepper';
const MoralPersonStepper: React.FC = () => {
  return (
    <div className="w-full flex h-[250px] bg-white flex-col items-center justify-center py-[40px] z-[1000] shadow shadow-2xl">
      <div>
        <img alt="" height={180} src={LogoDyP} width={180} />
      </div>
      <Title />
      <Stepper />
    </div>
  );
};

export default MoralPersonStepper;
