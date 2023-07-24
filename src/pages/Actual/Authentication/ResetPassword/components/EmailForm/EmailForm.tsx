import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import BannerAuth from '../../../components/BannerAuth';
import { LayoutAuth } from '../../../components/LayoutAuth';

interface EmailProp {
  handleClick: () => void;
}

const EmailForm = ({ handleClick }: EmailProp) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    handleClick();
    return data;
  };

  return (
    <LayoutAuth bannerAuth={<BannerAuth />}>
      <div className="w-full h-full flex xl:items-center xl:justify-center">
        <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
          <div className="h-full px-[50px] pb-[50px] flex flex-col gap-[20px]">
            <Typography
              className="xl:!text-[30px] 2xl:!text-[40px]"
              colors="primary-color"
              size="base"
            >
              Recuperar Contraseña
            </Typography>
            <Form
              className="flex flex-col gap-[30px]"
              id="email_form"
              onSubmit={onSubmit}
            >
              <div className="pt-[15px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="flex gap-[20px]">
                <Button
                  height="h-[60px]"
                  text="Cancelar"
                  type="button"
                  variant="grey"
                />
                <Button
                  height="h-[60px]"
                  id="email_form"
                  text="Aceptar"
                  type="submit"
                  variant="secondary"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default EmailForm;
