import React from 'react';
import { Typography } from '@/components/UI/Typography';
import { Layout } from '@/components';
import SideBarDashboard from '../DashboardMoral/components/SideBar/SideBarMenu';

const ScheduledPayments: React.FC = () => {
  return (
    <Layout
      isAContainer
      sideBar={<SideBarDashboard display titleSideBar="Dashboard" />}
      width="320px"
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full py-[50px] px-[50px]">
          <Typography className="font-semibold" size="base">
            Pagos programados
          </Typography>
          <div className="w-full bg-primary-color h-[2px] mt-[20px] opacity-[0.3]" />
        </div>
      </div>
    </Layout>
  );
};

export default ScheduledPayments;
