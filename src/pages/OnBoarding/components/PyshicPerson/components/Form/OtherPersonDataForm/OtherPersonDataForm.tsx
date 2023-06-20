import { Button, Form, InputForm, Typography } from '@/components';
import React from 'react';

const OtherPersonDataForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <Typography className="font-semibold" size="base">
        Otros datos personales
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
          <div className="w-full gap-[65px] grid grid-cols-2 items-center">
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número de cuenta autorizada para recibir depósitos
              </Typography>
              <InputForm label="" name="name" placeholder="Example" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Nombre comercial y marcas bajo las que opera (pueden ser varias
                marcas)
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="Si"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Actividades y otros datos
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="Example"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Corroborar datos principales del Cliente
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
                Firma Autógrafa Digitalizada
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="HSBC"
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

export default OtherPersonDataForm;
