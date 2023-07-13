import React from 'react';
import LogoDyP from '@/resources/img/logo/logo.png';
import { NavOptions } from './components/NavOptions';

export type SideBarV2Props = {
  isActive?: boolean;
};

const SideBarV2: React.FC<SideBarV2Props> = () => {
  return (
    <nav className="w-full h-full min-h-screen bg-primary-color">
      <div className="bg-white w-full h-[90px] flex items-center justify-center py-[20px] px-[20px]">
        <img alt="" height={150} src={LogoDyP} width={150} />
      </div>
      <article className="w-full h-full max-h-screen bg-primary-color">
        <NavOptions />
      </article>
    </nav>
  );
};

export default SideBarV2;
