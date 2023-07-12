import { InputForm, Typography, Form, Button } from '@/components';
import React from 'react';

export const MyAccount = () => {
  return (
    <div className="mt-5 w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-6">
          <div>
            <Typography size="sm" className="bold">
              Luis Miguel Saavedra Hernández <br />
            </Typography>

            <Typography size="sm" className="bold">
              Contrato: 1-COM 2345 <br />
            </Typography>

            <Typography size="sm" className="bold">
              Fecha de creación: 23/junio/2018
            </Typography>
          </div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center">
          <div>
            <Typography size="sm" className="bold">
              Domicilio
            </Typography>
            <br />
            <Typography size="sm" className="bold">
              Avenida Paseo de la Reforma 255 Piso 14 A, Colonia Cuauhtémoc,
              Alcaldía Colonia Cuauhtémoc CP 06500, Ciudad de México, CDMX
            </Typography>
          </div>
          <div>
            <Typography size="sm" colors="grey">
              Notificaciones
            </Typography>
            <InputForm label="correo@dominio.com" name="name" type="email" />
          </div>
          <div>
            <Typography size="sm" colors="grey">
              Límite de retiros por día
            </Typography>
            <InputForm label="Defina un monto" name="name" type="email" />
          </div>
          <div className="w-[40%] flex gap-[50px] mt-8 align-right">
            <Button
              height="h-[60px]"
              //   onClick={openModal}
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
          </div>
          <div className="m-2"></div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center"></div>
      </Form>
    </div>
  );
};
