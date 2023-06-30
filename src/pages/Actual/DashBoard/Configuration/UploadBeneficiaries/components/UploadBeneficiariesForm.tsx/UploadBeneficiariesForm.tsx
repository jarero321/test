import { Button, Form, InputForm, SelectForm, Typography } from '@/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UploadReceiversForm: React.FC = () => {
  const navigate = useNavigate();
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
            <Typography colors="secondary-gray" size="xs">
              Curp (Opcional)
            </Typography>
            <InputForm label="" name="name" placeholder="18 caracteres" />
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
              onClick={() => navigate('/dashboard/destinatarios')}
              text="Guardar"
              type="submit"
              variant="secondary"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UploadReceiversForm;
