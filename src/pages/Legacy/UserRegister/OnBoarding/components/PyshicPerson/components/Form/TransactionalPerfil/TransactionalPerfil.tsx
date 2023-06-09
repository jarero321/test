import { Button, Form, InputForm, Typography } from '@/components';
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
                Ocupación
              </Typography>
              <InputForm label="" name="name" placeholder="Software Engineer" />
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
                name="giro"
                options={[]}
                placeholder="Tech"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Actividad económica
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="lastName"
                options={[]}
                placeholder="Desarrollar"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Ingreso mensual neto
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
                Fuente de Ingresos
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
                Procedencia del recurso
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
                ¿Cuánto estimas que vas a transaccionar al mes?
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
                ¿Cuántas Operaciones vas a realizar por mes?
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
                ¿A quiénes piensas transferir? Puedes seleccionar más de una
                respuesta
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
                ¿Para qué utilizarás la transferencia de los recursos?
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
                ¿Actúas por cuenta propia?
              </Typography>
              <div className="w-full flex gap-[20px]">
                <Button height="h-[60px]" text="Si" type="submit" />
                <Button
                  height="h-[60px]"
                  text="Mo"
                  type="submit"
                  variant="grey"
                />
              </div>
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Nombre comercial y marcas bajo las que opera
              </Typography>
              <InputForm
                label=""
                name="name"
                placeholder="Pueden ser varias marcas"
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

export default TransactionalPerfil;
