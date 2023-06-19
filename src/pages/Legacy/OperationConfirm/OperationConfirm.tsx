import React from 'react';
import { Typography } from '@/components/UI/Typography';
import { OperationInfo } from './components/OperationInfo';
import { Button, Layout } from '@/components';
import SideBarDashboard from '../DashboardMoral/components/SideBar/SideBarMenu';

const OperationConfirm: React.FC = () => {
  return (
    <Layout
      isAContainer
      sideBar={<SideBarDashboard display titleSideBar="Dashboard" />}
      width="320px"
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full py-[50px] px-[50px]">
          <Typography className="font-semibold" size="base">
            Confirmar Operación
          </Typography>
          <div className="w-full bg-primary-color h-[2px] mt-[20px] opacity-[0.3]" />
        </div>
        <div className="w-full px-[50px] pb-[20px] flex flex-col">
          <div className="w-full h-full flex justify-between gap-[30px] mb-[20px]">
            <div className="w-full h-full flex flex-col border-r-2 min-h-[130px] px-[10px] py-[10px]">
              <Typography size="lg">Detalle de la operación:</Typography>
              <div className="w-full h-full">
                <Typography
                  className="mt-[10px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Test
                </Typography>
              </div>
            </div>
            <div className="w-full h-full flex flex-col border-r-2 min-h-[130px] px-[10px] py-[10px]">
              <Typography size="lg">Cuenta origen:</Typography>
              <div className="w-full h-full">
                <Typography
                  className="mt-[10px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Nombre: <strong> Telas Messi SA de CV </strong>
                </Typography>
                <Typography
                  className="mt-[10px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Cuenta: 40084543534
                </Typography>
              </div>
            </div>
            <div className="w-full h-full flex flex-col min-h-[130px] px-[10px] py-[10px]">
              <Typography size="lg">Cuenta destino:</Typography>
              <div className="w-full h-full">
                <Typography
                  className="mt-[10px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Nombre: <strong> Cristiano Ronaldo Zavala </strong>
                </Typography>
                <Typography
                  className="mt-[10px]"
                  colors="secondary-gray"
                  size="xs"
                >
                  Cuenta: 12484543534
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <OperationInfo />
          </div>
          <div className="w-full h-full flex mt-[30px] mb-[10px] gap-[30px] justify-end">
            <div className="w-[20%]">
              <Button
                height="h-[50px]"
                text="Cancelar"
                type="button"
                variant="grey"
              />
            </div>
            <div className="w-[20%]">
              <Button
                height="h-[50px]"
                text="Modificar"
                type="button"
                variant="secondary"
              />
            </div>
            <div className="w-[20%]">
              <Button height="h-[50px]" text="Aceptar" type="button" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OperationConfirm;
