import { Button, InputForm, Typography } from '@/components';
import { useState } from 'react';

interface ModalBeneficierProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSecurity: React.FC<ModalBeneficierProps> = ({ isOpen, onClose }) => {
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
    // Main modal
    <div
      className={`fixed -inset-0 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {!showContent ? (
            <>
              {/* Modal Header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <Typography>Cambiar Contraseña</Typography>
              </div>
              {/* Modal Body */}
              <div className="p-6">
                <Typography size="xs" colors="black" className="text-gray-600">
                  Ingrese tú 2FA para confirmar el cambio de contraseña
                </Typography>
              </div>
              <div className="p-6 space-y-6 text-center">
                <Typography className="text-center">Token 2fa</Typography>
                <div>
                  <InputForm label="" name="name" placeholder="000000" />
                </div>
                <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                  <Button
                    height="h-[60px]"
                    text="Cancelar"
                    type="submit"
                    onClick={onClose}
                    variant="grey"
                  />
                  <Button
                    height="h-[60px]"
                    onClick={handleContinueClick}
                    text="Confirmar"
                    type="submit"
                    variant="secondary"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Modal Body */}
              <div className="p-6 space-y-6 text-center">
                <Typography className="text-center">
                  El cambio de contraseña ha sido realizado exitosamente
                </Typography>

                <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                  <Button
                    width="w-2/5"
                    height="h-[60px]"
                    onClick={onClose}
                    text="Aceptar"
                    type="submit"
                    variant="secondary"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Modal Content */}
    </div>
  );
};

export default ModalSecurity;
