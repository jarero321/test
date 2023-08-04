/* eslint-disable react/prop-types */
import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import { UploadDocumentSmall } from '@/components';
import SuccessIcon from '@/resources/icons/SuccessIcon';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({
  isOpen = false,
  onClose = () => null,
}) => {
  return (
    <ModalToken
      content={
        <>
          <div>
            <Typography className="text-gray-600" colors="black" size="xs">
              Nombre completo
            </Typography>
            <InputForm
              label=""
              name="name"
              placeholder="Luis Miguel Saavedra Hernánez"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Parentesco
            </Typography>
            <InputForm
              label=""
              name="relationship"
              placeholder="Madre, Padre, Hijo, Esposa ..."
              type="text"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Porcentaje
            </Typography>
            <InputForm
              label=""
              name="percentage"
              placeholder="Defina un porcentaje"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Identificacion oficial
            </Typography>

            <UploadDocumentSmall index={1} title="Solo INE" />
          </div>
          <div className="mt-4">
            <Typography className="text-gray-600" colors="black" size="xs">
              Comprobante de domicilio
            </Typography>
            <UploadDocumentSmall index={2} title="No mayor a tres meses" />
          </div>

          <div className="p-6 space-y-6 text-center">
            <Typography className="text-center" size="lg">
              Token 2fa
            </Typography>
            <div>
              <InputForm
                label=""
                name="name"
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
            El beneficiario ha sido actualizado exitosamente
          </Typography>
        </>
      }
      isOpen={isOpen}
      navigate={onClose}
      onClose={onClose}
      textButton="Actualizar"
      title="Editar Beneficiario"
    />
  );
};

export default UploadModal;
