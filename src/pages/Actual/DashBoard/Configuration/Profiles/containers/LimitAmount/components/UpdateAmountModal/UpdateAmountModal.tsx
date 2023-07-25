import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';

interface UpdateAmountModalProps {
  isOpen: any;
  onClose: () => void;
}

const UpdateAmountModal: React.FC<UpdateAmountModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  return (
    <div className="z-50">
      <ModalToken
        isOpen={isOpen}
        onClose={onClose}
        title="Monto límite"
        textButton="Actualizar"
        content={
          <>
            <Typography className="text-gray-600" colors="black" size="xs">
              Ingrese tú 2FA para confirmar la actualización del monto límite:
            </Typography>
            <div className="p-6 space-y-6 text-center">
              <Typography className="text-center" size="lg">
                Token 2fa
              </Typography>
              <div>
                <InputForm label="" name="token" placeholder="000000" />
              </div>
            </div>
          </>
        }
        contentNext={
          <>
            <div className="m-auto w-40 h-40">
              <SuccessIcon />
            </div>
            <Typography className="text-center" colors="black" size="sm">
              El monto ha sido dado de alta exitosamente
            </Typography>
          </>
        }
      />
    </div>
  );
};

export default UpdateAmountModal;
