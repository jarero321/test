import { Typography } from '@/components';
import React from 'react';

const UserDetail: React.FC = () => {
  return (
    <div className="flex flex-col cursor-pointer ">
      <Typography className="font-semibold xl:!text-[16px]" size="xs">
        Luis Miguel Saavedra H.
      </Typography>
      <Typography
        className="underline xl:!text-[16px] !leading-[10px]"
        colors="secondary-color"
        size="xs"
      >
        luis.saavedra.kuspit.com
      </Typography>
    </div>
  );
};

export default UserDetail;
