import { Button, Form, InputForm, Typography } from '@/components';
import React from 'react';

const AddressCompanyForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <Typography className="font-semibold" size="base">
        {' '}
        Domicilio Empresa{' '}
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
                Calle, avenida o vía de que se trate
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
                Número exterior
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
                Número interior
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
                Colonia o urbanización
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
                Ciudad o Población
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
                Código Postal
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
                Alcaldia / Delegación / Municipio / Demarcación Política Similar
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
                Estado
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
                País
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

export default AddressCompanyForm;
