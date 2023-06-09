import { Button, DatePicker, Form, InputForm, Typography } from '@/components';
import { SelectForm } from '@/components/UI/SelectForm';
import React, { useState } from 'react';

const CompanyDataForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    birthDate: new Date(),
  });

  const handleDateChange = (date: Date) => {
    setFormValues({
      ...formValues,
      birthDate: date,
    });
  };
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold w-full" size="base">
          {' '}
          Datos de la empresa{' '}
        </Typography>
        <div className="w-full flex justify-end">
          <div className="w-[30%]">
            <Button height="h-[60px]" text="Guardar" type="submit" />
          </div>
        </div>
      </div>
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
                Denominación o Razón social
              </Typography>
              <InputForm label="" name="name" placeholder="XPIDR SAPI de CV" />
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
                RFC con homoclave
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="lastName"
                placeholder="13 caracteres"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Giro
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                options={[]}
                placeholder="Elige una opción"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Fecha de constitución
              </Typography>
              <DatePicker
                handleDateChange={handleDateChange}
                selectedDate={formValues.birthDate}
                withPortal
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número de teléfono
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="10 dígitos"
              />
            </div>
            <div className="w-full">
              <Typography size="xs">Información Bancaria</Typography>
            </div>
            <div className="w-full" />
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Cuenta CLABE (opcional)
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="name"
                placeholder="18 dígitos"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Banco o Institucion (Opcional)
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="name"
                options={[]}
                placeholder="Elige una opción"
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-[80px] ">
            <div className="w-[40%] flex gap-[50px] ">
              <Button
                height="h-[60px]"
                text="Anterior"
                type="submit"
                variant="secondary"
              />
              <Button
                height="h-[60px]"
                text="Siguiente"
                type="submit"
                variant="secondary"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CompanyDataForm;
