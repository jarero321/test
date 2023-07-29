import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import React from 'react';

interface LimitOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LimitOutModal: React.FC<LimitOutModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  return (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Límite de retiro"
      textButton="Confirmar"
      navigate={onClose}
      content={
        <>
          <div className="text-center">
            <Typography className="text-gray-600" colors="black" size="xs">
              Ingresa tú token para confirmar el cambio de límite de retiro
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
  );
};

export default LimitOutModal;
