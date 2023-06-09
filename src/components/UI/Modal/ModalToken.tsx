import { useState } from 'react';
import { Typography } from '../Typography';
import { InputForm } from '../InputForm';
import { Button } from '../Button';
import SuccessIcon from '@/resources/icons/SuccessIcon';

interface ModalTokenProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  contentNext?: React.ReactNode;
}

export const ModalToken: React.FC<ModalTokenProps> = ({
  isOpen = false,
  onClose = () => null,
  title = '',
  content = null,
  contentNext = null,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleContinueClick = () => {
    setShowContent(true);
  };

  return (
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
                <Typography>{title}</Typography>
              </div>
              {/* Modal Body */}
              <div className="p-6">{content}</div>
              <div className="p-6 space-y-6 text-center">
                <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                  <Button
                    height="h-[60px]"
                    onClick={onClose}
                    text="Cancelar"
                    type="submit"
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
                {contentNext}
                <div className="flex flex-row mt-6 space-x-2 justify-evenly">
                  <Button
                    height="h-[60px]"
                    onClick={onClose}
                    text="Aceptar"
                    type="submit"
                    variant="secondary"
                    width="w-2/5"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
