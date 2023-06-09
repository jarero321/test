import { Typography } from '@/components';
import React from 'react';

export type UserInfoBoxProps = {
  name?: string;
};

const UserInfoBox: React.FC<UserInfoBoxProps> = () => {
  return (
    <div className="w-[50px] h-[50px] border border-primary-color opacity-[0.7] flex justify-center items-center rounded-[8px]">
      <Typography size="lg">LS</Typography>
    </div>
  );
};

export default UserInfoBox;
