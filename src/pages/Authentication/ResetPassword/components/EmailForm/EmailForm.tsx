import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import BannerAuth from '@/pages/Authentication/Login/components/BannerAuth';
import Logo from '@/resources/img/logo/logo.png';

const EmailForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    return data;
  };

  return (
    <div className="w-full h-screen">
      <img
        alt="logo paycode"
        className="w-[185px] absolute top-[60px] left-[60px] "
        src={Logo}
      />
      <div className="w-full h-full flex xl:items-center xl:justify-center">
        <div className="w-full flex xl:items-center xl:justify-center lg:pt-[200px] xl:pt-0 lg:justify-center ">
          <div className="2xl:w-[60%] lg:w-[90%] h-full px-[50px] pb-[50px] gap-[40px] ">
            <Typography
              className="head-primary py-[10px] font-semibold xl:!text-[40px] lg:!text-[32px]"
              colors=""
              size="base"
            >
              Recuperar Contraseña
            </Typography>
            <Form className="flex flex-col gap-[20px]" onSubmit={onSubmit}>
              <div className="pt-[15px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="mt-[30px] flex gap-[20px]">
                <Button
                  height="h-[60px]"
                  text="Cancelar"
                  type="submit"
                  variant="grey"
                />
                <Button
                  height="h-[60px]"
                  text="Aceptar"
                  type="submit"
                  variant="secondary"
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="w-full h-full">
          <BannerAuth />
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
