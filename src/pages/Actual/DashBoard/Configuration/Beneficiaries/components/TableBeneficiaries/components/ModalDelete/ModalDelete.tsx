import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
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
    <div className="z-50">
      <ModalToken
        isOpen={isOpen}
        onClose={onClose}
        title="Eliminar Beneficiario"
        textButton="Aceptar"
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
            <div className="mt-8">
              <Typography className="text-center" size="sm">
                Token 2fa
              </Typography>
              <div className="mt-4">
                <InputForm
                  label=""
                  name="token"
                  placeholder="000000"
                  type="text"
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
            <Typography className="text-center" colors="black" size="sm">
              El monto ha sido dado de alta exitosamente
            </Typography>
          </>
        }
      />
    </div>
  );
};

export default ModalDelete;
