/* eslint-disable react/prop-types */
import { Button, Form, InputForm, Typography } from '@/components';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';
import { ListItem } from '../ListItem';
import { ModalContainer } from '@/components/UI/Modal/ModalContainer';

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
    <ModalContainer
      active={isOpen}
      handleClose={onClose}
      title="Actualizar destinatario"
    >
      {!showContent ? (
        <>
          {/* Modal Body */}
          <div className="py-[24px] px-6 flex flex-col gap-[12px]">
            <ListItem text="Gastón Ghietto" title="Nombre del Destinatario" />
            <ListItem text="Número de celular" title="Tipo de cuenta" />
            <ListItem text="**** **** **** 6709" title="Número de cuenta" />
            <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
            <ListItem text="Gastón 32" title="Alias" />
            <ListItem text="Número de celular" title="Límite de operación" />
            <ListItem text="GRJL20031485MV2" title="RFC" />
            <ListItem text="GRKL20031485MV2" title="CURP" />
          </div>
          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="sm">
              token
            </Typography>
            <div>
              <Form onSubmit={() => null}>
                <InputForm label="" name="name" placeholder="000000" />
              </Form>
            </div>
            <div className="flex flex-row mt-6 space-x-2 gap-[20px] justify-evenly">
              <Button
                height="h-[60px] max-h-[60px]"
                onClick={onClose}
                text="Cancelar"
                type="submit"
                variant="grey"
              />
              <Button
                height="h-[60px] max-h-[60px]"
                onClick={handleContinueClick}
                text="Aceptar"
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
              El destinatario se ha actualizado exitosamente
            </Typography>

            <div className="flex flex-row mt-6 space-x-2 justify-evenly">
              <Button
                height="h-[60px]"
                onClick={() => {
                  onClose();
                  setShowContent(false);
                }}
                text="Aceptar"
                type="submit"
                variant="secondary"
                width="w-2/5"
              />
            </div>
          </div>
        </>
      )}
    </ModalContainer>
  );
};

export default UploadModal;
