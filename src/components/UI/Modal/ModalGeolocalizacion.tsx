import { Button } from '../Button';
import { Typography } from '../Typography';
import maps from '@/resources/img/coordenadas.jpg';
import React from 'react';

const ModalGeolocalizacion: React.FC = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[20] flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="bg-white px-[50px] py-[50px] rounded-[8px]">
        <Typography className="text-center" size="sm">
          Por disposición oficial requerimos acceder a tu ubicación geográfica
          para poder concluir la apertura de contrato.
        </Typography>
        <Typography className="text-center" size="sm">
          La información que nos proporciones no se utilizará para ningún otro
          propósito.
        </Typography>

        <Typography className="text-center font-semibold mt-8 mb-8" size="sm">
          ¿Cómo compartir tu ubicación geográfica?
        </Typography>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 sm:col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <img alt="maps" className="w-[450px] h-[450px]" src={maps} />
          </div>
          <div className="col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-3">
            <ul className="space-y-1 text-primary-color list-disc list-inside text-sm md:text-base lg:text-lg xl:text-xl mb-[150px]">
              <li>
                Consulta en el menú de tu navegador la opción
                &quot;Configuración&quot; y selecciona &quot;Compartir
                ubicación&quot;.
              </li>
              <li>
                Recuerda autorizar el dispositivo (computadora, tableta,
                teléfono) que uses para ingresar a kuspit para &quot;Compartir
                ubicación&quot;
              </li>
              <li>
                Te sugerimos volver a cargar la página actual para que se
                aplique correctamente la autorización de tu ubicación
                geográfica.
              </li>
              <li>¡Listo!</li>
            </ul>
          </div>
        </div>

        <div className="flex mt-[30px] gap-[40px] justify-end">
          <Button
            height="h-[55px]"
            text="Finalizar"
            type="button"
            variant="grey"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalGeolocalizacion;
