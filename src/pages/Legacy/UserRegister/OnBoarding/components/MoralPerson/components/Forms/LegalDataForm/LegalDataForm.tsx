import { Button, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/FormComponents/GridTextForm';
import React from 'react';

const LegalDataForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold w-full" size="base">
          Datos del Representante Legal
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
          id="legal-person"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm text="Nombre (s)">
              <InputForm name="firstName" placeholder="Luis Carlos" required />
            </GridTextForm>
            <GridTextForm text="Primer Apellido">
              <InputForm name="lastName" placeholder="Hernandez" required />
            </GridTextForm>
            <GridTextForm text="Segundo apellido (opcional)">
              <InputForm name="secondName" placeholder="Saavedra" />
            </GridTextForm>
            <GridTextForm text="RFC con Homoclave">
              <InputForm
                name="rfc"
                placeholder="13 caracteres"
                required
                rules="rfc"
              />
            </GridTextForm>
            <GridTextForm text="CURP">
              <InputForm
                name="curp"
                placeholder="18 caracteres"
                required
                rules="curp"
              />
            </GridTextForm>
            <GridTextForm text="Correo electrónico">
              <InputForm
                name="email"
                placeholder="correo@dominio.com"
                required
              />
            </GridTextForm>
            <GridTextForm text="Número de teléfono">
              <InputForm name="phoneNumber" placeholder="10 digitos" required />
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
                id="legal-person"
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

export default LegalDataForm;
