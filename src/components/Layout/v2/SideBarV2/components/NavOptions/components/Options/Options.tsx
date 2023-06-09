import { Typography } from '@/components';
import React from 'react';

export type OptionsProps = {
  text?: string;
  img?: string;
};

const Options: React.FC<OptionsProps> = ({ text, img }) => {
  return (
    <div className="cursor-pointer w-full flex items-center gap-[10px] ">
      <img height={40} src={img} width={40} />
      <Typography className="xl:!text-[12px]" colors="white" size="xs">
        {text}
      </Typography>
    </div>
  );
};

export default Options;
