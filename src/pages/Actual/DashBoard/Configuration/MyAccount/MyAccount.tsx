import { InputForm, Typography, Form, Button, SelectForm } from '@/components';
import React from 'react';
import EditableAddress from './components/EditableAddress/EditableAddress';
import UpdateReceiver from './components/UpdateReceiver/UpdateReceiver';

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
            <Typography size="sm">
              Contrato: 1-COM 2345 <br />
            </Typography>

            <Typography size="sm">Fecha de creación: 23/junio/2018</Typography>
          </div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center mb-1">
          <EditableAddress />
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

          <div className="m-2"></div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-1">
          <div></div>
          <div></div>
          <div>
            <Button
              height="h-[60px]"
              //   onClick={openModal}
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
        <div className="w-2/5 gap-[20px] grid grid-cols-1 items-center mt-1">
          <UpdateReceiver />
        </div>
      </Form>
    </div>
  );
};
