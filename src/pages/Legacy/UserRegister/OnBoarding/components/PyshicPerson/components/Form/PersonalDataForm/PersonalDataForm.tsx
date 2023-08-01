import { Button, DatePicker, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/FormComponents/GridTextForm';
import { SelectForm } from '@/components';
import React, { useState } from 'react';

interface FormValues {
  birthDate: Date;
}

const PersonalDataForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
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
          Datos Personales
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
          id="personal-data"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm text="CURP">
              <InputForm
                label=""
                name="curp"
                placeholder="18 caracteres"
                required
                rules="curp"
              />
            </GridTextForm>
            <GridTextForm text="Nombre (s)">
              <InputForm
                label=""
                name="firstName"
                placeholder="Luis Carlos"
                required
              />
            </GridTextForm>
            <GridTextForm text="Primer Apellido">
              <InputForm
                label=""
                name="lastName"
                placeholder="Hernandez"
                required
              />
            </GridTextForm>
            <GridTextForm text="Segundo apellido (opcional)">
              <InputForm label="" name="secondName" placeholder="Saavedra" />
            </GridTextForm>
            <GridTextForm text="Fecha de nacimiento">
              <DatePicker
                handleDateChange={handleDateChange}
                selectedDate={formValues.birthDate}
              />
            </GridTextForm>
            <GridTextForm text="Pais de nacimiento">
              <InputForm
                label=""
                name="country"
                placeholder="México"
                required
              />
            </GridTextForm>
            <GridTextForm text="Nacionalidad">
              <InputForm
                label=""
                name="nacionality"
                placeholder="Mexicana"
                required
              />
            </GridTextForm>
            <GridTextForm text="Entidad de Nacimiento">
              <SelectForm
                label=""
                name="stateOfBirth"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm text="Género">
              <SelectForm
                label=""
                name="genre"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm text="Número de télefono celular">
              <InputForm
                className="mt-[20px]"
                label=""
                name="telephone"
                placeholder="10 dígitos"
                required
              />
            </GridTextForm>
            <GridTextForm text="RFC con homoclave">
              <InputForm
                className="mt-[20px]"
                label=""
                name="rfc"
                placeholder="13 dígitos"
                required
                rules="rfc"
              />
            </GridTextForm>

            <GridTextForm text="Régimen Fiscal">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="fiscalRegimen"
                options={[]}
                placeholder="13 caracteres"
              />
            </GridTextForm>
            <GridTextForm text="Correo electrónico">
              <InputForm
                className="mt-[20px]"
                label=""
                name="email"
                placeholder="prueba@mail.es"
                required
              />
            </GridTextForm>
            <div />
            <div className="w-full">
              <Typography size="xs">Información Bancaria</Typography>
            </div>
            <div className="w-full" />
            <GridTextForm text="Cuenta CLABE (opcional)">
              <InputForm
                className="mt-[20px]"
                label=""
                name="clabe"
                placeholder="18 dígitos"
              />
            </GridTextForm>
            <GridTextForm text="Banco o Institucion (Opcional)">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="bank"
                options={[]}
                placeholder="Elige una opción"
              />
            </GridTextForm>
          </div>
        </Form>
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
            id="personal-data"
            text="Siguiente"
            type="submit"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDataForm;
