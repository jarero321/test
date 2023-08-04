import { Button, InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { ListItem } from './components';
import { ModalContainer } from '@/components/UI/Modal/ModalContainer';
import { useState } from 'react';
import { Close } from '@mui/icons-material';

interface ProgramPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  switchOn?: boolean;
}

const ProgramPaymentModal: React.FC<ProgramPaymentModalProps> = ({
  isOpen = false,
  onClose = () => null,
  switchOn = false,
}) => {
  const [showContent, setShowContent] = useState(false);

  const handleContinueClick = () => {
    setShowContent(true);
  };
  return switchOn ? (
    <ModalContainer
      title="Confirmación de retiro"
      handleClose={onClose}
      showContent={showContent}
      active={isOpen}
      secondaryContent={
        <>
          <div className="m-auto w-40 h-40">
            <SuccessIcon />
          </div>
          <Typography
            colors="secondary-gray"
            size="xs"
            className="text-center mt-6 mb-2"
          >
            Retiro exitoso
          </Typography>
          <div className="py-[24px] px-2 flex flex-col gap-[12px]">
            <ListItem
              text="Griselda Juárez López"
              title="Nombre del Destinatario"
            />
            <ListItem text="CLABE" title="Tipo de cuenta" />
            <ListItem text="**** **** **** 6709" title="Número de cuenta" />
            <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
            <ListItem text="$46,948.00" title="Monto a retirar" />
            <ListItem text="$2,347.40" title="Comisión" />
            <ListItem text="$375.58" title="IVA" />
            <ListItem text="$49,670.98" title="Total a retirar" />
            <ListItem text="Pago activo" title="Concepto" />
            <ListItem text="140723" title="Referencia" />
            <ListItem text="14/07/2023" title="Fecha" />
            <ListItem text="15:00 hrs" title="Hora" />
          </div>
          <div className="flex flex-row mt-4 space-x-2 justify-evenly">
            <Button
              height="h-[60px]"
              // onClick={navigate}
              text="Aceptar"
              type="submit"
              variant="secondary"
              width="w-2/5"
            />
          </div>
        </>
      }
    >
      <>
        <div className="flex w-full justify-between items-center">
          <Typography className="font-semibold" size="lg">
            Confirmacion de retiro
          </Typography>
          <div onClickCapture={onClose}>
            <Close className="color-primary-color cursor-pointer" />
          </div>
        </div>
        <div className="py-[24px] px-2 flex flex-col gap-[12px]">
          <ListItem text="Gastón Ghietto" title="Nombre del Destinatario" />
          <ListItem text="Número de celular" title="Tipo de cuenta" />
          <ListItem text="**** **** **** 6709" title="Número de cuenta" />
          <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
          <ListItem text="$46,948.00" title="Monto a retirar" />
          <ListItem text="$2,347.40" title="Comisión" />
          <ListItem text="$375.58" title="IVA" />
          <ListItem text="$49,670.98" title="Total a retirar" />
          <ListItem text="Pago activo" title="Concepto" />
          <ListItem text="140723" title="Referencia" />
          <ListItem text="14/07/2023" title="Fecha" />
          <ListItem text="15:00 hrs" title="Hora" />
        </div>

        <div className="p-6 space-y-6 text-center">
          <Typography className="text-center" size="lg" colors="primary-color">
            Token
          </Typography>
          <div>
            <InputForm type="text" label="" name="name" placeholder="000000" />
          </div>
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
      </>
    </ModalContainer>
  ) : (
    <ModalContainer
      title="Confirmación de retiro"
      handleClose={onClose}
      showContent={showContent}
      active={isOpen}
      secondaryContent={
        <>
          <div className="m-auto w-40 h-40">
            <SuccessIcon />
          </div>
          <Typography
            colors="secondary-gray"
            size="xs"
            className="text-center mt-6 mb-2"
          >
            Retiro exitoso
          </Typography>
          <div className="py-[24px] px-2 flex flex-col gap-[12px]">
            <ListItem
              text="Griselda Juárez López"
              title="Nombre del Destinatario"
            />
            <ListItem text="CLABE" title="Tipo de cuenta" />
            <ListItem text="**** **** **** 6709" title="Número de cuenta" />
            <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
            <ListItem text="$46,948.00" title="Monto a retirar" />
            <ListItem text="$2,347.40" title="Comisión" />
            <ListItem text="$375.58" title="IVA" />
            <ListItem text="$49,670.98" title="Total a retirar" />
            <ListItem text="Pago activo" title="Concepto" />
            <ListItem text="140723" title="Referencia" />
          </div>
          <div className="flex flex-row mt-4 space-x-2 justify-evenly">
            <Button
              height="h-[60px]"
              // onClick={navigate}
              text="Aceptar"
              type="submit"
              variant="secondary"
              width="w-2/5"
            />
          </div>
        </>
      }
    >
      <>
        <div className="flex w-full justify-between items-center">
          <Typography className="font-semibold" size="lg">
            Confirmacion de retiro
          </Typography>
          <div onClickCapture={onClose}>
            <Close className="color-primary-color cursor-pointer" />
          </div>
        </div>
        <div className="py-[24px] px-2 flex flex-col gap-[12px]">
          <ListItem text="Gastón Ghietto" title="Nombre del Destinatario" />
          <ListItem text="Número de celular" title="Tipo de cuenta" />
          <ListItem text="**** **** **** 6709" title="Número de cuenta" />
          <ListItem text="BBVA Bancomer" title="Institución Bancaria" />
          <ListItem text="$46,948.00" title="Monto a retirar" />
          <ListItem text="$2,347.40" title="Comisión" />
          <ListItem text="$375.58" title="IVA" />
          <ListItem text="$49,670.98" title="Total a retirar" />
          <ListItem text="Pago activo" title="Concepto" />
          <ListItem text="140723" title="Referencia" />
        </div>

        <div className="p-6 space-y-6 text-center">
          <Typography className="text-center" size="lg" colors="primary-color">
            Token
          </Typography>
          <div>
            <InputForm type="text" label="" name="name" placeholder="000000" />
          </div>
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
      </>
    </ModalContainer>
  );
};

export default ProgramPaymentModal;
