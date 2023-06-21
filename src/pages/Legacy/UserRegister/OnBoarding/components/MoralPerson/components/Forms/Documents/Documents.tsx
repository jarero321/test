import { Button, Form, Typography } from '@/components';
import { UploadDocument } from '@/components/UI/UploadDocument';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OtherPersonDataForm: React.FC = () => {
  const navigate = useNavigate();

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
        A continuación carga los siguientes documentos: SOL
      </Typography>
      <div className="w-full flex">
        <Form
          className="w-full mt-[40px] grid grid-cols-2 gap-[30px] "
          id="documents"
          onSubmit={(data) => {
            // eslint-disable-next-line no-console
            console.log(data);
            navigate('/tablero');
          }}
        >
          <UploadDocument index={1} title="Acta constitutiva" />
          <UploadDocument
            description="(No mayor a 3 meses) Cuenta CLABE a nombre de persona moral"
            index={2}
            title="Estado de cuenta bancario"
          />
          <UploadDocument
            index={3}
            title="Boleta de inscripción en el RPPC"
            description="Este documento ya viene incluido en acta constituiva"
          />

          <UploadDocument
            description="Este documento ya viene incluido en acta constituiva"
            index={4}
            title="Poderes del representante legal"
          />
          <UploadDocument
            description="(No mayor a 3 meses)"
            index={4}
            title="Constancia de situación fiscal"
          />
          <UploadDocument
            description="Del representante legal"
            index={4}
            title="Identificación oficial"
          />
          <UploadDocument
            description="(No mayor a 3 meses)"
            index={4}
            title="Comprobante de domicilio"
          />
          <UploadDocument
            description="(RFC) del representante legal"
            index={4}
            title="Cédula de Identificación Fiscal"
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
