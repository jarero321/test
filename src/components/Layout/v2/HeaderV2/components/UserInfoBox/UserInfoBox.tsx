import { Typography } from '@/components';
import React from 'react';

export type UserInfoBoxProps = {
  name?: string;
};

const UserInfoBox: React.FC<UserInfoBoxProps> = () => {
  return (
    <div className="w-[45px] cursor-pointer h-[45px] border border-primary-color opacity-[0.7] flex justify-center items-center rounded-[8px]">
      <Typography colors="primary-color" size="lg">
        LS
      </Typography>
    </div>
  );
};

export default UserInfoBox;
