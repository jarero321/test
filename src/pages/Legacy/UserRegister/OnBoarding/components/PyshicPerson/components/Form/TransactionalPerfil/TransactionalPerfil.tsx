import { Button, Form, InputForm, Typography } from '@/components';
import { GridTextForm } from '@/components/UI/GridTextForm';
import { SelectForm } from '@/components/UI/SelectForm';
import React from 'react';

const TransactionalPerfil: React.FC = () => {
  return (
    <div className="w-full h-full py-[20px] px-[40px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold w-full" size="base">
          Perfil transaccional
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
          className="w-full mt-[20px]"
          id="transactional"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <GridTextForm
              text="
                Ocupación"
            >
              <InputForm
                label=""
                name="ocupation"
                placeholder="Software Engineer"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Giro"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="gire"
                options={[]}
                placeholder="Tech"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Actividad económica"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="economicActivity"
                options={[]}
                placeholder="Desarrollar"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Ingreso mensual neto"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="salary"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Fuente de Ingresos"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="fuente"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                Procedencia del recurso"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="recurse"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                ¿Cuánto estimas que vas a transaccionar al mes?"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="transaction"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                ¿Cuántas Operaciones vas a realizar por mes?"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="operationNumber"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                ¿A quiénes piensas transferir? Puedes seleccionar más de una
                respuesta"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="operationName"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                ¿Para qué utilizarás la transferencia de los recursos?"
            >
              <SelectForm
                className="mt-[20px]"
                label=""
                name="ocupationRecurse"
                options={[]}
                placeholder="Elige una opción"
                required
              />
            </GridTextForm>
            <GridTextForm
              text="
                ¿Actúas por cuenta propia?"
            >
              <div className="w-full flex gap-[20px]">
                <Button height="h-[60px]" text="Si" type="submit" />
                <Button
                  height="h-[60px]"
                  text="No"
                  type="submit"
                  variant="grey"
                />
              </div>
            </GridTextForm>
            <GridTextForm
              text="
                Nombre comercial y marcas bajo las que opera"
            >
              <InputForm
                label=""
                name="comercialName"
                placeholder="Pueden ser varias marcas"
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
                id="transactional"
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

export default TransactionalPerfil;
