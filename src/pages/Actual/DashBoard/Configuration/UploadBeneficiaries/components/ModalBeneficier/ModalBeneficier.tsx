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
    <div
      className={`fixed inset-0 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        {!showContent ? (
          <div className="w-full">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <div className="mb-8 text-left">
                <div>
                  <Typography>Alta Nuevo Benefici ario</Typography>
                </div>
                <h1 className="mb-4 text-3xl font-extrabold">
                  Alta nuevo beneficiario
                </h1>
                <p className="text-gray-600">
                  Ingrese tú 2FA para confirmar el alta del beneficiario
                </p>
              </div>
              <div>
                <InputForm label="" name="name" placeholder="" />
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
          </div>
        ) : (
          <>New content</>
        )}
      </div>
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
