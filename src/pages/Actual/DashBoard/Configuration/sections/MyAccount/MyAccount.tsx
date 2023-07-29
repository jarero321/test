import { InputForm, Typography, Form } from '@/components';
import { useState } from 'react';
import EditableAddress from './containers/EditableAddress/EditableAddress';
import UpdateReceiver from './containers/UpdateReceiver/UpdateReceiver';

import LimitOut from './containers/LimitOut/LimitOut';

export const MyAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <div className="mt-5 w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <div className="relative top-2">
        <div className="absolute top-0 right-0 mt-1">
          <div className="w-4 h-4 bg-secondary rounded-full"></div>
        </div>
        <div className="text-end top-0 right-0 mr-6">
          <Typography size="xs">Estatus</Typography>
        </div>
      </div>
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-6">
          <div style={{ marginTop: '-33px' }}>
            <div className="font-bold">
              <Typography size="lg">
                Luis Miguel Saavedra Hernández <br />
              </Typography>
            </div>
            <div>
              <Typography size="sm" colors="text-fuchsia-700">
                Contrato: 1-COM 2345 <br />
              </Typography>
            </div>

            <Typography size="sm" colors="gray">
              Fecha de creación: 23/junio/2018
            </Typography>
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
        </div>
        <div className="w-full gap-[20px] grid grid-cols-3 mt-2">
          <div></div>
          <div></div>
          <div className="w-72 justify-self-end">
            <LimitOut />
          </div>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-3 items-center mt-1">
          <UpdateReceiver />
        </div>
      </Form>
    </div>
  );
};

export default MyAccount;
