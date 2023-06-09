import { Typography } from '@/components';
import React from 'react';
import { Link } from 'react-router-dom';

interface StepsProps {
  active?: boolean;
  step: number;
  stepName: string;
  url?: string;
}

const Steps: React.FC<StepsProps> = ({
  active = false,
  step = 1,
  stepName = 'Datos Personales',
  url = '',
}) => {
  return (
    <Link to={url}>
      <div className="w-full flex gap-[20px] cursor-pointer items-center">
        <div
          className={`w-[25px] h-[25px] ${
            active ? 'bg-secondary-color' : 'bg-secondary-gray'
          } rounded-full flex items-center justify-center`}
        >
          <Typography className="font-bold" colors="white" size="xs">
            {step}
          </Typography>
        </div>
        <Typography
          className="xl:!text-[16px]"
          colors={active ? 'primary-color' : 'secondary-gray'}
          size="xs"
        >
          {stepName}
        </Typography>
      </div>
    </Link>
  );
};

export default Steps;
