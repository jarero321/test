import React from 'react';
import { UserInfoBox } from './components/UserInfoBox';
import { UserDetail } from './components/UserDetail';

const HeaderV2: React.FC = () => {
  return (
    <div className="w-full gap-[15px] h-[90px] py-[20px] px-[15px] bg-[#FFFFFF] shadow-lg flex justify-end">
      <UserInfoBox />
      <UserDetail />
    </div>
  );
};

export default HeaderV2;
