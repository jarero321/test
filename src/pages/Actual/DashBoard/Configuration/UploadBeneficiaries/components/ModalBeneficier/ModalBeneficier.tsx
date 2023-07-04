import { Button, InputForm, Typography } from '@/components';
import { useState } from 'react';

interface ModalBeneficierProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalBeneficier: React.FC<ModalBeneficierProps> = ({
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
                <Typography>Alta Nuevo Beneficiario</Typography>
              </div>
              {/* Modal Body */}
              <div className="p-6">
                <Typography size="xs" colors="black" className="text-gray-600">
                  Ingrese tú 2FA para confirmar el alta del beneficiario:
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
                    text="Agregar Beneficiario"
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
                  El beneficiario ha sido dado de alta exitosamente
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

export default ModalBeneficier;

// <h2 className="text-xl font-bold mb-2">Modal Title</h2>
//         <p className="text-gray-600">Modal Content</p>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 mt-4"
//           onClick={onClose}
//         >
//           Close
//         </button>
