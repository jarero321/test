import { useState } from 'react';
import { Button, InputForm, Typography, Form } from '@/components';
import { ModalToken } from '@/components/UI/Modal/ModalToken';
import { UploadDocument } from '@/components/UI/UploadDocument';
import SuccessIcon from '@/resources/icons/SuccessIcon';

const EditAddressForm: React.FC = () => {
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
        <div className="w-full gap-[20px] grid grid-cols-1 items-center mb-6">
          <div className="font-bold">
            <Typography size="lg">Editar Dirección</Typography>
          </div>
        </div>

        <div className="w-full gap-[20px] grid grid-cols-2 items-center">
          <div>
            <Typography colors="secondary-gray" size="xs">
              Código Postal
            </Typography>
            <InputForm label="" name="zipcode" placeholder="03900" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Calle
            </Typography>
            <InputForm
              label=""
              name="street"
              placeholder="Avenida Manuel Ávila Camacho"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Número exterior
            </Typography>
            <InputForm label="" name="externalNumber" placeholder="502" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Número interior
            </Typography>
            <InputForm label="" name="internalNumber" placeholder="203" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              País
            </Typography>
            <InputForm label="" name="country" placeholder="México" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Estado o Entidad Federativa
            </Typography>
            <InputForm label="" name="state" placeholder="Ciudad de México" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Alcaldía o Municipio
            </Typography>
            <InputForm label="" name="delegation" placeholder="Benito Juárez" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Colonia
            </Typography>
            <InputForm
              label=""
              name="neighborhood"
              placeholder="San Pedro de los Pinos"
            />
          </div>
          <div>
            <UploadDocument
              description="(No mayor a 3 meses)"
              index={2}
              title="Comprobante de domicilio"
            />
          </div>
          <div></div>
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
              text="Actualizar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
        <ModalToken
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Editar Dirección"
          textButton="Confirmar"
          content={
            <>
              <div className="text-center">
                <Typography className="text-gray-600" colors="black" size="xs">
                  Ingrese tú 2FA para confirmar el cambio de dirección:
                </Typography>
              </div>
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
                Tu solicitud ha sido enviada. <br /> En cuanto se apruebe te
                llegará un correo de notificación.
              </Typography>
            </>
          }
        />
      </Form>
    </div>
  );
};

export default EditAddressForm;
