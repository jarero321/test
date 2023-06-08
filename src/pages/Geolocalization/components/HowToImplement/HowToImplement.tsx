import { Button, Typography } from '@/components';
import Location from '@/resources/img/location.png';
import React from 'react';

const HowToImplement: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-primary-color justify-center items-center">
      <div className=" w-[50%] py-[48px] px-[48px] bg-white border rounded-[20px] border-[2px] min-h-[500px] min-w-[1000px] text-left mt-[54px] flex flex-col items-center">
        <Typography
          className=" text-center mt-[20px]"
          colors="primary-color"
          size="base"
        >
          Geolocalización
        </Typography>
        <div>
          <Typography className="mt-[24px] text-center" size="xs">
            Por disposición oficial requirimos acceder a tu ubicación
            geográfica. La información que nos proporciones no se utilizará para
            ningún otro propósito.
          </Typography>
        </div>
        <div className="mt-[20px]">
          <img height={200} src={Location} width={200} />
        </div>
        <Typography className="mt-[24px] text-center font-bold" size="xs">
          ¿Cómo compartir tu ubicación geográfica?
        </Typography>
        <Typography className="mt-[24px]" size="xs">
          - Consulta en el menú de tu navegador con la opción Configuracion y
          selecciona Compartir ubicación
        </Typography>
        <Typography size="xs">
          - Recuerda autorizar el dispositivo (computadora, tablet) que uses
          para ingresar a DyP para Compartir ubicación
        </Typography>
        <Typography size="xs">
          - Te sugerimos volver a cargar la página actual para que se aplique
          correctamente la autorización de tu ubicación geográfica.
        </Typography>
        <Typography className="w-full  text-left" size="xs">
          - Listo
        </Typography>
        <div className="mt-[40px] w-full ">
          <Button
            height="h-[50px]"
            text="Aceptar"
            type="button"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToImplement;
