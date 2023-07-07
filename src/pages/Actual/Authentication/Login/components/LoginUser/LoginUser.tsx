import { Button, InputForm, Typography } from '@/components';
import { Form } from '@/components/UI/Form';
import Logo from '@/resources/img/logo/logo.png';
import { Link } from 'react-router-dom';
import BannerAuth from '../../../components/BannerAuth';

interface LoginProps {
  // eslint-disable-next-line no-unused-vars
  setState: (value: string) => void;
}
const LoginUser = ({ setState }: LoginProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (_data: any) => {
    setState('loginPassword');
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
              Bienvenido
            </Typography>
            <Form id="form-email" onSubmit={onSubmit}>
              <div className="pt-[15px]">
                <InputForm
                  inputMode="email"
                  label="Correo electrónico"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="mt-[30px]">
                <Button
                  height="h-[60px]"
                  id="form-email"
                  text="Iniciar sesion"
                  type="submit"
                  variant="secondary"
                />
              </div>
              <Link to="/autenticacion/registrar-usuario">
                <Typography
                  className="w-full flex justify-center xl:!text-[16px] mt-[12px] cursor-pointer lg:!text-[12px]"
                  colors="secondary-color"
                  size="sm"
                >
                  Aún no tengo cuenta
                </Typography>
              </Link>
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

export default LoginUser;
