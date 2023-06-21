import { Button, DatePicker, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/GridTextForm';
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
          id="company-data"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm text="Denominación o Razón social">
              <InputForm
                label=""
                className="mt-[20px]"
                name="businessName"
                placeholder="XPIDR SAPI de CV"
                required
                rules="rfc"
              />
            </GridTextForm>
            <GridTextForm text="Nacionalidad">
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Mexicana"
                required
              />
            </GridTextForm>
            <GridTextForm text="RFC con homoclave">
              <InputForm
                className="mt-[20px]"
                name="rfc"
                placeholder="13 dígitos"
                required
                rules="rfc"
              />
            </GridTextForm>
            <GridTextForm text="Giro">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="role"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm text="Fecha de constitución">
              <DatePicker
                handleDateChange={handleDateChange}
                selectedDate={formValues.birthDate}
                withPortal
              />
            </GridTextForm>
            <GridTextForm text="Número de teléfono">
              <InputForm
                className="mt-[20px]"
                name="phoneNumber"
                placeholder="10 dígitos"
                required
              />
            </GridTextForm>
            <div className="w-full">
              <Typography size="xs">Información Bancaria</Typography>
            </div>
            <div className="w-full" />
            <GridTextForm text="Cuenta CLABE (opcional)">
              <InputForm
                className="mt-[20px]"
                name="clabe"
                placeholder="18 dígitos"
              />
            </GridTextForm>
            <GridTextForm text="Banco o Institucion (Opcional)">
              <SelectForm
                className="mt-[20px]"
                name="bank"
                options={[]}
                placeholder="Elige una opción"
              />
            </GridTextForm>
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
                id="company-data"
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
