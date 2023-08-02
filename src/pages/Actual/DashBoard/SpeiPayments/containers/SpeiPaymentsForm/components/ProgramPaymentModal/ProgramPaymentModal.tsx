import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';

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
      textButton="Actualizar"
      navigate={onClose}
      content={
        <>
          <div>
            <Typography className="text-gray-600" colors="black" size="xs">
              Nombre completo
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Luis Miguel Saavedra Hernánez"
              name="name"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Parentesco
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Madre, Padre, Hijo, Esposa ..."
              name="relationship"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Porcentaje
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Defina un porcentaje"
              name="percentage"
            />
          </div>

          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="lg">
              Token 2fa
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
          <Typography className="text-center" colors="black" size="sm">
            El beneficiario ha sido actualizado exitosamente
          </Typography>
        </>
      }
    />
  ) : (
    <ModalToken
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmación de retiro 2"
      textButton="Actualizar"
      navigate={onClose}
      content={
        <>
          <div>
            <Typography className="text-gray-600" colors="black" size="xs">
              Nombre completo
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Luis Miguel Saavedra Hernánez"
              name="name"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Parentesco
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Madre, Padre, Hijo, Esposa ..."
              name="relationship"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Porcentaje
            </Typography>
            <InputForm
              type="text"
              label=""
              placeholder="Defina un porcentaje"
              name="percentage"
            />
          </div>

          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="lg">
              Token 2fa
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
          <Typography className="text-center" colors="black" size="sm">
            El beneficiario ha sido actualizado exitosamente
          </Typography>
        </>
      }
    />
  );
};

export default ProgramPaymentModal;
