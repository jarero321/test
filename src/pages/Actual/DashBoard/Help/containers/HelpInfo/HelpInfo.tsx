import { InputForm, Typography } from '@/components';
import React from 'react';

const HelpInfo = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <div className="w-full gap-20 grid grid-cols-1 items-center mb-6">
        <div>
          <div className="font-bold mb-2">
            <Typography size="lg">
              Centro de Atención a Clientes
              <br />
            </Typography>
          </div>
          <div>
            <Typography size="sm" colors="secondary-gray">
              Si necesitas más información o requieres ayuda por favor
              contáctanos: <br />
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full gap-20 grid grid-cols-2 items-center mb-6">
        <div>
          <Typography size="xs" colors="secondary-gray">
            Atención telefónica
          </Typography>
          <InputForm name="receiver" type="text" />
        </div>
        <div>
          <Typography size="xs" colors="secondary-gray">
            O escribe a:
          </Typography>
          <InputForm name="receiver" type="text" />
        </div>
      </div>
      <div className="w-full gap-20 grid grid-cols-2 items-center mb-6">
        <div>
          <Typography size="xs" colors="secondary-gray">
            En horario de atención: <br />
            Lunes a viernes de 08:00 am a 08:00 pm. <br />
            Sábados de 08:00 am a 03:00 pm.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpInfo;
