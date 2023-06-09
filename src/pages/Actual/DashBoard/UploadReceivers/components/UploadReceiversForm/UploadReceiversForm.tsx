import { Button, Form, InputForm, SelectForm, Typography } from '@/components';
import React from 'react';

const UploadReceiversForm: React.FC = () => {
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
              Cuenta o Contrato
            </Typography>
            <SelectForm label="" name="name" options={[]} placeholder="1-356" />
          </div>
          <div></div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Nombre Completo
            </Typography>
            <InputForm label="" name="name" placeholder="" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Alias
            </Typography>
            <InputForm label="" name="name" placeholder="Alias" />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Tipo de cuenta
            </Typography>
            <SelectForm
              label=""
              name="name"
              options={[]}
              placeholder="Seleccione una opción"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Cuenta
            </Typography>
            <InputForm
              label=""
              name="name"
              placeholder="CLABE, número de tarjeta o número de teléfono"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Banco o Institución
            </Typography>
            <SelectForm
              label=""
              name="name"
              options={[]}
              placeholder="Seleccione una opción"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              Limite de operación
            </Typography>
            <InputForm
              label=""
              name="name"
              placeholder="Define un monto límite de operación"
            />
          </div>
          <div>
            <Typography colors="secondary-gray" size="xs">
              RFC con homoclave (Opcional)
            </Typography>
            <InputForm label="" name="name" placeholder="13 caracteres" />
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
              text="Continuar"
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
