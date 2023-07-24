import { CartOption } from './components/CartOption';
import { Typography } from '@/components';
import Logo from '@/resources/img/logo/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const PersonalStepper: React.FC = () => {
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
          <Link
            className="w-full"
            to="/onboarding/persona-fisica/datos-personales"
          >
            <CartOption>
              <Typography size="sm">Persona Física</Typography>
            </CartOption>
          </Link>
          <Link
            className="w-full"
            to="/onboarding/persona-moral/datos-de-la-empresa"
          >
            <CartOption>
              <Typography size="sm">Persona Moral</Typography>
            </CartOption>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalStepper;
