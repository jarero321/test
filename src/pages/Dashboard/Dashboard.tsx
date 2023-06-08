import React from 'react';
import { BalanceMoney } from './components/BalanceMoney';
import { Movements } from './components/Movements';
import { LayoutV2 } from '@/layout/LayoutV2';
import { Typography } from '@/components';

const Dashboard: React.FC = () => {
  return (
    <LayoutV2>
      <>
        <Typography className="px-[20px] xl:!text-[20px] font-semibold mt-[20px]">
          Inicio
        </Typography>
        <div className="flex w-full px-[20px] gap-[20px] py-[20px] ">
          <div className="w-full h-full flex flex-col gap-[20px]">
            <BalanceMoney />
            <Movements />
          </div>
        </div>
      </>
    </LayoutV2>
  );
};

export default Dashboard;
