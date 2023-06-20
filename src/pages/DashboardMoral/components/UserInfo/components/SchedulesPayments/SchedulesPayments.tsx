import React from 'react';

const SchedulesPayments: React.FC = () => {
  return (
    <div className="py-[20px] w-full flex flex-col">
      <div className="w-full flex justify-between">
        <p className="text-[12px] font-semibold">Dispersa</p>
        <p className="text-[12px]">Hoy 16:30</p>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-[12px]">Nomina Kuspit</p>
        <p className="text-[12px] font-semibold">$1,000,000.00</p>
      </div>
      <div className="w-full h-[1px] mt-[20px] bg-primary-color opacity-[0.2]" />
    </div>
  );
};

export default SchedulesPayments;
