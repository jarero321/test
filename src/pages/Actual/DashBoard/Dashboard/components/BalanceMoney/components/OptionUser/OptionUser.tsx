import { Typography } from '@/components';
import React from 'react';

export type OptionUserProps = {
  text?: string;
  amount?: string;
  color?: string;
};

const OptionUser: React.FC<OptionUserProps> = () => {
  return (
    <div className="w-full h-full flex flex-col px-[10px] py-[10px] border">
      <div className="w-full flex items-center gap-[20px]">
        <div className="w-[20px] h-[20px] rounded-full bg-secondary" />
        <Typography
          className="xl:!text-[16px]"
          colors="primary-color"
          size="xs"
        >
          Dépositos
        </Typography>
      </div>
      <Typography
        className="w-full flex justify-end"
        colors="secondary-gray"
        size="sm"
      >
        $743,000.00
      </Typography>
    </div>
  );
};

export default OptionUser;
