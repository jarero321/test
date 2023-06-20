import { Button, Form, InputForm, Typography } from '@/components';
import React from 'react';

const LegalDataForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <Typography className="font-semibold" size="base">
        {' '}
        Datos del representante legal{' '}
      </Typography>
      <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
      <Typography className="mt-[20px]" colors="secondary-gray" size="xs">
        Rellena los campos con la información requerida
      </Typography>
      <div className="w-full flex">
        <Form
          className="w-full mt-[40px]"
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
                Nombre (s) sin abreviaturas
              </Typography>
              <InputForm
                label=""
                name="name"
                placeholder="Avenida avila camacho"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Primer apellido sin abreviaturas
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="firstName"
                placeholder="502"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Segundo apellido sin abreviaturas
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="lastName"
                placeholder="203"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Clave del Registro Federal de Causantes (RFC) con Homoclave
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                CURP
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número de la Escritura Pública del Poder Otorgado
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Fecha de Protocolizacion de La Escritura Pública del Poder
                Otorgado
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Firma Autógrafa Digitalizada del representate legal
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Cuenta de correo electrónico
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Clave Lada
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Teléfono (fijo)
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Extensión
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="México"
              />
            </div>
          </div>
          <div className="mt-[70px] w-full flex justify-end">
            <div className="w-[30%]">
              <Button height="h-[60px]" text="Guardar" type="submit" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LegalDataForm;
