import { Button, InputForm, SelectForm, Typography } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import SuccessIcon from '@/resources/icons/SuccessIcon';
import { useState } from 'react';

function UpdateReceiver() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-auto h-[150px] bg-[#F8F8FA] rounded-[12px] px-[24px] py-[24px] flex justify-between">
      <div className="flex-shrink-0 whitespace-nowrap">
        <div className="font-bold mb-4">
          <Typography size="sm">
            Destinatario con primer descuento en SPEI
          </Typography>
        </div>

        <div className="flex items-center">
          <Typography className="mt-[12px]" colors="black" size="xs">
            Miguel Angel Zavala Murillo
          </Typography>
          <div className="ml-20">
            <Button
              width="w-[120px]"
              height="h-[40px]"
              onClick={openModal}
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
            <ModalToken
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Destinatario SPEI"
              textButton="Aceptar"
              content={
                <>
                  <Typography
                    className="text-gray-600"
                    colors="black"
                    size="xs"
                  >
                    Selecciona un nuevo destinatario para descueto SPEI
                  </Typography>
                  <SelectForm
                    name="receiver"
                    placeholder="Griselda Juárez López"
                    options={[]}
                  />
                  <div className="p-6 space-y-6 text-center">
                    <Typography className="text-center" size="lg">
                      Token 2fa
                    </Typography>
                    <div>
                      <InputForm label="" name="name" placeholder="000000" />
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
                    El destinatario SPEI ha sido realizado exitosamente. <br />{' '}
                    Podrás usarlo a partir del siguiente día hábil.
                  </Typography>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateReceiver;
