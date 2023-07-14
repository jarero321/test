/* eslint-disable react/prop-types */
import { Button, Form, InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  return (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Beneficiario"
      content={
        <>
          <Typography className="text-gray-600" colors="black" size="xs">
            Ingrese tú 2FA para confirmar el alta del beneficiario:
          </Typography>
          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="lg">
              Token 2fa
            </Typography>
            <div>
              {/* <InputForm label="" name="name" placeholder="000000" /> */}
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
            El beneficiario ha sido dado de alta exitosamente
          </Typography>
        </>
      }
    />
  );
};

export default UploadModal;
