/* eslint-disable react/prop-types */
import { Button, Form, InputForm, Typography } from '@/components';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';
import { ListItem } from './components/ListItem';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleContinueClick = () => {
    setShowContent(true);
  };

  return (
    // Main modal
    <div
      className={`fixed -inset-0 left-0 top-0 flex h-full items-center justify-center bg-black bg-opacity-50 py-10 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="relative max-h-full w-[800px]">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow">
          {!showContent ? (
            <>
              {/* Modal Header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <Typography className="font-bold" size="sm">
                  Alta nuevo destinatario
                </Typography>
              </div>
              {/* Modal Body */}
              <div className="py-[24px] px-6 flex flex-col gap-[12px]">
                <ListItem
                  text="Gastón Ghietto"
                  title="Nombre del Destinatario"
                />
                <ListItem text="Número de celular" title="Tipo de cuenta" />
                <ListItem text="**** **** **** 6709" title="Número de cuenta" />
                <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
                <ListItem text="Gastón 32" title="Alias" />
                <ListItem
                  text="Número de celular"
                  title="Límite de operación"
                />
                <ListItem text="GRJL20031485MV2" title="RFC" />
                <ListItem text="GRKL20031485MV2" title="CURP" />
              </div>
              <div className="p-6 space-y-6 text-center">
                <Typography className="text-center" size="lg">
                  Token
                </Typography>
                <div>
                  <Form onSubmit={() => null}>
                    <InputForm label="" name="name" placeholder="000000" />
                  </Form>
                </div>
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
                    text="Agregar Destinatario"
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
                <div className="m-auto w-40 h-40">
                  <SuccessIcon />
                </div>
                <Typography className="text-center" colors="black" size="sm">
                  El destinatario ha sido dado de alta exitosamente
                </Typography>

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
      {/* Modal Content */}
    </div>
  );
};

export default UploadModal;
