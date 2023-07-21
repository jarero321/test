import { InputForm, Typography, Form, Button, SelectForm } from '@/components';
import { useState } from 'react';
import EditableAddress from './components/EditableAddress/EditableAddress';
import UpdateReceiver from './components/UpdateReceiver/UpdateReceiver';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';

export const MyAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
              onClick={openModal}
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
          </div>
          <ModalToken
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Límite de retiro"
            textButton="Confirmar"
            content={
              <>
                <div className="text-center">
                  <Typography
                    className="text-gray-600"
                    colors="black"
                    size="xs"
                  >
                    Ingrese tú 2FA para confirmar el cambio de límite de retiro
                  </Typography>
                </div>
                <div className="p-6 space-y-6 text-center">
                  <Typography className="text-center" size="lg">
                    Token 2fa
                  </Typography>
                  <div>
                    <InputForm label="" name="name" placeholder="000000" />
                  </div>
                </div>
              </>
            }
            contentNext={
              <>
                <div className="m-auto w-40 h-40">
                  <SuccessIcon />
                </div>
                <Typography className="text-center" colors="black" size="sm">
                  El límite de retiro ha sido actualizado exitosamente.
                </Typography>
              </>
            }
          />
        </div>
        <div className="w-2/5 gap-[20px] grid grid-cols-1 items-center mt-1">
          <UpdateReceiver />
        </div>
      </Form>
    </div>
  );
};
