import { Button, Form, Typography } from '@/components';
import { UploadDocument } from '@/components';
import React from 'react';

const OtherPersonDataForm: React.FC = () => {
  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold w-full" size="base">
          Documentación
        </Typography>
        <div className="w-full flex justify-end">
          <div className="w-[30%]">
            <Button height="h-[60px]" text="Guardar" type="submit" />
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
      <Typography className="mt-[20px]" colors="secondary-gray" size="xs">
        A continuación carga los siguientes documentos:
      </Typography>
      <div className="w-full flex">
        <Form
          className="w-full mt-[40px] grid grid-cols-2 gap-[30px] "
          id="documents"
          onSubmit={(data) => {
            // eslint-disable-next-line no-console
            console.log(data);
          }}
        >
          <UploadDocument index={1} title="Identificación oficial" />
          <UploadDocument
            description="No mayor a 3 meses"
            index={2}
            title="Comprobante de domicilio"
          />
          <UploadDocument
            index={3}
            title="Contancia de la Clave Única de Registro de Población (CURP)"
          />
          <UploadDocument
            description="(No mayor a 3 meses)"
            index={4}
            title="Constancia de Situación Fiscal "
          />
          <UploadDocument
            description="No mayor a 3 meses"
            index={5}
            title="Estado de cuenta bancario"
          />
        </Form>
      </div>
      <div className="w-full flex justify-end mt-[80px] ">
        <div className="w-[40%] flex gap-[50px] ">
          <Button
            height="h-[60px]"
            text="Anterior"
            type="submit"
            variant="secondary"
          />
          <Button
            height="h-[60px]"
            id="documents"
            text="Siguiente"
            type="submit"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherPersonDataForm;
