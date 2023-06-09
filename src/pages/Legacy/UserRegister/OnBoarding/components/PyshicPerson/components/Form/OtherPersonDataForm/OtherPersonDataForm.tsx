import { Button, DatePicker, Form, InputForm, Typography } from '@/components';
import { SelectForm } from '@/components/UI/SelectForm';
import React, { useState } from 'react';

interface FormValues {
  birthDate: Date;
}

const OtherPersonDataForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    birthDate: new Date(),
  });

  const handleDateChange = (date: Date) => {
    setFormValues({
      ...formValues,
      birthDate: date,
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="w-full h-full py-[50px] px-[50px]">
      <div className="w-full flex items-center justify-center">
        <Typography className="font-semibold w-full" size="base">
          Datos Personales del Propietario Legal
        </Typography>
        <div className="w-full flex justify-end">
          <div className="w-[30%]">
            <Button height="h-[60px]" text="Guardar" type="submit" />
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-color h-[1px] mt-[20px] opacity-[0.5] " />
      <Typography className="mt-[20px]" colors="secondary-gray" size="xs">
        Rellena los campos con la información requerida
      </Typography>
      <div className="w-full flex">
        <Form
          className="w-full mt-[40px]"
          onSubmit={(data) => {
            return data;
          }}
        >
          <div className="w-full gap-[40px] grid grid-cols-2 items-center">
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                CURP
              </Typography>
              <InputForm label="" name="curp" placeholder="18 caracteres" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Nombre (s)
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="firstName"
                placeholder="Luis Carlos"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Primer apellido
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="lastName"
                placeholder="Hernandez"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Segundo apellido (Opcional)
              </Typography>

              <InputForm
                className="mt-[20px]"
                label=""
                name="secondName"
                placeholder="Saavedra"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Fecha de nacimiento
              </Typography>
              <DatePicker
                handleDateChange={handleDateChange}
                selectedDate={formValues.birthDate}
                withPortal
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                País de nacimiento
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Estado
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                options={[]}
                placeholder="Elige una opción"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Género
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                options={[]}
                placeholder="Elige una opción"
              />
            </div>

            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Nacionalidad
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Mexicana"
              />
            </div>
            <div className="h-[70px]" />
            <div className="w-full">
              <Typography size="xs">Actividad</Typography>
            </div>
            <div className="w-full" />
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Ocupación
              </Typography>
              <InputForm label="" name="name" placeholder="Software Engineer" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Giro
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="giro"
                options={[]}
                placeholder="Tech"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Actividad
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="lastName"
                options={[]}
                placeholder="Desarrollar"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                RFC con homoclave
              </Typography>
              <InputForm label="" name="name" placeholder="13 caracteres" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Firma electrónica avanzada
              </Typography>
              <InputForm label="" name="name" placeholder="13 caracteres" />
            </div>
            <div className="h-[70px]" />
            <div className="w-full">
              <Typography size="xs">Actividad</Typography>
            </div>
            <div className="w-full" />
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Código Postal
              </Typography>
              <InputForm label="" name="name" placeholder="0390" />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Calle
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="firstName"
                placeholder="Avenida Manuel Camacho"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número exterior
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="lastName"
                placeholder="502"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número interior
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="birthDay"
                placeholder="203"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                País
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="country"
                placeholder="México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Estado o Entidad Federativa
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="nacionality"
                placeholder="Ciudad de México"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Alcaldía o municipio
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="Las lomas"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Colonia
              </Typography>
              <SelectForm
                className="mt-[20px]"
                label=""
                name="genre"
                options={[]}
                placeholder="San Pedro de los Pinos"
              />
            </div>
            <div className="w-full">
              <Typography size="xs">Contacto</Typography>
            </div>
            <div className="w-full" />
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Número de telefóno celular
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="10 dígitos"
              />
            </div>
            <div className="h-[70px]">
              <Typography
                className="pb-[5px]"
                colors="secondary-gray"
                size="xs"
              >
                Correo electrónico
              </Typography>
              <InputForm
                className="mt-[20px]"
                label=""
                name="stateOfBirth"
                placeholder="correo@dominio.com"
              />
            </div>
          </div>
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
