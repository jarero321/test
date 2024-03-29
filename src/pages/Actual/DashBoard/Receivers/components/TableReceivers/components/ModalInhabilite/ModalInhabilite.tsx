/* eslint-disable react/prop-types */
import { Button, Form, InputForm, Typography } from '@/components';
import { ModalContainer } from '@/components/UI/Modal/ModalContainer';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';

interface ModalInhabiliteProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalInhabilite: React.FC<ModalInhabiliteProps> = ({
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
      title="Inhabilitar destinatario"
    >
      {!showContent ? (
        <>
          {/* Modal Body */}
          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="sm">
              ¿Estás seguro de inhabilitar al siguiente destinatario?
            </Typography>
            <div>
              <Form onSubmit={() => null}>
                <InputForm
                  label=""
                  name="name"
                  placeholder="Griselda Juárez López"
                />
              </Form>
            </div>
            <Typography className="text-center" size="sm">
              token
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
              El destinatario se ha inhabilitado exitosamente
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
    </ModalContainer>
  );
};

export default ModalInhabilite;
