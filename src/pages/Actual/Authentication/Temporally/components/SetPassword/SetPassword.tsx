import { Button, Form, InputPassword, Typography } from '@/components';
import React from 'react';

interface setStep {
  setStep: () => void;
}

const SetPassword: React.FC<setStep> = ({ setStep }) => {
  return (
    <div className="h-full w-full max-h-screen justify-center flex flex-col gap-[14px] max-w-[350px] 2xl:w-[450px] 2xl:max-w-[500px] ">
      <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
        <div className="w-full pb-[50px] gap-[40px]">
          <Typography
            className="xl:!text-[30px] 2xl:!text-[40px]"
            colors="primary-color"
            size="base"
          >
            Contraseña temporal
          </Typography>
          <Form id="form-temporal" onSubmit={() => setStep()}>
            <div className="pt-[15px]">
              <InputPassword
                label="Contraseña temporal"
                name="temporalPassword"
                required
                type="password"
              />
            </div>
            <div className="mt-[25px] flex gap-[30px]">
              <Button
                height="h-[60px]"
                id="form-temporal"
                text="Cancelar"
                type="button"
                variant="grey"
              />
              <Button
                height="h-[60px]"
                id="form-temporal"
                text="Continuar"
                type="submit"
                variant="secondary"
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
