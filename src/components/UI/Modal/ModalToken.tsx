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
  textButton?: string;
}

export const ModalToken: React.FC<ModalTokenProps> = ({
  isOpen = false,
  onClose = () => null,
  title = '',
  content = null,
  contentNext = null,
  textButton = '',
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleContinueClick = () => {
    setShowContent(true);
  };

  return (
    <div
      className={`fixed inset-0 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          <button
            className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
            onClick={onClose} // Asegúrate de reemplazar esto con la función que cierra la modal
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {!showContent ? (
            <>
              {/* Modal Header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <Typography>{title}</Typography>
              </div>
              {/* Modal Body */}
              <div className="p-6">{content}</div>
              <div
                className="p-6 space-y-6 text-center"
                style={{ marginTop: '-55px' }}
              >
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
                    text={textButton}
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
