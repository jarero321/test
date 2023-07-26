import { Button, InputForm, SelectForm, Typography, Form } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';

const UploadUserForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-6">
          <div className="font-bold">
            <Typography size="lg">Alta de usuario</Typography>
          </div>
        </div>
        <div className="w-full gap-[20px] grid grid-cols-2 items-center">
          <div>
            <Typography colors="secondary-gray" size="xs">
              Nombre (s)
            </Typography>
            <InputForm label="" name="name" placeholder="Luis Miguel" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Primer apellido
            </Typography>
            <InputForm label="" name="lastName" placeholder="Saaavedra" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Segundo apellido (Opcional)
            </Typography>
            <InputForm label="" name="secondLastName" placeholder="Hernández" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Email
            </Typography>
            <InputForm
              label=""
              name="email"
              placeholder="luis.saavedra@kuspit.com"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Rol
            </Typography>
            <SelectForm
              name="role"
              options={[]}
              placeholder="Selecciona un Rol"
            />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[40px] ">
          <div className="w-[40%] flex gap-[50px] ">
            <Button
              height="h-[60px]"
              text="Cancelar"
              type="submit"
              variant="grey"
            />
            <Button
              height="h-[60px]"
              onClick={openModal}
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
        <ModalToken
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Editar Dirección"
          textButton="Guardar"
          content={
            <>
              <div className="text-center">
                <Typography className="text-gray-600" colors="black" size="xs">
                  Ingrese tú 2FA para confirmar el alta de Usuario:
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
                El usuario ha sido dado de alta exitosamente.
              </Typography>
            </>
          }
        />
      </Form>
    </div>
  );
};

export default UploadUserForm;
