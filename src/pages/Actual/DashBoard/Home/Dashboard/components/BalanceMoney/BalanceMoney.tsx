import { Typography } from '@/components';
import React from 'react';
import BalanceChart from './components/BalanceChart/BalanceChart';

const BalanceMoney: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <div className="w-full flex flex-col">
        <div className="w-full flex mt-[10px]">
          <div className="w-[35%] flex flex-col justify-between">
            <Typography className="xl:!text-[14px] font-semibold xl:!leading-6">
              Xpidir SAPI de CV
            </Typography>
            <Typography
              className=" xl:!text-[14px] xl:!leading-6"
              colors="secondary-color"
              size="sm"
            >
              Contrato 1-COM 2345
            </Typography>
            <Typography
              className="xl:!text-[14px] xl:!leading-6"
              colors="main-gray"
            >
              CLABE: 432454654654767
            </Typography>
            <div className="w-full h-full flex flex-col">
              <Typography
                className="font-semibold mt-[20px] xl:!text-[32px] "
                colors="primary-color"
              >
                $18,346,456
              </Typography>
            </div>
          </div>
          <div className="w-full h-full ml-[20px]">
            <BalanceChart />
          </div>
        </div>
        <div className="w-full h-[20%] flex py-[15px]">
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border">
            <div className="w-full flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary" />
              <Typography
                className="xl:!text-[14px]"
                colors="primary-color"
                size="xs"
              >
                Dépositos
              </Typography>
            </div>
            <Typography
              className="w-full flex justify-end xl:!text-[18px] "
              size="sm"
            >
              $743,000.00
            </Typography>
          </div>
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border ">
            <div className="w-full flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#3C1152]" />
              <Typography
                className="xl:!text-[14px]"
                colors="primary-color"
                size="xs"
              >
                Retiros
              </Typography>
            </div>
            <Typography
              className="w-full flex justify-end xl:!text-[18px] "
              size="sm"
            >
              $423,000.00
            </Typography>
          </div>
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border ">
            <div className="w-full flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary-color" />
              <Typography
                className="xl:!text-[14px]"
                colors="primary-color"
                size="xs"
              >
                Pago de Servicios
              </Typography>
            </div>
            <Typography
              className="w-full flex justify-end xl:!text-[18px] "
              size="sm"
            >
              $423,000.00
            </Typography>
          </div>
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border ">
            <div className="w-full flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary-gray" />
              <Typography
                className="xl:!text-[14px]"
                colors="primary-color"
                size="xs"
              >
                Retiros Programados
              </Typography>
            </div>
            <Typography
              className="w-full flex justify-end xl:!text-[18px] "
              size="sm"
            >
              $423,000.00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceMoney;
