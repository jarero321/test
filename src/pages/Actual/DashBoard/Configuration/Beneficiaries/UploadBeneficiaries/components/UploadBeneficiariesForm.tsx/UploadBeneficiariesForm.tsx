import { Button, Form, InputForm, Typography } from '@/components';
import { useState } from 'react';
import { ModalBeneficier } from '../ModalBeneficier';
import { UploadDocument } from '@/components/UI/UploadDocument';

const UploadReceiversForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] px-[20px] py-[20px]">
      <Form
        className="w-full mt-[20px]"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[20px] grid grid-cols-2 items-center">
          <div>
            <Typography colors="secondary-gray" size="xs">
              Nombre Completo
            </Typography>
            <InputForm label="" name="name" placeholder="" />
          </div>
          <div></div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Parentesco
            </Typography>
            <InputForm
              label=""
              name="name"
              placeholder="Madre, Padre, Hijo, Esposo..."
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Porcentaje
            </Typography>
            <InputForm
              label=""
              name="name"
              placeholder="Define tu porcentaje"
            />
          </div>
          <div>
            <UploadDocument
              description="Identificación vigente (Solo INE)"
              index={1}
              title="Identificación oficial"
            />
          </div>
          <div>
            <UploadDocument
              description="No mayor a 3 meses"
              index={2}
              title="Comprobante de domicilio"
            />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[40px] ">
          <div className="w-[40%] flex gap-[50px] ">
            <Button
              height="h-[60px]"
              text="Cancelar"
              type="submit"
              variant="grey"
            />
            <Button
              height="h-[60px]"
              onClick={openModal}
              text="Guardar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
        <ModalBeneficier isOpen={isModalOpen} onClose={closeModal} />
      </Form>
    </div>
  );
};

export default UploadReceiversForm;
