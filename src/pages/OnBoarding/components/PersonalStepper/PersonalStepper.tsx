import { CartOption } from './components/CartOption';
import { Typography } from '@/components';
import Logo from '@/resources/img/logo/logo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalStepper: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col bg-primary-color justify-center items-center">
      <div className="py-[48px] px-[48px] bg-white border rounded-[20px] border-[2px] min-h-[500px] min-w-[1000px] text-left mt-[54px] flex flex-col items-center">
        <img height={250} src={Logo} width={250} />
        <Typography
          className=" text-center mt-[20px]"
          colors="primary-color"
          size="base"
        >
          Antes de empezar
        </Typography>
        <div>
          <Typography className="mt-[24px] text-center" size="lg">
            ¿Cómo estás registrado ante el SAT?
          </Typography>
        </div>
        <div className="w-full flex mt-[50px] gap-[20px]">
          <div className="w-full" onClick={() => navigate('physic-person')}>
            <CartOption>
              <Typography size="sm">Persona Física</Typography>
            </CartOption>
          </div>
          <div className="w-full" onClick={() => navigate('moral-person')}>
            <CartOption>
              <Typography size="sm">Persona Moral</Typography>
            </CartOption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStepper;
