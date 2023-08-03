import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { ListItem } from './components';

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
  return switchOn ? (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmación de retiro"
      textButton="Confirmar"
      navigate={onClose}
      content={
        <>
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
            <Typography className="text-center" size="lg">
              Token
            </Typography>
            <div>
              <InputForm
                type="text"
                label=""
                name="name"
                placeholder="000000"
              />
            </div>
          </div>
        </>
      }
      contentNext={
        <>
          <div className="m-auto w-40 h-40">
            <SuccessIcon />
          </div>
          <Typography colors="grey" size="xs">
            Retiro exitoso
          </Typography>
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
        </>
      }
    />
  ) : (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmación de retiro"
      textButton="Confirmar"
      navigate={onClose}
      content={
        <>
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
            <Typography className="text-center" size="lg">
              Token
            </Typography>
            <div>
              <InputForm
                type="text"
                label=""
                name="name"
                placeholder="000000"
              />
            </div>
          </div>
        </>
      }
      contentNext={
        <>
          <div className="m-auto w-40 h-40">
            <SuccessIcon />
          </div>
          <Typography colors="grey" size="xs">
            Retiro exitoso
          </Typography>
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
        </>
      }
    />
  );
};

export default ProgramPaymentModal;
