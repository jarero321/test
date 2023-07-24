import { Button, Typography } from '@/components';
import React from 'react';
import MicrosoftIcon from '@/resources/icons/microsoft.png';
import QR from '@/resources/icons/qr.png';
import { Link } from 'react-router-dom';

const Active2FA: React.FC = () => {
  return (
    <div className="h-full w-full max-h-screen justify-center flex flex-col gap-[14px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[550px] ">
      <div className="w-full flex flex-col xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center 2xl:gap-[30px]">
        <div className="w-full flex flex-col gap-[40px]">
          <Typography
            className="xl:!text-[25px] 2xl:!text-[35px] mt-[20px] "
            colors="primary-color"
            size="base"
          >
            Configura el Segundo Factor de Autenticación
          </Typography>
        </div>
        <div className="2xl:w-full 2xl:flex 2xl:flex-col 2xl:gap-[10px]">
          <Typography
            className="xl:!text-[13px] 2xl:!text-[14px]"
            colors="primary-color"
            size="xs"
          >
            Para configurar el Segundo Factor de Autenticación 2FA sigue las
            siguientes instrucciones:
          </Typography>
          <div className="w-full flex items-center justify-between 2xl:justify-start 2xl:gap-[30px]">
            <Typography
              className="xl:!text-[13px] 2xl:!text-[14px]"
              colors="primary-color"
              size="xs"
            >
              1. Descarga la App <strong>Microsoft Authenticator.</strong>
            </Typography>
            <img className="w-[50px] h-[50px]" src={MicrosoftIcon} />
          </div>
          <div>
            <Typography
              className="xl:!text-[13px] 2xl:!text-[14px]"
              colors="primary-color"
              size="xs"
            >
              2. Abre la App, selecciona la opción{' '}
              <strong>Agregar cuenta</strong> y luego elige en tipo de cuenta{' '}
              <strong>Otra.</strong>
            </Typography>
          </div>
          <div className="flex flex-col 2xl:gap-[20px] ">
            <Typography
              className="xl:!text-[13px] 2xl:!text-[14px]"
              colors="primary-color"
              size="xs"
            >
              3. Escanea el siguiente <strong>código QR:</strong>
            </Typography>
            <div className="w-full flex items-center justify-center">
              <img className="w-[100px] h-[100px] " src={QR} />
            </div>
          </div>
          <div>
            <Typography
              className="xl:!text-[13px] 2xl:!text-[14px]"
              colors="primary-color"
              size="xs"
            >
              4. Listo, se ha configurado el{' '}
              <strong>Segundo Factor de Autenticación 2FA</strong>
            </Typography>
          </div>
        </div>
        <div className="w-full mt-[25px] flex gap-[30px]">
          <Button
            height="h-[60px]"
            id="form-temporal"
            text="Cancelar"
            type="button"
            variant="grey"
          />
          <Link className="w-full" to="/dashboard">
            <Button
              height="h-[60px]"
              id="form-temporal"
              text="Finalizar"
              type="submit"
              variant="secondary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Active2FA;
