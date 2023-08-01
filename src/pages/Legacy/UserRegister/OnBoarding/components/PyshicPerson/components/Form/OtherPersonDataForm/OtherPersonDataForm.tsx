import { Button, DatePicker, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/FormComponents/GridTextForm';
import { SelectForm } from '@/components';
import React, { useState } from 'react';

interface FormValues {
  birthDate: Date;
}

const OtherPersonDataForm: React.FC = () => {
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
          Datos Personales del Propietario Legal
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
          id="other-person"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm text="CURP">
              <InputForm
                name="curp"
                placeholder="18 caracteres"
                required
                rules="curp"
              />
            </GridTextForm>
            <GridTextForm text="Nombre (s)">
              <InputForm name="firstName" placeholder="Luis Carlos" required />
            </GridTextForm>
            <GridTextForm text="Primer apellido">
              <InputForm name="lastName" placeholder="Hernandez" required />
            </GridTextForm>
            <GridTextForm text="Segundo apellido (Opcional)">
              <InputForm name="secondName" placeholder="Saavedra" required />
            </GridTextForm>
            <GridTextForm text="Fecha de nacimiento">
              <DatePicker
                handleDateChange={handleDateChange}
                selectedDate={formValues.birthDate}
              />
            </GridTextForm>
            <GridTextForm text="País de nacimiento">
              <InputForm name="country" placeholder="México" required />
            </GridTextForm>
            <GridTextForm text="Estado">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                options={[]}
                placeholder="Elige una opción"
              />
            </GridTextForm>
            <GridTextForm text="Género">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="gender"
                options={[]}
                placeholder="Elige una opción"
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
            <div className="h-[70px]" />
            <div className="w-full">
              <Typography size="xs">Actividad</Typography>
            </div>
            <div className="w-full" />
            <GridTextForm text="Ocupación">
              <InputForm
                className="mt-[20px]"
                label=""
                name="ocupation"
                placeholder="Software Engineer"
                required
              />
            </GridTextForm>
            <GridTextForm text="Giro">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="role"
                options={[]}
                placeholder="Tech"
                required
              />
            </GridTextForm>
            <GridTextForm text="Actividad">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="activity"
                options={[]}
                placeholder="Desarrollar"
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
            <GridTextForm text="Firma electrónica avanzada">
              <InputForm
                className="mt-[20px]"
                label=""
                name="signature"
                placeholder="13 caracteres"
                required
              />
            </GridTextForm>
            <div className="h-[70px]" />
            <div className="w-full">
              <Typography size="xs">Dirección</Typography>
            </div>
            <div className="w-full" />
            <GridTextForm text="Código Postal">
              <InputForm max={4} name="zipCode" placeholder="03900" required />
            </GridTextForm>
            <GridTextForm text="Calle">
              <InputForm
                name="street"
                placeholder="Avenida Manuel Camacho"
                required
              />
            </GridTextForm>
            <GridTextForm text="Número exterior">
              <InputForm name="externalNumber" placeholder="502" required />
            </GridTextForm>
            <GridTextForm text="Número interior">
              <InputForm name="internalNumber" placeholder="205" required />
            </GridTextForm>

            <GridTextForm text="País">
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="México"
                required
              />
            </GridTextForm>
            <GridTextForm text="Estado o Entidad Federativa">
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Ciudad de México"
                required
              />
            </GridTextForm>
            <GridTextForm text="Alcaldía o municipio">
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="Las lomas"
                required
              />
            </GridTextForm>
            <GridTextForm text="Colonia">
              <SelectForm
                className="mt-[20px]"
                label=""
                name="entity"
                options={[]}
                placeholder="San Pedro de los Pinos"
                required
              />
            </GridTextForm>
            <div className="w-full">
              <Typography size="xs">Contacto</Typography>
            </div>
            <div className="w-full" />
            <GridTextForm text="Número de télefono celular">
              <InputForm
                className="mt-[20px]"
                label=""
                name="telephone"
                placeholder="10 dígitos"
                required
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
            id="other-person"
            text="Siguiente"
            type="submit"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherPersonDataForm;
