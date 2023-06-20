import { Button, Layout, SideBar, Typography } from '@/components';
import React from 'react';
import TableAccount from './components/TableAccounts/TableAccounts';
const AccountBalances: React.FC = () => {
  return (
    <Layout
      sideBar={
        <SideBar
          display
          options={[
            {
              active: true,
              count: 1,
              hrefId: 's',
              maxCount: 1,
              text: 'Saldos de tus cuentas',
            },
          ]}
          titleSideBar="Saldos de tus cuentas"
        />
      }
    >
      <div className="w-full h-full py-[50px] px-[50px]">
        <Typography size="base"> Saldo de tus cuentas </Typography>
        <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
        <Typography className="mt-[20px]" colors="secondary-gray" size="xs">
          Si deseas consultar los movimientos individuales, selecciona una
          cuenta y da click en consultar
        </Typography>
        <div className="mt-[20px]">
          <TableAccount />
        </div>
        <div className="w-full pt-[40px] flex gap-[50px] items-end justify-end">
          <Button
            height="h-[60px]"
            text="Regresar"
            type="button"
            variant="secondary"
            width="w-[30%]"
          />
          <Button
            height="h-[60px]"
            text="Consultar"
            type="button"
            width="w-[30%]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AccountBalances;
