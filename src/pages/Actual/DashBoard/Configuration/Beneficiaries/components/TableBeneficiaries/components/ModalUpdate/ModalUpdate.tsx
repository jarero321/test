/* eslint-disable react/prop-types */
import { InputForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import { UploadDocument } from '@/components/UI/UploadDocument';
import { UploadDocumentSmall } from '@/components/UI/UploadDocumentSmall';
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
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Beneficiario"
      textButton="Actualizar"
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

export default UploadModal;
