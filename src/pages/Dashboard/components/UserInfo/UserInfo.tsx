import React from 'react';
import Bell from '../../../../resources/icons/bell.svg';
import { Button, Typography } from '@/components';
import Add from '../../../../resources/icons/add.svg';
import { SchedulesPayments } from './components/SchedulesPayments';
const UserInfo: React.FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-[12px] flex flex-col px-[30px] py-[30px] shadow-lg">
      <div className="flex w-full justify-end cursor-pointer">
        <img src={Bell} />
      </div>
      <div className="w-full flex justify-center mt-[30px]">
        <div className="px-[20px] py-[20px] rounded-[12px] border-2">
          <Typography colors="secondary-gray">LS</Typography>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[10px]">
        <Typography className="font-semibold" colors="primary-color" size="xs">
          Luis Miguel Saavedra H.
        </Typography>
      </div>
      <div>
        <Button
          className="text-secondary-color"
          text="luis.saavedra@kuspit.com"
          type="button"
          variant="link"
        />
      </div>
      <div className="w-full items-center">
        <Typography
          className="text-center mt-[20px]"
          colors="secondary-gray"
          size="lg"
        >
          CLABE: 4234324324
        </Typography>
      </div>
      <div className="w-full h-[2px] bg-primary-color mt-[20px] opacity-[0.2]" />
      <div className="mt-[20px]">
        <Typography size="xs">Administrar cuentas</Typography>
        <div className="w-full flex mt-[30px]">
          <div className="w-full flex items-center justify-center gap-[10px] cursor-pointer border-r ">
            <img className="w-[20px]" src={Add} />
            <Typography colors="secondary-gray" size="xs">
              Proveedor
            </Typography>
          </div>
          <div className="w-full flex items-center justify-center gap-[10px] cursor-pointer">
            <img className="w-[20px]" src={Add} />
            <Typography colors="secondary-gray" size="xs">
              Empresa
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-primary-color mt-[20px] opacity-[0.2]" />
      <div className="mt-[20px]">
        <Typography size="xs">Pagos programados</Typography>
      </div>
      <SchedulesPayments />
      <SchedulesPayments />
      <SchedulesPayments />
      <SchedulesPayments />
    </div>
  );
};

export default UserInfo;
