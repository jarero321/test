import { Button, Form, InputForm, Typography } from '@/components';
import React from 'react';

const PersonalDataForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <Typography className="font-semibold" size="base">
        {' '}
        Datos Personales{' '}
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
              <InputForm label="" name="name" placeholder="Luis Carlos" />
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
                placeholder="Jarero"
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
                placeholder="Martinez"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Fecha de nacimiento
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="30/06/2000"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                País de nacimiento
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Nacionalidad
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Mexicana"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Entidad de nacimiento
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="Jalisco"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Género
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="genre"
                placeholder="Hombre"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número de télefono celular
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="telephone"
                placeholder="4957839587"
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
                name="name"
                placeholder="prueba@mail.es"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                RFC con homoclave
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="name"
                placeholder="prueba@mail.es"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Régimen fiscal
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="name"
                placeholder="prueba@mail.es"
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
                name="name"
                placeholder="prueba@mail.es"
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

export default PersonalDataForm;
