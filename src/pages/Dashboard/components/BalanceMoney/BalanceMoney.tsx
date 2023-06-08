import { Button, Typography } from '@/components';
import { BalanceChart } from '@/pages/DashboardMoral/components/BalanceMoney/components/BalanceChart';
import React from 'react';

const BalanceMoney: React.FC = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Typography className="font-semibold" size="lg">
        Saldo actual
      </Typography>
      <div className="w-full h-[95%] flex flex-col">
        <div className="w-full h-full flex mt-[10px]">
          <div className="w-[35%] h-full flex flex-col items-center justify-between">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Typography
                className="font-semibold"
                colors="primary-color"
                size="lg"
              >
                $18,000,000.00 MXN
              </Typography>
              <Button
                className="text-secondary-gray"
                text="Descargar estado de cuenta"
                type="button"
                variant="link"
              />
            </div>
            <div className="w-full flex gap-[10px]">
              <div className="w-full">
                <Button text="Pagos" type="button" variant="primary" />
              </div>
              <div className="w-full">
                <Button text="Facturacion" type="button" variant="secondary" />
              </div>
            </div>
          </div>
          <div className="w-full h-full ml-[20px]">
            <BalanceChart />
          </div>
        </div>
        <div className="w-full h-[40%] flex py-[15px]">
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border">
            <div className="w-full flex items-center gap-[20px]">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary" />
              <Typography colors="primary-color" size="xs">
                Dépositos
              </Typography>
            </div>
            <Typography className="w-full flex justify-end" size="sm">
              $743,000.00 MXN
            </Typography>
          </div>
          <div className="w-full h-full flex flex-col px-[10px] py-[10px] border ">
            <div className="w-full flex items-center gap-[20px]">
              <div className="w-[20px] h-[20px] rounded-full bg-secondary-color" />
              <Typography colors="primary-color" size="xs">
                Retiros
              </Typography>
            </div>
            <Typography className="w-full flex justify-end" size="sm">
              $423,000.00 MXN
            </Typography>
          </div>
          <div className="w-full h-full border flex items-center justify-center">
            <div className="w-[90%]">
              <Button
                height="h-[50px]"
                text="Montos programados"
                type="button"
              />
            </div>
          </div>
          <div className="w-full h-full border flex items-center justify-center">
            <div className="w-[90%]">
              <Button
                height="h-[50px]"
                text="Cantidad para pagos"
                type="button"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceMoney;
