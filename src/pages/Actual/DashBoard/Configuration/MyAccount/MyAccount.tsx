import { InputForm, Typography, Form, Button } from '@/components';
import React from 'react';

export const MyAccount = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-2 items-center">
          <div>
            <Typography size="sm" className="bold">
              Luis Miguel Saavedra Hernández
            </Typography>
            <br />
            <Typography size="sm" className="bold">
              Contrato: 1-COM 2345
            </Typography>
            <br />
            <Typography size="sm" className="bold">
              Fecha de creación: 23/junio/2018
            </Typography>
          </div>
          F
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center">
          <div>
            <Typography size="sm" className="bold">
              Domicilio
            </Typography>
            <br />
            <Typography size="sm" className="bold">
              Avenida Paseo de la Reforma
            </Typography>
          </div>
          <div>
            <Typography>Notificaciones</Typography>
          </div>
          <div>
            <Typography>Límite de retiros por día</Typography>
            <InputForm label="" name="name" type="password" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[40px] ">
          <div className="w-[40%] flex gap-[50px] ">
            <Button
              height="h-[60px]"
              //   onClick={openModal}
              text="Cambiar Contraseña"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};
