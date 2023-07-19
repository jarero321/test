import { Typography } from '@/components';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export type OptionsProps = {
  text?: string;
  children?: JSX.Element;
  href?: string;
};

const Options: React.FC<OptionsProps> = ({
  text,
  children,
  href = '/dashboard/inicio',
}) => {
  const router = useLocation();

  const isActive = href === router.pathname;
  return (
    <Link to={href}>
      <div className="cursor-pointer items-center w-full flex gap-[20px]">
        {children}
        <Typography
          className="xl:!text-[12px] 2xl:!text-[16px] "
          colors={isActive ? 'secondary' : 'white'}
          size="sm"
        >
          {text}
        </Typography>
      </div>
    </Link>
  );
};

export default Options;
