import { Button, Form, InputForm, SelectForm } from '@/components';
import React from 'react';
import { UploadModal } from '../UploadModal';
import { useNavigate } from 'react-router-dom';
import { GridTextForm } from '@/components/UI/GridTextForm';

const UploadReceiversForm: React.FC = () => {
  const [activeModal, setActiveModal] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-[12px] flex gap-[30px] px-[40px] py-[40px] !pt-[20px]">
      <Form
        className="w-full"
        onSubmit={(data) => {
          return data;
        }}
      >
        <div className="w-full gap-[40px] grid grid-cols-2 items-center">
          <GridTextForm text="Cuenta o Contrato">
            <SelectForm label="" name="name" options={[]} placeholder="1-356" />
          </GridTextForm>
          <div></div>
          <GridTextForm text="Nombre Completo">
            <InputForm label="" name="name" placeholder="" />
          </GridTextForm>
          <GridTextForm text="Alias">
            <InputForm label="" name="name" placeholder="Alias" />
          </GridTextForm>
          <GridTextForm text="Tipo de cuenta">
            <SelectForm
              label=""
              name="name"
              options={[]}
              placeholder="Seleccione una opción"
            />
          </GridTextForm>
          <GridTextForm text="Cuenta">
            <InputForm
              label=""
              name="name"
              placeholder="CLABE, número de tarjeta o número de teléfono"
            />
          </GridTextForm>
          <GridTextForm text="Banco o Institución">
            <SelectForm
              label=""
              name="name"
              options={[]}
              placeholder="Seleccione una opción"
            />
          </GridTextForm>
          <GridTextForm text="Limite de operación">
            <InputForm
              label=""
              name="name"
              placeholder="Define un monto límite de operación"
            />
          </GridTextForm>
          <GridTextForm text="RFC con homoclave (Opcional)">
            <InputForm label="" name="name" placeholder="13 caracteres" />
          </GridTextForm>
          <GridTextForm text="Curp (Opcional)">
            <InputForm label="" name="name" placeholder="18 caracteres" />
          </GridTextForm>
        </div>
        <div className="w-full flex justify-end mt-[50px]">
          <div className="xl:w-[50%] 2xl:w-[40%] flex xl:gap-[30px] 2xl:gap-[50px] ">
            <Button
              height="xl:h-[50px] 2xl:h-[60px]"
              text="Cancelar"
              type="submit"
              variant="grey"
            />
            <Button
              height="xl:h-[50px] 2xl:h-[60px]"
              onClick={() => {
                setActiveModal(true);
              }}
              text="Continuar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
      </Form>
      <UploadModal
        isOpen={activeModal}
        onClose={() => navigate('/dashboard/destinatarios')}
      />
    </div>
  );
};

export default UploadReceiversForm;
