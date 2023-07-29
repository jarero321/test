import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import NotSuccessIcon from '@/resources/icons/NotSuccessIcon';
import SuccessIcon from '@/resources/icons/SuccessIcon';

interface ModalDeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  return (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Eliminar Beneficiario"
      textButton="Aceptar"
      navigate={onClose}
      content={
        <>
          <div>
            <Typography
              className="text-gray-600 text-center"
              colors="black"
              size="xs"
            >
              ¿ Estás seguro de eliminar el siguiente Beneficiario ?
            </Typography>
            <div className="mt-4">
              <InputForm
                label=""
                name="beneficier"
                placeholder="Christopher U. Mariscal Alcauter"
                type="text"
              />
            </div>
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
            <NotSuccessIcon />
          </div>
          <Typography className="text-center" colors="black" size="sm">
            El Beneficiaio ha sido eliminado exitosamente
          </Typography>
        </>
      }
    />
  );
};

export default ModalDelete;
