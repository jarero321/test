import { Layout } from '@/components';
import React from 'react';
import { BalanceMoney } from './components/BalanceMoney';
import { Movements } from './components/Movements';
import { UserInfo } from './components/UserInfo';
import SideBarDashboard from './components/SideBar/SideBarMenu';

const Dashboard: React.FC = () => {
  return (
    <Layout
      sideBar={
        <SideBarDashboard display titleSideBar="Tablero Persona Fisica" />
      }
      width="320px"
    >
      <div className="flex h-screen w-full px-[20px] gap-[20px] py-[20px] ">
        <div className="w-full h-full flex flex-col gap-[20px]">
          <BalanceMoney />
          <Movements />
        </div>
        <div className="w-[35%] h-full">
          <UserInfo />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
