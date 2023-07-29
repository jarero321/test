import { Button, InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';

interface ModalBeneficierProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangePasswordModal: React.FC<ModalBeneficierProps> = ({
  isOpen,
  onClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [showContent, setShowContent] = useState(false);

  const handleContinueClick = () => {
    setShowContent(true);
  };

  const handleCloseClick = () => {
    setShowContent(false);
    onClose();
  };
  return (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Cambiar Contraseña"
      textButton="Actualizar"
      navigate={onClose}
      content={
        <>
          {/* Modal Body */}
          <Typography size="xs" colors="black" className="text-gray-600">
            Ingresa tú token para confirmar el cambio de contraseña
          </Typography>
          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="lg">
              Token 2fa
            </Typography>
            <div>
              <InputForm label="" name="token" placeholder="000000" />
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
            El cambio de contraseña ha sido realizado exitosamente
          </Typography>
        </>
      }
    />
  );
};

export default ChangePasswordModal;
