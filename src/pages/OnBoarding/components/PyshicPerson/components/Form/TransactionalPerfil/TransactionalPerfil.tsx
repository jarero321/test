import { Button, Form, InputForm, Typography } from '@/components';
import React from 'react';

const TransactionalPerfil: React.FC = () => {
  return (
    <div className="w-full h-full py-[20px] px-[40px]">
      <Typography className="font-semibold" size="base">
        Perfil transaccional
      </Typography>
      <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
      <Typography className="mt-[20px]" colors="secondary-gray" size="xs">
        Rellena los campos con la información requerida
      </Typography>
      <div className="w-full flex">
        <Form
          className="w-full mt-[20px]"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Ocupación
              </Typography>
              <InputForm label="" name="name" placeholder="Software Engineer" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Giro
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="firstName"
                placeholder="Tech"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Actividad económica
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="lastName"
                placeholder="Desarrollar"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Ingreso mensual neto
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="$10,000 MXN"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Fuente de Ingresos
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="nómina"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Procedencia del recurso
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                ¿Cuánto estimas que vas a transaccionar al mes?
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                ¿Cuántas Operaciones vas a realizar por mes?
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                ¿A quiénes piensas transferir? Puedes seleccionar más de una
                respuesta
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                ¿Para qué utilizarás la transferencia de los recursos?
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                ¿Actúas por cuenta propia? Si / No
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="Example"
              />
            </div>
          </div>
          <div className="mt-[30px] w-full flex justify-end">
            <div className="w-[30%]">
              <Button height="h-[60px]" text="Guardar" type="submit" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default TransactionalPerfil;
