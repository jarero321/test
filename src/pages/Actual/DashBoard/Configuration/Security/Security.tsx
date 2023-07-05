import { Button, Form, InputForm, Typography } from '@/components';
import React, { useState } from 'react';
import { ModalBeneficier } from '../Beneficiaries/UploadBeneficiaries/components/ModalBeneficier';
import { useNavigate } from 'react-router-dom';

export const Security = () => {
  const navigate = useNavigate();
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
        <div className="w-full gap-[20px] grid grid-cols-2 items-center">
          <div>
            <Typography size="sm" className="bold">
              Cambiar Contraseña
            </Typography>
          </div>
          <div></div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Nueva Contraseña
            </Typography>

            <InputForm label="" name="name" type="password" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Confirmar Contraseña
            </Typography>
            <InputForm label="" name="name" type="password" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[40px] ">
          <div className="w-[40%] flex gap-[50px] ">
            <Button
              height="h-[60px]"
              onClick={openModal}
              text="Cambiar Contraseña"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
        <ModalBeneficier isOpen={isModalOpen} onClose={closeModal} />
      </Form>
    </div>
  );
};
