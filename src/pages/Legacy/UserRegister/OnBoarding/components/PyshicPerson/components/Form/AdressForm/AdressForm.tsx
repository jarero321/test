import { Button, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/GridTextForm';
import { SelectForm } from '@/components/UI/SelectForm';
import React from 'react';

const AddressForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold" size="base">
          Domicilio
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
          id="address"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm
              text="
                  Código Postal"
            >
              <InputForm
                label=""
                max={4}
                name="zipCode"
                placeholder="0390"
                required
              />
            </GridTextForm>
            <GridTextForm text="Colonia">
              <InputForm
                className="mt-[20px]"
                label=""
                name="state"
                placeholder="Avenida Manuel Camacho"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Número exterior"
            >
              <InputForm
                className="mt-[20px]"
                label=""
                name="externalNumber"
                placeholder="502"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Número interior"
            >
              <InputForm
                className="mt-[20px]"
                label=""
                name="interiorNumber"
                placeholder="203"
              />
            </GridTextForm>
            <GridTextForm
              text="
                País"
            >
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
                id="address"
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

export default AddressForm;
