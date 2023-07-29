/* eslint-disable react/prop-types */
import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useNavigate } from 'react-router-dom';

interface SaverBeneficierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SaveBeneficierModal: React.FC<SaverBeneficierModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  const navigate = useNavigate();

  return (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Alta Nuevo Beneficiario"
      textButton="Agregar Beneficiario"
      navigate={() => navigate('/dashboard/configuracion')}
      content={
        <>
          <div>
            <Typography className="text-gray-600" colors="black" size="xs">
              Ingrese tú token para confirmar el alta del Beneficiario:
            </Typography>
          </div>
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
            El beneficiario ha sido dado de alta exitosamente
          </Typography>
        </>
      }
    />
  );
};

export default SaveBeneficierModal;
