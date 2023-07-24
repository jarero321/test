import BannerAuth from '../components/BannerAuth/BannerAuth';
import { LayoutAuth } from '../components/LayoutAuth';
import { Active2FA } from './components/Active2FA';
import { DefinePassword } from './components/DefinePassword';
import { SetPassword } from './components/SetPassword';
import SwitchedComponent from '@/components/UI/SwitchedComponent';
import React, { useState } from 'react';

const Temporally: React.FC = () => {
  const [active, setActive] = useState('setPassword');
  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <SwitchedComponent active={active} target="id">
        <div
          className="h-full w-full max-h-screen justify-center flex flex-col gap-[14px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[500px]"
          id="setPassword"
        >
          <SetPassword setStep={() => setActive('newPassword')} />
        </div>
        <div id="newPassword">
          <DefinePassword setStep={() => setActive('active2FA')} />
        </div>
        <div id="active2FA">
          <Active2FA />
        </div>
      </SwitchedComponent>
    </LayoutAuth>
  );
};

export default Temporally;
